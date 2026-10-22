import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { WhatIDoSection } from './components/WhatIDoSection';
import { TechnologiesSection } from './components/TechnologiesSection';
import { ProjectsSection } from './components/ProjectsSection';
import { AboutSection } from './components/AboutSection';
import { ArticlesSection } from './components/ArticlesSection';
import { Footer } from './components/Footer';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { ArticleDetailModal } from './components/ArticleDetailModal';
import { ContactModal } from './components/ContactModal';
import { Project, Article } from './data/portfolioData';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [contactModalOpen, setContactModalOpen] = useState<boolean>(false);
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  // Smooth scroll sync with active navbar tab using IntersectionObserver
  useEffect(() => {
    const sectionIds = ['home', 'projects', 'about', 'articles'];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.25) {
            setActiveTab(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: '-80px 0px -40% 0px',
        threshold: [0.25, 0.5],
      }
    );

    sections.forEach((s) => observer.observe(s));

    return () => {
      sections.forEach((s) => observer.unobserve(s));
    };
  }, []);

  const scrollToSection = (id: string) => {
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleSelectSkill = (skillName: string) => {
    if (selectedSkill === skillName) {
      setSelectedSkill(null);
    } else {
      setSelectedSkill(skillName);
      // Smoothly scroll down to projects section
      scrollToSection('projects');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fcfcfd] text-slate-900 selection:bg-indigo-100 selection:text-indigo-900">
      {/* 1. Sticky Navigation Bar with 4 Tabs */}
      <Navbar
        activeTab={activeTab}
        onTabChange={(tabId) => scrollToSection(tabId)}
        onOpenContact={() => setContactModalOpen(true)}
      />

      {/* Main Content Area with Smooth Flow */}
      <main className="flex-1">
        {/* Section 1: Hero Section (Matches Screenshot 4) */}
        <HeroSection
          onViewWork={() => scrollToSection('projects')}
          onGetInTouch={() => setContactModalOpen(true)}
        />

        {/* Section 2: What I Do (Matches Screenshot 1) */}
        <WhatIDoSection />

        {/* Section 3: Technologies I Work With (Matches Screenshot 2) */}
        <TechnologiesSection
          onSelectSkill={handleSelectSkill}
          selectedSkill={selectedSkill}
        />

        {/* Section 4: Featured Projects / 我的作品 (Matches Screenshot 3) */}
        <ProjectsSection
          onSelectProject={(project) => setSelectedProject(project)}
          selectedSkill={selectedSkill}
        />

        {/* Section 5: 关于我 (About Me Tab) */}
        <AboutSection
          onContactClick={() => setContactModalOpen(true)}
        />

        {/* Section 6: 我的文章 (Articles Tab) */}
        <ArticlesSection
          onSelectArticle={(article) => setSelectedArticle(article)}
        />
      </main>

      {/* 7. Footer */}
      <Footer
        onTabChange={(tabId) => scrollToSection(tabId)}
        onOpenContact={() => setContactModalOpen(true)}
      />

      {/* Interactive Modals */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <ArticleDetailModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
      />

      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />
    </div>
  );
}
