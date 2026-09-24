export interface PillarInfo {
  id: string;
  name: string;
  shortDesc: string;
  coachingRole: string;
  actionIdeas: string[];
}

export interface CoachingPackage {
  id: string;
  name: string;
  sessions: string;
  format: string;
  headline: string;
  summary: string;
  idealFor: string;
  highlights: string[];
  image: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  keyTakeaway?: string;
}

export const MEKARU_DATA = {
  business: {
    legalName: "Mekaru Coaching Services LLC",
    displayName: "Mekaru Coaching",
    coachName: "Steven Mekaru, M.D., NBC-HWC",
    coachAlias: "Coach Steve",
    email: "smekaru@mekarucoaching.com",
    calendarUrl: "https://calendar.app.google/RY2Yd795UyxSZRva9",
    instagramUrl: "https://www.instagram.com/mekarucoaching/",
    presentationUrl: "https://docs.google.com/presentation/d/1wuxkOgrK68Jk95IKrhbDqr6KplhEtaRNbmU8bShUpCc/present",
    trackerPdfUrl: "/assets/Mekaru-Healthy-Action-Tracker.pdf",
    credentials: [
      { degree: "B.S.", institution: "The University of Michigan" },
      { degree: "M.D.", institution: "Wayne State University School of Medicine" },
      { degree: "Certified Health & Wellness Coach", institution: "Wellcoaches School of Coaching" },
      { degree: "National Board Certified Health & Wellness Coach (NBC-HWC)", institution: "National Board for Health and Wellness Coaching (NBHWC)" }
    ],
    credentialId: "A-3631435"
  },

  hero: {
    eyebrow: "BOARD-CERTIFIED HEALTH & WELLNESS COACHING",
    headline: "Take Control of the Healthier Life You Want to Build.",
    subheadline: "Whether you have decided it's time to live a healthier life or your doctor recommended lifestyle improvements, Coach Steve works alongside you as a personal accountability partner and co-strategist to help you create sustainable change on your own terms.",
    primaryCta: "Schedule a Complimentary Consultation",
    secondaryCta: "See How Coaching Works"
  },

  pillars: [
    {
      id: "nutrition",
      name: "Nutrition & Healthful Eating",
      shortDesc: "Fueling your body with whole-food, nourishing choices that fit your real-world daily life.",
      coachingRole: "Coach Steve helps you identify small, manageable dietary shifts that feel natural and enjoyable rather than restrictive diets. You decide what changes fit your tastes, cooking routine, and family life.",
      actionIdeas: ["Replace afternoon sugary soda with sparkling water or diet beverage", "Add one serving of berries or sliced fruit to breakfast", "Cook one extra whole-food dinner at home each week"]
    },
    {
      id: "physical-activity",
      name: "Regular Physical Activity",
      shortDesc: "Finding sustainable ways to move your body consistently and joyfully every single week.",
      coachingRole: "Rather than intimidating fitness regimes that lead to burnout, coaching focuses on building habitual momentum through small, enjoyable movement that fits your current fitness level and schedule.",
      actionIdeas: ["Take a 15–20 minute walk after dinner", "Do 5 minutes of hamstring and back stretching during morning coffee", "Take the stairs or go for a brisk midday walking break"]
    },
    {
      id: "sleep",
      name: "Restorative Sleep",
      shortDesc: "Cultivating nightly recovery, deep sleep routines, and steady daytime mental alertness.",
      coachingRole: "Together, you and Coach Steve explore your evening rhythms, screen habits, and sleep environment to design low-friction bedtime habits that help you wake up restored and energized.",
      actionIdeas: ["Power down screens by 8:30pm or 9:00pm", "Establish a wind-down book reading routine before lights out", "Aim for consistent sleep and wake hours across the week"]
    },
    {
      id: "stress-management",
      name: "Stress Management & Resilience",
      shortDesc: "Recognizing stressors and developing constructive coping responses that protect your peace.",
      coachingRole: "Coaching equips you to pause, self-reflect, and implement micro-practices for stress reduction, helping you remain centered when daily demands spike.",
      actionIdeas: ["2 minutes of deep box-breathing at 2:00pm", "Write 10 minutes in your journal before going to sleep", "Set clear boundaries around work communication in the evening"]
    },
    {
      id: "social-connection",
      name: "Positive Social Connection",
      shortDesc: "Nurturing supportive relationships and community ties that uplift your emotional wellbeing.",
      coachingRole: "Human flourishing thrives on belonging. Coaching provides space to reflect on the relationships that support your growth and craft deliberate connection habits.",
      actionIdeas: ["Call or text a friend or loved one just to check in", "Share a walk or healthy meal with a supportive companion", "Offer an intentional, genuine compliment to someone each day"]
    },
    {
      id: "substance-avoidance",
      name: "Avoiding Risky Substances",
      shortDesc: "Reducing or eliminating behaviors that undermine health, vitality, and longevity.",
      coachingRole: "Coaching offers an empathetic, judgment-free partnership to explore triggers, identify healthier substitute routines, and build accountability at your own pace.",
      actionIdeas: ["Designate alcohol-free weeknights or swap evening wine for sparkling water", "Set specific smoke-free or nicotine-free windows during the workday", "Gradually cut down late-afternoon caffeine intake"]
    }
  ] as PillarInfo[],

  workWithMe: [
    {
      title: "Client-Centered Approach",
      subtitle: "You Are in the Driver's Seat",
      description: "You are in charge of your life, and so you should be in charge of your health coaching as well. When you work with Coach Steve, you remain in full control of the agenda, the goals, and the pace.",
      image: "/assets/work-client-centered.jpg"
    },
    {
      title: "Evidence-Based Practice",
      subtitle: "Grounded in Behavioral Science",
      description: "Health and wellness coaching is a scientific discipline that draws from behavioral science, motivational interviewing, and psychology. Interventions lead to lasting, measurable lifestyle benefits.",
      image: "/assets/work-evidence-based.jpg"
    },
    {
      title: "Acceptance & Support",
      subtitle: "100% Free From Judgment",
      description: "In our work together, you will always be in a safe, compassionate environment free from criticism or scolding. Whatever your starting point, Coach Steve meets you where you are.",
      image: "/assets/work-acceptance-support.jpg"
    },
    {
      title: "Creative & Collaborative",
      subtitle: "Co-Strategists on Your Team",
      description: "You and Coach Steve are a team. Together, we brainstorm, experiment, problem-solve obstacles, and tailor realistic strategies that fit into your actual lifestyle.",
      image: "/assets/work-creative-collaborative.jpg"
    }
  ],

  packages: [
    {
      id: "jumpstart",
      name: "The Healthy Lifestyle Jumpstart",
      sessions: "3 Sessions",
      format: "One-on-One · 100% Virtual",
      headline: "Get started, refocus on your health, and reset your goals.",
      summary: "An accessible, focused entry point ideal for people who are new to health coaching or looking to reignite momentum around a specific health goal.",
      idealFor: "Ideal for new clients looking to establish clarity and build immediate early momentum.",
      highlights: [
        "Three 1-on-1 virtual sessions with Coach Steve",
        "Clarify your personal health vision and prioritize core lifestyle focus areas",
        "Design simple, specific, high-impact weekly action steps",
        "Establish personalized accountability structures between sessions",
        "Includes access to the Healthy Action Tracker framework"
      ],
      image: "/assets/package-jumpstart.jpg"
    },
    {
      id: "builder",
      name: "The Healthy Lifestyle Builder",
      sessions: "6 Sessions",
      format: "One-on-One · 100% Virtual",
      headline: "Dive deeper, develop resilience, and layer sustainable progress.",
      summary: "A sustained coaching partnership designed for clients who want to anchor comprehensive lifestyle changes, navigate plateaus, and build long-term self-management.",
      idealFor: "Perfect for clients ready to commit more fully to transforming their health journey across multiple pillars.",
      highlights: [
        "Six 1-on-1 virtual sessions tailored to your evolving pace",
        "Deep-dive into multi-pillar lifestyle habits (sleep, nutrition, movement, stress)",
        "Overcome behavioral plateaus, relapse triggers, and time-constraint obstacles",
        "Solidify sustainable habits that last far beyond the coaching relationship",
        "Direct email check-in support between scheduled sessions"
      ],
      image: "/assets/package-builder.jpg"
    }
  ] as CoachingPackage[],

  consultation: {
    title: "Complimentary 30-Minute Consultation Call",
    subtitle: "A relaxed, no-pressure conversation to explore your goals and see what health coaching feels like.",
    features: [
      "100% complimentary — no cost, no obligation",
      "30 minutes duration via private Google Meet video",
      "One-on-one directly with Coach Steve",
      "Relaxed conversation with ample time for all your questions",
      "A genuine taste of health coaching in practice",
      "By the end, you'll know your clear next step — whatever is best for you"
    ],
    steps: [
      {
        number: "01",
        title: "Schedule",
        desc: "Pick a convenient date and time on Coach Steve's direct Google Calendar scheduling page."
      },
      {
        number: "02",
        title: "Meet Coach Steve",
        desc: "Join a relaxed virtual call via Google Meet from the comfort and privacy of your home."
      },
      {
        number: "03",
        title: "Talk About Your Goals",
        desc: "Discuss what you would like to change, what you've tried before, and what a healthier life looks like for you."
      },
      {
        number: "04",
        title: "Decide What's Next",
        desc: "Zero high-pressure sales. Together, you decide whether coaching is the right fit for your goals."
      }
    ]
  },

  coachSteveStory: {
    title: "Hello! I'm Steve.",
    subtitle: "A physician who chose a different path to help people thrive.",
    bio: [
      "I am a physician who has taken a different path. After seeing firsthand how much our healthcare system struggles to support people in achieving healthier lifestyles, I felt called to leave the traditional practice of medicine and enter the world of health and wellness coaching.",
      "In standard clinical medicine, doctors are often constrained by 15-minute visits, acute symptom management, and prescribing medications. Yet the overwhelming majority of chronic illness is rooted in everyday lifestyle behaviors: how we eat, how we move, how we sleep, and how we cope with stress.",
      "I believe that flourishing and wellbeing are achievable by everyone. I love helping people take control of their lives, activate their internal strengths, and make the meaningful changes they want to make.",
      "When I am not coaching, you can find me creating art projects, playing with my dog, going for long walks, experimenting with different exercise routines, and spending quality time with my friends and family."
    ],
    scopeClarification: "Steven Mekaru holds an M.D. from Wayne State University School of Medicine, but operates Mekaru Coaching Services LLC strictly as a National Board Certified Health & Wellness Coach (NBC-HWC). He does not provide medical diagnosis, clinical treatment, medical prescriptions, or psychotherapy in his coaching practice."
  },

  faqs: [
    {
      id: "what-is-coaching",
      question: "What is health coaching?",
      answer: "Health coaching is a collaborative, client-centered partnership. As defined by the National Board for Health and Wellness Coaching (NBHWC):\n\n'National Board Certified Health & Wellness Coaches (NBC-HWC) support clients in activating internal strengths and external resources to make sustainable and healthy lifestyle behavior changes. NBC-HWCs use a client-centered approach wherein clients decide their goals, engage in self-discovery or active learning processes, and self-monitor behaviors to increase accountability, all within the context of an interpersonal relationship with a health coach.'\n\nWhatever goal you set, Coach Steve ensures you are supported with unconditional positive regard, walking alongside you on your path to your healthiest self."
    },
    {
      id: "life-vs-health",
      question: "Is health coaching the same as life coaching?",
      answer: "While life coaches provide valuable personal guidance, health coaches offer a more specialized, clinically-informed service focused specifically on physical health, wellness, and lifestyle behavior change. Health coaches are professionally recognized within the healthcare landscape and often work in alignment with healthcare providers. Furthermore, Coach Steve is board certified through the NBHWC in partnership with the National Board of Medical Examiners (NBME)—the exact same body that develops standardized medical licensing examinations for physicians."
    },
    {
      id: "what-is-it-like",
      question: "What is it like to work with a health coach?",
      answer: "Working with a health coach is a fun, energizing, and positive experience—and it is also challenging! You will be faced with deep questions to consider and new situations to navigate. Our work extends beyond our 1-on-1 virtual sessions into your daily life, where you'll be testing out small new actions, executing your self-designed plans, and building real-world momentum. To experience what it feels like firsthand, you can schedule a complimentary 30-minute consultation call."
    },
    {
      id: "will-you-tell-me",
      question: "Will you tell me what to do?",
      answer: "Never! If that is what you are looking for, health coaching is not the right place. In health coaching, you, the client, are always in charge. You set the pace, the goals, and the focus. You define what success looks like, and you determine how to proceed. Coach Steve provides guidance, structure, and accountability, but never takes control away from you. For lasting change, you need to be the one calling the shots—not simply taking orders."
    },
    {
      id: "what-will-we-work-on",
      question: "What will we work on together?",
      answer: "That is entirely up to you! Your health and wellness are your responsibility, and so are the choices about what lifestyle changes you want to make. While Coach Steve specializes in the American College of Lifestyle Medicine's 6 Pillars (nutrition, activity, sleep, stress management, social connection, and substance avoidance), we can apply behavior change methods to just about any wellness habit you desire. The focus is always on what matters most to you."
    },
    {
      id: "services-packages",
      question: "What other services or packages do you offer?",
      answer: "Coach Steve offers coaching in a variety of flexible formats and schedules that can be customized to meet your needs. All new clients begin with either the 3-session Healthy Lifestyle Jumpstart package or the 6-session Healthy Lifestyle Builder package. This gives both of us a chance to get to know each other, build initial momentum, and ensure a strong fit before tailoring ongoing support."
    },
    {
      id: "am-i-your-doctor",
      question: "Am I your doctor?",
      answer: "No. A health coach does not provide medical, mental health, or clinical nutritional/dietary services of any kind. While Steven Mekaru earned his medical degree (M.D.), through Mekaru Coaching he acts solely as an expert in behavior change and a board-certified health coach. He does not diagnose medical conditions, interpret lab tests, prescribe or de-prescribe medications, or provide psychotherapy. He provides tailored, consistent support to help you achieve the lifestyle goals you choose."
    },
    {
      id: "insurance-coverage",
      question: "Are your coaching services covered by insurance?",
      answer: "Unfortunately, no. At the present time, independent health coaches are not able to reliably bill health insurance companies directly. While the industry is working toward broader reimbursement in the future, Mekaru Coaching currently does not work directly with insurance providers or third-party payers. Sessions are self-pay, and our transparent cancellation policy provides a refund of $50 per unused session if you ever decide to terminate coaching."
    }
  ] as FaqItem[],

  actionTrackerGuide: {
    title: "Free Healthy Action Tracker",
    subtitle: "A simple, tangible tool to help you build consistency and momentum around the healthy actions that matter to you.",
    description: "An action tracker provides a boost to your motivation by visually displaying your daily effort and momentum. Keep it on your desk, your refrigerator, or on your phone.",
    steps: [
      {
        step: "Step 1",
        title: "Choose Your Area of Life",
        instruction: "Decide which area of life is calling out for change. Where would improvement be most beneficial right now?",
        categories: [
          "Physical Activity",
          "Healthy Eating",
          "Restorative Sleep",
          "Stress Management",
          "Social Connection",
          "Purpose & Meaning",
          "Avoiding Risky Substances",
          "Fun & Joy"
        ]
      },
      {
        step: "Step 2",
        title: "Create Your Action: Simple, Small & Specific",
        instruction: "The creative challenge! An effective action must be small enough to do consistently without burnout, and specific enough that you know exactly when it is accomplished.",
        rules: [
          {
            principle: "Simple & Small",
            bad: "Run a 5K or organize a huge group outing",
            good: "Take a 20-minute walk after dinner, or text a loved one to say hello",
            tip: "Oftentimes our urgency causes us to try to do too much too early. Be honest with what you are realistically willing to do."
          },
          {
            principle: "Specific",
            bad: "'Eat healthier' or 'Be more active'",
            good: "Have oatmeal with blueberries for breakfast, or take a 15-minute walk at lunch",
            tip: "Designate a specific time of day (e.g., 'at 3:00pm' or 'when I get home from work') and a set duration."
          }
        ]
      },
      {
        step: "Step 3",
        title: "Adjust as Necessary",
        instruction: "Your action is not set in stone! Do your best to stay consistent, but if an action isn't working for your lifestyle, feel free to tweak it, scale it down, or try another until you find what clicks."
      }
    ]
  },

  disclaimerPoints: [
    { title: "1. For Educational Purposes Only", text: "The information provided is for educational and informational purposes only. It is to be used as a self-help tool for your own use." },
    { title: "2. You Are Responsible for Your Own Health", text: "By interacting with the Site, you acknowledge that you are fully responsible for your own health decisions. The services or information provided by Mekaru Coaching Services LLC is not to be used as a replacement for your own judgment or advice given by licensed healthcare professionals." },
    { title: "3. Qualifications", text: "Mekaru Coaching Services LLC holds the qualification of Board-Certified Health & Wellness Coach (NBC-HWC). Mekaru Coaching Services LLC makes no representations to hold any other qualifications outside of this in its coaching capacity." },
    { title: "4. Scope of Practice", text: "Mekaru Coaching Services LLC adheres strictly to the NBHWC Scope of Practice for Health and Wellness Coaches (https://nbhwc.org/code-of-ethics-and-professional-conduct/)." },
    { title: "5. Not Professional Medical or Mental Health Advice", text: "The services provided by Mekaru Coaching Services LLC are not professional medical, mental health, or dietary/nutritional advice, nor a substitute for such advice. Services are not designed to diagnose, treat, cure or prevent any disease, pain, deformity, injury, or physical/mental condition of any kind." },
    { title: "6. Refund / Cancellation Policy", text: "If for any reason and at any time you are unhappy with the services provided, you can terminate services with written notice. You will be refunded for uncompleted coaching sessions at a rate of $50 per session. No refund is provided for completed sessions." },
    { title: "7. No Guarantees", text: "Results in health coaching are highly individual, vary from person to person, and depend on your own effort, commitment, and follow-through. Mekaru Coaching Services LLC makes no guarantees regarding specific health outcomes." },
    { title: "8. Assumption of Risk", text: "Participating in health coaching and making lifestyle changes carries known and unknown risks (including physical injury or illness). You agree to participate at your own discretion and accept sole responsibility for your safety." },
    { title: "9. No Warranties", text: "Mekaru Coaching Services LLC makes no promises that the Site or third-party scheduling/video software will always be uninterrupted or error-free." },
    { title: "10. Release, Waiver, and Indemnity", text: "You hereby release, hold harmless, indemnify and waive any claims against Mekaru Coaching Services LLC and its owners with respect to liability and damages associated with services or products sold." }
  ],

  privacyPoints: [
    { title: "Data Collected", text: "When you schedule a consultation call, we collect your name, email address, and your responses to a general onboarding questionnaire via Google Calendar appointment scheduling. This website does not sell or track your personal browsing habits." },
    { title: "Use of Data", text: "Data collected is used exclusively to communicate with you about your coaching services and understand your health goals." },
    { title: "Data Sharing", text: "We do not sell, rent, or share your personal information with third parties for marketing purposes." },
    { title: "Third Parties", text: "Services utilize Google Meet for virtual sessions and Stripe for secure payment processing. Each third party operates under its own published privacy policy." },
    { title: "Storage", text: "Data is stored securely in encrypted, password-protected cloud storage." }
  ]
};
