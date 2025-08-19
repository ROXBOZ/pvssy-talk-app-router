import ButtonLink from "./ButtonLink";
import Image from "next/image";
import React from "react";
import { urlFor } from "../../../../config/sanity";

export interface CardBaseProps {
  _id?: string;
  name?: string;
  mainImage?: {
    asset: {
      _ref: string;
    };
  };
  filters?: string[];
  href?: string;
  showButton: boolean;
}

const Card: React.FC<CardBaseProps> = ({ name, mainImage, filters }) => {
  const imageUrl =
    mainImage && mainImage.asset && mainImage.asset._ref
      ? urlFor(mainImage.asset._ref).url()
      : null;

  return (
    <div className="border-primary-100 group hover:bg-primary-100 col-span-6 w-full overflow-hidden rounded-2xl border-2 bg-neutral-50 transition-colors duration-300 hover:cursor-pointer lg:col-span-2">
      {filters && filters.length > 0 && (
        <div className="absolute z-20 flex flex-wrap gap-1 p-2 text-sm">
          {filters.map((filter, idx) => (
            <span
              key={idx}
              className="group-hover:bg-primary-100 text-primary-800 bg-primary-200 rounded-full px-2 py-1 text-xs"
            >
              {filter}
            </span>
          ))}
        </div>
      )}{" "}
      <div className="flex aspect-video items-center justify-center overflow-hidden">
        {imageUrl ? (
          <Image
            src={imageUrl}
            width={800}
            height={500}
            alt={name || ""}
            className="transition-transform delay-200 duration-400 group-hover:scale-[102%]"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gray-200 text-gray-500">
            No image
          </div>
        )}
      </div>
      <div className="flex flex-col p-4">
        <div className="flex items-baseline justify-between gap-2">
          <div>
            <h3 className="font-heading text-xl">{name || "Sans titre"}</h3>
          </div>
          <ButtonLink hasArrow={true} label="Lire" href="" color="primary" />
        </div>
      </div>
    </div>
  );
};

export default Card;
