'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';

export default function CTA() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="contact" className="bg-gradient-to-br from-forest-green to-deep-forest text-white text-center py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(255,255,255,0.1)_0%,transparent_50%),radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.1)_0%,transparent_50%)]"></div>
      <div className="max-w-[1400px] mx-auto px-8 relative z-10">
        <h2 className="text-white mb-6">{t.cta.title}</h2>
        <p className="text-xl max-w-2xl mx-auto mb-10 opacity-95">{t.cta.description}</p>
        <div className="flex flex-wrap gap-6 justify-center mb-8">
          <Link
            href="#products"
            className="px-10 py-4 bg-white text-forest-green no-underline rounded-full font-semibold text-lg transition-all hover:-translate-y-1 hover:shadow-xl inline-block"
          >
            {t.cta.shopProducts}
          </Link>
          <Link
            href="#"
            className="px-10 py-4 bg-transparent text-white no-underline rounded-full font-semibold text-lg transition-all border-2 border-white hover:bg-white hover:text-forest-green hover:-translate-y-1 inline-block"
          >
            {t.cta.becomePartner}
          </Link>
          <Link
            href="#"
            className="px-10 py-4 bg-transparent text-white no-underline rounded-full font-semibold text-lg transition-all border-2 border-white hover:bg-white hover:text-forest-green hover:-translate-y-1 inline-block"
          >
            {t.cta.contactSales}
          </Link>
        </div>
        <div className="mt-8 text-lg opacity-90">
          <span>
            {t.cta.questions}{' '}
            <a href="tel:+919146910401" className="text-warm-golden no-underline font-semibold hover:opacity-80">
              +91 9146910401
            </a>{' '}
            {t.cta.orEmail}{' '}
            <a
              href="mailto:annasahebkanawade57@gmail.com"
              className="text-warm-golden no-underline font-semibold hover:opacity-80"
            >
              annasahebkanawade57@gmail.com
            </a>
          </span>
        </div>
      </div>
    </section>
  );
}

