"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaDev } from "react-icons/fa";

const Nav = () => {
  return (
    <header className="fixed top-0 flex h-20 w-full justify-between shadow-lg shadow-slate-700/75">
      <div className="mt-4 flex flex-col pl-4 pb-2 pr-4 text-sky-300/40">
        <FaDev size={40} />
      </div>

      {/* MENU */}
      <ul className="items-center justify-center pt-2 pb-2 flex text-gray-200">
        <li>
          <button className="flex w-full items-center justify-end px-4 hover:cursor-pointer hover:overline">
            <Link href="/">
              <p>Home</p>
            </Link>
          </button>
        </li>

        <li>
          <button className="flex w-full items-center justify-end bg-none px-4  hover:cursor-pointer hover:overline hover:transition-all">
            <Link href="/techskills">
              <p>Skills</p>
            </Link>
          </button>
        </li>

        <li>
          <button className="flex w-full items-center justify-end  bg-none px-4  hover:cursor-pointer hover:overline hover:transition-all">
            <Link href="projects">
              <p>Projects</p>
            </Link>
          </button>
        </li>
        <li>
          <button className="flex w-full items-center justify-end bg-none px-4 hover:cursor-pointer hover:overline hover:transition-all">
            <Link href="contact">
              <p>Contact</p>
            </Link>
          </button>
        </li>
      </ul>
    </header>
  );
};

export default Nav;
