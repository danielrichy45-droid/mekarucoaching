import { MEKARU_DATA } from '../data/mekaruData';
import { GoogleGenAI } from '@google/genai';

export interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: Date;
  actionButtons?: { label: string; action: string; payload?: string }[];
  isBoundaryNotice?: boolean;
}

export const INITIAL_QUICK_ACTIONS = [
  { label: "🌱 What is health coaching?", action: "topic", payload: "what-is-health-coaching" },
  { label: "👤 Meet Coach Steve", action: "topic", payload: "meet-coach-steve" },
  { label: "🧭 How does coaching work?", action: "topic", payload: "how-coaching-works" },
  { label: "📅 Schedule a consultation", action: "topic", payload: "schedule-consultation" },
  { label: "📦 Explore coaching packages", action: "topic", payload: "explore-packages" },
  { label: "❓ Ask a question", action: "prompt", payload: "custom-question" },
];

const MEDICAL_DISALLOW_REGEX = /\b(diagnose|diagnosis|prescribe|prescription|cure|treatment|medication|dosage|supplement|pills|lab results|blood test|mri|cancer|diabetes cure|psychotherapy|depression meds|ssri|anxiety medication|diet plan for|meal plan for|workout routine for pain)\b/i;

const SYSTEM_INSTRUCTIONS = `
You are Coach Steve's Website Assistant for Mekaru Coaching (https://www.mekarucoaching.com/).
Your job is to assist visitors in understanding health coaching, learning about Coach Steve (Steven Mekaru, M.D., NBC-HWC), exploring the 6 Pillars of Lifestyle Medicine, reviewing coaching packages (Jumpstart 3 sessions, Builder 6 sessions), and scheduling a complimentary 30-minute consultation.

CRITICAL HEALTH SAFETY & SCOPE BOUNDARIES:
- Health and wellness coaching is for educational and self-directed habit change only.
- You must NEVER diagnose medical conditions, interpret lab test results, or diagnose mental health issues.
- You must NEVER prescribe, de-prescribe, or recommend medications, supplements, or clinical treatments.
- You must NEVER create individualized clinical meal plans or prescribe rehabilitative exercise regimens.
- You must NEVER provide psychotherapy or claim that Coach Steve acts as the visitor's medical doctor. Coach Steve holds an M.D. but practices strictly as a National Board Certified Health & Wellness Coach (NBC-HWC).
- If a user asks medical or psychiatric questions, state clearly and warmly that coaching does not provide medical care and encourage them to consult their primary care physician or licensed medical professional.
- Always be warm, supportive, empowering, client-centered, and non-judgmental.
- Offer to help them schedule a complimentary, no-pressure 30-minute virtual consultation with Coach Steve if they are interested.
`;

export async function generateAssistantResponse(
  userQuery: string,
  history: ChatMessage[]
): Promise<{ text: string; actionButtons?: { label: string; action: string; payload?: string }[]; isBoundaryNotice?: boolean }> {
  const queryLower = userQuery.toLowerCase().trim();

  // 1. Check for clinical/medical boundary violations
  if (
    MEDICAL_DISALLOW_REGEX.test(queryLower) &&
    (queryLower.includes("what should i take") ||
      queryLower.includes("diagnose") ||
      queryLower.includes("cure") ||
      queryLower.includes("interpret my") ||
      queryLower.includes("prescribe") ||
      queryLower.includes("meal plan for my") ||
      queryLower.includes("stop taking") ||
      queryLower.includes("dosage"))
  ) {
    return {
      text: "As Coach Steve's Website Assistant, I want to share an important boundary: health coaching is focused on behavior change, lifestyle habits, and client-directed goals. I cannot diagnose medical conditions, interpret lab results, prescribe medications or supplements, or offer individualized medical advice. For clinical questions or medical treatment, please consult with your physician or licensed healthcare provider.\n\nIf you have lifestyle goals you'd like to explore—like building sustainable routines around sleep, nutrition, activity, or stress management—Coach Steve would be delighted to talk with you in a complimentary consultation!",
      actionButtons: [
        { label: "📅 Schedule Consultation", action: "schedule" },
        { label: "🌱 What is Health Coaching?", action: "topic", payload: "what-is-health-coaching" },
        { label: "❓ Ask Another Question", action: "prompt" }
      ],
      isBoundaryNotice: true
    };
  }

  // 2. Check if Gemini API is available via environment
  const apiKey = (import.meta as any).env?.VITE_GEMINI_API_KEY || (typeof process !== 'undefined' ? process.env?.GEMINI_API_KEY : '');

  if (apiKey && apiKey !== 'MY_GEMINI_API_KEY') {
    try {
      const ai = new GoogleGenAI({ apiKey });
      const prompt = `
Context about Mekaru Coaching:
- Business: ${MEKARU_DATA.business.legalName}, founded by ${MEKARU_DATA.business.coachName} (Coach Steve).
- Credentials: ${MEKARU_DATA.business.credentials.map(c => `${c.degree} (${c.institution})`).join(', ')}. NBHWC Credential ID: ${MEKARU_DATA.business.credentialId}.
- Packages: 
  1. Jumpstart: 3 sessions, virtual, 1-on-1, perfect for beginners reset goals.
  2. Builder: 6 sessions, virtual, 1-on-1, dive deeper, layer resilience.
- Consultation: 100% complimentary, 30 minutes, virtual (Google Meet), relaxed, no pressure. Booking link: ${MEKARU_DATA.business.calendarUrl}.
- Email: ${MEKARU_DATA.business.email}.
- 6 Pillars: Nutrition, Physical Activity, Restorative Sleep, Stress Management, Social Connection, Avoiding Risky Substances.
- Action Tracker: Free printable PDF tool with 3-step guide (Area of life -> Small & Specific -> Adjust).
- Am I your doctor?: No. Health coaching does not provide medical treatment, diagnosis, or prescriptions.

User asked: "${userQuery}"

Provide a concise, warm, helpful answer (2-4 sentences max). If appropriate, warmly invite them to book a complimentary 30-minute consultation with Coach Steve.
`;

      const response = await ai.models.generateContent({
        model: 'gemini-3.8-flash',
        contents: prompt,
        config: {
          systemInstruction: SYSTEM_INSTRUCTIONS,
          temperature: 0.4,
          maxOutputTokens: 350
        }
      });

      const replyText = response.text || "";
      if (replyText.trim()) {
        return {
          text: replyText.trim(),
          actionButtons: [
            { label: "📅 Schedule Consultation", action: "schedule" },
            { label: "📦 View Packages", action: "navigate", payload: "#packages" },
            { label: "🌱 How It Works", action: "navigate", payload: "#work-with-me" }
          ]
        };
      }
    } catch {
      // Fall through to grounded rules engine on error
    }
  }

  // 3. Grounded Knowledge Matching Engine
  if (queryLower.includes("what is health coaching") || queryLower.includes("what is hwc") || queryLower === "what-is-health-coaching") {
    return {
      text: "Health coaching is a collaborative, client-centered process where you, the client, are in control of your goals, pace, and agenda. As a National Board Certified Health & Wellness Coach (NBC-HWC), Coach Steve serves as an accountability partner and co-strategist to help you build sustainable habits around physical activity, nutrition, restorative sleep, and stress management.\n\nUnlike traditional healthcare where you're told what to do, health coaching empowers you to decide what success looks like and how to get there.",
      actionButtons: [
        { label: "🧭 How Does Coaching Work?", action: "topic", payload: "how-coaching-works" },
        { label: "📅 Schedule a Consultation", action: "schedule" },
        { label: "👤 Meet Coach Steve", action: "topic", payload: "meet-coach-steve" }
      ]
    };
  }

  if (queryLower.includes("meet coach steve") || queryLower.includes("who is coach steve") || queryLower.includes("steve mekaru") || queryLower.includes("background") || queryLower.includes("credentials")) {
    return {
      text: "Coach Steve (Steven Mekaru, M.D., NBC-HWC) is a physician who chose to step away from traditional clinical medicine to focus entirely on health & wellness coaching. He holds a B.S. from the University of Michigan, an M.D. from Wayne State University School of Medicine, and is certified through Wellcoaches and the National Board for Health and Wellness Coaching (NBHWC Credential ID: A-3631435).\n\nHe believes flourishing and wellbeing are achievable for everyone through compassionate, evidence-based habit change.",
      actionButtons: [
        { label: "👨‍⚕️ Is Coach Steve My Doctor?", action: "topic", payload: "am-i-your-doctor" },
        { label: "📅 Book a 30-Min Discovery Call", action: "schedule" },
        { label: "📦 Explore Packages", action: "topic", payload: "explore-packages" }
      ]
    };
  }

  if (queryLower.includes("doctor") || queryLower.includes("am i your doctor") || queryLower.includes("medical advice") || queryLower.includes("prescribe")) {
    return {
      text: "No, Coach Steve is not your doctor in this relationship. While he earned his Medical Doctorate (M.D.), through Mekaru Coaching he operates solely as a board-certified health & wellness coach. He does not diagnose diseases, interpret lab tests, prescribe medications, or provide psychotherapy. Instead, he provides expert behavior change guidance and accountability for the lifestyle goals you choose to pursue.",
      actionButtons: [
        { label: "🌱 What Does Coaching Focus On?", action: "topic", payload: "what-is-health-coaching" },
        { label: "📅 Schedule Free Consultation", action: "schedule" }
      ]
    };
  }

  if (queryLower.includes("package") || queryLower.includes("jumpstart") || queryLower.includes("builder") || queryLower.includes("sessions") || queryLower.includes("price") || queryLower.includes("cost")) {
    return {
      text: "Mekaru Coaching offers two foundational one-on-one virtual packages:\n\n1. The Healthy Lifestyle Jumpstart (3 sessions): Designed to help you get started, refocus on health, and reset your goals with immediate clarity.\n2. The Healthy Lifestyle Builder (6 sessions): Designed to dive deeper, overcome plateaus, build resilience, and layer lasting habits across multiple lifestyle areas.\n\nAll packages are 100% virtual via Google Meet. If you ever need to cancel, unused sessions are refunded at $50 per session.",
      actionButtons: [
        { label: "📅 Schedule Free Consultation", action: "schedule" },
        { label: "📦 View Package Details", action: "navigate", payload: "#packages" }
      ]
    };
  }

  if (queryLower.includes("consultation") || queryLower.includes("discovery call") || queryLower.includes("schedule") || queryLower.includes("book") || queryLower.includes("appointment")) {
    return {
      text: "The Consultation Call is 100% complimentary, 30 minutes long, virtual via Google Meet, and conducted one-on-one directly with Coach Steve. It is a relaxed, friendly conversation where you can ask questions, discuss your lifestyle goals, experience what health coaching feels like, and decide on the next step with zero pressure.",
      actionButtons: [
        { label: "📅 Open Google Calendar Booking", action: "schedule" },
        { label: "🧭 Learn How Coaching Works", action: "topic", payload: "how-coaching-works" }
      ]
    };
  }

  if (queryLower.includes("how coaching works") || queryLower.includes("how does coaching work") || queryLower.includes("process") || queryLower.includes("tell me what to do")) {
    return {
      text: "In health coaching, Coach Steve will NEVER tell you what to do! You are always in the driver's seat of your life and goals. Our work rests on 4 pillars: Client-Centered Approach (you control agenda & pace), Evidence-Based Practice (grounded in behavioral psychology), Acceptance & Support (100% judgment-free environment), and Creative Collaboration (working together as a team of co-strategists).",
      actionButtons: [
        { label: "🌿 The 6 Pillars of Lifestyle Medicine", action: "navigate", payload: "#six-pillars" },
        { label: "📅 Schedule Free Consultation", action: "schedule" }
      ]
    };
  }

  if (queryLower.includes("insurance") || queryLower.includes("covered") || queryLower.includes("hsa") || queryLower.includes("fsa")) {
    return {
      text: "Currently, independent health coaches cannot directly bill health insurance companies. Mekaru Coaching services are private-pay. Coach Steve provides complete transparency with a written refund policy: if you ever decide to end coaching, uncompleted sessions are refunded at $50 each.",
      actionButtons: [
        { label: "📦 View Packages", action: "topic", payload: "explore-packages" },
        { label: "📅 Talk to Coach Steve (Free)", action: "schedule" }
      ]
    };
  }

  if (queryLower.includes("tracker") || queryLower.includes("healthy action") || queryLower.includes("habit") || queryLower.includes("download")) {
    return {
      text: "Coach Steve offers a free printable Healthy Action Tracker PDF! It's designed to boost consistency by visually displaying your daily momentum. The key is choosing actions that are small, simple, and specific (e.g., 'Take a 20-minute walk after dinner' instead of 'Run a 5K'). You can download it directly on this site!",
      actionButtons: [
        { label: "📥 Download Free Action Tracker", action: "download-tracker" },
        { label: "📋 Try Interactive Action Builder", action: "navigate", payload: "#action-tracker" }
      ]
    };
  }

  if (queryLower.includes("pillar") || queryLower.includes("lifestyle medicine") || queryLower.includes("aclm") || queryLower.includes("sleep") || queryLower.includes("stress")) {
    return {
      text: "Coach Steve specializes in the American College of Lifestyle Medicine's 6 Pillars: Nutrition, Regular Physical Activity, Restorative Sleep, Stress Management, Positive Social Connection, and Avoiding Risky Substances. In our coaching, we apply evidence-informed behavior change tools to whichever pillar matters most to you.",
      actionButtons: [
        { label: "🌿 Explore 6 Pillars Section", action: "navigate", payload: "#six-pillars" },
        { label: "📅 Schedule Consultation Call", action: "schedule" }
      ]
    };
  }

  // Default helpful response with lead generation
  return {
    text: "I'm Coach Steve's Website Assistant. I can share details on health coaching, Coach Steve's medical background and coaching philosophy, the Jumpstart & Builder packages, and the 6 Pillars of Lifestyle Medicine. If you're wondering whether coaching is right for your lifestyle goals, the best first step is a relaxed, complimentary 30-minute consultation call.",
    actionButtons: [
      { label: "📅 Schedule Complimentary Consultation", action: "schedule" },
      { label: "🌱 What is Health Coaching?", action: "topic", payload: "what-is-health-coaching" },
      { label: "👤 Meet Coach Steve", action: "topic", payload: "meet-coach-steve" },
      { label: "📦 View Coaching Packages", action: "topic", payload: "explore-packages" }
    ]
  };
}
