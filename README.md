# Dany Capital

Halaman landing modal ventura yang canggih dengan fokus pada investasi mata uang kripto dan blockchain. Dibangun dengan Next.js 15, TypeScript, dan teknologi web modern.

![Dany Capital](https://img.shields.io/badge/Dany-Capital-blue?style=for-the-badge)
![Next.js](https://img.shields.io/badge/Next.js-15.5.3-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=for-the-badge&logo=tailwind-css)

## 🚀 Ringkasan

Dany Capital adalah situs web modal ventura yang modern dan elegan yang mengkhususkan diri dalam investasi mata uang kripto dan blockchain. Situs ini menampilkan desain yang bersih dan profesional dengan animasi canggih dan fokus pada Bitcoin serta teknologi blockchain.

### 🎯 Filosofi Investasi
*"Bitcoin adalah emas digital. Blockchain adalah masa depan."*

## ✨ Fitur

### 🎨 Desain & UI/UX
- **Glassmorphism Modern**: Efek blur latar belakang yang canggih
- **Tipografi Elegan**: Font Google Sans Code dengan keterbacaan optimal
- **Skema Warna Profesional**: Desain putih-di-hitam yang bersih
- **Desain Responsif**: Dioptimalkan untuk semua perangkat termasuk iPhone 12 Pro
- **Desain Statis**: Tanpa animasi hover yang mengganggu, fokus pada konten

### 🌟 Animasi Canggih
- **Latar Belakang Three.js**: Sistem partikel 3D dan elemen geometris yang canggih
- **Framer Motion**: Animasi scroll yang halus
- **Efek Parallax**: Pergerakan latar belakang yang elegan saat scroll
- **Efek Ripple**: Lingkaran konsentris yang indah di bagian hero

### 📱 Keunggulan Responsif
- **Mobile-First**: Dioptimalkan untuk iPhone 12 Pro (lebar 390px)
- **Siap Tablet**: Skalabilitas sempurna untuk iPad dan perangkat serupa
- **Dioptimalkan Desktop**: Pemanfaatan penuh layar besar
- **Lintas Browser**: Kompatibel dengan semua browser modern

### 🔧 Fitur Teknis
- **Next.js 15**: App Router terbaru dengan TypeScript
- **Dioptimalkan Performa**: Animasi yang dipercepat perangkat keras
- **Siap SEO**: Metadata komprehensif dan data terstruktur
- **Aksesibilitas**: Desain kontras tinggi dan scrolling halus

## 🏗️ Teknologi yang Digunakan

### Framework Inti
- **Next.js 15.5.3** - Framework React dengan App Router
- **TypeScript** - Pengembangan yang aman tipe
- **React 19** - Fitur React terbaru

### Styling & Animasi
- **Tailwind CSS** - Framework CSS utility-first
- **Framer Motion** - Animasi dan transisi canggih
- **Three.js** - Grafik 3D dan sistem partikel
- **React Three Fiber** - Renderer React untuk Three.js
- **React Three Drei** - Helper berguna untuk Three.js

### Tipografi & Ikon
- **Google Fonts** - Google Sans Code untuk tipografi profesional
- **Lucide React** - Ikon yang indah dan konsisten

## 📦 Instalasi

### Prasyarat
- Node.js 18+ 
- npm atau yarn package manager

### Pengaturan
```bash
# Clone repositori
git clone https://github.com/yourusername/dany-capital.git

# Navigasi ke direktori proyek
cd dany-capital

# Instal dependensi
npm install

# Jalankan server pengembangan
npm run dev
```

### Script yang Tersedia
```bash
npm run dev        # Jalankan server pengembangan (webpack)
npm run dev:turbo  # Jalankan server pengembangan (turbopack)
npm run build      # Build untuk produksi (webpack)
npm run build:turbo # Build untuk produksi (turbopack)
npm run start      # Jalankan server produksi
npm run lint       # Jalankan ESLint
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