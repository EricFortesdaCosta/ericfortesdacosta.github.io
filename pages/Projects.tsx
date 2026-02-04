import React from 'react';
import { ExternalLink, Code2 } from 'lucide-react';
import { CyberContainer } from '../components/CyberContainer';
import { CyberCard } from '../components/CyberCard';
import { PROJECTS } from '../constants';

export const Projects: React.FC = () => {
  return (
    <CyberContainer>
      <div className="mb-8 border-b border-vs-border pb-4">
        <h1 className="text-xl font-mono text-vs-text flex items-center gap-2">
          <Code2 size={20} className="text-vs-purple"/>
          <span>projects.ts</span>
        </h1>
        <p className="text-gray-500 text-xs font-mono mt-1 ml-7">
          // Lista de projetos implementados
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {PROJECTS.map((project, index) => ( project.link ? (
        <a
      key={index}
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Abrir ${project.title} (abre em nova aba)`}
      className="block group focus:outline-none focus-visible:ring-2 focus-visible:ring-vs-accent rounded"
    >
          <CyberCard key={index} className="h-full flex flex-col group p-0 overflow-hidden" hoverEffect={false}>
            <div className="p-0 border-b border-vs-border bg-vs-activity h-40 relative overflow-hidden">
                 <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                />
            </div>
            
            <div className="p-4 flex flex-col flex-grow bg-vs-sidebar">
                <h3 className="text-base font-bold text-vs-blue mb-1 font-mono">
                    {project.title}
                </h3>
                
                <p className="text-gray-400 text-xs mb-4 flex-grow font-sans leading-relaxed">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mt-auto">
                    {project.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="text-[10px] font-mono px-1.5 py-0.5 bg-vs-bg border border-vs-border text-vs-comment rounded-sm">
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="mt-3 flex flex-wrap gap-2">
                  {project.android && (
                    <a
                      href={project.android}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Android de ${project.title}`}
                      className="text-xs font-mono px-2 py-1 border border-vs-border bg-transparent text-vs-text rounded hover:bg-vs-activity/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-vs-accent"
                    >
                      Android
                    </a>
                  )}

                  {project.ios && (
                    <a
                      href={project.ios}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`iOS de ${project.title}`}
                      className="text-xs font-mono px-2 py-1 border border-vs-border bg-transparent text-vs-text rounded hover:bg-vs-activity/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-vs-accent"
                    >
                      iOS
                    </a>
                  )}
                </div>
            </div>
          </CyberCard>
          </a>
          ) : (
            <CyberCard key={index} className="h-full flex flex-col group p-0 overflow-hidden" hoverEffect={false}>
              <div className="p-0 border-b border-vs-border bg-vs-activity h-40 relative overflow-hidden">
                 <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                />
            </div>
            
            <div className="p-4 flex flex-col flex-grow bg-vs-sidebar">
                <h3 className="text-base font-bold text-vs-blue mb-1 font-mono">
                    {project.title}
                </h3>
                
                <p className="text-gray-400 text-xs mb-4 flex-grow font-sans leading-relaxed">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mt-auto">
                    {project.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="text-[10px] font-mono px-1.5 py-0.5 bg-vs-bg border border-vs-border text-vs-comment rounded-sm">
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="mt-3 flex flex-wrap gap-2">
                  {project.android && (
                    <a
                      href={project.android}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Android de ${project.title}`}
                      className="text-xs font-mono px-2 py-1 border border-vs-border bg-transparent text-vs-text rounded hover:bg-vs-activity/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-vs-accent"
                    >
                      Android
                    </a>
                  )}

                  {project.ios && (
                    <a
                      href={project.ios}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`iOS de ${project.title}`}
                      className="text-xs font-mono px-2 py-1 border border-vs-border bg-transparent text-vs-text rounded hover:bg-vs-activity/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-vs-accent"
                    >
                      iOS
                    </a>
                  )}
                </div>
            </div>
            </CyberCard>
              )
        ))}
      </div>
      
      <div className="mt-8 flex items-center justify-center gap-2 text-xs font-mono text-gray-500">
        <ExternalLink size={12} />
        <span>
          Mais projetos disponíveis em{" "}
          <a 
            href="https://github.com/EricFortesdaCosta" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-vs-accent hover:underline decoration-dotted"
          >
            github.com/EricFortesdaCosta
          </a>
        </span>
      </div>
    </CyberContainer>
  );
};