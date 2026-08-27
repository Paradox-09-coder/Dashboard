"use client";

import Image from "next/image";

const PROJECTS = [
  {
    id: 1,
    image: "/dashboards/525835f2-c7eb-4a22-99e6-3816e366caa5.png",
  },
  {
    id: 2,
    image: "/dashboards/9ad82544-5f5c-4374-a906-3c63f4f2bafd.png",
  },
  {
    id: 3,
    image: "/dashboards/4d847274-f7be-4e8f-b3da-04b12482e4b7.png",
  },
  {
    id: 4,
    image: "/dashboards/d61a1142-61c2-4a70-94f3-34df54e5df57.png",
  },
  {
    id: 5,
    image: "/dashboards/51c1482c-02ec-4d18-a705-013b538ff09c.png",
  },
  {
    id: 6,
    image: "/dashboards/359c1b98-b0d7-404c-bcb1-bb4031a88964.png",
  },
  {
    id: 7,
    image: "/dashboards/24e166f4-fadd-429b-aafd-21278a118b61.png",
  },
  {
    id: 8,
    image: "/dashboards/67e6cd7e-cf92-4847-8491-80f031c86f2b.png",
  },
];

export function Dashboardlar() {
  return (
    <section className="border-t border-[var(--border)] px-5 py-20 md:px-10">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-10 text-center">
          <p className="mb-2 text-[12px] font-semibold uppercase tracking-widest text-[var(--muted)]">
            Tayyor Dashboardlar
          </p>
          <h2 className="font-[family-name:var(--font-jakarta)] text-[clamp(26px,3.5vw,42px)] font-extrabold tracking-tight text-[var(--foreground)]">
            Biz yasagan dashboardlar
          </h2>
          <p className="mx-auto mt-3 max-w-[480px] text-[16px] leading-relaxed text-[var(--muted)]">
            Har bir biznes uchun alohida modul. Tayyor shablonni tanlaysiz — biz 1 kunda sozlab beramiz.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {PROJECTS.map((p) => (
            <div
              key={p.id}
              className="group overflow-hidden rounded-[20px] border border-[var(--border)] bg-[var(--surface)] transition-all hover:shadow-[0_12px_40px_rgba(17,17,17,0.15)] hover:-translate-y-1"
              style={{ transition: "all 0.2s ease" }}
            >
              {/* Screenshot preview */}
              <div
                className="relative overflow-hidden bg-[#0f0f0f]"
                style={{ aspectRatio: "16/9" }}
              >
                <Image
                  src={p.image}
                  alt={`Dashboard ${p.id}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 600px"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                  quality={95}
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
