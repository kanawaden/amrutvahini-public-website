'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function Products() {
  const { t } = useLanguage();

  return (
    <section id="products" className="section-light scroll-reveal">
      <div className="container">
        <div className="section-header">
          <h2>{t('products.title')}</h2>
          <p className="section-subtitle">{t('products.subtitle')}</p>
        </div>
        
        <div className="products-grid">
          <div className="product-card">
            <div className="product-icon">🌾</div>
            <h3>{t('products.flours.title')}</h3>
            <p>{t('products.flours.desc')}</p>
            <ul className="product-list">
              <li>{t('products.flours.wheat')}</li>
              <li>{t('products.flours.multigrain')}</li>
              <li>{t('products.flours.millets')}</li>
            </ul>
          </div>
          
          <div className="product-card">
            <div className="product-icon">🥥</div>
            <h3>{t('products.oils.title')}</h3>
            <p>{t('products.oils.desc')}</p>
            <ul className="product-list">
              <li>{t('products.oils.groundnut')}</li>
              <li>{t('products.oils.coconut')}</li>
              <li>{t('products.oils.mustard')}</li>
            </ul>
          </div>
          
          <div className="product-card">
            <div className="product-icon">🍅</div>
            <h3>{t('products.dehydrated.title')}</h3>
            <p>{t('products.dehydrated.desc')}</p>
            <ul className="product-list">
              <li>{t('products.dehydrated.vegetables')}</li>
              <li>{t('products.dehydrated.fruitPowders')}</li>
              <li>{t('products.dehydrated.seasonal')}</li>
            </ul>
          </div>
          
          <div className="product-card">
            <div className="product-icon">🍋</div>
            <h3>{t('products.lemon.title')}</h3>
            <p>{t('products.lemon.desc')}</p>
            <ul className="product-list">
              <li>{t('products.lemon.powder')}</li>
              <li>{t('products.lemon.pickles')}</li>
              <li>{t('products.lemon.juice')}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

