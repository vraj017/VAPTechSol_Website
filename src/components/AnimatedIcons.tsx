import React from 'react';
import { motion, useScroll, useSpring } from 'motion/react';

// ==========================================
// SCROLL PROGRESS BAR COMPONENT
// ==========================================
export const ScrollProgressBar: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1053D4] via-[#3582FD] to-[#E11D23] origin-left z-50 pointer-events-none"
    />
  );
};

// ==========================================
// REUSABLE SCROLL REVEAL WRAPPER
// ==========================================
export const ScrollReveal: React.FC<{
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
}> = ({ children, delay = 0, direction = 'up', className = '' }) => {
  const offsets = {
    up: { y: 32, x: 0 },
    down: { y: -32, x: 0 },
    left: { x: 32, y: 0 },
    right: { x: -32, y: 0 },
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...offsets[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// ==========================================
// 1. ANIMATED TERMINAL / CODE ICON
// ==========================================
export const AnimatedTerminalIcon: React.FC<{ className?: string; size?: number }> = ({ 
  className = '', 
  size = 24 
}) => {
  return (
    <div className={`relative inline-flex items-center justify-center select-none ${className}`} style={{ width: size, height: size }}>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-full h-full text-current"
      >
        <rect x="2" y="3" width="20" height="18" rx="3" className="stroke-current opacity-85" />
        <line x1="2" y1="8" x2="22" y2="8" className="stroke-current opacity-40" />
        
        <circle cx="5" cy="5.5" r="0.75" className="fill-current text-red-500 opacity-90" />
        <circle cx="8" cy="5.5" r="0.75" className="fill-current text-amber-500 opacity-90" />
        <circle cx="11" cy="5.5" r="0.75" className="fill-current text-emerald-500 opacity-90" />
        
        <motion.polyline
          points="6 12 9 15 6 18"
          initial={{ x: 0 }}
          animate={{ x: [0, 1.5, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="stroke-[#1053D4]"
        />
        
        <motion.line
          x1="12"
          y1="17"
          x2="17"
          y2="17"
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 0.9, repeat: Infinity, ease: 'linear' }}
          className="stroke-[#E11D23] stroke-[2.5]"
        />
      </svg>
    </div>
  );
};

// ==========================================
// 2. ANIMATED GLOBE / WEB ICON
// ==========================================
export const AnimatedGlobeIcon: React.FC<{ className?: string; size?: number }> = ({ 
  className = '', 
  size = 24 
}) => {
  return (
    <div className={`relative inline-flex items-center justify-center select-none ${className}`} style={{ width: size, height: size }}>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-full h-full text-current"
      >
        <circle cx="12" cy="12" r="9" className="stroke-current opacity-85" />
        
        <motion.ellipse
          cx="12"
          cy="12"
          rx="5"
          ry="9"
          animate={{ rx: [5, 1.2, 5] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
          className="stroke-[#1053D4] opacity-80"
        />
        
        <line x1="3" y1="12" x2="21" y2="12" className="stroke-current opacity-50" />
        
        <motion.circle
          cx="12"
          cy="3"
          r="1.8"
          fill="#E11D23"
          animate={{
            cx: [12, 21, 12, 3, 12],
            cy: [3, 12, 21, 12, 3],
          }}
          transition={{ duration: 4.5, repeat: Infinity, ease: 'linear' }}
        />
      </svg>
    </div>
  );
};

// ==========================================
// 3. ANIMATED MOBILE ICON
// ==========================================
export const AnimatedMobileIcon: React.FC<{ className?: string; size?: number }> = ({ 
  className = '', 
  size = 24 
}) => {
  return (
    <div className={`relative inline-flex items-center justify-center select-none ${className}`} style={{ width: size, height: size }}>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-full h-full text-current"
      >
        <rect x="5" y="2" width="14" height="20" rx="3" className="stroke-current opacity-85" />
        <line x1="10" y1="5" x2="14" y2="5" className="stroke-current opacity-40" />
        
        <motion.rect
          x="8"
          y="8"
          width="8"
          height="7"
          rx="1"
          fill="#1053D4"
          fillOpacity="0.18"
          stroke="#1053D4"
          strokeWidth="1"
          animate={{ scale: [0.94, 1.06, 0.94] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
        />
        
        <motion.circle
          cx="12"
          cy="18.5"
          r="1.3"
          fill="#E11D23"
          animate={{ scale: [1, 1.6, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        />
      </svg>
    </div>
  );
};

// ==========================================
// 4. ANIMATED DATABASE ICON
// ==========================================
export const AnimatedDatabaseIcon: React.FC<{ className?: string; size?: number }> = ({ 
  className = '', 
  size = 24 
}) => {
  return (
    <div className={`relative inline-flex items-center justify-center select-none ${className}`} style={{ width: size, height: size }}>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-full h-full text-current"
      >
        <ellipse cx="12" cy="5" rx="9" ry="3" className="stroke-[#1053D4]" />
        
        <path d="M 3 5 V 12 C 3 13.66 7.03 15 12 15 C 16.97 15 21 13.66 21 12 V 5" className="stroke-current opacity-70" />
        
        <path d="M 3 12 V 19 C 3 20.66 7.03 22 12 22 C 16.97 22 21 20.66 21 19 V 12" className="stroke-current opacity-85" />
        
        <motion.circle
          cx="12"
          cy="5"
          r="1.6"
          fill="#E11D23"
          animate={{
            cy: [5, 12, 19, 12, 5],
            opacity: [0.3, 1, 0.3, 1, 0.3]
          }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
        />

        <motion.circle
          cx="17"
          cy="12"
          r="1.3"
          fill="#1053D4"
          animate={{
            cy: [12, 19, 12],
            opacity: [0.9, 0.2, 0.9]
          }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        />
      </svg>
    </div>
  );
};

// ==========================================
// 5. ANIMATED AUTOMATION / PIPELINE ICON
// ==========================================
export const AnimatedAutomationIcon: React.FC<{ className?: string; size?: number }> = ({ 
  className = '', 
  size = 24 
}) => {
  return (
    <div className={`relative inline-flex items-center justify-center select-none ${className}`} style={{ width: size, height: size }}>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-full h-full text-current"
      >
        <motion.g
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
          style={{ transformOrigin: '12px 12px' }}
        >
          <circle cx="12" cy="12" r="3" className="stroke-current opacity-80" />
          <path d="M 12 2 v 2 M 12 20 v 2 M 2 12 h 2 M 20 12 h 2 M 4.93 4.93 l 1.41 1.41 M 17.66 17.66 l 1.41 1.41 M 4.93 19.07 l 1.41 -1.41 M 17.66 6.34 l 1.41 -1.41" className="stroke-current opacity-60" />
        </motion.g>

        <motion.path
          d="M 13 3 L 7 13 L 12 13 L 11 21 L 17 11 L 12 11 Z"
          fill="#E11D23"
          stroke="#E11D23"
          strokeWidth="1"
          animate={{ scale: [0.85, 1.08, 0.85], opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: '12px 12px' }}
        />
      </svg>
    </div>
  );
};

// ==========================================
// 6. ANIMATED SHIELD & SECURITY ICON
// ==========================================
export const AnimatedShieldIcon: React.FC<{ className?: string; size?: number }> = ({ 
  className = '', 
  size = 24 
}) => {
  return (
    <div className={`relative inline-flex items-center justify-center select-none ${className}`} style={{ width: size, height: size }}>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-full h-full text-current"
      >
        <path
          d="M 12 22 S 4 18 4 12 V 5 L 12 2 L 20 5 V 12 C 20 18 12 22 12 22 Z"
          className="stroke-[#1053D4]"
        />

        <motion.line
          x1="6"
          y1="8"
          x2="18"
          y2="8"
          stroke="#E11D23"
          strokeWidth="1.5"
          animate={{
            y1: [6, 17, 6],
            y2: [6, 17, 6],
            opacity: [0.2, 0.95, 0.2]
          }}
          transition={{ duration: 2.1, repeat: Infinity, ease: 'easeInOut' }}
        />

        <motion.polyline
          points="9 12 11.5 14.5 15.5 10"
          stroke="#10B981"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
};

// ==========================================
// 7. ANIMATED RADAR SCANNER ICON
// ==========================================
export const AnimatedRadarIcon: React.FC<{ className?: string; size?: number }> = ({ 
  className = '', 
  size = 24 
}) => {
  return (
    <div className={`relative inline-flex items-center justify-center select-none ${className}`} style={{ width: size, height: size }}>
      <svg
        viewBox="0 0 32 32"
        fill="none"
        className="w-full h-full"
      >
        <circle cx="16" cy="16" r="14" stroke="#1053D4" strokeWidth="1" strokeOpacity="0.35" />
        <circle cx="16" cy="16" r="10" stroke="#1053D4" strokeWidth="1" strokeOpacity="0.45" />
        <circle cx="16" cy="16" r="6" stroke="#1053D4" strokeWidth="1" strokeOpacity="0.6" />
        
        <line x1="16" y1="2" x2="16" y2="30" stroke="#1053D4" strokeWidth="0.75" strokeOpacity="0.3" strokeDasharray="2 2" />
        <line x1="2" y1="16" x2="30" y2="16" stroke="#1053D4" strokeWidth="0.75" strokeOpacity="0.3" strokeDasharray="2 2" />
        
        <motion.g
          animate={{ rotate: 360 }}
          transition={{ duration: 2.8, repeat: Infinity, ease: 'linear' }}
          style={{ transformOrigin: '16px 16px' }}
        >
          <defs>
            <linearGradient id="radarSweepGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1053D4" stopOpacity="0.65" />
              <stop offset="100%" stopColor="#1053D4" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M 16 16 L 29.8 12 A 14 14 0 0 0 16 2 Z"
            fill="url(#radarSweepGrad)"
          />
          <line x1="16" y1="16" x2="29.8" y2="12" stroke="#60A5FA" strokeWidth="1.5" />
        </motion.g>

        <circle cx="16" cy="16" r="2.2" fill="#1053D4" />
        <circle cx="16" cy="16" r="1" fill="#FFFFFF" />

        <motion.circle
          cx="22"
          cy="9"
          r="1.8"
          fill="#E11D23"
          animate={{
            scale: [1, 1.8, 1],
            opacity: [1, 0.4, 1]
          }}
          transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
        />

        <motion.circle
          cx="10"
          cy="22"
          r="1.6"
          fill="#10B981"
          animate={{
            scale: [1, 1.6, 1],
            opacity: [0.9, 0.3, 0.9]
          }}
          transition={{ duration: 1.9, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
        />
      </svg>
    </div>
  );
};

// ==========================================
// 8. ANIMATED RADIO TRANSMISSION ICON
// ==========================================
export const AnimatedRadioIcon: React.FC<{ className?: string; size?: number }> = ({ 
  className = '', 
  size = 24 
}) => {
  return (
    <div className={`relative inline-flex items-center justify-center select-none ${className}`} style={{ width: size, height: size }}>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-full h-full text-current"
      >
        <line x1="8" y1="7" x2="8" y2="2" className="stroke-current opacity-80" />
        <rect x="5" y="7" width="14" height="15" rx="2" className="stroke-[#1053D4]" />
        
        <circle cx="12" cy="15" r="3.5" className="stroke-current opacity-50" />
        <circle cx="12" cy="15" r="1" className="fill-current opacity-70" />
        
        <motion.path
          d="M 12 2 A 4 4 0 0 1 12 6"
          stroke="#E11D23"
          strokeWidth="1.8"
          animate={{ opacity: [0.2, 1, 0.2], scale: [0.9, 1.1, 0.9] }}
          transition={{ duration: 1.1, repeat: Infinity, ease: 'easeInOut' }}
        />
        
        <motion.path
          d="M 15 1 A 7 7 0 0 1 15 7"
          stroke="#E11D23"
          strokeWidth="1.8"
          animate={{ opacity: [0.1, 0.85, 0.1], scale: [0.9, 1.15, 0.9] }}
          transition={{ duration: 1.1, repeat: Infinity, ease: 'easeInOut', delay: 0.25 }}
        />
      </svg>
    </div>
  );
};

// ==========================================
// 9. ANIMATED CPU / CHIP ICON
// ==========================================
export const AnimatedCpuIcon: React.FC<{ className?: string; size?: number }> = ({ 
  className = '', 
  size = 24 
}) => {
  return (
    <div className={`relative inline-flex items-center justify-center select-none ${className}`} style={{ width: size, height: size }}>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-full h-full text-current"
      >
        <rect x="5" y="5" width="14" height="14" rx="2" className="stroke-[#1053D4]" />
        
        <motion.rect
          x="9"
          y="9"
          width="6"
          height="6"
          rx="1"
          fill="#1053D4"
          fillOpacity="0.22"
          stroke="#E11D23"
          strokeWidth="1.2"
          animate={{ scale: [0.9, 1.12, 0.9], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 1.9, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: '12px 12px' }}
        />
        
        <line x1="9" y1="1" x2="9" y2="5" className="stroke-current opacity-70" />
        <line x1="15" y1="1" x2="15" y2="5" className="stroke-current opacity-70" />
        <line x1="9" y1="19" x2="9" y2="23" className="stroke-current opacity-70" />
        <line x1="15" y1="19" x2="15" y2="23" className="stroke-current opacity-70" />
        <line x1="1" y1="9" x2="5" y2="9" className="stroke-current opacity-70" />
        <line x1="1" y1="15" x2="5" y2="15" className="stroke-current opacity-70" />
        <line x1="19" y1="9" x2="23" y2="9" className="stroke-current opacity-70" />
        <line x1="19" y1="15" x2="23" y2="15" className="stroke-current opacity-70" />
      </svg>
    </div>
  );
};

// ==========================================
// 10. ANIMATED ROCKET / LAUNCH ICON
// ==========================================
export const AnimatedRocketIcon: React.FC<{ className?: string; size?: number }> = ({ 
  className = '', 
  size = 24 
}) => {
  return (
    <div className={`relative inline-flex items-center justify-center select-none ${className}`} style={{ width: size, height: size }}>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-full h-full text-current"
      >
        <motion.g
          animate={{ y: [0, -2, 0], x: [0, 1, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <path d="M 4.5 16.5 C 4.5 16.5 6 15 8 15 C 8 13 9 10 11.5 7.5 C 14 5 17 4 19 4 C 19 6 18 9 15.5 11.5 C 13 14 10 15 10 15 C 10 17 8.5 18.5 8.5 18.5" className="stroke-[#1053D4]" />
          <circle cx="14" cy="9" r="1.5" className="fill-[#1053D4]" />
          <path d="M 8.5 18.5 L 4.5 22.5 L 5.5 18.5 L 2 15 L 6 14" className="stroke-current opacity-70" />
        </motion.g>

        {/* Exhaust flame pulse */}
        <motion.path
          d="M 5 19 L 2 22 L 5 21 Z"
          fill="#E11D23"
          stroke="#E11D23"
          animate={{ scale: [0.8, 1.3, 0.8], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 0.6, repeat: Infinity, ease: 'easeInOut' }}
        />
      </svg>
    </div>
  );
};

// ==========================================
// 11. ANIMATED EYE / VISION ICON
// ==========================================
export const AnimatedEyeVisionIcon: React.FC<{ className?: string; size?: number }> = ({ 
  className = '', 
  size = 24 
}) => {
  return (
    <div className={`relative inline-flex items-center justify-center select-none ${className}`} style={{ width: size, height: size }}>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-full h-full text-current"
      >
        <path d="M 2 12 C 5 6 19 6 22 12 C 19 18 5 18 2 12 Z" className="stroke-[#E11D23]" />
        <motion.circle
          cx="12"
          cy="12"
          r="3.5"
          className="stroke-[#1053D4]"
          animate={{ r: [3, 4, 3] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.circle
          cx="12"
          cy="12"
          r="1.5"
          fill="#1053D4"
          animate={{ scale: [0.85, 1.25, 0.85] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        />
      </svg>
    </div>
  );
};

// ==========================================
// 12. ANIMATED CLOCK / SLA ICON
// ==========================================
export const AnimatedClockSlaIcon: React.FC<{ className?: string; size?: number }> = ({ 
  className = '', 
  size = 24 
}) => {
  return (
    <div className={`relative inline-flex items-center justify-center select-none ${className}`} style={{ width: size, height: size }}>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-full h-full text-current"
      >
        <circle cx="12" cy="12" r="9" className="stroke-[#E11D23]" />
        
        {/* Hour Hand */}
        <line x1="12" y1="12" x2="12" y2="8" className="stroke-current stroke-2" />
        
        {/* Animated Minute Hand */}
        <motion.line
          x1="12"
          y1="12"
          x2="16"
          y2="12"
          stroke="#1053D4"
          strokeWidth="2"
          animate={{ rotate: 360 }}
          transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
          style={{ transformOrigin: '12px 12px' }}
        />
      </svg>
    </div>
  );
};

// ==========================================
// 13. ANIMATED MAIL / SEND ICON
// ==========================================
export const AnimatedMailSendIcon: React.FC<{ className?: string; size?: number }> = ({ 
  className = '', 
  size = 24 
}) => {
  return (
    <div className={`relative inline-flex items-center justify-center select-none ${className}`} style={{ width: size, height: size }}>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-full h-full text-current"
      >
        <rect x="3" y="5" width="18" height="14" rx="2" className="stroke-[#1053D4]" />
        <motion.polyline
          points="3 7 12 13 21 7"
          className="stroke-[#E11D23]"
          strokeWidth="1.8"
          animate={{ y: [0, -1, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
      </svg>
    </div>
  );
};

// ==========================================
// 14. ANIMATED COMPASS / DISCOVERY ICON
// ==========================================
export const AnimatedCompassIcon: React.FC<{ className?: string; size?: number }> = ({ 
  className = '', 
  size = 24 
}) => {
  return (
    <div className={`relative inline-flex items-center justify-center select-none ${className}`} style={{ width: size, height: size }}>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-full h-full text-current"
      >
        <circle cx="12" cy="12" r="9" className="stroke-current opacity-85" />
        
        {/* Oscillating needle */}
        <motion.g
          animate={{ rotate: [-20, 25, -20] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: '12px 12px' }}
        >
          <polygon points="12 4 14.5 12 12 10 9.5 12" fill="#E11D23" stroke="#E11D23" />
          <polygon points="12 20 14.5 12 12 14 9.5 12" fill="#1053D4" stroke="#1053D4" />
        </motion.g>
      </svg>
    </div>
  );
};

// ==========================================
// 15. ANIMATED LOCK / NDA ICON
// ==========================================
export const AnimatedLockNdaIcon: React.FC<{ className?: string; size?: number }> = ({ 
  className = '', 
  size = 24 
}) => {
  return (
    <div className={`relative inline-flex items-center justify-center select-none ${className}`} style={{ width: size, height: size }}>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-full h-full text-current"
      >
        <rect x="5" y="11" width="14" height="10" rx="2" className="stroke-[#1053D4]" />
        
        <motion.path
          d="M 8 11 V 7 A 4 4 0 0 1 16 7 V 11"
          stroke="#E11D23"
          strokeWidth="2"
          animate={{ y: [0, -1.5, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
        />
        
        <circle cx="12" cy="16" r="1.5" fill="#1053D4" />
      </svg>
    </div>
  );
};

// ==========================================
// 16. ANIMATED USER POD ICON
// ==========================================
export const AnimatedUserPodIcon: React.FC<{ className?: string; size?: number }> = ({ 
  className = '', 
  size = 24 
}) => {
  return (
    <div className={`relative inline-flex items-center justify-center select-none ${className}`} style={{ width: size, height: size }}>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-full h-full text-current"
      >
        {/* Center leader */}
        <circle cx="12" cy="7" r="3" className="stroke-[#1053D4]" />
        <path d="M 6 19 C 6 15.5 8.7 13.5 12 13.5 C 15.3 13.5 18 15.5 18 19" className="stroke-[#1053D4]" />
        
        {/* Pulsing collaboration node */}
        <motion.circle
          cx="19"
          cy="9"
          r="2"
          fill="#E11D23"
          animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.circle
          cx="5"
          cy="9"
          r="2"
          fill="#1053D4"
          animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        />
      </svg>
    </div>
  );
};

// ==========================================
// 17. ANIMATED STEP / WORKFLOW ICON
// ==========================================
export const AnimatedStepIcon: React.FC<{ stepNum: string; className?: string }> = ({ 
  stepNum, 
  className = '' 
}) => {
  return (
    <div className={`relative inline-flex items-center justify-center select-none ${className}`}>
      <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-[#e8eeff] border border-[#d0daf2] font-mono text-xs font-bold text-[#1053D4] overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-blue-400/15"
          animate={{ y: ['-100%', '100%'] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'linear' }}
        />
        <span className="relative z-10">{stepNum}</span>
      </div>
    </div>
  );
};

// ==========================================
// 18. ANIMATED LIVE STATUS PILL
// ==========================================
export const AnimatedLiveHeartbeat: React.FC<{ label?: string }> = ({ 
  label = "SYSTEMS LIVE & OPERATIONAL" 
}) => {
  return (
    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11px] font-semibold tracking-wide shadow-xs">
      <span className="relative flex h-2.5 w-2.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
      </span>
      <span className="uppercase tracking-wider font-mono text-[10px]">{label}</span>
    </div>
  );
};
