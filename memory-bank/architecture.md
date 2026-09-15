# Architecture

- `server.py` is the only application source file currently present.
- Flask listens on `0.0.0.0:3000` with debug mode enabled and disables file caching for development.
- `GET /` runs `app.py` when that file exists; otherwise it serves `index.html`, or returns a fallback 404-style HTML response when neither exists.
- `GET /<path:path>` serves files from the repository root and falls back to `<path>/index.html` for directory-style routes.
- No frontend files, package manifest, dependency lockfile, tests, or build configuration are currently present.

## Planned Dashboard Structure

- **Top block — Outcomes:** KPI cards grouped by volume, revenue, engagement, retention, performance, satisfaction, and efficiency. Examples include sales/sign-ups/active users, revenue/MRR/average selling price, engagement/conversion rates, churn/completion, total conversions/CTR, NPS/CSAT, and cost per outcome/margin/lead time.
- **Middle block — Drivers:** Widgets explaining outcomes through funnel conversion by stage, platform performance, lead quality (qualified-lead ratio, attendance, pass rate), product performance, publishing activity, and platform engagement (likes, comments, shares, saves).
- **Bottom block — Operations:** Responsive products, platforms, and campaigns tables; anomaly alerts; and filterable lists for top products, top platforms, top campaigns, and improvement opportunities.
- Data will initially be stable, hardcoded sample data rendered by vanilla JavaScript; no API or backend data contract is planned for the first version.
