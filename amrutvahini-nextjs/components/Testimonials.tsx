'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function Testimonials() {
  const { t } = useLanguage();

  return (
    <section className="section-light scroll-reveal">
      <div className="container">
        <div className="section-header">
          <h2>{t('testimonials.title')}</h2>
        </div>
        
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <p className="testimonial-text">{t('testimonial1.text')}</p>
            <div className="testimonial-author">
              <div className="author-avatar">PM</div>
              <div className="author-info">
                <h4>{t('testimonial1.name')}</h4>
                <p className="author-location">{t('testimonial1.location')}</p>
                <div className="stars">⭐⭐⭐⭐⭐</div>
              </div>
            </div>
          </div>
          
          <div className="testimonial-card">
            <p className="testimonial-text">{t('testimonial2.text')}</p>
            <div className="testimonial-author">
              <div className="author-avatar">RK</div>
              <div className="author-info">
                <h4>{t('testimonial2.name')}</h4>
                <p className="author-location">{t('testimonial2.location')}</p>
                <div className="stars">⭐⭐⭐⭐⭐</div>
              </div>
            </div>
          </div>
          
          <div className="testimonial-card">
            <p className="testimonial-text">{t('testimonial3.text')}</p>
            <div className="testimonial-author">
              <div className="author-avatar">CS</div>
              <div className="author-info">
                <h4>{t('testimonial3.name')}</h4>
                <p className="author-location">{t('testimonial3.location')}</p>
                <div className="stars">⭐⭐⭐⭐⭐</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

