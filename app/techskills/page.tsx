import React from "react";
import Icons from "./icons";
import Skill from "./skill";

const TechSkills = () => {
  return (
    <div className="min-h-screen w-full">
      <div className="mx-auto flex h-full w-full max-w-[1000px] flex-col items-start md:items-center justify-center p-4">
        <p className="text-4xl font-bold text-slate-400">Skills</p>
        <p className="py-4 text-gray-200">
          As a frontend developer, I have experience with these technologies.
        </p>
        <div className="grid grid-cols-5 gap-3">
          {Icons.map((x) => (
            <Skill image={x.image} alt={x.alt} key={x.id} id={x.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechSkills;
