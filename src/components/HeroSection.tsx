import React from 'react';
import { ArrowDown, Code2, MapPin, GitBranch, Sparkles } from 'lucide-react';
import { PROFILE_DATA } from '../data/portfolioData';

interface HeroSectionProps {
  onViewWork: () => void;
  onGetInTouch: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onViewWork, onGetInTouch }) => {
  return (
    <section id="home" className="pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Availability status badge */}
            <div className="inline-flex items-center gap-2 mb-4 text-xs font-semibold text-indigo-700 bg-indigo-50/80 px-3 py-1.5 rounded-full border border-indigo-100/80 self-start">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>实施项目经理 · CRM / ERP 交付 · 擅长 AI 技术应用</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] xl:text-[50px] font-black tracking-tight text-slate-950 leading-[1.14] text-balance">
              你好，我是朔冰。让企业数字化落地，让 AI 成为交付的伙伴。
            </h1>

            {/* Kicker */}
            <p className="mt-2 text-sm font-medium text-indigo-600/90 tracking-wide">
              实施项目经理 · CRM / ERP 数字化交付
            </p>

            {/* Body Description */}
            <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              计算机专业出身，深耕中大型企业 CRM / ERP 项目的实施与上线。擅长运用
              LangChain、Agent 应用开发等 AI 技术，构建「懂业务 + 懂技术 + 懂 AI」的交付新范式。
            </p>

            {/* Metadata Stats - matching Screenshot 4 */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-6 pt-6 border-t border-slate-100">
              <div>
                <span className="block text-xs font-medium text-slate-400 uppercase tracking-wider">
                  Location
                </span>
                <span className="mt-1 flex items-center gap-1.5 text-sm sm:text-base font-bold text-slate-900">
                  <MapPin className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
                  <span>{PROFILE_DATA.location}</span>
                </span>
              </div>

              <div>
                <span className="block text-xs font-medium text-slate-400 uppercase tracking-wider">
                  Repositories
                </span>
                <span className="mt-1 flex items-center gap-1.5 text-sm sm:text-base font-bold text-slate-900">
                  <GitBranch className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
                  <span>{PROFILE_DATA.repositoriesCount}</span>
                </span>
              </div>

              <div className="hidden sm:block">
                <span className="block text-xs font-medium text-slate-400 uppercase tracking-wider">
                  Specialization
                </span>
                <span className="mt-1 flex items-center gap-1.5 text-sm sm:text-base font-bold text-slate-900">
                  <Code2 className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
                  <span>CRM / ERP · AI Agent</span>
                </span>
              </div>
            </div>

            {/* Action Buttons - matching Screenshot 4 */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={onViewWork}
                className="px-6 py-3 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 active:scale-[0.98] rounded-xl shadow-md shadow-indigo-600/20 transition-all cursor-pointer"
              >
                查看我的作品
              </button>
              <button
                onClick={onGetInTouch}
                className="px-6 py-3 text-sm font-semibold text-slate-800 bg-white hover:bg-slate-50 active:scale-[0.98] rounded-xl border border-slate-300 shadow-xs transition-all cursor-pointer"
              >
                与我联系
              </button>
            </div>
          </div>

          {/* Right Column: Profile Picture - matching Screenshot 4 */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Subtle back decorative glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition duration-500" />

              <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-xl ring-1 ring-slate-900/10 bg-slate-100">
                <img
                  src="/avatar.png"
                  alt="朔冰的头像"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />

                {/* Corner floating badge */}
                <div className="absolute bottom-3 left-3 right-3 bg-white/90 backdrop-blur-md px-3 py-2 rounded-xl border border-white/60 shadow-xs flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span className="text-xs font-semibold text-slate-800">朔冰</span>
                  </div>
                  <span className="text-[11px] font-mono text-indigo-600 font-medium">实施项目经理</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
