'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { Language } from '@/lib/translations';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="fixed top-[100px] right-8 z-[1001] bg-white rounded-full p-2 shadow-lg flex gap-2">
      <button
        onClick={() => setLanguage('en')}
        className={`px-4 py-2 border-none rounded-full transition-all text-sm font-semibold ${
          language === 'en'
            ? 'bg-forest-green text-white'
            : 'bg-transparent text-earth-brown hover:bg-light-sage hover:text-white'
        }`}
      >
        English
      </button>
      <button
        onClick={() => setLanguage('mr')}
        className={`px-4 py-2 border-none rounded-full transition-all text-sm font-semibold ${
          language === 'mr'
            ? 'bg-forest-green text-white'
            : 'bg-transparent text-earth-brown hover:bg-light-sage hover:text-white'
        }`}
      >
        मराठी
      </button>
    </div>
  );
}

