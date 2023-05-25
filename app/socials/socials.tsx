import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Socials = () => {
  return (
    <>
      <div className="flex md:justify-center ">
        <ul className="flex text-white/50 border-y border-green-300/50">
          <li className="flex h-12 w-12 items-center justify-center px-2">
            <a
              className="flex w-full items-center justify-between hover:text-[#0077b5]"
              href="https://www.linkedin.com/in/jonathan-word-80b8551b6"
              aria-label="website link"
              target="_blank"
            >
              <FaLinkedin size={30} />
            </a>
          </li>

          <li className="flex h-12 w-12 items-center justify-between px-2">
            <a
              className="flex w-full items-center justify-between hover:text-[#6E5494]"
              href="https://github.com/jonword"
              aria-label="contact email"
              target="_blank"
            >
              <FaGithub size={30} />
            </a>
          </li>

          <li className="flex h-12 w-12 items-center justify-between px-2">
            <a
              className="flex w-full items-center justify-between hover:text-[#4e9c75]"
              href="mailto:jonathanword.dev@gmail.com"
            >
              <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="flex h-12 w-12 items-center justify-between px-2">
            <a
              className="flex w-full items-center justify-between hover:text-slate-600"
              target="_blank"
              href="https://drive.google.com/file/d/1kb3wuacLKyUmRszQP5_PLsuLPB0cCjXb/view?usp=sharing"
            >
              <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Socials;
