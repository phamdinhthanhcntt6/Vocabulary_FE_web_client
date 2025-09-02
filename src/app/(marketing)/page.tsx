import React from "react";
import Image from "next/image";
import { pic_banner } from "../../../public/image";
import { Button } from "@/components/ui/button";

const MarketingPage = () => {
  return (
    <div className="pt-20 px-4 lg:max-w-7xl mx-auto h-full items-center flex justify-between flex-col">
      <div className="flex mx-auto items-center h-[calc(100vh-16rem)] max-lg:flex-col max-lg:h-screen">
        <Image
          alt="banner"
          src={pic_banner}
          width={500}
          height={500}
          className=""
        />
        <div className="h-full flex flex-col justify-center w-1/2 mx-auto max-lg:w-full">
          <div className="text-4xl font-semibold text-center mb-10">
            Học ngoại ngữ miễn phí, vui nhộn và hiệu quả!
          </div>
          <Button
            variant={"secondary"}
            className="w-1/2 mx-auto mb-4 max-lg:w-full"
          >
            get started
          </Button>
          <Button className="w-1/2 mx-auto max-lg:w-full">
            i already have an account
          </Button>
        </div>
      </div>
      <div>đâsdsa</div>
    </div>
  );
};

export default MarketingPage;
