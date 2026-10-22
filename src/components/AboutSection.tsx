import React from 'react';
import { User, Briefcase, Award, GraduationCap, CheckCircle2, Download, ArrowUpRight, Heart, Sparkles } from 'lucide-react';
import { PROFILE_DATA, CAREER_TIMELINE } from '../data/portfolioData';

interface AboutSectionProps {
  onContactClick: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onContactClick }) => {
  return (
    <section id="about" className="py-16 md:py-24 border-t border-slate-100 bg-[#fafafa]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 mb-2 uppercase tracking-wider">
            <User className="w-3.5 h-3.5" />
            <span>About Me / 个人介绍</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            关于我与工程哲学
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-500 leading-relaxed">
            实施项目经理，专注中大型企业 CRM / ERP 交付，正在向「懂业务 + 懂技术 + 懂 AI」的复合型方向成长。
          </p>
        </div>

        {/* 2-Column Story & Stats Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-20">
          {/* Left Column: Personal Narrative */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-slate-200/80 shadow-xs space-y-6">
            <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
              <div className="w-10 h-10 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">交付底色与职业热情</h3>
                <p className="text-xs text-slate-500">Delivering enterprise digital transformation</p>
              </div>
            </div>

            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              你好！我是朔冰，计算机专业本科出身，具备 C# 与 Python 开发基础。现任实施项目经理，
              负责中大型企业 CRM / ERP 项目的实施与上线——从需求调研、蓝图设计到数据迁移与切换上线，
              我习惯把复杂的企业变革拆解成可控的交付节奏。
            </p>

            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              同时，我坚信 AI 会重塑企业软件的交付方式。我擅长运用 LangChain 与 Agent 应用开发等 AI 技术，
              正在探索智能问答、文档处理、需求整理等 AI 场景在实施一线的落地，目标是成长为一名
              <strong className="text-slate-900"> Agent 产品经理</strong>。
            </p>

            {/* Core Values */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                <h4 className="text-xs font-bold text-slate-900 mb-1 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600" />
                  懂业务的交付管理
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  深入客户业务场景，把模糊诉求翻译成可落地的蓝图与方案。
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                <h4 className="text-xs font-bold text-slate-900 mb-1 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600" />
                  懂技术的沟通桥梁
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  熟练运用 LangChain 与 Agent 开发，能与开发团队同频对话。
                </p>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onContactClick}
                className="px-5 py-2.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl shadow-xs transition-colors cursor-pointer"
              >
                立即开始对话
              </button>
              <a
                href="#articles"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 rounded-xl transition-colors"
              >
                <span>阅读我的文章</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
              </a>
            </div>
          </div>

          {/* Right Column: Key Metrics & Education */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Metrics Bento */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                <span className="text-3xl font-black text-indigo-600 tabular-nums">5+</span>
                <span className="block text-xs font-medium text-slate-500 mt-1">年企业数字化交付（待补充）</span>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                <span className="text-3xl font-black text-slate-900 tabular-nums">10+</span>
                <span className="block text-xs font-medium text-slate-500 mt-1">主导项目数（待补充）</span>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                <span className="text-3xl font-black text-slate-900 tabular-nums">C#</span>
                <span className="block text-xs font-medium text-slate-500 mt-1">开发基础</span>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                <span className="text-3xl font-black text-emerald-600 tabular-nums">AI</span>
                <span className="block text-xs font-medium text-slate-500 mt-1">AI 应用开发实践</span>
              </div>
            </div>

            {/* Education & Learning */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
              <div className="flex items-center gap-2.5 text-sm font-bold text-slate-900 mb-4">
                <GraduationCap className="w-4 h-4 text-indigo-600" />
                <span>教育背景与学习经历</span>
              </div>

              <div className="space-y-3">
                <div className="border-l-2 border-indigo-400 pl-3">
                  <div className="text-xs font-semibold text-slate-800">
                    计算机专业本科（院校待补充）
                  </div>
                  <div className="text-[11px] text-slate-400">
                    BSc in Computer Science
                  </div>
                </div>

                <div className="border-l-2 border-slate-200 pl-3">
                  <div className="text-xs font-semibold text-slate-800">
                    LangChain 与 Agent 应用开发
                  </div>
                  <div className="text-[11px] text-slate-400">
                    AI Agent · RAG · 工具调用 · 工作流编排
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Career Timeline Section */}
        <div>
          <div className="flex items-center gap-2 text-base font-bold text-slate-900 mb-8">
            <Briefcase className="w-5 h-5 text-indigo-600" />
            <span>职业经历与关键里程碑 (Work Experience)</span>
          </div>

          <div className="space-y-6">
            {CAREER_TIMELINE.map((item, idx) => (
              <div
                key={idx}
                className="relative pl-6 sm:pl-8 pb-6 border-l-2 border-indigo-100 last:border-transparent last:pb-0"
              >
                {/* Timeline node */}
                <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white border-2 border-indigo-600" />

                <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs hover:border-indigo-200 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                    <h4 className="text-base font-bold text-slate-900">
                      {item.role} · <span className="text-indigo-600 font-semibold">{item.company}</span>
                    </h4>
                    <span className="text-xs font-medium font-mono text-slate-400 bg-slate-50 px-2.5 py-0.5 rounded-full border border-slate-100 max-w-fit">
                      {item.year}
                    </span>
                  </div>

                  <p className="text-sm text-slate-600 mb-3">{item.description}</p>

                  <div className="space-y-1.5">
                    {item.achievements.map((ach, aIdx) => (
                      <div key={aIdx} className="flex items-start gap-2 text-xs text-slate-500">
                        <span className="text-indigo-500 font-bold">›</span>
                        <span>{ach}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
