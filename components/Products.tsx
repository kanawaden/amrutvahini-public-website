'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';

export default function Products() {
  const { language } = useLanguage();
  const t = translations[language];

  const products = [
    {
      icon: '🌾',
      ...t.products.stoneFlour,
    },
    {
      icon: '🥥',
      ...t.products.coldPressedOils,
    },
    {
      icon: '🍅',
      ...t.products.dehydrated,
    },
    {
      icon: '🍋',
      ...t.products.lemon,
    },
  ];

  return (
    <section id="products" className="py-24 bg-white scroll-reveal">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2>{t.products.title}</h2>
          <p className="text-xl text-earth-brown mt-4">{t.products.subtitle}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-12">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-[25px] p-10 shadow-lg transition-all text-center relative overflow-hidden group hover:-translate-y-4 hover:shadow-2xl"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-forest-green to-warm-golden scale-x-0 group-hover:scale-x-100 transition-transform"></div>
              <div className="text-6xl mb-6 inline-block transition-transform group-hover:scale-110 group-hover:rotate-[5deg]">
                {product.icon}
              </div>
              <h3 className="text-forest-green mb-4">{product.title}</h3>
              <p className="text-[#666] leading-relaxed mb-4">{product.description}</p>
              <ul className="list-none text-left mt-4">
                {product.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="py-2 text-earth-brown font-medium relative pl-6 before:content-['✓'] before:absolute before:left-0 before:text-forest-green before:font-bold"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

