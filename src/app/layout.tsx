import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PrecioCocha | Precios claros, mejores decisiones",
  description:
    "PrecioCocha te ayudará a buscar y comparar precios de productos en comercios de Bolivia, comenzando por Cochabamba.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
