import React from 'react';
import { NavLink } from 'react-router-dom';
import { FileCode, FileJson, FileType, Terminal } from 'lucide-react';

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
  return (
    <nav className="sticky top-0 z-50 w-full bg-vs-activity border-b border-vs-border">
      <div className="flex flex-col md:flex-row">
        {/* Mobile Header */}
        <div className="flex items-center justify-between p-4 md:hidden bg-vs-activity text-vs-text">
          <span className="font-mono font-bold text-sm">ERIC_FORTES.workspace</span>
        </div>

        {/* Desktop Tabs */}
        <div className="hidden md:flex flex-col md:flex-row w-full bg-vs-activity md:bg-[#2d2d2d] overflow-x-auto">
          <div className="flex flex-col md:flex-row min-w-max">
            <NavItem to="/" icon={FileCode} label="home" extension=".tsx" />
            <NavItem to="/resume" icon={FileJson} label="resume" extension=".json" />
            <NavItem to="/projects" icon={FileType} label="projects" extension=".ts" />
            <NavItem to="/contact" icon={Terminal} label="contact" extension=".sh" />
          </div>
        </div>
      </div>

      {/* Mobile Bottom Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 w-full h-16 bg-[#252526] shadow-[0_-2px_8px_rgba(0,0,0,0.35)] z-50">
        <div className="h-full flex items-stretch justify-around">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex-1 flex flex-col items-center justify-center gap-1 text-[10px] font-mono border-t-2 transition-colors ${
                isActive
                  ? 'border-blue-500 text-vs-text bg-[#1e1e1e]'
                  : 'border-transparent text-gray-400 hover:bg-[#1e1e1e]'
              }`
            }
          >
            <FileCode size={16} className="text-vs-blue" />
            <span>home.tsx</span>
          </NavLink>
          <NavLink
            to="/resume"
            className={({ isActive }) =>
              `flex-1 flex flex-col items-center justify-center gap-1 text-[10px] font-mono border-t-2 transition-colors ${
                isActive
                  ? 'border-blue-500 text-vs-text bg-[#1e1e1e]'
                  : 'border-transparent text-gray-400 hover:bg-[#1e1e1e]'
              }`
            }
          >
            <FileJson size={16} className="text-vs-yellow" />
            <span>resume.json</span>
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `flex-1 flex flex-col items-center justify-center gap-1 text-[10px] font-mono border-t-2 transition-colors ${
                isActive
                  ? 'border-blue-500 text-vs-text bg-[#1e1e1e]'
                  : 'border-transparent text-gray-400 hover:bg-[#1e1e1e]'
              }`
            }
          >
            <FileType size={16} className="text-vs-purple" />
            <span>projects.ts</span>
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `flex-1 flex flex-col items-center justify-center gap-1 text-[10px] font-mono border-t-2 transition-colors ${
                isActive
                  ? 'border-blue-500 text-vs-text bg-[#1e1e1e]'
                  : 'border-transparent text-gray-400 hover:bg-[#1e1e1e]'
              }`
            }
          >
            <Terminal size={16} className="text-vs-orange" />
            <span>contact.sh</span>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
