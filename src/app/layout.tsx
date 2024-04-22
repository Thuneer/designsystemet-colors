import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../css/bootstrap-grid.css";
import "./globals.css";
import "@digdir/designsystemet-theme";
import "@digdir/designsystemet-css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fargevelger - Designsystemet",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
