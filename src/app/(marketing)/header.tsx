"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { logo_doulingo } from "../../../public/image";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`h-20 fixed top-0 z-10 bg-white w-full px-4 transition-all duration-300 ${
        scrolled ? "border-b-2 border-slate-200" : "border-b-0"
      }`}
    >
      <div className="lg:max-w-7xl mx-auto h-full items-center flex justify-between p-4">
        <Image alt="logo" src={logo_doulingo} width={200} height={100} />
      </div>
    </header>
  );
};

export default Header;
