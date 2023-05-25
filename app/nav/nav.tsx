"use client";

import React from "react";
import Link from "next/link";
import { FaDev } from "react-icons/fa";

const Nav = () => {
  return (
    <header className="fixed top-0 flex h-20 p-6 w-full justify-between items-center shadow-lg shadow-slate-700/75 bg-zinc-900">
      <div className="mt-4 flex flex-col pl-4 pb-2 pr-4 text-sky-300/40">
        <Link href="/">
          <FaDev size={40} />
        </Link>
      </div>

      {/* MENU */}
      <ul className="items-center justify-center pt-2 pb-2 flex text-gray-200 font-semibold">
        <li>
          <Link href="/">
            <button className="flex w-full items-center justify-end px-4 hover:cursor-pointer hover:overline">
              <p>Home</p>
            </button>
          </Link>
        </li>

        <li>
          <Link href="/techskills">
            <button className="flex w-full items-center justify-end bg-none px-4  hover:cursor-pointer hover:overline hover:transition-all">
              <p>Skills</p>
            </button>
          </Link>
        </li>

        <li>
          <Link href="projects">
            <button className="flex w-full items-center justify-end  bg-none px-4  hover:cursor-pointer hover:overline hover:transition-all">
              <p>Projects</p>
            </button>
          </Link>
        </li>
        <li>
          <Link href="contact">
            <button className="flex w-full items-center justify-end bg-none px-4 hover:cursor-pointer hover:overline hover:transition-all">
              <p>Contact</p>
            </button>
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Nav;
