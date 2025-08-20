import Image from "next/image";
import React from "react";
import { urlFor } from "../../../../../config/sanity";
import ButtonLink from "../ButtonLink/ButtonLink";

export interface CardBaseProps {
  _id?: string;
  name?: string;
  label?: string;
  title?: string;
  mainImage?: {
    asset?: {
      _ref?: string;
      _id?: string;
      url?: string;
    };
    url?: string;
    [key: string]: unknown;
  };
  filters?: string[];
  href?: string;
  showButton: boolean;
  [key: string]: unknown;
}

const Card: React.FC<CardBaseProps> = ({
  name,
  label,
  title,
  mainImage,
  filters,
}) => {
  const imageUrl =
    mainImage && mainImage.asset && mainImage.asset._ref
      ? urlFor(mainImage.asset._ref).url()
      : null;
  //
  return (
    <div className="border-primary-100 group hover:bg-primary-100 bg-background col-span-6 w-full overflow-hidden rounded-2xl border-2 transition-colors duration-200 hover:cursor-pointer lg:col-span-2">
      {filters && filters.length > 0 && (
        <div className="absolute z-20 flex flex-wrap gap-1 p-2 text-sm">
          {filters.map((filter, idx) => (
            <span
              key={idx}
              className="group-hover:bg-tertiary-100 text-tertiary-800 bg-tertiary-200 rounded-full px-2 py-1 text-xs"
            >
              {filter}
            </span>
          ))}
        </div>
      )}{" "}
      <div className="flex aspect-video items-center justify-center overflow-hidden bg-black">
        <div className="group-hover:opacity-80 group-hover:transition group-hover:delay-200 group-hover:duration-200">
          {imageUrl ? (
            <div className="bg-primary-200">
              <Image
                src={imageUrl}
                width={800}
                height={500}
                alt={name || ""}
                className="transition-transform delay-200 duration-200 group-hover:scale-[102%]"
              />
            </div>
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-gray-200 text-gray-500">
              No image
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col p-4">
        <div className="flex items-baseline justify-between gap-2">
          <div>
            <h3 className="font-heading text-xl">
              {name || title || "Sans titre"}
            </h3>
          </div>
          <ButtonLink
            hasArrow={true}
            label={label || "Lire"}
            href=""
            color="primary"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
