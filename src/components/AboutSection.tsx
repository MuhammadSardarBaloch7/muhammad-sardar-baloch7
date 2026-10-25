import React from 'react';
import { CORE_SKILLS } from '../data/portfolioData';
import { CONTACT_INFO } from '../utils/portfolioLogic';
import { Check, Terminal, Download } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 border-t border-[#9B6DFF]/15 bg-[#0B1020]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Profile Card & Avatar Presentation */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl border border-[#9B6DFF]/25 bg-[#17233B] p-6 sm:p-7 space-y-6 shadow-xl shadow-[#0B1020]">
              {/* Profile Avatar / Real Photograph Presentation */}
              <div className="flex items-center gap-4">
                <div className="relative shrink-0">
                  <div className="w-22 h-22 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-[#9B6DFF]/35 shadow-lg shadow-[#5271FF]/25 bg-[#111A2E] relative group">
                    <img
                      src="/assets/aistudio/Screenshot_2026-10-25-13-01-01-01_7352322957d4404136654ef4adb64504_a65b19e7.jpg"
                      alt="Muhammad Sardar Baloch - Real photograph"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B1020]/40 to-transparent pointer-events-none" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-[#111A2E] border-2 border-[#17233B] flex items-center justify-center text-[#65E7F5]" title="Verified Profile">
                    <Terminal className="w-3 h-3" />
                  </div>
                </div>

                <div>
                  <h3 className="font-display text-xl font-bold text-[#F4F7FF]">
                    {CONTACT_INFO.name}
                  </h3>
                  <p className="text-xs text-[#65E7F5] font-semibold">
                    {CONTACT_INFO.primaryTitle}
                  </p>
                  <p className="text-[11px] text-[#AAB6CC] mt-1">
                    Available for Remote &amp; Project Roles
                  </p>
                  <span className="inline-flex items-center gap-1.5 mt-2 px-2 py-0.5 rounded-md bg-[#5271FF]/15 border border-[#5271FF]/30 text-[10px] text-[#65E7F5] font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#65E7F5]" />
                    Verified Developer Profile
                  </span>
                </div>
              </div>

              {/* Accompanying 3D Mascot Studio Visual */}
              <div className="rounded-xl overflow-hidden border border-[#9B6DFF]/20 bg-[#0B1020] p-3 flex items-center gap-4">
                <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 border border-[#9B6DFF]/25 bg-[#17233B]">
                  <img
                    src="/src/assets/images/mascot_robot_assistant_1792907848353.jpg"
                    alt="AI Assistant Robot Companion"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-xs text-[#AAB6CC]">
                  <span className="font-bold text-[#F4F7FF] block">
                    AI-Assisted Build Workflow
                  </span>
                  <span className="text-[#AAB6CC] text-[11px] leading-tight block mt-0.5">
                    Utilizing modern generative tools for rapid prototyping and layout creation, followed by hands-on code refinement.
                  </span>
                </div>
              </div>

              {/* Work Preferences Box */}
              <div className="pt-2 border-t border-[#9B6DFF]/15 text-xs text-[#AAB6CC] space-y-2.5">
                <span className="font-bold text-[#F4F7FF] block uppercase tracking-wider text-[11px]">
                  Work Preferences
                </span>
                <div className="grid grid-cols-2 gap-2 text-[#AAB6CC]">
                  <div className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-[#65E7F5]" />
                    <span>Remote collaboration</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-[#65E7F5]" />
                    <span>Junior-level roles</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-[#65E7F5]" />
                    <span>Project-based work</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-[#65E7F5]" />
                    <span>Clear requirements</span>
                  </div>
                </div>
              </div>

              {/* Quick Resume Link */}
              <div className="pt-2">
                <a
                  href="#resume"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#111A2E] hover:bg-[#1E2E4E] border border-[#9B6DFF]/30 hover:border-[#65E7F5]/50 text-xs font-semibold text-[#F4F7FF] transition-all shadow-sm"
                >
                  <Download className="w-3.5 h-3.5 text-[#65E7F5]" />
                  <span>View CV &amp; Professional Portfolio (PDF)</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Bio Prose & Core Skills */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#65E7F5] uppercase">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#65E7F5] shadow-[0_0_6px_#65E7F5]" />
                <span>About Me</span>
                <span aria-hidden="true" className="text-[#9B6DFF]/40">·</span>
                <span className="text-[#AAB6CC]">Professional Summary</span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#F4F7FF] tracking-tight">
                Honest, Capable, and Ready to Deliver
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-[#AAB6CC] leading-relaxed">
                <p>
                  Hi, I'm <strong className="text-[#F4F7FF] font-semibold">{CONTACT_INFO.name}</strong>, an entry-level website developer and logo designer. I use AI-assisted tools to create website demos, refine layouts, and develop logo concepts. I care about clear briefs, thoughtful visual design, responsive layouts, and reliable project handoffs.
                </p>
                <p>
                  I'm interested in suitable remote, junior-level, and project-based opportunities where I can contribute, improve my skills, and deliver work according to the agreed requirements.
                </p>
              </div>
            </div>

            {/* Core Skills Matrix */}
            <div className="space-y-4 pt-4 border-t border-[#9B6DFF]/15">
              <h3 className="text-xs font-bold text-[#F4F7FF] uppercase tracking-wider">
                Core Skills & Capabilities (From CV)
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {CORE_SKILLS.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-[#17233B] border border-[#9B6DFF]/20 hover:border-[#65E7F5]/40 text-[#F4F7FF] transition-colors"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-[#65E7F5] shadow-[0_0_6px_#65E7F5] shrink-0" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
