import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectsGallery } from './components/ProjectsGallery';
import { VideoShowcase } from './components/VideoShowcase';
import { ServicesSection } from './components/ServicesSection';
import { WorkflowSection } from './components/WorkflowSection';
import { AboutSection } from './components/AboutSection';
import { PdfViewerSection } from './components/PdfViewerSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { type ProjectItem } from './utils/portfolioLogic';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [inquiryService, setInquiryService] = useState<'website' | 'logo' | 'both'>('both');

  const handleOpenInquiry = (service: 'website' | 'logo' | 'both' = 'both') => {
    setInquiryService(service);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0B1020] text-[#F4F7FF] flex flex-col font-sans selection:bg-[#5271FF] selection:text-white">
      {/* Top Bar Navigation */}
      <Navbar onOpenInquiry={handleOpenInquiry} />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onOpenInquiry={handleOpenInquiry} />

        {/* Selected Projects Gallery with Filters */}
        <ProjectsGallery onSelectProject={(project) => setSelectedProject(project)} />

        {/* Screen Recording Video Gallery */}
        <VideoShowcase />

        {/* Services Section */}
        <ServicesSection onOpenInquiry={handleOpenInquiry} />

        {/* Workflow Section */}
        <WorkflowSection />

        {/* About Section */}
        <AboutSection />

        {/* PDF Portfolio Viewer Section */}
        <PdfViewerSection />

        {/* Contact & Inquiry Section */}
        <ContactSection initialService={inquiryService} key={inquiryService} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Lightbox / Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenInquiry={handleOpenInquiry}
      />
    </div>
  );
}
