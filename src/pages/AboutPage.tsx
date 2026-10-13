import React from 'react';
import { PageRoute } from '../types.ts';
import { AboutEngineeringVisual } from '../components/Illustrations.tsx';
import { AboutFaqAccordion } from '../components/AboutFaqAccordion.tsx';
import { 
  AnimatedCpuIcon,
  AnimatedTerminalIcon,
  AnimatedMobileIcon,
  AnimatedShieldIcon,
  AnimatedLiveHeartbeat,
  AnimatedRocketIcon,
  AnimatedEyeVisionIcon,
  AnimatedLockNdaIcon,
  AnimatedUserPodIcon,
  AnimatedStepIcon,
  ScrollReveal
} from '../components/AnimatedIcons.tsx';
import { 
  ArrowRight, Cpu
} from 'lucide-react';
import { motion } from 'motion/react';

interface AboutPageProps {
  onNavigate: (page: PageRoute) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-24 md:space-y-32">
      {/* 1. HERO SECTION */}
      <section className="pt-6 md:pt-12 pb-4">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <motion.div 
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-7 space-y-6"
            >
              <div className="inline-flex items-center gap-2">
                <AnimatedLiveHeartbeat label="WHO WE ARE • COMPANY PROFILE" />
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-[#111c2d] tracking-tight leading-tight">
                Building Technology That Moves Your Business{' '}
                <span className="text-[#1053D4]">Forward.</span>
              </h1>

              <p className="text-base sm:text-lg text-[#424653] leading-relaxed max-w-xl">
                VapTechSol is an agile software engineering and technology consulting company dedicated to building dependable, scalable, and user-centric digital products. We bridge strategic clarity with hands-on architecture.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => onNavigate('contact')}
                  className="cursor-pointer inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#1053D4] hover:bg-[#0c44b0] text-white text-base font-semibold shadow-md transition-all active:scale-[0.99]"
                >
                  <AnimatedRocketIcon size={18} />
                  <span>Start an Engineering Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => {
                    const el = document.getElementById('hybrid-studio-model');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="cursor-pointer inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white border border-[#c3c6d6] text-[#111c2d] text-base font-semibold hover:bg-slate-50 transition-colors"
                >
                  <Cpu className="w-4 h-4 text-[#1053D4]" />
                  <span>Our Delivery Model</span>
                </button>
              </div>

              {/* 3 Stats Bar */}
              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-[#e5eaf2] max-w-md">
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#111c2d]">100%</div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#737785] mt-0.5">
                    IP Ownership
                  </div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#1053D4]">Zero</div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#737785] mt-0.5">
                    Vendor Lock-in
                  </div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#E11D23]">Direct</div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#737785] mt-0.5">
                    Architect Access
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Visual Graphic */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="lg:col-span-5"
            >
              <AboutEngineeringVisual />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. BUILT ON PRINCIPLED EXECUTION */}
      <section className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1053D4]">
              Purpose & Trajectory
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#111c2d] tracking-tight">
              Built on Principled Execution
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Core Mission */}
          <ScrollReveal delay={0.1}>
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-[#e5eaf2] shadow-sm relative overflow-hidden flex flex-col justify-between hover:border-[#1053D4] hover:shadow-xl transition-all h-full group">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#1053D4]" />
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#1053D4]">
                    Core Mission
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center transition-transform group-hover:scale-110">
                    <AnimatedRocketIcon size={22} />
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#111c2d] group-hover:text-[#1053D4] transition-colors">
                  Empowering business growth through scalable, bottleneck-free technology.
                </h3>
                <p className="text-sm text-[#424653] leading-relaxed">
                  We deliver engineered software solutions that eliminate systemic operational friction and accelerate digital growth. From high-throughput backends and intelligent business process automation to full system modernization, we craft digital foundations ready for enterprise load.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 pt-6 mt-4 border-t border-[#f0f3ff]">
                {['Scalable Systems', 'High Throughput', 'Friction Elimination'].map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-lg bg-[#f0f3ff] text-xs font-semibold text-[#1053D4]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Long-Term Vision */}
          <ScrollReveal delay={0.2}>
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-[#e5eaf2] shadow-sm relative overflow-hidden flex flex-col justify-between hover:border-[#E11D23] hover:shadow-xl transition-all h-full group">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#E11D23]" />
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#E11D23]">
                    Long-Term Vision
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center transition-transform group-hover:scale-110">
                    <AnimatedEyeVisionIcon size={22} />
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#111c2d] group-hover:text-[#E11D23] transition-colors">
                  Setting the standard for trusted, transparent technical partnership.
                </h3>
                <p className="text-sm text-[#424653] leading-relaxed">
                  Becoming the premier software engineering partner for growing enterprises—recognized globally for technical discipline, direct unmediated engineer access, and pragmatic craftsmanship that turns complex challenges into predictable competitive advantage.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 pt-6 mt-4 border-t border-[#f0f3ff]">
                {['Pragmatic Craft', 'Zero Red Tape', 'Radical Transparency'].map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-lg bg-[#f0f3ff] text-xs font-semibold text-[#111c2d]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 3. THE FOUR ARCHITECTURAL PILLARS */}
      <section className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1053D4]">
              Engineering Philosophy
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#111c2d] tracking-tight">
              The Four Architectural Pillars
            </h2>
            <p className="text-base text-[#424653] leading-relaxed">
              We don't assemble software for the sake of ticking sprint boxes. Our engineering values ensure codebases are durable, secure, and easily maintained by your teams for years to come.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              num: '01 / STABILITY',
              title: 'Pragmatic Architecture',
              desc: 'Choosing proven, maintainable technologies over transient hype to ensure operational longevity and reliable hiring pools.',
              tag: 'Reliability > Novelty',
              icon: <AnimatedCpuIcon size={24} />,
            },
            {
              num: '02 / VISIBILITY',
              title: 'Transparent Collaboration',
              desc: 'Bi-weekly sprint demonstrations, continuous code repository check-ins, and direct engineer communication without intermediary noise.',
              tag: 'Direct Comm Channels',
              icon: <AnimatedTerminalIcon size={24} />,
            },
            {
              num: '03 / EXPERIENCE',
              title: 'Rigorous Quality & Usability',
              desc: 'Precision design meets fault-tolerant logic. User flows are benchmarked for cognitive ergonomics and sub-100ms response targets.',
              tag: 'Zero Interaction Clutter',
              icon: <AnimatedMobileIcon size={24} />,
            },
            {
              num: '04 / DEFENSE',
              title: 'Security by Default',
              desc: 'Automated SAST pipelines, vulnerability regression suites, strict role access models, and container sandboxing applied on commit one.',
              tag: 'Continuous CI/CD Audit',
              icon: <AnimatedShieldIcon size={24} />,
            },
          ].map((pillar, idx) => (
            <ScrollReveal key={pillar.num} delay={idx * 0.1}>
              <div
                className="bg-white p-7 rounded-3xl border border-[#e5eaf2] shadow-sm flex flex-col justify-between hover:border-[#1053D4] hover:shadow-xl transition-all h-full group"
              >
                <div className="space-y-3.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[#737785] block">
                      {pillar.num}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#e8eeff] flex items-center justify-center transition-transform group-hover:scale-110">
                      {pillar.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-[#111c2d] group-hover:text-[#1053D4] transition-colors">{pillar.title}</h3>
                  <p className="text-xs sm:text-sm text-[#424653] leading-relaxed">{pillar.desc}</p>
                </div>
                <div className="pt-5 mt-4 border-t border-[#f0f3ff]">
                  <span className="text-xs font-semibold text-[#1053D4] bg-[#e8eeff] px-2.5 py-1 rounded-md inline-block">
                    {pillar.tag}
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* 4. ELASTIC ENGINEERING DEPTH: THE HYBRID STUDIO MODEL */}
      <section id="hybrid-studio-model" className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="bg-[#f0f3ff] rounded-3xl p-8 sm:p-12 border border-[#d0daf2] space-y-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-8 space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#1053D4]">
                  Elastic Engineering Depth
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111c2d] tracking-tight">
                  The Hybrid Studio Model
                </h2>
                <p className="text-sm sm:text-base text-[#424653] leading-relaxed">
                  Traditional agencies bury you under account-management overhead. Freelance networks lack systemic architectural governance. VapTechSol marries rigorous internal lead architecture with specialized high-skill contributors.
                </p>
              </div>

              <div className="lg:col-span-4 bg-white p-6 rounded-2xl border border-[#d0daf2] shadow-sm">
                <div className="flex items-center gap-2 text-xs font-mono text-[#1053D4] font-bold uppercase mb-1">
                  <span>Agile Efficiency Quotient</span>
                </div>
                <div className="text-3xl font-extrabold text-[#111c2d]">+35% Faster</div>
                <p className="text-xs text-[#737785] mt-1 leading-relaxed">
                  Compared to typical agency overhead. Zero bloat, pure engineering throughput.
                </p>
              </div>
            </div>

            {/* 3 Stages Horizontal Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-2xl border border-[#d0daf2] space-y-3 hover:border-[#1053D4] transition-all hover:shadow-md">
                <div className="flex items-center justify-between">
                  <AnimatedStepIcon stepNum="01" />
                  <div className="w-8 h-8 rounded-lg bg-[#e8eeff] flex items-center justify-center">
                    <AnimatedCpuIcon size={18} />
                  </div>
                </div>
                <h4 className="text-base font-bold text-[#111c2d]">Core Technical Leadership</h4>
                <p className="text-xs text-[#424653] leading-relaxed">
                  Direct engagement with senior solutions architects who design system boundaries, data contracts, and security standards before any code is drafted.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-[#d0daf2] space-y-3 hover:border-[#1053D4] transition-all hover:shadow-md">
                <div className="flex items-center justify-between">
                  <AnimatedStepIcon stepNum="02" />
                  <div className="w-8 h-8 rounded-lg bg-[#e8eeff] flex items-center justify-center">
                    <AnimatedUserPodIcon size={18} />
                  </div>
                </div>
                <h4 className="text-base font-bold text-[#111c2d]">Specialized Collaborators</h4>
                <p className="text-xs text-[#424653] leading-relaxed">
                  We onboard pre-vetted specialists (e.g. BLE engineers, WebGL experts, database tuning authorities) calibrated specifically for your technological stack.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-[#d0daf2] space-y-3 hover:border-[#1053D4] transition-all hover:shadow-md">
                <div className="flex items-center justify-between">
                  <AnimatedStepIcon stepNum="03" />
                  <div className="w-8 h-8 rounded-lg bg-[#e8eeff] flex items-center justify-center">
                    <AnimatedRocketIcon size={18} />
                  </div>
                </div>
                <h4 className="text-base font-bold text-[#111c2d]">High-Impact Deliverables</h4>
                <p className="text-xs text-[#424653] leading-relaxed">
                  Sprint outputs undergo mandatory code reviews, automated tests, and deployment verification. Zero untested code enters your main branches.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 5. CLIENT REASSURANCE & NON-NEGOTIABLES */}
      <section className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1053D4]">
              Guaranteed Standards
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#111c2d] tracking-tight">
              Our Non-Negotiables
            </h2>
            <p className="text-base text-[#424653]">
              What you can reliably count on every time you partner with our engineering teams.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ScrollReveal delay={0.1}>
            <div className="bg-white p-8 rounded-3xl border border-[#e5eaf2] space-y-3.5 shadow-sm hover:border-[#1053D4] transition-all hover:shadow-lg h-full group">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                <AnimatedLockNdaIcon size={24} />
              </div>
              <h4 className="text-lg font-bold text-[#111c2d] group-hover:text-[#1053D4] transition-colors">100% Intellectual Property Ownership</h4>
              <p className="text-xs sm:text-sm text-[#424653] leading-relaxed">
                Every pull request, schema definition, Figma asset, and Docker container is strictly assigned to your organization under binding mutual non-disclosure and assignment agreements.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="bg-white p-8 rounded-3xl border border-[#e5eaf2] space-y-3.5 shadow-sm hover:border-[#1053D4] transition-all hover:shadow-lg h-full group">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#1053D4] flex items-center justify-center font-bold">
                <AnimatedTerminalIcon size={24} />
              </div>
              <h4 className="text-lg font-bold text-[#111c2d] group-hover:text-[#1053D4] transition-colors">No Trapped Knowledge Silos</h4>
              <p className="text-xs sm:text-sm text-[#424653] leading-relaxed">
                We write clean, typed code paired with comprehensive architectural documentation. When you decide to bring development internal, your engineering hires can onboard within 48 hours.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="bg-white p-8 rounded-3xl border border-[#e5eaf2] space-y-3.5 shadow-sm hover:border-[#1053D4] transition-all hover:shadow-lg h-full group">
              <div className="w-12 h-12 rounded-2xl bg-red-50 text-[#E11D23] flex items-center justify-center font-bold">
                <AnimatedCpuIcon size={24} />
              </div>
              <h4 className="text-lg font-bold text-[#111c2d] group-hover:text-[#E11D23] transition-colors">Fixed Milestones & Predictable Cadence</h4>
              <p className="text-xs sm:text-sm text-[#424653] leading-relaxed">
                We quote realistic sprint milestones and maintain continuous velocity tracking. You receive transparent risk flags ahead of time—never surprise launch delays.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 6. INTERACTIVE FAQ ACCORDION (FRAMER-MOTION) */}
      <AboutFaqAccordion onNavigate={onNavigate} />

      {/* 7. BOTTOM CALL TO ACTION */}
      <section className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="bg-gradient-to-r from-[#e8eeff] to-[#f0f3ff] rounded-3xl p-8 sm:p-12 border border-[#c3c6d6] text-center space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111c2d]">
              Ready to Engineer What's Next?
            </h2>
            <p className="text-sm sm:text-base text-[#424653] max-w-xl mx-auto">
              Schedule a confidential discovery session with our Lead Solutions Architect. No high-pressure sales pitch—just practical engineering feedback.
            </p>
            <div className="pt-2">
              <button
                onClick={() => onNavigate('contact')}
                className="cursor-pointer inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#1053D4] hover:bg-[#0c44b0] text-white text-sm font-semibold shadow-md transition-all active:scale-[0.99]"
              >
                <AnimatedRocketIcon size={18} />
                <span>Start an Engineering Conversation →</span>
              </button>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
};
