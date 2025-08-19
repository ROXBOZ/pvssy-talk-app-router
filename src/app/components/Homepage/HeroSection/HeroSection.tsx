import React from "react";
import HeroImage from "./HeroImage";
import HeroText from "./HeroText";
import HeroButton from "./HeroButton";

export interface HeroBlockData {
  title: string;
  text: string | any[];
  figure?: {
    altText?: string;
    image?: {
      asset?: { _ref?: string; _id?: string };
      alt?: string;
    };
  };
  callToAction?: {
    label: string;
    href?: string;
    linkRef?: {
      _id: string;
      _type: string;
      title?: string;
      slug?: { current: string };
    } | null;
    linkRes?: string;
    linkType?: string;
  };
}

const HeroSection: React.FC<{ data: HeroBlockData }> = ({ data }) => {
  if (!data) return null;

  const { callToAction, figure, title, text } = data;
  return (
    <section className="customGrid bg-primary-950/5 h-[95vh] py-8">
      <div className="col-span-6 col-start-1 flex items-center lg:col-span-3">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <h2 className="font-heading text-3xl">{title}</h2>
            <HeroText text={text} />
          </div>
          <HeroButton callToAction={callToAction} />
        </div>
      </div>
      <div className="bg-background col-span-6 col-start-1 w-full rounded-xl p-4 lg:col-span-3 lg:col-start-4">
        <HeroImage figure={figure} title={title} />
      </div>
    </section>
  );
};

export default HeroSection;
