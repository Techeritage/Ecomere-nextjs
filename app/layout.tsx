import type { Metadata } from "next";
import "./globals.css";
import { inter } from "./ui/fonts";
import { CartProvider } from "./providers/cartProvider";
import Header from "./ui/header";

export const metadata: Metadata = {
  title: "Ecommerce App",
  description: "Generated great sales with online visibility",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <CartProvider>
          <Header />
          <main>{children}</main>
        </CartProvider>
      </body>
    </html>
  );
}
