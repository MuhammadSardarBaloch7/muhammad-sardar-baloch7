import React, { useState } from 'react';
import { type ProjectItem, buildWhatsAppUrl, buildMailtoUrl } from '../utils/portfolioLogic';
import { X, ExternalLink, MessageCircle, Mail, ZoomIn, ZoomOut, Sun, Moon } from 'lucide-react';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onOpenInquiry: (service: 'website' | 'logo') => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
}) => {
  const [backdropMode, setBackdropMode] = useState<'dark' | 'light'>('dark');
  const [zoomed, setZoomed] = useState(false);

  if (!project) return null;

  const whatsappInquiryUrl = buildWhatsAppUrl({
    service: project.category,
    projectType: `${project.title} (${project.demoType})`,
    message: `I saw your "${project.title}" ${project.category === 'website' ? 'website demo' : 'logo concept'} on your portfolio and would like to discuss a similar project.`,
  });

  const mailtoInquiryUrl = buildMailtoUrl({
    service: project.category,
    projectType: `${project.title} (${project.demoType})`,
    message: `Hello Muhammad,\n\nI was reviewing your portfolio and really liked "${project.title}". I would like to inquire about your availability and discuss a project with a similar direction.`,
  });

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-[#0B1020]/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
    >
      <div className="relative w-full max-w-4xl bg-[#111A2E] border border-[#9B6DFF]/30 rounded-2xl shadow-2xl shadow-[#0B1020] overflow-hidden my-8">
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#9B6DFF]/20 bg-[#0B1020]/80">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#AAB6CC]">
              <span className="text-[#65E7F5] uppercase tracking-wider">{project.badge}</span>
              <span className="text-[#9B6DFF]/40">·</span>
              <span className="text-[#AAB6CC]">{project.demoType}</span>
            </div>
            <h2 id="modal-title" className="text-xl font-bold text-[#F4F7FF] font-display mt-0.5">
              {project.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            aria-label="Close project modal"
            className="p-2 text-[#AAB6CC] hover:text-[#65E7F5] hover:bg-[#17233B] rounded-xl transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#65E7F5]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-6">
          {/* Main Visual Display */}
          <div className="relative rounded-2xl overflow-hidden border border-[#9B6DFF]/20 bg-[#0B1020]">
            {/* Toolbar for image preview */}
            <div className="absolute top-3 right-3 z-10 flex items-center gap-2 bg-[#17233B]/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-[#9B6DFF]/30 text-xs shadow-md">
              {project.isTransparentPng && (
                <button
                  onClick={() => setBackdropMode(backdropMode === 'dark' ? 'light' : 'dark')}
                  className="flex items-center gap-1.5 text-[#F4F7FF] hover:text-[#65E7F5] transition-colors"
                  title="Toggle background to view transparent PNG"
                >
                  {backdropMode === 'dark' ? <Sun className="w-3.5 h-3.5 text-[#65E7F5]" /> : <Moon className="w-3.5 h-3.5 text-[#9B6DFF]" />}
                  <span className="font-medium">{backdropMode === 'dark' ? 'Light BG' : 'Dark BG'}</span>
                </button>
              )}
              <button
                onClick={() => setZoomed(!zoomed)}
                className="flex items-center gap-1.5 text-[#F4F7FF] hover:text-[#65E7F5] transition-colors"
                title="Toggle zoom"
              >
                {zoomed ? <ZoomOut className="w-3.5 h-3.5" /> : <ZoomIn className="w-3.5 h-3.5" />}
                <span className="font-medium">{zoomed ? 'Fit' : 'Zoom'}</span>
              </button>
            </div>

            <div
              className={`flex items-center justify-center p-4 transition-colors min-h-[340px] max-h-[560px] overflow-auto ${
                backdropMode === 'light' ? 'bg-[#F4F7FF]' : 'bg-[#0B1020]'
              }`}
            >
              <img
                src={project.image}
                alt={project.title}
                className={`max-w-full h-auto object-contain transition-all duration-300 ${
                  zoomed ? 'scale-125' : 'scale-100 max-h-[500px]'
                }`}
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Secondary image if available (e.g. Brickwork brand sheet) */}
          {project.secondaryImage && (
            <div className="space-y-2">
              <h4 className="text-xs font-semibold text-[#AAB6CC] uppercase tracking-wider">
                Full Identity Guidelines Board
              </h4>
              <div className="rounded-2xl overflow-hidden border border-[#9B6DFF]/20 bg-[#0B1020] p-2.5">
                <img
                  src={project.secondaryImage}
                  alt={`${project.title} secondary showcase`}
                  className="w-full h-auto object-contain rounded-xl"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          )}

          {/* Project Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="md:col-span-2 space-y-3">
              <h3 className="text-xs font-bold text-[#F4F7FF] uppercase tracking-wider">
                Project Overview
              </h3>
              <p className="text-sm text-[#AAB6CC] leading-relaxed">
                {project.description}
              </p>

              {/* Tags unboxed */}
              <div className="pt-2">
                <div className="text-xs text-[#AAB6CC] flex flex-wrap items-center gap-x-2 gap-y-1">
                  <span className="font-semibold text-[#F4F7FF]">Attributes:</span>
                  {project.tags.map((tag, idx) => (
                    <React.Fragment key={tag}>
                      <span className="text-[#AAB6CC]">{tag}</span>
                      {idx < project.tags.length - 1 && <span className="text-[#9B6DFF]/40">·</span>}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>

            {/* Meta & Actions Sidebar */}
            <div className="space-y-4 bg-[#17233B]/80 p-4.5 rounded-2xl border border-[#9B6DFF]/20">
              <div>
                <span className="text-xs text-[#AAB6CC] block">Deliverable Format</span>
                <span className="text-xs font-semibold text-[#F4F7FF]">
                  {project.category === 'website' ? 'Clean HTML/CSS/JS Source Files' : 'Vector & Transparent Raster Assets'}
                </span>
              </div>

              {project.replitUrl && (
                <div>
                  <span className="text-xs text-[#AAB6CC] block">Prototype Reference</span>
                  <a
                    href={project.replitUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-[#65E7F5] hover:underline transition-colors"
                  >
                    <span>View Replit Dev Link</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              )}

              {/* Inquire for similar work */}
              <div className="pt-2 border-t border-[#9B6DFF]/20 space-y-2">
                <span className="text-xs font-semibold text-[#F4F7FF] block">
                  Discuss a Similar Project
                </span>
                <a
                  href={whatsappInquiryUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-3 py-2.5 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl transition-all shadow-sm"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp Inquiry</span>
                </a>
                <a
                  href={mailtoInquiryUrl}
                  className="w-full inline-flex items-center justify-center gap-2 px-3 py-2.5 text-xs font-semibold text-white bg-gradient-to-r from-[#5271FF] to-[#9B6DFF] hover:from-[#4362F0] hover:to-[#8C5CF0] rounded-xl transition-all shadow-sm"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Email Inquiry</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
