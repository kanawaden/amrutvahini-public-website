'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';

export default function Testimonials() {
  const { language } = useLanguage();
  const t = translations[language];

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase();
  };

  return (
    <section className="py-24 bg-white scroll-reveal">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2>{t.testimonials.title}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
          {t.testimonials.items.map((testimonial, index) => (
            <div key={index} className="bg-white p-10 rounded-[25px] shadow-lg relative">
              <div className="absolute -top-5 left-5 text-8xl text-soft-cream font-display leading-none">"</div>
              <p className="text-lg leading-relaxed text-[#555] mb-6 italic relative z-10">{testimonial.text}</p>
              <div className="flex items-center gap-4 mt-6">
                <div className="w-12 h-12 bg-gradient-to-br from-forest-green to-light-sage rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {getInitials(testimonial.author)}
                </div>
                <div>
                  <h4 className={`text-forest-green font-sans text-lg mb-1 ${language === 'mr' ? 'font-marathi' : ''}`}>
                    {testimonial.author}
                  </h4>
                  <p className="text-[#999] text-sm">{testimonial.location}</p>
                  <div className="text-warm-golden text-xl mt-2">⭐⭐⭐⭐⭐</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

