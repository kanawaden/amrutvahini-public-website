# Amrutvahini Prakriya - Next.js Website

A modern, bilingual (English/Hindi) website for Amrutvahini Prakriya, built with Next.js, TypeScript, and React.

## Features

- 🌐 **Bilingual Support**: Full support for English and Marathi languages with easy language switching
- 📱 **Fully Responsive**: Optimized for both desktop and mobile devices
- 🎨 **Modern Design**: Beautiful, clean UI matching the original HTML design
- ⚡ **Fast Performance**: Built with Next.js for optimal performance
- ♿ **Accessible**: Semantic HTML and proper ARIA attributes

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
```bash
cd amrutvahini-nextjs
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

## Project Structure

```
amrutvahini-nextjs/
├── app/
│   ├── globals.css      # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Main page
├── components/
│   ├── Header.tsx        # Navigation header
│   ├── Hero.tsx          # Hero section
│   ├── About.tsx         # About section
│   ├── VisionMission.tsx # Vision & Mission
│   ├── Products.tsx      # Products section
│   ├── WhyUs.tsx         # Why Choose Us
│   ├── Farmers.tsx       # Farmers section
│   ├── Infrastructure.tsx # Infrastructure
│   ├── Testimonials.tsx  # Testimonials
│   ├── CTA.tsx           # Call to Action
│   ├── Footer.tsx        # Footer
│   └── LanguageSwitcher.tsx # Language switcher
├── contexts/
│   └── LanguageContext.tsx # Language context provider
└── public/               # Static assets
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Language Support

The website supports two languages:
- **English (en)** - Default language
- **Marathi (mr)** - Full translation support

Language preference is saved in localStorage and persists across page reloads.

## Customization

### Adding New Translations

Edit `contexts/LanguageContext.tsx` and add new translation keys to the `translations` object.

### Styling

All styles are in `app/globals.css`. The design uses CSS custom properties (variables) defined in `:root` for easy theming.

### Components

Each section is a separate component in the `components/` directory. You can easily modify or extend them as needed.

## Deployment

### Build for Production

```bash
npm run build
```

### Deploy to Vercel

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository in Vercel
3. Vercel will automatically detect Next.js and deploy

### Other Platforms

Next.js can be deployed to any platform that supports Node.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2025 Amrutvahini Prakriya Pvt. Ltd. All Rights Reserved.
