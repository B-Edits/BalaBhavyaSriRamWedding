@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Great+Vibes&family=Lato:wght@300;400;700&display=swap');

:root {
  --burgundy: #641f35;
  --deep-wine: #3b1225;
  --rose-gold: #c58e80;
  --blush: #e8c6bd;
  --ivory: #fff8f0;
  --gold: #b89555;
  --black: #231618;
  --soft-peach: #f7e7df;
  --shadow: rgba(62, 15, 29, 0.18);
  --separator: rgba(197, 142, 128, 0.55);
  --font-heading: 'Cormorant Garamond', serif;
  --font-body: 'Lato', sans-serif;
  --font-script: 'Great Vibes', cursive;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: var(--font-body);
  background:
    radial-gradient(circle at top, rgba(197, 142, 128, 0.12), transparent 38%),
    linear-gradient(180deg, #fffaf7 0%, #f9f1ec 100%);
  color: var(--deep-wine);
  overflow-x: hidden;
}

* {
  box-sizing: border-box;
}

a {
  color: inherit;
  text-decoration: none;
}

img {
  max-width: 100%;
  display: block;
}

button,
input,
textarea,
select {
  font: inherit;
}

.page-shell {
  min-height: 100vh;
  position: relative;
}

.site-content {
  opacity: 0;
  visibility: hidden;
  transform: translateY(22px);
  transition: opacity 0.8s ease, transform 0.8s ease, visibility 0.8s ease;
}

.site-content.visible {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.section-shell {
  position: relative;
  padding: 4.5rem 1.25rem;
}

.section-inner {
  max-width: 1200px;
  margin: 0 auto;
}

.ornament {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin: 0 auto 2rem;
  color: var(--gold);
}

.ornament::before,
.ornament::after {
  content: '';
  width: 120px;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--gold), transparent);
}

.ornament span {
  font-size: 2.2rem;
  line-height: 1;
  font-family: var(--font-script);
}

.section-head {
  text-align: center;
  margin-bottom: 2rem;
}

.section-kicker {
  font-size: 0.8rem;
  letter-spacing: 0.24rem;
  text-transform: uppercase;
  color: var(--rose-gold);
  margin-bottom: 0.7rem;
}

.section-title {
  font-family: var(--font-heading);
  font-size: clamp(2.3rem, 4vw, 4.2rem);
  line-height: 0.95;
  margin: 0;
  color: var(--burgundy);
  text-transform: capitalize;
}

.section-subtitle {
  font-size: 1.05rem;
  line-height: 1.8;
  color: rgba(59, 18, 37, 0.8);
  max-width: 720px;
  margin: 1rem auto 0;
}

.grid {
  display: grid;
  gap: 1.5rem;
}

.card {
  background: rgba(255, 248, 240, 0.9);
  border: 1px solid rgba(197, 142, 128, 0.35);
  box-shadow: 0 18px 45px rgba(100, 31, 53, 0.09);
  border-radius: 28px;
}

.muted {
  color: rgba(59, 18, 37, 0.78);
}

@media (min-width: 768px) {
  .section-shell {
    padding: 6rem 2rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }

  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
