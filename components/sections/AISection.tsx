const EXAMPLES = [
  "Bu oyda savdo bo'limidan qancha tushum bo'ldi?",
  "Targetdan nechta sifatsiz lid keldi?",
  "Qaysi kanal eng arzon lid keltirmoqda?",
  "Oy davomida qo'ng'iroq statistikasi qanday?",
];

export function AISection() {
  return (
    <section className="bg-[#111] px-5 py-20 md:px-10">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left: Text */}
          <div>
            <p className="mb-3 text-[12px] font-semibold uppercase tracking-widest text-[rgba(237,236,234,0.4)]">
              AI Yordamchi
            </p>
            <h2 className="mb-4 font-[family-name:var(--font-jakarta)] text-[clamp(28px,4vw,44px)] font-extrabold leading-[1.1] tracking-tight text-[#edecea]">
              O&apos;ng tomonda
              <br />
              doim tayyor
            </h2>
            <p className="mb-8 max-w-[400px] text-[16px] leading-relaxed text-[rgba(237,236,234,0.58)]">
              Raqamlarni qidirish emas — savol bering. AI barcha integratsiyalardan ma&apos;lumot yig&apos;ib, bir soniyada hisob-kitob qilib javob beradi.
            </p>
            <div className="flex flex-col gap-3">
              {EXAMPLES.map((q) => (
                <div key={q} className="flex items-start gap-3 text-[14px] text-[rgba(237,236,234,0.5)]">
                  <div className="mt-0.5 grid h-5 w-5 flex-shrink-0 place-items-center rounded-full bg-[rgba(237,236,234,0.08)] text-[10px]">
                    ?
                  </div>
                  <span>&quot;{q}&quot;</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Chat demo */}
          <div className="overflow-hidden rounded-2xl border border-[rgba(237,236,234,0.07)] bg-[#1c1f13]">
            {/* Header */}
            <div className="flex items-center gap-2.5 border-b border-[rgba(237,236,234,0.06)] px-5 py-3.5">
              <div className="h-2 w-2 rounded-full bg-[var(--lime)] shadow-[0_0_6px_rgba(201,232,48,0.6)]" />
              <span className="font-[family-name:var(--font-jakarta)] text-[13px] font-semibold text-[#edecea]">
                AI Tahlil
              </span>
            </div>

            {/* Chat body */}
            <div className="flex flex-col gap-4 p-5">
              {/* User message */}
              <div className="flex justify-end">
                <div className="max-w-[80%] rounded-[14px_14px_3px_14px] border border-[rgba(237,236,234,0.06)] bg-[rgba(237,236,234,0.07)] px-4 py-2.5 text-[13.5px] text-[rgba(237,236,234,0.82)]">
                  Bu oyda qancha foyda topdim?
                </div>
              </div>

              {/* AI response */}
              <div className="flex items-start gap-3">
                <div className="mt-0.5 grid h-7 w-7 flex-shrink-0 place-items-center rounded-full bg-[var(--lime)] text-[12px]">
                  ✦
                </div>
                <div className="flex-1 rounded-[3px_14px_14px_14px] border border-[rgba(201,232,48,0.15)] bg-[rgba(201,232,48,0.07)] px-4 py-3">
                  <p className="mb-3 text-[13px] leading-relaxed text-[rgba(237,236,234,0.8)]">
                    Noyabrda umumiy tushum{" "}
                    <strong className="text-[#edecea]">47.2M so&apos;m</strong> — oktabrdan{" "}
                    <strong className="text-[var(--lime)]">+18% o&apos;sish</strong>. Xarajatlar
                    28.4M, sof foyda{" "}
                    <strong className="text-[var(--lime)]">18.8M so&apos;m</strong>.
                  </p>
                  <div className="flex gap-3">
                    {[
                      { label: "47.2M", sub: "Tushum" },
                      { label: "18.8M", sub: "Foyda" },
                      { label: "+18%", sub: "O'sish" },
                    ].map((s) => (
                      <div
                        key={s.sub}
                        className="rounded-lg border border-[rgba(201,232,48,0.18)] bg-[rgba(201,232,48,0.1)] px-3 py-2"
                      >
                        <div className="font-[family-name:var(--font-dm-mono)] text-[12px] font-bold text-[var(--lime)]">
                          {s.label}
                        </div>
                        <div className="mt-0.5 text-[9px] text-[rgba(237,236,234,0.4)]">
                          {s.sub}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Quick chips */}
            <div className="flex flex-wrap gap-2 border-t border-[rgba(237,236,234,0.05)] px-5 py-3.5">
              {["Bu hafta?", "Kanallar bo'yicha?", "Grafik ko'rsat", "Xarajatlar?"].map(
                (chip) => (
                  <button
                    key={chip}
                    className="rounded-lg border border-[rgba(237,236,234,0.07)] bg-[rgba(237,236,234,0.05)] px-3 py-1.5 text-[12px] text-[rgba(237,236,234,0.45)] transition-all hover:bg-[rgba(201,232,48,0.1)] hover:text-[var(--lime)]"
                  >
                    {chip}
                  </button>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
