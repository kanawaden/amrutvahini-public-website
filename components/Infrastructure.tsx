'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';

export default function Infrastructure() {
  const { language } = useLanguage();
  const t = translations[language];

  const icons = ['🏢', '⚙️', '🥥', '🌞', '🍋', '☀️'];

  return (
    <section id="infrastructure" className="py-24 bg-soft-cream scroll-reveal">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2>{t.infrastructure.title}</h2>
          <p className="text-xl text-earth-brown mt-4">{t.infrastructure.subtitle}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {t.infrastructure.items.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-[20px] shadow-md text-center transition-all hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="text-5xl mb-4">{icons[index]}</div>
              <h4 className={`text-forest-green font-serif text-xl mb-3 ${language === 'mr' ? 'font-marathi' : ''}`}>
                {item.title}
              </h4>
              <p className="text-[#666] text-sm">{item.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <p className="text-xl text-earth-brown font-semibold">{t.infrastructure.investment}</p>
        </div>
      </div>
    </section>
  );
}

