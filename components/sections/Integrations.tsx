import Image from "next/image";

type LogoItem = {
  name: string;
  sub: string;
  img?: string;
  bg: string;
  svg?: React.ReactNode;
};

const GROUPS: { title: string; desc: string; items: LogoItem[] }[] = [
  {
    title: "Marketing kanallar",
    desc: "Lidlar va reklamalarni avtomatik torting",
    items: [
      { name: "Facebook Ads", sub: "Lead Ads, Reklama hisoboti", bg: "#1877F2", svg: (<svg viewBox="0 0 24 24" fill="white" width="22" height="22"><path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.099 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.099 24 12.073z"/></svg>) },
      { name: "Instagram", sub: "Lead formalar, Stories", bg: "linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)", svg: (<svg viewBox="0 0 24 24" fill="white" width="22" height="22"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>) },
      { name: "TikTok Ads", sub: "Lead Generation kampaniya", bg: "#010101", svg: (<svg viewBox="0 0 24 24" fill="white" width="22" height="22"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.29 8.29 0 004.83 1.56V6.79a4.85 4.85 0 01-1.06-.1z"/></svg>) },
      { name: "YouTube", sub: "Kanaldan lidlar", bg: "#FF0000", svg: (<svg viewBox="0 0 24 24" fill="white" width="22" height="22"><path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/></svg>) },
      { name: "Google Ads", sub: "Konversiya va remarketing", bg: "#4285F4", svg: (<svg viewBox="0 0 24 24" fill="white" width="22" height="22"><path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm.14 19.018c-3.868 0-7-3.14-7-7.018 0-3.878 3.132-7.018 7-7.018 1.89 0 3.47.697 4.682 1.829l-1.974 1.978v-.004c-.735-.702-1.667-1.062-2.708-1.062-2.31 0-4.187 1.956-4.187 4.273 0 2.315 1.877 4.277 4.187 4.277 2.096 0 3.522-1.202 3.816-2.852H12.14v-2.737h6.585c.088.47.135.96.135 1.474 0 4.01-2.677 6.86-6.72 6.86z"/></svg>) },
    ],
  },
  {
    title: "Messenjer & SMS",
    desc: "Xabarlarni kuzating va avtomatlashtiring",
    items: [
      { name: "Telegram", sub: "Bot, kanallar, guruhlar", bg: "#229ED9", svg: (<svg viewBox="0 0 24 24" fill="white" width="22" height="22"><path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0a12 12 0 00-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>) },
      { name: "WhatsApp", sub: "WhatsApp Business API", bg: "#25D366", svg: (<svg viewBox="0 0 24 24" fill="white" width="22" height="22"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>) },
      { name: "SMS", sub: "Bulk SMS, OTP xabarlar", bg: "#6B7280", svg: (<svg viewBox="0 0 24 24" fill="white" width="22" height="22"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/></svg>) },
    ],
  },
  {
    title: "IP-Telefoniya",
    desc: "Qo'ng'iroqlarni kuzating va yozib oling",
    items: [
      { name: "onlinePBX", sub: "Qo'ng'iroq tahlili, yozuvlar", bg: "#ffffff", img: "/logos/onlinepbx.png" },
      { name: "Hollihop", sub: "Virtual ATC, IVR", bg: "#ffffff", img: "/logos/hollihop.jpg" },
      { name: "pbx", sub: "IP-telefon integratsiyasi", bg: "#ffffff", img: "/logos/pbx.png" },
      { name: "Sipuni", sub: "ATC, statistika", bg: "#1a1a2e", svg: (<svg viewBox="0 0 100 40" fill="none" width="60" height="24"><circle cx="20" cy="15" r="9" fill="none" stroke="#e74c3c" strokeWidth="3"/><circle cx="38" cy="10" r="6" fill="none" stroke="#f39c12" strokeWidth="2.5"/><circle cx="52" cy="13" r="7" fill="none" stroke="#2ecc71" strokeWidth="2.5"/><circle cx="65" cy="8" r="5" fill="none" stroke="#3498db" strokeWidth="2.5"/><text x="50" y="36" textAnchor="middle" fontSize="14" fontWeight="bold" fontFamily="Georgia,serif" fill="white">Sipuni</text></svg>) },
    ],
  },
  {
    title: "CRM sistemalar",
    desc: "Mijozlar bazasi va sotuv voronkasi",
    items: [
      { name: "amoCRM", sub: "Lidlar, bitimlar, kontaktlar", bg: "#ffffff", img: "/logos/amocrm.png" },
      { name: "Bitrix24", sub: "CRM, vazifalar, chatlar", bg: "#ffffff", img: "/logos/bitrix24.webp" },
      { name: "Google Sheets", sub: "Jadval eksport, sinxronizatsiya", bg: "#34A853", svg: (<svg viewBox="0 0 24 24" fill="white" width="22" height="22"><path d="M19.7 3H14V1h-4v2H4.3C3 3 2 4 2 5.3v15.4C2 22 3 23 4.3 23h15.4c1.3 0 2.3-1 2.3-2.3V5.3C22 4 21 3 19.7 3zM7 17H5v-2h2v2zm0-4H5v-2h2v2zm0-4H5V7h2v2zm7 8H8v-2h6v2zm0-4H8v-2h6v2zm0-4H8V7h6v2zm5 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z"/></svg>) },
      { name: "1C", sub: "1C bilan sinxronizatsiya", bg: "#FF6B00", svg: (<svg viewBox="0 0 40 40" fill="white" width="28" height="28"><text x="50%" y="65%" textAnchor="middle" dominantBaseline="middle" fontSize="18" fontWeight="bold" fontFamily="Arial">1C</text></svg>) },
    ],
  },
  {
    title: "To'lov tizimlari",
    desc: "To'lovlarni kuzating va hisobot oling",
    items: [
      { name: "Payme", sub: "To'lov tarixini sinxronlash", bg: "#00AAFF", svg: (<svg viewBox="0 0 60 24" fill="white" width="52" height="22"><text x="50%" y="72%" textAnchor="middle" dominantBaseline="middle" fontSize="13" fontWeight="bold" fontFamily="Arial">PAYME</text></svg>) },
      { name: "Click", sub: "Click Merchant API", bg: "#1A3C6E", svg: (<svg viewBox="0 0 60 24" fill="white" width="52" height="22"><text x="50%" y="72%" textAnchor="middle" dominantBaseline="middle" fontSize="13" fontWeight="bold" fontFamily="Arial">CLICK</text></svg>) },
      { name: "Uzum", sub: "Uzum Merchant ulash", bg: "#8B5CF6", svg: (<svg viewBox="0 0 60 24" fill="white" width="52" height="22"><text x="50%" y="72%" textAnchor="middle" dominantBaseline="middle" fontSize="13" fontWeight="bold" fontFamily="Arial">UZUM</text></svg>) },
      { name: "Stripe", sub: "Xalqaro to'lovlar", bg: "#635BFF", svg: (<svg viewBox="0 0 24 24" fill="white" width="22" height="22"><path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.591-7.305z"/></svg>) },
    ],
  },
];

export function Integrations() {
  return (
    <section id="integratsiyalar" className="border-t border-[var(--border)] px-5 py-20 md:px-10">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-14 text-center">
          <p className="mb-2 text-[12px] font-semibold uppercase tracking-widest text-[var(--muted)]">
            Integratsiyalar
          </p>
          <h2 className="font-[family-name:var(--font-jakarta)] text-[clamp(26px,3.5vw,42px)] font-extrabold tracking-tight text-[var(--foreground)]">
            30+ tizim bilan ulaning
          </h2>
          <p className="mx-auto mt-3 max-w-[460px] text-[16px] leading-relaxed text-[var(--muted)]">
            Mavjud dasturlaringizni almashtirishingiz shart emas — ularni birlashtiring va bitta ekranda ko&apos;ring
          </p>
        </div>

        <div className="flex flex-col gap-10">
          {GROUPS.map((g) => (
            <div key={g.title}>
              <div className="mb-4 flex items-center gap-3">
                <h3 className="font-[family-name:var(--font-jakarta)] text-[15px] font-bold text-[var(--foreground)]">
                  {g.title}
                </h3>
                <div className="h-px flex-1 bg-[var(--border)]" />
                <span className="text-[12px] text-[var(--muted)]">{g.desc}</span>
              </div>
              <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                {g.items.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center gap-3 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4 shadow-[0_2px_8px_rgba(17,17,17,0.04)] transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(17,17,17,0.08)]"
                  >
                    <div
                      className="grid h-12 w-12 flex-shrink-0 place-items-center overflow-hidden rounded-[12px] border border-[var(--border)]"
                      style={{ background: item.bg }}
                    >
                      {item.img ? (
                        <Image
                          src={item.img}
                          alt={item.name}
                          width={48}
                          height={48}
                          className="h-full w-full object-contain p-1"
                          style={{ mixBlendMode: "multiply" }}
                        />
                      ) : (
                        item.svg
                      )}
                    </div>
                    <div className="min-w-0">
                      <div className="font-[family-name:var(--font-jakarta)] text-[13.5px] font-bold leading-tight text-[var(--foreground)]">
                        {item.name}
                      </div>
                      <div className="mt-0.5 truncate text-[11px] text-[var(--muted)]">
                        {item.sub}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
