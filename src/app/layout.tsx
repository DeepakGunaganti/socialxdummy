import HeaderTop from "@/app/Headertop.js/page"
import Footer from "@/components/Footer"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ProvideWrapper from "@/Redux/ProviderWrapper"
import Navbar from "@/components/Navbar"
import Link from "next/link";
import Productslist from "./Productslist/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ProvideWrapper>
         <Navbar/>
        {/* <HeaderTop/> */}
        {children}
        {/* <Footer/> */}
        
          </ProvideWrapper>    
         
    
        
        </body>
    </html>
  );
}
