'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function Farmers() {
  const { t } = useLanguage();

  return (
    <section id="farmers" className="section-light scroll-reveal">
      <div className="container">
        <div className="farmers-content">
          <div className="farmers-text">
            <h2>{t('farmers.title')}</h2>
            <p className="accent-text" style={{ fontSize: '1.3rem' }}>{t('farmers.subtitle')}</p>
            
            <p>{t('farmers.p1')}</p>
            
            <ul className="farmers-benefits">
              <li><strong>{t('farmers.benefit1')}</strong></li>
              <li><strong>{t('farmers.benefit2')}</strong></li>
              <li><strong>{t('farmers.benefit3')}</strong></li>
              <li><strong>{t('farmers.benefit4')}</strong></li>
            </ul>
            
            <p style={{ marginTop: '2rem', fontStyle: 'italic' }}>{t('farmers.p2')}</p>
          </div>
          
          <div className="farmers-visual"></div>
        </div>
      </div>
    </section>
  );
}

