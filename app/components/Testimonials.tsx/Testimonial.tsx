import Image from "next/image";
import React from "react";

interface TestimonialProps {
  image: string;
  name: string;
  role: string;
  description: string;
}

const Testimonial: React.FC<TestimonialProps> = ({
  image,
  name,
  role,
  description,
}) => {
  return (
    <div className="card flex flex-col gap-[33px] w-[270px] sm:min-w-[436px] px-[33px] py-[27px]">
      <div className="flex gap-2 items-center">
        <Image
          src={image}
          alt={`Profile picture for testimonial by ${name}`}
          width={38}
          height={28}
        />
        <div className="flex flex-col">
          <p className="text-sm">{name}</p>
          <p className="text-sm text-[#777]">{role}</p>
        </div>
      </div>
      <p className="text-xs sm:text-sm">{description}</p>
    </div>
  );
};

export default Testimonial;
