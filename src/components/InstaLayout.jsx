import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { LuBell } from "react-icons/lu";
import { HiDotsHorizontal } from "react-icons/hi";
import { FaCertificate } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import { GoSearch } from "react-icons/go";
import { RiShoppingBag4Line } from "react-icons/ri";
import { PiVideo } from "react-icons/pi";
import { CgProfile } from "react-icons/cg";

export default function ({ children }) {
  return (
    <div className='flex-1'>
      <div className='bg-zinc-950 rounded-md flex flex-col aspect-[9/19.5] overflow-hidden min-w-[200px] h-max max-h-full ml-auto'>
        <div className='relative flex items-center justify-center py-2'>
          <IoIosArrowBack className='absolute top-center left-3' />
          <div className='flex items-center gap-2 text-sm'>
            FitCut
            <FaCertificate size={"10px"} color='#0095f6' />
          </div>
          <div className='flex items-center gap-4 absolute top-center right-3'>
            <LuBell />
            <HiDotsHorizontal />
          </div>
        </div>
        <div className='grid grid-cols-3 gap-1 flex-1 content-start overflow-y-auto scrollbar-hide'>
          {children}
        </div>
        <div className='flex items-center justify-between px-3 py-2'>
          <GoHomeFill />
          <GoSearch />
          <PiVideo />
          <RiShoppingBag4Line />
          <CgProfile />
        </div>
      </div>
    </div>
  );
}
