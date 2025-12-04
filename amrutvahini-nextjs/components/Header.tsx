'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Header() {
  const { t } = useLanguage();

  return (
    <header>
      <nav>
        <Link href="#" className="logo">
          <div className="logo-icon">AP</div>
          <span>Amrutvahini Prakriya</span>
        </Link>
        <ul className="nav-links">
          <li><Link href="#about">{t('nav.about')}</Link></li>
          <li><Link href="#products">{t('nav.products')}</Link></li>
          <li><Link href="#why-us">{t('nav.whyUs')}</Link></li>
          <li><Link href="#farmers">{t('nav.farmers')}</Link></li>
          <li><Link href="#infrastructure">{t('nav.infrastructure')}</Link></li>
        </ul>
        <Link href="#contact" className="cta-button">{t('nav.contact')}</Link>
        <div className="mobile-menu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </header>
  );
}

