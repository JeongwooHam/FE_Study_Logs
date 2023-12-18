import Link from "next/link";
import React from "react";

const OneNav: React.FC<{ mobile?: boolean }> = ({ mobile }) => {
  return (
    <ul
      className={`text-md justify-center flex gap-4 w-full items-center font-[700] ${
        mobile && "flex-col h-full pb-[30px]"
      }`}
    >
      <li className='py-2 text-center cursor-pointer hover:border-b-4'>
        <Link href='/admin'>Admin</Link>
      </li>
      <li className='py-2 text-center cursor-pointer hover:border-b-4'>
        <Link href='/admin'>MyPage</Link>
      </li>
      <li className='py-2 text-center cursor-pointer hover:border-b-4'>
        <button>로그아웃</button>
      </li>
      <li className='py-2 text-center cursor-pointer hover:border-b-4'>
        <button>로그인</button>
      </li>
    </ul>
  );
};

export default OneNav;
