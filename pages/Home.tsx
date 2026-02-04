import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CyberContainer } from '../components/CyberContainer';
import { SOCIAL_LINKS } from '../constants';

export const Home: React.FC = () => {
  return (
    <CyberContainer>
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start justify-center mt-8 md:mt-16">
        
        {/* Editor Column */}
        <div className="w-full lg:w-3/4">
          
          {/* Status Indicator - Moved Above Editor */}
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-4 flex items-center gap-3 bg-vs-sidebar border border-vs-border px-4 py-2 rounded w-fit shadow-md"
          >
            <div className="relative">
              <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
              <div className="absolute top-0 left-0 w-2.5 h-2.5 rounded-full bg-green-500 animate-ping opacity-75"></div>
            </div>
            <span className="text-xs font-mono text-gray-300 tracking-wide">
              AVAILABLE TO WORK <span className="text-vs-comment">#OpenForOpportunities</span>
            </span>
          </motion.div>

          {/* Editor Window */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-lg overflow-hidden border border-vs-border bg-vs-bg shadow-2xl"
          >
            {/* Window Header */}
            <div className="bg-vs-activity px-4 py-2 flex items-center gap-2 border-b border-vs-border">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
              </div>
              <span className="ml-4 text-xs text-gray-400 font-mono">intro.java</span>
            </div>

            {/* Code Content */}
            <div className="p-6 font-mono text-sm md:text-base overflow-x-auto">
              <div className="flex">
                <div className="text-gray-600 text-right pr-4 select-none border-r border-vs-border/30 mr-4 hidden md:block">
                  1<br/>2<br/>3<br/>4<br/>5<br/>6<br/>7<br/>8<br/>9<br/>10<br/>11<br/>12<br/>13<br/>14<br/>15<br/>16
                </div>
                <div className="flex-1">
                  <p><span className="text-vs-purple">package</span> <span className="text-vs-text">com.portfolio</span>;</p>
                  <br/>
                  <p><span className="text-vs-purple">public class</span> <span className="text-vs-yellow">Developer</span> <span className="text-vs-purple">extends</span> <span className="text-vs-blue">Human</span> {'{'}</p>
                  
                  <div className="pl-4 border-l border-gray-800 ml-1">
                    <p><span className="text-vs-purple">private final</span> <span className="text-vs-blue">String</span> name = <span className="text-vs-orange">"Eric Fortes"</span>;</p>
                    <p><span className="text-vs-purple">private</span> <span className="text-vs-blue">String[]</span> stack = {'{'}<span className="text-vs-orange">"Java"</span>, <span className="text-vs-orange">"SpringBoot"</span>, <span className="text-vs-orange">"React"</span>, <span className="text-vs-orange">"Python"</span>{'}'};</p>
                    <br/>
                    
                    <p><span className="text-vs-comment">/**</span></p>
                    <p><span className="text-vs-comment"> * Foco em automação e alta performance.</span></p>
                    <p><span className="text-vs-comment"> * Experiência com arquiteturas de API e Microserviços.</span></p>
                    <p><span className="text-vs-comment"> */</span></p>
                    
                    <p><span className="text-vs-purple">public</span> <span className="text-vs-blue">void</span> <span className="text-vs-yellow">introduce</span>() {'{'}</p>
                    <div className="pl-4">
                      <p><span className="text-vs-blue">System</span>.out.println(<span className="text-vs-orange">"Olá! Sou Desenvolvedor Java & Backend."</span>);</p>
                      <p><span className="text-vs-blue">System</span>.out.println(<span className="text-vs-orange">"Busco entregar software de alta performance."</span>);</p>
                    </div>
                    <p>{'}'}</p>
                    
                    <br/>
                    <p><span className="text-vs-comment">// Navigation</span></p>
                    <div className="flex gap-4 my-1">
                       <Link to="/projects" className="text-vs-blue hover:underline">
                         viewProjects();
                       </Link>
                       <Link to="/resume" className="text-vs-blue hover:underline">
                         viewResume();
                       </Link>
                    </div>
                  </div>
                  <p>{'}'}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Links Panel */}
        <div className="w-full lg:w-1/4 space-y-6">
           <div className="bg-vs-sidebar border border-vs-border p-4 shadow-lg sticky top-24">
              <h3 className="text-xs font-bold text-gray-500 uppercase mb-3 tracking-wider">LINKS RÁPIDOS</h3>
              <div className="flex flex-col gap-3">
                {SOCIAL_LINKS.map((link, idx) => (
                    <a 
                        key={idx}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-3 text-gray-400 hover:text-vs-accent transition-colors p-2 hover:bg-vs-activity rounded"
                        title={link.label}
                    >
                        <link.icon size={18} />
                        <span className="text-sm font-mono">{link.label}</span>
                    </a>
                ))}
              </div>
           </div>
        </div>

      </div>
    </CyberContainer>
  );
};