# Design System

## Color Palette

| Token | Value | Usage |
| ----- | ----- | ----- |

## Color Palette (Tailwind defaults)

- **Dashboard background:** `bg-gray-50` / `bg-gray-100`
- **Cards & widgets:** `bg-white` with `shadow-sm` / `shadow-md`
- **Headers:** `bg-gray-800` or `bg-indigo-600` with white text
- **KPI accent colors:** `text-indigo-600`, `text-green-600`, `text-amber-600`, `text-blue-600`
- **Negative indicators:** `text-red-600`
- **Border/divider:** `border-gray-200`
- **Text hierarchy:** `text-gray-900` (headings), `text-gray-600` (body), `text-gray-400` (muted)

## Typography (Tailwind defaults)

- **Font family:** Tailwind default sans (system font stack)
- **Scale:** `text-xs` (tables), `text-sm` (labels/meta), `text-base` (body), `text-lg` (card titles), `text-2xl/3xl` (KPI values), `text-xl/2xl` (section titles)
- **Font weight:** `font-semibold` (KPI values, headings), `font-medium` (card titles), `font-normal` (body)

## Layout & Breakpoints

- **Mobile (<640px):** Single column — stacked cards, full-width tables with horizontal scroll
- **Tablet (640-1023px):** 2-column grid for KPIs (first card full-width or 2-col), drivers 2-col
- **Desktop (≥1024px):** 3-column grid for KPIs, 3-col for drivers, full-width tables

## Spacing

- **Page padding:** `p-4` (mobile), `sm:p-6`, `lg:p-8`
- **Card padding:** `p-4` or `p-5`
- **Gap between cards:** `gap-4` (mobile), `sm:gap-5`, `lg:gap-6`
- **Section spacing:** `mb-6` or `mb-8` between blocks

## Components

### KPI Card

- `bg-white rounded-lg shadow-sm p-4 border-l-4`
- Accent border on left (`border-indigo-500` etc.)
- Icon + label + large value + small change indicator

### Driver Widget

- Same base as KPI card (`bg-white rounded-lg shadow-sm p-4`)
- Label + value + simple horizontal/vertical bar chart or sparkline
- Sub-metrics list below

### Data Table

- Full-width responsive table with `overflow-x-auto` wrapper
- `table-auto w-full text-sm`
- `thead bg-gray-50` with `text-gray-600 uppercase tracking-wider`
- Striped or hover rows (`hover:bg-gray-50`)
- Pattern: date, description, amount, status columns

### Dashboard Sections

- **Outcome KPI cards:** Group related metrics by category and show a clear value, label, and directional/change context.
- **Driver widgets:** Pair a driver metric with a simple CSS visualization and supporting sub-metrics; organize by funnel, platform, quality, product, activity, and engagement.
- **Operational tables:** Use responsive table wrappers and concise status/metric columns for products, platforms, and campaigns.
- **Alerts and ranked lists:** Use visible severity states for conversion/performance anomalies and filter controls for top-performing or improvement-focused lists.

### Navbar/Header

- `bg-gray-800 text-white` or `bg-indigo-600 text-white`
- Logo/title left, optional badge right
- Fixed or sticky top
