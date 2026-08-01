# 🚀 DevStudio — Premium Web Developer Portfolio 2026

Website portfolio premium dengan kualitas setara Awwwards, dibangun dengan HTML5, CSS3, Tailwind CSS, dan Vanilla JavaScript.

---

## ✨ Fitur Utama

### Desain & UX
- **Premium Loading Screen** — Progress bar animasi dengan fade-out halus
- **Custom Cursor** — Dot + circle cursor dengan smooth lag effect
- **Dark Mode** — Toggle dengan localStorage persistence
- **Glassmorphism** — Navbar, hero card, testimonial
- **Responsive** — Mobile-first, optimal di semua device

### Animasi
- Scroll Reveal (Intersection Observer)
- Count-up animation pada statistik
- Skill progress bar animation
- Card tilt effect (3D transform)
- Mouse parallax pada hero
- Floating shapes animation
- Animated gradient heading
- Ripple button effect
- Testimonial auto-slider
- FAQ accordion animasi halus
- Animated underline pada nav links
- Hamburger menu animasi

### Sections
1. **Loading Screen** — Logo + progress bar + fade out
2. **Navbar** — Sticky, blur, dark toggle, hamburger mobile
3. **Hero** — Full screen, dual column, mockup browser, floating tags
4. **Stats** — Count-up animation, 4 statistik
5. **About** — Avatar, timeline, skill bars, badges
6. **Tech Stack** — 10 teknologi dengan hover card
7. **Services** — 9 layanan dengan card premium
8. **Workflow** — 6 tahap proses kerja
9. **Portfolio** — Grid masonry, filter kategori, 6 project
10. **Why Me** — 6 card keunggulan
11. **Testimonials** — Auto-slider, 6 testimonial
12. **FAQ** — 8 pertanyaan accordion
13. **CTA** — Gradient background premium
14. **Contact** — 5 channel (Instagram, WhatsApp, GitHub, LinkedIn, Email)
15. **Footer** — Copyright, back-to-top

---

## 🗂️ Struktur Folder

```
my_portfolio/
│
├── index.html          # Main HTML file
├── css/
│   └── style.css       # Custom CSS (1100+ baris)
├── js/
│   └── script.js       # Vanilla JavaScript (370+ baris)
├── assets/
│   ├── images/         # Gambar project (tambahkan sendiri)
│   ├── icons/          # Icon tambahan (opsional)
│   └── favicon/        # Favicon files
└── README.md           # Dokumentasi ini
```

---

## 🎨 Color Palette

| Token       | Value                   |
|-------------|-------------------------|
| Primary     | `#0d9468`               |
| Hover       | `#0f766e`               |
| Accent      | `#14b8a6`               |
| BG Light    | `#ffffff`               |
| BG Dark     | `#020617`               |
| Card Light  | `#ffffff`               |
| Card Dark   | `#111827`               |
| Border      | `rgba(255,255,255,.08)` |
| Text Light  | `#0f172a`               |
| Text Dark   | `#f8fafc`               |

---

## 🔤 Typography

| Penggunaan | Font           |
|------------|----------------|
| Heading    | Space Grotesk  |
| Body       | Inter          |

---

## ⚡ Teknologi

- **HTML5** — Semantic markup, SEO meta tags, JSON-LD
- **CSS3** — Custom properties, animations, glassmorphism
- **Tailwind CSS** — CDN v3, utility classes
- **Vanilla JavaScript** — Pure JS, zero dependencies

---

## 🔧 Cara Kustomisasi

### 1. Ganti Identitas
Cari dan ganti teks berikut di `index.html`:
- `DevStudio` → nama Anda
- `hello@devstudio.dev` → email Anda
- `@devstudio` → username sosmed Anda
- `+62 812-3456-7890` → nomor WA Anda

### 2. Ganti Warna Utama
Di `css/style.css`, ubah nilai di `:root`:
```css
--primary: #0d9468;      /* Warna utama */
--accent:  #14b8a6;      /* Warna aksen */
```

### 3. Tambah Project Portfolio
Di `index.html`, duplikat element `.portfolio-card` dan ubah:
- Thumbnail background gradient
- Kategori (`data-category`)
- Judul & deskripsi
- Tag teknologi

### 4. Update Testimonial
Ubah konten dalam `.testimonial-card` sesuai testimoni nyata dari klien Anda.

### 5. Update Statistik
Ubah nilai `data-count` pada elemen statistik:
```html
<div class="stat-number" data-count="50" data-suffix="+">
```

---

## 🌐 SEO

File sudah dilengkapi dengan:
- `<title>` dan `<meta description>`
- Open Graph tags (Facebook/LinkedIn)
- Twitter Card tags
- Canonical URL
- JSON-LD structured data (Person schema)
- Semantic HTML5 (header, main, section, footer, nav)
- Alt text pada semua gambar
- ARIA labels pada elemen interaktif

---

## ♿ Aksesibilitas

- Keyboard navigation support
- Focus states yang visible
- ARIA labels & roles
- Color contrast AA compliant
- `prefers-color-scheme` support

---

## 📱 Breakpoints Responsif

| Device   | Breakpoint  |
|----------|-------------|
| Desktop  | > 1024px    |
| Tablet   | 768–1024px  |
| Mobile   | < 768px     |
| Small    | < 480px     |

---

## 🛠️ Performance

- Intersection Observer untuk scroll reveal (tidak memblok main thread)
- Debounce pada scroll & resize events
- CSS transitions (GPU accelerated)
- Google Fonts dengan `display=swap`
- Tidak ada library JS eksternal

---

## 📄 Lisensi

MIT License — Bebas digunakan dan dikembangkan.

---

**Dibuat dengan ❤️ oleh DevStudio — 2026**
