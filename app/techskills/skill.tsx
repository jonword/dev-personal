import { StaticImageData } from "next/image";
import React from "react";
import Image from "next/image";

interface Props {
  image: StaticImageData;
  alt: string;
  id: number;
}

const Skill = (props: Props) => {
  const { image, alt, id } = props;
  return (
    <div>
      <Image src={image} alt={alt} height={64} width={64} />
    </div>
  );
};

export default Skill;
