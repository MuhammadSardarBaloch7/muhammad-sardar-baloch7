import React, { useState } from 'react';
import { ALL_PROJECTS } from '../data/portfolioData';
import { filterProjects, type ProjectItem } from '../utils/portfolioLogic';
import { Eye, ArrowUpRight, Sparkles } from 'lucide-react';

interface ProjectsGalleryProps {
  onSelectProject: (project: ProjectItem) => void;
}

export const ProjectsGallery: React.FC<ProjectsGalleryProps> = ({ onSelectProject }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'website' | 'logo'>('all');

  const filteredProjects = filterProjects(ALL_PROJECTS, activeFilter);

  return (
    <section id="projects" className="py-20 border-t border-[#9B6DFF]/15 bg-[#0B1020]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Functional Filter Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#9B6DFF]/15">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#65E7F5] uppercase">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#65E7F5] shadow-[0_0_6px_#65E7F5]" />
              <span>Curated Portfolio</span>
              <span aria-hidden="true" className="text-[#9B6DFF]/40">·</span>
              <span className="text-[#AAB6CC]">Demos & Visual Concepts</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#F4F7FF] tracking-tight">
              Website Demos & Logo Designs
            </h2>
            <p className="text-sm sm:text-base text-[#AAB6CC] max-w-xl">
              Explore personal website demos, responsive page layouts, and logo concepts crafted using an AI-assisted build workflow.
            </p>
          </div>

          {/* Interactive Filter Tabs (functional segmented buttons) */}
          <div
            role="tablist"
            aria-label="Filter projects"
            className="flex items-center p-1.5 bg-[#111A2E] border border-[#9B6DFF]/20 rounded-2xl self-start md:self-auto shadow-inner shadow-[#0B1020]"
          >
            <button
              role="tab"
              aria-selected={activeFilter === 'all'}
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#65E7F5] ${
                activeFilter === 'all'
                  ? 'bg-gradient-to-r from-[#5271FF] to-[#9B6DFF] text-white shadow-md shadow-[#5271FF]/25'
                  : 'text-[#AAB6CC] hover:text-[#F4F7FF] hover:bg-[#17233B]'
              }`}
            >
              All Work ({ALL_PROJECTS.length})
            </button>
            <button
              role="tab"
              aria-selected={activeFilter === 'website'}
              onClick={() => setActiveFilter('website')}
              className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#65E7F5] ${
                activeFilter === 'website'
                  ? 'bg-gradient-to-r from-[#5271FF] to-[#9B6DFF] text-white shadow-md shadow-[#5271FF]/25'
                  : 'text-[#AAB6CC] hover:text-[#F4F7FF] hover:bg-[#17233B]'
              }`}
            >
              Website Demos (
              {ALL_PROJECTS.filter((p) => p.category === 'website').length})
            </button>
            <button
              role="tab"
              aria-selected={activeFilter === 'logo'}
              onClick={() => setActiveFilter('logo')}
              className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#65E7F5] ${
                activeFilter === 'logo'
                  ? 'bg-gradient-to-r from-[#5271FF] to-[#9B6DFF] text-white shadow-md shadow-[#5271FF]/25'
                  : 'text-[#AAB6CC] hover:text-[#F4F7FF] hover:bg-[#17233B]'
              }`}
            >
              Logo Concepts ({ALL_PROJECTS.filter((p) => p.category === 'logo').length})
            </button>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-10">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group cursor-pointer rounded-2xl bg-[#17233B] border border-[#9B6DFF]/20 hover:border-[#65E7F5]/50 hover:bg-[#1E2E4E] hover:shadow-xl hover:shadow-[#5271FF]/15 transition-all duration-300 overflow-hidden flex flex-col justify-between hover:-translate-y-1"
            >
              <div>
                {/* Media frame */}
                <div className="relative aspect-[16/10] bg-[#0B1020] overflow-hidden border-b border-[#9B6DFF]/15 flex items-center justify-center p-3">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-contain group-hover:scale-[1.03] transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-[#0B1020]/25 group-hover:bg-[#0B1020]/45 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100 backdrop-blur-[2px]">
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-[#5271FF] to-[#9B6DFF] text-xs font-semibold text-white shadow-lg shadow-[#5271FF]/30">
                      <Eye className="w-3.5 h-3.5 text-[#65E7F5]" />
                      <span>View Details</span>
                    </span>
                  </div>
                </div>

                {/* Card Information */}
                <div className="p-5 space-y-3">
                  {/* Unboxed category kicker */}
                  <div className="flex items-center gap-2 text-xs text-[#AAB6CC]">
                    <span className="text-[#65E7F5] font-semibold uppercase tracking-wider">
                      {project.badge}
                    </span>
                    <span className="text-[#9B6DFF]/40">·</span>
                    <span className="text-[#AAB6CC]">{project.demoType}</span>
                  </div>

                  <h3 className="font-display text-lg font-bold text-[#F4F7FF] group-hover:text-[#65E7F5] transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs text-[#AAB6CC] line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Bottom Tags & Affordance */}
              <div className="px-5 pb-5 pt-3 border-t border-[#9B6DFF]/15 flex items-center justify-between text-xs text-[#AAB6CC]">
                <div className="truncate max-w-[80%] font-medium">
                  {project.tags.slice(0, 2).join(' · ')}
                </div>
                <div className="p-1 rounded-lg text-[#AAB6CC] group-hover:text-[#65E7F5] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}

          {/* More Projects Coming Soon card */}
          <div className="rounded-2xl border border-dashed border-[#9B6DFF]/30 bg-[#111A2E]/50 p-6 flex flex-col items-center justify-center text-center space-y-3 min-h-[300px]">
            <div className="w-11 h-11 rounded-2xl bg-[#17233B] border border-[#9B6DFF]/25 flex items-center justify-center text-[#65E7F5] shadow-md shadow-[#5271FF]/10">
              <Sparkles className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <h4 className="font-display font-semibold text-[#F4F7FF] text-sm">
                More Demos & Concepts Coming Soon
              </h4>
              <p className="text-xs text-[#AAB6CC] max-w-xs mt-1.5 leading-relaxed">
                I continuously build new website layouts and logo marks. New personal demonstrations and screen recordings will be added as they are finalized.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
