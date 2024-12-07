import React from "react";

interface SkillProps {
  name: string;
  icon: string;
}

const Skill: React.FC<SkillProps> = ({ name, icon }) => {
  return (
    <div className="relative flex gap-2 p-2 border-primary border rounded-lg h-[46px]">
      <img src={icon} alt={`${name} icon`} />
      <p className="text-lg">{name}</p>
    </div>
  );
};

export default Skill;
