const STATS = [
  { number: "150+", label: "Faol mijoz" },
  { number: "20+", label: "Tayyor modul" },
  { number: "4.8", label: "Mijoz bahosi" },
  { number: "5+", label: "Yillik tajriba" },
];

export function Stats() {
  return (
    <section className="border-t border-[var(--border)] px-5 py-16 md:px-10">
      <div className="mx-auto max-w-[1200px]">
        <div
          className="grid overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--border)]"
          style={{ gridTemplateColumns: "repeat(4, 1fr)", gap: "1px" }}
        >
          {STATS.map((s) => (
            <div
              key={s.label}
              className="bg-[var(--surface)] px-8 py-8 text-center"
            >
              <div className="font-[family-name:var(--font-jakarta)] text-[42px] font-extrabold leading-none tracking-[-0.03em] text-[var(--foreground)]">
                {s.number}
              </div>
              <div className="mt-2 text-[14px] text-[var(--muted)]">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
