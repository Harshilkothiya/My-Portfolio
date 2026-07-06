# AI/ML Engineer Portfolio

A modern, fast, and responsive portfolio designed for an AI/ML Engineer. Rebuilt from the ground up using **React**, **Vite**, and **Framer Motion**, focusing on a clean light theme and data-driven component architecture.

## Tech Stack

- **Framework**: React (Bootstrapped with Vite for instant server start and lightning-fast HMR)
- **Styling**: Vanilla CSS (Global tokens, component-level scoping)
- **Animations**: Framer Motion (Optimized for `prefers-reduced-motion`)
- **Icons**: Lucide React
- **Asset Optimization**: WebP image conversion for performance

## Architecture

This portfolio separates content from presentation:
- **`src/data/`**: Contains all textual and link data (Projects, Experience, Skills, Publications, Certifications)
- **`src/Components/`**: Reusable React components that map over the data schemas

This architecture ensures that updating the portfolio content (like adding a new project or certification) requires zero component logic changes.

## Running Locally

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the Vite dev server:
   ```bash
   npm run dev
   ```

## Design Decisions
- **AI/ML Focus**: The entire design language, from the typography (`JetBrains Mono` for tech tags, `Sora` for headings) to the project schemas (tech-stack arrays, live demos), is engineered to appeal to technical reviewers looking for AI/ML talent.
- **Performance**: Swapped CRA for Vite, stripped out heavy animation libraries, and replaced CDN-based Flaticons with bundled SVGs via Lucide React. Lighthouse scores are optimized.
