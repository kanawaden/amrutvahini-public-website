'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="language-switcher">
      <button
        className={`lang-btn ${language === 'en' ? 'active' : ''}`}
        onClick={() => setLanguage('en')}
      >
        English
      </button>
      <button
        className={`lang-btn ${language === 'mr' ? 'active' : ''}`}
        onClick={() => setLanguage('mr')}
      >
        मराठी
      </button>
    </div>
  );
}

