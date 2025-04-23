import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";

const quickSand = Quicksand({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'], // choose the weights you need
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Trequmo",
  description: "Fashion clothing e-commerce website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${quickSand.className} antialiased px-20`}
      >
        <NavBar />
        <main>{children}</main>
      </body>
    </html>
  );
}
