"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      role="group"
      aria-label="Language / Idioma"
      className="fade-in-up inline-flex items-center gap-1 rounded-full bg-[#EDE6E8]/60 p-1 backdrop-blur-md"
      style={{ animationDelay: "0.05s" }}
    >
      <button
        type="button"
        onClick={() => setLanguage("en")}
        aria-pressed={language === "en"}
        className={`rounded-full px-4 py-1.5 font-montserrat text-[10px] font-semibold uppercase tracking-widest transition-colors ${
          language === "en"
            ? "bg-white text-[#70566C] shadow-sm"
            : "text-[#B193AB]"
        }`}
      >
        English
      </button>
      <button
        type="button"
        onClick={() => setLanguage("es")}
        aria-pressed={language === "es"}
        className={`rounded-full px-4 py-1.5 font-montserrat text-[10px] font-semibold uppercase tracking-widest transition-colors ${
          language === "es"
            ? "bg-white text-[#70566C] shadow-sm"
            : "text-[#B193AB]"
        }`}
      >
        Español
      </button>
    </div>
  );
}
