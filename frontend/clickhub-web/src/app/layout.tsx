import type { Metadata } from "next";
import { Abel } from "next/font/google";
import { Roboto } from "next/font/google";
import { Manrope } from "next/font/google";
import { Lato } from "next/font/google";
import { Poppins } from "next/font/google";
import { Montserrat } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "ClickHub - O maior site de produtos de tecnologia do Brasil",
  description: "Gerenciamento de Dados",
};

const font = Lato({
  subsets: ["latin"],
  weight: "400",
  style: "normal",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={font.className}
      >
        {children}
      </body>
    </html>
  );
}
