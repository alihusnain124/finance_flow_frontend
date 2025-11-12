import "../assets/css/globals.css";
import NavBar from "./_components/NavBar";
import { DM_Sans } from "next/font/google";
import Footer from "./_components/Footer";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={dmSans.variable}>
      <body>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
