:root {
  --bg: #f5efe8;
  --bg-strong: #e8dfd1;
  --panel: rgba(255, 255, 255, 0.7);
  --panel-strong: rgba(255, 255, 255, 0.9);
  --ink: #1e201d;
  --muted: #5c5c57;
  --soft: #8a7d71;
  --line: rgba(30, 32, 29, 0.08);
  --shadow: rgba(32, 28, 23, 0.12);
  --accent: #8f5d3d;
  --accent-soft: #d8b291;
  --sage: #5e7d6d;
  --rose: #c77e70;
  --gold: #d7b05d;
  --card-radius: 24px;
  --danger: #962b2b;
  --success: #1d6d45;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  min-height: 100vh;
  font-family: Inter, "Segoe UI", sans-serif;
  background:
    radial-gradient(circle at top left, rgba(216, 178, 145, 0.38), transparent 20%),
    radial-gradient(circle at bottom right, rgba(94, 125, 109, 0.18), transparent 18%),
    linear-gradient(135deg, var(--bg) 0%, #f9f6f1 38%, #f1e9df 100%);
  color: var(--ink);
}

button,
input {
  font: inherit;
}

button {
  cursor: pointer;
}

.hidden {
  display: none !important;
}

.page-shell {
  width: min(1200px, calc(100% - 32px));
  margin: 0 auto;
  padding: 28px 0 56px;
}

.topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 18px 20px;
  border: 1px solid var(--line);
  border-radius: 26px;
  background: rgba(255, 255, 255, 0.45);
  backdrop-filter: blur(10px);
  box-shadow: 0 18px 40px rgba(17, 17, 17, 0.04);
}

.brand-block {
  display: flex;
  align-items: center;
  gap: 14px;
}

.brand-mark {
  display: grid;
  place-items: center;
  width: 52px;
  height: 52px;
  border-radius: 16px;
  background: linear-gradient(135deg, var(--accent), var(--accent-soft));
  color: white;
  font-weight: 700;
  font-size: 1.5rem;
  box-shadow: 0 10px 22px rgba(143, 93, 61, 0.25);
}

.eyebrow {
  margin: 0 0 4px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--muted);
}

.eyebrow.accent {
  color: var(--accent);
}

h1,
h2,
h3,
h4,
p {
  margin-top: 0;
}

h1 {
  margin-bottom: 0;
  font-size: clamp(1.8rem, 2.4vw, 2.9rem);
  line-height: 1.05;
  letter-spacing: -0.06em;
  text-transform: uppercase;
}

.topbar-actions {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 12px;
  width: min(70%, 760px);
}

.user-actions {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
}

.nav-button,
.primary-button {
  border: 0;
  border-radius: 999px;
  padding: 10px 16px;
  background: var(--ink);
  color: white;
  font-weight: 600;
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.nav-button:hover,
.primary-button:hover {
  opacity: 0.96;
  transform: translateY(-1px);
}

.nav-button.ghost {
  background: rgba(30, 32, 29, 0.06);
  color: var(--ink);
}

.nav-button.danger {
  background: var(--danger);
}

.search-wrap {
  position: relative;
  width: 100%;
}

.search-wrap svg {
  position: absolute;
  left: 16px;
  top: 50%;
  width: 18px;
  height: 18px;
  transform: translateY(-50%);
  fill: var(--soft);
}

.search-wrap input {
  width: 100%;
  padding: 14px 18px 14px 48px;
  border: 1px solid var(--line);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.65);
  color: var(--ink);
  outline: none;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.search-wrap input:focus {
  border-color: rgba(143, 93, 61, 0.4);
  box-shadow: 0 0 0 4px rgba(143, 93, 61, 0.12);
}

.content {
  margin-top: 22px;
}

.hero {
  display: grid;
  grid-template-columns: 1.5fr 0.8fr;
  gap: 20px;
  padding: 24px;
  border: 1px solid var(--line);
  border-radius: 32px;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.46));
  box-shadow: 0 20px 40px rgba(29, 23, 16, 0.04);
}

.hero-copy {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.hero h2 {
  margin-bottom: 12px;
  font-size: clamp(2.2rem, 4vw, 4.2rem);
  line-height: 0.96;
  letter-spacing: -0.08em;
}

.hero-copy p:last-child {
  max-width: 60ch;
  color: var(--muted);
  font-size: 1.02rem;
  line-height: 1.7;
}

.hero-stats {
  display: grid;
  grid-template-columns: repeat(3, minmax(100px, 1fr));
  gap: 12px;
  align-items: center;
}

.hero-stats div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
  min-height: 130px;
  padding: 18px 16px;
  border: 1px solid var(--line);
  border-radius: 22px;
  background: rgba(255, 255, 255, 0.52);
  text-align: center;
}

.hero-stats strong {
  font-size: clamp(1.8rem, 2.8vw, 2.6rem);
  letter-spacing: -0.06em;
}

.hero-stats span {
  color: var(--muted);
  font-size: 0.76rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
}

.toolbar {
  display: flex;
  align-items: center;
  gap: 18px;
  margin-top: 20px;
  padding: 14px 18px;
  border: 1px solid var(--line);
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.42);
}

.toolbar-label {
  font-size: 0.8rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--muted);
}

.chip-row {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.chip {
  border: 1px solid var(--line);
  border-radius: 999px;
  background: transparent;
  color: var(--ink);
  padding: 8px 14px;
  font-size: 0.8rem;
  transition: all 0.2s ease;
}

.chip.active,
.chip:hover {
  background: var(--ink);
  color: white;
  border-color: var(--ink);
}

.results-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 18px;
  color: var(--muted);
}

.results-bar p {
  margin-bottom: 0;
  font-size: 0.88rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.panel-box {
  margin-top: 24px;
  padding: 20px;
  border: 1px solid var(--line);
  border-radius: 28px;
  background: rgba(255, 255, 255, 0.52);
  box-shadow: 0 18px 38px rgba(23, 20, 17, 0.03);
}

.panel-header {
  margin-bottom: 16px;
}

.panel-header h3 {
  margin-bottom: 0;
  font-size: 1.4rem;
  letter-spacing: -0.03em;
}

.auth-tabs {
  display: flex;
  gap: 8px;
  margin-bottom: 18px;
}

.auth-tab {
  border: 1px solid var(--line);
  border-radius: 999px;
  background: transparent;
  padding: 9px 14px;
  font-size: 0.8rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.auth-tab.active {
  background: var(--ink);
  color: white;
  border-color: var(--ink);
}

.auth-form,
.admin-form {
  display: none;
}

.auth-form.active,
.admin-form {
  display: block;
}

.auth-form,
.admin-form,
.profile-card {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

label {
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--ink);
}

input {
  border: 1px solid var(--line);
  border-radius: 14px;
  padding: 12px 14px;
  background: rgba(255, 255, 255, 0.9);
  color: var(--ink);
}

.status-text {
  min-height: 22px;
  margin: 16px 0 0;
  color: var(--muted);
}

.status-text.error {
  color: var(--danger);
}

.profile-card {
  background: rgba(255, 255, 255, 0.7);
  border: 1px solid var(--line);
  border-radius: 18px;
  padding: 16px;
}

.label {
  margin: 0 0 6px;
  color: var(--muted);
  font-size: 0.72rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.role-pill {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 6px 12px;
  border-radius: 999px;
  background: rgba(94, 125, 109, 0.12);
  color: var(--sage);
  font-weight: 700;
}

.role-pill.admin {
  background: rgba(143, 93, 61, 0.12);
  color: var(--accent);
}

.field-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(180px, 1fr));
  gap: 14px;
}

.book-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 20px;
  margin-top: 18px;
}

.book-card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 410px;
  padding: 18px 18px 16px;
  border: 1px solid var(--line);
  border-radius: var(--card-radius);
  background: rgba(255, 255, 255, 0.565);
  box-shadow: 0 20px 40px rgba(32, 28, 23, 0.05);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  overflow: hidden;
}

.book-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 22px 34px rgba(32, 28, 23, 0.08);
}

.book-cover {
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 18px;
  min-height: 220px;
  border-radius: 18px;
  color: white;
  overflow: hidden;
}

.book-cover::before,
.book-cover::after {
  content: "";
  position: absolute;
  inset: 0;
}

.book-cover::before {
  background: linear-gradient(180deg, rgba(255,255,255,0.14), rgba(17,17,17,0.2));
}

.book-cover::after {
  inset: auto 18px 16px 18px;
  height: 10px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.18);
  backdrop-filter: blur(4px);
}

.cover-meta {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-weight: 700;
}

.card-body {
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 10px;
  padding-top: 14px;
}

.card-body h3 {
  margin-bottom: 0;
  font-size: 1.35rem;
  letter-spacing: -0.05em;
}

.meta-row {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  color: var(--muted);
  font-size: 0.82rem;
}

.meta-row span {
  padding: 5px 8px;
  border-radius: 999px;
  background: rgba(94, 125, 109, 0.08);
}

.card-body p {
  margin-bottom: 0;
  color: var(--muted);
  line-height: 1.5;
}

.card-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-top: auto;
  padding-top: 14px;
}

.rating {
  font-weight: 700;
  color: var(--ink);
}

.links {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 8px;
}

.links a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 76px;
  padding: 8px 10px;
  border-radius: 999px;
  background: rgba(30, 32, 29, 0.06);
  color: var(--ink);
  text-decoration: none;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.04em;
}

.links a:hover {
  background: rgba(30, 32, 29, 0.1);
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

@media (max-width: 820px) {
  .topbar {
    flex-direction: column;
    align-items: stretch;
  }

  .topbar-actions {
    width: 100%;
  }

  .hero {
    grid-template-columns: 1fr;
  }

  .hero-stats,
  .field-grid {
    grid-template-columns: repeat(2, minmax(120px, 1fr));
  }
}

@media (max-width: 520px) {
  .page-shell {
    width: min(100% - 18px, 1200px);
    padding-top: 16px;
  }

  .topbar,
  .hero,
  .toolbar,
  .panel-box {
    padding-left: 14px;
    padding-right: 14px;
  }

  .hero-stats,
  .field-grid {
    grid-template-columns: 1fr;
  }

  .book-grid {
    grid-template-columns: 1fr;
  }
}
