import localFont from "next/font/local";
import "./globals.css";
import { Providers } from "@/provider";
// import Header from "@/components/Header";
// import Footer from "@/components/Footer/Footer";
import HeaderWrapper from "@/components/HeaderWrapper/HeaderWrapper";
import FooterWrapper from "@/components/FooterWrapper/FooterWrapper";

const myFont = localFont({
  src: "../public/Font/Jost-Regular.ttf",
});

export const metadata = {
  title: {
    default: "Ayatrio",
    template: "%s - Ayatrio",
  },
  description:
    "Custom Wallpaper, Wooden Flooring, Laminate & Vinyl Floors in India India&#039;s first Virtual Reality based Interior Design Solution",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={myFont.style}>
        {/* <Link rel="icon" href="/favicon-32x32.png" sizes="any" ></Link> */}

        <Providers>
          <HeaderWrapper />
          {children}
          <FooterWrapper />
        </Providers>
      </body>
    </html>
  );
}
