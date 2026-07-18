import { Hanken_Grotesk } from "next/font/google";
import "./globals.css";

const henkenGrotesk = Hanken_Grotesk({
  subsets: ['latin'],
  weight: ['400', '700'],
});


export const metadata = {
  title: "Avatarluxe | Premium Hair, Skin & Cosmetic Treatments",
  description:
    "Avatar Luxe offers advanced hair transplant, skin treatments, and cosmetic surgery with cutting-edge technology for safe, effective and long-lasting results.",
  keywords: [
    "hair transplant Bangalore",
    "skin treatment clinic",
    "cosmetic surgery",
    "laser treatment",
    "aesthetic clinic India",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`henkenGrotesk.className`}
      >
        {children}
      </body>
    </html>
  );
}
