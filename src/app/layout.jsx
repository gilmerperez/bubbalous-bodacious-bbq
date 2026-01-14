import "../styles/globals.css";
import { Oswald, Inter } from "next/font/google";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: {
    default: "Bubbalous Bodacious BBQ | Orlando&apos;s Favorite BBQ Since 1986",
    template: "%s | Bubbalous Bodacious BBQ",
  },
  description:
    "Serving Orlando's favorite BBQ since 1986. Authentic barbecue, homemade sides, party packs, and catering services. Located at 5818 Conroy Road, Orlando FL 32835.",
  keywords: [
    "BBQ",
    "barbecue",
    "Orlando BBQ",
    "Florida BBQ",
    "restaurant",
    "catering",
    "party packs",
    "smoked meats",
    "pulled pork",
    "brisket",
    "ribs",
    "Conroy Road",
    "Orlando restaurant",
  ],
  authors: [{ name: "Bubbalous Bodacious BBQ" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bubbalousbbq.com",
    siteName: "Bubbalous Bodacious BBQ",
    title: "Bubbalous Bodacious BBQ | Orlando's Favorite BBQ Since 1986",
    description:
      "Serving Orlando's favorite BBQ since 1986. Authentic barbecue, homemade sides, party packs, and catering services.",
  },
  icons: {
    icon: "/logo.jpg",
    shortcut: "/logo.jpg",
    apple: "/logo.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en" className={`${oswald.variable} ${inter.variable}`}>
        <head>
          <script src="https://kit.fontawesome.com/ffb8948ab7.js" crossOrigin="anonymous" async></script>
        </head>
        <body>
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </>
  );
}
