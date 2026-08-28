"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

function drawAreaChart(
  canvas: HTMLCanvasElement,
  data: number[],
  color: string
) {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  const w = canvas.offsetWidth;
  const h = canvas.offsetHeight;
  canvas.width = w * window.devicePixelRatio;
  canvas.height = h * window.devicePixelRatio;
  ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

  const max = Math.max(...data);
  const min = Math.min(...data) * 0.8;
  const pad = { t: 8, b: 4, l: 4, r: 4 };
  const cw = w - pad.l - pad.r;
  const ch = h - pad.t - pad.b;

  const pts = data.map((v, i) => ({
    x: pad.l + (i / (data.length - 1)) * cw,
    y: pad.t + ch - ((v - min) / (max - min)) * ch,
  }));

  const grad = ctx.createLinearGradient(0, 0, 0, h);
  grad.addColorStop(0, color + "44");
  grad.addColorStop(1, color + "04");
  ctx.fillStyle = grad;
  ctx.beginPath();
  ctx.moveTo(pts[0].x, h);
  pts.forEach((p) => ctx.lineTo(p.x, p.y));
  ctx.lineTo(pts[pts.length - 1].x, h);
  ctx.closePath();
  ctx.fill();

  ctx.strokeStyle = color;
  ctx.lineWidth = 2;
  ctx.lineJoin = "round";
  ctx.beginPath();
  pts.forEach((p, i) => (i === 0 ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y)));
  ctx.stroke();

  const last = pts[pts.length - 1];
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(last.x, last.y, 3.5, 0, Math.PI * 2);
  ctx.fill();
}

export function Hero() {
  const chartRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (chartRef.current) {
      drawAreaChart(chartRef.current, [28, 35, 31, 42, 38, 44, 39, 47], "#c9e830");
    }
  }, []);

  const stats = [
    { label: "Tushum", value: "47.2M", delta: "▲ 18%", up: true },
    { label: "Lidlar", value: "312", delta: "▲ 24%", up: true },
    { label: "Sifat %", value: "68%", delta: "▲ 3%", up: true },
    { label: "Qo'ng'iroq", value: "1847", delta: "▼ 5%", up: false },
  ];

  const leads = [
    { name: "Ahmadov Jasur", src: "Facebook", status: "Yangi", color: "#3b82f6" },
    { name: "Sultanova N.", src: "Instagram", status: "Jarayon", color: "#f59e0b" },
    { name: "Karimov B.", src: "Telegram", status: "Yutildi", color: "#22c55e" },
    { name: "Mirzayev T.", src: "onlinePBX", status: "Yangi", color: "#3b82f6" },
  ];

  const statusStyle: Record<string, string> = {
    Yangi: "bg-blue-100 text-blue-700",
    Jarayon: "bg-amber-100 text-amber-700",
    Yutildi: "bg-green-100 text-green-700",
  };

  return (
    <section className="mx-auto max-w-[1200px] px-5 pb-20 pt-16 md:px-10">
      <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.1fr]">
        {/* LEFT: Text */}
        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[rgba(201,232,48,0.25)] bg-[var(--lime-bg)] px-3.5 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--lime)]" />
            <span className="text-[12.5px] font-medium text-[var(--lime-text)]">
              20+ modul · 30+ integratsiya
            </span>
          </div>

          <h1 className="mb-4 font-[family-name:var(--font-jakarta)] text-[clamp(36px,5vw,60px)] font-extrabold leading-[1.08] tracking-[-0.025em] text-[var(--foreground)]">
            Barcha biznes
            <br />
            ko&apos;rsatkichlari
            <br />
            <span className="relative inline-block">
              bitta ekranda
              <span className="absolute bottom-[3px] left-[-2px] right-[-2px] -z-10 h-[10px] rounded-[3px] bg-[var(--lime)]" />
            </span>
          </h1>

          <p className="mb-8 max-w-[420px] text-[17px] leading-relaxed text-[var(--muted)]">
            Savdo, marketing, telefoniya, moliya — hammasi real vaqtda. AI yordamchi savolga bir soniyada javob beradi.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="#demo"
              className="rounded-full bg-[var(--lime)] px-7 py-3.5 text-[15px] font-semibold text-black transition-opacity hover:opacity-85"
            >
              Bepul demo so&apos;rash
            </Link>
            <Link
              href="#modullar"
              className="flex items-center gap-1.5 text-[15px] font-medium text-[var(--foreground)] transition-opacity hover:opacity-60"
            >
              Modullarni ko&apos;rish →
            </Link>
          </div>

          <div className="mt-10 flex items-center gap-3">
            <div className="flex">
              {["AJ", "SN", "KB", "MT"].map((i, idx) => (
                <div
                  key={i}
                  className="grid h-8 w-8 place-items-center rounded-full border-2 border-[var(--background)] bg-[var(--lime)] text-[10px] font-bold text-black"
                  style={{ marginLeft: idx > 0 ? "-8px" : "0" }}
                >
                  {i}
                </div>
              ))}
            </div>
            <span className="text-[13px] text-[var(--muted)]">
              150+ kompaniya ishlatmoqda
            </span>
          </div>
        </div>

        {/* RIGHT: Dashboard Mockup */}
        <div>
          <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[0_24px_64px_rgba(17,17,17,0.12)]">
            {/* Browser bar */}
            <div className="flex h-9 items-center gap-1.5 border-b border-[var(--border)] bg-[var(--surface-2)] px-3.5">
              <div className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
              <div className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
              <div className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
              <div className="mx-auto rounded-md border border-[var(--border)] bg-[var(--background)] px-3 py-0.5 font-[family-name:var(--font-dm-mono)] text-[10.5px] text-[var(--muted)]">
                app.data365.uz/dashboard
              </div>
            </div>

            {/* Dashboard body */}
            <div className="flex" style={{ height: 380 }}>
              {/* Sidebar — desktop only */}
              <div className="hidden sm:flex w-12 flex-shrink-0 flex-col items-center gap-1.5 border-r border-[var(--border)] bg-[var(--surface-2)] px-0 py-3">
                <div className="mb-2 grid h-7 w-7 place-items-center rounded-[7px] bg-[var(--lime)] text-[11px] font-black text-black">
                  D
                </div>
                {["◉", "⊞", "≡", "$", "⚙"].map((ic, i) => (
                  <div
                    key={i}
                    className={`grid h-8 w-8 place-items-center rounded-lg text-sm transition-colors ${
                      i === 0
                        ? "bg-[var(--lime)] text-black"
                        : "text-[var(--muted)] hover:bg-[var(--border)]"
                    } ${i === 4 ? "mt-auto" : ""}`}
                  >
                    {ic}
                  </div>
                ))}
              </div>

              {/* Main area */}
              <div className="flex flex-1 flex-col gap-2 overflow-hidden p-3">
                {/* Topbar */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    {/* Mobile logo */}
                    <div className="sm:hidden grid h-6 w-6 place-items-center rounded-[6px] bg-[var(--lime)] text-[10px] font-black text-black">
                      D
                    </div>
                    <span className="font-[family-name:var(--font-jakarta)] text-[13px] font-bold text-[var(--foreground)]">
                      Bosh sahifa
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="hidden xs:inline rounded-full border border-[var(--border)] bg-[var(--background)] px-2.5 py-0.5 text-[9px] text-[var(--muted)]">
                      Noyabr 2025
                    </span>
                    <div className="grid h-6 w-6 place-items-center rounded-full bg-[var(--lime)] text-[8px] font-bold text-black">
                      AJ
                    </div>
                  </div>
                </div>

                {/* Stats — 2 cols on mobile, 4 on desktop */}
                <div className="grid grid-cols-2 gap-1.5 sm:grid-cols-4">
                  {stats.map((s) => (
                    <div
                      key={s.label}
                      className="rounded-[9px] border border-[var(--border)] bg-[var(--background)] p-2"
                    >
                      <div className="text-[7.5px] font-semibold uppercase tracking-wider text-[var(--muted)]">
                        {s.label}
                      </div>
                      <div className="mt-0.5 font-[family-name:var(--font-dm-mono)] text-[14px] font-bold leading-tight text-[var(--foreground)]">
                        {s.value}
                      </div>
                      <div
                        className={`mt-0.5 text-[7.5px] font-semibold ${
                          s.up ? "text-[var(--green)]" : "text-[var(--red)]"
                        }`}
                      >
                        {s.delta}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bottom grid */}
                <div className="grid flex-1 grid-cols-1 gap-2 overflow-hidden sm:grid-cols-[1.3fr_1fr]">
                  {/* Chart */}
                  <div className="flex flex-col gap-1.5 overflow-hidden rounded-[9px] border border-[var(--border)] bg-[var(--background)] p-2.5">
                    <div className="text-[7.5px] font-semibold uppercase tracking-wider text-[var(--muted)]">
                      Haftalik tushum
                    </div>
                    <canvas ref={chartRef} className="min-h-0 flex-1 w-full" />
                  </div>

                  {/* Leads — desktop only */}
                  <div className="hidden sm:flex flex-col gap-2 overflow-hidden rounded-[9px] border border-[var(--border)] bg-[var(--background)] p-2.5">
                    <div className="text-[7.5px] font-semibold uppercase tracking-wider text-[var(--muted)]">
                      So&apos;nggi lidlar
                    </div>
                    {leads.map((l) => (
                      <div key={l.name} className="flex items-center gap-1.5">
                        <div
                          className="h-1.5 w-1.5 flex-shrink-0 rounded-full"
                          style={{ background: l.color }}
                        />
                        <div className="min-w-0 flex-1">
                          <div className="truncate text-[9px] font-semibold text-[var(--foreground)]">
                            {l.name}
                          </div>
                          <div className="text-[7.5px] text-[var(--muted)]">{l.src}</div>
                        </div>
                        <span className={`flex-shrink-0 rounded-full px-1.5 py-0.5 text-[7px] font-semibold ${statusStyle[l.status]}`}>
                          {l.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* AI Panel — desktop only */}
              <div className="hidden md:flex w-36 flex-shrink-0 flex-col gap-2 border-l border-[var(--border)] bg-[var(--surface)] p-3">
                <div className="flex items-center gap-1.5">
                  <div className="h-2 w-2 rounded-full bg-[var(--lime)]" />
                  <span className="font-[family-name:var(--font-jakarta)] text-[10px] font-bold text-[var(--foreground)]">
                    AI Tahlil
                  </span>
                </div>
                {["Bu oyda foyda?", "Sifatsiz lidlar?", "Eng yaxshi kanal?"].map(
                  (q) => (
                    <div
                      key={q}
                      className="cursor-pointer rounded-[7px] border border-[rgba(201,232,48,0.2)] bg-[var(--lime-bg)] px-2 py-1.5 text-[9px] text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
                    >
                      {q}
                    </div>
                  )
                )}
                <div className="flex-1 rounded-[7px] border border-[var(--border)] bg-[var(--surface-2)] p-2 text-[8.5px] leading-relaxed text-[var(--muted)]">
                  <span className="text-[var(--lime)]">✦ </span>
                  Noyabrda savdo 47.2M so&apos;m — oktabrga +18%. Eng ko&apos;p lid Facebook (34%).
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
