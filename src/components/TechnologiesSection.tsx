import React, { useState } from 'react';
import { TECH_SKILLS } from '../data/portfolioData';

interface TechnologiesSectionProps {
  onSelectSkill?: (skillName: string) => void;
  selectedSkill?: string | null;
}

export const TechnologiesSection: React.FC<TechnologiesSectionProps> = ({
  onSelectSkill,
  selectedSkill,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Technologies / 全部' },
    { id: 'Mobile', label: 'Mobile' },
    { id: 'Frontend', label: 'Frontend' },
    { id: 'Backend', label: 'Backend' },
    { id: 'Cloud & DB', label: 'Cloud & Database' },
  ];

  const filteredSkills = activeCategory === 'all'
    ? TECH_SKILLS
    : TECH_SKILLS.filter(s => s.category === activeCategory);

  return (
    <section className="py-16 md:py-24 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - matching Screenshot 2 */}
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            我掌握的技术与能力
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-500 leading-relaxed">
            A diverse toolkit for building scalable and modern applications
          </p>

          {/* Quick Category Filter for enhanced interaction */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-1.5 p-1 bg-slate-100 rounded-xl inline-flex max-w-full">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
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

        {/* Tech Pills Container - matching Screenshot 2 */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-3.5 max-w-4xl mx-auto">
          {filteredSkills.map((tech) => {
            const isSelected = selectedSkill === tech.name;

            return (
              <button
                key={tech.name}
                onClick={() => onSelectSkill && onSelectSkill(tech.name)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer shadow-xs ${
                  isSelected
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/25 border border-indigo-600 scale-105'
                    : 'bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 hover:border-slate-300 hover:shadow-sm'
                }`}
              >
                {tech.name}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
