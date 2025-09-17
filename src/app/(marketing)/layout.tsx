import Footer from "@/app/(marketing)/footer";
import Header from "@/app/(marketing)/header";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const MarketingLayout = ({ children }: Props) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  );
};

export default MarketingLayout;
