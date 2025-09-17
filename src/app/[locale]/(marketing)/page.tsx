import React from "react";
import Image from "next/image";
import { pic_banner } from "../../../../public/image";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

const MarketingPage = () => {
  const t = useTranslations("HomePage");
  return (
    <div className="flex flex-col items-center">
      <div className="pt-20 px-4 lg:max-w-5xl mx-auto h-full items-center flex justify-between flex-col">
        <div className="flex mx-auto items-center h-[calc(100vh-14rem)] max-lg:flex-col max-lg:h-screen">
          <Image
            alt="banner"
            src={pic_banner}
            width={450}
            height={450}
            className=""
          />
          <div className="h-full flex flex-col justify-center w-1/2 mx-auto max-lg:w-full">
            <div className="text-4xl font-semibold text-center mb-10">
              Học ngoại ngữ miễn phí, vui nhộn và hiệu quả!
              {t("title")}
            </div>
            <Button
              variant={"secondary"}
              className="w-2/3 mx-auto mb-4 max-lg:w-full"
            >
              bắt đầu
            </Button>
            <Button className="w-2/3 mx-auto max-lg:w-full">
              tôi đã có tài khoản
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketingPage;
