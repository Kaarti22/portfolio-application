import React from "react";

interface SectionHeaderProps {
  plainText: string;
  highlightText: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  plainText,
  highlightText,
}) => {
  return (
    <h2 className="text-[22px] md:text-[35px] px-20 text-center">
      {plainText}{" "}
      <span className="highlight px-2 whitespace-nowrap">{highlightText}</span>
    </h2>
  );
};

export default SectionHeader;
