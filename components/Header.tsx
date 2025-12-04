'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';

export default function Header() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-[1000] shadow-sm transition-all">
      <nav className="max-w-[1400px] mx-auto px-8 py-6 flex justify-between items-center">
        <Link href="#" className="flex items-center gap-2 font-serif text-2xl font-bold text-forest-green no-underline">
          <div className="w-11 h-11 bg-gradient-to-br from-forest-green to-light-sage rounded-full flex items-center justify-center text-white font-bold">
            AP
          </div>
          <span className={language === 'mr' ? 'font-marathi text-xl' : ''}>
            {language === 'en' ? 'Amrutvahini Prakriya' : 'अमृतवाहिनी प्रक्रिया'}
          </span>
        </Link>
        <ul className="hidden md:flex gap-10 list-none">
          <li>
            <Link href="#about" className="text-earth-brown no-underline font-medium transition-colors hover:text-forest-green relative after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-0.5 after:bg-forest-green after:transition-all hover:after:w-full">
              {t.nav.about}
            </Link>
          </li>
          <li>
            <Link href="#products" className="text-earth-brown no-underline font-medium transition-colors hover:text-forest-green relative after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-0.5 after:bg-forest-green after:transition-all hover:after:w-full">
              {t.nav.products}
            </Link>
          </li>
          <li>
            <Link href="#why-us" className="text-earth-brown no-underline font-medium transition-colors hover:text-forest-green relative after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-0.5 after:bg-forest-green after:transition-all hover:after:w-full">
              {t.nav.whyUs}
            </Link>
          </li>
          <li>
            <Link href="#farmers" className="text-earth-brown no-underline font-medium transition-colors hover:text-forest-green relative after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-0.5 after:bg-forest-green after:transition-all hover:after:w-full">
              {t.nav.farmers}
            </Link>
          </li>
          <li>
            <Link href="#infrastructure" className="text-earth-brown no-underline font-medium transition-colors hover:text-forest-green relative after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-0.5 after:bg-forest-green after:transition-all hover:after:w-full">
              {t.nav.infrastructure}
            </Link>
          </li>
        </ul>
        <Link
          href="#contact"
          className="px-7 py-3 bg-forest-green text-white no-underline rounded-full font-semibold transition-all border-2 border-forest-green hover:bg-deep-forest hover:-translate-y-0.5 hover:shadow-lg"
        >
          {t.nav.contact}
        </Link>
        <div className="md:hidden flex flex-col gap-1.5 cursor-pointer">
          <span className="w-6 h-0.5 bg-forest-green transition-all"></span>
          <span className="w-6 h-0.5 bg-forest-green transition-all"></span>
          <span className="w-6 h-0.5 bg-forest-green transition-all"></span>
        </div>
      </nav>
    </header>
  );
}

