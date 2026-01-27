
import React, { useEffect } from 'react';

interface LightboxProps {
  imageUrl: string;
  onClose: () => void;
}

const Lightbox: React.FC<LightboxProps> = ({ imageUrl, onClose }) => {
  // Prevent scrolling when lightbox is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div 
      className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-12 animate-in fade-in duration-300"
      onClick={onClose}
    >
      <button 
        className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors"
        onClick={onClose}
      >
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 6 6 18M6 6l12 12"/></svg>
      </button>
      
      <div className="relative max-w-7xl max-h-full w-full h-full flex items-center justify-center">
        <img 
          src={imageUrl} 
          alt="Zoomed Detail" 
          className="max-w-full max-h-full object-contain shadow-2xl animate-in zoom-in-95 duration-500"
          onClick={(e) => e.stopPropagation()}
        />
        
        <div className="absolute bottom-[-40px] left-0 right-0 text-center">
          <span className="text-white/20 text-[10px] font-black uppercase tracking-[1em]">Scroll or click background to close</span>
        </div>
      </div>
    </div>
  );
};

export default Lightbox;
