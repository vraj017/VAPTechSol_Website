import React, { useState } from 'react';
import { PageRoute } from '../types.ts';
import { RideSyncPhonePreview } from '../components/Illustrations.tsx';
import { 
  AnimatedRadarIcon, 
  AnimatedRadioIcon, 
  AnimatedMobileIcon, 
  AnimatedShieldIcon,
  AnimatedLiveHeartbeat,
  AnimatedCompassIcon,
  AnimatedLockNdaIcon,
  AnimatedRocketIcon,
  ScrollReveal
} from '../components/AnimatedIcons.tsx';
import { 
  WifiOff, ArrowRight, Mail
} from 'lucide-react';
import { motion } from 'motion/react';

interface ProductsPageProps {
  onNavigate: (page: PageRoute) => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-24 md:space-y-32">
      {/* 1. HERO HEADER */}
      <section className="pt-6 md:pt-12 pb-4">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <div className="inline-flex items-center gap-2">
            <AnimatedLiveHeartbeat label="VAPTECHSOL PRODUCT LABS" />
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-[#111c2d] tracking-tight leading-tight max-w-4xl mx-auto">
            Digital Products Built for the <span className="text-[#1053D4]">Real World.</span>
          </h1>

          <p className="text-base sm:text-lg text-[#424653] max-w-3xl mx-auto leading-relaxed">
            In addition to client engineering services, VapTechSol designs, engineers, and operates proprietary digital applications and mobility systems built on resilient distributed foundations.
          </p>
        </div>
      </section>

      {/* 2. FEATURED FLAGSHIP PRODUCT: RIDESYNC */}
      <section className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#d0daf2] shadow-md grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Details */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1053D4] bg-[#e8eeff] px-3.5 py-1.5 rounded-full border border-blue-200">
                <AnimatedRadarIcon size={16} />
                <span>Featured Flagship Product • Mobility & Connected Travel</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111c2d] tracking-tight">
                RideSync: Connected Group Riding Companion
              </h2>

              <p className="text-base text-[#424653] leading-relaxed">
                A connected riding companion designed to bring live location sharing, ride coordination, and voice communication together in one connected experience. Engineered for group road trips, motorcycle rides, and cycling convoys.
              </p>

              {/* 4 Feature Points (2x2 grid) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
                <div className="bg-[#f0f3ff] p-4 rounded-2xl border border-[#d0daf2] space-y-2 hover:border-[#1053D4] transition-colors">
                  <div className="flex items-center gap-2.5 font-bold text-sm text-[#111c2d]">
                    <AnimatedRadarIcon size={20} />
                    <span>Live Group Location</span>
                  </div>
                  <p className="text-xs text-[#424653] leading-relaxed">
                    Real-time map tracking to see where every rider or traveler is in the convoy.
                  </p>
                </div>

                <div className="bg-[#f0f3ff] p-4 rounded-2xl border border-[#d0daf2] space-y-2 hover:border-[#1053D4] transition-colors">
                  <div className="flex items-center gap-2.5 font-bold text-sm text-[#111c2d]">
                    <AnimatedRadioIcon size={20} />
                    <span>Push-to-Talk Voice</span>
                  </div>
                  <p className="text-xs text-[#424653] leading-relaxed">
                    Instant, crystal-clear voice communication keeping the group connected on the go.
                  </p>
                </div>

                <div className="bg-[#f0f3ff] p-4 rounded-2xl border border-[#d0daf2] space-y-2 hover:border-[#1053D4] transition-colors">
                  <div className="flex items-center gap-2.5 font-bold text-sm text-[#111c2d]">
                    <AnimatedCompassIcon size={20} />
                    <span>Offline Route Navigation</span>
                  </div>
                  <p className="text-xs text-[#424653] leading-relaxed">
                    Reliable route navigation and caching even when mobile signal drops in remote areas.
                  </p>
                </div>

                <div className="bg-[#f0f3ff] p-4 rounded-2xl border border-[#d0daf2] space-y-2 hover:border-[#1053D4] transition-colors">
                  <div className="flex items-center gap-2.5 font-bold text-sm text-[#111c2d]">
                    <AnimatedShieldIcon size={20} />
                    <span>Smart Convoy Alerts</span>
                  </div>
                  <p className="text-xs text-[#424653] leading-relaxed">
                    Automated notifications if a rider falls behind or takes an unexpected turn.
                  </p>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <a
                  href="https://ridesync.vaptechsol.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#1053D4] hover:bg-[#0c44b0] text-white text-sm font-semibold shadow-md transition-all active:scale-[0.99] group"
                >
                  <AnimatedRadarIcon size={18} />
                  <span>Request Early Access</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </a>

                <a
                  href="mailto:info@vaptechsol.com"
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white border border-[#d0daf2] hover:border-[#1053D4] text-[#111c2d] hover:text-[#1053D4] text-sm font-semibold transition-all shadow-xs group"
                >
                  <Mail className="w-4 h-4 text-[#1053D4] transition-transform group-hover:scale-110" />
                  <span>info@vaptechsol.com</span>
                </a>
              </div>
            </div>

            {/* Right Mobile App Preview */}
            <div className="lg:col-span-5 flex justify-center">
              <RideSyncPhonePreview />
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 3. PRODUCT ENGINEERING PRINCIPLES */}
      <section className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1053D4]">
              VapTechSol Product Labs
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#111c2d] tracking-tight">
              Product Engineering Principles
            </h2>
            <p className="text-base text-[#424653] leading-relaxed">
              Every application engineered inside our labs adheres to three foundational tenets, guaranteeing long-term utility, dependable behavior, and seamless UX.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ScrollReveal delay={0.1}>
            <div className="bg-white p-8 rounded-3xl border border-[#e5eaf2] shadow-sm hover:border-[#1053D4] hover:shadow-xl transition-all space-y-4 h-full flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#e8eeff] flex items-center justify-center text-[#1053D4] transition-transform group-hover:scale-110">
                  <WifiOff className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#111c2d] group-hover:text-[#1053D4] transition-colors">Offline-First Reliability</h3>
                <p className="text-sm text-[#424653] leading-relaxed">
                  Mobile software shouldn't die when network connectivity drops. Our products feature local SQLite caching, conflict-free replicated data types, and transparent background synchronization.
                </p>
              </div>
              <div className="pt-2 text-xs font-mono font-semibold text-[#1053D4]">
                ✓ ZERO BLANK SCREENS ON SIGNAL LOSS
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="bg-white p-8 rounded-3xl border border-[#e5eaf2] shadow-sm hover:border-[#1053D4] hover:shadow-xl transition-all space-y-4 h-full flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#e8eeff] flex items-center justify-center text-[#1053D4] transition-transform group-hover:scale-110">
                  <AnimatedRadarIcon size={26} />
                </div>
                <h3 className="text-xl font-bold text-[#111c2d] group-hover:text-[#1053D4] transition-colors">Micro-Precision Telemetry</h3>
                <p className="text-sm text-[#424653] leading-relaxed">
                  Real-time spatial data demands lightweight packet encoding and adaptive battery management. We optimize GPS sampling rates dynamically according to travel velocity and convoy proximity.
                </p>
              </div>
              <div className="pt-2 text-xs font-mono font-semibold text-[#1053D4]">
                ✓ SUB-15MS GEO-HASH PROCESSING
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="bg-white p-8 rounded-3xl border border-[#e5eaf2] shadow-sm hover:border-[#1053D4] hover:shadow-xl transition-all space-y-4 h-full flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#e8eeff] flex items-center justify-center text-[#1053D4] transition-transform group-hover:scale-110">
                  <AnimatedLockNdaIcon size={26} />
                </div>
                <h3 className="text-xl font-bold text-[#111c2d] group-hover:text-[#1053D4] transition-colors">Privacy by Architecture</h3>
                <p className="text-sm text-[#424653] leading-relaxed">
                  Location history and voice packets belong strictly to the user. We implement end-to-end encrypted session keys and ephemeral data pipelines that purge telemetry immediately after trips conclude.
                </p>
              </div>
              <div className="pt-2 text-xs font-mono font-semibold text-[#1053D4]">
                ✓ NO THIRD-PARTY TRACKING MATRICES
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 4. LABS PIPELINE */}
      <section className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="bg-[#f0f3ff] rounded-3xl p-8 sm:p-12 border border-[#d0daf2] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1053D4]">
                Upcoming Incubations
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#111c2d]">
                Have a Proprietary Idea for Our Product Labs?
              </h3>
              <p className="text-sm sm:text-base text-[#424653] leading-relaxed">
                We frequently co-venture and joint-build specialized SaaS applications and mobility tooling with visionary industry leaders. If you bring domain expertise, we bring elite software architecture.
              </p>
            </div>
            <div className="lg:col-span-4 flex lg:justify-end">
              <button
                onClick={() => onNavigate('contact')}
                className="cursor-pointer inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#1053D4] hover:bg-[#0c44b0] text-white text-sm font-semibold shadow-md transition-all"
              >
                <AnimatedRocketIcon size={18} />
                <span>Propose a Co-Venture →</span>
              </button>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
};
