import React from 'react';
import { ExternalLink, Code2 } from 'lucide-react';
import { CyberContainer } from '../components/CyberContainer';
import { CyberCard } from '../components/CyberCard';
import { useLanguage } from '../context/LanguageContext';

export const Projects: React.FC = () => {
  const { t } = useLanguage();

  return (
    <CyberContainer>
      <div className="mb-8 border-b border-vs-border pb-4">
        <h1 className="text-xl font-mono text-vs-text flex items-center gap-2">
          <Code2 size={20} className="text-vs-purple"/>
          <span>{t.projects.titleTab}</span>
        </h1>
        <p className="text-gray-500 text-xs font-mono mt-1 ml-7">
          {t.projects.comment}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {t.projects.items.map((project, index) => (
          <CyberCard key={index} className="h-full flex flex-col group p-0 overflow-hidden" hoverEffect={false}>
            <div className="p-0 border-b border-vs-border bg-vs-activity h-40 relative overflow-hidden">
              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full h-full"
                  aria-label={`Abrir imagem de ${project.title}`}
                >
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                  />
                </a>
              ) : (
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                />
              )}
            </div>
            
            <div className="p-4 flex flex-col flex-grow bg-vs-sidebar">
              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline focus:outline-none focus-visible:ring-1 focus-visible:ring-vs-accent"
                >
                  <h3 className="text-base font-bold text-vs-blue mb-1 font-mono flex items-center justify-between gap-1">
                    <span>{project.title}</span>
                    <ExternalLink size={14} className="text-gray-500 shrink-0" />
                  </h3>
                </a>
              ) : (
                <h3 className="text-base font-bold text-vs-blue mb-1 font-mono">
                  {project.title}
                </h3>
              )}
                
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

              {(project.link || project.android || project.ios) && (
                <div className="mt-3 flex flex-wrap items-center gap-2 pt-2 border-t border-vs-border/40">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono px-2 py-1 border border-vs-border bg-vs-bg text-vs-blue hover:text-white hover:border-vs-accent rounded flex items-center gap-1 transition-colors"
                    >
                      <ExternalLink size={11} />
                      <span>{t.projects.btnCode}</span>
                    </a>
                  )}

                  {project.android && (
                    <a
                      href={project.android}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${t.projects.btnAndroid} - ${project.title}`}
                      className="text-xs font-mono px-2 py-1 border border-vs-border bg-transparent text-vs-text rounded hover:bg-vs-activity/40 hover:text-white transition-colors"
                    >
                      {t.projects.btnAndroid}
                    </a>
                  )}

                  {project.ios && (
                    <a
                      href={project.ios}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${t.projects.btnIos} - ${project.title}`}
                      className="text-xs font-mono px-2 py-1 border border-vs-border bg-transparent text-vs-text rounded hover:bg-vs-activity/40 hover:text-white transition-colors"
                    >
                      {t.projects.btnIos}
                    </a>
                  )}
                </div>
              )}
            </div>
          </CyberCard>
        ))}
      </div>
      
      <div className="mt-8 flex items-center justify-center gap-2 text-xs font-mono text-gray-500">
        <ExternalLink size={12} />
        <span>
          {t.projects.footerMore}{" "}
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