"use client";

import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { createContext, useContext, useState } from "react";
import { register } from "swiper/element/bundle";

register();

const inter = Roboto({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Akram Amokrane",
  description: "My Portfolio",
};

interface IThemContext {
  theme: string;
  setTheme: ({ type }: { type: string }) => void;
}

export const ThemeContext = createContext<any>({} as IThemContext);

export const useTheme = () => useContext(ThemeContext);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState<string>("light");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <html lang="en" className={theme}>
        <body className={inter.className + " dark:bg-dark-500 scrollbar"}>
          {children}
        </body>
      </html>
    </ThemeContext.Provider>
  );
}
