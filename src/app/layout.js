import { Inter, Bangers } from "next/font/google";

import "./globals.css";

const interTight = Inter({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-inter",
});
const bangers = Bangers({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bangers",
});

export const metadata = {
  title: "Lamin Beyai",
  description:
    "Tours, experiences, and art in The Gambia. Book your next adventure with Lamin Beyai Today.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${interTight.className} ${bangers.variable} ${interTight.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
