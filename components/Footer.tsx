'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';

export default function Footer() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer className="bg-deep-forest text-white py-16 pt-16">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-warm-golden mb-6 text-2xl">{language === 'en' ? 'Amrutvahini Prakriya' : 'अमृतवाहिनी प्रक्रिया'}</h3>
            <p className="text-white/80 leading-relaxed mb-3">{t.footer.description}</p>
          </div>
          <div>
            <h3 className="text-warm-golden mb-6 text-2xl">{t.footer.quickLinks}</h3>
            <Link href="#about" className="block text-white/80 mb-3 no-underline hover:text-warm-golden transition-colors">
              {language === 'en' ? 'About Us' : 'आमच्याबद्दल'}
            </Link>
            <Link href="#products" className="block text-white/80 mb-3 no-underline hover:text-warm-golden transition-colors">
              {t.footer.products}
            </Link>
            <Link href="#why-us" className="block text-white/80 mb-3 no-underline hover:text-warm-golden transition-colors">
              {language === 'en' ? 'Why Choose Us' : 'आम्हाला का निवडा'}
            </Link>
            <Link href="#farmers" className="block text-white/80 mb-3 no-underline hover:text-warm-golden transition-colors">
              {language === 'en' ? 'Farmers' : 'शेतकरी'}
            </Link>
            <Link href="#infrastructure" className="block text-white/80 mb-3 no-underline hover:text-warm-golden transition-colors">
              {language === 'en' ? 'Infrastructure' : 'पायाभूत सुविधा'}
            </Link>
          </div>
          <div>
            <h3 className="text-warm-golden mb-6 text-2xl">{t.footer.products}</h3>
            <Link href="#" className="block text-white/80 mb-3 no-underline hover:text-warm-golden transition-colors">
              {language === 'en' ? 'Stone-Ground Flours' : 'दगडी पिठे'}
            </Link>
            <Link href="#" className="block text-white/80 mb-3 no-underline hover:text-warm-golden transition-colors">
              {language === 'en' ? 'Cold-Pressed Oils' : 'थंड दाबलेली तेले'}
            </Link>
            <Link href="#" className="block text-white/80 mb-3 no-underline hover:text-warm-golden transition-colors">
              {language === 'en' ? 'Dehydrated Foods' : 'निर्जलित अन्न'}
            </Link>
            <Link href="#" className="block text-white/80 mb-3 no-underline hover:text-warm-golden transition-colors">
              {language === 'en' ? 'Lemon Products' : 'लिंबू उत्पादने'}
            </Link>
          </div>
          <div>
            <h3 className="text-warm-golden mb-6 text-2xl">{t.footer.contact}</h3>
            <p className="text-white/80 mb-3 leading-relaxed">
              <strong>{t.footer.corporateOffice}</strong>
              <br />
              D/6, Shri Prathamesh Darshan CHS,
              <br />
              Netivali, Kalyan East,
              <br />
              Dist. Thane - 421306
            </p>
            <p className="text-white/80 mb-3 leading-relaxed">
              <strong>{t.footer.productionUnit}</strong>
              <br />
              Survey 11/5, Pemgiri Road,
              <br />
              Village Nimgaon Budruk,
              <br />
              Tal Sangamner, Dist. Ahilyanagar - 422603
            </p>
            <p className="text-white/80">
              📞 <a href="tel:+919146910401" className="text-white/80 no-underline hover:text-warm-golden">+91 9146910401</a>
              <br />
              📧{' '}
              <a
                href="mailto:annasahebkanawade57@gmail.com"
                className="text-white/80 no-underline hover:text-warm-golden"
              >
                annasahebkanawade57@gmail.com
              </a>
            </p>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 text-center text-white/60">
          <p>{t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}

