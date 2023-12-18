"use client";

import Link from "next/link";
import React, { useState } from "react";
import materialIcons from "@/utils/materialIcons";
import OneNav from "./OneNav";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen((prev: boolean) => !prev);

  return (
    <nav className='relative z-10 w-full bg-[#87C4FF]'>
      <div className='flex items-center justify-between mx-5 sm:mx-10 lg:mx-20'>
        <div className='flex items-center text-3xl font-bold py-5'>
          <Link href='/'>LOGO</Link>
        </div>
        <div className='text-2xl sm:hidden'>
          {isOpen === false
            ? materialIcons({
                title: "add",
                style: "cursor-pointer",
                onClick: handleOpen,
              })
            : materialIcons({
                title: "remove",
                style: "cursor-pointer",
                onClick: handleOpen,
              })}
        </div>
        <div className='hidden sm:block'>
          <OneNav />
        </div>
      </div>
      {isOpen && (
        <div className='block sm:hidden'>
          <OneNav mobile />
        </div>
      )}
    </nav>
  );
};

export default Nav;
