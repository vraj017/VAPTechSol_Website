import React, { useState } from 'react';
import { 
  Code, Laptop, Smartphone, Database, Zap, Shield, 
  Radio, Volume2, MapPin, Compass, CheckCircle2,
  Server, Cpu, Layers, GitBranch, ArrowRight,
  Lock, Globe, TrendingUp, FileDiff, Sparkles,
  Moon, Sun, Copy, Check, ExternalLink, GitCompare, Play
} from 'lucide-react';
import { 
  AnimatedTerminalIcon, 
  AnimatedDatabaseIcon, 
  AnimatedMobileIcon, 
  AnimatedShieldIcon 
} from './AnimatedIcons.tsx';

// Service Visual illustration
export const ServiceGraphic: React.FC<{ type: string; badge: string }> = ({ type, badge }) => {
  return (
    <div className="relative w-full h-[280px] sm:h-[320px] rounded-xl overflow-hidden bg-gradient-to-br from-[#0c1a30] via-[#112444] to-[#081224] border border-[#d0daf2] shadow-sm flex items-center justify-center group select-none">
      {/* Background technical grid */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#3b82f6 1px, transparent 1px), radial-gradient(#60a5fa 1px, transparent 1px)',
          backgroundSize: '24px 24px',
          backgroundPosition: '0 0, 12px 12px'
        }}
      />

      {/* Dynamic Graphic Content depending on service */}
      {type === 'custom-software' && (
        <div className="relative w-full h-full p-6 flex flex-col justify-between">
          <div className="flex items-center justify-between border-b border-blue-500/20 pb-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
              <span className="text-xs font-mono text-blue-300 ml-2">architecture-spec.ts</span>
            </div>
            <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
              BUILD PASSING
            </span>
          </div>

          <div className="grid grid-cols-3 gap-3 my-auto py-2">
            <div className="p-3 rounded-lg bg-blue-950/60 border border-blue-500/30">
              <div className="flex items-center gap-2 text-blue-400 text-xs font-semibold mb-1">
                <Layers className="w-3.5 h-3.5" /> Domain Core
              </div>
              <div className="space-y-1.5">
                <div className="h-1.5 w-full bg-blue-400/30 rounded" />
                <div className="h-1.5 w-4/5 bg-blue-400/20 rounded" />
              </div>
            </div>
            <div className="p-3 rounded-lg bg-indigo-950/60 border border-indigo-500/30">
              <div className="flex items-center gap-2 text-indigo-400 text-xs font-semibold mb-1">
                <Cpu className="w-3.5 h-3.5" /> Event Stream
              </div>
              <div className="space-y-1.5">
                <div className="h-1.5 w-full bg-indigo-400/30 rounded" />
                <div className="h-1.5 w-3/4 bg-indigo-400/20 rounded" />
              </div>
            </div>
            <div className="p-3 rounded-lg bg-cyan-950/60 border border-cyan-500/30">
              <div className="flex items-center gap-2 text-cyan-400 text-xs font-semibold mb-1">
                <Database className="w-3.5 h-3.5" /> PostgreSQL
              </div>
              <div className="space-y-1.5">
                <div className="h-1.5 w-full bg-cyan-400/30 rounded" />
                <div className="h-1.5 w-2/3 bg-cyan-400/20 rounded" />
              </div>
            </div>
          </div>

          <div className="bg-[#050b14]/80 rounded p-2.5 font-mono text-[11px] text-blue-200/80 border border-blue-500/20">
            <span className="text-emerald-400">✓</span> Verified isolated tenants · Zero legacy debt
          </div>
        </div>
      )}

      {type === 'web-development' && (
        <div className="relative w-full h-full p-6 flex flex-col items-center justify-center">
          {/* Mockup Laptop & Device Frame */}
          <div className="w-4/5 bg-slate-900 rounded-t-lg border-2 border-slate-700 p-2 shadow-2xl">
            <div className="h-3 flex items-center gap-1.5 px-1 border-b border-slate-800 pb-1 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
              <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
              <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
              <div className="w-32 h-1.5 bg-slate-800 rounded ml-2" />
            </div>
            <div className="h-28 bg-[#f9f9ff] rounded p-2 flex flex-col justify-between">
              <div className="flex justify-between items-center border-b border-slate-200 pb-1">
                <div className="h-2 w-16 bg-blue-600 rounded" />
                <div className="flex gap-1">
                  <div className="h-1.5 w-6 bg-slate-300 rounded" />
                  <div className="h-1.5 w-6 bg-slate-300 rounded" />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-1.5">
                <div className="h-12 bg-blue-50 rounded border border-blue-100 p-1">
                  <div className="h-1.5 w-8 bg-blue-500 rounded mb-1" />
                  <div className="h-1 w-12 bg-slate-300 rounded" />
                </div>
                <div className="h-12 bg-slate-50 rounded border border-slate-100 p-1">
                  <div className="h-1.5 w-8 bg-slate-400 rounded mb-1" />
                  <div className="h-1 w-12 bg-slate-300 rounded" />
                </div>
                <div className="h-12 bg-slate-50 rounded border border-slate-100 p-1">
                  <div className="h-1.5 w-8 bg-slate-400 rounded mb-1" />
                  <div className="h-1 w-12 bg-slate-300 rounded" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-[88%] h-2 bg-slate-700 rounded-b-lg shadow-lg" />
        </div>
      )}

      {type === 'mobile-apps' && (
        <div className="relative w-full h-full flex items-center justify-center gap-3 px-6">
          {/* Left phone mockup */}
          <div className="w-24 h-44 rounded-xl bg-slate-900 border-2 border-slate-700 p-1.5 shadow-xl rotate-[-6deg] hidden sm:block">
            <div className="w-full h-full rounded-lg bg-slate-950 p-1.5 flex flex-col justify-between">
              <div className="w-8 h-1 bg-slate-700 rounded-full mx-auto" />
              <div className="space-y-1">
                <div className="h-2 w-12 bg-blue-500 rounded" />
                <div className="h-1 w-16 bg-slate-600 rounded" />
              </div>
              <div className="h-14 bg-blue-900/40 rounded border border-blue-500/30" />
            </div>
          </div>

          {/* Center primary phone mockup */}
          <div className="w-28 sm:w-32 h-52 rounded-2xl bg-slate-950 border-2 border-blue-500/60 p-2 shadow-2xl relative z-10">
            <div className="w-10 h-1 bg-slate-800 rounded-full mx-auto mb-2" />
            <div className="w-full h-40 rounded-xl bg-gradient-to-b from-blue-900/50 to-slate-900 p-2 flex flex-col justify-between border border-blue-400/20">
              <div className="flex items-center justify-between">
                <span className="text-[9px] font-bold text-white">VapTech Mobile</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              </div>
              <div className="bg-blue-600/30 rounded p-1.5 border border-blue-400/30">
                <div className="h-1.5 w-14 bg-white rounded mb-1" />
                <div className="h-1 w-10 bg-blue-200 rounded" />
              </div>
              <div className="h-8 bg-blue-500 text-white text-[9px] font-semibold rounded flex items-center justify-center">
                Sync Active (120fps)
              </div>
            </div>
          </div>

          {/* Right phone mockup */}
          <div className="w-24 h-44 rounded-xl bg-slate-900 border-2 border-slate-700 p-1.5 shadow-xl rotate-[6deg] hidden sm:block">
            <div className="w-full h-full rounded-lg bg-slate-950 p-1.5 flex flex-col justify-between">
              <div className="w-8 h-1 bg-slate-700 rounded-full mx-auto" />
              <div className="h-14 bg-indigo-900/40 rounded border border-indigo-500/30" />
              <div className="h-2 w-10 bg-indigo-400 rounded" />
            </div>
          </div>
        </div>
      )}

      {type === 'backend-apis' && (
        <div className="relative w-full h-full p-6 flex flex-col justify-between">
          <div className="flex items-center justify-between text-xs font-mono text-cyan-400">
            <span>&lt;API Gateway / Service Mesh&gt;</span>
            <span className="text-emerald-400 font-bold flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              99.999% UP
            </span>
          </div>

          <div className="relative my-auto flex items-center justify-between px-2 sm:px-4">
            <div className="p-2 sm:p-2.5 rounded-lg bg-blue-900/60 border border-blue-400/50 text-center shadow-lg hover:border-blue-300 transition-colors">
              <span className="text-[10px] text-blue-300 font-mono block">CLIENT</span>
              <span className="text-xs font-bold text-white">OAuth2</span>
            </div>
            
            {/* Animated data bus 1 */}
            <div className="h-0.5 flex-1 relative mx-1 sm:mx-2">
              <svg className="w-full h-2 overflow-visible" preserveAspectRatio="none">
                <line x1="0" y1="1" x2="100%" y2="1" stroke="#38bdf8" strokeWidth="2" className="anim-packet-flow" />
              </svg>
            </div>

            <div className="p-2 sm:p-2.5 rounded-lg bg-cyan-900/60 border border-cyan-400/50 text-center shadow-lg hover:border-cyan-300 transition-colors">
              <span className="text-[10px] text-cyan-300 font-mono block">ROUTER</span>
              <span className="text-xs font-bold text-white">Envoy</span>
            </div>

            {/* Animated data bus 2 */}
            <div className="h-0.5 flex-1 relative mx-1 sm:mx-2">
              <svg className="w-full h-2 overflow-visible" preserveAspectRatio="none">
                <line x1="0" y1="1" x2="100%" y2="1" stroke="#34d399" strokeWidth="2" className="anim-packet-flow" />
              </svg>
            </div>

            <div className="p-2 sm:p-2.5 rounded-lg bg-emerald-900/60 border border-emerald-400/50 text-center shadow-lg hover:border-emerald-300 transition-colors">
              <span className="text-[10px] text-emerald-300 font-mono block">STORAGE</span>
              <span className="text-xs font-bold text-white">PostgreSQL</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 bg-slate-900/90 p-2 rounded border border-slate-700">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
              Latency: 14ms (p99)
            </span>
            <span className="text-cyan-300">Rate Limiter: Active</span>
          </div>
        </div>
      )}

      {type === 'automation' && (
        <div className="relative w-full h-full p-6 flex flex-col justify-between">
          <div className="flex items-center justify-between text-xs font-mono text-indigo-300 border-b border-indigo-500/20 pb-2">
            <span>Automated Orchestration Pipeline</span>
            <span className="text-amber-400">CELERY · REDIS</span>
          </div>

          <div className="grid grid-cols-4 gap-2 my-auto">
            {['Inbound Webhook', 'Data Normalization', 'ERP Ledger Sync', 'Audit Log'].map((step, idx) => (
              <div key={step} className="p-2 rounded bg-indigo-950/60 border border-indigo-500/30 flex flex-col justify-between h-20 text-center">
                <span className="text-[10px] font-mono text-indigo-400">0{idx + 1}</span>
                <span className="text-[11px] font-medium text-white leading-tight">{step}</span>
                <span className="text-[9px] text-emerald-400">● Done</span>
              </div>
            ))}
          </div>

          <div className="text-[11px] font-mono text-emerald-400 bg-emerald-950/40 p-2 rounded border border-emerald-500/30 flex items-center justify-between">
            <span>Synchronized 14,280 transactions/hr</span>
            <span>0 Failures</span>
          </div>
        </div>
      )}

      {type === 'it-consulting' && (
        <div className="relative w-full h-full p-6 flex flex-col justify-between">
          <div className="flex items-center justify-between text-xs font-mono text-blue-300">
            <span>Enterprise Cloud Architecture Matrix</span>
            <span className="text-cyan-400">SOC2 · ISO 27001</span>
          </div>

          <div className="grid grid-cols-2 gap-3 my-auto">
            <div className="p-3 rounded-lg bg-blue-900/40 border border-blue-500/30">
              <span className="text-[10px] font-mono text-blue-300">COST OPTIMIZATION</span>
              <div className="text-xl font-bold text-white mt-0.5">-42% Cloud Spend</div>
              <p className="text-[10px] text-blue-200 mt-1">Right-sized AWS/GCP clusters</p>
            </div>
            <div className="p-3 rounded-lg bg-indigo-900/40 border border-indigo-500/30">
              <span className="text-[10px] font-mono text-indigo-300">GOVERNANCE</span>
              <div className="text-xl font-bold text-white mt-0.5">Zero CVEs</div>
              <p className="text-[10px] text-indigo-200 mt-1">Hardened Terraform IaC</p>
            </div>
          </div>

          <div className="bg-slate-900/80 rounded p-2 text-[11px] font-mono text-slate-300 flex items-center justify-between border border-slate-700">
            <span>Fractional CTO Advisory</span>
            <span className="text-emerald-400">Deployment Verified</span>
          </div>
        </div>
      )}

      {/* Floating Badge in bottom-left */}
      <div className="absolute bottom-4 left-4 z-20">
        <span className="inline-block px-3 py-1 rounded bg-[#004ab0] text-white text-[11px] font-bold tracking-wider uppercase shadow-md border border-white/20">
          {badge}
        </span>
      </div>
    </div>
  );
};

// Interactive RideSync Phone Preview
export const RideSyncPhonePreview: React.FC<{ interactive?: boolean }> = ({ interactive = true }) => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [activeChannel, setActiveChannel] = useState('#04');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleSpeakPress = () => {
    setIsSpeaking(true);
    setToastMessage('Voice channel active: Transmitting to convoy #409...');
  };

  const handleSpeakRelease = () => {
    setIsSpeaking(false);
    setTimeout(() => setToastMessage(null), 2500);
  };

  return (
    <div className="relative w-full max-w-[360px] mx-auto rounded-[36px] bg-[#0c1322] border-[6px] border-[#1f2937] p-3 shadow-2xl overflow-hidden text-slate-100">
      {/* Phone speaker notch */}
      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-4 bg-[#1f2937] rounded-full z-30 flex items-center justify-center">
        <div className="w-10 h-1 bg-slate-700 rounded-full" />
      </div>

      {/* Mobile Screen Surface */}
      <div className="rounded-[28px] bg-[#f8faff] text-[#111c2d] overflow-hidden pt-5 pb-3 px-3 relative border border-slate-200 flex flex-col justify-between min-h-[560px]">
        {/* Top status bar */}
        <div className="flex items-center justify-between text-xs text-[#424653] font-semibold px-1 mb-2">
          <span>09:41</span>
          <div className="flex items-center gap-1.5">
            <span className="text-[10px] bg-emerald-100 text-emerald-800 px-1 rounded">5G</span>
            <span>100%</span>
          </div>
        </div>

        {/* RideSync App Header */}
        <div className="bg-white rounded-xl p-2.5 shadow-sm border border-[#e5eaf2] mb-2.5">
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#004ab0]">
                RideSync Live
              </span>
            </div>
            <span className="text-[11px] font-mono bg-blue-50 text-blue-700 px-2 py-0.5 rounded font-semibold">
              Convoy: #409
            </span>
          </div>
          <div className="flex items-center justify-between text-xs">
            <div>
              <span className="text-[10px] text-[#737785] block font-medium">ACTIVE TRIP</span>
              <span className="font-bold text-sm text-[#111c2d]">Alpine Pass Route</span>
            </div>
            <div className="text-right">
              <span className="text-[10px] text-[#737785] block font-medium">REMAINING</span>
              <span className="font-bold text-sm text-[#004ab0]">48.2 km</span>
            </div>
          </div>
        </div>

        {/* GPS Map Graphic Area */}
        <div className="relative h-44 rounded-xl bg-[#e2eafc] overflow-hidden border border-[#c3c6d6] mb-2.5 shadow-inner">
          {/* Subtle Map roads & contours */}
          <svg className="w-full h-full" viewBox="0 0 300 180" fill="none">
            {/* Topography contours */}
            <path d="M0 60 Q 90 20, 180 80 T 300 40" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="4 4" />
            <path d="M0 120 Q 120 140, 200 90 T 300 130" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="4 4" />
            {/* Winding Alpine Route */}
            <path d="M20 140 C 70 120, 90 60, 160 50 C 220 40, 240 100, 280 80" stroke="#004ab0" strokeWidth="4" strokeLinecap="round" />
            
            {/* Lead rider */}
            <circle cx="280" cy="80" r="7" fill="#004ab0" stroke="#ffffff" strokeWidth="2" />
            <text x="280" y="70" textAnchor="middle" fill="#004ab0" fontSize="8" fontWeight="bold">Alex (Lead)</text>
            
            {/* You rider with pulsating radar beacon wave */}
            <circle cx="160" cy="50" r="16" fill="#e51612" fillOpacity="0.3" className="animate-ping" />
            <circle cx="160" cy="50" r="8" fill="#e51612" stroke="#ffffff" strokeWidth="2.5" />
            <text x="160" y="38" textAnchor="middle" fill="#e51612" fontSize="9" fontWeight="bold">You</text>
            
            {/* Sweep rider */}
            <circle cx="20" cy="140" r="7" fill="#1e293b" stroke="#ffffff" strokeWidth="2" />
            <text x="35" y="155" textAnchor="middle" fill="#1e293b" fontSize="8" fontWeight="bold">Carlos (Sweep)</text>
          </svg>

          {/* Compass & Speed indicator */}
          <div className="absolute top-2 left-2 bg-white/95 backdrop-blur px-2 py-1 rounded shadow-sm text-[10px] font-semibold text-[#111c2d] flex items-center gap-1 border border-slate-200">
            <Compass className="w-3 h-3 text-[#004ab0]" />
            <span>Pace: 65 km/h · NW</span>
          </div>

          <div className="absolute bottom-2 right-2 bg-emerald-600 text-white px-2 py-0.5 rounded text-[10px] font-bold shadow flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            <span>GPS Locked (12 Sats)</span>
          </div>
        </div>

        {/* Active Convoy Members List */}
        <div className="space-y-1.5 mb-2.5">
          <div className="flex items-center justify-between text-[11px] font-semibold text-[#737785] px-1">
            <span>CONVOY ROSTER (6)</span>
            <span className="text-[#004ab0] cursor-pointer">Live Distance</span>
          </div>

          <div className="bg-white rounded-lg p-2 border border-[#e5eaf2] flex items-center justify-between text-xs hover:border-blue-200 transition-colors">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-blue-100 text-[#004ab0] font-bold flex items-center justify-center text-[10px]">
                LD
              </div>
              <div>
                <span className="font-semibold block text-[#111c2d]">Alex Mercer (Lead)</span>
                <span className="text-[10px] text-[#737785]">Pace 65 km/h · Connected</span>
              </div>
            </div>
            <Volume2 className="w-3.5 h-3.5 text-blue-600 animate-pulse" />
          </div>

          <div className="bg-blue-50/70 rounded-lg p-2 border border-blue-200 flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-red-100 text-[#e51612] font-bold flex items-center justify-center text-[10px]">
                YOU
              </div>
              <div>
                <span className="font-semibold block text-[#111c2d]">Rider Profile (You)</span>
                <span className="text-[10px] text-[#737785]">Gap: +12m · Active Route</span>
              </div>
            </div>
            <span className="text-[10px] font-bold text-blue-700 bg-blue-100 px-1.5 py-0.5 rounded">Host</span>
          </div>
        </div>

        {/* Channel Selector */}
        <div className="flex items-center justify-between text-xs mb-2 px-1">
          <span className="text-[10px] text-[#737785] font-semibold uppercase">Open Channel:</span>
          <div className="flex gap-1">
            {['#04', '#01', '#08'].map(ch => (
              <button
                key={ch}
                onClick={() => setActiveChannel(ch)}
                className={`px-2 py-0.5 text-[10px] font-bold rounded cursor-pointer transition-all ${
                  activeChannel === ch 
                    ? 'bg-[#004ab0] text-white shadow-xs' 
                    : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                }`}
              >
                {ch}
              </button>
            ))}
          </div>
        </div>

        {/* Hold to Speak (PTT) Action Button with Live Soundwave Spectrum */}
        <div className="mt-auto">
          <button
            onMouseDown={handleSpeakPress}
            onMouseUp={handleSpeakRelease}
            onTouchStart={handleSpeakPress}
            onTouchEnd={handleSpeakRelease}
            className={`w-full py-3 px-3 rounded-xl font-bold text-sm text-white flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md select-none ${
              isSpeaking
                ? 'bg-red-600 scale-[0.98] ring-4 ring-red-300'
                : 'bg-[#004ab0] hover:bg-[#003c91]'
            }`}
          >
            {isSpeaking ? (
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-white animate-ping" />
                <div className="flex items-center gap-1 h-5">
                  <span className="w-1 bg-white rounded-full soundwave-bar" style={{ animationDelay: '0.1s' }} />
                  <span className="w-1 bg-white rounded-full soundwave-bar" style={{ animationDelay: '0.3s' }} />
                  <span className="w-1 bg-white rounded-full soundwave-bar" style={{ animationDelay: '0.2s' }} />
                  <span className="w-1 bg-white rounded-full soundwave-bar" style={{ animationDelay: '0.4s' }} />
                  <span className="w-1 bg-white rounded-full soundwave-bar" style={{ animationDelay: '0.15s' }} />
                </div>
                <span>BROADCASTING LIVE</span>
              </div>
            ) : (
              <>
                <Radio className="w-4 h-4 text-blue-200" />
                <span>Hold to Speak (Convoy Live)</span>
              </>
            )}
          </button>
        </div>

        {/* Toast / Notification when pressed */}
        {toastMessage && (
          <div className="absolute top-12 left-4 right-4 bg-slate-900 text-white text-[11px] p-2 rounded-lg shadow-lg text-center animate-in fade-in duration-200">
            {toastMessage}
          </div>
        )}
      </div>
    </div>
  );
};

// Interactive Align Web Studio Preview
export const AlignEditorPreview: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'diff' | 'sql' | 'beautify'>('diff');
  const [isDark, setIsDark] = useState(true);
  const [isSplit, setIsSplit] = useState(true);
  const [formatted, setFormatted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [sqlDialect, setSqlDialect] = useState<'PostgreSQL' | 'T-SQL' | 'MySQL'>('PostgreSQL');

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleFormat = () => {
    setFormatted(true);
    setTimeout(() => setFormatted(false), 2200);
  };

  return (
    <div className={`relative w-full max-w-[560px] mx-auto rounded-2xl border transition-all duration-300 shadow-2xl overflow-hidden font-sans text-xs ${
      isDark 
        ? 'bg-[#0f1117] border-[#2d3348] text-slate-200' 
        : 'bg-[#fcfdff] border-[#d8e0f0] text-slate-800'
    }`}>
      {/* 1. Browser/App Header Bar */}
      <div className={`px-4 py-3 flex items-center justify-between border-b transition-colors ${
        isDark ? 'bg-[#161a26] border-[#262c3e]' : 'bg-[#f1f4fb] border-[#e2e8f5]'
      }`}>
        {/* Window controls */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-[#ef4444]" />
            <span className="w-3 h-3 rounded-full bg-[#f59e0b]" />
            <span className="w-3 h-3 rounded-full bg-[#10b981]" />
          </div>
          <div className="hidden sm:flex items-center gap-1.5 ml-2 font-mono text-[11px] font-bold text-[#ff6b00]">
            <span>Align</span>
            <span className={`text-[9px] uppercase px-1.5 py-0.2 rounded font-semibold ${
              isDark ? 'bg-orange-500/20 text-orange-300' : 'bg-orange-100 text-orange-700'
            }`}>
              Studio
            </span>
          </div>
        </div>

        {/* Browser URL pill */}
        <div className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono border transition-colors ${
          isDark 
            ? 'bg-[#0d0f15] border-[#2a3045] text-slate-300' 
            : 'bg-white border-[#d8e0f0] text-slate-600 shadow-2xs'
        }`}>
          <Lock className="w-3 h-3 text-emerald-500" />
          <span className="font-semibold text-[#1053D4]">align</span>
          <span>.vaptechsol.com</span>
        </div>

        {/* Quick controls (Theme toggle & Live link) */}
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => setIsDark(!isDark)}
            aria-label="Toggle theme"
            className={`p-1.5 rounded-lg border transition-all cursor-pointer ${
              isDark 
                ? 'bg-[#1f2537] border-[#2e364f] hover:bg-[#283047] text-amber-300' 
                : 'bg-white border-[#d8e0f0] hover:bg-slate-100 text-slate-700'
            }`}
            title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {isDark ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
          </button>
          
          <a
            href="https://align.vaptechsol.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#ff6b00] hover:bg-[#e05e00] text-white text-[11px] font-bold transition-all shadow-xs cursor-pointer"
            title="Open Live Web App in New Tab"
          >
            <span>Live</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* 2. Primary Navigation Tabs */}
      <div className={`px-3 py-2 flex items-center justify-between border-b gap-2 overflow-x-auto ${
        isDark ? 'bg-[#121622] border-[#222839]' : 'bg-[#f7f9fd] border-[#e7edf7]'
      }`}>
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => setActiveTab('diff')}
            className={`cursor-pointer px-3 py-1.5 rounded-lg font-mono text-[11px] font-bold flex items-center gap-1.5 transition-all ${
              activeTab === 'diff'
                ? 'bg-[#ff6b00] text-white shadow-xs'
                : isDark 
                  ? 'text-slate-400 hover:text-white hover:bg-[#1a2030]' 
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
            }`}
          >
            <GitCompare className="w-3.5 h-3.5" />
            <span>Code Compare</span>
          </button>

          <button
            onClick={() => setActiveTab('sql')}
            className={`cursor-pointer px-3 py-1.5 rounded-lg font-mono text-[11px] font-bold flex items-center gap-1.5 transition-all ${
              activeTab === 'sql'
                ? 'bg-[#ff6b00] text-white shadow-xs'
                : isDark 
                  ? 'text-slate-400 hover:text-white hover:bg-[#1a2030]' 
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
            }`}
          >
            <Database className="w-3.5 h-3.5" />
            <span>SQL Compare</span>
          </button>

          <button
            onClick={() => setActiveTab('beautify')}
            className={`cursor-pointer px-3 py-1.5 rounded-lg font-mono text-[11px] font-bold flex items-center gap-1.5 transition-all ${
              activeTab === 'beautify'
                ? 'bg-[#ff6b00] text-white shadow-xs'
                : isDark 
                  ? 'text-slate-400 hover:text-white hover:bg-[#1a2030]' 
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Beautifier</span>
          </button>
        </div>

        {/* Secondary context controls */}
        <div className="flex items-center gap-1.5">
          {activeTab === 'diff' && (
            <button
              onClick={() => setIsSplit(!isSplit)}
              className={`cursor-pointer px-2.5 py-1 rounded text-[10px] font-mono font-semibold border transition-all ${
                isDark 
                  ? 'bg-[#1b2234] border-[#2e374f] text-slate-300 hover:border-slate-500' 
                  : 'bg-white border-slate-300 text-slate-700 hover:border-slate-400 shadow-2xs'
              }`}
            >
              {isSplit ? 'Split: Side-by-Side' : 'Split: Inline'}
            </button>
          )}

          {activeTab === 'sql' && (
            <div className="flex items-center gap-1">
              {(['PostgreSQL', 'T-SQL', 'MySQL'] as const).map(d => (
                <button
                  key={d}
                  onClick={() => setSqlDialect(d)}
                  className={`cursor-pointer px-2 py-0.5 rounded text-[10px] font-mono font-bold transition-all ${
                    sqlDialect === d
                      ? 'bg-[#1053D4] text-white'
                      : isDark ? 'text-slate-400 hover:text-slate-200' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {d}
                </button>
              ))}
            </div>
          )}

          {activeTab === 'beautify' && (
            <button
              onClick={handleFormat}
              className="cursor-pointer inline-flex items-center gap-1 px-2.5 py-1 rounded text-[10px] font-mono font-bold bg-[#1053D4] hover:bg-[#0c44b0] text-white transition-all shadow-xs active:scale-95"
            >
              <Sparkles className="w-3 h-3" />
              <span>{formatted ? '✓ Aligned!' : 'Format & Align'}</span>
            </button>
          )}
        </div>
      </div>

      {/* 3. Interactive Code Canvas */}
      <div className="p-3 sm:p-4 min-h-[300px] flex flex-col justify-between font-mono text-[11px] sm:text-xs">
        {/* TAB 1: CODE COMPARE / DIFF VIEW */}
        {activeTab === 'diff' && (
          <div className="space-y-3">
            <div className="flex items-center justify-between text-[10px] text-slate-400 pb-1 border-b border-dashed border-slate-700/40">
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>Language: TypeScript</span>
              </span>
              <span className="text-emerald-400 font-semibold">+2 additions, -2 deletions</span>
            </div>

            {isSplit ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {/* Original side */}
                <div className={`p-2.5 rounded-xl border ${
                  isDark ? 'bg-[#090b10] border-[#222736]' : 'bg-[#f4f7fc] border-[#d8e0f0]'
                }`}>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center justify-between">
                    <span>Original Code</span>
                    <span className="text-rose-400 font-mono">- legacy</span>
                  </div>
                  <div className="space-y-1 overflow-x-auto leading-relaxed">
                    <div className="text-slate-400">1  <span className="text-purple-400">export async function</span> <span className="text-blue-400">login</span>(req) &#123;</div>
                    <div className="bg-rose-500/15 text-rose-300 px-1 rounded border-l-2 border-rose-500">2-   <span className="text-purple-400">const</span> res = <span className="text-purple-400">await</span> legacyAuth(req);</div>
                    <div className="bg-rose-500/15 text-rose-300 px-1 rounded border-l-2 border-rose-500">3-   <span className="text-purple-400">if</span> (!res.ok) <span className="text-purple-400">return null</span>;</div>
                    <div className="text-slate-400">4    <span className="text-purple-400">return</span> res.user;</div>
                    <div className="text-slate-400">5  &#125;</div>
                  </div>
                </div>

                {/* Modified side */}
                <div className={`p-2.5 rounded-xl border ${
                  isDark ? 'bg-[#090b10] border-[#222736]' : 'bg-[#f4f7fc] border-[#d8e0f0]'
                }`}>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center justify-between">
                    <span>Modified Code</span>
                    <span className="text-emerald-400 font-mono">+ modern</span>
                  </div>
                  <div className="space-y-1 overflow-x-auto leading-relaxed">
                    <div className="text-slate-400">1  <span className="text-purple-400">export async function</span> <span className="text-blue-400">login</span>(req) &#123;</div>
                    <div className="bg-emerald-500/15 text-emerald-300 px-1 rounded border-l-2 border-emerald-500">2+   <span className="text-purple-400">const</span> res = <span className="text-purple-400">await</span> modernSSOAuth(req);</div>
                    <div className="bg-emerald-500/15 text-emerald-300 px-1 rounded border-l-2 border-emerald-500">3+   <span className="text-purple-400">if</span> (!res.ok) <span className="text-purple-400">throw new</span> AuthError();</div>
                    <div className="text-slate-400">4    <span className="text-purple-400">return</span> res.user;</div>
                    <div className="text-slate-400">5  &#125;</div>
                  </div>
                </div>
              </div>
            ) : (
              /* Inline Unified View */
              <div className={`p-3 rounded-xl border overflow-x-auto space-y-1 leading-relaxed ${
                isDark ? 'bg-[#090b10] border-[#222736]' : 'bg-[#f4f7fc] border-[#d8e0f0]'
              }`}>
                <div className="text-slate-400">1    <span className="text-purple-400">export async function</span> <span className="text-blue-400">login</span>(req) &#123;</div>
                <div className="bg-rose-500/15 text-rose-300 px-1.5 py-0.5 rounded border-l-2 border-rose-500">2-   <span className="text-purple-400">const</span> res = <span className="text-purple-400">await</span> legacyAuth(req);</div>
                <div className="bg-rose-500/15 text-rose-300 px-1.5 py-0.5 rounded border-l-2 border-rose-500">3-   <span className="text-purple-400">if</span> (!res.ok) <span className="text-purple-400">return null</span>;</div>
                <div className="bg-emerald-500/15 text-emerald-300 px-1.5 py-0.5 rounded border-l-2 border-emerald-500">2+   <span className="text-purple-400">const</span> res = <span className="text-purple-400">await</span> modernSSOAuth(req);</div>
                <div className="bg-emerald-500/15 text-emerald-300 px-1.5 py-0.5 rounded border-l-2 border-emerald-500">3+   <span className="text-purple-400">if</span> (!res.ok) <span className="text-purple-400">throw new</span> AuthError();</div>
                <div className="text-slate-400">4    <span className="text-purple-400">return</span> res.user;</div>
                <div className="text-slate-400">5  &#125;</div>
              </div>
            )}
          </div>
        )}

        {/* TAB 2: SQL COMPARE & NORMALIZATION */}
        {activeTab === 'sql' && (
          <div className="space-y-3">
            <div className="flex items-center justify-between text-[10px] text-slate-400 pb-1 border-b border-dashed border-slate-700/40">
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-blue-400" />
                <span>Dialect: <strong>{sqlDialect}</strong> AST Validator</span>
              </span>
              <span className="text-amber-400 font-semibold">Keywords Normalized (UPPERCASE)</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <div className={`p-2.5 rounded-xl border ${
                isDark ? 'bg-[#090b10] border-[#222736]' : 'bg-[#f4f7fc] border-[#d8e0f0]'
              }`}>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                  Unformatted Input SQL
                </div>
                <div className="text-slate-400 font-mono text-[11px] leading-relaxed break-all">
                  select u.id, u.name, o.total, count(o.id) from users u left join orders o on u.id=o.uid where o.status='completed' group by u.id, u.name order by o.total desc limit 10;
                </div>
              </div>

              <div className={`p-2.5 rounded-xl border ${
                isDark ? 'bg-[#090b10] border-[#222736]' : 'bg-[#f4f7fc] border-[#d8e0f0]'
              }`}>
                <div className="text-[10px] font-bold text-blue-400 uppercase tracking-wider mb-2 flex items-center justify-between">
                  <span>Aligned Dialect Query</span>
                  <span className="text-emerald-400 text-[10px]">✓ Validated</span>
                </div>
                <div className="space-y-0.5 text-slate-300 font-mono text-[11px] leading-relaxed">
                  <div><span className="text-blue-400 font-bold">SELECT</span></div>
                  <div className="pl-3">u.id, u.name, o.total, <span className="text-cyan-400">COUNT</span>(o.id)</div>
                  <div><span className="text-blue-400 font-bold">FROM</span> users u</div>
                  <div><span className="text-blue-400 font-bold">LEFT JOIN</span> orders o <span className="text-blue-400 font-bold">ON</span> u.id = o.uid</div>
                  <div><span className="text-blue-400 font-bold">WHERE</span> o.status = <span className="text-emerald-400">'completed'</span></div>
                  <div><span className="text-blue-400 font-bold">GROUP BY</span> u.id, u.name</div>
                  <div><span className="text-blue-400 font-bold">ORDER BY</span> o.total <span className="text-amber-400 font-bold">DESC</span></div>
                  <div><span className="text-blue-400 font-bold">LIMIT</span> 10;</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: BEAUTIFIER & FORMATTER */}
        {activeTab === 'beautify' && (
          <div className="space-y-3">
            <div className="flex items-center justify-between text-[10px] text-slate-400 pb-1 border-b border-dashed border-slate-700/40">
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-orange-400" />
                <span>Multi-Language Beautifier: JSON / JS / CSS / HTML</span>
              </span>
              <button
                onClick={handleCopy}
                className="cursor-pointer flex items-center gap-1 text-slate-300 hover:text-white"
              >
                {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                <span>{copied ? 'Copied!' : 'Copy Code'}</span>
              </button>
            </div>

            <div className={`p-3 rounded-xl border relative transition-all ${
              isDark ? 'bg-[#090b10] border-[#222736]' : 'bg-[#f4f7fc] border-[#d8e0f0]'
            }`}>
              {formatted && (
                <div className="absolute top-2 right-2 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-2 py-0.5 rounded text-[10px] font-bold animate-pulse">
                  Formatted in 0.18ms 🚀
                </div>
              )}
              <div className="space-y-1 font-mono text-[11px] leading-relaxed">
                <div>&#123;</div>
                <div className="pl-4"><span className="text-blue-400">"product"</span>: <span className="text-emerald-400">"Align"</span>,</div>
                <div className="pl-4"><span className="text-blue-400">"suite"</span>: <span className="text-emerald-400">"Code Differ & Beautifier"</span>,</div>
                <div className="pl-4"><span className="text-blue-400">"engine"</span>: <span className="text-emerald-400">"Monaco Core"</span>,</div>
                <div className="pl-4"><span className="text-blue-400">"execution"</span>: <span className="text-emerald-400">"100% In-Browser (Zero Server Leak)"</span>,</div>
                <div className="pl-4"><span className="text-blue-400">"languages"</span>: [</div>
                <div className="pl-8"><span className="text-amber-400">"TypeScript"</span>, <span className="text-amber-400">"JavaScript"</span>, <span className="text-amber-400">"SQL"</span>, <span className="text-amber-400">"JSON"</span>, <span className="text-amber-400">"HTML"</span>, <span className="text-amber-400">"CSS"</span></div>
                <div className="pl-4">],</div>
                <div className="pl-4"><span className="text-blue-400">"author"</span>: &#123;</div>
                <div className="pl-8"><span className="text-blue-400">"name"</span>: <span className="text-emerald-400">"VAPTechSol"</span>,</div>
                <div className="pl-8"><span className="text-blue-400">"url"</span>: <span className="text-cyan-400">"https://vaptechsol.com"</span></div>
                <div className="pl-4">&#125;</div>
                <div>&#125;</div>
              </div>
            </div>
          </div>
        )}

        {/* 4. Bottom Specs & Status Pill Footer */}
        <div className={`mt-3 pt-2.5 border-t flex flex-wrap items-center justify-between gap-2 text-[10px] ${
          isDark ? 'border-[#222839] text-slate-400' : 'border-[#e5eaf2] text-slate-600'
        }`}>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            <span className="font-semibold text-emerald-400">Zero Server-Side Storage</span>
            <span>•</span>
            <span>Monaco Diff Engine</span>
          </div>

          <a
            href="https://align.vaptechsol.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-bold text-[#ff6b00] hover:underline cursor-pointer"
          >
            <span>Launch Align Live App</span>
            <ArrowRight className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
};

// Clean, standard services & capabilities overview for the Hero section
export const HeroPlatformMockup: React.FC<{ onNavigate?: (page: any) => void }> = ({ onNavigate }) => {
  return (
    <div className="w-full rounded-2xl bg-white border border-[#e2e8f0] shadow-sm p-6 sm:p-7 text-[#111c2d] space-y-5">
      {/* Section Header */}
      <div className="flex items-center justify-between pb-4 border-b border-[#f1f5f9]">
        <div>
          <h3 className="text-lg font-bold text-[#111c2d]">
            Our Core Services
          </h3>
          <p className="text-xs text-[#64748b] mt-0.5">
            End-to-end software engineering & digital solutions
          </p>
        </div>
        <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-[#f1f5f9] text-[#475569]">
          VapTechSol
        </span>
      </div>

      {/* 4 Core Services List */}
      <div className="space-y-3">
        <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#f8fafc] border border-[#e2e8f0]/80 hover:border-[#1053D4]/40 transition-colors">
          <div className="w-9 h-9 rounded-lg bg-blue-50 text-[#1053D4] flex items-center justify-center shrink-0 mt-0.5">
            <Code className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-[#111c2d]">
              Custom Software Development
            </h4>
            <p className="text-xs text-[#64748b] mt-0.5 leading-relaxed">
              Tailored business applications, automated workflows, and robust backend systems designed for your specific operations.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#f8fafc] border border-[#e2e8f0]/80 hover:border-[#1053D4]/40 transition-colors">
          <div className="w-9 h-9 rounded-lg bg-blue-50 text-[#1053D4] flex items-center justify-center shrink-0 mt-0.5">
            <Globe className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-[#111c2d]">
              Web Applications & Portals
            </h4>
            <p className="text-xs text-[#64748b] mt-0.5 leading-relaxed">
              Fast, responsive web platforms and client dashboards built on modern technologies like React, Node, and TypeScript.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#f8fafc] border border-[#e2e8f0]/80 hover:border-[#1053D4]/40 transition-colors">
          <div className="w-9 h-9 rounded-lg bg-blue-50 text-[#1053D4] flex items-center justify-center shrink-0 mt-0.5">
            <Smartphone className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-[#111c2d]">
              Mobile App Engineering
            </h4>
            <p className="text-xs text-[#64748b] mt-0.5 leading-relaxed">
              Native and cross-platform iOS and Android applications with clean user interfaces and smooth real-world performance.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#f8fafc] border border-[#e2e8f0]/80 hover:border-[#1053D4]/40 transition-colors">
          <div className="w-9 h-9 rounded-lg bg-blue-50 text-[#1053D4] flex items-center justify-center shrink-0 mt-0.5">
            <Layers className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-[#111c2d]">
              Digital Product Innovation
            </h4>
            <p className="text-xs text-[#64748b] mt-0.5 leading-relaxed">
              From concept validation to production deployment, including proprietary products like the RideSync mobility platform.
            </p>
          </div>
        </div>
      </div>

      {/* Clean Bottom Consultation Row */}
      <div className="pt-3 border-t border-[#f1f5f9] flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="text-[#64748b]">
          Have an inquiry?{' '}
          <a
            href="mailto:info@vaptechsol.com"
            className="text-[#1053D4] font-medium hover:underline"
          >
            info@vaptechsol.com
          </a>
        </div>
        {onNavigate && (
          <button
            onClick={() => onNavigate('services')}
            className="cursor-pointer text-[#1053D4] font-semibold hover:text-[#0c44b0] flex items-center gap-1 transition-colors"
          >
            <span>View Services</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        )}
      </div>
    </div>
  );
};

// About Engineering Visual for About Us Screen
export const AboutEngineeringVisual: React.FC = () => {
  return (
    <div className="relative w-full rounded-2xl overflow-hidden bg-slate-900 border border-[#c3c6d6] shadow-xl group">
      {/* Studio Workspace graphic with engineers */}
      <div className="relative h-[340px] sm:h-[400px] w-full bg-gradient-to-tr from-[#0a1128] via-[#101f42] to-[#1e3a8a] p-6 flex flex-col justify-between">
        {/* Holographic system schematic */}
        <div className="absolute inset-0 opacity-25">
          <svg className="w-full h-full" viewBox="0 0 400 300" fill="none">
            <circle cx="200" cy="150" r="100" stroke="#60a5fa" strokeWidth="1" strokeDasharray="6 6" />
            <circle cx="200" cy="150" r="60" stroke="#38bdf8" strokeWidth="1.5" />
            <path d="M50 150 L350 150 M200 20 L200 280" stroke="#93c5fd" strokeWidth="0.8" strokeDasharray="4 4" />
          </svg>
        </div>

        {/* Top header status */}
        <div className="relative z-10 flex items-center justify-between">
          <div className="flex items-center gap-2 bg-slate-950/80 backdrop-blur px-3 py-1.5 rounded-lg border border-slate-700">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-mono text-emerald-300 font-semibold">PRODUCTION NODE : ACTIVE</span>
          </div>
          <div className="flex items-center gap-1.5 bg-red-950/70 text-red-300 border border-red-500/30 px-2.5 py-1 rounded text-xs font-mono font-bold">
            <span className="w-2 h-2 rounded-full bg-red-500" />
            <span>99.98% SLO</span>
          </div>
        </div>

        {/* Center schematic node labels */}
        <div className="relative z-10 grid grid-cols-2 gap-3 max-w-sm">
          <div className="p-3 rounded-lg bg-slate-900/80 border border-blue-500/40 backdrop-blur">
            <div className="text-[10px] font-mono text-blue-400">MICROSERVICES</div>
            <div className="text-sm font-bold text-white mt-0.5">Distributed Pods</div>
            <div className="text-[10px] text-slate-300 mt-1">Multi-Region Cloud</div>
          </div>
          <div className="p-3 rounded-lg bg-slate-900/80 border border-indigo-500/40 backdrop-blur">
            <div className="text-[10px] font-mono text-indigo-400">PIPELINES</div>
            <div className="text-sm font-bold text-white mt-0.5">Zero Downtime</div>
            <div className="text-[10px] text-slate-300 mt-1">Canary Orchestration</div>
          </div>
        </div>

        {/* Bottom descriptor overlay */}
        <div className="relative z-10 bg-slate-950/90 backdrop-blur p-4 rounded-xl border border-slate-800">
          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
            Precision-engineered pipelines for mission-critical web applications, enterprise microservices, and mobile platforms.
          </p>
        </div>
      </div>
    </div>
  );
};
