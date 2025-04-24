import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";

const quickSand = Quicksand({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // choose the weights you need
  display: "swap",
});

export const metadata: Metadata = {
  title: "Quino",
  description: "Fashion clothing e-commerce website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${quickSand.className} antialiased`}>
        <NavBar />
        <main className="px-20 py-5 bg-slate-200 content flex-grow min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
