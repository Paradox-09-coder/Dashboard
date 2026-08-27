const FEATURES = [
  {
    icon: "📊",
    title: "Real vaqt tahlil",
    desc: "Barcha kanallardan ma'lumot bitta ekranda. Yangilanish har 60 soniyada. Hech narsa o'tkazib yuborilmaydi.",
  },
  {
    icon: "✦",
    title: "AI hisobotlar",
    desc: "Savol yozing — AI hisob-kitob qilib, vizual grafik bilan birga javob beradi. Bir soniyada.",
  },
  {
    icon: "🔗",
    title: "30+ integratsiya",
    desc: "Facebook, Telegram, onlinePBX, amoCRM, Payme va boshqa tizimlar bilan to'liq ulangan.",
  },
  {
    icon: "🧩",
    title: "20+ tayyor modul",
    desc: "Savdo, ombor, moliya, marketing, HR — har biri alohida dashboard. O'zingizga keraklisini tanlang.",
  },
  {
    icon: "🔒",
    title: "Xavfsizlik",
    desc: "Ma'lumotlaringiz faqat sizniki. Har bir foydalanuvchi uchun alohida ruxsatlar va audit log.",
  },
  {
    icon: "⚡",
    title: "Tez o'rnatish",
    desc: "Biznesingizni o'rgandik — tayyor modulni 1 kunda sozlab beramiz. Qo'shimcha o'qitish kerak emas.",
  },
];

export function Features() {
  return (
    <section className="border-t border-[var(--border)] px-5 py-20 md:px-10">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-14 text-center">
          <p className="mb-2 text-[12px] font-semibold uppercase tracking-widest text-[var(--muted)]">
            Imkoniyatlar
          </p>
          <h2 className="font-[family-name:var(--font-jakarta)] text-[clamp(26px,3.5vw,40px)] font-extrabold tracking-tight text-[var(--foreground)]">
            Nima beradi?
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="rounded-[22px] border border-[var(--border)] bg-[var(--surface)] p-7 shadow-[0_2px_10px_rgba(17,17,17,0.04)] transition-all hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(17,17,17,0.08)]"
            >
              <div className="mb-5 grid h-12 w-12 place-items-center rounded-[13px] bg-[var(--lime-bg)] text-2xl">
                {f.icon}
              </div>
              <h3 className="mb-2.5 font-[family-name:var(--font-jakarta)] text-[17px] font-bold text-[var(--foreground)]">
                {f.title}
              </h3>
              <p className="text-[14.5px] leading-relaxed text-[var(--muted)]">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
