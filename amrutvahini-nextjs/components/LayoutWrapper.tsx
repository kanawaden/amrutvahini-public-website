'use client';

import { useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const { language } = useLanguage();

  useEffect(() => {
    // Update html lang attribute
    document.documentElement.setAttribute('lang', language);
    document.body.setAttribute('lang', language);
  }, [language]);

  return <>{children}</>;
}

