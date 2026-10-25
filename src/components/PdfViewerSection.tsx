import React, { useState } from 'react';
import { CONTACT_INFO } from '../utils/portfolioLogic';
import { FileText, Download, ExternalLink, ShieldCheck, Eye, EyeOff, Sparkles, CheckCircle2 } from 'lucide-react';

export const PdfViewerSection: React.FC = () => {
  const [showEmbeddedViewer, setShowEmbeddedViewer] = useState(false);

  return (
    <section id="resume" className="py-20 border-t border-[#9B6DFF]/15 bg-[#0B1020]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 pb-12">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#65E7F5] uppercase">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#65E7F5] shadow-[0_0_6px_#65E7F5]" />
            <span>Professional Document</span>
            <span aria-hidden="true" className="text-[#9B6DFF]/40">·</span>
            <span className="text-[#AAB6CC]">Curriculum Vitae</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#F4F7FF] tracking-tight">
            My CV &amp; Professional Portfolio
          </h2>
          <p className="text-sm sm:text-base text-[#AAB6CC] leading-relaxed">
            Discover my skills, services, and selected work in my downloadable professional document.
          </p>
        </div>

        {/* Realistic Document Preview Card Presentation */}
        <div className="rounded-3xl border border-[#9B6DFF]/25 bg-[#17233B] p-6 sm:p-9 shadow-2xl shadow-[#0B1020] relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-[#5271FF]/10 via-[#9B6DFF]/10 to-transparent blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left: Realistic Document Sheet Thumbnail / First-Page Preview */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative mx-auto max-w-sm rounded-2xl p-1 bg-gradient-to-b from-[#9B6DFF]/30 via-[#5271FF]/20 to-[#65E7F5]/20 shadow-2xl shadow-[#5271FF]/20 group">
                {/* Physical Document Mockup Sheet */}
                <div className="rounded-xl bg-[#0F172A] border border-[#9B6DFF]/30 p-5 sm:p-6 text-xs text-[#AAB6CC] space-y-4 shadow-inner relative overflow-hidden">
                  {/* Luxury Document Top Banner */}
                  <div className="border-b border-[#9B6DFF]/25 pb-3">
                    <div className="flex items-center justify-between text-[10px] text-[#65E7F5] font-mono uppercase tracking-widest">
                      <span>Curriculum Vitae</span>
                      <span className="flex items-center gap-1 text-emerald-400 font-semibold">
                        <CheckCircle2 className="w-3 h-3" />
                        Verified
                      </span>
                    </div>
                    <h4 className="font-display text-lg font-bold text-[#F4F7FF] mt-1 tracking-tight">
                      {CONTACT_INFO.name}
                    </h4>
                    <p className="text-[11px] text-[#65E7F5] font-semibold mt-0.5">
                      {CONTACT_INFO.primaryTitle}
                    </p>
                  </div>

                  {/* Summary Snippet inside document */}
                  <div className="space-y-1.5 text-[11px] leading-relaxed text-[#CBD5E1]">
                    <div className="flex items-center gap-1.5 text-[#9B6DFF] font-semibold uppercase text-[9px] tracking-wider">
                      <Sparkles className="w-3 h-3" />
                      <span>Executive Overview</span>
                    </div>
                    <p className="italic text-[#E2E8F0] line-clamp-3">
                      “AI-assisted website developer and brand logo designer specialized in modern responsive web layouts, custom revisions, and distinct visual identities.”
                    </p>
                  </div>

                  {/* Core Matrix inside document preview */}
                  <div className="pt-2 border-t border-[#9B6DFF]/15 space-y-2">
                    <span className="text-[9px] font-bold text-[#94A3B8] uppercase tracking-wider block">
                      Featured In Document:
                    </span>
                    <div className="grid grid-cols-2 gap-1.5 text-[10px] text-[#F1F5F9]">
                      <div className="flex items-center gap-1 bg-[#1E293B] px-2 py-1 rounded border border-[#9B6DFF]/20">
                        <span className="w-1 h-1 rounded-full bg-[#65E7F5]" />
                        <span className="truncate">8+ Web Demos</span>
                      </div>
                      <div className="flex items-center gap-1 bg-[#1E293B] px-2 py-1 rounded border border-[#9B6DFF]/20">
                        <span className="w-1 h-1 rounded-full bg-[#65E7F5]" />
                        <span className="truncate">Logo Concepts</span>
                      </div>
                      <div className="flex items-center gap-1 bg-[#1E293B] px-2 py-1 rounded border border-[#9B6DFF]/20">
                        <span className="w-1 h-1 rounded-full bg-[#65E7F5]" />
                        <span className="truncate">AI-Assisted Build</span>
                      </div>
                      <div className="flex items-center gap-1 bg-[#1E293B] px-2 py-1 rounded border border-[#9B6DFF]/20">
                        <span className="w-1 h-1 rounded-full bg-[#65E7F5]" />
                        <span className="truncate">Worldwide Remote</span>
                      </div>
                    </div>
                  </div>

                  {/* Document Footer Ribbon */}
                  <div className="pt-2 border-t border-[#9B6DFF]/15 flex items-center justify-between text-[9px] text-[#94A3B8]">
                    <span>PDF · High-Resolution</span>
                    <span className="text-[#65E7F5] font-mono">Page 1 of 2</span>
                  </div>

                  {/* Hover watermark cue */}
                  <div className="absolute inset-0 bg-[#0B1020]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                    <span className="bg-[#17233B]/90 border border-[#65E7F5]/40 px-3 py-1.5 rounded-xl text-xs font-semibold text-[#F4F7FF] shadow-lg backdrop-blur-sm">
                      Official Document Preview
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Metadata, Note, and Clear Action Buttons */}
            <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
              {/* Document Identity Lockup */}
              <div className="flex flex-wrap items-center gap-3">
                {/* Small Document Icon with PDF File-Type Label */}
                <div className="flex items-center gap-2 px-3 py-1 rounded-xl bg-[#5271FF]/15 border border-[#5271FF]/30 text-xs font-semibold text-[#65E7F5]">
                  <FileText className="w-3.5 h-3.5 text-[#65E7F5]" />
                  <span>PDF Document</span>
                </div>
                <span className="text-xs text-[#AAB6CC]">· 2 Pages · Authentic Document</span>
              </div>

              <div className="space-y-2">
                <h3 className="font-display text-2xl font-bold text-[#F4F7FF]">
                  {CONTACT_INFO.name}
                </h3>
                <p className="text-sm text-[#65E7F5] font-semibold">
                  {CONTACT_INFO.primaryTitle}
                </p>
                {/* Required Short Note */}
                <p className="text-base text-[#F4F7FF] font-medium pt-1">
                  “View or download my CV and portfolio.”
                </p>
                <p className="text-xs text-[#AAB6CC] leading-relaxed">
                  Contains complete technical skills, service descriptions, project scope guidelines, verified contact channels, and design workflow.
                </p>
              </div>

              {/* Verified Key Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-[#AAB6CC] pt-2 border-t border-[#9B6DFF]/15">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#65E7F5] shrink-0" />
                  <span>8+ Website Demos Included</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#65E7F5] shrink-0" />
                  <span>Logo Concepts &amp; Brand Visuals</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#65E7F5] shrink-0" />
                  <span>AI-Assisted Build Workflow</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#65E7F5] shrink-0" />
                  <span>Source Code File Delivery</span>
                </div>
              </div>

              {/* The Two Required Working Buttons */}
              <div className="pt-3 flex flex-wrap items-center gap-3.5">
                {/* Button 1: Preview PDF */}
                <a
                  href={CONTACT_INFO.pdfPath}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3 text-sm font-semibold text-[#F4F7FF] bg-[#111A2E] hover:bg-[#1E2E4E] border border-[#9B6DFF]/35 hover:border-[#65E7F5]/60 rounded-xl transition-all shadow-md hover:scale-[1.02] active:scale-[0.98] inline-flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#65E7F5]"
                >
                  <ExternalLink className="w-4 h-4 text-[#65E7F5]" />
                  <span>Preview PDF</span>
                </a>

                {/* Button 2: Download PDF */}
                <a
                  href={CONTACT_INFO.pdfPath}
                  download={CONTACT_INFO.pdfFilename}
                  className="px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-[#5271FF] via-[#7B68FF] to-[#9B6DFF] hover:from-[#4362F0] hover:to-[#8C5CF0] rounded-xl shadow-lg shadow-[#5271FF]/25 hover:shadow-[#5271FF]/40 hover:scale-[1.02] active:scale-[0.98] transition-all inline-flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#65E7F5]"
                >
                  <Download className="w-4 h-4" />
                  <span>Download PDF</span>
                </a>

                {/* Inline Toggle Button */}
                <button
                  onClick={() => setShowEmbeddedViewer(!showEmbeddedViewer)}
                  className="inline-flex items-center gap-2 px-4 py-3 text-xs font-medium text-[#AAB6CC] hover:text-[#65E7F5] bg-transparent hover:bg-[#111A2E]/60 rounded-xl transition-colors"
                >
                  {showEmbeddedViewer ? (
                    <>
                      <EyeOff className="w-4 h-4 text-[#9B6DFF]" />
                      <span>Hide Embedded Reader</span>
                    </>
                  ) : (
                    <>
                      <Eye className="w-4 h-4 text-[#9B6DFF]" />
                      <span>Show Embedded Reader</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Embedded PDF iframe (optional toggle) */}
          {showEmbeddedViewer && (
            <div className="mt-8 pt-6 border-t border-[#9B6DFF]/20">
              <div className="rounded-2xl overflow-hidden border border-[#9B6DFF]/25 bg-[#0B1020]">
                <div className="p-3 bg-[#111A2E] border-b border-[#9B6DFF]/20 flex items-center justify-between text-xs text-[#AAB6CC]">
                  <span className="font-medium text-[#F4F7FF] flex items-center gap-2">
                    <FileText className="w-3.5 h-3.5 text-[#65E7F5]" />
                    Interactive PDF Document Reader
                  </span>
                  <a
                    href={CONTACT_INFO.pdfPath}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#65E7F5] hover:underline flex items-center gap-1 font-semibold"
                  >
                    <span>Open Fullscreen</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                <iframe
                  src={`${CONTACT_INFO.pdfPath}#toolbar=0`}
                  title="Muhammad Sardar Baloch Luxury CV and Portfolio Document"
                  className="w-full h-[600px] border-0"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
