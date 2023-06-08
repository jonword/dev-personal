import Socials from "./socials/socials";

export default function Home() {
  return (
    <div className="mx-auto flex min-h-screen max-w-[1000px] flex-col p-24">
      <p className="text-gray-300">Hey, my name is</p>
      <h1 className="text-5xl font-bold md:text-7xl text-slate-400">
        Jonathan Word
      </h1>
      <h2 className="shrink text-3xl font-bold md:text-7xl text-sky-400/40">
        {"I'm"} a Software Developer.
      </h2>
      <p className="max-w-[700px] shrink flex-wrap py-3 text-gray-300">
        {"I'm"} a self taught software developer with a passion and focus on the
        frontend of web appllications.
      </p>
      <Socials />
    </div>
  );
}
