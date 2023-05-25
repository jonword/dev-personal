import Image from "next/image";
import Socials from "./socials/socials";

export default function Home() {
  return (
    <main className="h-screen w-full">
      {/* CONTAINER */}
      <div className="mx-auto flex h-full max-w-[1000px] flex-col justify-center px-8">
        <p className="text-gray-300">Hey, my name is</p>
        <h1 className="text-4xl font-bold md:text-7xl text-slate-400">
          Jonathan Word
        </h1>
        <h2 className="shrink text-2xl font-bold md:text-7xl text-sky-400/40">
          I'm a Software Developer.
        </h2>
        <p className="max-w-[700px] shrink flex-wrap py-4 text-gray-300">
          I'm a self taught software developer with a passion and focus on the
          frontend of web appllications.
        </p>
        <Socials />
      </div>
    </main>
  );
}
