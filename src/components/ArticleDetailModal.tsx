import React from 'react';
import { X, Clock, Calendar, Eye, Share2, ArrowLeft } from 'lucide-react';
import { Article, PROFILE_DATA } from '../data/portfolioData';

interface ArticleDetailModalProps {
  article: Article | null;
  onClose: () => void;
}

export const ArticleDetailModal: React.FC<ArticleDetailModalProps> = ({ article, onClose }) => {
  if (!article) return null;

  const [copied, setCopied] = React.useState(false);

  const handleCopyLink = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden max-h-[92vh] flex flex-col animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header */}
        <div className="p-4 sm:px-8 border-b border-slate-100 flex items-center justify-between bg-white/95 backdrop-blur-md">
          <button
            onClick={onClose}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 p-1.5 rounded-lg hover:bg-slate-100 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>返回列表</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyLink}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>{copied ? '已复制链接' : '分享'}</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Article Body */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-6">
          {/* Metadata */}
          <div>
            <div className="flex items-center gap-3 text-xs text-indigo-600 font-semibold mb-3">
              <span className="bg-indigo-50 px-2.5 py-1 rounded-md">
                {article.category}
              </span>
              <span className="flex items-center gap-1 text-slate-400 font-normal">
                <Calendar className="w-3.5 h-3.5" />
                {article.date}
              </span>
              <span className="flex items-center gap-1 text-slate-400 font-normal">
                <Clock className="w-3.5 h-3.5" />
                {article.readTime}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
              {article.title}
            </h1>

            <p className="mt-2 text-sm text-slate-400 italic">
              {article.titleEn}
            </p>

            {/* Author info pill */}
            <div className="mt-4 flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100">
              <div className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-bold text-sm">
                A
              </div>
              <div className="text-xs">
                <span className="font-semibold text-slate-900">{PROFILE_DATA.fullName}</span>
                <span className="text-slate-400 ml-2">Software Engineer · {PROFILE_DATA.location}</span>
              </div>
            </div>
          </div>

          <div className="h-px bg-slate-100" />

          {/* Render formatted markdown/article text */}
          <div className="prose prose-slate max-w-none text-sm sm:text-base leading-relaxed text-slate-700 space-y-4">
            {article.content.split('\n\n').map((paragraph, index) => {
              const trimmed = paragraph.trim();
              if (trimmed.startsWith('### ')) {
                return (
                  <h3 key={index} className="text-xl font-bold text-slate-900 mt-6 mb-2">
                    {trimmed.replace('### ', '')}
                  </h3>
                );
              }
              if (trimmed.startsWith('#### ')) {
                return (
                  <h4 key={index} className="text-base font-bold text-indigo-700 mt-5 mb-2">
                    {trimmed.replace('#### ', '')}
                  </h4>
                );
              }
              if (trimmed.startsWith('- ')) {
                const items = trimmed.split('\n- ');
                return (
                  <ul key={index} className="list-disc pl-5 space-y-1.5 text-slate-600 text-sm">
                    {items.map((it, i) => (
                      <li key={i}>{it.replace('- ', '')}</li>
                    ))}
                  </ul>
                );
              }
              if (trimmed.length === 0) return null;
              return (
                <p key={index} className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {trimmed}
                </p>
              );
            })}
          </div>

          {/* Tags */}
          <div className="pt-6 border-t border-slate-100 flex flex-wrap gap-2">
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-mono text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
