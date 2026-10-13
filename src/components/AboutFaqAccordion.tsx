import React, { useState, useId } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronDown, 
  Search, 
  X, 
  HelpCircle, 
  Sparkles, 
  Layers, 
  ShieldCheck, 
  Cpu, 
  Clock, 
  ArrowRight, 
  Mail,
  CheckCircle2
} from 'lucide-react';
import { PageRoute } from '../types.ts';
import { ScrollReveal } from './AnimatedIcons.tsx';

export interface FaqItem {
  id: string;
  category: 'All' | 'Model & Partnership' | 'Architecture' | 'IP & Security' | 'Delivery & Sprints';
  question: string;
  shortAnswer: string;
  detailedAnswer: string;
  highlights?: string[];
  icon?: React.ReactNode;
}

const FAQ_DATA: FaqItem[] = [
  {
    id: 'who-we-are',
    category: 'Model & Partnership',
    question: 'What is VapTechSol and what types of client organizations do you work with?',
    shortAnswer: 'We are an agile software engineering and technology consulting company.',
    detailedAnswer: 'VapTechSol designs and engineers production-ready digital products, high-throughput distributed backends, modern web applications, and intelligent systems. We partner with growth-stage startups who need rapid execution without architectural debt, as well as mid-market and enterprise businesses modernizing legacy workflows or launching mission-critical new ventures.',
    highlights: [
      'Growth startups seeking zero-bloat velocity',
      'Mid-market enterprises modernizing legacy architecture',
      'Non-technical founders needing dedicated Lead Solutions Architects'
    ],
    icon: <Sparkles className="w-4 h-4 text-[#1053D4]" />
  },
  {
    id: 'hybrid-studio-model',
    category: 'Model & Partnership',
    question: 'How does your "Hybrid Studio Model" differ from standard agencies or freelance platforms?',
    shortAnswer: 'Direct architect governance paired with specialized execution pods—zero account bloat.',
    detailedAnswer: 'Traditional agencies burden your budget with non-technical account executives, project managers, and markups. Freelance networks lack systemic architectural governance and code accountability. Our Hybrid Studio Model embeds an experienced Lead Solutions Architect directly on your team, supplemented by vetted domain specialists (e.g., performance tuning, Bluetooth/IoT, distributed databases). This model yields ~35% faster delivery with zero communication disconnect.',
    highlights: [
      'Direct line to senior solutions architects (no middlemen)',
      'Vetted niche specialists onboarded specifically for your stack',
      'Guaranteed architectural integrity and automated test suites'
    ],
    icon: <Layers className="w-4 h-4 text-[#1053D4]" />
  },
  {
    id: 'ip-ownership',
    category: 'IP & Security',
    question: 'Who owns the intellectual property and code created during the partnership?',
    shortAnswer: 'You retain 100% full, irrevocable ownership of all source code, assets, and documentation.',
    detailedAnswer: 'From the first commit to final deployment, all work products—including Git repositories, database schema blueprints, Docker containers, Figma design systems, and CI/CD pipelines—are 100% your exclusive intellectual property. We sign binding mutual Non-Disclosure Agreements (NDAs) and IP assignment contracts before any architectural work begins. There are zero proprietary licensing locks or royalties.',
    highlights: [
      '100% IP ownership assigned to you in writing',
      'Clean Git check-ins to your own repositories from day one',
      'Zero vendor lock-in or proprietary framework traps'
    ],
    icon: <ShieldCheck className="w-4 h-4 text-emerald-600" />
  },
  {
    id: 'team-handover',
    category: 'Architecture',
    question: 'Can our in-house engineering team take over and maintain the codebase after launch?',
    shortAnswer: 'Yes. We build codebases designed for friction-free handover within 48 hours.',
    detailedAnswer: 'We practice strict architectural ergonomics: strictly typed TypeScript, idiomatic modular patterns, automated test coverage, and clear inline documentation. When you are ready to onboard internal developers, we host dedicated handover sessions, provide architectural decision records (ADRs), and walk your engineers through development workflows so they can ship new features comfortably in under 48 hours.',
    highlights: [
      'Standardized TypeScript and modular component structure',
      'Architectural Decision Records (ADRs) and onboarding guides',
      'Live code walkthroughs & pair-programming transfer sessions'
    ],
    icon: <Cpu className="w-4 h-4 text-[#1053D4]" />
  },
  {
    id: 'sprint-visibility',
    category: 'Delivery & Sprints',
    question: 'How do you structure communication, sprints, and progress tracking?',
    shortAnswer: 'Two-week sprint cadences, live staging previews, and direct engineer access.',
    detailedAnswer: 'We run structured, transparent 2-week Agile sprints. Every sprint commences with clear deliverable definitions and concludes with a working demonstration. Clients have continuous access to private Git branches, real-time staging environments, sprint tracking boards, and direct shared communication channels (Slack/Teams). You will never wonder what is being worked on or when it will ship.',
    highlights: [
      'Bi-weekly sprint demos and continuous delivery staging',
      'Direct developer access on shared Slack or Teams channels',
      'Transparent milestone velocity without unexpected surprises'
    ],
    icon: <Clock className="w-4 h-4 text-[#E11D23]" />
  },
  {
    id: 'security-standards',
    category: 'IP & Security',
    question: 'What security standards and automated testing protocols do you follow?',
    shortAnswer: 'Security by default: automated SAST scanning, RBAC enforcement, and encryption.',
    detailedAnswer: 'Security isn’t a post-launch afterthought—it is applied from commit zero. We configure automated static analysis, container sandboxing, secret masking, role-based access control (RBAC), and encryption at rest and in transit. For applications handling sensitive user credentials or telemetry, we implement strict audit trails and zero-trust perimeter boundaries.',
    highlights: [
      'Automated SAST & dependency vulnerability scanning in CI/CD',
      'Zero-trust role-based authorization models',
      'Strict encryption protocols and environment secret isolation'
    ],
    icon: <ShieldCheck className="w-4 h-4 text-[#1053D4]" />
  },
  {
    id: 'technology-selection',
    category: 'Architecture',
    question: 'How do you choose which frameworks and cloud technologies to use for a project?',
    shortAnswer: 'Pragmatic, battle-tested solutions tailored to business requirements over hype.',
    detailedAnswer: 'We prioritize longevity, developer ergonomics, ecosystem maturity, and hiring availability. Rather than jumping on ephemeral trends, we assess your operational throughput, offline resilience requirements, and expected data load before recommending an architecture (e.g., React/Vite, Node.js/Go, relational PostgreSQL or real-time Firestore, Docker/GCP/AWS).',
    highlights: [
      'Pragmatic choices: reliability and talent pool availability over hype',
      'Scalable from single-server deployment to multi-region cloud',
      'Optimized for low maintenance costs and high operational durability'
    ],
    icon: <Cpu className="w-4 h-4 text-[#1053D4]" />
  },
  {
    id: 'getting-started',
    category: 'Model & Partnership',
    question: 'What does the engagement kick-off look like if we decide to collaborate?',
    shortAnswer: 'A zero-commitment architectural discovery call followed by a defined roadmap.',
    detailedAnswer: 'We start with a focused 30-minute technical discovery session to review your goals, existing stack, and timeline constraints. Next, our lead architect prepares a concise Scope & Feasibility Brief with proposed architectural milestones and cost estimates. Once approved, sprint zero begins within days.',
    highlights: [
      'Initial 30-min architectural discovery session',
      'Concise technical feasibility blueprint & milestone scope',
      'Sprint zero onboarding initiated in under a week'
    ],
    icon: <Sparkles className="w-4 h-4 text-emerald-600" />
  }
];

const CATEGORIES = [
  'All',
  'Model & Partnership',
  'Architecture',
  'IP & Security',
  'Delivery & Sprints'
] as const;

interface AboutFaqAccordionProps {
  onNavigate: (page: PageRoute) => void;
}

export const AboutFaqAccordion: React.FC<AboutFaqAccordionProps> = ({ onNavigate }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  // Allow multiple items open or single open; by default first item is open
  const [openIds, setOpenIds] = useState<Set<string>>(new Set(['who-we-are']));
  const accordionPrefix = useId();

  // Filter items
  const filteredFaqs = FAQ_DATA.filter((item) => {
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    const qLower = searchQuery.toLowerCase().trim();
    const matchesSearch = 
      !qLower ||
      item.question.toLowerCase().includes(qLower) ||
      item.shortAnswer.toLowerCase().includes(qLower) ||
      item.detailedAnswer.toLowerCase().includes(qLower) ||
      item.highlights?.some((h) => h.toLowerCase().includes(qLower));
    return matchesCategory && matchesSearch;
  });

  const toggleItem = (id: string) => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const expandAll = () => {
    setOpenIds(new Set(filteredFaqs.map((f) => f.id)));
  };

  const collapseAll = () => {
    setOpenIds(new Set());
  };

  return (
    <section className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
      {/* SECTION HEADER */}
      <ScrollReveal>
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-xs font-bold uppercase tracking-wider text-[#1053D4]">
            <HelpCircle className="w-3.5 h-3.5 text-[#1053D4]" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111c2d] tracking-tight">
            Everything You Need to Know About Partnering With Us
          </h2>
          <p className="text-base text-[#424653] leading-relaxed">
            Transparent answers regarding our engineering standards, Hybrid Studio Model, intellectual property guarantees, and sprint execution workflows.
          </p>
        </div>
      </ScrollReveal>

      {/* FILTER & SEARCH TOOLBAR */}
      <ScrollReveal delay={0.1}>
        <div className="bg-white rounded-3xl p-5 sm:p-6 border border-[#e5eaf2] shadow-sm mb-8 space-y-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-[#737785] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search questions (e.g. IP ownership, sprint, stack)..."
                className="w-full pl-10 pr-9 py-2.5 rounded-xl bg-[#f8faff] border border-[#d0daf2] text-sm text-[#111c2d] placeholder-[#737785] focus:outline-none focus:ring-2 focus:ring-[#1053D4]/20 focus:border-[#1053D4] transition-all"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="cursor-pointer absolute right-3 top-1/2 -translate-y-1/2 text-[#737785] hover:text-[#111c2d] p-1 rounded-full hover:bg-slate-200 transition-colors"
                  aria-label="Clear search"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Quick Actions (Expand / Collapse All) */}
            <div className="flex items-center gap-2 text-xs font-semibold self-end md:self-auto">
              <span className="text-[#737785] mr-1 hidden sm:inline">
                {filteredFaqs.length} {filteredFaqs.length === 1 ? 'question' : 'questions'}
              </span>
              <button
                type="button"
                onClick={expandAll}
                className="cursor-pointer px-3 py-1.5 rounded-lg border border-[#d0daf2] text-[#424653] hover:text-[#1053D4] hover:border-[#1053D4] hover:bg-blue-50/50 transition-all active:scale-95"
              >
                Expand All
              </button>
              <button
                type="button"
                onClick={collapseAll}
                className="cursor-pointer px-3 py-1.5 rounded-lg border border-[#d0daf2] text-[#424653] hover:text-[#1053D4] hover:border-[#1053D4] hover:bg-blue-50/50 transition-all active:scale-95"
              >
                Collapse All
              </button>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-[#f0f3ff]">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`cursor-pointer px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 ${
                    isActive
                      ? 'bg-[#1053D4] text-white shadow-sm shadow-[#1053D4]/25'
                      : 'bg-[#f0f3ff] text-[#424653] hover:bg-[#e4ebff] hover:text-[#1053D4]'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </ScrollReveal>

      {/* ACCORDION LIST */}
      <div className="space-y-4">
        {filteredFaqs.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center border border-[#e5eaf2] space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#1053D4] flex items-center justify-center mx-auto">
              <HelpCircle className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#111c2d]">No matching questions found</h3>
            <p className="text-sm text-[#424653] max-w-md mx-auto">
              We couldn't find any questions matching "{searchQuery}". Clear your search or send us a direct inquiry.
            </p>
            <div className="pt-2 flex items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}
                className="cursor-pointer px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-xs font-semibold text-[#111c2d] transition-colors"
              >
                Reset Filters
              </button>
              <a
                href="mailto:info@vaptechsol.com"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#1053D4] hover:bg-[#0c44b0] text-xs font-semibold text-white transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Ask info@vaptechsol.com</span>
              </a>
            </div>
          </div>
        ) : (
          filteredFaqs.map((item, index) => {
            const isOpen = openIds.has(item.id);
            const contentId = `${accordionPrefix}-content-${item.id}`;
            const headerId = `${accordionPrefix}-header-${item.id}`;

            return (
              <ScrollReveal key={item.id} delay={Math.min(index * 0.05, 0.3)}>
                <motion.div
                  layout
                  transition={{ layout: { duration: 0.25, ease: 'easeInOut' } }}
                  className={`bg-white rounded-2xl sm:rounded-3xl border transition-all duration-300 overflow-hidden ${
                    isOpen 
                      ? 'border-[#1053D4] shadow-md shadow-[#1053D4]/5 ring-1 ring-[#1053D4]/20' 
                      : 'border-[#e5eaf2] hover:border-[#b8c2d6] hover:shadow-sm'
                  }`}
                >
                  {/* ACCORDION TRIGGER */}
                  <button
                    id={headerId}
                    type="button"
                    onClick={() => toggleItem(item.id)}
                    aria-expanded={isOpen}
                    aria-controls={contentId}
                    className="w-full p-5 sm:p-6 text-left flex items-start sm:items-center justify-between gap-4 cursor-pointer group"
                  >
                    <div className="flex items-start sm:items-center gap-3.5 flex-1 min-w-0">
                      <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 mt-0.5 sm:mt-0 transition-colors ${
                        isOpen ? 'bg-[#1053D4]/10 text-[#1053D4]' : 'bg-slate-100 text-[#737785] group-hover:bg-[#1053D4]/10 group-hover:text-[#1053D4]'
                      }`}>
                        {item.icon || <HelpCircle className="w-4 h-4" />}
                      </div>

                      <div className="space-y-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#1053D4] bg-[#f0f3ff] px-2 py-0.5 rounded-md">
                            {item.category}
                          </span>
                        </div>
                        <h3 className={`text-base sm:text-lg font-bold tracking-tight transition-colors ${
                          isOpen ? 'text-[#1053D4]' : 'text-[#111c2d] group-hover:text-[#1053D4]'
                        }`}>
                          {item.question}
                        </h3>
                        {!isOpen && (
                          <p className="text-xs sm:text-sm text-[#737785] line-clamp-1 hidden sm:block">
                            {item.shortAnswer}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* ROTATING CHEVRON INDICATOR */}
                    <div className="shrink-0 pt-1 sm:pt-0">
                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className={`w-9 h-9 rounded-xl flex items-center justify-center border transition-colors ${
                          isOpen 
                            ? 'bg-[#1053D4] text-white border-[#1053D4]' 
                            : 'bg-slate-50 border-[#d0daf2] text-[#424653] group-hover:border-[#1053D4] group-hover:text-[#1053D4]'
                        }`}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </motion.div>
                    </div>
                  </button>

                  {/* ANIMATED ACCORDION CONTENT */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.section
                        id={contentId}
                        role="region"
                        aria-labelledby={headerId}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ 
                          height: 'auto', 
                          opacity: 1,
                          transition: {
                            height: { duration: 0.35, ease: [0.04, 0.62, 0.23, 0.98] },
                            opacity: { duration: 0.25, delay: 0.05 }
                          }
                        }}
                        exit={{ 
                          height: 0, 
                          opacity: 0,
                          transition: {
                            height: { duration: 0.28, ease: [0.04, 0.62, 0.23, 0.98] },
                            opacity: { duration: 0.18 }
                          }
                        }}
                        className="overflow-hidden border-t border-[#f0f3ff]"
                      >
                        <div className="p-5 sm:p-7 pt-4 space-y-4 bg-gradient-to-b from-[#f9fbff] to-white">
                          <p className="text-sm sm:text-base text-[#424653] leading-relaxed">
                            {item.detailedAnswer}
                          </p>

                          {item.highlights && item.highlights.length > 0 && (
                            <div className="pt-2">
                              <span className="text-xs font-bold uppercase tracking-wider text-[#737785] block mb-2">
                                Key Takeaways
                              </span>
                              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                                {item.highlights.map((point) => (
                                  <div
                                    key={point}
                                    className="flex items-start gap-2 p-2.5 rounded-xl bg-white border border-[#e5eaf2] text-xs font-medium text-[#111c2d]"
                                  >
                                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                                    <span>{point}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </motion.section>
                    )}
                  </AnimatePresence>
                </motion.div>
              </ScrollReveal>
            );
          })
        )}
      </div>

      {/* FOOTER CALLOUT: STILL HAVE QUESTIONS */}
      <ScrollReveal delay={0.2}>
        <div className="mt-12 bg-white rounded-3xl p-6 sm:p-8 border border-[#e5eaf2] shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#1053D4]">
                Architectural Discovery
              </span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-[#111c2d]">
              Have a specific technical question or architectural challenge?
            </h3>
            <p className="text-xs sm:text-sm text-[#424653] max-w-xl">
              Talk directly with a Lead Solutions Architect. We can review your system specifications, provide feedback on stack viability, and discuss milestones.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <a
              href="mailto:info@vaptechsol.com"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white border border-[#d0daf2] hover:border-[#1053D4] text-[#111c2d] hover:text-[#1053D4] text-xs font-semibold shadow-sm transition-all"
            >
              <Mail className="w-4 h-4 text-[#1053D4]" />
              <span>info@vaptechsol.com</span>
            </a>
            <button
              onClick={() => onNavigate('contact')}
              className="cursor-pointer inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#1053D4] hover:bg-[#0c44b0] text-white text-xs font-semibold shadow-md transition-all active:scale-95"
            >
              <span>Schedule Consultation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};
