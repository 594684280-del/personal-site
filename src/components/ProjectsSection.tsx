import React, { useState } from 'react';
import { GitFork, Star, ArrowRight, ExternalLink, Code2, Layers } from 'lucide-react';
import { FEATURED_PROJECTS, Project } from '../data/portfolioData';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
  selectedSkill?: string | null;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  onSelectProject,
  selectedSkill,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Projects (全部作品)' },
    { id: 'web', label: 'Web Applications' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'fullstack', label: 'Full-Stack & Systems' },
  ];

  const filteredProjects = FEATURED_PROJECTS.filter((proj) => {
    const matchesCategory = activeCategory === 'all' || proj.category === activeCategory;
    const matchesSkill = !selectedSkill || proj.tags.some(t => t.toLowerCase() === selectedSkill.toLowerCase());
    return matchesCategory && matchesSkill;
  });

  return (
    <section id="projects" className="py-16 md:py-24 bg-white/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - matching Screenshot 3 */}
        <div className="mb-10 md:mb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 mb-2 uppercase tracking-wider">
                <Layers className="w-3.5 h-3.5" />
                <span>Portfolio / 作品集</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                我的作品
              </h2>
              <p className="mt-2 text-base sm:text-lg text-slate-500">
                Explore my latest work and contributions on GitHub
              </p>
            </div>

            {/* Filter controls */}
            <div className="flex flex-wrap items-center gap-1.5 bg-slate-100 p-1 rounded-xl self-start md:self-auto">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer ${
                    activeCategory === cat.id
                      ? 'bg-white text-indigo-600 shadow-xs font-semibold'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {selectedSkill && (
            <div className="mt-4 flex items-center gap-2 text-xs text-indigo-600 bg-indigo-50 px-3 py-1.5 rounded-lg border border-indigo-100 max-w-fit">
              <span>正在过滤与 <strong>{selectedSkill}</strong> 相关的项目</span>
              <button
                onClick={() => {}}
                className="underline hover:text-indigo-800 ml-1 cursor-pointer"
              >
                (显示全部)
              </button>
            </div>
          )}
        </div>

        {/* Dark Project Cards Grid - matching Screenshot 3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => {
            return (
              <div
                key={project.id}
                onClick={() => onSelectProject(project)}
                className="group relative rounded-2xl bg-[#131b2e] hover:bg-[#162036] text-white p-6 sm:p-7 border border-slate-800 hover:border-indigo-500/50 shadow-lg hover:shadow-indigo-500/10 transition-all duration-300 flex flex-col justify-between cursor-pointer"
              >
                <div>
                  {/* Top: Title & Git Fork Icon - matching Screenshot 3 */}
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors tracking-tight">
                      {project.title}
                    </h3>
                    <GitFork className="w-5 h-5 text-slate-500 group-hover:text-slate-400 shrink-0" />
                  </div>

                  {/* Description - matching Screenshot 3 */}
                  <p className="text-sm text-slate-400 min-h-[44px] leading-relaxed mb-6 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tags Row - matching Screenshot 3 */}
                  <div className="flex flex-wrap items-center gap-2 mb-6">
                    {/* Primary Language Tag (purple) */}
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-mono font-medium text-purple-300 bg-purple-950/70 border border-purple-800/40 rounded-md">
                      <span className="text-[10px]">&lt;/&gt;</span>
                      <span>{project.language}</span>
                    </span>

                    {/* Secondary Tags */}
                    {project.tags
                      .filter(t => t.toLowerCase() !== project.language.toLowerCase())
                      .slice(0, 2)
                      .map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 text-xs text-slate-300 bg-slate-800/80 border border-slate-700/50 rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                  </div>
                </div>

                {/* Bottom Row: Stars & View -> matching Screenshot 3 */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-medium">
                  <div className="flex items-center gap-1.5 text-slate-400">
                    <Star className="w-3.5 h-3.5 stroke-[1.8]" />
                    <span className="tabular-nums font-mono">{project.stars}</span>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectProject(project);
                    }}
                    className="inline-flex items-center gap-1 text-purple-400 group-hover:text-purple-300 group-hover:translate-x-0.5 transition-all font-semibold"
                  >
                    <span>View</span>
                    <span>→</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
