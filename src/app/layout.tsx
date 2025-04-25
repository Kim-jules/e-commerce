import type { Metadata } from "next";
import { Quicksand, Anton } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import CartProvider from "@/context/useCart";

const quickSand = Quicksand({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const anton = Anton({
  subsets: ['latin'],
  weight: ["400"],
  display: "swap",
})

// const boldonse = Boldonse({
//   subsets: ['latin'],
//   weight: ["400"],
//   display: "swap",
// })

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
        <CartProvider>
          <NavBar />
          <main className="px-20 py-5 bg-slate-200 content flex-grow min-h-screen">
            {children}
          </main>
          <Footer/>
        </CartProvider>
          
      </body>
    </html>
  );
}
