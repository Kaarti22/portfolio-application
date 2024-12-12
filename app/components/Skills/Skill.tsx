import React from "react";
import Image from "next/image";

interface SkillProps {
  name: string;
  icon: string;
}

const Skill: React.FC<SkillProps> = ({ name, icon }) => {
  return (
    <div className="relative flex gap-2 p-2 border-primary border rounded-lg h-[46px]">
      <Image src={icon} alt={`${name}`} width={25} height={20}/>
      <p className="text-lg">{name}</p>
    </div>
  );
};

export default Skill;
