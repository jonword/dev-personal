import React from "react";
import Socials from "../socials/socials";
import { z } from "zod";

const Contact = () => {
  return (
    <div
      className="flex min-h-screen w-full flex-col p-24"
      id="contact items-center"
    >
      <h1 className="pb-4 text-3xl text-white">Contact</h1>
      <form
        name="Contact"
        method="POST"
        className="flex w-full max-w-[600px] flex-col"
      >
        <input type="hidden" name="form-name" value="Contact" />

        <div className="">
          <p className="pb-6 text-white"></p>
        </div>
        <input type="text" placeholder="Name" name="name" className="p-2" />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          className="my-4 p-2"
        />
        <textarea
          name="message"
          placeholder="Message"
          className="p-2"
          rows={10}
        />
        <button
          type="submit"
          className=" mx-auto mt-2 flex items-center border-2 border-gray-400 px-12 py-4 text-lg font-bold text-white hover:bg-green-700 duration-200"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
