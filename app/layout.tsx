import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { BtnUp, Footer, Nav } from "./components";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Education App",
  description: "Educatioin by create mohammed elsayed 👩‍💻",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loaddingP = (
    <h1 className="text-[100px] w-[100vw] h-[100vh] flex items-center justify-center">
      loadding..
    </h1>
  );
  return (
    <html lang="en">
      <body className={`${inter.className} bg-bgPrimary`}>
        <div className="capitalize h-lvh text-white">
          <Nav />
          {children}
          <BtnUp />
          <Footer />
        </div>
      </body>
    </html>
  );
}
