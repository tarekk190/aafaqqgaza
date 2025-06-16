import { Cairo } from "next/font/google";
import "./globals.css";

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
      <body 
        className={`${geistSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
