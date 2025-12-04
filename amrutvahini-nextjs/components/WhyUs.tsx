'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function WhyUs() {
  const { t } = useLanguage();

  return (
    <section id="why-us" className="section-cream scroll-reveal">
      <div className="container">
        <div className="section-header">
          <h2>{t('whyUs.title')}</h2>
        </div>
        
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🌱</div>
            <h3>{t('whyUs.chemicalFree.title')}</h3>
            <p>{t('whyUs.chemicalFree.desc')}</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">☀️</div>
            <h3>{t('whyUs.solar.title')}</h3>
            <p>{t('whyUs.solar.desc')}</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">🤝</div>
            <h3>{t('whyUs.fair.title')}</h3>
            <p>{t('whyUs.fair.desc')}</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">🏭</div>
            <h3>{t('whyUs.hygienic.title')}</h3>
            <p>{t('whyUs.hygienic.desc')}</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">📍</div>
            <h3>{t('whyUs.traceable.title')}</h3>
            <p>{t('whyUs.traceable.desc')}</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">💚</div>
            <h3>{t('whyUs.traditional.title')}</h3>
            <p>{t('whyUs.traditional.desc')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

