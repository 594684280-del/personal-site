import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Mail, ArrowUpRight } from 'lucide-react';
import { PROFILE_DATA } from '../data/portfolioData';

interface NavbarProps {
  activeTab: string;
  onTabChange: (tabId: string) => void;
  onOpenContact: () => void;
}

export const TABS = [
  { id: 'home', label: '首页', labelEn: 'Home', href: '#home' },
  { id: 'about', label: '关于我', labelEn: 'About', href: '#about' },
  { id: 'articles', label: '我的文章', labelEn: 'Articles', href: '#articles' },
  { id: 'projects', label: '我的作品', labelEn: 'Projects', href: '#projects' },
];

export const Navbar: React.FC<NavbarProps> = ({ activeTab, onTabChange, onOpenContact }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleTabClick = (tabId: string, href: string) => {
    onTabChange(tabId);
    setMobileMenuOpen(false);

    const el = document.querySelector(href);
    if (el) {
      const navOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3.5'
          : 'bg-white/70 backdrop-blur-sm border-b border-slate-100 py-4.5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6">
          {/* Zone 1: Wordmark */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => handleTabClick('home', '#home')}
              className="group flex items-center gap-2.5 text-left focus:outline-none"
            >
              <div className="w-9 h-9 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold text-lg shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform">
                朔
              </div>
              <div className="flex flex-col">
                <span className="text-base font-bold tracking-tight text-slate-900 group-hover:text-indigo-600 transition-colors">
                  {PROFILE_DATA.name}
                </span>
                <span className="text-[11px] font-medium text-slate-400 tracking-wide uppercase">
                  实施项目经理
                </span>
              </div>
            </button>
          </div>

          {/* Zone 2: Navigation Links (4 tabs) */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-100/80 p-1 rounded-full border border-slate-200/60">
            {TABS.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabClick(tab.id, tab.href)}
                  className={`px-4 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 whitespace-nowrap shrink-0 ${
                    isActive
                      ? 'bg-white text-indigo-600 shadow-xs ring-1 ring-slate-900/5'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
                  }`}
                >
                  <span>{tab.label}</span>
                  <span className="ml-1 opacity-60 text-[11px] font-normal hidden lg:inline">
                    / {tab.labelEn}
                  </span>
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Primary Action & GitHub */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <span
              className="p-2 text-slate-400 cursor-default rounded-lg"
              title="GitHub 主页（待补充）"
            >
              <Github className="w-4 h-4" />
            </span>
            <button
              onClick={onOpenContact}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 active:scale-[0.98] rounded-lg shadow-sm shadow-indigo-500/25 transition-all whitespace-nowrap shrink-0"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>联系我</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenContact}
              className="px-3 py-1.5 text-xs font-medium text-indigo-600 bg-indigo-50 hover:bg-indigo-100 rounded-lg transition-colors"
            >
              联系
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white/95 backdrop-blur-lg px-4 pt-3 pb-6 animate-in slide-in-from-top-2 duration-200">
          <div className="space-y-1">
            {TABS.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabClick(tab.id, tab.href)}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-indigo-50 text-indigo-600 font-semibold'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span>{tab.label}</span>
                    <span className="text-xs text-slate-400 font-normal">({tab.labelEn})</span>
                  </span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-indigo-600" />}
                </button>
              );
            })}
          </div>

          <div className="pt-4 mt-3 border-t border-slate-100 flex items-center justify-between">
            <span className="inline-flex items-center gap-2 text-xs text-slate-400">
              <Github className="w-4 h-4" />
              <span>GitHub（待补充）</span>
            </span>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="px-3.5 py-1.5 text-xs font-semibold text-white bg-indigo-600 rounded-lg shadow-xs"
            >
              发送邮件
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
