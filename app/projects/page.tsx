import React from "react";
import Project from "./project";
import projectdata from "./projectdata";

const Projects = () => {
  return (
    <>
      <div id="projects" className="mt-20 w-full lg:h-screen">
        <div className="mx-auto flex h-full w-full max-w-[1000px] flex-col justify-center p-4">
          <p className="text-center text-4xl font-bold text-gray-200">
            Projects
          </p>
          <div className="flex shrink flex-col items-center justify-center gap-12 p-4 lg:flex-row">
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
