import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, FileCode, FileJson, FileType, Terminal } from 'lucide-react';

const NavItem = ({ to, icon: Icon, label, extension, onClick }: { to: string; icon: any; label: string; extension: string; onClick?: () => void }) => (
  <NavLink
    to={to}
    onClick={onClick}
    className={({ isActive }) => `
      flex items-center gap-2 px-4 py-2 text-sm font-mono border-t-2 border-transparent transition-colors
      ${isActive 
        ? 'bg-vs-bg text-vs-text border-t-vs-accent' 
        : 'bg-vs-sidebar text-gray-500 hover:bg-vs-bg hover:text-gray-300'}
    `}
  >
    <Icon size={14} className={to === '/' ? 'text-vs-blue' : to === '/resume' ? 'text-vs-yellow' : to === '/projects' ? 'text-vs-purple' : 'text-vs-orange'} />
    <span>{label}<span className="opacity-50">{extension}</span></span>
  </NavLink>
);

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-vs-activity border-b border-vs-border">
      <div className="flex flex-col md:flex-row">
        {/* Mobile Header */}
        <div className="flex items-center justify-between p-4 md:hidden bg-vs-activity text-vs-text">
          <span className="font-mono font-bold text-sm">ERIC_FORTES.workspace</span>
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Desktop Tabs */}
        <div className={`
          ${isOpen ? 'flex' : 'hidden'} 
          md:flex flex-col md:flex-row w-full bg-vs-activity md:bg-[#2d2d2d] overflow-x-auto
        `}>
          <div className="flex flex-col md:flex-row min-w-max">
            <NavItem to="/" icon={FileCode} label="home" extension=".tsx" onClick={() => setIsOpen(false)} />
            <NavItem to="/resume" icon={FileJson} label="resume" extension=".json" onClick={() => setIsOpen(false)} />
            <NavItem to="/projects" icon={FileType} label="projects" extension=".ts" onClick={() => setIsOpen(false)} />
            <NavItem to="/contact" icon={Terminal} label="contact" extension=".sh" onClick={() => setIsOpen(false)} />
          </div>
        </div>
      </div>
    </nav>
  );
};