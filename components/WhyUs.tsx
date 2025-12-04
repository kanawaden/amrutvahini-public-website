'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';

export default function WhyUs() {
  const { language } = useLanguage();
  const t = translations[language];

  const icons = ['🌱', '☀️', '🤝', '🏭', '📍', '💚'];

  return (
    <section id="why-us" className="py-24 bg-soft-cream scroll-reveal">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2>{t.whyUs.title}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
          {t.whyUs.features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-10 rounded-[20px] shadow-md transition-all hover:shadow-xl hover:-translate-y-1"
            >
              <div className="text-5xl mb-6">{icons[index]}</div>
              <h3 className="text-forest-green mb-4 text-2xl">{feature.title}</h3>
              <p className="text-[#666] leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

