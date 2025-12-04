'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="hero">
      <div className="hero-pattern"></div>
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 style={{ whiteSpace: 'pre-line' }}>{t('hero.title')}</h1>
            <p className="hero-subtitle">{t('hero.subtitle')}</p>
            
            <div className="hero-buttons">
              <Link href="#products" className="btn-primary">{t('hero.explore')}</Link>
              <Link href="#contact" className="btn-secondary">{t('hero.partner')}</Link>
            </div>
            
            <div className="trust-badges">
              <div className="badge">
                <div className="badge-icon">✓</div>
                <span>{t('hero.chemicalFree')}</span>
              </div>
              <div className="badge">
                <div className="badge-icon">☀</div>
                <span>{t('hero.solarPowered')}</span>
              </div>
              <div className="badge">
                <div className="badge-icon">🤝</div>
                <span>{t('hero.directFarmers')}</span>
              </div>
              <div className="badge">
                <div className="badge-icon">✓</div>
                <span>{t('hero.fssaiCertified')}</span>
              </div>
            </div>
          </div>
          
          <div className="hero-image">
            <div className="hero-visual"></div>
            <div className="floating-card floating-card-1">
              <div className="stat-number">5 MT</div>
              <div className="stat-label">{t('hero.dailyCapacity')}</div>
            </div>
            <div className="floating-card floating-card-2">
              <div className="stat-number">40 KV</div>
              <div className="stat-label">{t('hero.solarPower')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

