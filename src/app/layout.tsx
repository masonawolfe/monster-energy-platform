import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Monster Energy Ã¢â‚¬â€ E2E Commercialization Platform",
  description: "Build With The Culture. Not At It.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}