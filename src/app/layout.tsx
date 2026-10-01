import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PrecioBol | Compara precios en un solo lugar",
  description:
    "Busca un producto y descubre dónde encontrarlo al mejor precio. Comenzamos en Cochabamba, Bolivia.",
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
