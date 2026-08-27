import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] px-5 py-10 md:px-10">
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="grid h-7 w-7 place-items-center rounded-[7px] bg-[var(--lime)] text-[11px] font-black text-black">
            D
          </div>
          <span className="font-[family-name:var(--font-jakarta)] text-[16px] font-extrabold tracking-tight text-[var(--foreground)]">
            Data365
          </span>
        </Link>

        <ul className="flex flex-wrap gap-6">
          {["Integratsiyalar", "Modullar", "Narxlar", "Blog", "Bog'lanish"].map(
            (l) => (
              <li key={l}>
                <Link
                  href="#"
                  className="text-[13px] text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
                >
                  {l}
                </Link>
              </li>
            )
          )}
        </ul>

        <p className="text-[13px] text-[var(--muted)]">©Data365 2025</p>
      </div>
    </footer>
  );
}
