import React, { useState } from 'react';
import { PageRoute } from '../types.ts';
import { HeroPlatformMockup, RideSyncPhonePreview } from '../components/Illustrations.tsx';
import { 
  AnimatedTerminalIcon, 
  AnimatedGlobeIcon, 
  AnimatedMobileIcon, 
  AnimatedDatabaseIcon, 
  AnimatedAutomationIcon, 
  AnimatedShieldIcon,
  AnimatedRadarIcon,
  AnimatedRadioIcon,
  AnimatedCpuIcon,
  AnimatedRocketIcon,
  AnimatedUserPodIcon,
  AnimatedCompassIcon,
  AnimatedLockNdaIcon,
  AnimatedStepIcon,
  AnimatedLiveHeartbeat,
  ScrollReveal 
} from '../components/AnimatedIcons.tsx';
import { 
  ArrowRight, ChevronDown, ChevronUp, Mail
} from 'lucide-react';
import { motion } from 'motion/react';

interface HomePageProps {
  onNavigate: (page: PageRoute) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What types of custom software can VapTechSol build?',
      answer: 'We engineer end-to-end enterprise portals, bespoke ERP integrations, high-concurrency microservices, multi-tenant SaaS architectures, and internal operational tooling. Every build is tailored from ground zero to your business workflows without generic boilerplate debt.'
    },
    {
      question: 'Do you build cross-platform or native mobile applications?',
      answer: 'Both. We build fluid React Native cross-platform applications with shared TypeScript logic for rapid time-to-market, as well as native Swift (iOS) and Kotlin (Android) modules when low-level hardware performance, background location tracking, or custom BLE drivers are required.'
    },
    {
      question: 'Can you integrate with our existing legacy tools and databases?',
      answer: 'Yes. A core strength of our engineering team is wrapping legacy SQL/Oracle/SAP databases with modern REST/GraphQL APIs, synchronizing asynchronous webhook pipelines, and eliminating manual data-entry silos without disruptive full-system migrations.'
    },
    {
      question: 'How does collaboration work with your engineering pods?',
      answer: 'We deploy cohesive, senior-led delivery pods comprising a Lead Architect, senior full-stack engineers, and QA. We work in transparent 2-week sprint cycles with direct Slack/Teams access, bi-weekly live demos, and continuous pull-request reviews on your private repositories.'
    },
    {
      question: 'How do we get started with a project?',
      answer: 'You can submit a project inquiry or schedule a 30-minute discovery session. Within 24-48 business hours, our Solutions Architecture lead provides a tailored feasibility breakdown, recommended tech stack, and milestone execution plan.'
    }
  ];

  return (
    <div className="space-y-24 md:space-y-32">
      {/* 1. HERO SECTION */}
      <section className="pt-6 md:pt-12 pb-8">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content Column */}
            <motion.div 
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="lg:col-span-7 space-y-6"
            >
              {/* Eyebrow with Animated Live Heartbeat */}
              <div className="flex flex-wrap items-center gap-2">
                <AnimatedLiveHeartbeat label="SOFTWARE DEVELOPMENT • DIGITAL PRODUCTS • INNOVATION" />
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-[#111c2d] leading-[1.12] tracking-tight text-balance">
                Turning Ideas Into Powerful{' '}
                <span className="text-[#1053D4] relative inline-block">
                  Digital Solutions.
                  <span className="absolute bottom-1 left-0 right-0 h-1 bg-[#1053D4]/20 rounded-full" />
                </span>
              </h1>

              {/* Subheading */}
              <p className="text-base sm:text-lg text-[#424653] leading-relaxed max-w-2xl font-normal">
                VapTechSol helps businesses transform ideas into custom software, modern websites, and mobile applications. We also create digital products designed to solve real-world problems.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => onNavigate('contact')}
                  className="cursor-pointer inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#1053D4] hover:bg-[#0c44b0] text-white text-base font-semibold shadow-md hover:shadow-lg transition-all active:scale-[0.99] group"
                >
                  <AnimatedRocketIcon size={20} />
                  <span>Start Your Project</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
                <button
                  onClick={() => onNavigate('products')}
                  className="cursor-pointer inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-[#f0f3ff] text-[#111c2d] border border-[#c3c6d6] text-base font-semibold transition-all hover:border-[#1053D4]"
                >
                  <AnimatedRadarIcon size={18} />
                  <span>Explore Our Products</span>
                </button>
              </div>

              {/* Metrics Bar with interactive live look */}
              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-[#e5eaf2] max-w-lg">
                <div className="group">
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#111c2d] group-hover:text-[#1053D4] transition-colors">100%</div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#737785] mt-0.5">
                    Custom Built
                  </div>
                </div>
                <div className="group">
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#1053D4]">Enterprise</div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#737785] mt-0.5">
                    Grade Security
                  </div>
                </div>
                <div className="group">
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#E11D23]">Agile</div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#737785] mt-0.5">
                    Rapid Delivery
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Interactive Mockup Column */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
              className="lg:col-span-5"
            >
              <HeroPlatformMockup />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. ENGINEERING EXCELLENCE */}
      <section className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1053D4]">
              Engineering Excellence
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#111c2d] tracking-tight">
              Technology That Moves Your Business Forward.
            </h2>
            <p className="text-base text-[#424653] leading-relaxed">
              We combine software discipline with commercial foresight to build resilient digital systems that adapt as you grow.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <ScrollReveal delay={0.1}>
            <div className="bg-white p-8 rounded-3xl border border-[#e5eaf2] shadow-sm hover:border-[#1053D4] hover:shadow-xl transition-all duration-300 flex flex-col justify-between group h-full">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-[#e8eeff] text-[#1053D4] flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <AnimatedDatabaseIcon size={28} />
                </div>
                <h3 className="text-xl font-bold text-[#111c2d] group-hover:text-[#1053D4] transition-colors">
                  Custom-Built Software Solutions
                </h3>
                <p className="text-sm text-[#424653] leading-relaxed">
                  Targeted enterprise systems designed to automate complex operations and scale alongside business growth without technical debt.
                </p>
              </div>
              <button
                onClick={() => onNavigate('services')}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1053D4] hover:text-[#0a3ca0] pt-6 group-hover:translate-x-1.5 transition-transform cursor-pointer"
              >
                <span>Enterprise Alignment</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </ScrollReveal>

          {/* Card 2 */}
          <ScrollReveal delay={0.2}>
            <div className="bg-white p-8 rounded-3xl border border-[#e5eaf2] shadow-sm hover:border-[#1053D4] hover:shadow-xl transition-all duration-300 flex flex-col justify-between group h-full">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-[#e8eeff] text-[#1053D4] flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <AnimatedRadarIcon size={28} />
                </div>
                <h3 className="text-xl font-bold text-[#111c2d] group-hover:text-[#1053D4] transition-colors">
                  Digital Products Designed Around Real Needs
                </h3>
                <p className="text-sm text-[#424653] leading-relaxed">
                  User-centric applications and proprietary tools that solve practical challenges, turning customer friction into streamlined experiences.
                </p>
              </div>
              <button
                onClick={() => onNavigate('products')}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1053D4] hover:text-[#0a3ca0] pt-6 group-hover:translate-x-1.5 transition-transform cursor-pointer"
              >
                <span>User Centric</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </ScrollReveal>

          {/* Card 3 */}
          <ScrollReveal delay={0.3}>
            <div className="bg-white p-8 rounded-3xl border border-[#e5eaf2] shadow-sm hover:border-[#1053D4] hover:shadow-xl transition-all duration-300 flex flex-col justify-between group h-full">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-[#e8eeff] text-[#1053D4] flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <AnimatedUserPodIcon size={28} />
                </div>
                <h3 className="text-xl font-bold text-[#111c2d] group-hover:text-[#1053D4] transition-colors">
                  Flexible Technical Collaboration
                </h3>
                <p className="text-sm text-[#424653] leading-relaxed">
                  Seamless collaboration with specialized engineers, hybrid delivery pods, and agile execution structured for your internal cadence.
                </p>
              </div>
              <button
                onClick={() => onNavigate('about')}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1053D4] hover:text-[#0a3ca0] pt-6 group-hover:translate-x-1.5 transition-transform cursor-pointer"
              >
                <span>Team Synergy</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 3. OUR EXPERTISE - EVERYTHING YOU NEED */}
      <section className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1053D4]">
              Our Expertise
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#111c2d] tracking-tight">
              Everything You Need to Build Better Software.
            </h2>
            <p className="text-base text-[#424653] leading-relaxed">
              From high-load cloud architectures to consumer applications, we bring modern engineering discipline to every build.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: 'Custom Software Development',
              desc: 'Tailored business systems, secure database architecture, and modular backends structured for sustained agility.',
              animatedIcon: <AnimatedTerminalIcon size={24} />,
            },
            {
              title: 'Website Design & Development',
              desc: 'Modern high-speed web platforms, enterprise web portals, responsive UI, and lightning-fast content architectures.',
              animatedIcon: <AnimatedGlobeIcon size={24} />,
            },
            {
              title: 'Mobile App Development',
              desc: 'Native iOS & Android mobile apps, cross-platform apps with fluid interactions, offline sync, and reactive design.',
              animatedIcon: <AnimatedMobileIcon size={24} />,
            },
            {
              title: 'Backend & API Development',
              desc: 'High-capacity APIs, secure data integration, cloud microservices, and high-concurrency event-driven processing.',
              animatedIcon: <AnimatedDatabaseIcon size={24} />,
            },
            {
              title: 'Business Automation & Integration',
              desc: 'Connecting disparate tools, eliminating repetitive manual work, bespoke webhooks, and automated pipeline triggers.',
              animatedIcon: <AnimatedAutomationIcon size={24} />,
            },
            {
              title: 'IT Consulting & Technical Support',
              desc: 'Strategic architecture audits, modern cloud advisory, continuous systems maintenance, and security governance.',
              animatedIcon: <AnimatedShieldIcon size={24} />,
            },
          ].map((srv, idx) => (
            <ScrollReveal key={srv.title} delay={idx * 0.08}>
              <div
                className="bg-white p-7 rounded-3xl border border-[#e5eaf2] shadow-sm hover:border-[#1053D4] hover:shadow-lg transition-all duration-300 flex flex-col justify-between group h-full"
              >
                <div className="space-y-3.5">
                  <div className="w-12 h-12 rounded-xl bg-[#e8eeff] flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                    {srv.animatedIcon}
                  </div>
                  <h3 className="text-lg font-bold text-[#111c2d] group-hover:text-[#1053D4] transition-colors">{srv.title}</h3>
                  <p className="text-sm text-[#424653] leading-relaxed">{srv.desc}</p>
                </div>
                <button
                  onClick={() => onNavigate('services')}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1053D4] hover:text-[#0a3ca0] pt-5 cursor-pointer group-hover:translate-x-1 transition-transform"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* 4. FEATURED PRODUCT: RIDESYNC */}
      <section className="bg-gradient-to-b from-[#f0f3ff] via-[#e8eeff]/50 to-[#f9f9ff] py-16 border-y border-[#d0daf2]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <ScrollReveal direction="left" className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#c3c6d6] text-[#1053D4] text-xs font-bold tracking-wide shadow-xs">
                <AnimatedRadarIcon size={16} />
                <span>FEATURED PRODUCT • MOBILITY TECHNOLOGY</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#111c2d] tracking-tight leading-tight">
                We Don't Just Build Solutions.{' '}
                <span className="text-[#1053D4]">We Build Products.</span>
              </h2>

              <p className="text-base text-[#424653] leading-relaxed max-w-xl">
                A connected riding companion designed to help group travelers coordinate rides, share live locations, and communicate throughout their journey.
              </p>

              {/* 4 Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
                <div className="space-y-1.5 bg-white/70 backdrop-blur-xs p-4 rounded-2xl border border-blue-100 hover:border-[#1053D4] transition-colors">
                  <div className="flex items-center gap-2.5 text-sm font-bold text-[#111c2d]">
                    <AnimatedRadarIcon size={20} />
                    <span>Live Group Location</span>
                  </div>
                  <p className="text-xs text-[#424653] leading-relaxed">
                    Real-time convoy tracking with sub-second telemetry and minimal battery drain.
                  </p>
                </div>

                <div className="space-y-1.5 bg-white/70 backdrop-blur-xs p-4 rounded-2xl border border-blue-100 hover:border-[#1053D4] transition-colors">
                  <div className="flex items-center gap-2.5 text-sm font-bold text-[#111c2d]">
                    <AnimatedRadioIcon size={20} />
                    <span>Push-to-Talk Voice</span>
                  </div>
                  <p className="text-xs text-[#424653] leading-relaxed">
                    Low-latency audio channels built for instant hands-free rider chatter.
                  </p>
                </div>

                <div className="space-y-1.5 bg-white/70 backdrop-blur-xs p-4 rounded-2xl border border-blue-100 hover:border-[#1053D4] transition-colors">
                  <div className="flex items-center gap-2.5 text-sm font-bold text-[#111c2d]">
                    <AnimatedCompassIcon size={20} />
                    <span>Offline Route Navigation</span>
                  </div>
                  <p className="text-xs text-[#424653] leading-relaxed">
                    Uninterrupted waypoint tracking and map caching even in remote canyons.
                  </p>
                </div>

                <div className="space-y-1.5 bg-white/70 backdrop-blur-xs p-4 rounded-2xl border border-blue-100 hover:border-[#1053D4] transition-colors">
                  <div className="flex items-center gap-2.5 text-sm font-bold text-[#111c2d]">
                    <AnimatedShieldIcon size={20} />
                    <span>Smart Convoy Alerts</span>
                  </div>
                  <p className="text-xs text-[#424653] leading-relaxed">
                    Instant hazard notifications, pace tracking, and rider gap warnings.
                  </p>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onNavigate('products')}
                  className="cursor-pointer inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#1053D4] hover:bg-[#0c44b0] text-white text-sm font-semibold shadow-md hover:shadow-lg transition-all active:scale-[0.99]"
                >
                  <AnimatedRadarIcon size={18} />
                  <span>Explore RideSync Live Demo</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href="mailto:info@vaptechsol.com"
                  className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl bg-white/80 border border-blue-200 hover:border-[#1053D4] text-[#111c2d] hover:text-[#1053D4] text-sm font-semibold transition-all shadow-xs group"
                >
                  <Mail className="w-4 h-4 text-[#1053D4] transition-transform group-hover:scale-110" />
                  <span>info@vaptechsol.com</span>
                </a>
              </div>
            </ScrollReveal>

            {/* Right Interactive Phone Preview */}
            <ScrollReveal direction="right" className="lg:col-span-5 flex justify-center">
              <RideSyncPhonePreview />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 5. OUR DIFFERENCE - A PARTNER FOR YOUR DIGITAL JOURNEY */}
      <section className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1053D4]">
              Our Difference
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#111c2d] tracking-tight">
              A Partner for Your Digital Journey.
            </h2>
            <p className="text-base text-[#424653] leading-relaxed">
              We reject boilerplate shortcuts in favor of robust architectures, clear communication, and deliberate delivery.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: 'Tailored Solutions',
              desc: 'Every line of code and user interface is mapped directly to your commercial requirements and operational bottlenecks.',
              icon: <AnimatedTerminalIcon size={22} />,
            },
            {
              title: 'Thoughtful Engineering',
              desc: 'Resilient data models, clean modular codebases, and maintainable software that ensures longevity and lowers total cost.',
              icon: <AnimatedCpuIcon size={22} />,
            },
            {
              title: 'Collaborative Approach',
              desc: 'Transparent milestones, sprint demos, and open channels that keep founders and enterprise leaders fully in control.',
              icon: <AnimatedUserPodIcon size={22} />,
            },
            {
              title: 'Flexible Expertise',
              desc: 'A versatile engineering bench capable of pivoting between custom development, API orchestration, and proprietary products.',
              icon: <AnimatedRocketIcon size={22} />,
            },
          ].map((item, idx) => (
            <ScrollReveal key={item.title} delay={idx * 0.1}>
              <div
                className="bg-white p-7 rounded-3xl border border-[#e5eaf2] shadow-sm hover:border-[#1053D4] hover:shadow-lg transition-all h-full flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-[#e8eeff] flex items-center justify-center transition-transform group-hover:scale-110">
                    {item.icon}
                  </div>
                  <h3 className="text-base font-bold text-[#111c2d] group-hover:text-[#1053D4] transition-colors">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-[#424653] leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* 6. METHODOLOGY - FROM IDEA TO IMPLEMENTATION */}
      <section className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1053D4]">
              Methodology
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#111c2d] tracking-tight">
              From Idea to Implementation.
            </h2>
            <p className="text-base text-[#424653] leading-relaxed">
              A transparent, five-stage engineering roadmap ensuring predictability at each deliverable.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {[
            {
              num: '01',
              title: 'Discover',
              desc: 'Deep audit of your business goals, target user pain points, and technical requisites.',
              icon: <AnimatedCompassIcon size={22} />,
            },
            {
              num: '02',
              title: 'Plan',
              desc: 'Defining project scopes, database schemas, cloud infrastructure, and sprint schedules.',
              icon: <AnimatedTerminalIcon size={22} />,
            },
            {
              num: '03',
              title: 'Design',
              desc: 'Crafting clean, accessible UI wireframes, design systems, and rapid user flows.',
              icon: <AnimatedGlobeIcon size={22} />,
            },
            {
              num: '04',
              title: 'Build',
              desc: 'Agile full-stack software development with automated testing and continuous code reviews.',
              icon: <AnimatedCpuIcon size={22} />,
            },
            {
              num: '05',
              title: 'Launch & Support',
              desc: 'Production deployment, performance tuning, knowledge transfer, and steady support.',
              icon: <AnimatedRocketIcon size={22} />,
            },
          ].map((step, idx) => (
            <ScrollReveal key={step.num} delay={idx * 0.08}>
              <div
                className="bg-white p-6 rounded-3xl border border-[#e5eaf2] shadow-sm flex flex-col justify-between hover:border-[#1053D4] transition-all hover:shadow-lg h-full group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <AnimatedStepIcon stepNum={step.num} />
                    <div className="w-8 h-8 rounded-lg bg-[#e8eeff] flex items-center justify-center transition-transform group-hover:scale-110">
                      {step.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-[#111c2d] group-hover:text-[#1053D4] transition-colors">{step.title}</h3>
                  <p className="text-xs text-[#424653] leading-relaxed mt-2">{step.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* 7. FLEXIBLE ENGAGEMENT - GREAT IDEAS */}
      <section className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="bg-[#f0f3ff] rounded-3xl p-8 sm:p-12 border border-[#d0daf2] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1053D4]">
                Flexible Engagement
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#111c2d] tracking-tight">
                Great Ideas. The Right Technical Collaboration.
              </h2>
              <p className="text-sm sm:text-base text-[#424653] leading-relaxed">
                VapTechSol works with experienced engineers and technical specialists to form purpose-fit project teams. Whether you need an end-to-end delivery team or elastic technical depth to unblock milestones, we make it happen without lengthy hiring cycles.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  onClick={() => onNavigate('contact')}
                  className="cursor-pointer inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#1053D4] hover:bg-[#0c44b0] text-white text-sm font-semibold transition-colors shadow-sm"
                >
                  <AnimatedUserPodIcon size={16} />
                  <span>Discuss a Partnership</span>
                </button>
                <button
                  onClick={() => onNavigate('services')}
                  className="cursor-pointer px-5 py-2.5 rounded-xl bg-white border border-[#c3c6d6] text-[#111c2d] text-sm font-semibold hover:bg-slate-50 transition-colors"
                >
                  Explore Our Services
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-3.5">
              {[
                {
                  title: 'Agile Delivery Pods',
                  desc: 'Pre-aligned senior squads',
                  animatedIcon: <AnimatedAutomationIcon size={20} />,
                },
                {
                  title: 'Rapid Integration',
                  desc: 'Kick off within days, not months',
                  animatedIcon: <AnimatedCpuIcon size={20} />,
                },
                {
                  title: 'Complete IP Ownership',
                  desc: '100% code ownership handed over',
                  animatedIcon: <AnimatedLockNdaIcon size={20} />,
                },
              ].map((pod) => (
                <div
                  key={pod.title}
                  className="bg-white p-4 rounded-2xl border border-[#d0daf2] flex items-center gap-3.5 shadow-sm hover:border-[#1053D4] transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#e8eeff] flex items-center justify-center shrink-0 transition-transform group-hover:scale-110">
                    {pod.animatedIcon}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#111c2d] group-hover:text-[#1053D4] transition-colors">{pod.title}</h4>
                    <p className="text-xs text-[#737785]">{pod.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 8. FREQUENTLY ASKED QUESTIONS */}
      <section className="max-w-[860px] mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center space-y-3 mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1053D4]">
              Clear Answers
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#111c2d] tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-sm sm:text-base text-[#424653]">
              Everything you need to know about working with VapTechSol.
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <ScrollReveal key={faq.question} delay={idx * 0.06}>
                <div
                  className="bg-white rounded-2xl border border-[#e5eaf2] overflow-hidden transition-colors hover:border-[#1053D4]"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#f9f9ff]"
                  >
                    <span className="text-base font-semibold text-[#111c2d]">
                      {faq.question}
                    </span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-[#1053D4] shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-[#737785] shrink-0" />
                    )}
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-sm text-[#424653] leading-relaxed border-t border-[#f0f3ff]">
                      {faq.answer}
                    </div>
                  )}
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </section>

      {/* 9. HAVE AN IDEA? LET'S BUILD IT. CTA BANNER */}
      <section className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="bg-gradient-to-r from-[#e8eeff] via-[#d9e3fb] to-[#e8eeff] rounded-3xl p-8 sm:p-14 border border-[#c3c6d6] text-center space-y-5">
            <div className="flex justify-center">
              <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm">
                <AnimatedRocketIcon size={26} />
              </div>
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#1053D4] block">
              Ready to Build?
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111c2d] tracking-tight">
              Have an Idea? Let's Build It.
            </h2>
            <p className="text-sm sm:text-base text-[#424653] max-w-xl mx-auto leading-relaxed">
              Partner with engineering experts to turn your concepts into production-ready software, digital products, and resilient platforms.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <button
                onClick={() => onNavigate('contact')}
                className="cursor-pointer inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#1053D4] hover:bg-[#0c44b0] text-white text-sm font-semibold shadow-md transition-all active:scale-[0.99]"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onNavigate('products')}
                className="cursor-pointer px-6 py-3.5 rounded-xl bg-white border border-[#c3c6d6] text-[#111c2d] text-sm font-semibold hover:bg-slate-50 transition-all"
              >
                Explore Our Products
              </button>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
};
