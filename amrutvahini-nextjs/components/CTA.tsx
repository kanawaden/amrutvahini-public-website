'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export default function CTA() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="cta-section">
      <div className="container">
        <div className="cta-content">
          <h2>{t('cta.title')}</h2>
          <p>{t('cta.subtitle')}</p>
          
          <div className="cta-buttons">
            <Link href="#products" className="btn-white">{t('cta.shop')}</Link>
            <Link href="#" className="btn-outline-white">{t('cta.partner')}</Link>
            <Link href="#" className="btn-outline-white">{t('cta.contact')}</Link>
          </div>
          
          <div className="contact-info">
            <span>
              {t('cta.questions')} <a href="tel:+919146910401">+91 9146910401</a> {t('cta.or')}{' '}
              <a href="mailto:annasahebkanawade57@gmail.com">annasahebkanawade57@gmail.com</a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

