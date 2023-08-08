import MyThemeProvider from "@/providers/ThemeProvider";
import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { register } from "swiper/element/bundle";

register();

const inter = Roboto({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Akram Amokrane",
  description: "My Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className + " dark:bg-dark-500"}>
        <MyThemeProvider> {children}</MyThemeProvider>
      </body>
    </html>
  );
}
