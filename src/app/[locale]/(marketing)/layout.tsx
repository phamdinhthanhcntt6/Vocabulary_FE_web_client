import Footer from "@/app/[locale]/(marketing)/footer";
import Header from "@/app/[locale]/(marketing)/header";
import { routing } from "@/i18n/routing";
import { hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import React from "react";

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

const MarketingLayout = ({ children, params }: Props) => {
  const { locale } = params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default MarketingLayout;
