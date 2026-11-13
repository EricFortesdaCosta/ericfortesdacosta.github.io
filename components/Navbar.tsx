import React from 'react';
import { NavLink } from 'react-router-dom';
import { FileCode, FileJson, FileType, Terminal, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Language } from '../types';

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

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();
  const languages: { code: Language; label: string }[] = [
    { code: 'pt', label: 'PT' },
    { code: 'en', label: 'EN' },
    { code: 'es', label: 'ES' },
  ];

  return (
    <div className="flex items-center bg-vs-bg border border-vs-border rounded text-[11px] font-mono p-0.5 shadow-inner" title="Language / Idioma">
      <span className="px-1.5 text-gray-500 flex items-center gap-1 select-none">
        <Globe size={11} className="text-vs-blue" />
        <span className="hidden lg:inline text-[10px] text-gray-400">lang:</span>
      </span>
      {languages.map(({ code, label }) => {
        const isActive = language === code;
        return (
          <button
            key={code}
            type="button"
            onClick={() => setLanguage(code)}
            className={`px-2 py-0.5 rounded transition-all font-mono font-medium ${
              isActive
                ? 'bg-vs-accent text-white font-bold shadow-sm'
                : 'text-gray-400 hover:text-vs-text hover:bg-white/5'
            }`}
            aria-label={`Change language to ${label}`}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
};

export const Navbar: React.FC = () => {
  const { t } = useLanguage();

  return (
    <nav className="sticky top-0 z-50 w-full bg-vs-activity border-b border-vs-border">
      <div className="flex flex-col md:flex-row">
        {/* Mobile Header */}
        <div className="flex items-center justify-between p-3 md:hidden bg-vs-activity text-vs-text">
          <span className="font-mono font-bold text-xs truncate">{t.nav.workspace}</span>
          <LanguageSwitcher />
        </div>

        {/* Desktop Tabs */}
        <div className="hidden md:flex items-center justify-between w-full bg-vs-activity md:bg-[#2d2d2d] pr-3 overflow-x-auto">
          <div className="flex flex-row min-w-max">
            <NavItem to="/" icon={FileCode} label={t.nav.home} extension=".tsx" />
            <NavItem to="/resume" icon={FileJson} label={t.nav.resume} extension=".json" />
            <NavItem to="/projects" icon={FileType} label={t.nav.projects} extension=".ts" />
            <NavItem to="/contact" icon={Terminal} label={t.nav.contact} extension=".sh" />
          </div>

          <div className="ml-4 shrink-0">
            <LanguageSwitcher />
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
            <span>{t.nav.home}.tsx</span>
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
            <span>{t.nav.resume}.json</span>
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
            <span>{t.nav.projects}.ts</span>
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
            <span>{t.nav.contact}.sh</span>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
