"use client";

import React from "react";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const ContactForm = () => {
  const formSchema = z.object({
    name: z.string().min(3, "Must have at least 3 characters").max(100),
    email: z.string().email("Invalid email").min(1, "Email is required"),
    message: z.string(),
  });

  type FormSchemaType = z.infer<typeof formSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormSchemaType>({ resolver: zodResolver(formSchema) });

  return (
    <>
      <form
        name="Contact"
        action="https://formsubmit.co/jonathanword.dev@gmail.com"
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
    </>
  );
};

export default ContactForm;
