'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';

export default function VisionMission() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="py-24 bg-soft-cream scroll-reveal">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <div className="bg-white p-12 rounded-[25px] shadow-xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-forest-green to-warm-golden"></div>
            <div className="text-5xl mb-6">🎯</div>
            <h3 className="text-forest-green mb-6">{t.visionMission.vision.title}</h3>
            <p className="text-lg leading-relaxed text-[#555]">{t.visionMission.vision.text}</p>
          </div>
          <div className="bg-white p-12 rounded-[25px] shadow-xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-forest-green to-warm-golden"></div>
            <div className="text-5xl mb-6">🚀</div>
            <h3 className="text-forest-green mb-6">{t.visionMission.mission.title}</h3>
            <p className="text-lg leading-relaxed text-[#555]">{t.visionMission.mission.text}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

