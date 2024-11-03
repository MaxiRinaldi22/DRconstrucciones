import Header from "@/components/Header";
import { monda } from "../util/fonts";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata = {
  title: "DR construcciones en steel",
  description: "...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={monda.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
