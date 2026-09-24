import React, { useState, useRef, useEffect } from 'react';
import { 
  X, 
  Send, 
  MessageSquare, 
  Bot, 
  User, 
  ShieldAlert, 
  Calendar, 
  ExternalLink,
  Sparkles,
  RefreshCw,
  ArrowRight
} from 'lucide-react';
import { generateAssistantResponse, ChatMessage, INITIAL_QUICK_ACTIONS } from '../services/aiAssistant';
import { MEKARU_DATA } from '../data/mekaruData';

interface AiAssistantModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenConsultation: () => void;
}

export const AiAssistantModal: React.FC<AiAssistantModalProps> = ({
  isOpen,
  onClose,
  onOpenConsultation
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      sender: 'assistant',
      text: "Hello! I'm Coach Steve's Website Assistant. I can help you learn more about health & wellness coaching, Coach Steve's medical background, the Jumpstart & Builder packages, or help you schedule a complimentary consultation. How can I assist you today?",
      timestamp: new Date(),
      actionButtons: INITIAL_QUICK_ACTIONS
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  if (!isOpen) return null;

  const handleSend = async (textToSend?: string) => {
    const query = textToSend || input;
    if (!query.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: 'user-' + Date.now(),
      sender: 'user',
      text: query,
      timestamp: new Date()
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput('');
    setIsLoading(true);

    try {
      const response = await generateAssistantResponse(query, [...messages, userMsg]);
      const assistantMsg: ChatMessage = {
        id: 'assistant-' + Date.now(),
        sender: 'assistant',
        text: response.text,
        timestamp: new Date(),
        actionButtons: response.actionButtons,
        isBoundaryNotice: response.isBoundaryNotice
      };
      setMessages((prev) => [...prev, assistantMsg]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: 'error-' + Date.now(),
          sender: 'assistant',
          text: "I don't have enough information to answer that accurately. You can contact Coach Steve directly at smekaru@mekarucoaching.com or schedule a complimentary 30-minute consultation call.",
          timestamp: new Date(),
          actionButtons: [
            { label: "📅 Schedule Consultation", action: "schedule" },
            { label: "🌱 What is Health Coaching?", action: "topic", payload: "what-is-health-coaching" }
          ]
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleActionClick = (button: { label: string; action: string; payload?: string }) => {
    if (button.action === 'schedule') {
      onClose();
      onOpenConsultation();
    } else if (button.action === 'navigate' && button.payload) {
      onClose();
      const el = document.querySelector(button.payload);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (button.action === 'download-tracker') {
      window.open('/assets/Mekaru-Healthy-Action-Tracker.pdf', '_blank');
    } else if (button.payload) {
      handleSend(button.label);
    } else {
      handleSend(button.label);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="bg-white rounded-3xl max-w-xl w-full h-[85vh] max-h-[700px] flex flex-col border border-[#15380e]/20 shadow-2xl relative overflow-hidden"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="p-4 sm:p-5 bg-[#15380e] text-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-[#e5a629]">
              <Bot className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-serif-brand text-lg font-bold text-white">
                  Coach Steve&apos;s Assistant
                </h3>
                <span className="text-[10px] font-sans-ui bg-[#e5a629] text-[#15380e] font-bold px-1.5 py-0.5 rounded">
                  AI Guide
                </span>
              </div>
              <p className="text-[11px] text-white/75">
                Mekaru Coaching Services · Grounded Knowledge
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-colors cursor-pointer"
            aria-label="Close assistant"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Safety Boundary Banner */}
        <div className="bg-[#e5a629]/15 border-b border-[#e5a629]/30 px-4 py-2 flex items-center gap-2 text-[11px] text-[#15380e] font-medium shrink-0">
          <ShieldAlert className="w-4 h-4 text-[#15380e] shrink-0" />
          <span>
            Educational only. Cannot provide medical diagnosis, clinical prescriptions, or treatment plans.
          </span>
        </div>

        {/* Messages Scroll Area */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 bg-[#FAF9F5]">
          {messages.map((msg) => {
            const isUser = msg.sender === 'user';
            return (
              <div
                key={msg.id}
                className={`flex gap-3 ${isUser ? 'justify-end' : 'justify-start'}`}
              >
                {!isUser && (
                  <div className="w-8 h-8 rounded-full bg-[#15380e] text-[#e5a629] flex items-center justify-center shrink-0 mt-1 shadow-xs">
                    <Bot className="w-4 h-4" />
                  </div>
                )}

                <div className={`max-w-[85%] sm:max-w-[80%] flex flex-col ${isUser ? 'items-end' : 'items-start'}`}>
                  <div
                    className={`p-4 rounded-2xl text-xs sm:text-sm leading-relaxed shadow-xs ${
                      isUser
                        ? 'bg-[#15380e] text-white rounded-tr-none'
                        : msg.isBoundaryNotice
                        ? 'bg-amber-50 text-[#1c1c1c] border border-amber-300 rounded-tl-none'
                        : 'bg-white text-[#1c1c1c] border border-[#15380e]/10 rounded-tl-none'
                    }`}
                  >
                    <div className="whitespace-pre-line">
                      {msg.text}
                    </div>
                  </div>

                  {/* Interactive Action Buttons if available */}
                  {!isUser && msg.actionButtons && msg.actionButtons.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {msg.actionButtons.map((btn, bIdx) => (
                        <button
                          key={bIdx}
                          onClick={() => handleActionClick(btn)}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-semibold text-[#15380e] bg-white hover:bg-[#15380e] hover:text-white border border-[#15380e]/20 rounded-lg transition-all shadow-xs cursor-pointer text-left"
                        >
                          <span>{btn.label}</span>
                        </button>
                      ))}
                    </div>
                  )}

                  <span className="text-[10px] text-[#1c1c1c]/40 mt-1 px-1">
                    {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>

                {isUser && (
                  <div className="w-8 h-8 rounded-full bg-[#e5a629] text-[#15380e] flex items-center justify-center shrink-0 mt-1 shadow-xs font-bold text-xs">
                    You
                  </div>
                )}
              </div>
            );
          })}

          {isLoading && (
            <div className="flex gap-3 justify-start">
              <div className="w-8 h-8 rounded-full bg-[#15380e] text-[#e5a629] flex items-center justify-center shrink-0 mt-1">
                <Bot className="w-4 h-4" />
              </div>
              <div className="bg-white border border-[#15380e]/10 rounded-2xl rounded-tl-none p-3.5 flex items-center gap-2 text-xs text-[#1c1c1c]/70 shadow-xs">
                <RefreshCw className="w-3.5 h-3.5 animate-spin text-[#15380e]" />
                <span>Coach Steve&apos;s Assistant is thinking...</span>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input Bar */}
        <div className="p-3 sm:p-4 bg-white border-t border-[#15380e]/10 shrink-0">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about coaching, Coach Steve, packages, or booking..."
              disabled={isLoading}
              className="flex-1 px-4 py-2.5 bg-[#FAF9F5] border border-[#15380e]/20 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#15380e]"
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="p-3 bg-[#15380e] hover:bg-[#1c4413] disabled:opacity-40 text-white rounded-xl transition-all cursor-pointer shrink-0"
              aria-label="Send message"
            >
              <Send className="w-4 h-4 text-[#e5a629]" />
            </button>
          </form>

          <div className="mt-2 flex items-center justify-between text-[10px] text-[#1c1c1c]/60">
            <span>Powered by Mekaru Coaching grounded knowledge base</span>
            <button
              onClick={() => {
                onClose();
                onOpenConsultation();
              }}
              className="font-semibold text-[#15380e] hover:underline"
            >
              Schedule Call Directly →
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
