import type { Metadata } from "next";
import { Abel } from "next/font/google";
import { Roboto } from "next/font/google";
import { Manrope } from "next/font/google";
import { Lato } from "next/font/google";
import { Poppins } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "ClickHub - Dashboard",
  description: "Gerenciamento de Dados",
};

// const font = Lato({
//   subsets: ["latin"],
//   weight: "400",
//   style: "normal",
// });

// const font = Poppins({
//   subsets: ["latin"],
//   weight: "400",
//   style: "normal",
// });

// const font = Manrope({
//   subsets: ["latin"],
//   weight: "300",
//   style: "normal",

// });

// const font = Montserrat({
//   subsets: ["latin"],
// });

// const font = Abel({
//   subsets: ["latin"],
//   weight: "400",
//   style: "normal",
// });

const font = Roboto({
  subsets: ["latin"],
  weight: "400",
  style: "normal",
  display: "swap"
});



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={font.className}>{children}</body>
    </html>
  );
}
