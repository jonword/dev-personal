"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaDev } from "react-icons/fa";

const Nav = () => {
  const [current, setCurrent] = useState("");

  const handleCurrent = (buttonName: string) => {
    setCurrent(buttonName);
  };
  console.log(current);

  return (
    <header className="fixed top-0 flex px-6 w-full justify-start flex-col md:flex-row md:justify-center items-start md:items-center">
      <div className="mt-2 flex flex-col pl-4 pb-2 pr-4 text-gray-300">
        <Link href="/">
          <FaDev size={40} className="hover:animate-ping" />
        </Link>
      </div>

      {/* MENU */}
      <ul className="items-center justify-center pt-2 pb-2 flex text-gray-200 font-semibold">
        <li>
          <Link href="/">
            <button
              className={
                current === "home"
                  ? `flex w-full items-center justify-end px-4 py-2 hover:cursor-pointer overline decoration-2 bg-zinc-800 rounded-sm`
                  : `flex w-full items-center justify-end px-4 py-2 hover:cursor-pointer hover:overline decoration-2 hover:transition-all hover:bg-zinc-500/50 rounded-sm`
              }
              onClick={() => handleCurrent("home")}
            >
              <p>Home</p>
            </button>
          </Link>
        </li>

        <li>
          <Link href="/techskills">
            <button
              className={
                current === "skills"
                  ? `flex w-full items-center justify-end px-4 py-2 hover:cursor-pointer overline decoration-2 bg-zinc-800 rounded-sm`
                  : `flex w-full items-center justify-end px-4 py-2 hover:cursor-pointer hover:overline decoration-2 hover:transition-all hover:bg-zinc-500/50 rounded-sm`
              }
              onClick={() => handleCurrent("skills")}
            >
              <p>Skills</p>
            </button>
          </Link>
        </li>

        <li>
          <Link href="projects">
            <button
              className={
                current === "projects"
                  ? `flex w-full items-center justify-end px-4 py-2 hover:cursor-pointer overline decoration-2 bg-zinc-800 rounded-sm`
                  : `flex w-full items-center justify-end px-4 py-2 hover:cursor-pointer hover:overline decoration-2 hover:transition-all hover:bg-zinc-500/50 rounded-sm`
              }
              onClick={() => handleCurrent("projects")}
            >
              <p>Projects</p>
            </button>
          </Link>
        </li>
        <li>
          <Link href="contact">
            <button
              className={
                current === "contact"
                  ? `flex w-full items-center justify-end px-4 py-2 hover:cursor-pointer overline decoration-2 bg-zinc-800 rounded-sm`
                  : `flex w-full items-center justify-end px-4 py-2 hover:cursor-pointer hover:overline decoration-2 hover:transition-all hover:bg-zinc-500/50 rounded-sm`
              }
              onClick={() => handleCurrent("contact")}
            >
              <p>Contact</p>
            </button>
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Nav;
