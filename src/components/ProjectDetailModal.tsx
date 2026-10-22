import React from 'react';
import { X, Github, ExternalLink, Star, GitFork, CheckCircle2, Cpu, Code2 } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden max-h-[90vh] flex flex-col animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with Dark Hero Banner */}
        <div className="bg-[#131b2e] text-white p-6 sm:p-8 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 mb-2">
            <span className="px-2.5 py-0.5 rounded text-xs font-mono font-semibold bg-purple-900/80 text-purple-200 border border-purple-700/60">
              &lt;/&gt; {project.language}
            </span>
            <span className="text-xs text-slate-400 capitalize">· {project.category}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
            {project.title}
          </h2>

          <p className="text-sm text-slate-300 max-w-lg leading-relaxed">
            {project.tagline}
          </p>

          <div className="mt-4 flex items-center gap-4 text-xs font-mono text-slate-400">
            <div className="flex items-center gap-1.5">
              <Star className="w-3.5 h-3.5 text-amber-400" />
              <span>{project.stars} stars</span>
            </div>
            <div className="flex items-center gap-1.5">
              <GitFork className="w-3.5 h-3.5 text-indigo-400" />
              <span>{project.forks || 0} forks</span>
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {/* Overview */}
          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
              项目背景与简介
            </h4>
            <p className="text-sm text-slate-700 leading-relaxed">
              {project.description === "No description available"
                ? `${project.title} 是一个为解决现实开发与业务场景痛点而设计的开源应用。通过现代工程化实践，在低延迟、高并发和优雅的界面交互之间取得平衡。`
                : project.description}
            </p>
          </div>

          {/* Architecture if available */}
          {project.architecture && (
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
              <div className="flex items-center gap-2 text-xs font-bold text-indigo-700 mb-1">
                <Cpu className="w-4 h-4" />
                <span>技术架构栈 (Architecture Stack)</span>
              </div>
              <p className="text-xs font-mono text-slate-700">
                {project.architecture}
              </p>
            </div>
          )}

          {/* Key Highlights */}
          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
              核心亮点与技术突破
            </h4>
            <div className="space-y-2">
              {project.highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-600">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tags */}
          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
              技术标签 (Tags)
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 text-xs font-medium bg-slate-100 text-slate-700 rounded-lg"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer with Actions */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200 flex items-center justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-slate-600 hover:text-slate-900 rounded-xl hover:bg-slate-200/60 transition-colors"
          >
            关闭
          </button>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-xl shadow-xs transition-colors"
          >
            <Github className="w-3.5 h-3.5" />
            <span>查看 GitHub 源码</span>
            <ExternalLink className="w-3 h-3 text-slate-400" />
          </a>
        </div>
      </div>
    </div>
  );
};
