import React from "react";
import Image from "next/image";

import { useSanityImageUrl } from "../../../../../../config/sanity";
import { HeroImageProps } from "./HeroSection.types";

const HeroImage: React.FC<HeroImageProps> = ({ figure, title }) => {
  const imageAsset = figure?.image?.asset;
  const refOrId = imageAsset?._ref || imageAsset?._id;
  const imageSrc = useSanityImageUrl(refOrId);
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
