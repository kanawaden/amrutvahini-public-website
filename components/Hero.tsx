'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';

export default function Hero() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-soft-cream to-[#E8DCC8] pt-[100px]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(212,165,116,0.1)_0%,transparent_50%),radial-gradient(circle_at_80%_80%,rgba(45,80,22,0.1)_0%,transparent_50%)] pointer-events-none"></div>
      <div className="absolute inset-0 opacity-30 bg-[repeating-linear-gradient(90deg,transparent,transparent_2px,rgba(45,80,22,0.02)_2px,rgba(45,80,22,0.02)_4px),repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(45,80,22,0.02)_2px,rgba(45,80,22,0.02)_4px)]"></div>
      <div className="max-w-[1400px] mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-[fadeInUp_1s_ease-out]">
            <h1 className="text-forest-green mb-6 leading-tight whitespace-pre-line">
              {t.hero.title}
            </h1>
            <p className="text-xl text-earth-brown mb-8 leading-relaxed">
              {t.hero.subtitle}
            </p>
            <div className="flex flex-wrap gap-6 mb-12">
              <Link
                href="#products"
                className="px-10 py-4 bg-forest-green text-white no-underline rounded-full font-semibold text-lg transition-all border-2 border-forest-green hover:bg-deep-forest hover:-translate-y-1 hover:shadow-xl inline-block"
              >
                {t.hero.exploreProducts}
              </Link>
              <Link
                href="#contact"
                className="px-10 py-4 bg-transparent text-forest-green no-underline rounded-full font-semibold text-lg transition-all border-2 border-forest-green hover:bg-forest-green hover:text-white hover:-translate-y-1 hover:shadow-xl inline-block"
              >
                {t.hero.partnerWithUs}
              </Link>
            </div>
            <div className="flex flex-wrap gap-8 mt-8">
              <div className="flex items-center gap-2 text-sm text-earth-brown font-medium">
                <div className="w-6 h-6 bg-forest-green rounded-full flex items-center justify-center text-white text-xs">✓</div>
                <span>{t.hero.badges.chemicalFree}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-earth-brown font-medium">
                <div className="w-6 h-6 bg-forest-green rounded-full flex items-center justify-center text-white text-xs">☀</div>
                <span>{t.hero.badges.solarPowered}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-earth-brown font-medium">
                <div className="w-6 h-6 bg-forest-green rounded-full flex items-center justify-center text-white text-xs">🤝</div>
                <span>{t.hero.badges.directFromFarmers}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-earth-brown font-medium">
                <div className="w-6 h-6 bg-forest-green rounded-full flex items-center justify-center text-white text-xs">✓</div>
                <span>{t.hero.badges.fssaiCertified}</span>
              </div>
            </div>
          </div>
          <div className="relative animate-[fadeInRight_1s_ease-out]">
            <div className="bg-gradient-to-br from-warm-golden to-earth-brown h-[600px] rounded-[30px] relative overflow-hidden shadow-2xl">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20rem] opacity-20">🌾</div>
            </div>
            <div className="absolute top-[10%] -right-[10%] bg-white p-6 rounded-2xl shadow-xl animate-[float_3s_ease-in-out_infinite]">
              <div className="text-4xl font-bold text-forest-green font-serif">5 MT</div>
              <div className="text-sm text-earth-brown">{t.hero.stats.dailyCapacity}</div>
            </div>
            <div className="absolute bottom-[15%] -left-[10%] bg-white p-6 rounded-2xl shadow-xl animate-[float_3s_ease-in-out_infinite] delay-[1.5s]">
              <div className="text-4xl font-bold text-forest-green font-serif">40 KV</div>
              <div className="text-sm text-earth-brown">{t.hero.stats.solarPower}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

