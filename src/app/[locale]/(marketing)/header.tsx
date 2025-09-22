"use client";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { LANGUAGES } from "@/constants/language";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { logo_doulingo } from "../../../../public/image";
import { useTranslations } from "next-intl";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("en");

  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations("HomePage");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("siteLanguage");
      if (saved) setSelectedLang(saved);
    }
  }, []);

  const handleSelect = (language: (typeof LANGUAGES)[0]) => {
    setSelectedLang(language.value);
    if (typeof window !== "undefined") {
      localStorage.setItem("siteLanguage", language.value);
    }

    const segments = pathname.split("/");
    segments[1] = language.value;
    const newPath = segments.join("/");
    router.push(newPath);
    router.refresh();
  };

  const currentLang =
    LANGUAGES.find((l) => l.value === selectedLang) || LANGUAGES[0];

  return (
    <header
      className={`h-18 fixed top-0 z-10 bg-white w-full px-4 transition-all duration-300 ${
        scrolled ? "border-b-2 border-slate-200" : "border-b-0"
      }`}
    >
      <div className="lg:max-w-5xl mx-auto h-full items-center flex justify-between p-4">
        <Image alt="logo" src={logo_doulingo} width={180} height={80} />

        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant={"ghostOutline"}
              className="cursor-pointer flex items-center gap-2"
            >
              {t("siteLanguage")}:&nbsp;{currentLang.label}
              <ChevronDown />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-56">
            <Command>
              <CommandList>
                <CommandGroup>
                  {LANGUAGES.map((language) => (
                    <CommandItem
                      key={language.value}
                      value={language.value}
                      className={`flex items-center cursor-pointer ${
                        language.value === selectedLang ? "bg-slate-100" : ""
                      }`}
                      onSelect={() => handleSelect(language)}
                    >
                      <Image
                        src={language.image}
                        alt={language.label}
                        width={20}
                        height={20}
                        className="mr-2"
                      />
                      {language.label}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      </div>
    </header>
  );
};

export default Header;
