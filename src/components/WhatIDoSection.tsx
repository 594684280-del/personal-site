import React, { useState } from 'react';
import { Smartphone, Globe, Zap, Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';
import { WHAT_I_DO_SERVICES } from '../data/portfolioData';

export const WhatIDoSection: React.FC = () => {
  const [selectedService, setSelectedService] = useState<string>('crm-erp');

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'smartphone':
        return <Smartphone className="w-8 h-8 text-indigo-500 stroke-[1.8]" />;
      case 'globe':
        return <Globe className="w-8 h-8 text-indigo-500 stroke-[1.8]" />;
      case 'zap':
        return <Zap className="w-8 h-8 text-indigo-500 stroke-[1.8]" />;
      case 'sparkles':
        return <Sparkles className="w-8 h-8 text-indigo-500 stroke-[1.8]" />;
      default:
        return <Globe className="w-8 h-8 text-indigo-500 stroke-[1.8]" />;
    }
  };

  return (
    <section className="py-16 md:py-24 bg-white/60 border-y border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - matching Screenshot 1 */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            我擅长什么
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-500 leading-relaxed">
            从企业系统交付到 AI 探索，用业务与技术双重视角解决真实问题
          </p>
        </div>

        {/* 3 Service Cards Grid - matching Screenshot 1 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {WHAT_I_DO_SERVICES.map((service) => {
            const isHighlighted = selectedService === service.id;

            return (
              <div
                key={service.id}
                onClick={() => setSelectedService(service.id)}
                className={`relative rounded-2xl p-7 sm:p-8 bg-white cursor-pointer transition-all duration-300 flex flex-col justify-between ${
                  isHighlighted
                    ? 'border-2 border-indigo-500 shadow-md shadow-indigo-500/10 scale-[1.01]'
                    : 'border border-slate-200/80 shadow-xs hover:border-slate-300 hover:shadow-md'
                }`}
              >
                <div>
                  {/* Service Icon */}
                  <div className="mb-6 inline-flex p-1">
                    {renderIcon(service.icon)}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 mb-2.5">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Extended Details & Features (interactive bonus for real depth) */}
                <div className="pt-4 border-t border-slate-100 mt-auto">
                  <div className="space-y-2 mb-4">
                    {service.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-xs font-semibold text-indigo-600 pt-1">
                    <span>{service.titleZh}</span>
                    <span className="flex items-center gap-1 group">
                      了解实践
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
