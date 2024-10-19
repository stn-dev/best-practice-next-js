import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {

  // instead of using "http://localhost:3000/images" we can just use metadataBase/images
  metadataBase: new URL("http://localhost:3000"),

  // this is the title that the user see when they search for your web-site
  /* title: "practice next app", */

  //best way to use title property when you have many pages
  title: {
    default: "practice next app",

    //this mean that in every page , it's gonna be like "article | practice next app"
    template: "%s | practice next app"
  },

  // this is the little description after the title
  description: "Try to understand next js with all his features",

  // openGraph define the looks of your web-site in social media link
  openGraph: {
    title: "practice next app",
    description: "Try to understand next js with all his features",
    type: "website",

    // this is your language and location
    locale: "en-US",
    url: "http://localhost:3000/",

    //name of the site
    siteName: "stn-dev"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
