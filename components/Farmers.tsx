'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';

export default function Farmers() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="farmers" className="py-24 bg-white scroll-reveal">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="mb-4">{t.farmers.title}</h2>
            <p className="accent-text text-xl mb-8">{t.farmers.subtitle}</p>
            <p className="text-lg leading-relaxed text-[#555] mb-8">{t.farmers.content}</p>
            <ul className="list-none mt-8">
              {t.farmers.benefits.map((benefit, index) => (
                <li key={index} className="py-4 text-lg text-earth-brown font-medium flex items-center gap-4">
                  <span className="w-8 h-8 bg-forest-green text-white rounded-full text-center leading-8 flex-shrink-0">✓</span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 italic">{t.farmers.closing}</p>
          </div>
          <div className="bg-gradient-to-br from-forest-green to-deep-forest h-[500px] rounded-[30px] relative overflow-hidden shadow-2xl">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15rem] opacity-15">🤝</div>
          </div>
        </div>
      </div>
    </section>
  );
}

