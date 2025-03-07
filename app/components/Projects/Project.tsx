import Image from "next/image";
import React from "react";

interface ProjectProps {
  thumbnail: string;
  title: string;
  link: {
    url: string;
    label: string;
  };
  description: string;
  languageIcons: string[];
}

const Project: React.FC<ProjectProps> = ({
  thumbnail,
  title,
  link,
  description,
  languageIcons,
}) => {
  return (
    <div className="card flex flex-col items-stretch w-full max-w-[428.4px] p-5 md:p-[18px] gap-[30px]">
      <Image
        src={thumbnail}
        alt={`Thumbnail for ${title}`}
        width={392}
        height={230}
        className="w-full h-[230px] object-cover rounded-lg"
      />
      <div className="flex flex-col gap-[11px]">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold text-xl md:text-[22px]">{title}</h3>
          <a
            href={link.url}
            className="flex items-center justify-center px-[5px] py-[3px] gap-1 bg-[#b9b9b9] bg-opacity-[24%] rounded text-[14px]"
          >
            <span>{link.label}</span>
          </a>
        </div>
        <p className="line-clamp-2 text-sm md:text-base">{description}</p>
        <div className="flex flex-row gap-[11px]">
          {languageIcons.map((icon, iconId) => (
            <Image
              key={iconId}
              src={icon}
              alt="Language icon"
              height={25}
              width={25}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
