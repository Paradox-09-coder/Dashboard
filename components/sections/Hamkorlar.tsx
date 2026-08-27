"use client";
import { useState } from "react";

const BASE = "https://www.data365.uz/mijozlar-logo/";

const CATEGORIES = [
  { key: "barchasi", label: "Barchasi" },
  { key: "talim", label: "Ta'lim", count: 32 },
  { key: "savdo", label: "Savdo", count: 38 },
  { key: "tur", label: "Tur firma", count: 5 },
  { key: "xizmat", label: "Xizmat", count: 9 },
  { key: "boshqa", label: "Boshqalar", count: 7 },
];

type Client = { name: string; src: string; cat: string };

const CLIENTS: Client[] = [
  // Ta'lim
  { name: "Najot Ta'lim", src: BASE + "Ta'lim/Najot_Talim.svg", cat: "talim" },
  { name: "mohirdev", src: BASE + "Ta'lim/mohirdev.svg", cat: "talim" },
  { name: "Shayx Muhammad Sodiq", src: BASE + "Ta'lim/Shayx%20Muhammad%20Sodiq%20Akademiyasi.svg", cat: "talim" },
  { name: "My Life Planner", src: BASE + "Ta'lim/My%20Life%20Planner.svg", cat: "talim" },
  { name: "Mfaktor Biznes Maktabi", src: BASE + "Ta'lim/Mfaktor%20Biznes%20Maktabi.svg", cat: "talim" },
  { name: "Singapore Intl School", src: BASE + "Ta'lim/Singapore%20International%20School.svg", cat: "talim" },
  { name: "Japan Digital University", src: BASE + "Ta'lim/Japan%20Digital%20University.svg", cat: "talim" },
  { name: "Cambridge Intl College", src: BASE + "Ta'lim/Cambridge%20International%20College.svg", cat: "talim" },
  { name: "Cambridge Intl University", src: BASE + "Ta'lim/Cambridge%20International%20University.svg", cat: "talim" },
  { name: "Kalima Til Programmasi", src: BASE + "Ta'lim/Kalima%20Til%20Programmasi.svg", cat: "talim" },
  { name: "edulink.uz", src: BASE + "Ta'lim/edulink.uz.svg", cat: "talim" },
  { name: "EduLink One", src: BASE + "Ta'lim/edulinkone.svg", cat: "talim" },
  { name: "Harrison Land", src: BASE + "Ta'lim/Harrison%20land.svg", cat: "talim" },
  { name: "Thompson Land", src: BASE + "Ta'lim/Thompson%20Land.svg", cat: "talim" },
  { name: "Colba", src: BASE + "Ta'lim/Colba.svg", cat: "talim" },
  { name: "Dental Academy", src: BASE + "Ta'lim/Dental%20Academy.svg", cat: "talim" },
  { name: "Edu-Action", src: BASE + "Ta'lim/Edu-Action.svg", cat: "talim" },
  { name: "Robbit", src: BASE + "Ta'lim/Robbit.svg", cat: "talim" },
  { name: "Ash-Shoshiy Academy", src: BASE + "Ta'lim/Ash-SHOSHIY%20ACADEMY.svg", cat: "talim" },
  { name: "DARGAH", src: BASE + "Ta'lim/DARGAH.svg", cat: "talim" },
  { name: "Grant Plus Education", src: BASE + "Ta'lim/Grant%20Plus%20Education.svg", cat: "talim" },
  { name: "Inbrain", src: BASE + "Ta'lim/Inbrain.svg", cat: "talim" },
  { name: "Katta Tanaffus", src: BASE + "Ta'lim/Katta%20Tanaffus.svg", cat: "talim" },
  { name: "Kompass", src: BASE + "Ta'lim/Kompass.svg", cat: "talim" },
  { name: "Muallim O'quv Markazi", src: BASE + "Ta'lim/Muallim%20O'quv%20Markazi.svg", cat: "talim" },
  { name: "Muhandis.uz", src: BASE + "Ta'lim/Muhandis.uz.svg", cat: "talim" },
  { name: "Siddiqalar", src: BASE + "Ta'lim/Siddiqalar.svg", cat: "talim" },
  { name: "Speedo", src: BASE + "Ta'lim/Speedo.svg", cat: "talim" },
  { name: "Top Brains", src: BASE + "Ta'lim/Top%20Brains.svg", cat: "talim" },
  { name: "Sales Doctor", src: BASE + "Ta'lim/Sales%20doctor.svg", cat: "talim" },
  { name: "Dengiz Consulting", src: BASE + "Ta'lim/DENGIZ%20CONSULTING.svg", cat: "talim" },
  { name: "ASSODIQ", src: BASE + "Ta'lim/ASSODIQ.svg", cat: "talim" },

  // Savdo
  { name: "Vitana", src: BASE + "Savdo/vitana-logo.png", cat: "savdo" },
  { name: "King Motors", src: BASE + "Savdo/King%20Motors.svg", cat: "savdo" },
  { name: "Nefis", src: BASE + "Savdo/Nefis.svg", cat: "savdo" },
  { name: "ACHAM", src: BASE + "Savdo/ACHAM.svg", cat: "savdo" },
  { name: "Hongqi", src: BASE + "Savdo/Hongqi.svg", cat: "savdo" },
  { name: "Ted House", src: BASE + "Savdo/Ted%20House.svg", cat: "savdo" },
  { name: "Nama", src: BASE + "Savdo/Nama.svg", cat: "savdo" },
  { name: "Grand Fitness", src: BASE + "Savdo/GRAND%20FITNESS.svg", cat: "savdo" },
  { name: "Powergym", src: BASE + "Savdo/POWERGYM.svg", cat: "savdo" },
  { name: "iLevel", src: BASE + "Savdo/ilevel.svg", cat: "savdo" },
  { name: "Master Matras", src: BASE + "Savdo/Master%20Matras.svg", cat: "savdo" },
  { name: "Emerich", src: BASE + "Savdo/Emerich.svg", cat: "savdo" },
  { name: "UzbekStone", src: BASE + "Savdo/UZBEKSTONE.svg", cat: "savdo" },
  { name: "Roma Wood", src: BASE + "Savdo/Roma%20Wood.svg", cat: "savdo" },
  { name: "Tashkent Metal", src: BASE + "Savdo/Tashkent%20Metal.svg", cat: "savdo" },
  { name: "DON XOLM", src: BASE + "Savdo/DON%20XOLM.svg", cat: "savdo" },
  { name: "Premium Belt Tech", src: BASE + "Savdo/PREMIUM%20BELT%20TECH.svg", cat: "savdo" },
  { name: "Hamkor Qurilish", src: BASE + "Savdo/Hamkor%20Qurilish.svg", cat: "savdo" },
  { name: "Mondo Ice Cream", src: BASE + "Savdo/mondo%20ice%20cream.svg", cat: "savdo" },
  { name: "Home Life Climate", src: BASE + "Savdo/Home%20Life%20Climate.svg", cat: "savdo" },
  { name: "FLAKON.UZ", src: BASE + "Savdo/FLAKON.UZ.svg", cat: "savdo" },
  { name: "imulife", src: BASE + "Savdo/imulife.svg", cat: "savdo" },
  { name: "MBG House", src: BASE + "Savdo/MBG%20HOUSE.svg", cat: "savdo" },
  { name: "Lovular", src: BASE + "Savdo/LOVULAR.svg", cat: "savdo" },
  { name: "Sapphire Terrace", src: BASE + "Savdo/Sapphire%20Terrace.svg", cat: "savdo" },
  { name: "Dafex Motors", src: BASE + "Savdo/Dafex%20Motors.svg", cat: "savdo" },
  { name: "Zahratun", src: BASE + "Savdo/Zahratun.svg", cat: "savdo" },
  { name: "Zohirshoh Mebel", src: BASE + "Savdo/Zohirshoh%20mebel.svg", cat: "savdo" },
  { name: "Qalbinur Mebel", src: BASE + "Savdo/Qalbinur%20Mebel.svg", cat: "savdo" },
  { name: "MIX INFO Furniture", src: BASE + "Savdo/MIX%20INFO%20furniture.svg", cat: "savdo" },
  { name: "Kushon Building", src: BASE + "Savdo/Kushon%20Building.svg", cat: "savdo" },
  { name: "Imperial Design", src: BASE + "Savdo/Imperial%20Design%20Company.svg", cat: "savdo" },
  { name: "Shabnam Elegant", src: BASE + "Savdo/SHABNAM%20ELEGANT.svg", cat: "savdo" },
  { name: "ISSO", src: BASE + "Savdo/ISSO.svg", cat: "savdo" },
  { name: "Ortechno", src: BASE + "Savdo/Ortechno.svg", cat: "savdo" },
  { name: "applekor", src: BASE + "Savdo/applekor.svg", cat: "savdo" },
  { name: "VITOUR", src: BASE + "Savdo/VITOUR.svg", cat: "savdo" },

  // Tur firma
  { name: "Turissimo", src: BASE + "Tur%20firma/Turissimo.svg", cat: "tur" },
  { name: "TOUREAST", src: BASE + "Tur%20firma/TOUREAST.svg", cat: "tur" },
  { name: "Olcha Sayohat", src: BASE + "Tur%20firma/olcha%20sayohat.svg", cat: "tur" },
  { name: "DIMAX TOUR", src: BASE + "Tur%20firma/DIMAX%20TOUR.svg", cat: "tur" },
  { name: "REAL DREAMS", src: BASE + "Tur%20firma/REAL%20DREAMS.svg", cat: "tur" },

  // Xizmat / Boshqalar
  { name: "ZONE", src: BASE + "Boshqalar/ZONE.svg", cat: "xizmat" },
  { name: "Osteopatsiya UZ", src: BASE + "Boshqalar/OSTEOPATSIYA%20UZ.svg", cat: "xizmat" },
  { name: "Tez Dori", src: BASE + "Boshqalar/TEZ%20DORI.svg", cat: "xizmat" },
  { name: "Plus Taxi", src: BASE + "Boshqalar/PLUS%20TAXI.svg", cat: "xizmat" },
  { name: "Taxi N1", src: BASE + "Boshqalar/TAXI%20N1.svg", cat: "xizmat" },
  { name: "BIS", src: BASE + "Boshqalar/BIS.svg", cat: "xizmat" },
  { name: "EduMaster", src: BASE + "Boshqalar/EduMaster.svg", cat: "xizmat" },
  { name: "Madad Cleaning", src: BASE + "Boshqalar/Madad%20cleaning.svg", cat: "xizmat" },
  { name: "Tanzif", src: BASE + "Boshqalar/Tanzif.svg", cat: "xizmat" },

  // Boshqalar
  { name: "IMAN", src: BASE + "IT%20&%20Tech/IMAN.svg", cat: "boshqa" },
  { name: "LOLA Animation", src: BASE + "IT%20&%20Tech/LOLA%20Animation.svg", cat: "boshqa" },
  { name: "UZMETER", src: BASE + "Moliya/UZMETER.svg", cat: "boshqa" },
  { name: "UTAX", src: BASE + "Moliya/UTAX.svg", cat: "boshqa" },
  { name: "Windward Mayreau", src: BASE + "Boshqalar/Windward%20Mayreau.svg", cat: "boshqa" },
  { name: "Dengiz Consulting Group", src: BASE + "Boshqalar/DENGIZ%20CONSULTING%20GROUP.svg", cat: "boshqa" },
  { name: "Logistika Vitana", src: BASE + "Logistika/Vitana.svg", cat: "boshqa" },
];

export function Hamkorlar() {
  const [active, setActive] = useState("barchasi");

  const filtered = active === "barchasi" ? CLIENTS : CLIENTS.filter((c) => c.cat === active);

  return (
    <section className="border-t border-[var(--border)] px-5 py-20 md:px-10">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-10 text-center">
          <p className="mb-2 text-[12px] font-semibold uppercase tracking-widest text-[var(--muted)]">
            Hamkorlar
          </p>
          <h2 className="font-[family-name:var(--font-jakarta)] text-[clamp(26px,3.5vw,42px)] font-extrabold tracking-tight text-[var(--foreground)]">
            Biz bilan ishlaydigan kompaniyalar
          </h2>
          <p className="mx-auto mt-3 max-w-[460px] text-[16px] leading-relaxed text-[var(--muted)]">
            150+ kompaniya Data365 Dashboard orqali o&apos;z biznesini real vaqtda kuzatmoqda
          </p>
        </div>

        {/* Filter tabs */}
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActive(cat.key)}
              className={`rounded-full px-4 py-2 text-[13px] font-semibold transition-all ${
                active === cat.key
                  ? "bg-[var(--lime)] text-black shadow-sm"
                  : "border border-[var(--border)] bg-[var(--surface)] text-[var(--muted)] hover:text-[var(--foreground)]"
              }`}
            >
              {cat.label}
              {cat.count && (
                <span className={`ml-1.5 text-[11px] ${active === cat.key ? "opacity-70" : "opacity-50"}`}>
                  {cat.count}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Logo grid — dark cards like data365.uz */}
        <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8">
          {filtered.map((client) => (
            <div
              key={client.name}
              title={client.name}
              className="group flex h-[72px] items-center justify-center rounded-[14px] bg-[#111] p-3 transition-all hover:scale-[1.03] hover:shadow-[0_8px_24px_rgba(0,0,0,0.18)]"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={client.src}
                alt={client.name}
                loading="lazy"
                className="max-h-[44px] w-full object-contain opacity-80 transition-opacity group-hover:opacity-100"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
            </div>
          ))}
        </div>

        <p className="mt-6 text-center text-[12px] text-[var(--muted)]">
          va boshqa 100+ kompaniya...
        </p>
      </div>
    </section>
  );
}
