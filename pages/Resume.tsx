import React from "react";
import { Download, ChevronRight, Hash, Sparkles } from "lucide-react";
import { CyberContainer } from "../components/CyberContainer";
import { HARD_SKILLS, AI_TOOLS } from "../constants";
import { useLanguage } from "../context/LanguageContext";

export const Resume: React.FC = () => {
  const { t } = useLanguage();

  return (
    <CyberContainer>
      <div className="flex justify-between items-center mb-6 border-b border-vs-border pb-4">
        <h1 className="text-2xl font-mono text-vs-text">
          <span className="text-vs-blue">package</span>.json
        </h1>
        <a
          href={t.resume.cvUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-3 py-1.5 bg-vs-accent text-white text-xs font-mono hover:bg-blue-600 transition-colors rounded-sm"
        >
          <Download size={14} />
          <span>{t.resume.downloadCv}</span>
        </a>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Timeline (Compact) */}
        <div className="lg:col-span-8 space-y-6">
          {/* Experience Section */}
          <div>
            <h2 className="text-sm font-bold text-vs-purple font-mono mb-2 flex items-center gap-1">
              <ChevronRight size={14} /> "{t.resume.experienceKey}": [
            </h2>
            <div className="pl-4 border-l border-vs-line space-y-3">
              {t.resume.experiences.map((exp, index) => (
                <div key={index} className="group relative">
                  <div className="absolute -left-[21px] top-1.5 w-2.5 h-2.5 rounded-full bg-vs-activity border border-vs-purple group-hover:bg-vs-purple transition-colors"></div>
                  <div className="bg-vs-sidebar border border-vs-border p-3 hover:border-vs-text transition-colors">
                    <div className="flex flex-wrap justify-between items-baseline mb-1">
                      <h3 className="text-vs-blue font-bold text-sm font-mono">
                        "{exp.role}"
                      </h3>
                      <span className="text-xs font-mono text-vs-comment">
                        /* {exp.date} */
                      </span>
                    </div>
                    <div className="text-xs font-mono text-vs-orange mb-1">
                      @ {exp.company} - {exp.location}
                    </div>
                    <p className="text-gray-400 text-xs leading-tight">
                      {exp.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="pl-6 text-vs-purple font-mono mt-1">],</div>
          </div>

          {/* Education Section */}
          <div>
            <h2 className="text-sm font-bold text-vs-yellow font-mono mb-2 flex items-center gap-1">
              <ChevronRight size={14} /> "{t.resume.educationKey}": [
            </h2>
            <div className="pl-4 border-l border-vs-line space-y-3">
              {t.resume.educations.map((edu, index) => (
                <div key={index} className="group relative">
                  <div className="absolute -left-[21px] top-1.5 w-2.5 h-2.5 rounded-full bg-vs-activity border border-vs-yellow group-hover:bg-vs-yellow transition-colors"></div>
                  <div className="bg-vs-sidebar border border-vs-border p-3 hover:border-vs-text transition-colors">
                    <div className="flex flex-wrap justify-between items-baseline mb-1">
                      <h3 className="text-vs-yellow font-bold text-sm font-mono">
                        "{edu.title}"
                      </h3>
                      <span className="text-xs font-mono text-vs-comment">
                        /* {edu.date} */
                      </span>
                    </div>
                    <div className="text-xs font-mono text-vs-text mb-1 opacity-80">
                      {edu.institution}
                    </div>
                    <p className="text-gray-400 text-xs leading-tight">
                      {edu.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="pl-6 text-vs-yellow font-mono mt-1">]</div>
          </div>
        </div>

        {/* Right Column: Skills (JSON style) */}
        <div className="lg:col-span-4">
          <div className="bg-vs-sidebar border border-vs-border p-4 font-mono text-xs md:text-sm sticky top-24 space-y-4">
            <div className="text-gray-500">{t.resume.techComment}</div>

            <div>
              <span className="text-vs-blue">"{t.resume.hardSkillsKey}"</span>: {"["}
              <div className="pl-4 flex flex-wrap gap-1 mt-1">
                {HARD_SKILLS.map((skill, idx) => (
                  <span key={idx} className="text-vs-orange">
                    "{skill}"{idx < HARD_SKILLS.length - 1 ? "," : ""}
                  </span>
                ))}
              </div>
              {"]"},
            </div>

            <div>
              <div className="flex items-center gap-1.5">
                <Sparkles size={13} className="text-[#4ec9b0]" />
                <span className="text-[#4ec9b0]">"{t.resume.aiToolsKey}"</span>: {"["}
              </div>
              <div className="pl-4 flex flex-wrap gap-1 mt-1">
                {AI_TOOLS.map((tool, idx) => (
                  <span key={idx} className="text-[#9cdcfe]">
                    "{tool}"{idx < AI_TOOLS.length - 1 ? "," : ""}
                  </span>
                ))}
              </div>
              {"]"},
            </div>

            <div>
              <span className="text-vs-blue">"{t.resume.softSkillsKey}"</span>: {"["}
              <div className="pl-4 flex flex-col mt-1 space-y-1">
                {t.resume.softSkills.map((skill, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <Hash size={10} className="text-gray-600" />
                    <span className="text-vs-comment">
                      "{skill}"{idx < t.resume.softSkills.length - 1 ? "," : ""}
                    </span>
                  </div>
                ))}
              </div>
              {"]"}
            </div>
          </div>
        </div>
      </div>
    </CyberContainer>
  );
};