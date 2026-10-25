import React, { useState, useRef } from 'react';
import { Play, Pause, Maximize, Info, CheckCircle2 } from 'lucide-react';

interface DemoVideoItem {
  id: string;
  title: string;
  clientContext: string;
  description: string;
  videoSrc: string;
  posterSrc: string;
  durationLabel: string;
  tags: string[];
}

const DEMO_VIDEOS: DemoVideoItem[] = [
  {
    id: 'demo-1',
    title: 'The Pizza Lab — Responsive Restaurant Mobile Flow',
    clientContext: 'Fast Food Restaurant in Kotla Jam, Pakistan',
    description:
      'Screen recording demonstrating mobile-first responsiveness, smooth navigation, instant phone calling trigger, and interactive location directions.',
    videoSrc: '/videos/website-demo-01.mp4',
    posterSrc: '/assets/aistudio/IMG_20261025_10502384_a6d2ea05.jpeg',
    durationLabel: 'Screen Recording',
    tags: ['Mobile Navigation', 'Menu Display', 'Call Action'],
  },
  {
    id: 'demo-2',
    title: 'Burgs Gourmet Burgers — Dark Editorial Showcase',
    clientContext: 'Gourmet Burger Joint (Arab Street, Singapore)',
    description:
      'Walkthrough of the high-contrast dark theme food landing page, culinary category transitions, Foodpanda delivery CTA, and Replit deployment.',
    videoSrc: '/videos/website-demo-02.mp4',
    posterSrc: '/assets/aistudio/IMG_20261025_10495258_8c6288aa.jpeg',
    durationLabel: 'Screen Recording',
    tags: ['Dark Theme Layout', 'Culinary Showcase', 'Replit Workflow'],
  },
];

export const VideoShowcase: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<Record<string, boolean>>({});
  const [showAssetGuide, setShowAssetGuide] = useState(false);
  const videoRefs = useRef<Record<string, HTMLVideoElement | null>>({});

  const handleTogglePlay = (id: string) => {
    const video = videoRefs.current[id];
    if (!video) return;

    if (video.paused) {
      // Pause all others
      Object.keys(videoRefs.current).forEach((key) => {
        if (key !== id && videoRefs.current[key]) {
          videoRefs.current[key]?.pause();
          setIsPlaying((prev) => ({ ...prev, [key]: false }));
        }
      });

      video.play().catch(() => {
        // Fallback gracefully if physical mp4 hasn't been added
      });
      setIsPlaying((prev) => ({ ...prev, [id]: true }));
    } else {
      video.pause();
      setIsPlaying((prev) => ({ ...prev, [id]: false }));
    }
  };

  const handleFullscreen = (id: string) => {
    const video = videoRefs.current[id];
    if (video && video.requestFullscreen) {
      video.requestFullscreen();
    }
  };

  return (
    <section className="py-20 border-t border-[#9B6DFF]/15 bg-[#0B1020]/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-[#9B6DFF]/15">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#65E7F5] uppercase">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#65E7F5] shadow-[0_0_6px_#65E7F5]" />
              <span>Interactive Walkthroughs</span>
              <span aria-hidden="true" className="text-[#9B6DFF]/40">·</span>
              <span className="text-[#AAB6CC]">8+ Demos Created</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#F4F7FF] tracking-tight">
              Screen Recording Video Gallery
            </h2>
            <p className="text-sm sm:text-base text-[#AAB6CC] max-w-xl">
              Watch real screen recordings of website layouts and interactive flows in action across desktop and mobile devices.
            </p>
          </div>

          <button
            onClick={() => setShowAssetGuide(!showAssetGuide)}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-[#F4F7FF] bg-[#17233B] hover:bg-[#1E2E4E] border border-[#9B6DFF]/30 hover:border-[#65E7F5]/50 rounded-xl transition-all self-start md:self-auto shadow-sm"
          >
            <Info className="w-4 h-4 text-[#65E7F5]" />
            <span>{showAssetGuide ? 'Hide Video Setup Guide' : 'How Videos Are Added'}</span>
          </button>
        </div>

        {/* Developer / Asset Guide Drawer */}
        {showAssetGuide && (
          <div className="my-6 p-5 rounded-2xl border border-[#9B6DFF]/30 bg-[#111A2E]/90 text-xs text-[#AAB6CC] space-y-3 shadow-xl">
            <div className="flex items-center gap-2 text-[#65E7F5] font-semibold">
              <CheckCircle2 className="w-4 h-4" />
              <span>Asset Structure Ready for Real MP4 Screen Recordings</span>
            </div>
            <p className="leading-relaxed">
              This gallery is pre-configured to render HTML5 MP4 videos with poster previews. To attach your latest screen recordings, simply drop your files into the <code className="bg-[#17233B] px-1.5 py-0.5 rounded text-[#65E7F5] font-mono">public/videos/</code> directory and specify their filenames in <code className="bg-[#17233B] px-1.5 py-0.5 rounded text-[#65E7F5] font-mono">src/components/VideoShowcase.tsx</code>:
            </p>
            <div className="p-3 bg-[#0B1020] rounded-xl font-mono text-[11px] text-[#AAB6CC] space-y-1 border border-[#9B6DFF]/20">
              <div>public/videos/website-demo-01.mp4 <span className="text-[#AAB6CC]/60">(The Pizza Lab mobile flow)</span></div>
              <div>public/videos/website-demo-02.mp4 <span className="text-[#AAB6CC]/60">(Burgs Gourmet Burger demo)</span></div>
              <div>public/videos/website-demo-03.mp4 <span className="text-[#AAB6CC]/60">(Future demo recordings)</span></div>
            </div>
          </div>
        )}

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-10">
          {DEMO_VIDEOS.map((demo) => (
            <div
              key={demo.id}
              className="rounded-2xl border border-[#9B6DFF]/20 bg-[#17233B] overflow-hidden shadow-xl hover:border-[#65E7F5]/40 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Video Player Container */}
                <div className="relative aspect-[16/10] bg-[#0B1020] flex items-center justify-center overflow-hidden">
                  <video
                    ref={(el) => {
                      videoRefs.current[demo.id] = el;
                    }}
                    src={demo.videoSrc}
                    poster={demo.posterSrc}
                    preload="metadata"
                    playsInline
                    muted
                    controls={isPlaying[demo.id]}
                    onEnded={() => setIsPlaying((prev) => ({ ...prev, [demo.id]: false }))}
                    className="w-full h-full object-contain"
                  />

                  {/* Play Button Overlay (when paused) */}
                  {!isPlaying[demo.id] && (
                    <div
                      onClick={() => handleTogglePlay(demo.id)}
                      className="absolute inset-0 bg-[#0B1020]/40 hover:bg-[#0B1020]/25 cursor-pointer flex flex-col items-center justify-center transition-colors group"
                    >
                      <button
                        aria-label={`Play demo video for ${demo.title}`}
                        className="w-14 h-14 rounded-2xl bg-gradient-to-r from-[#5271FF] to-[#9B6DFF] group-hover:from-[#4362F0] group-hover:to-[#8C5CF0] text-white flex items-center justify-center shadow-lg shadow-[#5271FF]/40 group-hover:scale-105 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#65E7F5]"
                      >
                        <Play className="w-6 h-6 ml-0.5 fill-white" />
                      </button>
                      <span className="mt-3 text-xs font-semibold text-[#F4F7FF] bg-[#17233B]/90 px-3.5 py-1.5 rounded-xl border border-[#9B6DFF]/30 shadow-md">
                        Watch Screen Recording
                      </span>
                    </div>
                  )}

                  {/* Poster duration indicator */}
                  <div className="absolute top-3 left-3 bg-[#17233B]/90 backdrop-blur-sm px-2.5 py-1 rounded-lg text-[11px] font-mono text-[#65E7F5] border border-[#9B6DFF]/30 font-semibold">
                    {demo.durationLabel}
                  </div>
                </div>

                {/* Information Header */}
                <div className="p-6 space-y-3">
                  <div className="text-xs text-[#AAB6CC]">
                    <span>{demo.clientContext}</span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-[#F4F7FF]">
                    {demo.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#AAB6CC] leading-relaxed">
                    {demo.description}
                  </p>
                </div>
              </div>

              {/* Controls bar */}
              <div className="px-6 pb-6 pt-3 border-t border-[#9B6DFF]/15 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-[#AAB6CC] font-medium">
                  <span>{demo.tags.join(' · ')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleTogglePlay(demo.id)}
                    className="px-3.5 py-1.5 rounded-xl bg-[#111A2E] hover:bg-[#1E2E4E] text-[#F4F7FF] border border-[#9B6DFF]/20 hover:border-[#65E7F5]/40 transition-colors flex items-center gap-1.5 font-medium"
                  >
                    {isPlaying[demo.id] ? (
                      <>
                        <Pause className="w-3.5 h-3.5 text-[#65E7F5]" />
                        <span>Pause</span>
                      </>
                    ) : (
                      <>
                        <Play className="w-3.5 h-3.5 text-[#65E7F5]" />
                        <span>Play</span>
                      </>
                    )}
                  </button>
                  <button
                    onClick={() => handleFullscreen(demo.id)}
                    aria-label={`Fullscreen for ${demo.title}`}
                    className="p-2 rounded-xl bg-[#111A2E] hover:bg-[#1E2E4E] text-[#AAB6CC] hover:text-[#65E7F5] border border-[#9B6DFF]/20 transition-colors"
                  >
                    <Maximize className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
