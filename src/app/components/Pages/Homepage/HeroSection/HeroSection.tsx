import React from "react";
import HeroImage from "./HeroImage";
import HeroText from "./HeroText";
import HeroButton from "./HeroButton";
import { PortableTextBlock } from "@portabletext/react";

export interface HeroBlockData {
  title: string;
  text: string | PortableTextBlock[];
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
    <section className="customGrid bg-primary-50 py-16 lg:py-0">
      <div className="col-span-6 col-start-1 flex items-center lg:col-span-3">
        <div className="flex flex-col gap-4 md:gap-8">
          <div className="flex flex-col gap-4">
            <h2 className="font-heading text-3xl">{title}</h2>
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
