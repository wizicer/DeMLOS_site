# DeML OS - Decentralized Machine Learning Operating System

A research-oriented website for exploring and comparing decentralized machine learning systems.

## Overview

DeML OS is an open, research-oriented effort to define the system layer for decentralized machine learning. This website serves as a central hub for:

- **Project Comparisons**: Structured evaluation of DeML projects across consistent dimensions
- **Research Notes**: High-signal research log tracking developments in the field
- **Community Resources**: Information and links for joining the DeML research community

## Tech Stack

- **Framework**: [Astro](https://astro.build/) - Static site generation with islands architecture
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **Icons**: [Lucide](https://lucide.dev/) - Beautiful, consistent icons
- **Language**: TypeScript

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
demlos_site/
├── public/              # Static assets
│   ├── favicon.svg
│   └── grid.svg
├── src/
│   ├── components/      # Reusable Astro components
│   │   ├── Header.astro
│   │   └── Footer.astro
│   ├── data/            # Data files
│   │   ├── projects.ts  # Project information
│   │   └── research-notes.ts  # Research notes
│   ├── layouts/         # Page layouts
│   │   └── BaseLayout.astro
│   ├── pages/           # File-based routing
│   │   ├── index.astro
│   │   ├── about.astro
│   │   ├── projects/
│   │   │   ├── index.astro
│   │   │   └── [slug].astro
│   │   └── research/
│   │       ├── index.astro
│   │       └── [slug].astro
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

## Features

### Projects Section
- Comparison table with key metrics
- Individual project detail pages
- Evaluation across dimensions:
  - Task types (inference, training, fine-tuning)
  - Verification mechanisms and trust models
  - Economic models and pricing
  - Governance and upgradeability
  - Network statistics

### Research Notes
- Organized by month
- Categorized by source type (paper, blog, release, discussion)
- Tagged by capability area
- Linked to related projects

### Design
- Responsive, mobile-first design
- Dark/light mode support
- Accessible navigation
- Modern UI with Tailwind CSS

## Contributing

Contributions are welcome! Please see our community channels for discussion:

- Telegram: @demlos
- Discord: discord.gg/demlos
- GitHub: github.com/demlos

## License

Open source - MIT License
