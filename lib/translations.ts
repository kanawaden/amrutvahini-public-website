export type Language = 'en' | 'mr';

export const translations = {
  en: {
    nav: {
      about: 'About',
      products: 'Products',
      whyUs: 'Why Us',
      farmers: 'Farmers',
      infrastructure: 'Infrastructure',
      contact: 'Contact Us',
    },
    hero: {
      title: 'Nature Knows Best.\nWe Just Help It\nReach You.',
      subtitle: 'Stone-ground flours, cold-pressed oils, and naturally dehydrated foods — solar-powered, farmer-sourced, and 100% chemical-free. Welcome to food you can trust.',
      exploreProducts: 'Explore Our Products',
      partnerWithUs: 'Partner With Us',
      badges: {
        chemicalFree: '100% Chemical-Free',
        solarPowered: 'Solar-Powered',
        directFromFarmers: 'Direct from Farmers',
        fssaiCertified: 'FSSAI Certified',
      },
      stats: {
        dailyCapacity: 'Daily Flour Capacity',
        solarPower: 'Solar Power',
      },
    },
    about: {
      title: 'Rebuilding Trust in What You Eat',
      subtitle: 'From village soil to your kitchen — with purity at every step',
      content: [
        'We are Amrutvahini Prakriya — a rural-focused food processing enterprise on a mission to restore India\'s connection to pure, natural food.',
        'Every product we create starts in the soil of naturally grown farms and ends on your kitchen shelf — without a single chemical in between. From our 7,500 sq. ft. solar-powered facility in Sangamner, we use traditional stone-grinding, cold-pressing, and natural dehydration to preserve the goodness nature intended.',
        'We don\'t just process food. We empower farmers with fair pricing, protect your health with hygienic practices, and rebuild the trust that modern food systems have lost.',
      ],
      coreBelief: {
        title: 'Our Core Belief',
        text: 'Health begins in the soil. Nature knows best.',
      },
      stats: {
        facility: 'Sq. Ft. Facility',
        solarPower: 'Solar Power',
        dailyCapacity: 'Daily Capacity',
        cityNetwork: 'City Network',
      },
    },
    visionMission: {
      vision: {
        title: 'Vision',
        text: 'To be India\'s fundamental infrastructure for pure, natural food — the healthiest supply chain connecting villages to families and institutions.',
      },
      mission: {
        title: 'Mission',
        text: 'We deliver 100% chemical-free staples through a vertically integrated, rural-powered processing model that empowers natural farmers with sustainable livelihoods, builds traceable and hygienic processes, and uses solar energy to preserve nature\'s goodness.',
      },
    },
    products: {
      title: 'From Our Heart to Your Home',
      subtitle: 'Every product tells a story of purity, tradition, and care',
      stoneFlour: {
        title: 'Stone-Ground Flours',
        description: 'Fresh, cool-milled, nutrient-rich flours ground the traditional way',
        items: ['Whole Wheat Flour', 'Multi-grain Flour', 'Jowar, Bajra, Ragi'],
      },
      coldPressedOils: {
        title: 'Cold-Pressed Oils',
        description: 'Pure, unrefined oils extracted without heat or chemicals',
        items: ['Groundnut Oil', 'Coconut Oil', 'Mustard Oil'],
      },
      dehydrated: {
        title: 'Dehydrated Products',
        description: 'Naturally sun-dried fruits and vegetables with no preservatives',
        items: ['Dehydrated Vegetables', 'Fruit Powders', 'Seasonal Specialties'],
      },
      lemon: {
        title: 'Lemon Products',
        description: 'Farm-fresh lemon transformed into versatile kitchen essentials',
        items: ['Lemon Powder', 'Traditional Pickles', 'Lemon Juice'],
      },
    },
    whyUs: {
      title: 'Why Families Trust Amrutvahini Prakriya',
      features: [
        {
          title: '100% Chemical-Free Promise',
          description: 'No pesticides, no preservatives, no additives. Just pure ingredients from naturally grown farms.',
        },
        {
          title: 'Solar-Powered Processing',
          description: 'Our 40KV solar plant powers every step, reducing our carbon footprint while keeping your food clean.',
        },
        {
          title: 'Fair to Farmers',
          description: 'We pay fair prices and build long-term partnerships with natural farmers, ensuring sustainable rural livelihoods.',
        },
        {
          title: 'Hygienic & Modern Facility',
          description: 'Our 7,500 sq. ft. facility combines traditional methods with modern hygiene standards for safe, quality products.',
        },
        {
          title: 'Fully Traceable',
          description: 'Know exactly where your food comes from — from the village to your kitchen.',
        },
        {
          title: 'Traditional Methods, Modern Standards',
          description: 'Stone-grinding, cold-pressing, and natural dehydration preserve nutrients while meeting FSSAI quality standards.',
        },
      ],
    },
    farmers: {
      title: 'Empowering the Hands That Feed India',
      subtitle: 'Our success is built on their trust',
      content: 'At Amrutvahini Prakriya, farmers aren\'t just suppliers — they\'re partners. We work directly with natural farmers across Maharashtra, creating a model that benefits everyone in the chain.',
      benefits: [
        'Fair & Transparent Pricing — No middlemen, no exploitation',
        'Training & Support — Helping farmers transition to natural methods',
        'Consistent Demand — Reliable procurement creating stable incomes',
        'Community Upliftment — Building stronger rural economies',
      ],
      closing: 'By choosing our products, you\'re not just choosing health — you\'re supporting the livelihoods of the families who grow your food with care.',
    },
    infrastructure: {
      title: 'Built for Scale, Rooted in Purity',
      subtitle: 'Our state-of-the-art facility at Nimgaon Budruk, Sangamner combines traditional food wisdom with modern infrastructure',
      items: [
        { title: 'Processing Unit', description: '7,500 sq. ft. self-owned facility' },
        { title: 'Stone Flour Mill', description: '5 MT/day capacity' },
        { title: 'Oil Unit', description: 'Cold-pressed oils' },
        { title: 'Dehydration Unit', description: 'Fruits & vegetables' },
        { title: 'Lemon Processing', description: 'Powder, pickle, juice' },
        { title: 'Solar Power Plant', description: '40KV sustainable energy' },
      ],
      investment: 'Investment: ₹1.22 Crore self-funded infrastructure',
    },
    testimonials: {
      title: 'Trusted by Families Across India',
      items: [
        {
          text: 'The flour tastes like it used to when my grandmother made rotis. You can feel the difference — it\'s fresh, natural, and so much healthier.',
          author: 'Priya M.',
          location: 'Mumbai',
        },
        {
          text: 'I switched to their cold-pressed oils and haven\'t looked back. Pure, unrefined, and you can smell the authenticity.',
          author: 'Rajesh K.',
          location: 'Pune',
        },
        {
          text: 'As a restaurant owner, I need consistent quality. Amrutvahini delivers every time — natural products without compromise.',
          author: 'Chef Sandeep',
          location: 'Nashik',
        },
      ],
    },
    cta: {
      title: 'Join the Clean Food Movement',
      description: 'Whether you\'re a family seeking healthier options, a retailer looking for authentic products, or a distributor wanting to partner with a trusted brand — we\'re here to serve.',
      shopProducts: 'Shop Our Products',
      becomePartner: 'Become a Partner',
      contactSales: 'Contact Sales',
      questions: 'Questions? Call us at',
      orEmail: 'or email',
    },
    footer: {
      description: 'India\'s clean food backbone — connecting natural farmers to families through solar-powered, chemical-free processing.',
      quickLinks: 'Quick Links',
      products: 'Products',
      contact: 'Contact Us',
      corporateOffice: 'Corporate Office:',
      productionUnit: 'Production Unit:',
      copyright: '© 2025 Amrutvahini Prakriya Pvt. Ltd. All Rights Reserved.',
    },
  },
  mr: {
    nav: {
      about: 'आमच्याबद्दल',
      products: 'उत्पादने',
      whyUs: 'आम्हाला का निवडा',
      farmers: 'शेतकरी',
      infrastructure: 'पायाभूत सुविधा',
      contact: 'संपर्क साधा',
    },
    hero: {
      title: 'निसर्ग सर्वोत्तम जाणतो.\nआम्ही फक्त तो\nतुमच्यापर्यंत पोहोचवतो.',
      subtitle: 'दगडी पिठे, थंड दाबलेली तेले आणि नैसर्गिकरित्या निर्जलित अन्न — सौर ऊर्जेवर चालणारे, शेतकऱ्यांकडून मिळवलेले आणि १००% रसायनमुक्त. तुम्ही विश्वास ठेवू शकता अशा अन्नात स्वागत आहे.',
      exploreProducts: 'आमची उत्पादने पहा',
      partnerWithUs: 'आमच्याशी भागीदार व्हा',
      badges: {
        chemicalFree: '१००% रसायनमुक्त',
        solarPowered: 'सौर ऊर्जा चालित',
        directFromFarmers: 'थेट शेतकऱ्यांकडून',
        fssaiCertified: 'FSSAI प्रमाणित',
      },
      stats: {
        dailyCapacity: 'दररोज पीठ क्षमता',
        solarPower: 'सौर ऊर्जा',
      },
    },
    about: {
      title: 'तुम्ही खात असलेल्या अन्नावरचा विश्वास पुन्हा निर्माण करणे',
      subtitle: 'गावातील मातीपासून तुमच्या स्वयंपाकघरापर्यंत — प्रत्येक टप्प्यावर शुद्धता',
      content: [
        'आम्ही अमृतवाहिनी प्रक्रिया आहोत — एक ग्रामीण-केंद्रित अन्न प्रक्रिया उद्योग जो भारताचे शुद्ध, नैसर्गिक अन्नाशी असलेले नाते पुन्हा स्थापित करण्याच्या उद्देशाने कार्यरत आहे.',
        'आम्ही तयार करत असलेले प्रत्येक उत्पादन नैसर्गिकरित्या उगवलेल्या शेतातील मातीपासून सुरू होते आणि तुमच्या स्वयंपाकघरातील शेल्फवर संपते — दरम्यान एकही रसायन नाही. सांगमनेरमधील आमच्या ७,५०० चौ. फूट सौर ऊर्जेवर चालणाऱ्या सुविधेतून, आम्ही पारंपारिक दगडी दळणे, थंड दाबणे आणि नैसर्गिक निर्जलीकरणाचा वापर करून निसर्गाने दिलेली चांगुलपणा जतन करतो.',
        'आम्ही फक्त अन्न प्रक्रिया करत नाही. आम्ही शेतकऱ्यांना योग्य किंमती देऊन सशक्त करतो, स्वच्छताविषयक पद्धतींद्वारे तुमच्या आरोग्याचे संरक्षण करतो आणि आधुनिक अन्न प्रणालीने गमावलेला विश्वास पुन्हा निर्माण करतो.',
      ],
      coreBelief: {
        title: 'आमचा मूळ विश्वास',
        text: 'आरोग्याची सुरुवात मातीपासून होते. निसर्ग सर्वोत्तम जाणतो.',
      },
      stats: {
        facility: 'चौ. फूट सुविधा',
        solarPower: 'सौर ऊर्जा',
        dailyCapacity: 'दररोज क्षमता',
        cityNetwork: 'शहर नेटवर्क',
      },
    },
    visionMission: {
      vision: {
        title: 'दृष्टीकोन',
        text: 'शुद्ध, नैसर्गिक अन्नासाठी भारताची मूलभूत पायाभूत सुविधा बनणे — गावे आणि कुटुंबे व संस्थांना जोडणारी सर्वात निरोगी पुरवठा साखळी.',
      },
      mission: {
        title: 'ध्येय',
        text: 'आम्ही एक उभ्या एकत्रित, ग्रामीण-शक्तीवर चालणारे प्रक्रिया मॉडेलद्वारे १००% रसायनमुक्त मुख्य खाद्यपदार्थ पुरवतो जे नैसर्गिक शेतकऱ्यांना शाश्वत उपजीविकेसह सशक्त करते, शोधता येण्याजोग्या आणि स्वच्छ प्रक्रिया तयार करते आणि निसर्गाची चांगुलपणा जतन करण्यासाठी सौर ऊर्जा वापरते.',
      },
    },
    products: {
      title: 'आमच्या हृदयापासून तुमच्या घरापर्यंत',
      subtitle: 'प्रत्येक उत्पादन शुद्धता, परंपरा आणि काळजीची कथा सांगते',
      stoneFlour: {
        title: 'दगडी पिठे',
        description: 'पारंपारिक पद्धतीने दळलेली ताजी, थंड-दळलेली, पौष्टिक पिठे',
        items: ['संपूर्ण गव्हाचे पीठ', 'बहु-धान्य पीठ', 'ज्वारी, बाजरी, नाचणी'],
      },
      coldPressedOils: {
        title: 'थंड दाबलेली तेले',
        description: 'उष्णता किंवा रसायने न वापरता काढलेली शुद्ध, अशुद्ध तेले',
        items: ['शेंगदाणा तेल', 'खोबरेल तेल', 'मोहरीचे तेल'],
      },
      dehydrated: {
        title: 'निर्जलित उत्पादने',
        description: 'कोणतेही संरक्षक द्रव्ये नसलेली नैसर्गिकरित्या सूर्यप्रकाशात वाळवलेली फळे आणि भाज्या',
        items: ['निर्जलित भाज्या', 'फळांची पावडर', 'हंगामी विशेष'],
      },
      lemon: {
        title: 'लिंबू उत्पादने',
        description: 'शेतातील ताज्या लिंबूपासून तयार केलेली बहुउपयोगी स्वयंपाकघरातील आवश्यक वस्तू',
        items: ['लिंबू पावडर', 'पारंपारिक लोणचे', 'लिंबाचा रस'],
      },
    },
    whyUs: {
      title: 'कुटुंबे अमृतवाहिनी प्रक्रियावर का विश्वास ठेवतात',
      features: [
        {
          title: '१००% रसायनमुक्त वचन',
          description: 'कीटकनाशके नाहीत, संरक्षक द्रव्ये नाहीत, मिश्रित पदार्थ नाहीत. फक्त नैसर्गिकरित्या उगवलेल्या शेतातील शुद्ध घटक.',
        },
        {
          title: 'सौर ऊर्जा प्रक्रिया',
          description: 'आमचा ४० KV सौर प्लांट प्रत्येक टप्प्याला ऊर्जा देतो, आमचा कार्बन फूटप्रिंट कमी करतो आणि तुमचे अन्न स्वच्छ ठेवतो.',
        },
        {
          title: 'शेतकऱ्यांसाठी न्याय्य',
          description: 'आम्ही योग्य किंमती देतो आणि नैसर्गिक शेतकऱ्यांशी दीर्घकालीन भागीदारी करतो, शाश्वत ग्रामीण उपजीविका सुनिश्चित करतो.',
        },
        {
          title: 'स्वच्छ आणि आधुनिक सुविधा',
          description: 'आमची ७,५०० चौ. फूट सुविधा सुरक्षित, दर्जेदार उत्पादनांसाठी पारंपारिक पद्धती आणि आधुनिक स्वच्छता मानके एकत्र करते.',
        },
        {
          title: 'पूर्णपणे शोधता येण्याजोगे',
          description: 'तुमचे अन्न नेमके कुठून येते ते जाणून घ्या — गावापासून तुमच्या स्वयंपाकघरापर्यंत.',
        },
        {
          title: 'पारंपारिक पद्धती, आधुनिक मानके',
          description: 'FSSAI गुणवत्ता मानकांची पूर्तता करताना दगडी दळणे, थंड दाबणे आणि नैसर्गिक निर्जलीकरण पोषक तत्त्वे जतन करते.',
        },
      ],
    },
    farmers: {
      title: 'भारताला अन्न पुरवणाऱ्या हातांना सशक्त करणे',
      subtitle: 'आमचे यश त्यांच्या विश्वासावर आधारित आहे',
      content: 'अमृतवाहिनी प्रक्रियामध्ये, शेतकरी फक्त पुरवठादार नाहीत — ते भागीदार आहेत. आम्ही संपूर्ण महाराष्ट्रातील नैसर्गिक शेतकऱ्यांसोबत थेट काम करतो, एक मॉडेल तयार करतो जे साखळीतील प्रत्येकाला फायदा देते.',
      benefits: [
        'न्याय्य आणि पारदर्शक किंमत — मध्यस्थ नाहीत, शोषण नाही',
        'प्रशिक्षण आणि समर्थन — शेतकऱ्यांना नैसर्गिक पद्धतींकडे जाण्यास मदत करणे',
        'सातत्यपूर्ण मागणी — विश्वसनीय खरेदी स्थिर उत्पन्न निर्माण करते',
        'समाज उन्नती — मजबूत ग्रामीण अर्थव्यवस्था तयार करणे',
      ],
      closing: 'आमची उत्पादने निवडून, तुम्ही फक्त आरोग्य निवडत नाही आहात — तुम्ही काळजीपूर्वक तुमचे अन्न उगवणाऱ्या कुटुंबांच्या उपजीविकेला समर्थन देत आहात.',
    },
    infrastructure: {
      title: 'प्रमाणासाठी तयार केलेले, शुद्धतेत मूळ असलेले',
      subtitle: 'निमगांव बुद्रुक, सांगमनेर येथील आमची अत्याधुनिक सुविधा पारंपारिक अन्न ज्ञान आणि आधुनिक पायाभूत सुविधा एकत्र करते',
      items: [
        { title: 'प्रक्रिया युनिट', description: '७,५०० चौ. फूट स्व-मालकीची सुविधा' },
        { title: 'दगडी पीठ गिरणी', description: '५ MT/दिवस क्षमता' },
        { title: 'तेल युनिट', description: 'थंड दाबलेली तेले' },
        { title: 'निर्जलीकरण युनिट', description: 'फळे आणि भाज्या' },
        { title: 'लिंबू प्रक्रिया', description: 'पावडर, लोणचे, रस' },
        { title: 'सौर ऊर्जा प्लांट', description: '४० KV शाश्वत ऊर्जा' },
      ],
      investment: 'गुंतवणूक: ₹१.२२ कोटी स्व-अर्थसहाय्यित पायाभूत सुविधा',
    },
    testimonials: {
      title: 'संपूर्ण भारतातील कुटुंबांचा विश्वास',
      items: [
        {
          text: 'पीठ माझ्या आजीने रोटी बनवत असताना ज्याप्रमाणे चव होती तशी आहे. तुम्ही फरक जाणवू शकता — ते ताजे, नैसर्गिक आणि खूप आरोग्यदायी आहे.',
          author: 'प्रिया म.',
          location: 'मुंबई',
        },
        {
          text: 'मी त्यांच्या थंड दाबलेल्या तेलांवर स्विच केले आणि मागे वळून पाहिलेही नाही. शुद्ध, अशुद्ध आणि तुम्हाला खरेपणाचा वास येतो.',
          author: 'राजेश क.',
          location: 'पुणे',
        },
        {
          text: 'एक रेस्टॉरंट मालक म्हणून, मला सातत्यपूर्ण गुणवत्ता हवी आहे. अमृतवाहिनी प्रत्येक वेळी पुरवते — कोणत्याही तडजोड शिवाय नैसर्गिक उत्पादने.',
          author: 'शेफ संदीप',
          location: 'नाशिक',
        },
      ],
    },
    cta: {
      title: 'स्वच्छ अन्न चळवळीत सामील व्हा',
      description: 'तुम्ही आरोग्यदायी पर्याय शोधणारे कुटुंब असाल, प्रामाणिक उत्पादने शोधणारे किरकोळ विक्रेते असाल, किंवा विश्वसनीय ब्रँडशी भागीदार होऊ इच्छिणारे वितरक असाल — आम्ही सेवा करण्यासाठी येथे आहोत.',
      shopProducts: 'आमची उत्पादने खरेदी करा',
      becomePartner: 'भागीदार व्हा',
      contactSales: 'विक्री संपर्क',
      questions: 'प्रश्न? आम्हाला',
      orEmail: 'वर कॉल करा किंवा',
    },
    footer: {
      description: 'भारताची स्वच्छ अन्न मणक्याचा भाग — सौर ऊर्जेवर चालणारे, रसायनमुक्त प्रक्रियेद्वारे नैसर्गिक शेतकऱ्यांना कुटुंबांशी जोडणे.',
      quickLinks: 'द्रुत दुवे',
      products: 'उत्पादने',
      contact: 'आमच्याशी संपर्क साधा',
      corporateOffice: 'कॉर्पोरेट कार्यालय:',
      productionUnit: 'उत्पादन युनिट:',
      copyright: '© 2025 अमृतवाहिनी प्रक्रिया प्रा. लि. सर्व हक्क राखीव.',
    },
  },
};

