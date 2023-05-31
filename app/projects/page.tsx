import React from "react";
import Project from "./project";
import projectdata from "./projectdata";

const Projects = () => {
  return (
    <>
      <div id="projects" className=" w-full min-h-screen">
        <div className="mx-auto flex h-full w-full max-w-[1000px] flex-col justify-center p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 shrink items-center justify-center gap-6 p-4 flex-row">
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
