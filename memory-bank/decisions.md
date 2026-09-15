# Key Decisions

- **Tailwind CDN is the primary styling tool:** No custom CSS for layout — Tailwind utility classes drive all styling. Minimal `styles.css` only for chart CSS if needed.
- **Mobile-first design:** All layout starts single-column and expands at `sm:`, `md:`, `lg:` breakpoints.
- **Three-block layout:** Top = KPI cards, Middle = driver widgets, Bottom = operational tables/lists. Clear visual hierarchy.
- **Reusable components:** Consistent card pattern for KPIs and drivers — same base styling, differentiated by content.
- **Semantic HTML:** Use `<header>`, `<nav>`, `<main>`, `<section>`, `<table>`, `<figure>` landmarks.
- **Sample data:** Hardcoded JavaScript arrays/objects — no API calls needed.
- **Chart CSS possible:** Simple bar/sparkline charts via CSS if needed (no chart JS libraries).
- **Consistency:** Same spacing, card patterns, table styling reused across all three blocks.
- **Outcome-first information hierarchy:** The top block answers what happened, the middle block explains why it happened, and the bottom block supports operational follow-up.
- **Metric coverage:** The first dashboard scope includes outcome indicators for volume, revenue, engagement, retention, performance, satisfaction, and efficiency, plus drivers and operational entities for products, platforms, and campaigns.
- **Operational monitoring:** Alerts must call out sharp conversion drops, conversion spikes, and other performance anomalies; ranked lists must support filters for prioritization.
