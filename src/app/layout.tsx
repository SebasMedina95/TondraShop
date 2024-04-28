import type { Metadata } from "next";
import { inter } from "@/config/fonts";
import "./globals.css";



export const metadata: Metadata = {
  title: {
    template: "%s - Tondra | Shop", //El %s es un comodín
    default: "Home - Tondra | Shop" //Para que aparezca default en toda la APP
  },
  description: "Tienda virtual de productos",
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
