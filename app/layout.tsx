import type { Metadata } from "next";
import "./globals.css";
import Header from "./ui/header";
import { inter } from "./ui/fonts";


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
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
