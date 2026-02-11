# 🌸 Orchids - Futuristic 3D Portfolio

<div align="center">
  <p>A premium 3D portfolio website featuring a minimal futuristic aesthetic with cinematic visuals and interactive elements.</p>
  
  ![Next.js](https://img.shields.io/badge/Next.js-16.1.5-black)
  ![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-blue)
  ![Three.js](https://img.shields.io/badge/Three.js-0.182.0-000000)
  ![License](https://img.shields.io/badge/license-MIT-green)
</div>

---

## ✨ Features

### 🎨 Visual Design
- **Minimal Futuristic Theme** - Charcoal black (#121212) base with soft neon blue/violet (#00f2ff) accents
- **Glassmorphism UI** - Modern frosted glass effect components with subtle transparency
- **3D Interactive Elements** - Powered by Three.js and React Three Fiber
- **Smooth Animations** - Fluid transitions using Framer Motion
- **Cinematic Aesthetics** - Matte surfaces with studio lighting and depth perspective

### 🚀 Technical Features
- **Server-Side Rendering** - Built with Next.js 15 App Router
- **Type Safety** - Full TypeScript implementation
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Performance Optimized** - Turbopack dev server for faster development
- **Modern React** - React 19 with latest hooks and patterns

### 📦 Core Components
- **3D Scenes** - Interactive 3D portfolio displays
- **Skill Badges** - 3D-styled skill visualization
- **Project Showcases** - Floating glass screens for project thumbnails
- **Contact Integration** - Multiple social platform links
- **Educational Timeline** - Clean experience and education display

---

## 🛠️ Tech Stack

### Frontend Framework
- **[Next.js 16.1.5](https://nextjs.org/)** - React framework with App Router
- **[React 19](https://react.dev/)** - UI library
- **[TypeScript 5.9.3](https://www.typescriptlang.org/)** - Type safety

### 3D Graphics & Animation
- **[Three.js 0.182.0](https://threejs.org/)** - 3D graphics library
- **[@react-three/fiber](https://docs.pmnd.rs/react-three-fiber/)** - React renderer for Three.js
- **[@react-three/drei](https://github.com/pmndrs/drei)** - Useful helpers for React Three Fiber
- **[Framer Motion 12](https://www.framer.com/motion/)** - Animation library

### Styling & UI
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Radix UI](https://www.radix-ui.com/)** - Accessible component primitives
- **[Lucide React](https://lucide.dev/)** - Icon library
- **[class-variance-authority](https://cva.style/)** - Component variants

### Additional Libraries
- **three-globe** - 3D globe visualization
- **react-fast-marquee** - Smooth scrolling marquee
- **embla-carousel** - Touch-friendly carousels
- **simplex-noise** - Noise generation for effects
- **sonner** - Toast notifications

---

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** 20.x or higher
- **npm** or **yarn** or **bun** package manager
- **Git** for version control

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/skmohammadali786/orchids-futuristic-3d-portfolio.git
cd orchids-futuristic-3d-portfolio
```

### 2. Install Dependencies

```bash
# Using npm
npm install

# Using yarn
yarn install

# Using bun
bun install
```

### 3. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

The page will auto-update as you edit files. Turbopack is enabled for faster hot module replacement.

---

## 📜 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Starts the development server with Turbopack |
| `npm run build` | Creates an optimized production build |
| `npm run start` | Runs the production server |
| `npm run lint` | Runs ESLint to check code quality |

---

## 📁 Project Structure

```
orchids-futuristic-3d-portfolio/
├── public/                    # Static assets
│   ├── globe.svg
│   ├── window.svg
│   └── ...
├── src/
│   ├── app/                   # Next.js App Router pages
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Home page
│   │   └── globals.css        # Global styles
│   ├── components/
│   │   ├── 3d/                # 3D components
│   │   │   ├── Scene.tsx
│   │   │   └── SceneComponents.tsx
│   │   └── ui/                # UI components
│   │       ├── GlassComponents.tsx
│   │       ├── Cards.tsx
│   │       └── ...
│   ├── hooks/                 # Custom React hooks
│   ├── lib/
│   │   ├── data/              # Portfolio data
│   │   │   └── portfolio.ts
│   │   └── utils/             # Utility functions
│   └── visual-edits/          # Visual editing tools
├── .gitignore
├── components.json            # Radix UI config
├── eslint.config.mjs          # ESLint configuration
├── next.config.ts             # Next.js configuration
├── netlify.toml               # Netlify deployment config
├── package.json               # Dependencies
├── postcss.config.mjs         # PostCSS configuration
├── tailwind.config.js         # Tailwind CSS configuration
└── tsconfig.json              # TypeScript configuration
```

---

## 🎨 Customization

### Update Portfolio Data

Edit the portfolio information in `src/lib/data/portfolio.ts`:

```typescript
export const portfolioData = {
  name: "Your Name",
  title: "Your Title",
  summary: "Your summary...",
  // ... more fields
};
```

### Modify Theme Colors

The color scheme is defined in Tailwind CSS configuration with custom theme values:
- **Base**: Charcoal black (#121212)
- **Accent**: Soft neon blue/violet (#00f2ff)

Customize these in your Tailwind configuration or CSS variables.

### Add New Components

Follow the existing patterns:
- **3D Components**: Place in `src/components/3d/`
- **UI Components**: Place in `src/components/ui/`
- Use glassmorphism style with proper backdrop filters

---

## 🌐 Deployment

### Netlify (Recommended)

This project is configured for Netlify deployment:

1. Push your code to GitHub
2. Import project in Netlify
3. Netlify will auto-detect Next.js and use the configuration in `netlify.toml`

### Vercel

Deploy easily to Vercel:

```bash
npm install -g vercel
vercel
```

### Other Platforms

Build the production version:

```bash
npm run build
```

Then serve the `.next` directory with a Node.js server.

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### Code Style Guidelines
- Follow existing code patterns
- Use TypeScript for type safety
- Maintain glassmorphism and minimal futuristic aesthetic
- Keep 3D elements optimized for performance
- No harsh contrast in lighting
- Clean, abstract designs for visual elements

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👤 Author

**SK Mohammad Ali**

- Engineering Student (B.Tech Electrical Engineering)
- Full-Stack Developer

### Connect with me:

- 📧 Email: [skmohammadaliofficail@gmail.com](mailto:skmohammadaliofficail@gmail.com)
- 💼 LinkedIn: [SK Mohammad Ali](https://www.linkedin.com/in/skmohammadali)
- 🐙 GitHub: [@skmohammadali786](https://github.com/skmohammadali786)
- 📸 Instagram: [@skmohammadali_](https://www.instagram.com/skmohammadali_)
- 🐦 Twitter: [@Skmohammadali_](https://x.com/Skmohammadali_)
- 📘 Facebook: [SK Mohammad Ali](https://www.facebook.com/share/17nMRusRwv/)

---

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) team for the amazing framework
- [Vercel](https://vercel.com/) for hosting solutions
- [Three.js](https://threejs.org/) community for 3D graphics tools
- [Radix UI](https://www.radix-ui.com/) for accessible components
- All open-source contributors who made this project possible

---

## 📊 Project Status

🚧 **Active Development** - This portfolio is continuously being updated with new features and improvements.

### Upcoming Features
- [ ] Blog section with MDX support
- [ ] Dark/Light theme toggle
- [ ] More interactive 3D elements
- [ ] Case studies for projects
- [ ] Performance optimizations

---

<div align="center">
  <p>Made with ❤️ by SK Mohammad Ali</p>
  <p>⭐ Star this repo if you like it!</p>
</div>
