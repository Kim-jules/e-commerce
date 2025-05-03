import type { Metadata } from "next";
import { Quicksand, Anton } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import CartProvider from "@/context/useCart";
import { DataProvider } from "@/context/DataContext";
import ChatWidget from "@/components/AIiChatWidget";

const quickSand = Quicksand({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const anton = Anton({
  subsets: ["latin"],
  weight: ["400"],
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
      <body className={`${quickSand.className} antialiased bg-gray-200`}>
        <DataProvider>
          <CartProvider>
            <NavBar />
            <main className="content flex-grow min-h-screen">
              {children}
              <ChatWidget />
            </main>
            <Footer />
          </CartProvider>
        </DataProvider>
      </body>
    </html>
  );
}
