# JobLink - O'zbekiston Ish Izlash Platformasi

JobLink - bu O'zbekistondagi eng zamonaviy ish izlash va ishchi topish platformasidir. React, modern CSS va responsive dizayn yordamida yaratilgan.

## 🚀 Xususiyatlar

### Umumiy
- **Responsive dizayn** - barcha qurilmalarda mukammal ishlaydi
- **Zamonaviy UI/UX** - foydalanuvchi uchun qulay interfeys
- **SVG Logo** - to'liq custom yaratilgan JobLink logotipi
- **Modern CSS** - Flexbox, Grid va CSS animations
- **Accessibility** - WCAG 2.1 AA standartlariga muvofiq

### Asosiy sahifalar
- **🏠 Bosh sahifa** - Hero section, kategoriyalar, statistika, testimonials
- **💼 Ish o'rinlari** - Filtrlar, qidiruv, job cards
- **🏢 Kompaniyalar** - Kompaniyalar katalogi
- **⚡ Mardikor Bazori** - Real-time ish va ishchi topish
- **💰 Narxlar** - Xizmat narxlari
- **📝 Blog** - Maqolalar va maslahatlar
- **❓ Yordam** - FAQ va qo'llab-quvvatlash

### Ish izlovchilar uchun
- **📊 Dashboard** - Faoliyat umumiy ko'rinishi
- **👤 Profil** - CV va shaxsiy ma'lumotlar
- **📋 Arizalar** - Yuborilgan arizalarni kuzatish
- **❤️ Saqlangan** - Yoqtirgan ish o'rinlari
- **💬 Xabarlar** - Ish beruvchilar bilan muloqot
- **🔔 Bildirishnomalar** - Yangiliklardan xabardor bo'lish
- **⚙️ Sozlamalar** - Akkaunt sozlamalari

### Ish beruvchilar uchun
- **📈 Dashboard** - Biznes analitika
- **🏢 Kompaniya** - Kompaniya profili boshqaruvi
- **📢 Ish e'lonlari** - E'lonlar yaratish va boshqarish
- **👥 Kandidatlar** - CV bazasida qidiruv
- **💬 Xabarlar** - Kandidatlar bilan aloqa
- **👨‍💼 Jamoa** - Foydalanuvchi rollari
- **💳 To'lovlar** - Obuna va hisob-fakturalar
- **📊 Analitika** - Batafsil statistika

## 🛠 Texnologiyalar

- **Frontend**: React 18+ (JSX)
- **Routing**: React Router v6
- **Styling**: Vanilla CSS (Custom)
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Development**: Hot Module Replacement

## 📁 Loyiha Tuzilishi

```
src/
├── components/           # Qayta ishlatish mumkin bo'lgan komponentlar
│   ├── JobLinkLogo.jsx  # Custom SVG logo komponenti
│   ├── Header.jsx       # Asosiy header
│   ├── Header.css
│   ├── Footer.jsx       # Footer komponenti
│   └── Footer.css
├── pages/               # Sahifa komponentlari
│   ├── Home.jsx         # Bosh sahifa
│   ├── Home.css
│   ├── Jobs.jsx         # Ish o'rinlari ro'yxati
│   ├── Jobs.css
│   ├── JobDetail.jsx    # Ish o'rni batafsil
│   ├── JobDetail.css
│   ├── Mardikor.jsx     # Mardikor bazori
│   ├── Mardikor.css
│   ├── user/           # Ish izlovchi sahifalari
│   │   ├── Dashboard.jsx
│   │   ├── Profile.jsx
│   │   └── ...
│   └── employer/       # Ish beruvchi sahifalari
│       ├── Dashboard.jsx
│       ├── JobNew.jsx
│       └── ...
├── App.jsx             # Asosiy App komponenti
├── App.css             # Global CSS stillar
├── index.css           # CSS reset va global stillar
└── main.jsx            # Entry point
```

## 🎨 Dizayn Tizimi

### Ranglar
- **Primary**: #3b82f6 (Blue)
- **Secondary**: #64748b (Slate)
- **Success**: #10b981 (Emerald)
- **Warning**: #f59e0b (Amber)
- **Error**: #ef4444 (Red)
- **Background**: #f8fafc (Gray-50)

### Komponentlar
- **Buttons**: Primary, Secondary, Outline
- **Cards**: Default, Featured, Hover effects
- **Forms**: Input fields, Selects, Checkboxes
- **Navigation**: Header, Breadcrumbs, Tabs
- **Feedback**: Badges, Alerts, Loading states

## 🚀 Ishga tushirish

1. **Loyihani klonlash**
```bash
git clone https://github.com/username/joblink-uzbekistan.git
cd joblink-uzbekistan
```

2. **Dependency-larni o'rnatish**
```bash
npm install
```

3. **Development serverini ishga tushirish**
```bash
npm run dev
```

4. **Production build yaratish**
```bash
npm run build
```

5. **Build-ni preview qilish**
```bash
npm run preview
```

## 📱 Responsive Dizayn

Loyiha to'liq responsive bo'lib, quyidagi breakpoint-larda ishlaydi:
- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px+

## 🔧 Custom Logo

JobLink logotipi SVG formatida to'liq custom yaratilgan:
- **Scalable** - istalgan o'lchamda sifat yo'qotilmaydi
- **Lightweight** - tez yuklanadi
- **Customizable** - rang va o'lchamini o'zgartirish mumkin
- **Professional** - zamonaviy va professional ko'rinish

## 📋 URL Tuzilishi

### Ommaviy sahifalar
- `/` - Bosh sahifa
- `/jobs` - Ish o'rinlari
- `/jobs/:slug` - Ish o'rni batafsil
- `/companies` - Kompaniyalar
- `/company/:slug` - Kompaniya profili
- `/mardikor` - Mardikor bazori
- `/pricing` - Narxlar
- `/blog` - Blog
- `/help` - Yordam

### Ish izlovchi dashboard
- `/u/dashboard` - Dashboard
- `/u/profile` - Profil
- `/u/applications` - Arizalar
- `/u/saved` - Saqlangan
- `/u/messages` - Xabarlar
- `/u/notifications` - Bildirishnomalar
- `/u/settings` - Sozlamalar

### Ish beruvchi dashboard
- `/e/dashboard` - Dashboard
- `/e/company` - Kompaniya profili
- `/e/jobs` - Ish e'lonlari
- `/e/jobs/new` - Yangi ish e'loni
- `/e/candidates` - Kandidatlar
- `/e/messages` - Xabarlar
- `/e/analytics` - Analitika

## 🎯 Kelajak Rejalari

- [ ] Backend API integratsiyasi
- [ ] Real-time messaging
- [ ] File upload funksiyasi
- [ ] Map integration (Yandex/Google Maps)
- [ ] Push notifications
- [ ] Mobile app (React Native)
- [ ] Multi-language support (O'zbek/Rus/Ingliz)
- [ ] Payment gateway integration
- [ ] Admin panel
- [ ] Advanced search filters
- [ ] AI-powered job matching

## 📄 Litsenziya

MIT License - batafsil ma'lumot uchun [LICENSE](LICENSE) faylini ko'ring.

## 🤝 Hissa Qo'shish

1. Fork qiling
2. Feature branch yarating (`git checkout -b feature/amazing-feature`)
3. O'zgarishlarni commit qiling (`git commit -m 'Add amazing feature'`)
4. Branch-ni push qiling (`git push origin feature/amazing-feature`)
5. Pull Request yarating

## 📞 Aloqa

**Email**: info@joblink.uz  
**Telegram**: @joblink_support  
**Website**: https://joblink.uz

---

**JobLink** - O'zbekistondagi eng zamonaviy ish izlash platformasi 🇺🇿+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
# 203_startup
