'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function Infrastructure() {
  const { t } = useLanguage();

  return (
    <section id="infrastructure" className="section-cream scroll-reveal">
      <div className="container">
        <div className="section-header">
          <h2>{t('infrastructure.title')}</h2>
          <p className="section-subtitle">{t('infrastructure.subtitle')}</p>
        </div>
        
        <div className="infrastructure-grid">
          <div className="infra-item">
            <div className="infra-icon">🏢</div>
            <h4>{t('infrastructure.processing')}</h4>
            <p>{t('infrastructure.processingDesc')}</p>
          </div>
          
          <div className="infra-item">
            <div className="infra-icon">⚙️</div>
            <h4>{t('infrastructure.mill')}</h4>
            <p>{t('infrastructure.millDesc')}</p>
          </div>
          
          <div className="infra-item">
            <div className="infra-icon">🥥</div>
            <h4>{t('infrastructure.oil')}</h4>
            <p>{t('infrastructure.oilDesc')}</p>
          </div>
          
          <div className="infra-item">
            <div className="infra-icon">🌞</div>
            <h4>{t('infrastructure.dehydration')}</h4>
            <p>{t('infrastructure.dehydrationDesc')}</p>
          </div>
          
          <div className="infra-item">
            <div className="infra-icon">🍋</div>
            <h4>{t('infrastructure.lemon')}</h4>
            <p>{t('infrastructure.lemonDesc')}</p>
          </div>
          
          <div className="infra-item">
            <div className="infra-icon">☀️</div>
            <h4>{t('infrastructure.solar')}</h4>
            <p>{t('infrastructure.solarDesc')}</p>
          </div>
        </div>
        
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <p style={{ fontSize: '1.2rem', color: 'var(--earth-brown)' }}>
            <strong>{t('infrastructure.investment')}</strong> {t('infrastructure.investmentAmount')}
          </p>
        </div>
      </div>
    </section>
  );
}

