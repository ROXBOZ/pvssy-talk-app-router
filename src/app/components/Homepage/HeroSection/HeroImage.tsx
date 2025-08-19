import React from "react";
import Image from "next/image";
import { urlFor } from "../../../../../config/sanity";
import type { HeroBlockData } from "./HeroSection";

interface HeroImageProps {
  figure?: HeroBlockData["figure"];
  title: string;
}

const HeroImage: React.FC<HeroImageProps> = ({ figure, title }) => {
  const imageAsset = figure?.image?.asset;
  const imageSrc =
    imageAsset && (imageAsset._ref || imageAsset._id)
      ? urlFor(imageAsset._ref || imageAsset._id).url()
      : null;
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
