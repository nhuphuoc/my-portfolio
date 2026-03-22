import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { PrintButton } from "./print-button";

export const metadata: Metadata = {
  title: "Phuoc Bui — Card",
  description: "Digital business card of Phuoc Bui, Software Engineer."
};

export default function CardPage() {
  return (
    <main className="min-h-screen bg-[var(--color-cream)] flex flex-col items-center justify-center px-6 py-16 print:py-0 print:min-h-0">

      {/* Card */}
      <div className="w-full max-w-sm">

        {/* Front */}
        <div className="relative overflow-hidden rounded-[2rem] bg-[#1b3450] text-white shadow-[0_40px_100px_rgba(27,52,80,0.35)] aspect-[1.75/1]">

          {/* Background texture */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(196,120,66,0.35),transparent_50%),radial-gradient(circle_at_80%_10%,rgba(255,255,255,0.06),transparent_40%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(225deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:32px_32px] opacity-40" />

          <div className="relative z-10 flex h-full flex-col justify-between p-7">
            {/* Top */}
            <div className="flex items-start justify-between">
              <div className="overflow-hidden rounded-full border-2 border-white/20 w-11 h-11">
                <Image
                  src="/my-face.jpg"
                  alt="Phuoc Bui"
                  width={44}
                  height={44}
                  className="object-cover w-full h-full"
                />
              </div>
              <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/40">
                phuocbui.cloud
              </span>
            </div>

            {/* Bottom */}
            <div>
              <p className="font-serif text-2xl font-semibold leading-tight tracking-[-0.02em]">
                Phuoc Bui
              </p>
              <p className="mt-1 text-xs font-medium uppercase tracking-[0.22em] text-[var(--color-accent)]">
                Software Engineer · NAB
              </p>
              <div className="mt-4 flex flex-col gap-1 text-[11px] text-white/55">
                <span>nhuphuoc.bui@gmail.com</span>
                <span>0362 103 314</span>
              </div>
            </div>
          </div>
        </div>

        {/* Back */}
        <div className="relative mt-4 overflow-hidden rounded-[2rem] border border-[var(--color-border)] bg-white/80 shadow-[0_20px_60px_rgba(18,26,33,0.07)] backdrop-blur aspect-[1.75/1]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_90%,rgba(196,120,66,0.1),transparent_40%)]" />

          <div className="relative z-10 flex h-full flex-col justify-between p-7">
            {/* Links */}
            <div className="flex flex-col gap-2">
              {[
                { label: "Web", value: "phuocbui.cloud", href: "https://www.phuocbui.cloud" },
                { label: "GitHub", value: "github.com/nhuphuoc", href: "https://github.com/nhuphuoc" },
                { label: "LinkedIn", value: "linkedin.com/in/phuocbn", href: "https://www.linkedin.com/in/phuocbn/" }
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-baseline gap-3 group"
                >
                  <span className="w-14 text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--color-muted)]">
                    {item.label}
                  </span>
                  <span className="text-xs text-[var(--color-ink)] group-hover:text-[var(--color-accent-strong)] transition-colors">
                    {item.value}
                  </span>
                </a>
              ))}
            </div>

            {/* Location */}
            <p className="text-[10px] uppercase tracking-[0.22em] text-[var(--color-muted)]">
              Ho Chi Minh City, Vietnam
            </p>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="mt-8 flex gap-3 print:hidden">
        <PrintButton />
        <Link
          href="/"
          className="flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-white/80 px-5 py-2.5 text-sm font-medium text-[var(--color-muted)] transition hover:text-[var(--color-ink)]"
        >
          ← Portfolio
        </Link>
      </div>

      <style>{`
        @media print {
          @page { margin: 0; size: 90mm 55mm; }
          body { background: white !important; }
        }
      `}</style>
    </main>
  );
}
