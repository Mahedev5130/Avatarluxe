import { Hanken_Grotesk } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const henkenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const GTM_ID = "GTM-K8DKM3H8";

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
      <body className={`henkenGrotesk.className`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {children}

        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">{`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${GTM_ID}');
        `}</Script>
      </body>
    </html>
  );
}
