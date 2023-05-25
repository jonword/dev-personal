import React from "react";
import Icons from "./icons";
import Skill from "./skill";

const TechSkills = () => {
  return (
    <div className="h-screen w-full">
      <div className="mx-auto flex h-full w-full max-w-[1000px] flex-col items-center justify-center p-4">
        <p className="inline text-4xl font-bold text-slate-400">Skills</p>
        <p className="py-4 text-center text-gray-200">
          As a frontend developer, I have experience with these technologies.
        </p>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {Icons.map((x) => (
            <Skill image={x.image} alt={x.alt} key={x.id} id={x.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechSkills;
