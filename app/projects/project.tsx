import Image, { StaticImageData } from "next/image";
import React from "react";

interface Props {
  image: StaticImageData;
  title: string;
  alt: string;
  techList: string;
  description: string;
  live: string;
  repo: string;
  id: number;
}

const Project = (props: Props) => {
  const { image, title, alt, techList, description, live, repo, id } = props;

  return (
    <div className="card flex  max-h-[400px] max-w-[400px] shrink flex-col items-center justify-center border border-subtitle bg-projects p-2 shadow-lg shadow-shadow">
      <header className="card-header text-center text-gray-200">
        <h3 className="mt-2">{title}</h3>
      </header>
      <Image src={image} alt={alt} className="mt-4 mb-2 p-2" />
      <p className="mb-2 text-center text-sm italic text-gray-400">
        Tools used: {techList}
      </p>
      <p className="pb-4 text-center text-gray-200">{description}</p>
      <div className="flex justify-center gap-6 pb-1">
        <p className="underline hover:overline text-gray-200">
          <a href={live} target="_blank" rel="noreferrer">
            Live
          </a>
        </p>

        <p className="underline hover:overline text-gray-200">
          <a href={repo} target="_blank" rel="noreferrer">
            Repo
          </a>
        </p>
      </div>
    </div>
  );
};

export default Project;
