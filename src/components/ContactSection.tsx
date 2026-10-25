import React, { useState } from 'react';
import { CONTACT_INFO, buildWhatsAppUrl, buildMailtoUrl } from '../utils/portfolioLogic';
import { MessageCircle, Mail, Copy, Check, Clock } from 'lucide-react';

interface ContactSectionProps {
  initialService?: 'website' | 'logo' | 'both';
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialService = 'both' }) => {
  const [name, setName] = useState('');
  const [service, setService] = useState<'website' | 'logo' | 'both'>(initialService);
  const [projectType, setProjectType] = useState('');
  const [message, setMessage] = useState('');
  const [copied, setCopied] = useState(false);

  const whatsappUrl = buildWhatsAppUrl({
    name,
    service,
    projectType,
    message,
  });

  const mailtoUrl = buildMailtoUrl({
    name,
    service,
    projectType,
    message,
  });

  const handleCopyMessage = async () => {
    const formattedText = `Project Inquiry for Muhammad Sardar Baloch:
Service: ${service === 'website' ? 'Website Demo' : service === 'logo' ? 'Logo Concept' : 'Website & Logo'}
Client Name: ${name || 'Prospective Client'}
Project Type: ${projectType || 'General Inquiry'}
Message: ${message || 'I would like to discuss a new project.'}`;

    try {
      await navigator.clipboard.writeText(formattedText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // fallback
    }
  };

  return (
    <section id="contact" className="py-20 border-t border-[#9B6DFF]/15 bg-[#0B1020]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 pb-12">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#65E7F5] uppercase">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#65E7F5] shadow-[0_0_6px_#65E7F5]" />
            <span>Direct Inquiry</span>
            <span aria-hidden="true" className="text-[#9B6DFF]/40">·</span>
            <span className="text-[#AAB6CC]">Available For Collaboration</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#F4F7FF] tracking-tight">
            Start a Project or Discuss a Demo
          </h2>
          <p className="text-sm sm:text-base text-[#AAB6CC] leading-relaxed">
            Reach out directly through WhatsApp or email. Fill in your project preferences below to generate a pre-filled, organized inquiry message.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Contact Cards */}
          <div className="lg:col-span-5 space-y-4">
            {/* WhatsApp Card */}
            <a
              href={`https://wa.me/${CONTACT_INFO.phoneRaw}?text=${encodeURIComponent(
                "Hi Muhammad, I'm interested in discussing a website or logo project with you."
              )}`}
              target="_blank"
              rel="noreferrer"
              className="group block rounded-2xl border border-[#9B6DFF]/25 bg-[#17233B] p-6 hover:border-[#65E7F5]/50 hover:bg-[#1E2E4E] transition-all shadow-xl shadow-[#0B1020]"
            >
              <div className="flex items-center justify-between">
                <div className="w-13 h-13 rounded-2xl bg-emerald-950/60 border border-emerald-500/30 text-[#65E7F5] flex items-center justify-center shadow-inner">
                  <MessageCircle className="w-6 h-6 text-emerald-400" />
                </div>
                <span className="text-xs font-semibold text-[#65E7F5] group-hover:translate-x-1 transition-transform">
                  Chat Now →
                </span>
              </div>
              <div className="mt-4 space-y-1">
                <h3 className="font-display text-lg font-bold text-[#F4F7FF] group-hover:text-[#65E7F5] transition-colors">
                  WhatsApp Direct
                </h3>
                <p className="text-sm font-mono text-[#F4F7FF]">
                  {CONTACT_INFO.phone}
                </p>
                <p className="text-xs text-[#AAB6CC] pt-1">
                  Fastest way to get in touch for rapid project inquiries and brief reviews.
                </p>
              </div>
            </a>

            {/* Email Card */}
            <a
              href={`mailto:${CONTACT_INFO.email}?subject=${encodeURIComponent(
                'Project Inquiry: Website / Logo Design'
              )}`}
              className="group block rounded-2xl border border-[#9B6DFF]/25 bg-[#17233B] p-6 hover:border-[#9B6DFF]/60 hover:bg-[#1E2E4E] transition-all shadow-xl shadow-[#0B1020]"
            >
              <div className="flex items-center justify-between">
                <div className="w-13 h-13 rounded-2xl bg-[#9B6DFF]/15 border border-[#9B6DFF]/40 text-[#9B6DFF] flex items-center justify-center shadow-inner">
                  <Mail className="w-6 h-6 text-[#9B6DFF]" />
                </div>
                <span className="text-xs font-semibold text-[#9B6DFF] group-hover:translate-x-1 transition-transform">
                  Send Email →
                </span>
              </div>
              <div className="mt-4 space-y-1">
                <h3 className="font-display text-lg font-bold text-[#F4F7FF] group-hover:text-[#9B6DFF] transition-colors">
                  Direct Email
                </h3>
                <p className="text-xs sm:text-sm font-mono text-[#F4F7FF] break-all">
                  {CONTACT_INFO.email}
                </p>
                <p className="text-xs text-[#AAB6CC] pt-1">
                  Ideal for detailed briefs, reference attachments, and formal project requests.
                </p>
              </div>
            </a>

            {/* Response Time & Collaboration Notice */}
            <div className="rounded-2xl border border-[#9B6DFF]/20 bg-[#111A2E] p-4.5 text-xs text-[#AAB6CC] space-y-2">
              <div className="flex items-center gap-2 text-[#F4F7FF] font-semibold">
                <Clock className="w-4 h-4 text-[#65E7F5]" />
                <span>Response Time & Collaboration</span>
              </div>
              <p className="leading-relaxed text-[11px]">
                I reply promptly to all genuine inquiries. Open to remote project-based tasks, agency subcontracting, and entry-level website demo creation.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Inquiry Builder */}
          <div className="lg:col-span-7 rounded-2xl border border-[#9B6DFF]/25 bg-[#17233B] p-6 sm:p-8 shadow-xl shadow-[#0B1020] space-y-6">
            <div className="space-y-1">
              <h3 className="font-display text-xl font-bold text-[#F4F7FF]">
                Project Inquiry Form
              </h3>
              <p className="text-xs text-[#AAB6CC]">
                Configure your project details to create a clear message and send it in one click.
              </p>
            </div>

            <div className="space-y-4">
              {/* Service Selection Segmented Control */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-[#F4F7FF] block">
                  Select Desired Service
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setService('website')}
                    className={`py-2.5 px-3 text-xs font-semibold rounded-xl border transition-all ${
                      service === 'website'
                        ? 'bg-gradient-to-r from-[#5271FF] to-[#9B6DFF] border-transparent text-white shadow-md shadow-[#5271FF]/25'
                        : 'bg-[#0B1020] border-[#9B6DFF]/20 text-[#AAB6CC] hover:text-[#F4F7FF]'
                    }`}
                  >
                    Website Demo
                  </button>
                  <button
                    type="button"
                    onClick={() => setService('logo')}
                    className={`py-2.5 px-3 text-xs font-semibold rounded-xl border transition-all ${
                      service === 'logo'
                        ? 'bg-gradient-to-r from-[#5271FF] to-[#9B6DFF] border-transparent text-white shadow-md shadow-[#5271FF]/25'
                        : 'bg-[#0B1020] border-[#9B6DFF]/20 text-[#AAB6CC] hover:text-[#F4F7FF]'
                    }`}
                  >
                    Logo Concept
                  </button>
                  <button
                    type="button"
                    onClick={() => setService('both')}
                    className={`py-2.5 px-3 text-xs font-semibold rounded-xl border transition-all ${
                      service === 'both'
                        ? 'bg-gradient-to-r from-[#5271FF] to-[#9B6DFF] border-transparent text-white shadow-md shadow-[#5271FF]/25'
                        : 'bg-[#0B1020] border-[#9B6DFF]/20 text-[#AAB6CC] hover:text-[#F4F7FF]'
                    }`}
                  >
                    Both Services
                  </button>
                </div>
              </div>

              {/* Name & Project Type inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="client-name" className="text-xs font-bold text-[#F4F7FF] block">
                    Your Name / Company
                  </label>
                  <input
                    id="client-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Sarah Jenkins"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#0B1020] border border-[#9B6DFF]/25 text-sm text-[#F4F7FF] placeholder-[#AAB6CC]/40 focus:outline-none focus:border-[#65E7F5] focus:ring-1 focus:ring-[#65E7F5] transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="project-type" className="text-xs font-bold text-[#F4F7FF] block">
                    Project Type / Industry
                  </label>
                  <input
                    id="project-type"
                    type="text"
                    value={projectType}
                    onChange={(e) => setProjectType(e.target.value)}
                    placeholder="e.g. Restaurant, E-commerce, Startup"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#0B1020] border border-[#9B6DFF]/25 text-sm text-[#F4F7FF] placeholder-[#AAB6CC]/40 focus:outline-none focus:border-[#65E7F5] focus:ring-1 focus:ring-[#65E7F5] transition-all"
                  />
                </div>
              </div>

              {/* Project Brief / Notes */}
              <div className="space-y-1.5">
                <label htmlFor="project-message" className="text-xs font-bold text-[#F4F7FF] block">
                  Project Brief or Key Requirements
                </label>
                <textarea
                  id="project-message"
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Outline your target pages, required sections, branding ideas, or reference examples..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#0B1020] border border-[#9B6DFF]/25 text-sm text-[#F4F7FF] placeholder-[#AAB6CC]/40 focus:outline-none focus:border-[#65E7F5] focus:ring-1 focus:ring-[#65E7F5] transition-all"
                />
              </div>

              {/* One-click Action Buttons */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-xs font-semibold text-white shadow-md shadow-emerald-950/40 hover:scale-[1.02] active:scale-[0.98] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send via WhatsApp</span>
                </a>

                <a
                  href={mailtoUrl}
                  className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-[#5271FF] via-[#7B68FF] to-[#9B6DFF] hover:from-[#4362F0] hover:to-[#8C5CF0] text-xs font-semibold text-white shadow-md shadow-[#5271FF]/25 hover:scale-[1.02] active:scale-[0.98] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#65E7F5]"
                >
                  <Mail className="w-4 h-4" />
                  <span>Send via Email</span>
                </a>
              </div>

              {/* Copy Formatted Text helper */}
              <div className="pt-2 border-t border-[#9B6DFF]/15 flex items-center justify-between text-xs text-[#AAB6CC]">
                <span>Want to paste your inquiry into another app?</span>
                <button
                  type="button"
                  onClick={handleCopyMessage}
                  className="inline-flex items-center gap-1.5 text-[#65E7F5] hover:text-[#F4F7FF] transition-colors font-medium"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied to Clipboard!' : 'Copy Formatted Text'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
