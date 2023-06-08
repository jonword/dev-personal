import React from "react";
import Socials from "../socials/socials";
import { z } from "zod";
import ContactForm from "./form";

const Contact = () => {
  return (
    <div
      className="flex min-h-screen w-full flex-col p-24 items-center"
      id="contact"
    >
      <h1 className="pb-4 text-3xl text-white">Contact</h1>
      <ContactForm />
    </div>
  );
};

export default Contact;
