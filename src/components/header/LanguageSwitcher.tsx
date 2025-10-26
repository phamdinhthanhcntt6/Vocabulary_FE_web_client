"use client";

import { useRouter, usePathname } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import { LANGUAGES } from "@/constants/language";
import { useState } from "react";
import Image from "next/image";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageChange = (newLocale: string) => {
    router.push(pathname, { locale: newLocale });
    setIsOpen(false);
  };

  const currentLanguage = LANGUAGES.find((lang) => lang.value === locale);

  return (
    <div className="relative inline-block">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors"
        aria-label="Change language"
      >
        {currentLanguage?.image && (
          <Image
            src={currentLanguage.image}
            alt={currentLanguage.label}
            className="w-5 h-5 rounded-full"
          />
        )}
        <span className="text-sm font-medium">{currentLanguage?.label}</span>
        <svg
          className={`w-4 h-4 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg z-50">
          {LANGUAGES.map((language) => (
            <button
              key={language.value}
              onClick={() => handleLanguageChange(language.value)}
              className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-gray-100 transition-colors ${
                locale === language.value
                  ? "bg-blue-50 border-l-4 border-blue-600"
                  : ""
              }`}
            >
              {language.image && (
                <Image
                  src={language.image}
                  alt={language.label}
                  className="w-5 h-5 rounded-full"
                />
              )}
              <span className="text-sm font-medium">{language.label}</span>
              {locale === language.value && (
                <svg
                  className="w-4 h-4 ml-auto text-blue-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
