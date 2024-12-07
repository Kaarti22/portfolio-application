import cn from "classnames";
import React from "react";

interface NavItemProps {
  section: string;
  activeSection: string;
  setActiveSection: (section: string) => void;
  scrollToSection: (section: string) => void;
  setIsOpen: (isOpen: boolean) => void;
}

const NavItem: React.FC<NavItemProps> = ({
  section,
  activeSection,
  setActiveSection,
  scrollToSection,
  setIsOpen,
}) => {
  return (
    <div
      className={cn("rounded p-1 whitespace-nowrap cursor-pointer duration-300 ease-in-out", {
        "bg-primary text-white": activeSection === section,
      })}
      onClick={() => {
        setActiveSection(section);
        scrollToSection(section);
        setIsOpen(false);
      }}
    >
      {section.charAt(0).toUpperCase() + section.slice(1)}
    </div>
  );
};

export default NavItem;
