'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Amrutvahini Prakriya</h3>
            <p>{t('footer.description')}</p>
          </div>
          
          <div className="footer-section">
            <h3>{t('footer.quickLinks')}</h3>
            <Link href="#about">{t('footer.about')}</Link>
            <Link href="#products">{t('footer.products')}</Link>
            <Link href="#why-us">{t('footer.whyUs')}</Link>
            <Link href="#farmers">{t('footer.farmers')}</Link>
            <Link href="#infrastructure">{t('footer.infrastructure')}</Link>
          </div>
          
          <div className="footer-section">
            <h3>{t('footer.products')}</h3>
            <Link href="#">{t('footer.products.flours')}</Link>
            <Link href="#">{t('footer.products.oils')}</Link>
            <Link href="#">{t('footer.products.dehydrated')}</Link>
            <Link href="#">{t('footer.products.lemon')}</Link>
          </div>
          
          <div className="footer-section">
            <h3>{t('footer.contact')}</h3>
            <p>
              <strong>{t('footer.corporateOffice')}</strong><br />
              D/6, Shri Prathamesh Darshan CHS,<br />
              Netivali, Kalyan East,<br />
              Dist. Thane - 421306
            </p>
            
            <p>
              <strong>{t('footer.productionUnit')}</strong><br />
              Survey 11/5, Pemgiri Road,<br />
              Village Nimgaon Budruk,<br />
              Tal Sangamner, Dist. Ahilyanagar - 422603
            </p>
            
            <p>
              📞 <a href="tel:+919146910401">+91 9146910401</a><br />
              📧 <a href="mailto:annasahebkanawade57@gmail.com">annasahebkanawade57@gmail.com</a>
            </p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
}

