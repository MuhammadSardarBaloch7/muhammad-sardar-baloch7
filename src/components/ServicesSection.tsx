import React from 'react';
import { Layout, Palette, CheckCircle, ArrowRight } from 'lucide-react';

interface ServicesSectionProps {
  onOpenInquiry: (service: 'website' | 'logo') => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenInquiry }) => {
  return (
    <section id="services" className="py-20 border-t border-[#9B6DFF]/15 bg-[#0B1020]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 pb-12">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#65E7F5] uppercase">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#65E7F5] shadow-[0_0_6px_#65E7F5]" />
            <span>Core Offerings</span>
            <span aria-hidden="true" className="text-[#9B6DFF]/40">·</span>
            <span className="text-[#AAB6CC]">Tailored To Your Brief</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#F4F7FF] tracking-tight">
            Services Built Around Your Project Scope
          </h2>
          <p className="text-sm sm:text-base text-[#AAB6CC] leading-relaxed">
            I offer focused website development and brand visual design using an AI-assisted workflow. Scope, revisions, and deliverable files are clearly established before every project.
          </p>
        </div>

        {/* 2 Main Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* SERVICE ONE: Website Design & AI-Assisted Development */}
          <div className="rounded-2xl border border-[#9B6DFF]/20 bg-[#17233B] p-8 flex flex-col justify-between hover:border-[#65E7F5]/50 hover:bg-[#1E2E4E] hover:shadow-xl hover:shadow-[#5271FF]/15 transition-all duration-300">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-[#5271FF]/20 to-[#9B6DFF]/20 border border-[#5271FF]/40 text-[#65E7F5] flex items-center justify-center shadow-inner">
                  <Layout className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono font-semibold text-[#65E7F5] bg-[#111A2E] px-2.5 py-1 rounded-lg border border-[#9B6DFF]/20">
                  Service 01
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="font-display text-2xl font-bold text-[#F4F7FF]">
                  Website Design & AI-Assisted Development
                </h3>
                <p className="text-sm text-[#AAB6CC] leading-relaxed">
                  I create and refine modern, responsive website layouts using AI-assisted development tools and hands-on adjustments according to the agreed project brief.
                </p>
              </div>

              {/* Capabilities checklist */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-bold text-[#F4F7FF] uppercase tracking-wider">
                  Included Capabilities
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-[#AAB6CC]">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#65E7F5] shrink-0 mt-0.5" />
                    <span>Business website layouts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#65E7F5] shrink-0 mt-0.5" />
                    <span>Clean landing pages</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#65E7F5] shrink-0 mt-0.5" />
                    <span>Restaurant & service sites</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#65E7F5] shrink-0 mt-0.5" />
                    <span>Responsive mobile & desktop</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#65E7F5] shrink-0 mt-0.5" />
                    <span>Website demo development</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#65E7F5] shrink-0 mt-0.5" />
                    <span>Page styling & visual tweaks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#65E7F5] shrink-0 mt-0.5" />
                    <span>HTML, CSS & JS edits</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#65E7F5] shrink-0 mt-0.5" />
                    <span>Clean source-code handoff</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-8 border-t border-[#9B6DFF]/15 mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <span className="text-xs text-[#AAB6CC]">
                Custom scope & timeline agreed per brief
              </span>
              <button
                onClick={() => onOpenInquiry('website')}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-gradient-to-r from-[#5271FF] to-[#9B6DFF] hover:from-[#4362F0] hover:to-[#8C5CF0] rounded-xl shadow-md shadow-[#5271FF]/25 hover:shadow-[#5271FF]/40 hover:scale-[1.02] active:scale-[0.98] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#65E7F5]"
              >
                <span>Inquire About Websites</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* SERVICE TWO: Logo Design & Brand Visuals */}
          <div className="rounded-2xl border border-[#9B6DFF]/20 bg-[#17233B] p-8 flex flex-col justify-between hover:border-[#65E7F5]/50 hover:bg-[#1E2E4E] hover:shadow-xl hover:shadow-[#9B6DFF]/15 transition-all duration-300">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-[#9B6DFF]/20 to-[#5271FF]/20 border border-[#9B6DFF]/40 text-[#65E7F5] flex items-center justify-center shadow-inner">
                  <Palette className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono font-semibold text-[#65E7F5] bg-[#111A2E] px-2.5 py-1 rounded-lg border border-[#9B6DFF]/20">
                  Service 02
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="font-display text-2xl font-bold text-[#F4F7FF]">
                  Logo Design & Brand Visuals
                </h3>
                <p className="text-sm text-[#AAB6CC] leading-relaxed">
                  I develop logo concepts and simple brand visuals based on a brief, design direction, and the agreed project requirements.
                </p>
              </div>

              {/* Capabilities checklist */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-bold text-[#F4F7FF] uppercase tracking-wider">
                  Included Capabilities
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-[#AAB6CC]">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#65E7F5] shrink-0 mt-0.5" />
                    <span>Initial logo concepts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#65E7F5] shrink-0 mt-0.5" />
                    <span>Simple, clean brand marks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#65E7F5] shrink-0 mt-0.5" />
                    <span>Visual style direction</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#65E7F5] shrink-0 mt-0.5" />
                    <span>Alternative concept options</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#65E7F5] shrink-0 mt-0.5" />
                    <span>Visual revisions within scope</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#65E7F5] shrink-0 mt-0.5" />
                    <span>Transparent PNG & JPG files</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#65E7F5] shrink-0 mt-0.5" />
                    <span>Light & dark contrast assets</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#65E7F5] shrink-0 mt-0.5" />
                    <span>Final agreed asset handoff</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-8 border-t border-[#9B6DFF]/15 mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <span className="text-xs text-[#AAB6CC]">
                Custom scope & timeline agreed per brief
              </span>
              <button
                onClick={() => onOpenInquiry('logo')}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-gradient-to-r from-[#7B68FF] to-[#9B6DFF] hover:from-[#6954F5] hover:to-[#8C5CF0] rounded-xl shadow-md shadow-[#9B6DFF]/25 hover:shadow-[#9B6DFF]/40 hover:scale-[1.02] active:scale-[0.98] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#65E7F5]"
              >
                <span>Inquire About Logos</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
