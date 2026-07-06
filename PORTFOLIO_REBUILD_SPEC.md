# Portfolio Rebuild — Build Spec for AI IDE Agent

**Target:** Rebuild `My-Portfolio` (React/CRA, repo: Harshilkothiya/My-Portfolio) as a light-themed, AI/ML-engineer-positioned portfolio. This file is a literal instruction set — an AI coding agent (Cursor, Claude Code, Windsurf) should be able to execute it top to bottom without further clarification.

**Identity to enforce everywhere:** "AI/ML Engineer" — not "Data Scientist," not "Full Stack Developer." Every section, tag, and project description should reinforce this single identity. Mixed identity signals are the #1 reason technical portfolios read as unfocused.

---

## 0. Non-negotiable fixes before any redesign work

These are bugs and security issues, not style choices. Fix first, in this order:

1. **Remove all PII from `About.jsx`**: delete the hardcoded phone number, exact street-level address ("Surat, India - 394107"), and age. Replace with city/state only ("Surat, Gujarat, India"). Keep email only if routed through a contact form, not printed as plain text.
2. **Fix the broken array in `Project.jsx`**: there is a stray `,` between the IPL project and the Hotel Booking project, creating an `undefined` array entry that breaks the grid render. Find and delete it.
3. **Add `rel="noopener noreferrer"`** to every `target="_blank"` anchor (currently missing on the Charusat link in `About.jsx`).
4. **Compress and convert all images in `src/assets`** to WebP, resized to actual display dimensions. Current folder is 8.2MB; target under 1MB total. Use `sharp` or `squoosh-cli` in a one-time build script, not a runtime dependency.
5. **Remove the forced auto-download on the Resume button.** Either open in a new tab OR trigger download — not both with a 1-second delayed second action.

---

## 1. Design system (light theme — replace dark/black entirely)

No black backgrounds, no `#000` sections, no neon-on-dark hacker aesthetic. Use a clean, light, technical-but-warm palette:

```css
:root {
  /* Base */
  --bg-primary: #FAFAF8;        /* warm off-white, not pure white */
  --bg-secondary: #F2F1ED;      /* section alternation */
  --bg-card: #FFFFFF;

  /* Text */
  --text-primary: #1A1A2E;      /* near-black navy, not pure black */
  --text-secondary: #5A5A6E;
  --text-muted: #8A8A9A;

  /* Accent — AI/tech feel without going neon-dark-mode */
  --accent-primary: #4F46E5;    /* indigo */
  --accent-secondary: #0EA5A4;  /* teal */
  --accent-warm: #F59E0B;       /* amber, used sparingly for CTAs */

  /* Borders / dividers */
  --border-light: #E5E4E0;

  /* Shadows — soft, not heavy */
  --shadow-sm: 0 1px 3px rgba(26,26,46,0.06);
  --shadow-md: 0 4px 16px rgba(26,26,46,0.08);
}
```

**Typography:**
- Headings: `Sora` or `Space Grotesk` (geometric, technical, modern — signals product/engineering taste)
- Body: `Inter`
- Code/tags/skill-pills: `JetBrains Mono` — small but deliberate touch that reads as "I write code daily," appropriate for an AI engineer's portfolio
- Scale: 14/16/20/28/40/56px, 1.5 line-height for body, 1.2 for headings

**Animation principles (replace AOS with Framer Motion):**
- Motion should be subtle and purposeful: fade + 8–12px translate on scroll-in, 0.4–0.6s ease-out, staggered by 60–80ms per child. No bounce, no spin, no parallax tricks.
- Hover states: scale 1.02 + shadow lift on project cards, color transition on links (200ms).
- Page load: hero text staggers in once, not on every scroll re-entry (current `once: false` in AOS config causes re-trigger spam on scroll up/down — change to `once: true`).
- Respect `prefers-reduced-motion` — disable non-essential animation for users who request it. This is a real accessibility requirement, not optional polish.

---

## 2. Recommended stack changes

| Current | Replace with | Why |
|---|---|---|
| Create React App | Vite | CRA is deprecated/unmaintained; Vite is the standard now and shows current tooling awareness |
| AOS | Framer Motion | Finer animation control, better React integration, more impressive to a technical reviewer who checks your `package.json` |
| Plain CSS files per component | Tailwind CSS or CSS Modules (keep current modular structure if not adopting Tailwind) | Either is fine — just keep it consistent. Plain global-ish CSS per component is fine if scoped well; the actual issue was never your CSS approach |
| Flaticon CDN icons in Skills | `lucide-react` or `react-icons` (bundled, no external CDN dependency) | External CDN icon loading is a needless runtime dependency and point of failure |
| Render.com free tier | Keep, or move to Vercel/Netlify for faster static hosting | CRA→Vite output is fully static; Vercel/Netlify free tier has no cold-start penalty, unlike Render free tier |

---

## 3. New site structure (section order, with rationale)

Replace the current order (`About → Skills → Education → Project → Exp → Contact`) with:

```
1. Navbar (sticky, light, with active-section highlight)
2. Hero / About — identity, one-line value prop, CTA buttons
3. Experience — real work first, separated from competitions
4. Projects — your strongest section, gets prime real estate
5. Publications — NEW
6. Certifications — NEW
7. Skills — categorized, not icon soup
8. Education — supporting info, not lead info
9. Contact
10. Footer
```

**Rationale:** proof of work (Experience, Projects) must come before supporting credentials (Education, Skills list). Right now your site makes a recruiter scroll past coursework before they see what you've built — that's backwards for anyone past their first internship.

---

## 4. Component-by-component changes

### `Navbar/`
- Light background, subtle bottom border instead of dark bar.
- Add scroll-spy active-link highlighting (use `react-scroll` or IntersectionObserver, not manual scroll math).

### `About/` (rename conceptually to "Hero")
- Tag: `AI/ML Engineer` (not "Data Scientist").
- One-line value prop under the name, specific not generic — e.g., describing your actual focus (multi-agent RAG systems, LLM tool-calling, production AI pipelines) rather than "I enjoy learning new things and improving my skills." Specificity is what separates a hireable bio from a template bio.
- Remove phone/exact address per Section 0.
- Keep Resume + Hire Me CTAs, fix the double-action bug.

### `Experience/`
- **Split into two sections or two visually distinct subsections**: "Professional Experience" and "Competitions & Hackathons." Do not list a hackathon under the same visual weight as a job.
- For the "Self Employed, Data Scientist" entry: replace vague filler ("implementing cutting-edge ML solutions to solve complex business problems") with one or two concrete, specific things — a system you built, a measurable outcome, a stack. If there's nothing concrete to put here yet, it's more credible to shorten this entry than pad it.

### `Project/`
- Fix the array bug (Section 0).
- Reorder so technically strongest projects (SmartDocs-AI, RUL prediction) lead.
- Either cut the tutorial-pattern projects (Bangalore Home Price Prediction, IPL Win Probability, Sports Celebrity Classification) or rewrite descriptions to show what's original beyond the tutorial: your dataset, your feature engineering, your deployment, an actual metric (accuracy, latency, RMSE — whatever's true).
- Add a live-demo link field where one exists, not just GitHub. A reviewer clicking through 8 GitHub links with no live demos is a worse experience than 4 projects with working demos.
- Add a tech-stack tag row per project card (e.g., `PyTorch`, `LangChain`, `Qdrant`) — this is what an AI-engineer reviewer scans for first.

### `Publications/` — **NEW component**
Create `src/Components/Publications/Publications.jsx` + `.css`.

Schema per entry:
```js
{
  title: "",
  venue: "",        // conference/journal/blog/arXiv
  date: "",
  authors: "",       // optional, only if co-authored
  link: "",          // DOI, arXiv link, or hosted blog post
  summary: ""        // 1–2 sentences, plain language
}
```
If you don't have formal publications yet, this section can house technical blog posts, arXiv preprints, or detailed write-ups of your own projects (e.g., a deep-dive on your multi-agent architecture). That's legitimate content for this section and common practice — don't leave it empty or fake an entry.

### `Certifications/` — **NEW component**
Create `src/Components/Certifications/Certifications.jsx` + `.css`.

Schema per entry:
```js
{
  name: "",
  issuer: "",
  date: "",
  credentialLink: "",   // verifiable link — required, not optional
  logo: ""               // issuer logo, optimized SVG/WebP
}
```
Only include certifications with a verifiable credential link. An unverifiable cert listed by name only reads as filler to anyone screening technical candidates.

### `Skills/`
- **Remove the flat icon-soup list and the external Flaticon CDN dependency.**
- Recategorize into groups, ordered by relevance to your target role:
  1. **AI/ML & LLM Systems** — PyTorch/TensorFlow/scikit-learn, LangChain, RAG, vector databases (Qdrant), MCP/tool-calling, model evaluation
  2. **Languages** — Python, JavaScript, C++, etc.
  3. **Data & Infra** — Pandas/NumPy, SQL, Docker, whatever's actually true
  4. **Web Dev** — React, Node.js, MongoDB (kept, but demoted — it's not your core positioning)
- Move LeetCode/CodeChef/GFG stats to a smaller secondary card, not equal billing with your core skill categories — competitive programming stats are a minor signal for an AI engineering role, not a primary one.

### `Education/`
- Keep but demote in page order (see Section 3).

### `Contact/`
- Keep the Formspree form, keep light styling consistent with the rest of the page.

### `Footer/`
- Light theme, simple, social links (GitHub/LinkedIn) with proper `aria-label`s.

---

## 5. File-level remove / add list

**Remove:**
- `src/Components/Skills/` icon dependency on `cdn-icons-png.flaticon.com` (replace with bundled icon library)
- Hardcoded PII block in `About.jsx`
- Stray `,` bug in `Project.jsx` projects array
- `aos` and `aos/dist/aos.css` imports across all components (replaced by Framer Motion)
- Any unused CRA boilerplate: `src/logo.svg`, `src/App.test.js`, `src/reportWebVitals.js` if not actually wired to anything

**Add:**
- `src/Components/Publications/Publications.jsx`
- `src/Components/Publications/Publications.css`
- `src/Components/Certifications/Certifications.jsx`
- `src/Components/Certifications/Certifications.css`
- `src/theme.css` or `tailwind.config.js` (design tokens from Section 1)
- `src/data/projects.js`, `src/data/experience.js`, `src/data/publications.js`, `src/data/certifications.js`, `src/data/skills.js` — **move all content out of components into data files.** Right now content is hardcoded inline in JSX across every component; separating data from presentation makes the whole site editable without touching component logic, and is itself a basic engineering practice signal for anyone reading your code.
- `public/og-image.png` — a proper Open Graph preview image (currently missing/default), so the link looks intentional when shared on LinkedIn/Twitter
- `README.md` rewrite — current README is generic CRA boilerplate language ("responsive, fast, and modern—designed to make a strong professional impression"); replace with a real project README: what it is, tech stack, screenshot, link, and a short note on the architecture decisions (data-driven components, etc.) — this README is itself something a technical reviewer will read.

---

## 6. Step-by-step build instructions (for the AI IDE agent)

1. Scaffold a new Vite + React project; port over existing component folder structure.
2. Install: `framer-motion`, `lucide-react`, `react-scroll`, (optional) `tailwindcss`.
3. Implement `theme.css` / Tailwind config with tokens from Section 1. No `#000`/`#111`-range backgrounds anywhere.
4. Move all hardcoded content (projects, experience, skills) into `src/data/*.js` files per Section 5.
5. Build `Publications` and `Certifications` components per the schemas in Section 4, consuming their respective data files.
6. Reorder `App.js` to match Section 3's section order.
7. Replace every `AOS.init` / `data-aos` usage with Framer Motion `motion.div` + `whileInView` variants, respecting `prefers-reduced-motion`.
8. Run all images in `src/assets` through a WebP conversion + resize script; update imports.
9. Fix the array bug in the projects data file.
10. Strip PII from the hero/about data.
11. Add `rel="noopener noreferrer"` to all external links; audit with a quick grep for `target="_blank"`.
12. Add semantic HTML (`<main>`, `<section aria-label="...">`, proper heading hierarchy h1→h2→h3) and alt text on every image — current `alt=""` on the hero image should be a real description.
13. Run Lighthouse (Performance, Accessibility, SEO) and fix anything under 90.
14. Update `README.md` per Section 5.
15. Deploy; verify OG image renders correctly when the link is shared.

---

## 7. Definition of done

- No black/dark backgrounds anywhere; light theme throughout.
- Publications and Certifications sections live, populated with real (or honestly-empty-with-a-note) content.
- Zero PII printed in source.
- Zero console errors/warnings on load.
- Lighthouse Performance ≥ 90, Accessibility ≥ 95.
- Every project card shows a tech-stack tag row.
- Tag everywhere reads "AI/ML Engineer," consistently.
