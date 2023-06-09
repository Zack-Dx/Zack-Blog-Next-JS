import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header>
      <nav className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
        <div className="flex items-center space-x-2">
          <Link href={"/"}>
            <Image
              className="rounded-full"
              src="https://avatars.githubusercontent.com/u/105835098?v=4"
              height={50}
              width={50}
              alt="logo"
            />
          </Link>
          <h1 className="text-xl">Zack Dx</h1>
        </div>
        <div>
          <Link
            href="/"
            className=" 
         font-medium border-none px-3 py-3 text-sm md:text-md bg-gray-900 text-[#F7AB0A] flex items-center rounded-full text-center"
          >
            Sign up to Smash
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
