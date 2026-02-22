'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Header() {
  const { t } = useLanguage();

  return (
    <header>
      <nav>
        <Link href="#" className="logo">
          <Image src="/logo.png" alt="Amrutvahini Prakriya Logo" width={150} height={150} className="logo-img" style={{ objectFit: 'contain' }} />
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

