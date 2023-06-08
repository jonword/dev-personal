import React from "react";
import Project from "./project";
import projectdata from "./projectdata";

const Projects = () => {
  return (
    <>
      <div id="projects" className=" w-full min-h-screen p-24">
        <div className="mx-auto flex h-full w-full max-w-[1000px] flex-col justify-center p-4">
          <div className="flex md:flex-row flex-col items-center justify-center gap-10 p-4">
            {projectdata.map((p) => (
              <Project
                id={0}
                key={p.id}
                title={p.title}
                image={p.image}
                alt={p.alt}
                techList={p.techList}
                description={p.description}
                live={p.live}
                repo={p.repo}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
