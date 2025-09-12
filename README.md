# Dany Capital

A sophisticated venture capital landing page focused on cryptocurrency and blockchain investments. Built with Next.js 15, TypeScript, and modern web technologies.

![Dany Capital](https://img.shields.io/badge/Dany-Capital-blue?style=for-the-badge)
![Next.js](https://img.shields.io/badge/Next.js-15.5.3-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=for-the-badge&logo=tailwind-css)

## 🚀 Overview

Dany Capital is a modern, elegant venture capital website specializing in cryptocurrency and blockchain investments. The site features a clean, professional design with sophisticated animations and a focus on Bitcoin and blockchain technology.

### 🎯 Investment Philosophy
*"Bitcoin is digital gold. Blockchain is the future."*

## ✨ Features

### 🎨 Design & UI/UX
- **Modern Glassmorphism**: Sophisticated backdrop blur effects
- **Elegant Typography**: Google Sans Code font with optimal readability
- **Professional Color Scheme**: Clean white-on-black design
- **Responsive Design**: Optimized for all devices including iPhone 12 Pro
- **Static Design**: No distracting hover animations, focused on content

### 🌟 Advanced Animations
- **Three.js Background**: Sophisticated 3D particle systems and geometric elements
- **Framer Motion**: Smooth scroll-triggered animations
- **Parallax Effects**: Elegant background movement on scroll
- **Ripple Effects**: Beautiful concentric circles in hero section

### 📱 Responsive Excellence
- **Mobile-First**: Optimized for iPhone 12 Pro (390px width)
- **Tablet Ready**: Perfect scaling for iPad and similar devices
- **Desktop Optimized**: Full utilization of large screen real estate
- **Cross-Browser**: Compatible with all modern browsers

### 🔧 Technical Features
- **Next.js 15**: Latest App Router with TypeScript
- **Performance Optimized**: Hardware-accelerated animations
- **SEO Ready**: Comprehensive metadata and structured data
- **Accessibility**: High contrast design and smooth scrolling

## 🏗️ Tech Stack

### Core Framework
- **Next.js 15.5.3** - React framework with App Router
- **TypeScript** - Type-safe development
- **React 19** - Latest React features

### Styling & Animation
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Advanced animations and transitions
- **Three.js** - 3D graphics and particle systems
- **React Three Fiber** - React renderer for Three.js
- **React Three Drei** - Useful helpers for Three.js

### Typography & Icons
- **Google Fonts** - Google Sans Code for professional typography
- **Lucide React** - Beautiful, consistent icons

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Setup
```bash
# Clone the repository
git clone https://github.com/yourusername/dany-capital.git

# Navigate to project directory
cd dany-capital

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts
```bash
npm run dev        # Start development server (webpack)
npm run dev:turbo  # Start development server (turbopack)
npm run build      # Build for production (webpack)
npm run build:turbo # Build for production (turbopack)
npm run start      # Start production server
npm run lint       # Run ESLint
```

## 🎨 Design System

### Color Palette
- **Primary Background**: `#000000` (Pure Black)
- **Text Primary**: `#FFFFFF` (Pure White)
- **Card Background**: `rgba(17, 24, 39, 0.5)` (Gray-900/50)
- **Borders**: `rgba(75, 85, 99, 0.5)` (Gray-600/50)
- **Accent**: `#3B82F6` (Blue-500)

### Typography
- **Primary Font**: Google Sans Code (400 weight)
- **Fallback**: Monospace system fonts
- **Optical Sizing**: Auto
- **Style**: Normal

### Responsive Breakpoints
```css
sm: 640px   /* Tablet */
md: 768px   /* Small Desktop */
lg: 1024px  /* Desktop */
xl: 1280px  /* Large Desktop */
```

## 📂 Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── ThreeBackground.tsx    # 3D background animations
│   │   ├── ParallaxSection.tsx    # Parallax scroll effects
│   │   └── AnimatedText.tsx       # Text animations
│   ├── globals.css                # Global styles
│   ├── layout.tsx                 # Root layout
│   └── page.tsx                   # Main landing page
├── public/
│   └── images/                    # Crypto logos and assets
└── ...
```

## 🎯 Key Sections

### 1. Hero Section
- **Dynamic title** with gradient text effects
- **Philosophy quote** in elegant glassmorphism card
- **Animated ripple effects** with concentric circles
- **Smooth scroll indicator**

### 2. Philosophy Section
- **Left-aligned content** for editorial feel
- **Responsive typography** scaling across devices
- **Investment beliefs** and conviction statements
- **Smooth scroll animations**

### 3. Investment Approach
- **Professional framework** with numbered steps
- **Clean square indicators** (no bright colors)
- **Investment metrics** and thesis information
- **Responsive grid layout**

### 4. Portfolio Holdings
- **Crypto asset cards** with floating logos
- **Responsive logo positioning** (centered mobile, left desktop)
- **Professional card design** without hover effects
- **Asset descriptions** and conviction statements

## 🎭 Investment Focus

### Core Assets
- **Bitcoin (BTC)** - Digital Gold & Store of Value
- **Ethereum (ETH)** - Smart Contract Platform  
- **BNB (BNB)** - Binance Ecosystem Token
- **Story Protocol (STORY)** - IP Infrastructure Layer

### Investment Thesis
- **Bitcoin-First Conviction** - Fundamental principles alignment
- **Protocol-Level Innovation** - Foundational infrastructure focus
- **Long-Term Value Creation** - Patient capital deployment (10+ years)

## 🚀 Performance Optimizations

### 3D Graphics
- **Optimized particle count** (200 particles vs 800+)
- **Hardware acceleration** with WebGL
- **Efficient rendering** with React Three Fiber
- **Smooth 60fps** animations

### Loading & SEO
- **Next.js Image optimization** for crypto logos
- **Comprehensive metadata** for social sharing
- **Structured data** for search engines
- **Fast page loads** with optimized assets

### Responsive Design
- **Mobile-first approach** with progressive enhancement
- **Optimal font scaling** across all devices
- **Touch-friendly interactions** on mobile
- **Perfect iPhone 12 Pro** optimization (390px width)

## 🔧 Development

### Code Quality
- **TypeScript strict mode** for type safety
- **ESLint configuration** for code consistency
- **Responsive design patterns** with Tailwind CSS
- **Component modularity** for maintainability

### Animation Architecture
- **Three.js background** for sophisticated 3D effects
- **Framer Motion** for scroll-triggered animations
- **CSS transforms** for hardware acceleration
- **Intersection Observer** for performance

## 📱 Browser Support

- **Chrome** 90+ ✅
- **Firefox** 88+ ✅  
- **Safari** 14+ ✅
- **Edge** 90+ ✅
- **Mobile browsers** ✅

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Next.js Team** for the amazing framework
- **Framer** for Motion animation library
- **Three.js Community** for 3D graphics capabilities
- **Tailwind CSS** for the utility-first approach
- **Vercel** for hosting and deployment platform

---

<div align="center">

**Built with ❤️ for the future of decentralized finance**

[Website](https://dany-capital.vercel.app) • [Contact](mailto:dany@danycapital.com)

</div>