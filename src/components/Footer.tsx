import React from 'react';
import { CONTACT_INFO } from '../utils/portfolioLogic';
import { BrandLogo } from './BrandLogo';
import { MessageCircle, Mail, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#9B6DFF]/15 bg-[#0B1020] py-12 text-[#AAB6CC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & Title */}
          <div className="flex items-center gap-3">
            <BrandLogo variant="compact" showSubtitle={true} />
          </div>

          {/* Quick Nav */}
          <nav aria-label="Footer Navigation" className="flex flex-wrap items-center justify-center gap-6 text-xs font-medium">
            <a href="#home" className="hover:text-[#65E7F5] transition-colors">Home</a>
            <a href="#projects" className="hover:text-[#65E7F5] transition-colors">Projects</a>
            <a href="#services" className="hover:text-[#65E7F5] transition-colors">Services</a>
            <a href="#workflow" className="hover:text-[#65E7F5] transition-colors">Workflow</a>
            <a href="#about" className="hover:text-[#65E7F5] transition-colors">About</a>
            <a href="#resume" className="hover:text-[#65E7F5] transition-colors">CV &amp; Portfolio</a>
            <a href="#contact" className="hover:text-[#65E7F5] transition-colors">Contact</a>
          </nav>

          {/* Contact Direct & Top button */}
          <div className="flex items-center gap-4 text-xs font-medium">
            <a
              href={`https://wa.me/${CONTACT_INFO.phoneRaw}`}
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#65E7F5] transition-colors flex items-center gap-1.5"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span>WhatsApp</span>
            </a>
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="hover:text-[#9B6DFF] transition-colors flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5 text-[#9B6DFF]" />
              <span>Email</span>
            </a>
            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="p-2 rounded-xl bg-[#17233B] hover:bg-[#1E2E4E] border border-[#9B6DFF]/25 hover:border-[#65E7F5]/40 text-[#AAB6CC] hover:text-[#65E7F5] transition-colors"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-[#9B6DFF]/10 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#AAB6CC]/60 gap-2">
          <p>© {new Date().getFullYear()} Muhammad Sardar Baloch. All rights reserved.</p>
          <p>AI-assisted development workflow & logo design concepts.</p>
        </div>
      </div>
    </footer>
  );
};
