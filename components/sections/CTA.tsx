import Link from "next/link";

export function CTA() {
  return (
    <section id="demo" className="px-5 py-16 md:px-10">
      <div className="mx-auto max-w-[1200px]">
        <div className="flex flex-col items-start justify-between gap-8 rounded-[28px] bg-[var(--lime)] px-10 py-14 md:flex-row md:items-center md:px-16">
          <div>
            <h2 className="font-[family-name:var(--font-jakarta)] text-[clamp(28px,4vw,44px)] font-extrabold leading-[1.1] tracking-tight text-black">
              Biznesingizni
              <br />
              raqamlarda ko&apos;ring
            </h2>
            <p className="mt-3 text-[16px] text-[rgba(17,17,17,0.6)]">
              Mutaxassisimiz 2 soat ichida siz bilan bog&apos;lanadi
            </p>
          </div>
          <div className="flex flex-shrink-0 flex-col gap-3 sm:flex-row">
            <Link
              href="#"
              className="rounded-full bg-black px-8 py-4 text-[16px] font-semibold text-[#f0eeea] transition-opacity hover:opacity-80"
            >
              Bepul demo so&apos;rash →
            </Link>
            <Link
              href="tel:+998772526060"
              className="rounded-full border-2 border-[rgba(17,17,17,0.2)] px-8 py-4 text-[16px] font-semibold text-black transition-all hover:border-black"
            >
              +998 77 252 60 60
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
