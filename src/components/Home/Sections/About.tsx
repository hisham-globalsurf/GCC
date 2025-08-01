import Image from "next/image";
import { ReusableButton } from "@/components/Common/Button";

export default function AboutCompany() {
  return (
    <section>
      <div className="w-full py-16 container flex flex-col md:flex-row justify-between overflow-hidden bg-white">
        {/* Left (Image)F */}
        <div className="relative w-full md:basis-[45%]">
          <Image
            src="/home/about/about-bg.png"
            alt="City View"
            width={705}
            height={432}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[52px] h-[52px] bg-opacity-80 rounded-full flex items-center justify-center">
              <Image
                src="/home/about/playbtn.png"
                alt="playbtn"
                width={54}
                height={54}
              />
            </div>
          </div>
        </div>
        {/* Right (Text) - slightly wider */}
        <div className="w-full md:basis-[55%] py-4 md:py-0 md:ml-12 flex flex-col gap-6">
          <p className="text-gray-800 text-[22px] md:text-[32px] leading-[47px] font-light">
            GCC,{" "}
            <span className="text-red-600 font-semibold">
              established in 1988
            </span>
            , is known for innovation and excellence in construction, with
            projects ranging from infrastructure and defense to industrial,
            commercial, and residential developments.
          </p>
          <div className="mt-[25px] md:mt-[55px]">
            <ReusableButton
              label="ABOUT COMPANY"
              icon={
                <Image
                  src="/home/about/right_top_arrow.png"
                  alt="Download"
                  width={28}
                  height={28}
                />
              }
              iconPosition="right"
              className="hover:bg-gray-200 px-6 rounded-[35px] h-[42px] text-[16px] text-[#515151] border border-[#515151] font-light"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
