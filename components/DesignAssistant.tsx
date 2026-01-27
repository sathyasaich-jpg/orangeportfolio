
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';

const DesignAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [response, isLoading]);

  const handleAsk = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setIsLoading(true);
    setResponse(null);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const prompt = `
        You are the "Design Assistant" for Sathya Sai's communication design portfolio. 
        Sathya is a student focused on Typography, UX/UI, and Branding.
        Her aesthetic is "Editorial", "Intentional", and "Asymmetrical".
        
        Question from a recruiter: ${query}
        
        Answer professionally, warmly, and concisely as if you were Sathya's creative agent. 
        Keep it under 3 sentences. Avoid decorative or overly bubbly language. 
      `;

      const result = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: prompt,
      });

      setResponse(result.text || "I'm having trouble thinking right now, but feel free to email Sathya directly!");
    } catch (err) {
      console.error(err);
      setResponse("My creative circuits are a bit jammed. Let's try again in a moment?");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="w-80 sm:w-96 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-2xl rounded-lg overflow-hidden flex flex-col max-h-[500px]">
          <div className="bg-zinc-50 dark:bg-zinc-950 p-4 border-b border-zinc-100 dark:border-zinc-800 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold uppercase tracking-widest text-brand-blue">Design Inquiry Assistant</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="opacity-40 hover:opacity-100 transition-opacity">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-6 text-sm scrollbar-hide">
            <div className="space-y-1">
               <p className="text-[10px] font-bold uppercase tracking-widest opacity-30">Assistant</p>
               <p className="font-serif italic text-lg leading-snug">
                 Welcome. I can provide insights into Sathya's design methodology and project background. What would you like to know?
               </p>
            </div>
            
            {response && (
              <div className="space-y-1 animate-in fade-in slide-in-from-bottom-2 duration-500">
                <p className="text-[10px] font-bold uppercase tracking-widest opacity-30">Response</p>
                <p className="font-light opacity-80 leading-relaxed border-l-2 border-brand-blue pl-4">
                  {response}
                </p>
              </div>
            )}

            {isLoading && (
              <div className="flex gap-1 p-2 opacity-30">
                <div className="w-1 h-1 bg-zinc-400 rounded-full animate-bounce"></div>
                <div className="w-1 h-1 bg-zinc-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                <div className="w-1 h-1 bg-zinc-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          <form onSubmit={handleAsk} className="p-4 border-t border-zinc-100 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 flex gap-2">
            <input 
              type="text" 
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Ask about the process..." 
              className="flex-1 bg-transparent border-b border-zinc-200 dark:border-zinc-700 px-1 py-2 text-xs focus:outline-none focus:border-brand-blue transition-colors"
            />
            <button 
              type="submit" 
              disabled={isLoading}
              className="text-brand-blue disabled:opacity-50"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </button>
          </form>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="group flex items-center gap-3 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 pl-4 pr-1 py-1 rounded-full shadow-2xl hover:bg-brand-blue dark:hover:bg-brand-blue dark:hover:text-white transition-all duration-300"
        >
          <span className="text-[10px] font-bold uppercase tracking-widest">Inquiry Agent</span>
          <div className="w-8 h-8 bg-white/20 dark:bg-black/10 rounded-full flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"/></svg>
          </div>
        </button>
      )}
    </div>
  );
};

export default DesignAssistant;
