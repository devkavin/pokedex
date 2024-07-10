import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Font files can be colocated inside of `app`
const myFont = localFont({
  src: "./PressStart2P-Regular.ttf",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pokedex",
  description:
    "Pokedex, built with Next.js and Tailwind CSS. Deployed on Vercel. Developed by @devkavin.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={myFont.className}>{children}</body>
    </html>
  );
}
