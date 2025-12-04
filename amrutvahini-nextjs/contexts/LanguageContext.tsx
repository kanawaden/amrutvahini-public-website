'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'mr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translations
const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    'nav.about': 'About',
    'nav.products': 'Products',
    'nav.whyUs': 'Why Us',
    'nav.farmers': 'Farmers',
    'nav.infrastructure': 'Infrastructure',
    'nav.contact': 'Contact Us',
    
    // Hero
    'hero.title': 'Nature Knows Best.\nWe Just Help It\nReach You.',
    'hero.subtitle': 'Stone-ground flours, cold-pressed oils, and naturally dehydrated foods — solar-powered, farmer-sourced, and 100% chemical-free. Welcome to food you can trust.',
    'hero.explore': 'Explore Our Products',
    'hero.partner': 'Partner With Us',
    'hero.chemicalFree': '100% Chemical-Free',
    'hero.solarPowered': 'Solar-Powered',
    'hero.directFarmers': 'Direct from Farmers',
    'hero.fssaiCertified': 'FSSAI Certified',
    'hero.dailyCapacity': 'Daily Flour Capacity',
    'hero.solarPower': 'Solar Power',
    
    // About
    'about.title': 'Rebuilding Trust in What You Eat',
    'about.subtitle': 'From village soil to your kitchen — with purity at every step',
    'about.p1': 'We are Amrutvahini Prakriya — a rural-focused food processing enterprise on a mission to restore India\'s connection to pure, natural food.',
    'about.p2': 'Every product we create starts in the soil of naturally grown farms and ends on your kitchen shelf — without a single chemical in between. From our 7,500 sq. ft. solar-powered facility in Sangamner, we use traditional stone-grinding, cold-pressing, and natural dehydration to preserve the goodness nature intended.',
    'about.p3': 'We don\'t just process food. We empower farmers with fair pricing, protect your health with hygienic practices, and rebuild the trust that modern food systems have lost.',
    'about.coreBelief': 'Our Core Belief',
    'about.coreBeliefText': 'Health begins in the soil. Nature knows best.',
    'about.facility': 'Sq. Ft. Facility',
    'about.solarPower': 'Solar Power',
    'about.dailyCapacity': 'Daily Capacity',
    'about.cityNetwork': 'City Network',
    
    // Vision Mission
    'vision.title': 'Vision',
    'vision.text': 'To be India\'s fundamental infrastructure for pure, natural food — the healthiest supply chain connecting villages to families and institutions.',
    'mission.title': 'Mission',
    'mission.text': 'We deliver 100% chemical-free staples through a vertically integrated, rural-powered processing model that empowers natural farmers with sustainable livelihoods, builds traceable and hygienic processes, and uses solar energy to preserve nature\'s goodness.',
    
    // Products
    'products.title': 'From Our Heart to Your Home',
    'products.subtitle': 'Every product tells a story of purity, tradition, and care',
    'products.flours.title': 'Stone-Ground Flours',
    'products.flours.desc': 'Fresh, cool-milled, nutrient-rich flours ground the traditional way',
    'products.flours.wheat': 'Whole Wheat Flour',
    'products.flours.multigrain': 'Multi-grain Flour',
    'products.flours.millets': 'Jowar, Bajra, Ragi',
    'products.oils.title': 'Cold-Pressed Oils',
    'products.oils.desc': 'Pure, unrefined oils extracted without heat or chemicals',
    'products.oils.groundnut': 'Groundnut Oil',
    'products.oils.coconut': 'Coconut Oil',
    'products.oils.mustard': 'Mustard Oil',
    'products.dehydrated.title': 'Dehydrated Products',
    'products.dehydrated.desc': 'Naturally sun-dried fruits and vegetables with no preservatives',
    'products.dehydrated.vegetables': 'Dehydrated Vegetables',
    'products.dehydrated.fruitPowders': 'Fruit Powders',
    'products.dehydrated.seasonal': 'Seasonal Specialties',
    'products.lemon.title': 'Lemon Products',
    'products.lemon.desc': 'Farm-fresh lemon transformed into versatile kitchen essentials',
    'products.lemon.powder': 'Lemon Powder',
    'products.lemon.pickles': 'Traditional Pickles',
    'products.lemon.juice': 'Lemon Juice',
    
    // Why Us
    'whyUs.title': 'Why Families Trust Amrutvahini Prakriya',
    'whyUs.chemicalFree.title': '100% Chemical-Free Promise',
    'whyUs.chemicalFree.desc': 'No pesticides, no preservatives, no additives. Just pure ingredients from naturally grown farms.',
    'whyUs.solar.title': 'Solar-Powered Processing',
    'whyUs.solar.desc': 'Our 40KV solar plant powers every step, reducing our carbon footprint while keeping your food clean.',
    'whyUs.fair.title': 'Fair to Farmers',
    'whyUs.fair.desc': 'We pay fair prices and build long-term partnerships with natural farmers, ensuring sustainable rural livelihoods.',
    'whyUs.hygienic.title': 'Hygienic & Modern Facility',
    'whyUs.hygienic.desc': 'Our 7,500 sq. ft. facility combines traditional methods with modern hygiene standards for safe, quality products.',
    'whyUs.traceable.title': 'Fully Traceable',
    'whyUs.traceable.desc': 'Know exactly where your food comes from — from the village to your kitchen.',
    'whyUs.traditional.title': 'Traditional Methods, Modern Standards',
    'whyUs.traditional.desc': 'Stone-grinding, cold-pressing, and natural dehydration preserve nutrients while meeting FSSAI quality standards.',
    
    // Farmers
    'farmers.title': 'Empowering the Hands That Feed India',
    'farmers.subtitle': 'Our success is built on their trust',
    'farmers.p1': 'At Amrutvahini Prakriya, farmers aren\'t just suppliers — they\'re partners. We work directly with natural farmers across Maharashtra, creating a model that benefits everyone in the chain.',
    'farmers.benefit1': 'Fair & Transparent Pricing — No middlemen, no exploitation',
    'farmers.benefit2': 'Training & Support — Helping farmers transition to natural methods',
    'farmers.benefit3': 'Consistent Demand — Reliable procurement creating stable incomes',
    'farmers.benefit4': 'Community Upliftment — Building stronger rural economies',
    'farmers.p2': 'By choosing our products, you\'re not just choosing health — you\'re supporting the livelihoods of the families who grow your food with care.',
    
    // Infrastructure
    'infrastructure.title': 'Built for Scale, Rooted in Purity',
    'infrastructure.subtitle': 'Our state-of-the-art facility at Nimgaon Budruk, Sangamner combines traditional food wisdom with modern infrastructure',
    'infrastructure.processing': 'Processing Unit',
    'infrastructure.processingDesc': '7,500 sq. ft. self-owned facility',
    'infrastructure.mill': 'Stone Flour Mill',
    'infrastructure.millDesc': '5 MT/day capacity',
    'infrastructure.oil': 'Oil Unit',
    'infrastructure.oilDesc': 'Cold-pressed oils',
    'infrastructure.dehydration': 'Dehydration Unit',
    'infrastructure.dehydrationDesc': 'Fruits & vegetables',
    'infrastructure.lemon': 'Lemon Processing',
    'infrastructure.lemonDesc': 'Powder, pickle, juice',
    'infrastructure.solar': 'Solar Power Plant',
    'infrastructure.solarDesc': '40KV sustainable energy',
    'infrastructure.investment': 'Investment:',
    'infrastructure.investmentAmount': '₹1.22 Crore self-funded infrastructure',
    
    // Testimonials
    'testimonials.title': 'Trusted by Families Across India',
    'testimonial1.text': 'The flour tastes like it used to when my grandmother made rotis. You can feel the difference — it\'s fresh, natural, and so much healthier.',
    'testimonial1.name': 'Priya M.',
    'testimonial1.location': 'Mumbai',
    'testimonial2.text': 'I switched to their cold-pressed oils and haven\'t looked back. Pure, unrefined, and you can smell the authenticity.',
    'testimonial2.name': 'Rajesh K.',
    'testimonial2.location': 'Pune',
    'testimonial3.text': 'As a restaurant owner, I need consistent quality. Amrutvahini delivers every time — natural products without compromise.',
    'testimonial3.name': 'Chef Sandeep',
    'testimonial3.location': 'Nashik',
    
    // CTA
    'cta.title': 'Join the Clean Food Movement',
    'cta.subtitle': 'Whether you\'re a family seeking healthier options, a retailer looking for authentic products, or a distributor wanting to partner with a trusted brand — we\'re here to serve.',
    'cta.shop': 'Shop Our Products',
    'cta.partner': 'Become a Partner',
    'cta.contact': 'Contact Sales',
    'cta.questions': 'Questions? Call us at',
    'cta.or': 'or email',
    
    // Footer
    'footer.description': 'India\'s clean food backbone — connecting natural farmers to families through solar-powered, chemical-free processing.',
    'footer.quickLinks': 'Quick Links',
    'footer.about': 'About Us',
    'footer.products': 'Products',
    'footer.whyUs': 'Why Choose Us',
    'footer.farmers': 'Farmers',
    'footer.infrastructure': 'Infrastructure',
    'footer.products.flours': 'Stone-Ground Flours',
    'footer.products.oils': 'Cold-Pressed Oils',
    'footer.products.dehydrated': 'Dehydrated Foods',
    'footer.products.lemon': 'Lemon Products',
    'footer.contact': 'Contact Us',
    'footer.corporateOffice': 'Corporate Office:',
    'footer.productionUnit': 'Production Unit:',
    'footer.copyright': '© 2025 Amrutvahini Prakriya Pvt. Ltd. All Rights Reserved.',
  },
  mr: {
    // Navigation
    'nav.about': 'आमच्याबद्दल',
    'nav.products': 'उत्पादने',
    'nav.whyUs': 'आम्हाला का निवडा',
    'nav.farmers': 'शेतकरी',
    'nav.infrastructure': 'पायाभूत सुविधा',
    'nav.contact': 'संपर्क साधा',
    
    // Hero
    'hero.title': 'निसर्ग सर्वोत्तम जाणतो.\nआम्ही फक्त तो\nतुमच्यापर्यंत पोहोचवतो.',
    'hero.subtitle': 'दगडी पिठे, थंड दाबलेली तेले आणि नैसर्गिकरित्या निर्जलित अन्न — सौर ऊर्जेवर चालणारे, शेतकऱ्यांकडून मिळवलेले आणि १००% रसायनमुक्त. तुम्ही विश्वास ठेवू शकता अशा अन्नात स्वागत आहे.',
    'hero.explore': 'आमची उत्पादने पहा',
    'hero.partner': 'आमच्याशी भागीदार व्हा',
    'hero.chemicalFree': '१००% रसायनमुक्त',
    'hero.solarPowered': 'सौर ऊर्जा चालित',
    'hero.directFarmers': 'थेट शेतकऱ्यांकडून',
    'hero.fssaiCertified': 'FSSAI प्रमाणित',
    'hero.dailyCapacity': 'दररोज पीठ क्षमता',
    'hero.solarPower': 'सौर ऊर्जा',
    
    // About
    'about.title': 'तुम्ही खात असलेल्या अन्नावरचा विश्वास पुन्हा निर्माण करणे',
    'about.subtitle': 'गावातील मातीपासून तुमच्या स्वयंपाकघरापर्यंत — प्रत्येक टप्प्यावर शुद्धता',
    'about.p1': 'आम्ही अमृतवाहिनी प्रक्रिया आहोत — एक ग्रामीण-केंद्रित अन्न प्रक्रिया उद्योग जो भारताचे शुद्ध, नैसर्गिक अन्नाशी असलेले नाते पुन्हा स्थापित करण्याच्या उद्देशाने कार्यरत आहे.',
    'about.p2': 'आम्ही तयार करत असलेले प्रत्येक उत्पादन नैसर्गिकरित्या उगवलेल्या शेतातील मातीपासून सुरू होते आणि तुमच्या स्वयंपाकघरातील शेल्फवर संपते — दरम्यान एकही रसायन नाही. सांगमनेरमधील आमच्या ७,५०० चौ. फूट सौर ऊर्जेवर चालणाऱ्या सुविधेतून, आम्ही पारंपारिक दगडी दळणे, थंड दाबणे आणि नैसर्गिक निर्जलीकरणाचा वापर करून निसर्गाने दिलेली चांगुलपणा जतन करतो.',
    'about.p3': 'आम्ही फक्त अन्न प्रक्रिया करत नाही. आम्ही शेतकऱ्यांना योग्य किंमती देऊन सशक्त करतो, स्वच्छताविषयक पद्धतींद्वारे तुमच्या आरोग्याचे संरक्षण करतो आणि आधुनिक अन्न प्रणालीने गमावलेला विश्वास पुन्हा निर्माण करतो.',
    'about.coreBelief': 'आमचा मूळ विश्वास',
    'about.coreBeliefText': 'आरोग्याची सुरुवात मातीपासून होते. निसर्ग सर्वोत्तम जाणतो.',
    'about.facility': 'चौ. फूट सुविधा',
    'about.solarPower': 'सौर ऊर्जा',
    'about.dailyCapacity': 'दररोज क्षमता',
    'about.cityNetwork': 'शहर नेटवर्क',
    
    // Vision Mission
    'vision.title': 'दृष्टीकोन',
    'vision.text': 'शुद्ध, नैसर्गिक अन्नासाठी भारताची मूलभूत पायाभूत सुविधा बनणे — गावे आणि कुटुंबे व संस्थांना जोडणारी सर्वात निरोगी पुरवठा साखळी.',
    'mission.title': 'ध्येय',
    'mission.text': 'आम्ही एक उभ्या एकत्रित, ग्रामीण-शक्तीवर चालणारे प्रक्रिया मॉडेलद्वारे १००% रसायनमुक्त मुख्य खाद्यपदार्थ पुरवतो जे नैसर्गिक शेतकऱ्यांना शाश्वत उपजीविकेसह सशक्त करते, शोधता येण्याजोग्या आणि स्वच्छ प्रक्रिया तयार करते आणि निसर्गाची चांगुलपणा जतन करण्यासाठी सौर ऊर्जा वापरते.',
    
    // Products
    'products.title': 'आमच्या हृदयापासून तुमच्या घरापर्यंत',
    'products.subtitle': 'प्रत्येक उत्पादन शुद्धता, परंपरा आणि काळजीची कथा सांगते',
    'products.flours.title': 'दगडी पिठे',
    'products.flours.desc': 'पारंपारिक पद्धतीने दळलेली ताजी, थंड-दळलेली, पौष्टिक पिठे',
    'products.flours.wheat': 'संपूर्ण गव्हाचे पीठ',
    'products.flours.multigrain': 'बहु-धान्य पीठ',
    'products.flours.millets': 'ज्वारी, बाजरी, नाचणी',
    'products.oils.title': 'थंड दाबलेली तेले',
    'products.oils.desc': 'उष्णता किंवा रसायने न वापरता काढलेली शुद्ध, अशुद्ध तेले',
    'products.oils.groundnut': 'शेंगदाणा तेल',
    'products.oils.coconut': 'खोबरेल तेल',
    'products.oils.mustard': 'मोहरीचे तेल',
    'products.dehydrated.title': 'निर्जलित उत्पादने',
    'products.dehydrated.desc': 'कोणतेही संरक्षक द्रव्ये नसलेली नैसर्गिकरित्या सूर्यप्रकाशात वाळवलेली फळे आणि भाज्या',
    'products.dehydrated.vegetables': 'निर्जलित भाज्या',
    'products.dehydrated.fruitPowders': 'फळांची पावडर',
    'products.dehydrated.seasonal': 'हंगामी विशेष',
    'products.lemon.title': 'लिंबू उत्पादने',
    'products.lemon.desc': 'शेतातील ताज्या लिंबूपासून तयार केलेली बहुउपयोगी स्वयंपाकघरातील आवश्यक वस्तू',
    'products.lemon.powder': 'लिंबू पावडर',
    'products.lemon.pickles': 'पारंपारिक लोणचे',
    'products.lemon.juice': 'लिंबाचा रस',
    
    // Why Us
    'whyUs.title': 'कुटुंबे अमृतवाहिनी प्रक्रियावर का विश्वास ठेवतात',
    'whyUs.chemicalFree.title': '१००% रसायनमुक्त वचन',
    'whyUs.chemicalFree.desc': 'कीटकनाशके नाहीत, संरक्षक द्रव्ये नाहीत, मिश्रित पदार्थ नाहीत. फक्त नैसर्गिकरित्या उगवलेल्या शेतातील शुद्ध घटक.',
    'whyUs.solar.title': 'सौर ऊर्जा प्रक्रिया',
    'whyUs.solar.desc': 'आमचा ४० KV सौर प्लांट प्रत्येक टप्प्याला ऊर्जा देतो, आमचा कार्बन फूटप्रिंट कमी करतो आणि तुमचे अन्न स्वच्छ ठेवतो.',
    'whyUs.fair.title': 'शेतकऱ्यांसाठी न्याय्य',
    'whyUs.fair.desc': 'आम्ही योग्य किंमती देतो आणि नैसर्गिक शेतकऱ्यांशी दीर्घकालीन भागीदारी करतो, शाश्वत ग्रामीण उपजीविका सुनिश्चित करतो.',
    'whyUs.hygienic.title': 'स्वच्छ आणि आधुनिक सुविधा',
    'whyUs.hygienic.desc': 'आमची ७,५०० चौ. फूट सुविधा सुरक्षित, दर्जेदार उत्पादनांसाठी पारंपारिक पद्धती आणि आधुनिक स्वच्छता मानके एकत्र करते.',
    'whyUs.traceable.title': 'पूर्णपणे शोधता येण्याजोगे',
    'whyUs.traceable.desc': 'तुमचे अन्न नेमके कुठून येते ते जाणून घ्या — गावापासून तुमच्या स्वयंपाकघरापर्यंत.',
    'whyUs.traditional.title': 'पारंपारिक पद्धती, आधुनिक मानके',
    'whyUs.traditional.desc': 'FSSAI गुणवत्ता मानकांची पूर्तता करताना दगडी दळणे, थंड दाबणे आणि नैसर्गिक निर्जलीकरण पोषक तत्त्वे जतन करते.',
    
    // Farmers
    'farmers.title': 'भारताला अन्न पुरवणाऱ्या हातांना सशक्त करणे',
    'farmers.subtitle': 'आमचे यश त्यांच्या विश्वासावर आधारित आहे',
    'farmers.p1': 'अमृतवाहिनी प्रक्रियामध्ये, शेतकरी फक्त पुरवठादार नाहीत — ते भागीदार आहेत. आम्ही संपूर्ण महाराष्ट्रातील नैसर्गिक शेतकऱ्यांसोबत थेट काम करतो, एक मॉडेल तयार करतो जे साखळीतील प्रत्येकाला फायदा देते.',
    'farmers.benefit1': 'न्याय्य आणि पारदर्शक किंमत — मध्यस्थ नाहीत, शोषण नाही',
    'farmers.benefit2': 'प्रशिक्षण आणि समर्थन — शेतकऱ्यांना नैसर्गिक पद्धतींकडे जाण्यास मदत करणे',
    'farmers.benefit3': 'सातत्यपूर्ण मागणी — विश्वसनीय खरेदी स्थिर उत्पन्न निर्माण करते',
    'farmers.benefit4': 'समाज उन्नती — मजबूत ग्रामीण अर्थव्यवस्था तयार करणे',
    'farmers.p2': 'आमची उत्पादने निवडून, तुम्ही फक्त आरोग्य निवडत नाही आहात — तुम्ही काळजीपूर्वक तुमचे अन्न उगवणाऱ्या कुटुंबांच्या उपजीविकेला समर्थन देत आहात.',
    
    // Infrastructure
    'infrastructure.title': 'प्रमाणासाठी तयार केलेले, शुद्धतेत मूळ असलेले',
    'infrastructure.subtitle': 'निमगांव बुद्रुक, सांगमनेर येथील आमची अत्याधुनिक सुविधा पारंपारिक अन्न ज्ञान आणि आधुनिक पायाभूत सुविधा एकत्र करते',
    'infrastructure.processing': 'प्रक्रिया युनिट',
    'infrastructure.processingDesc': '७,५०० चौ. फूट स्व-मालकीची सुविधा',
    'infrastructure.mill': 'दगडी पीठ गिरणी',
    'infrastructure.millDesc': '५ MT/दिवस क्षमता',
    'infrastructure.oil': 'तेल युनिट',
    'infrastructure.oilDesc': 'थंड दाबलेली तेले',
    'infrastructure.dehydration': 'निर्जलीकरण युनिट',
    'infrastructure.dehydrationDesc': 'फळे आणि भाज्या',
    'infrastructure.lemon': 'लिंबू प्रक्रिया',
    'infrastructure.lemonDesc': 'पावडर, लोणचे, रस',
    'infrastructure.solar': 'सौर ऊर्जा प्लांट',
    'infrastructure.solarDesc': '४० KV शाश्वत ऊर्जा',
    'infrastructure.investment': 'गुंतवणूक:',
    'infrastructure.investmentAmount': '₹१.२२ कोटी स्व-अर्थसहाय्यित पायाभूत सुविधा',
    
    // Testimonials
    'testimonials.title': 'संपूर्ण भारतातील कुटुंबांचा विश्वास',
    'testimonial1.text': 'पीठ माझ्या आजीने रोटी बनवत असताना ज्याप्रमाणे चव होती तशी आहे. तुम्ही फरक जाणवू शकता — ते ताजे, नैसर्गिक आणि खूप आरोग्यदायी आहे.',
    'testimonial1.name': 'प्रिया म.',
    'testimonial1.location': 'मुंबई',
    'testimonial2.text': 'मी त्यांच्या थंड दाबलेल्या तेलांवर स्विच केले आणि मागे वळून पाहिलेही नाही. शुद्ध, अशुद्ध आणि तुम्हाला खरेपणाचा वास येतो.',
    'testimonial2.name': 'राजेश क.',
    'testimonial2.location': 'पुणे',
    'testimonial3.text': 'एक रेस्टॉरंट मालक म्हणून, मला सातत्यपूर्ण गुणवत्ता हवी आहे. अमृतवाहिनी प्रत्येक वेळी पुरवते — कोणत्याही तडजोड शिवाय नैसर्गिक उत्पादने.',
    'testimonial3.name': 'शेफ संदीप',
    'testimonial3.location': 'नासिक',
    
    // CTA
    'cta.title': 'स्वच्छ अन्न चळवळीत सामील व्हा',
    'cta.subtitle': 'तुम्ही आरोग्यदायी पर्याय शोधणारे कुटुंब असाल, प्रामाणिक उत्पादने शोधणारे किरकोळ विक्रेते असाल, किंवा विश्वसनीय ब्रँडशी भागीदार होऊ इच्छिणारे वितरक असाल — आम्ही सेवा करण्यासाठी येथे आहोत.',
    'cta.shop': 'आमची उत्पादने खरेदी करा',
    'cta.partner': 'भागीदार व्हा',
    'cta.contact': 'विक्री संपर्क',
    'cta.questions': 'प्रश्न? आम्हाला कॉल करा',
    'cta.or': 'किंवा ईमेल करा',
    
    // Footer
    'footer.description': 'भारताची स्वच्छ अन्न मणक्याचा भाग — सौर ऊर्जेवर चालणारे, रसायनमुक्त प्रक्रियेद्वारे नैसर्गिक शेतकऱ्यांना कुटुंबांशी जोडणे.',
    'footer.quickLinks': 'द्रुत दुवे',
    'footer.about': 'आमच्याबद्दल',
    'footer.products': 'उत्पादने',
    'footer.whyUs': 'आम्हाला का निवडा',
    'footer.farmers': 'शेतकरी',
    'footer.infrastructure': 'पायाभूत सुविधा',
    'footer.products.flours': 'दगडी पिठे',
    'footer.products.oils': 'थंड दाबलेली तेले',
    'footer.products.dehydrated': 'निर्जलित अन्न',
    'footer.products.lemon': 'लिंबू उत्पादने',
    'footer.contact': 'आमच्याशी संपर्क साधा',
    'footer.corporateOffice': 'कॉर्पोरेट कार्यालय:',
    'footer.productionUnit': 'उत्पादन युनिट:',
    'footer.copyright': '© 2025 अमृतवाहिनी प्रक्रिया प्रा. लि. सर्वाधिकार सुरक्षित.',
  },
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');

  useEffect(() => {
    const savedLang = localStorage.getItem('preferredLanguage') as Language;
    if (savedLang && (savedLang === 'en' || savedLang === 'mr')) {
      setLanguageState(savedLang);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('preferredLanguage', lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

