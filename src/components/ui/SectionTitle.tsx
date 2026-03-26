import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
  centered?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, className = '', centered = true }) => {
  return (
    <div className={`section-title-block mb-12 md:mb-16 ${centered ? 'text-center' : 'text-left'} ${className}`}>
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className={`section-subtitle ${centered ? 'section-subtitle--centered' : ''}`}>{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;
