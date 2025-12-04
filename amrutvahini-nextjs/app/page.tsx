'use client';

import { useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import Hero from '@/components/Hero';
import About from '@/components/About';
import VisionMission from '@/components/VisionMission';
import Products from '@/components/Products';
import WhyUs from '@/components/WhyUs';
import Farmers from '@/components/Farmers';
import Infrastructure from '@/components/Infrastructure';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {

  useEffect(() => {
    // Scroll reveal animation
    const scrollRevealElements = document.querySelectorAll('.scroll-reveal');
    
    const elementInView = (el: Element, offset = 100) => {
      const elementTop = el.getBoundingClientRect().top;
      return (
        elementTop <= 
        (window.innerHeight || document.documentElement.clientHeight) - offset
      );
    };
    
    const displayScrollElement = (element: Element) => {
      element.classList.add('revealed');
    };
    
    const handleScrollAnimation = () => {
      scrollRevealElements.forEach((el) => {
        if (elementInView(el, 100)) {
          displayScrollElement(el);
        }
      });
    };
    
    window.addEventListener('scroll', handleScrollAnimation);
    handleScrollAnimation(); // Initial check
    
    return () => {
      window.removeEventListener('scroll', handleScrollAnimation);
    };
  }, []);

  useEffect(() => {
    // Smooth scroll for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]');
      if (anchor) {
        const href = anchor.getAttribute('href');
        if (href && href !== '#') {
          e.preventDefault();
          const targetElement = document.querySelector(href);
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  useEffect(() => {
    // Header scroll effect
    const header = document.querySelector('header');
    if (!header) return;

    const handleScroll = () => {
      const currentScroll = window.pageYOffset;
      if (currentScroll > 100) {
        (header as HTMLElement).style.boxShadow = '0 2px 30px rgba(0, 0, 0, 0.1)';
      } else {
        (header as HTMLElement).style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.05)';
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <main>
      <LanguageSwitcher />
      <Header />
      <Hero />
      <About />
      <VisionMission />
      <Products />
      <WhyUs />
      <Farmers />
      <Infrastructure />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
