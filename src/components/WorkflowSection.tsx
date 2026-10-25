import React from 'react';
import { WORKFLOW_STEPS } from '../data/portfolioData';
import { CheckCircle, Info } from 'lucide-react';

export const WorkflowSection: React.FC = () => {
  return (
    <section id="workflow" className="py-20 border-t border-[#9B6DFF]/15 bg-[#0B1020]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 pb-12">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#65E7F5] uppercase">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#65E7F5] shadow-[0_0_6px_#65E7F5]" />
            <span>Process & Delivery</span>
            <span aria-hidden="true" className="text-[#9B6DFF]/40">·</span>
            <span className="text-[#AAB6CC]">Three Straightforward Steps</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#F4F7FF] tracking-tight">
            How I Collaborate on Projects
          </h2>
          <p className="text-sm sm:text-base text-[#AAB6CC] leading-relaxed">
            A clear, predictable project cycle with honest boundaries, scheduled revisions, and reliable file handoff.
          </p>
        </div>

        {/* 3 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {WORKFLOW_STEPS.map((step) => (
            <div
              key={step.step}
              className="rounded-2xl border border-[#9B6DFF]/20 bg-[#17233B] p-7 flex flex-col justify-between hover:border-[#65E7F5]/50 hover:bg-[#1E2E4E] hover:shadow-xl hover:shadow-[#5271FF]/15 transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-3xl font-extrabold bg-gradient-to-r from-[#5271FF] via-[#7B68FF] to-[#9B6DFF] bg-clip-text text-transparent">
                    {step.step}
                  </span>
                  <span className="text-[11px] font-semibold text-[#65E7F5] bg-[#111A2E] px-2.5 py-1 rounded-lg border border-[#9B6DFF]/20">
                    Phase {step.step}
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="font-display text-xl font-bold text-[#F4F7FF]">
                    {step.title}
                  </h3>
                  <p className="text-xs font-medium text-[#65E7F5]">
                    {step.lead}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-[#AAB6CC] leading-relaxed">
                  {step.description}
                </p>

                <div className="pt-2 border-t border-[#9B6DFF]/15 space-y-2">
                  {step.points.map((pt) => (
                    <div key={pt} className="flex items-start gap-2 text-xs text-[#AAB6CC]">
                      <CheckCircle className="w-3.5 h-3.5 text-[#65E7F5] shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Essential Client Scope Distinction Card */}
        <div className="mt-12 rounded-2xl border border-[#9B6DFF]/30 bg-gradient-to-r from-[#17233B] via-[#141F35] to-[#111A2E] p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center gap-6 shadow-xl shadow-[#0B1020]">
          <div className="w-13 h-13 rounded-2xl bg-[#5271FF]/15 border border-[#65E7F5]/40 text-[#65E7F5] flex items-center justify-center shrink-0 shadow-inner">
            <Info className="w-6 h-6" />
          </div>
          <div className="space-y-1.5 flex-1">
            <h4 className="text-sm font-bold text-[#F4F7FF] uppercase tracking-wider flex items-center gap-2">
              <span>Project Handoff & Scope Distinction</span>
              <span className="text-[10px] text-[#65E7F5] bg-[#111A2E] px-2 py-0.5 rounded border border-[#9B6DFF]/20">Important</span>
            </h4>
            <p className="text-xs sm:text-sm text-[#AAB6CC] leading-relaxed">
              "For client projects, I primarily handle the website design, AI-assisted development, agreed revisions, and source-code/file delivery. Domain setup, hosting, deployment, and ongoing live-site support are generally handled by the client or agency unless a different arrangement is explicitly agreed."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
