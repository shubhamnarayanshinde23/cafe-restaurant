import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/cursor/CustomCursor";
import ScrollProgress from "@/components/ui/ScrollProgress";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Brew Haven",
  description: "Premium Coffee Experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body 
        className={`${playfair.variable} ${poppins.variable}`}
        suppressHydrationWarning
      >
        <ScrollProgress />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}