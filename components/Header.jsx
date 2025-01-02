import React from "react";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";

import CommonButton from "@/components/common/CommonButton";
import slide1 from "@/data/Header/slide1.json";
import slide2 from "@/data/Header/slide2.json";
import slide3 from "@/data/Header/slide3.json";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const HeaderImages = ({ images, customClasses }) => {
  return (
    <div className="flex flex-col gap-y-3">
      {images.map((image) => (
        <Image
          key={image.id}
          src={image.image}
          alt="nft"
          width={500}
          height={500}
          className={cn("object-cover object-top rounded-full", customClasses)}
        />
      ))}
    </div>
  );
};

const PlayBtnStyle =
  "p-[1.1rem] h-full relative hover:bg-transparent before:absolute before:border before:bg-tranparent before:w-full before:h-full after:absolute after:border after:bg-tranparent after:w-full after:h-full before:top-0 before:left-0 after:-top-1 after:-left-1 before:rounded after:rounded hover:text-white hover:-translate-y-1 transition-all hover:before:-left-1 hover:before:-top-1 hover:after:top-0 hover:after:left-0 before:transition-all after:transition-all";

const Header = () => {
  return (
    <div className="mt-16 md:mt-0 relative h-auto md:h-screen w-full flex flex-col md:flex-row md:items-center justify-between md:gap-5 gap-10 py-16 md:py-0">
      <div className="absolute top-40 md:top-52 left-72 md:left-[35rem] Z-[1] w-10 h-24 rounded-full border border-white/30" />
      <Image
        src="/star1.png"
        alt="star"
        width={30}
        height={30}
        className="absolute top-24 md:top-16 left-44 lg:left-20 -Z-[1]"
      />
      <Image
        src="/star2.png"
        alt="star"
        width={30}
        height={30}
        className="absolute bottom-20 md:bottom-32 left-96 -Z-[1]"
      />
      <Image
        src="/star3.png"
        alt="star"
        width={30}
        height={30}
        className="absolute top-72 md:top-20 right-10 -Z-[1]"
      />
      <div className="flex flex-col gap-8">
        <h1 className="text-[2.1rem] sm:text-[2.6rem] lg:text-[3.4rem] font-extrabold leading-snug">
          Discover, <br />
          collect, and sell <br />
          extraordinary NFTs
        </h1>
        <div className="flex items-center gap-7">
          <CommonButton text="Get Started" />
          <Button variant="ghost" className={PlayBtnStyle}>
            <FaPlay />
          </Button>
        </div>
      </div>

      <div className="flex items-center gap-3 sm:gap-5 relative overflow-hidden h-[26rem] md:h-full before:absolute before:top-0 before:left-0 before:w-full before:h-28 before:bg-gradient-to-b before:from-purple before:to-transparent before:z-[1] after:absolute after:bottom-0 after:left-0 after:w-full after:h-20 after:bg-gradient-to-t after:from-purple after:via-purple after:to-transparent after:z-[1]">
        <div className="animate-slide-up1">
          <HeaderImages
            images={slide1}
            customClasses="w-32 sm:w-44 md:w-32 lg:w-36 h-[18rem] sm:h-[20rem] lg:h-[21rem]"
          />
        </div>
        <div className="animate-slide-up2">
          <HeaderImages
            images={slide2}
            customClasses="w-40 sm:w-56 md:w-40 lg:w-48 h-[22rem] sm:h-[26rem]"
          />
        </div>
        <div className="animate-slide-up3">
          <HeaderImages
            images={slide3}
            customClasses="w-32 sm:w-44 md:w-32 lg:w-36 h-[18rem] sm:h-[20rem] lg:h-[21rem]"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
