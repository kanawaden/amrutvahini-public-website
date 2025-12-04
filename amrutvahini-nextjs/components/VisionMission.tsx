'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function VisionMission() {
  const { t } = useLanguage();

  return (
    <section className="section-cream scroll-reveal">
      <div className="container">
        <div className="vision-mission">
          <div className="vm-card">
            <div className="vm-icon">🎯</div>
            <h3>{t('vision.title')}</h3>
            <p>{t('vision.text')}</p>
          </div>
          
          <div className="vm-card">
            <div className="vm-icon">🚀</div>
            <h3>{t('mission.title')}</h3>
            <p>{t('mission.text')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

