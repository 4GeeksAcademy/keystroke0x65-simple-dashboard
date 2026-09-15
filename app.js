const el = (s) => document.querySelector(s);
let data;
const tone = (s) =>
  ["Healthy", "Strong", "On track", "top"].includes(s)
    ? "bg-emerald-50 text-emerald-700"
    : ["Review", "Watch", "watch"].includes(s)
      ? "bg-amber-50 text-amber-700"
      : ["—"].includes(s)
        ? "bg-slate-100 text-slate-500"
        : "bg-violet-50 text-[#6d5ce7]";
async function loadDashboardData() {
  const r = await fetch("memory-bank/sample-data/dashboard.json");
  if (!r.ok) throw Error(`Could not load sample data (${r.status})`);
  return r.json();
}
function renderKpis() {
  el("#kpi-grid").innerHTML = data.kpis
    .map(
      (i) =>
        `<article class="card border-l-4 ${i.border} p-5 transition hover:-translate-y-0.5 hover:shadow-md" aria-labelledby="kpi-${i.category.toLowerCase()}"><div class="flex items-start justify-between"><h3 id="kpi-${i.category.toLowerCase()}" class="text-xs font-bold uppercase tracking-wider text-slate-500">${i.category}</h3><span class="grid size-7 place-items-center rounded-lg ${i.iconBg} text-sm font-bold ${i.iconColor}">${i.icon}</span></div><dl class="mt-5 grid gap-3">${i.metrics.map((metric) => `<div class="flex items-baseline justify-between gap-3 border-b border-slate-100 pb-2 last:border-0 last:pb-0"><dt class="text-xs text-slate-500">${metric.label}</dt><dd class="text-right"><strong class="block text-lg tracking-[-.04em]">${metric.value}</strong><small class="block text-[10px] font-bold ${metric.change.startsWith("-") ? "text-red-500" : "text-emerald-600"}">${metric.change}</small></dd></div>`).join("")}</dl></article>`,
    )
    .join("");
}
function renderDrivers() {
  el("#driver-grid").innerHTML = data.drivers
    .map(
      (d) =>
        `<article class="card min-h-[178px] p-5 transition hover:-translate-y-0.5 hover:shadow-md"><div class="flex items-start justify-between gap-3"><div><span class="text-[10px] font-extrabold uppercase tracking-widest text-[#6d5ce7]">${d.label}</span><h3 class="mt-1 text-[15px] tracking-tight">${d.title}</h3></div></div><div class="mt-4 grid gap-2">${d.metrics.map((metric) => `<div class="flex items-center justify-between gap-3 border-b border-slate-100 pb-2 last:border-0 last:pb-0"><span class="text-[11px] text-slate-500">${metric.label}</span><strong class="text-sm tracking-tight">${metric.value}</strong></div>`).join("")}</div><p class="mt-3 text-[11px] text-slate-500">${d.detail}</p></article>`,
    )
    .join("");
}
function rowHtml(row) {
  return `<tr class="transition hover:bg-slate-50">${row
    .slice(0, -2)
    .map(
      (c, i) =>
        `<td class="border-t border-slate-100 px-2.5 py-3 text-slate-600 ${i === 0 ? "font-semibold text-slate-800" : ""}">${c}</td>`,
    )
    .join(
      "",
    )}<td class="border-t border-slate-100 px-5 py-3"><span class="status ${tone(row.at(-1))}">${row.at(-2)}</span></td></tr>`;
}
function renderTable(type, filter = "all") {
  const rows = data.tables[type].filter(
    (r) =>
      filter === "all" ||
      (type === "campaigns" ? r.at(-2) === "Review" : r.at(-1) === "top"),
  );
  el(`#${type}-table`).innerHTML = rows.map(rowHtml).join("");
}
function renderAlerts() {
  el("#alerts-list").innerHTML = data.alerts
    .map(
      (a) =>
        `<li class="flex gap-2.5 rounded-lg bg-slate-50 p-2.5"><span class="text-[10px] font-extrabold uppercase ${a.tone === "critical" ? "text-red-600" : a.tone === "warning" ? "text-amber-700" : "text-emerald-700"}">${a.severity}</span><div><strong class="block text-xs">${a.title}</strong><p class="mt-0.5 text-[11px] text-slate-500">${a.text}</p></div></li>`,
    )
    .join("");
}
function renderPriorities(filter = "all") {
  const items = data.priorities.filter(
    (i) => filter === "all" || i.type === filter,
  );
  el("#priority-list").innerHTML = items
    .map(
      (i, n) =>
        `<li class="flex items-center gap-2.5 rounded-lg border border-slate-100 p-3"><span class="text-[11px] font-extrabold text-slate-400">0${n + 1}</span><div class="min-w-0 flex-1"><strong class="block truncate text-xs">${i.title}</strong><small class="mt-0.5 block text-[11px] text-slate-500">${i.metric}</small></div><span class="status whitespace-nowrap ${i.type === "improve" ? "bg-amber-50 text-amber-700" : "bg-emerald-50 text-emerald-700"}">${i.tag}</span></li>`,
    )
    .join("");
}
loadDashboardData()
  .then((d) => {
    data = d;
    renderKpis();
    renderDrivers();
    renderAlerts();
    renderPriorities();
    ["products", "platforms", "campaigns"].forEach((t) => renderTable(t));
    document
      .querySelectorAll("[data-table-filter]")
      .forEach((c) =>
        c.addEventListener("change", (e) =>
          renderTable(e.target.dataset.tableFilter, e.target.value),
        ),
      );
    el("#priority-filter").addEventListener("change", (e) =>
      renderPriorities(e.target.value),
    );
    el("#date-range").addEventListener("change", (e) => {
      el("main").classList.toggle(
        "opacity-70",
        e.target.value !== "Last 30 days",
      );
      e.target.title =
        "Sample data is currently available for the last 30 days";
    });
    el("#export-report").addEventListener("click", (e) => {
      e.currentTarget.textContent = "Report ready ✓";
      e.currentTarget.classList.replace("bg-slate-950", "bg-emerald-600");
      setTimeout(() => {
        e.currentTarget.textContent = "Export report";
        e.currentTarget.classList.replace("bg-emerald-600", "bg-slate-950");
      }, 1800);
    });
  })
  .catch((e) => {
    console.error(e);
    el("main").insertAdjacentHTML(
      "afterbegin",
      '<p role="alert" class="mb-6 rounded-lg bg-red-50 p-4 text-sm text-red-700">Sample data could not be loaded. Run <code>python3 server.py</code>.</p>',
    );
  });
