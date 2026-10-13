import React, { useState, useRef, useMemo } from 'react';
import { PageRoute } from '../types.ts';
import { 
  AnimatedLiveHeartbeat, 
  AnimatedShieldIcon,
  AnimatedMailSendIcon,
  AnimatedClockSlaIcon,
  AnimatedUserPodIcon,
  AnimatedLockNdaIcon,
  AnimatedTerminalIcon,
  AnimatedGlobeIcon,
  AnimatedRadioIcon,
  ScrollReveal
} from '../components/AnimatedIcons.tsx';
import { 
  Copy, Check, Send, CheckCircle2, AlertCircle,
  Calendar, Loader2, Sparkles, Building, Mail, User, FileText
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ContactPageProps {
  onNavigate: (page: PageRoute) => void;
}

interface FormState {
  fullName: string;
  businessEmail: string;
  company: string;
  serviceRequired: string;
  budgetRange: string;
  description: string;
  contactMethod: 'email' | 'meet' | 'phone';
  requireNda: boolean;
}

interface FormErrors {
  fullName?: string;
  businessEmail?: string;
  company?: string;
  description?: string;
}

type TouchedState = {
  [K in keyof FormErrors]?: boolean;
};

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState<FormState>({
    fullName: '',
    businessEmail: '',
    company: '',
    serviceRequired: 'Custom Software',
    budgetRange: '$10k – $25k',
    description: '',
    contactMethod: 'email',
    requireNda: false,
  });

  const [touched, setTouched] = useState<TouchedState>({});
  const [submitAttempted, setSubmitAttempted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Field input refs to auto-focus first invalid input on submit
  const fullNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const companyRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);

  const servicesList = [
    'Custom Software',
    'Web Applications',
    'Mobile Apps',
    'Backend & APIs',
    'Automation',
    'IT Consulting',
  ];

  const budgetOptions = ['< $10k', '$10k – $25k', '$25k – $50k', '$50k+'];

  // Email format validation regular expression
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // Real-time error evaluation
  const errors: FormErrors = useMemo(() => {
    const errs: FormErrors = {};

    // 1. Full Name validation
    const trimmedName = formData.fullName.trim();
    if (!trimmedName) {
      errs.fullName = 'Full name is required.';
    } else if (trimmedName.length < 2) {
      errs.fullName = 'Full name must be at least 2 characters.';
    } else if (/^[\d\W]+$/.test(trimmedName)) {
      errs.fullName = 'Please enter a valid personal or contact name.';
    }

    // 2. Business Email validation
    const trimmedEmail = formData.businessEmail.trim();
    if (!trimmedEmail) {
      errs.businessEmail = 'Business email is required.';
    } else if (!trimmedEmail.includes('@')) {
      errs.businessEmail = "Email must include an '@' symbol.";
    } else if (!emailRegex.test(trimmedEmail)) {
      errs.businessEmail = 'Please enter a valid email address (e.g. name@company.com).';
    }

    // 3. Company validation (optional, but validate maximum length)
    if (formData.company.trim().length > 100) {
      errs.company = 'Company name cannot exceed 100 characters.';
    }

    // 4. Description validation
    const trimmedDesc = formData.description.trim();
    if (!trimmedDesc) {
      errs.description = 'Project description is required.';
    } else if (trimmedDesc.length < 15) {
      errs.description = `Please provide at least 15 characters describing your project (${trimmedDesc.length}/15 chars).`;
    } else if (trimmedDesc.length > 2500) {
      errs.description = 'Description cannot exceed 2,500 characters.';
    }

    return errs;
  }, [formData]);

  // Check if a specific field has an active visible error
  const shouldShowError = (fieldName: keyof FormErrors) => {
    return Boolean((touched[fieldName] || submitAttempted) && errors[fieldName]);
  };

  // Check if a specific field is valid and has been interacted with
  const isFieldValid = (fieldName: keyof FormErrors) => {
    const hasValue = Boolean(formData[fieldName]?.trim());
    return Boolean(touched[fieldName] && hasValue && !errors[fieldName]);
  };

  const handleBlur = (fieldName: keyof FormErrors) => {
    setTouched((prev) => ({ ...prev, [fieldName]: true }));
  };

  const handleChange = (fieldName: keyof FormState, value: any) => {
    setFormData((prev) => ({ ...prev, [fieldName]: value }));
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('info@vaptechsol.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitAttempted(true);
    setTouched({
      fullName: true,
      businessEmail: true,
      company: true,
      description: true,
    });

    const errorKeys = Object.keys(errors) as (keyof FormErrors)[];
    if (errorKeys.length > 0) {
      // Auto-focus the first invalid input
      if (errors.fullName && fullNameRef.current) {
        fullNameRef.current.focus();
      } else if (errors.businessEmail && emailRef.current) {
        emailRef.current.focus();
      } else if (errors.description && descriptionRef.current) {
        descriptionRef.current.focus();
      }
      return;
    }

    // Trigger simulated submission transition with a realistic async processing duration
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      window.scrollTo({ top: 320, behavior: 'smooth' });
    }, 1100);
  };

  const activeErrorCount = Object.keys(errors).length;

  return (
    <div className="space-y-24 md:space-y-32">
      {/* 1. HERO HEADER */}
      <section className="pt-6 md:pt-12 pb-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-5"
        >
          <div className="inline-flex items-center gap-2">
            <AnimatedLiveHeartbeat label="LET'S COLLABORATE • PROJECT INQUIRY" />
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-[#111c2d] tracking-tight leading-tight max-w-4xl">
            Let's Discuss Your Next <br />
            <span className="text-[#1053D4]">Software Project.</span>
          </h1>

          <p className="text-base sm:text-lg text-[#424653] max-w-3xl leading-relaxed">
            Whether you have a fully scoped PRD, an initial product concept, or need technical consulting, our engineering team is ready to help you evaluate feasibility and build a clear roadmap.
          </p>
        </motion.div>
      </section>

      {/* 2. TWO-COLUMN INQUIRY & CHANNELS GRID */}
      <section className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Channels, Next Steps, NDA & SLA */}
          <ScrollReveal direction="left" className="lg:col-span-5 space-y-6">
            {/* Communication Channels Card */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#e5eaf2] shadow-sm space-y-5">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1053D4] block">
                Communication Channels
              </span>

              {/* Email Inquiries */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#e8eeff] flex items-center justify-center shrink-0 mt-0.5">
                  <AnimatedMailSendIcon size={20} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#737785]">Email Inquiries</span>
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className="cursor-pointer inline-flex items-center gap-1 text-[11px] font-semibold text-[#1053D4] hover:text-[#0c44b0]"
                    >
                      {copiedEmail ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                          <span className="text-emerald-600">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                  <a
                    href="mailto:info@vaptechsol.com"
                    className="text-sm font-bold text-[#1053D4] hover:underline block mt-0.5"
                  >
                    info@vaptechsol.com
                  </a>
                  <p className="text-xs text-[#737785] mt-0.5">
                    Direct routing to our solutions engineering team.
                  </p>
                </div>
              </div>

              {/* Project Consultations */}
              <div className="flex items-start gap-4 pt-3.5 border-t border-[#f0f3ff]">
                <div className="w-10 h-10 rounded-xl bg-[#e8eeff] flex items-center justify-center shrink-0 mt-0.5">
                  <AnimatedUserPodIcon size={20} />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#737785] block">Project Consultations</span>
                  <p className="text-xs text-[#111c2d] font-medium mt-0.5">
                    Direct technical discovery with an Engineering Lead, not an account executive.
                  </p>
                </div>
              </div>

              {/* Guaranteed SLA Turnaround */}
              <div className="flex items-start gap-4 pt-3.5 border-t border-[#f0f3ff]">
                <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center shrink-0 mt-0.5">
                  <AnimatedClockSlaIcon size={20} />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#737785] block">Guaranteed SLA Turnaround</span>
                  <p className="text-xs text-[#111c2d] font-medium mt-0.5">
                    Response within 24 business hours with initial technical feasibility feedback.
                  </p>
                </div>
              </div>
            </div>

            {/* What Happens Next Card */}
            <div className="bg-[#f0f3ff] p-6 sm:p-8 rounded-3xl border border-[#d0daf2] space-y-4">
              <h3 className="text-sm font-bold text-[#111c2d] flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#1053D4]" />
                <span>What Happens Next</span>
              </h3>

              <div className="space-y-3.5">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#1053D4] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    1
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#111c2d]">Discovery Session (30 Min)</h4>
                    <p className="text-xs text-[#424653] mt-0.5 leading-relaxed">
                      A concise introductory talk to unpack technical constraints, project scale, and user journeys.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#1053D4] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    2
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#111c2d]">Architecture & Scope Outline</h4>
                    <p className="text-xs text-[#424653] mt-0.5 leading-relaxed">
                      A written technical breakdown detailing target architecture, recommended stack, and milestones.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#1053D4] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    3
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#111c2d]">Clear Execution Proposal</h4>
                    <p className="text-xs text-[#424653] mt-0.5 leading-relaxed">
                      Structured fixed-milestone quotes or a dedicated agile engineering pod with absolute clarity.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Confidentiality Assured */}
            <div className="bg-white p-5 rounded-2xl border border-[#e5eaf2] flex items-start gap-3.5 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                <AnimatedLockNdaIcon size={22} />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold text-[#111c2d]">Confidentiality Assured</span>
                  <span className="text-[10px] font-semibold bg-[#e8eeff] text-[#1053D4] px-2 py-0.5 rounded">
                    Mutual NDA
                  </span>
                </div>
                <p className="text-xs text-[#424653] leading-relaxed">
                  We sign standard mutual Non-Disclosure Agreements prior to sharing any proprietary IP, wireframes, or data.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column: Inquiry Form Card with Real-Time Validation */}
          <ScrollReveal direction="right" className="lg:col-span-7">
            <div
              id="inquiry-form-card"
              className="bg-white p-7 sm:p-10 rounded-3xl border border-[#d0daf2] shadow-md space-y-6 relative transition-all"
            >
              <div>
                <div className="flex items-center justify-between gap-4">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111c2d] tracking-tight">
                    Project Inquiry Form
                  </h2>
                </div>
                <p className="text-xs sm:text-sm text-[#424653] mt-1">
                  Fill in your project requirements below. Our Lead Architect will review and reply within 24 hours.
                </p>
              </div>

              {submitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="bg-[#e8eeff] p-8 sm:p-10 rounded-2xl border border-[#d0daf2] text-center space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-[#1053D4] text-white flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-[#111c2d]">
                    Inquiry Received Successfully!
                  </h3>
                  <p className="text-sm text-[#424653] max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-[#111c2d]">{formData.fullName}</strong>. Our Solutions Architecture lead will review your submission and reach out via <span className="font-semibold text-[#1053D4]">{formData.businessEmail}</span> within 24 hours.
                  </p>

                  <div className="p-4 bg-white/80 rounded-xl border border-[#d0daf2] text-left text-xs text-[#424653] max-w-md mx-auto space-y-1">
                    <div className="flex justify-between">
                      <span className="text-[#737785]">Selected Service:</span>
                      <span className="font-semibold text-[#111c2d]">{formData.serviceRequired}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#737785]">Estimated Budget:</span>
                      <span className="font-semibold text-[#111c2d]">{formData.budgetRange}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#737785]">Follow-up Method:</span>
                      <span className="font-semibold text-[#111c2d] capitalize">{formData.contactMethod}</span>
                    </div>
                    {formData.requireNda && (
                      <div className="flex justify-between text-emerald-700 font-semibold pt-1 border-t border-[#e5eaf2]">
                        <span>NDA Requested:</span>
                        <span>Pre-call draft will be attached</span>
                      </div>
                    )}
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setSubmitAttempted(false);
                        setTouched({});
                        setFormData({
                          fullName: '',
                          businessEmail: '',
                          company: '',
                          serviceRequired: 'Custom Software',
                          budgetRange: '$10k – $25k',
                          description: '',
                          contactMethod: 'email',
                          requireNda: false,
                        });
                      }}
                      className="cursor-pointer px-5 py-2.5 rounded-xl bg-[#1053D4] hover:bg-[#0c44b0] text-white text-xs font-semibold shadow-sm transition-all"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  {/* Real-time Summary Error Banner if submit attempted with errors */}
                  <AnimatePresence>
                    {submitAttempted && activeErrorCount > 0 && (
                      <motion.div
                        initial={{ opacity: 0, y: -10, height: 0 }}
                        animate={{ opacity: 1, y: 0, height: 'auto' }}
                        exit={{ opacity: 0, y: -10, height: 0 }}
                        className="p-3.5 bg-red-50 text-red-700 text-xs rounded-xl border border-red-200 font-medium flex items-start gap-2.5 shadow-xs"
                      >
                        <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                        <div>
                          <p className="font-bold">
                            Please resolve the {activeErrorCount} highlighted field{activeErrorCount > 1 ? 's' : ''} below:
                          </p>
                          <ul className="list-disc list-inside mt-1 space-y-0.5 text-red-600">
                            {errors.fullName && <li>{errors.fullName}</li>}
                            {errors.businessEmail && <li>{errors.businessEmail}</li>}
                            {errors.description && <li>{errors.description}</li>}
                            {errors.company && <li>{errors.company}</li>}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Name and Email with Real-Time Validation */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name Field */}
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between">
                        <label 
                          htmlFor="fullName"
                          className="text-xs font-bold text-[#111c2d] flex items-center gap-1.5"
                        >
                          <User className="w-3.5 h-3.5 text-[#1053D4]" />
                          <span>Full Name</span>
                          <span className="text-red-500">*</span>
                        </label>
                        {isFieldValid('fullName') && (
                          <span className="text-[11px] font-semibold text-emerald-600 flex items-center gap-1 animate-in fade-in">
                            <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                            <span>Valid</span>
                          </span>
                        )}
                      </div>

                      <div className="relative">
                        <input
                          id="fullName"
                          ref={fullNameRef}
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={(e) => handleChange('fullName', e.target.value)}
                          onBlur={() => handleBlur('fullName')}
                          placeholder="e.g. Alex Mercer"
                          aria-invalid={shouldShowError('fullName')}
                          aria-describedby={shouldShowError('fullName') ? 'fullName-error' : undefined}
                          className={`w-full px-3.5 py-2.5 rounded-xl text-sm transition-all focus:outline-none ${
                            shouldShowError('fullName')
                              ? 'bg-red-50/40 border border-red-500 text-[#111c2d] focus:ring-2 focus:ring-red-500/20 focus:border-red-600'
                              : isFieldValid('fullName')
                              ? 'bg-emerald-50/20 border border-emerald-500/70 text-[#111c2d] focus:bg-white focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600'
                              : 'bg-[#f0f3ff] border border-[#d0daf2] text-[#111c2d] focus:bg-white focus:ring-2 focus:ring-[#1053D4]/30 focus:border-[#1053D4]'
                          }`}
                        />
                        {shouldShowError('fullName') && (
                          <div className="absolute right-3 top-3 text-red-500 pointer-events-none">
                            <AlertCircle className="w-4 h-4" />
                          </div>
                        )}
                      </div>

                      {/* Real-time Inline Error Feedback */}
                      <AnimatePresence>
                        {shouldShowError('fullName') && (
                          <motion.p
                            id="fullName-error"
                            initial={{ opacity: 0, y: -4 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -4 }}
                            className="text-xs text-red-600 flex items-center gap-1 font-medium mt-1"
                          >
                            <AlertCircle className="w-3 h-3 shrink-0" />
                            <span>{errors.fullName}</span>
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Business Email Field */}
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between">
                        <label 
                          htmlFor="businessEmail"
                          className="text-xs font-bold text-[#111c2d] flex items-center gap-1.5"
                        >
                          <Mail className="w-3.5 h-3.5 text-[#1053D4]" />
                          <span>Business Email</span>
                          <span className="text-red-500">*</span>
                        </label>
                        {isFieldValid('businessEmail') && (
                          <span className="text-[11px] font-semibold text-emerald-600 flex items-center gap-1 animate-in fade-in">
                            <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                            <span>Valid</span>
                          </span>
                        )}
                      </div>

                      <div className="relative">
                        <input
                          id="businessEmail"
                          ref={emailRef}
                          type="email"
                          required
                          value={formData.businessEmail}
                          onChange={(e) => handleChange('businessEmail', e.target.value)}
                          onBlur={() => handleBlur('businessEmail')}
                          placeholder="alex@company.com"
                          aria-invalid={shouldShowError('businessEmail')}
                          aria-describedby={shouldShowError('businessEmail') ? 'businessEmail-error' : undefined}
                          className={`w-full px-3.5 py-2.5 rounded-xl text-sm transition-all focus:outline-none ${
                            shouldShowError('businessEmail')
                              ? 'bg-red-50/40 border border-red-500 text-[#111c2d] focus:ring-2 focus:ring-red-500/20 focus:border-red-600'
                              : isFieldValid('businessEmail')
                              ? 'bg-emerald-50/20 border border-emerald-500/70 text-[#111c2d] focus:bg-white focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600'
                              : 'bg-[#f0f3ff] border border-[#d0daf2] text-[#111c2d] focus:bg-white focus:ring-2 focus:ring-[#1053D4]/30 focus:border-[#1053D4]'
                          }`}
                        />
                        {shouldShowError('businessEmail') && (
                          <div className="absolute right-3 top-3 text-red-500 pointer-events-none">
                            <AlertCircle className="w-4 h-4" />
                          </div>
                        )}
                      </div>

                      {/* Real-time Inline Error Feedback */}
                      <AnimatePresence>
                        {shouldShowError('businessEmail') && (
                          <motion.p
                            id="businessEmail-error"
                            initial={{ opacity: 0, y: -4 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -4 }}
                            className="text-xs text-red-600 flex items-center gap-1 font-medium mt-1"
                          >
                            <AlertCircle className="w-3 h-3 shrink-0" />
                            <span>{errors.businessEmail}</span>
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>

                  {/* Company Field (Optional with length validation) */}
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <label 
                        htmlFor="company"
                        className="text-xs font-bold text-[#111c2d] flex items-center gap-1.5"
                      >
                        <Building className="w-3.5 h-3.5 text-[#1053D4]" />
                        <span>Company / Organization Name</span>
                        <span className="text-[11px] text-[#737785] font-normal">(Optional)</span>
                      </label>
                      {formData.company.trim() && !errors.company && (
                        <span className="text-[11px] font-semibold text-emerald-600 flex items-center gap-1 animate-in fade-in">
                          <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                        </span>
                      )}
                    </div>
                    <input
                      id="company"
                      ref={companyRef}
                      type="text"
                      value={formData.company}
                      onChange={(e) => handleChange('company', e.target.value)}
                      onBlur={() => handleBlur('company')}
                      placeholder="e.g. Acme Health Technologies"
                      className={`w-full px-3.5 py-2.5 rounded-xl text-sm transition-all focus:outline-none ${
                        shouldShowError('company')
                          ? 'bg-red-50/40 border border-red-500 text-[#111c2d] focus:ring-2 focus:ring-red-500/20 focus:border-red-600'
                          : 'bg-[#f0f3ff] border border-[#d0daf2] text-[#111c2d] focus:bg-white focus:ring-2 focus:ring-[#1053D4]/30 focus:border-[#1053D4]'
                      }`}
                    />
                    <AnimatePresence>
                      {shouldShowError('company') && (
                        <motion.p
                          initial={{ opacity: 0, y: -4 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -4 }}
                          className="text-xs text-red-600 flex items-center gap-1 font-medium mt-1"
                        >
                          <AlertCircle className="w-3 h-3 shrink-0" />
                          <span>{errors.company}</span>
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Primary Service Selection */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-[#111c2d] block">
                      Primary Engineering Service Required
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {servicesList.map((service) => (
                        <button
                          key={service}
                          type="button"
                          onClick={() => handleChange('serviceRequired', service)}
                          className={`cursor-pointer px-3 py-2 rounded-xl text-xs font-semibold text-center border transition-all ${
                            formData.serviceRequired === service
                              ? 'bg-[#1053D4] text-white border-[#1053D4] shadow-xs'
                              : 'bg-[#f0f3ff] text-[#424653] border-[#d0daf2] hover:bg-white'
                          }`}
                        >
                          {service}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Budget Selector */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-[#111c2d] block">
                      Estimated Project Budget
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {budgetOptions.map((budget) => (
                        <button
                          key={budget}
                          type="button"
                          onClick={() => handleChange('budgetRange', budget)}
                          className={`cursor-pointer px-3 py-2 rounded-xl text-xs font-semibold text-center border transition-all ${
                            formData.budgetRange === budget
                              ? 'bg-[#1053D4] text-white border-[#1053D4] shadow-xs'
                              : 'bg-[#f0f3ff] text-[#424653] border-[#d0daf2] hover:bg-white'
                          }`}
                        >
                          {budget}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Description with Real-Time Validation & Live Character Counter */}
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <label 
                        htmlFor="description"
                        className="text-xs font-bold text-[#111c2d] flex items-center gap-1.5"
                      >
                        <FileText className="w-3.5 h-3.5 text-[#1053D4]" />
                        <span>Project Description & Requirements</span>
                        <span className="text-red-500">*</span>
                      </label>
                      
                      {/* Live Character Counter */}
                      <span className={`text-[11px] font-medium transition-colors ${
                        formData.description.trim().length >= 15
                          ? 'text-emerald-600 font-semibold'
                          : shouldShowError('description')
                          ? 'text-red-500 font-semibold'
                          : 'text-[#737785]'
                      }`}>
                        {formData.description.trim().length} / 15 min chars
                      </span>
                    </div>

                    <div className="relative">
                      <textarea
                        id="description"
                        ref={descriptionRef}
                        rows={4}
                        required
                        value={formData.description}
                        onChange={(e) => handleChange('description', e.target.value)}
                        onBlur={() => handleBlur('description')}
                        placeholder="Tell us about your project scope, core functionalities, current tech stack, or targeted launch timeline (min. 15 characters)..."
                        aria-invalid={shouldShowError('description')}
                        aria-describedby={shouldShowError('description') ? 'description-error' : undefined}
                        className={`w-full px-3.5 py-2.5 rounded-xl text-sm transition-all focus:outline-none resize-none ${
                          shouldShowError('description')
                            ? 'bg-red-50/40 border border-red-500 text-[#111c2d] focus:ring-2 focus:ring-red-500/20 focus:border-red-600'
                            : isFieldValid('description')
                            ? 'bg-emerald-50/20 border border-emerald-500/70 text-[#111c2d] focus:bg-white focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600'
                            : 'bg-[#f0f3ff] border border-[#d0daf2] text-[#111c2d] focus:bg-white focus:ring-2 focus:ring-[#1053D4]/30 focus:border-[#1053D4]'
                        }`}
                      />
                    </div>

                    {/* Real-time Inline Error Feedback */}
                    <AnimatePresence>
                      {shouldShowError('description') && (
                        <motion.p
                          id="description-error"
                          initial={{ opacity: 0, y: -4 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -4 }}
                          className="text-xs text-red-600 flex items-center gap-1 font-medium mt-1"
                        >
                          <AlertCircle className="w-3 h-3 shrink-0" />
                          <span>{errors.description}</span>
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Preferred Contact Method */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-[#111c2d] block">
                      Preferred Contact Method
                    </label>
                    <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-[#424653]">
                      {[
                        { id: 'email', label: 'Email follow-up' },
                        { id: 'meet', label: 'Google Meet / Zoom' },
                        { id: 'phone', label: 'Direct Phone Call' },
                      ].map((method) => (
                        <label key={method.id} className="inline-flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="contactMethod"
                            checked={formData.contactMethod === method.id}
                            onChange={() => handleChange('contactMethod', method.id)}
                            className="w-4 h-4 text-[#1053D4] focus:ring-[#1053D4]"
                          />
                          <span>{method.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Mutual NDA Checkbox */}
                  <div className="pt-2">
                    <label className="inline-flex items-start gap-2.5 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.requireNda}
                        onChange={(e) => handleChange('requireNda', e.target.checked)}
                        className="w-4 h-4 text-[#1053D4] rounded focus:ring-[#1053D4] mt-0.5"
                      />
                      <span className="text-xs text-[#424653] leading-relaxed">
                        Please execute a mutual Non-Disclosure Agreement (NDA) before our technical call.
                      </span>
                    </label>
                  </div>

                  {/* Submit Row with Live Feedback */}
                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#f0f3ff]">
                    <div className="flex items-center gap-2 text-xs text-[#737785]">
                      <AnimatedLockNdaIcon size={16} />
                      <span>We respect your privacy. No marketing spam.</span>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      aria-busy={isSubmitting}
                      className={`w-full sm:w-auto px-7 py-3 rounded-xl text-white text-sm font-semibold flex items-center justify-center gap-2.5 shadow-md transition-all ${
                        isSubmitting 
                          ? 'bg-[#1053D4]/75 cursor-not-allowed opacity-90 pointer-events-none' 
                          : 'cursor-pointer bg-[#1053D4] hover:bg-[#0c44b0] active:scale-[0.99] shadow-blue-500/20'
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin text-white/90" />
                          <span>Processing Inquiry...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Project Inquiry</span>
                          <Send className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 3. CLIENT REASSURANCE & STANDARD OPERATING PRINCIPLES */}
      <section className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1053D4]">
              Engagement Integrity
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#111c2d] tracking-tight">
              Client Reassurance & Standard Operating Principles
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ScrollReveal delay={0.1}>
            <div className="bg-white p-8 rounded-3xl border border-[#e5eaf2] shadow-sm hover:border-[#1053D4] transition-colors space-y-3 h-full group">
              <div className="w-12 h-12 rounded-2xl bg-[#e8eeff] flex items-center justify-center text-[#1053D4] transition-transform group-hover:scale-110">
                <AnimatedShieldIcon size={24} />
              </div>
              <h3 className="text-lg font-bold text-[#111c2d] group-hover:text-[#1053D4] transition-colors">100% IP Ownership</h3>
              <p className="text-sm text-[#424653] leading-relaxed">
                Upon final milestone signoff and payment, all custom code, architectural documentation, CI/CD scripts, and design tokens belong solely to your organization.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="bg-white p-8 rounded-3xl border border-[#e5eaf2] shadow-sm hover:border-[#1053D4] transition-colors space-y-3 h-full group">
              <div className="w-12 h-12 rounded-2xl bg-[#e8eeff] flex items-center justify-center text-[#1053D4] transition-transform group-hover:scale-110">
                <AnimatedTerminalIcon size={24} />
              </div>
              <h3 className="text-lg font-bold text-[#111c2d] group-hover:text-[#1053D4] transition-colors">Structured Milestones</h3>
              <p className="text-sm text-[#424653] leading-relaxed">
                We work via demonstrable increments. Payments are tied to working staging builds, verified test suites, and agreed acceptance criteria—never ambiguity.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="bg-white p-8 rounded-3xl border border-[#e5eaf2] shadow-sm hover:border-[#1053D4] transition-colors space-y-3 h-full group">
              <div className="w-12 h-12 rounded-2xl bg-[#e8eeff] flex items-center justify-center text-[#1053D4] transition-transform group-hover:scale-110">
                <AnimatedGlobeIcon size={24} />
              </div>
              <h3 className="text-lg font-bold text-[#111c2d] group-hover:text-[#1053D4] transition-colors">Enterprise Rigor</h3>
              <p className="text-sm text-[#424653] leading-relaxed">
                Strict code reviews, automated unit and integration tests, containerized deployments, and clean architectural patterns form our standard engineering baseline.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 4. EMERGENCY CONSULTATION BANNER */}
      <section className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="bg-[#f0f3ff] rounded-3xl p-6 sm:p-8 border border-[#d0daf2] flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#1053D4] text-white flex items-center justify-center shrink-0 shadow-md">
                <AnimatedRadioIcon size={24} />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-[#111c2d]">
                  Need an urgent consultation?
                </h3>
                <p className="text-xs sm:text-sm text-[#424653]">
                  Feel free to ping our desk directly for active RFP submissions or technical rescues.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto">
              <a
                href="mailto:info@vaptechsol.com"
                className="flex-1 sm:flex-initial text-center px-5 py-2.5 rounded-xl bg-white border border-[#c3c6d6] text-[#111c2d] text-xs font-semibold hover:bg-slate-50 transition-colors shadow-xs"
              >
                Direct Email
              </a>
              <button
                onClick={() => {
                  const formEl = document.getElementById('inquiry-form-card');
                  formEl?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="cursor-pointer flex-1 sm:flex-initial px-5 py-2.5 rounded-xl bg-[#1053D4] text-white text-xs font-semibold hover:bg-[#0c44b0] transition-colors shadow-sm"
              >
                Fill Inquiry Form
              </button>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
};
