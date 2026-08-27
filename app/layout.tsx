import type { Metadata } from "next";
import { DM_Sans, DM_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-dm-mono",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Data365 Dashboard — Barcha ko'rsatkichlar bitta ekranda",
  description:
    "Savdo, marketing, telefoniya, moliya — hammasi real vaqtda. 30+ integratsiya, 20+ tayyor modul, AI yordamchi.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uz" style={{ colorScheme: "light" }}>
      <body className={`${dmSans.variable} ${dmMono.variable} ${jakarta.variable}`}>
        {children}
      </body>
    </html>
  );
}
