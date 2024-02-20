import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import TopNavBar from "components/TopNavBar";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Craft Your Career with Magical ORB: Where résumés Sparkle. ",
  description:
    "Enter the realm of career enchantment with ORB – the Online résumé Builder that turns your professional journey into pure magic. With ORB, crafting your perfect résumé is as effortless as casting a spell. Our mystical theme and intuitive interface promise to transform your experience from mundane to mesmerizing. Say farewell to uninspired templates and embrace the allure of ORB, where every résumé shines bright with promise. Start your journey to career enchantment with ORB today.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} text-slate-500`}>
        <TopNavBar />
        {children}
      </body>
    </html>
  );
}
