import { Cairo } from "next/font/google";
import "./globals.css";
import Navbar from "../Components/Navbar";
import Footer from "@/Components/Footer";

const geistSans = Cairo({
  variable: "--font-cairo-sans",
  subsets: ["arabic"],
});

export const metadata = {
  title: "aafaqqgaza",
  description: "مجموعه خيريه لمساعده اهلنا المحتاجين بغزه",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar">
      <body className={`${geistSans.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
