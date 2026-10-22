import React from 'react';
import { ArrowUp, Github, Mail, MapPin, Heart, Code2 } from 'lucide-react';
import { PROFILE_DATA } from '../data/portfolioData';
import { TABS } from './Navbar';

interface FooterProps {
  onTabChange: (tabId: string) => void;
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onTabChange, onOpenContact }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-white pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-indigo-500 text-white flex items-center justify-center font-bold text-base">
                朔
              </div>
              <span className="text-lg font-bold tracking-tight text-white">
                {PROFILE_DATA.fullName}
              </span>
            </div>

            <p className="text-sm text-slate-400 max-w-md leading-relaxed">
              专注中大型企业 CRM / ERP 项目的实施与上线交付，正在探索 AI Agent 在企业数字化中的应用。
            </p>

            <div className="flex items-center gap-4 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                {PROFILE_DATA.location}
              </span>
              <span>·</span>
              <span className="flex items-center gap-1.5 font-mono">
                {PROFILE_DATA.repositoriesCount}
              </span>
            </div>
          </div>

          {/* Quick Navigation Tabs */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
              快速导航 (Navigation)
            </h4>
            <ul className="space-y-2 text-xs">
              {TABS.map((tab) => (
                <li key={tab.id}>
                  <button
                    onClick={() => {
                      onTabChange(tab.id);
                      const el = document.querySelector(tab.href);
                      if (el) {
                        el.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                  >
                    {tab.label} ({tab.labelEn})
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect / Actions */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
              联系与交流 (Connect)
            </h4>
            <div className="space-y-2 text-xs">
              <button
                onClick={onOpenContact}
                className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors cursor-pointer"
              >
                <Mail className="w-3.5 h-3.5 text-indigo-400" />
                <span>发送电子邮件</span>
              </button>
              <span className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors">
                <Github className="w-3.5 h-3.5 text-indigo-400" />
                <span>GitHub 主页（待补充）</span>
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar with smooth scroll to top button */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} {PROFILE_DATA.fullName}. All rights reserved. Built with React & Tailwind.
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-all text-xs font-medium cursor-pointer"
            >
              <span>返回顶部</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
