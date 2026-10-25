import React, { useState } from 'react';
import { CONTACT_INFO } from '../utils/portfolioLogic';
import { BrandLogo } from './BrandLogo';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenInquiry: (service?: 'website' | 'logo' | 'both') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenInquiry }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#0B1020]/85 backdrop-blur-md border-b border-[#9B6DFF]/20 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-6">
        {/* Zone 1: Official Brand Logo Lockup */}
        <a
          href="#home"
          className="group flex items-center shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#65E7F5] rounded-xl p-1"
          aria-label="Muhammad Sardar Baloch - Home"
        >
          <BrandLogo variant="horizontal" showSubtitle={true} />
        </a>

        {/* Zone 2: 4-5 clean single-line nav links */}
        <nav
          aria-label="Main Navigation"
          className="hidden md:flex items-center md:gap-5 lg:gap-8 text-sm font-medium text-[#AAB6CC]"
        >
          <a
            href="#projects"
            className="hover:text-[#F4F7FF] transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8 decoration-[#65E7F5]"
          >
            Projects
          </a>
          <a
            href="#services"
            className="hover:text-[#F4F7FF] transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8 decoration-[#65E7F5]"
          >
            Services
          </a>
          <a
            href="#workflow"
            className="hover:text-[#F4F7FF] transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8 decoration-[#65E7F5]"
          >
            Workflow
          </a>
          <a
            href="#about"
            className="hover:text-[#F4F7FF] transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8 decoration-[#65E7F5]"
          >
            About
          </a>
          <a
            href="#resume"
            className="hover:text-[#F4F7FF] transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8 decoration-[#65E7F5]"
          >
            CV &amp; Portfolio
          </a>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <button
            onClick={() => onOpenInquiry('both')}
            className="px-5 py-2.5 text-xs font-semibold text-white bg-gradient-to-r from-[#5271FF] via-[#7B68FF] to-[#9B6DFF] hover:from-[#4463F5] hover:to-[#8E5BF5] rounded-xl shadow-md shadow-[#5271FF]/20 hover:shadow-[#5271FF]/35 hover:scale-[1.02] active:scale-[0.98] transition-all whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#65E7F5]"
          >
            Start a Project
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={mobileMenuOpen}
          className="md:hidden p-2 text-[#AAB6CC] hover:text-[#F4F7FF] hover:bg-[#17233B] rounded-xl border border-transparent hover:border-[#9B6DFF]/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#65E7F5]"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#9B6DFF]/20 bg-[#0B1020]/95 backdrop-blur-xl px-4 pt-3 pb-5 space-y-3">
          <nav className="flex flex-col space-y-2 text-sm font-medium text-[#AAB6CC]">
            <a
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-[#17233B] hover:text-[#F4F7FF] transition-colors"
            >
              Projects
            </a>
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-[#17233B] hover:text-[#F4F7FF] transition-colors"
            >
              Services
            </a>
            <a
              href="#workflow"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-[#17233B] hover:text-[#F4F7FF] transition-colors"
            >
              Workflow
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-[#17233B] hover:text-[#F4F7FF] transition-colors"
            >
              About
            </a>
            <a
              href="#resume"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-[#17233B] hover:text-[#F4F7FF] transition-colors"
            >
              CV &amp; Portfolio
            </a>
          </nav>
          <div className="pt-2 border-t border-[#9B6DFF]/20">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInquiry('both');
              }}
              className="w-full text-center py-2.5 px-4 text-xs font-semibold text-white bg-gradient-to-r from-[#5271FF] to-[#9B6DFF] rounded-xl hover:shadow-lg hover:shadow-[#5271FF]/25 transition-all"
            >
              Start a Project
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
