import localFont from "next/font/local";
import "./globals.css";
import { Providers } from "@/provider";

import HeaderWrapper from "@/components/HeaderWrapper/HeaderWrapper";
import FooterWrapper from "@/components/FooterWrapper/FooterWrapper";
import NextTopLoader from "nextjs-toploader";

const myFont = localFont({
  src: "../public/Font/Jost-Regular.ttf",
});

export const metadata = {
  metadataBase: new URL("http://localhost:3000/"),

  title: {
    default: "Ayatrio",
    template: "Ayatrio - %s ",
  },
  description:
    "Custom Wallpaper, Wooden Flooring, Laminate & Vinyl Floors in India India&#039;s first Virtual Reality based Interior Design Solution",
  openGraph: {
    title: "Ayatrio",
    description:
      "Custom Wallpaper, Wooden Flooring, Laminate & Vinyl Floors in India India&#039;s first Virtual Reality based Interior Design Solution",
    images: [
      {
        url: "http://localhost:3000/api/og",
        width: 1200,
        height: 630,
      },
    ],
  },
  applicationName: "Ayatrio",
  keywords: ["Ayatrio", "Flooring store"],
  authors: [{ name: "Ayatrio" }],
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={myFont.style}>
        {/* <Link rel="icon" href="/favicon-32x32.png" sizes="any" ></Link> */}
          <NextTopLoader/>

        <Providers>
          <HeaderWrapper />
          {children}
          <FooterWrapper />
        </Providers>
      </body>
    </html>
  );
}
