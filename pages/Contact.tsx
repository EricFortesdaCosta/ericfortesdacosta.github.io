import React from 'react';
import { Terminal as TerminalIcon } from 'lucide-react';
import { CyberContainer } from '../components/CyberContainer';
import { SOCIAL_LINKS } from '../constants';

export const Contact: React.FC = () => {
  return (
    <CyberContainer className="max-w-3xl">
      <div className="bg-vs-bg border border-vs-border rounded shadow-xl overflow-hidden mt-8">
          {/* Terminal Header */}
          <div className="bg-vs-activity px-4 py-2 flex items-center justify-between border-b border-vs-border">
              <div className="flex items-center gap-2">
                  <TerminalIcon size={14} className="text-gray-400" />
                  <span className="text-xs text-gray-300 font-mono">bash - user@eric-portfolio</span>
              </div>
          </div>

          {/* Terminal Content */}
          <div className="p-6 font-mono text-sm space-y-4">
              <div>
                  <span className="text-vs-comment"># Iniciar processo de contato</span>
                  <br/>
                  <span className="text-vs-green">user@eric-portfolio</span>:<span className="text-vs-blue">~</span>$ ./contact.sh --init
              </div>

              <div className="text-gray-300">
                  <p>Initializing communication channels...</p>
                  <p className="text-vs-accent">Done.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
                  {SOCIAL_LINKS.map((link, idx) => (
                      <a 
                          key={idx} 
                          href={link.href}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-3 p-3 border border-vs-border bg-vs-sidebar hover:bg-vs-activity hover:border-vs-blue transition-all group"
                      >
                          <link.icon className="w-5 h-5 text-gray-500 group-hover:text-vs-text" />
                          <span className="text-vs-blue group-hover:text-vs-text hover:underline decoration-vs-accent">
                              {link.label}
                          </span>
                      </a>
                  ))}
              </div>

              <div className="pt-4 border-t border-vs-border/30">
                  <span className="text-vs-green">user@eric-portfolio</span>:<span className="text-vs-blue">~</span>$ <span className="animate-blink">_</span>
              </div>
          </div>
      </div>
    </CyberContainer>
  );
};