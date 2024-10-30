import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import "@rainbow-me/rainbowkit/styles.css";
import { ReactNode } from "react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CryptoDevsDAO",
  description:
    "CryptoDevsDAO for holder of CryptoDevs NFTs",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
