import React from 'react';
import { CONTACT_INFO } from '../utils/portfolioLogic';
import { ArrowDown, Sparkles, MessageCircle, Mail, FileText } from 'lucide-react';

interface HeroProps {
  onOpenInquiry: (service?: 'website' | 'logo' | 'both') => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenInquiry }) => {
  return (
    <section id="home" className="relative pt-12 pb-20 md:pt-18 md:pb-28 overflow-hidden bg-[#0B1020]">
      {/* Background ambient glowing orbs - Midnight Blue + Purple + Cyan */}
      <div className="absolute top-1/6 left-1/2 -translate-x-1/2 w-[720px] h-[380px] bg-gradient-to-tr from-[#5271FF]/18 via-[#9B6DFF]/16 to-[#65E7F5]/10 blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 -right-24 w-80 h-80 rounded-full bg-[#9B6DFF]/10 blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 -left-20 w-80 h-80 rounded-full bg-[#5271FF]/10 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typographic & Identity Hierarchy */}
          <div className="lg:col-span-7 space-y-6">
            {/* Unboxed Metadata Kicker with responsive concise title */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold tracking-wide text-[#65E7F5] uppercase">
              <span className="inline-block w-2 h-2 rounded-full bg-[#65E7F5] shadow-[0_0_8px_#65E7F5]" />
              <span className="sm:hidden">{CONTACT_INFO.shortTitle}</span>
              <span className="hidden sm:inline">{CONTACT_INFO.primaryTitle}</span>
              <span aria-hidden="true" className="text-[#9B6DFF]/40">·</span>
              <span className="text-[#AAB6CC]">Available For Remote Work</span>
            </div>

            {/* Primary & Supporting Headlines */}
            <div className="space-y-3">
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#F4F7FF] text-balance leading-[1.12]">
                Creative Websites.{' '}
                <span className="bg-gradient-to-r from-[#5271FF] via-[#9B6DFF] to-[#65E7F5] bg-clip-text text-transparent">
                  Distinctive Brands. Built to Stand Out.
                </span>
              </h1>
              <p className="text-base sm:text-lg text-[#AAB6CC] leading-relaxed max-w-2xl text-balance">
                I’m <strong className="text-[#F4F7FF] font-semibold">{CONTACT_INFO.name}</strong>, an AI-assisted website developer and logo designer creating modern website experiences and distinctive brand visuals.
              </p>
            </div>

            {/* Honest Metadata Row with refined separators */}
            <div className="pt-2 flex flex-wrap items-center gap-x-3.5 gap-y-2 text-xs text-[#AAB6CC] border-t border-[#9B6DFF]/15">
              <span className="font-medium text-[#F4F7FF]">AI-Assisted Workflow</span>
              <span aria-hidden="true" className="text-[#9B6DFF]/50">/</span>
              <span className="font-medium text-[#F4F7FF]">8+ Website Demos</span>
              <span aria-hidden="true" className="text-[#9B6DFF]/50">/</span>
              <span className="font-medium text-[#F4F7FF]">Brand &amp; Logo Concepts</span>
              <span aria-hidden="true" className="text-[#9B6DFF]/50">/</span>
              <span className="text-[#AAB6CC]">Clean File Handoff</span>
            </div>

            {/* CTAs with Electric Blue to Purple Gradient */}
            <div className="pt-4 flex flex-wrap items-center gap-3.5">
              <a
                href="#projects"
                className="px-7 py-3 text-sm font-semibold text-white bg-gradient-to-r from-[#5271FF] via-[#7B68FF] to-[#9B6DFF] hover:from-[#4362F0] hover:to-[#8C5CF0] rounded-xl shadow-lg shadow-[#5271FF]/25 hover:shadow-[#5271FF]/40 hover:scale-[1.02] active:scale-[0.98] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#65E7F5]"
              >
                Explore My Work
              </a>
              <a
                href="#contact"
                className="px-7 py-3 text-sm font-semibold text-[#F4F7FF] bg-[#17233B]/90 hover:bg-[#1E2E4E] border border-[#9B6DFF]/30 hover:border-[#65E7F5]/50 rounded-xl transition-all shadow-sm hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#65E7F5]"
              >
                Contact Me
              </a>
              <a
                href="#resume"
                className="inline-flex items-center gap-2 px-4 py-3 text-sm font-medium text-[#AAB6CC] hover:text-[#65E7F5] bg-transparent hover:bg-[#17233B]/60 rounded-xl border border-transparent hover:border-[#9B6DFF]/25 transition-all"
              >
                <FileText className="w-4 h-4 text-[#9B6DFF]" />
                <span>View CV &amp; Portfolio PDF</span>
              </a>
            </div>

            {/* Direct Contact Bar */}
            <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-2.5 sm:gap-6 text-xs text-[#AAB6CC]">
              <a
                href={`https://wa.me/${CONTACT_INFO.phoneRaw}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-[#AAB6CC] hover:text-[#65E7F5] transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#65E7F5] shrink-0" />
                <span>WhatsApp: {CONTACT_INFO.phone}</span>
              </a>
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="inline-flex items-center gap-1.5 text-[#AAB6CC] hover:text-[#9B6DFF] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#9B6DFF] shrink-0" />
                <span className="truncate max-w-[280px] sm:max-w-none">{CONTACT_INFO.email}</span>
              </a>
            </div>
          </div>

          {/* Right Column: AI-Created Portrait in Refined Rounded Frame with Glow */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main AI-Created Portrait Frame */}
              <div className="rounded-3xl overflow-hidden border border-[#9B6DFF]/30 bg-[#111A2E] shadow-2xl shadow-[#5271FF]/20 relative group">
                <img
                  src="/assets/aistudio/muhammad-sardar-portrait_c116c294.png"
                  alt="Muhammad Sardar Baloch - AI-Assisted Website Developer & Logo Designer in creative studio"
                  className="w-full h-auto aspect-square object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1020]/85 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-[#F4F7FF]">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#65E7F5] shadow-[0_0_6px_#65E7F5]" />
                    <span className="font-semibold">Muhammad Sardar Baloch</span>
                  </div>
                  <span className="text-[#65E7F5] text-[11px] font-medium bg-[#17233B]/80 px-2.5 py-1 rounded-lg border border-[#9B6DFF]/25 backdrop-blur-sm">
                    AI-Assisted Workflow
                  </span>
                </div>
              </div>

              {/* 3D Robot Mascot Card Companion - Slightly Cute & Friendly */}
              <div className="absolute -bottom-5 -left-4 sm:-left-6 w-28 sm:w-32 rounded-2xl overflow-hidden border border-[#9B6DFF]/30 bg-[#17233B]/95 shadow-xl shadow-[#0B1020]/90 backdrop-blur-md p-1.5 animate-float-subtle">
                <div className="relative rounded-xl overflow-hidden bg-[#0B1020] aspect-square">
                  <img
                    src="/src/assets/images/mascot_robot_assistant_1792907848353.jpg"
                    alt="Creative mascot assistant"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-[#65E7F5] shadow-[0_0_6px_#65E7F5]" />
                </div>
                <div className="p-1 text-center">
                  <p className="text-[10px] font-bold text-[#F4F7FF] leading-tight">Mascot</p>
                  <p className="text-[8px] font-medium text-[#65E7F5] leading-tight">Creative Companion</p>
                </div>
              </div>

              {/* Verified Demo Status Card */}
              <div className="hidden sm:block absolute -top-3 -right-3 bg-[#17233B]/95 border border-[#9B6DFF]/30 text-[#F4F7FF] text-xs px-3.5 py-2 rounded-xl shadow-lg backdrop-blur-md">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-[#65E7F5]" />
                  <span className="font-semibold text-xs">8+ Website Demos</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="mt-16 pt-8 border-t border-[#9B6DFF]/15 flex justify-center">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 text-xs text-[#AAB6CC] hover:text-[#65E7F5] transition-colors"
          >
            <span>Explore Projects & Logo Concepts</span>
            <ArrowDown className="w-3.5 h-3.5 animate-bounce text-[#65E7F5]" />
          </a>
        </div>
      </div>
    </section>
  );
};
