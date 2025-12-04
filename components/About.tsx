'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';

export default function About() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="about" className="py-24 bg-white scroll-reveal">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2>{t.about.title}</h2>
          <p className="text-xl text-earth-brown mt-4">{t.about.subtitle}</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="text-lg leading-relaxed text-[#555]">
            {t.about.content.map((paragraph, index) => (
              <p key={index} className="mb-6">
                {index === 0 ? (
                  <>
                    We are <strong>Amrutvahini Prakriya</strong> — {paragraph.split('— ')[1]}
                  </>
                ) : (
                  paragraph
                )}
              </p>
            ))}
            <div className="bg-forest-green text-white p-8 rounded-[20px] mt-8">
              <h3 className="accent-text text-warm-golden mb-4">{t.about.coreBelief.title}</h3>
              <p><em>{t.about.coreBelief.text}</em></p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white rounded-[20px] p-8 shadow-lg text-center transition-transform hover:-translate-y-2.5">
              <div className="text-5xl mb-4">🏭</div>
              <div className="text-4xl font-bold text-forest-green font-serif">7,500</div>
              <div className="text-sm text-earth-brown mt-2">{t.about.stats.facility}</div>
            </div>
            <div className="bg-white rounded-[20px] p-8 shadow-lg text-center transition-transform hover:-translate-y-2.5">
              <div className="text-5xl mb-4">⚡</div>
              <div className="text-4xl font-bold text-forest-green font-serif">40 KV</div>
              <div className="text-sm text-earth-brown mt-2">{t.about.stats.solarPower}</div>
            </div>
            <div className="bg-white rounded-[20px] p-8 shadow-lg text-center transition-transform hover:-translate-y-2.5">
              <div className="text-5xl mb-4">🌾</div>
              <div className="text-4xl font-bold text-forest-green font-serif">5 MT</div>
              <div className="text-sm text-earth-brown mt-2">{t.about.stats.dailyCapacity}</div>
            </div>
            <div className="bg-white rounded-[20px] p-8 shadow-lg text-center transition-transform hover:-translate-y-2.5">
              <div className="text-5xl mb-4">🚚</div>
              <div className="text-4xl font-bold text-forest-green font-serif">3</div>
              <div className="text-sm text-earth-brown mt-2">{t.about.stats.cityNetwork}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

