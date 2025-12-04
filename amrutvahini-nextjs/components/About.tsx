'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="section-light scroll-reveal">
      <div className="container">
        <div className="section-header">
          <h2>{t('about.title')}</h2>
          <p className="section-subtitle">{t('about.subtitle')}</p>
        </div>
        
        <div className="about-content">
          <div className="about-text">
            <p>{t('about.p1')}</p>
            <p>{t('about.p2')}</p>
            <p>{t('about.p3')}</p>
            
            <div className="core-belief">
              <h3 className="accent-text">{t('about.coreBelief')}</h3>
              <p><em>"{t('about.coreBeliefText')}"</em></p>
            </div>
          </div>
          
          <div className="about-visuals">
            <div className="visual-card">
              <div className="visual-icon">🏭</div>
              <div className="visual-number">7,500</div>
              <div className="visual-label">{t('about.facility')}</div>
            </div>
            <div className="visual-card">
              <div className="visual-icon">⚡</div>
              <div className="visual-number">40 KV</div>
              <div className="visual-label">{t('about.solarPower')}</div>
            </div>
            <div className="visual-card">
              <div className="visual-icon">🌾</div>
              <div className="visual-number">5 MT</div>
              <div className="visual-label">{t('about.dailyCapacity')}</div>
            </div>
            <div className="visual-card">
              <div className="visual-icon">🚚</div>
              <div className="visual-number">3</div>
              <div className="visual-label">{t('about.cityNetwork')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

