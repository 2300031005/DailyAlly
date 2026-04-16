# DailyAlly 🏡

DailyAlly is a modern, responsive, and performance-optimized landing page for a trusted home services platform. Designed with trust, clarity, and conversion in mind, the platform connects homeowners with background-checked professionals for plumbing, electrical work, deep cleaning, and more.

## ✨ Features

- **Trust-Driven Design**: Sections strategically placed to build credibility, including live stats, transparent guarantees, and real customer testimonials.
- **Scroll Reveal Animations**: Smooth, staggered `IntersectionObserver` based animations that create a delightful, premium user experience.
- **Custom CSS System**: Built purely with Vanilla CSS utilizing a robust CSS variable system (Design Tokens) to manage responsive layouts, typography, and theming.
- **Micro-Interactions**: Hover states, smooth card lifts, drop caps, and SVG transitions crafted meticulously to keep the interface feeling responsive and alive.
- **Fully Responsive**: Fluid typography layers and CSS Grid layouts that adapt perfectly across desktop, tablet, and mobile breakpoints.

## 🛠 Tech Stack

- **Framework**: [React](https://reactjs.org/) (v18)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Styling**: Vanilla CSS (BEM naming logic with a global token system)

## 📂 Project Structure

```
dailyally/
├── src/
│   ├── components/             # Reusable UI sections
│   │   ├── CTABanner/          # Bottom call-to-action block
│   │   ├── FAQ/                # Sticky sidebar FAQ accordion
│   │   ├── Footer/             # Standardized website footer
│   │   ├── Hero/               # Main top fold with image & stats
│   │   ├── HowItWorks/         # Scroll-animated step connector
│   │   ├── Navbar/             # Responsive top sticky navigation
│   │   ├── Services/           # Grid layout of available services
│   │   ├── Testimonials/       # Staggered review cards
│   │   └── TrustSignals/       # Quick visual trust reassurances
│   ├── hooks/                  # Custom React hooks
│   │   └── useScrollReveal.js  # Global intersection observer logic
│   ├── App.jsx                 # Main component assembler
│   ├── main.jsx                # React Entry point
│   └── index.css               # Global constants, resets, and typography
├── index.html                  # HTML template
├── package.json                # Project dependencies and custom scripts
└── vite.config.js              # Vite bundler configuration
```

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites
Make sure you have Node.js (v16.0.0 or later) and npm installed.

### Installation

1. **Install NPM packages**
   Navigate to the project root and run:
   ```bash
   npm install
   ```

2. **Start the development server**
   ```bash
   npm run dev
   ```

3. **Open the browser**
   The application will be running locally at `http://localhost:5173`. 

### Build for Production
To generate a highly optimized production build, run:
```bash
npm run build
```
Vite will bundle the React application into the `dist/` folder, ready for deployment.

## 🎨 Design System

DailyAlly uses a centralized styling system (`src/index.css`) powered by CSS Custom Properties:
- `var(--primary-*)`: The signature green palette representing trust and growth.
- `var(--neutral-*)`: Specialized greys for shadows, borders, text contrast.
- Spacing & Radius scales (`--space-4`, `--radius-lg`) to enforce a clean, consistent geometric rhythm.

## 📝 License

Distributed under the MIT License. See `LICENSE` for more information.
