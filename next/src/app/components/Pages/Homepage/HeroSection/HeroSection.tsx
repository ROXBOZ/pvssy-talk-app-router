import HeroButton from "./HeroSection__button";
import HeroImage from "./HeroSection__image";
import { HeroBlockData } from "./HeroSection.types";
import HeroText from "./HeroSection__text";
import React from "react";

const HeroSection: React.FC<{ data: HeroBlockData }> = ({ data }) => {
  if (!data) return null;

  const { callToAction, figure, title, text } = data;
  return (
    <section className="customGrid bg-primary-50 py-16 lg:py-0">
      <div className="col-span-6 col-start-1 flex items-center lg:col-span-3">
        <div className="flex flex-col gap-4 md:gap-8">
          <div className="flex flex-col gap-4">
            <h2 className="typography__heading text-3xl">{title}</h2>
            <HeroText text={text} />
          </div>
          <HeroButton callToAction={callToAction} />
        </div>
      </div>
      <div className="col-span-6 col-start-1 h-auto w-full lg:col-span-2 lg:col-start-5">
        <HeroImage figure={figure} title={title} />
      </div>
    </section>
  );
};

export default HeroSection;
