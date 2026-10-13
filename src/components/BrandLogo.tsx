import React from 'react';
import logoSymbol from '../assets/logo-symbol.png';
import logoWordmark from '../assets/logo-wordmark.png';
import logoFull from '../assets/logo.png';

interface BrandLogoProps {
  variant?: 'header' | 'footer' | 'compact' | 'icon-only' | 'stacked';
  className?: string;
  onClick?: () => void;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'header',
  className = '',
  onClick,
}) => {
  // Variant for icon only
  if (variant === 'icon-only') {
    return (
      <div
        onClick={onClick}
        className={`inline-flex items-center justify-center cursor-pointer transition-transform duration-200 hover:scale-105 ${className}`}
        title="vaptechsol"
      >
        <img
          src={logoSymbol}
          alt="vaptechsol mark"
          className="w-10 h-10 sm:w-12 sm:h-12 object-contain select-none"
          loading="eager"
        />
      </div>
    );
  }

  // Variant for Stacked (emblem on top, vaptechsol below - matching official logo image)
  if (variant === 'stacked') {
    return (
      <div
        onClick={onClick}
        className={`inline-flex flex-col items-center justify-center cursor-pointer group select-none transition-transform duration-200 hover:scale-[1.02] ${className}`}
        title="vaptechsol"
      >
        <img
          src={logoFull}
          alt="vaptechsol logo"
          className="w-28 sm:w-32 md:w-36 h-auto object-contain select-none"
          loading="eager"
        />
      </div>
    );
  }

  // Variant for Footer - prominent emblem & authentic wordmark
  if (variant === 'footer') {
    return (
      <div
        onClick={onClick}
        className={`inline-flex items-center gap-3.5 sm:gap-4.5 cursor-pointer group select-none ${className}`}
        title="vaptechsol"
      >
        <div className="shrink-0 transition-transform duration-300 group-hover:scale-105">
          <img
            src={logoSymbol}
            alt="vaptechsol logo"
            className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain select-none"
            loading="eager"
          />
        </div>
        <div className="flex items-center">
          <img
            src={logoWordmark}
            alt="vaptechsol"
            className="h-7 sm:h-8 md:h-9 w-auto object-contain select-none"
            loading="eager"
          />
        </div>
      </div>
    );
  }

  // Variant for Header / Default - clean horizontal lockup
  return (
    <div
      onClick={onClick}
      className={`inline-flex items-center gap-2.5 sm:gap-3.5 cursor-pointer group select-none ${className}`}
      title="vaptechsol"
    >
      <div className="shrink-0 transition-transform duration-200 group-hover:scale-105">
        <img
          src={logoSymbol}
          alt="vaptechsol logo"
          className="w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 object-contain select-none"
          loading="eager"
        />
      </div>
      <div className="flex items-center">
        <img
          src={logoWordmark}
          alt="vaptechsol"
          className="h-5 sm:h-6 md:h-7 w-auto object-contain select-none"
          loading="eager"
        />
      </div>
    </div>
  );
};
