import React from 'react';
import { GitBranch, AlertCircle, Bell, Check } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-vs-accent text-white py-1 mt-auto text-[11px] font-mono select-none">
      <div className="flex justify-between items-center px-4">
        
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 hover:bg-white/10 px-2 py-0.5 rounded cursor-pointer transition-colors">
            <GitBranch size={12} />
            <span>main*</span>
          </div>
          <div className="flex items-center gap-1 hover:bg-white/10 px-2 py-0.5 rounded cursor-pointer transition-colors">
            <AlertCircle size={12} />
            <span>0</span>
            <AlertCircle size={12} className="rotate-180" />
            <span>0</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
           <span className="hidden md:inline hover:bg-white/10 px-2 py-0.5 rounded cursor-pointer">Ln 24, Col 80</span>
           <span className="hidden md:inline hover:bg-white/10 px-2 py-0.5 rounded cursor-pointer">UTF-8</span>
           <span className="hidden md:inline hover:bg-white/10 px-2 py-0.5 rounded cursor-pointer">CRLF</span>
           <div className="flex items-center gap-1 hover:bg-white/10 px-2 py-0.5 rounded cursor-pointer">
             <span className="hidden md:inline">React</span>
           </div>
           <Bell size={12} className="hover:bg-white/10 rounded cursor-pointer" />
        </div>

      </div>
    </footer>
  );
};