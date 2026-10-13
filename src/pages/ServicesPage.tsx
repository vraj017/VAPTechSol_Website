import React, { useState } from 'react';
import { PageRoute } from '../types.ts';
import { ServiceGraphic } from '../components/Illustrations.tsx';
import { 
  AnimatedTerminalIcon,
  AnimatedGlobeIcon,
  AnimatedMobileIcon,
  AnimatedDatabaseIcon,
  AnimatedAutomationIcon,
  AnimatedShieldIcon,
  AnimatedLiveHeartbeat,
  AnimatedCompassIcon,
  AnimatedLockNdaIcon,
  AnimatedStepIcon,
  ScrollReveal
} from '../components/AnimatedIcons.tsx';
import { CheckCircle2, ArrowRight, ShieldCheck, Cpu } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ServicesPageProps {
  onNavigate: (page: PageRoute) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const services = [
    {
      id: 'custom-software',
      number: 'SERVICE 01',
      title: 'Custom Software Development',
      badge: '100% BESPOKE CODEBASE',
      graphicType: 'custom-software',
      animatedIcon: <AnimatedTerminalIcon size={22} />,
      description: 'Engineered from ground zero to align seamlessly with corporate workflows and scale on demand. We build proprietary, enterprise-grade software that adapts directly to your institutional parameters.',
      impact: 'Solves outgrown spreadsheets, fragile macros, and disconnected departmental data silos with cohesive modular platforms.',
      deliverables: ['Production-ready code', 'Full architecture docs', 'Turnkey CI/CD pipelines'],
    },
    {
      id: 'web-development',
      number: 'SERVICE 02',
      title: 'Website Design & Development',
      badge: 'SUB-SECOND INTERACTIVE SPEEDS',
      graphicType: 'web-development',
      animatedIcon: <AnimatedGlobeIcon size={22} />,
      description: 'High-converting digital front doors and enterprise portals built with pristine design and clean code. We emphasize accessibility, brand authority, and lightning-fast edge delivery.',
      impact: 'Solves low conversion, sluggish asset load times, and unmaintainable legacy code with accessible, mobile-first layouts.',
      deliverables: ['Fluid design systems', 'Global CDN distribution', 'Full SEO optimization'],
    },
    {
      id: 'mobile-apps',
      number: 'SERVICE 03',
      title: 'Mobile App Development',
      badge: 'UNIFIED CROSS-PLATFORM CORE',
      graphicType: 'mobile-apps',
      animatedIcon: <AnimatedMobileIcon size={22} />,
      description: 'Performant, cross-platform mobile apps engineered for fluid interactions and rock-solid offline capabilities. Built from shared logic modules without sacrificing platform-specific polish.',
      impact: 'Replaces clunky inconsistent mobile experiences with native performance, instantaneous biometric auth, and intuitive gesture navigation.',
      deliverables: ['iOS & Android builds', 'App store approvals', 'Offline sync architecture'],
    },
    {
      id: 'backend-apis',
      number: 'SERVICE 04',
      title: 'Backend & API Development',
      badge: 'ZERO-LEAK FAULT TOLERANCE',
      graphicType: 'backend-apis',
      animatedIcon: <AnimatedDatabaseIcon size={22} />,
      description: 'High-throughput microservices and REST/GraphQL APIs engineered for zero data leaks and effortless integration. We craft secure relational schemas and resilient message processing backbones.',
      impact: 'Replaces brittle monolithic scripts with event-driven message queuing, OAuth2 authentication, and hardened endpoints ready for volume surges.',
      deliverables: ['Documented OpenAPI / Swagger', 'Rate limiting & RBAC', 'High-availability clusters'],
    },
    {
      id: 'automation',
      number: 'SERVICE 05',
      title: 'Business Automation & Integration',
      badge: 'CONTINUOUS AUTONOMOUS SYNC',
      graphicType: 'automation',
      animatedIcon: <AnimatedAutomationIcon size={22} />,
      description: 'Eliminate operational friction by synchronizing financial tools, CRMs, ERPs, and supply chains autonomously. Hand off tedious reconciliation to intelligent background pipelines.',
      impact: 'Eliminates repetitive human error, cuts administrative hours drastically, and automates real-time invoice generation and cross-departmental reporting.',
      deliverables: ['Bi-directional data sync', 'Automated failover alarms', 'Custom ERP connectors'],
    },
    {
      id: 'it-consulting',
      number: 'SERVICE 06',
      title: 'IT Consulting & Technical Advisory',
      badge: 'FRACTIONAL CTO & GOVERNANCE',
      graphicType: 'it-consulting',
      animatedIcon: <AnimatedShieldIcon size={22} />,
      description: 'High-caliber technical governance, cloud architecture reviews, and modernized infrastructure pipelines. We safeguard scale, eliminate technical debt, and optimize multi-cloud spending.',
      impact: 'Delivers on-demand fractional CTO guidance, aggressive cloud cost reduction, and comprehensive security compliance roadmaps.',
      deliverables: ['Cloud spend audit', 'Compliance & security roadmap', 'Infrastructure as Code'],
    },
  ];

  const filteredServices = selectedFilter === 'all' 
    ? services 
    : services.filter(s => s.id === selectedFilter);

  return (
    <div className="space-y-24 md:space-y-32">
      {/* 1. HERO HEADER */}
      <section className="pt-6 md:pt-12 pb-4">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <div className="inline-flex items-center gap-2">
            <AnimatedLiveHeartbeat label="ENGINEERING & CONSULTING SERVICES" />
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-[#111c2d] tracking-tight leading-tight max-w-4xl mx-auto">
            Architectural Rigor. <span className="text-[#1053D4]">Modern Software Solutions.</span>
          </h1>

          <p className="text-base sm:text-lg text-[#424653] max-w-3xl mx-auto leading-relaxed">
            From custom enterprise portals and high-scale cloud APIs to cross-platform mobile apps and business automation, we engineer software that solves real business bottlenecks.
          </p>

          {/* Service Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-6">
            <button
              onClick={() => setSelectedFilter('all')}
              className={`px-4 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                selectedFilter === 'all'
                  ? 'bg-[#1053D4] text-white shadow-md'
                  : 'bg-white text-[#424653] border border-[#d0daf2] hover:bg-[#f0f3ff]'
              }`}
            >
              All Services (6)
            </button>
            {services.map((s) => (
              <button
                key={s.id}
                onClick={() => setSelectedFilter(s.id)}
                className={`px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                  selectedFilter === s.id
                    ? 'bg-[#1053D4] text-white shadow-md'
                    : 'bg-white text-[#424653] border border-[#d0daf2] hover:bg-[#f0f3ff]'
                }`}
              >
                <span>{s.title.split(' ')[0]}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 2. SERVICES LIST */}
      <section className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <AnimatePresence mode="popLayout">
          {filteredServices.map((service, index) => {
            const isEven = index % 2 === 1;
            return (
              <ScrollReveal key={service.id} delay={0.05}>
                <div
                  id={service.id}
                  className="bg-white rounded-3xl p-6 sm:p-10 border border-[#e5eaf2] shadow-sm hover:border-[#1053D4] hover:shadow-xl transition-all grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
                >
                  {/* Graphic container (alternating on desktop) */}
                  <div className={`lg:col-span-5 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <ServiceGraphic type={service.graphicType} badge={service.badge} />
                  </div>

                  {/* Text Information */}
                  <div className={`lg:col-span-7 space-y-5 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#1053D4] bg-[#e8eeff] px-3 py-1.5 rounded-xl flex items-center gap-2">
                        {service.animatedIcon}
                        {service.number}
                      </span>
                      <span className="text-xs font-semibold text-[#737785] uppercase tracking-wider">
                        Turnkey Production Ready
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#111c2d] tracking-tight">
                      {service.title}
                    </h3>

                    <p className="text-sm sm:text-base text-[#424653] leading-relaxed">
                      {service.description}
                    </p>

                    {/* Business Impact Box */}
                    <div className="bg-[#f0f3ff] p-4 rounded-2xl border border-[#d0daf2] space-y-1">
                      <div className="flex items-center gap-2 text-xs font-bold text-[#1053D4] uppercase tracking-wide">
                        <ShieldCheck className="w-4 h-4 text-[#1053D4]" />
                        <span>Business Impact</span>
                      </div>
                      <p className="text-xs sm:text-sm text-[#111c2d] leading-relaxed font-medium">
                        {service.impact}
                      </p>
                    </div>

                    {/* Key Deliverables */}
                    <div className="space-y-2 pt-1 border-t border-[#e5eaf2]">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#737785] block">
                        Key Deliverables
                      </span>
                      <div className="flex flex-wrap gap-4 text-xs font-semibold text-[#424653]">
                        {service.deliverables.map((item) => (
                          <div key={item} className="flex items-center gap-1.5 text-[#111c2d]">
                            <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-2">
                      <button
                        onClick={() => onNavigate('contact')}
                        className="cursor-pointer inline-flex items-center gap-2 text-sm font-semibold text-[#1053D4] hover:text-[#0c44b0] group"
                      >
                        <span>Request technical estimate for {service.title}</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </button>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </AnimatePresence>
      </section>

      {/* 3. STANDARD DELIVERY PROCESS */}
      <section className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="bg-[#ffffff] rounded-3xl p-8 sm:p-12 border border-[#d0daf2] shadow-sm space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1053D4]">
                Operational Governance
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111c2d] tracking-tight">
                Our Standard Engineering Delivery Protocol
              </h2>
              <p className="text-sm text-[#424653]">
                Every project follows strict technical checkpoints to ensure continuous quality control.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                {
                  step: '01',
                  title: 'Architecture Review',
                  desc: 'Thorough system design, threat modeling, and database schema specification before writing production code.',
                  icon: <AnimatedCompassIcon size={20} />,
                },
                {
                  step: '02',
                  title: 'Sprint Cycles',
                  desc: 'Two-week sprint delivery cadence with transparent pull requests, bi-weekly live demos, and milestone sign-offs.',
                  icon: <AnimatedTerminalIcon size={20} />,
                },
                {
                  step: '03',
                  title: 'Automated CI/CD',
                  desc: 'End-to-end unit tests, static type analysis, dependency security scans, and preview container environments.',
                  icon: <AnimatedAutomationIcon size={20} />,
                },
                {
                  step: '04',
                  title: 'Clean Handover',
                  desc: 'Complete IP assignment, reproducible Docker builds, environment documentation, and direct team training.',
                  icon: <AnimatedLockNdaIcon size={20} />,
                },
              ].map((item) => (
                <div key={item.step} className="p-6 rounded-2xl bg-[#f9f9ff] border border-[#e5eaf2] space-y-3 hover:border-[#1053D4] transition-all hover:shadow-md">
                  <div className="flex items-center justify-between">
                    <AnimatedStepIcon stepNum={item.step} />
                    <div className="w-8 h-8 rounded-lg bg-[#e8eeff] flex items-center justify-center">
                      {item.icon}
                    </div>
                  </div>
                  <h4 className="text-base font-bold text-[#111c2d] pt-1">{item.title}</h4>
                  <p className="text-xs text-[#424653] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 4. BOTTOM CTA */}
      <section className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="bg-gradient-to-r from-[#e8eeff] to-[#f0f3ff] rounded-3xl p-8 sm:p-12 border border-[#c3c6d6] text-center space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111c2d]">
              Have an Engineering Project in Mind?
            </h2>
            <p className="text-sm sm:text-base text-[#424653] max-w-xl mx-auto">
              Speak directly with our senior solutions engineers. We can evaluate your requirements and provide an architectural roadmap.
            </p>
            <div className="pt-2">
              <button
                onClick={() => onNavigate('contact')}
                className="cursor-pointer px-6 py-3.5 rounded-xl bg-[#1053D4] hover:bg-[#0c44b0] text-white text-sm font-semibold shadow-md transition-all active:scale-[0.99]"
              >
                Request a Technical Consultation →
              </button>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
};
