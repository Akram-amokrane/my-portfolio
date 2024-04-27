"use client";
import React, { useContext, useState } from "react";

const languages = ["EN", "FR"];

interface ILangContext {
  lang: string;
  setLang: (type: string) => void;
}

export const LangContext = React.createContext({} as ILangContext);

export const useLang = () => useContext(LangContext);

export default function MyLangProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [lang, setLang] = useState(languages[0]);
  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
}
