import React, { useState } from 'react';
import { BookOpen, Search, Clock, Eye, ArrowRight, Tag } from 'lucide-react';
import { ARTICLES, Article } from '../data/portfolioData';

interface ArticlesSectionProps {
  onSelectArticle: (article: Article) => void;
}

export const ArticlesSection: React.FC<ArticlesSectionProps> = ({ onSelectArticle }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Mobile', 'Web', 'Full-Stack'];

  const filteredArticles = ARTICLES.filter((article) => {
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="articles" className="py-16 md:py-24 bg-white/70 border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 mb-2 uppercase tracking-wider">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Articles & Insights / 我的技术文章</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              技术思考与工程实践
            </h2>
            <p className="mt-2 text-base text-slate-500 max-w-xl">
              记录跨平台开发、架构设计、性能调优与全栈踩坑总结，持续输出实战干货。
            </p>
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="搜索文章标题或技术标签..."
              className="w-full pl-9 pr-4 py-2 text-xs rounded-xl bg-white border border-slate-200 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 placeholder:text-slate-400"
            />
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-slate-900 text-white font-semibold'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200/80'
              }`}
            >
              {cat === 'All' ? '全部文章' : cat}
            </button>
          ))}
          <span className="text-xs text-slate-400 ml-auto hidden sm:inline">
            共收录 {filteredArticles.length} 篇深度技术笔记
          </span>
        </div>

        {/* Articles List / Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredArticles.map((article) => (
            <article
              key={article.id}
              onClick={() => onSelectArticle(article)}
              className="group bg-white p-6 sm:p-7 rounded-2xl border border-slate-200/80 hover:border-indigo-300 shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between cursor-pointer"
            >
              <div>
                {/* Meta Header */}
                <div className="flex items-center gap-3 text-xs text-slate-400 mb-3">
                  <span className="font-semibold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-md">
                    {article.category}
                  </span>
                  <span>{article.date}</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{article.readTime}</span>
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors mb-2 line-clamp-2">
                  {article.title}
                </h3>

                <p className="text-xs text-slate-400 font-normal italic mb-3">
                  {article.titleEn}
                </p>

                {/* Excerpt */}
                <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-2">
                  {article.excerpt}
                </p>
              </div>

              {/* Bottom footer */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div className="flex flex-wrap items-center gap-1.5">
                  {article.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-mono text-slate-500 bg-slate-50 px-2 py-0.5 rounded border border-slate-100"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-1 text-xs font-semibold text-indigo-600 group-hover:translate-x-0.5 transition-transform">
                  <span>阅读全文</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
