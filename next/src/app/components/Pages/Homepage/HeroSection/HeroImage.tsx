import React from "react";
import Image from "next/image";

import type { HeroBlockData } from "./HeroSection";
import { urlFor } from "../../../../../../config/sanity";

interface HeroImageProps {
  figure?: HeroBlockData["figure"];
  title: string;
}

const HeroImage: React.FC<HeroImageProps> = ({ figure, title }) => {
  const imageAsset = figure?.image?.asset;
  let imageSrc: string | null = null;
  if (imageAsset) {
    const refOrId = imageAsset._ref || imageAsset._id;
    if (typeof refOrId === "string") {
      imageSrc = urlFor(refOrId).url();
    }
  }
  const imageAlt = figure?.altText || figure?.image?.alt || title || "";

  if (!imageSrc) {
    return (
      <div className="flex h-full w-full items-center justify-center bg-gray-200 text-gray-500">
        No image
      </div>
    );
  }

  return (
    <Image
      src={imageSrc}
      width={600}
      height={500}
      alt={imageAlt}
      className="h-full w-auto rounded-xl object-contain"
    />
  );
};

export default HeroImage;
