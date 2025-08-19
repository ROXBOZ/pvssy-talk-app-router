import React from "react";
import ButtonLink from "../UIElements/ButtonLink/ButtonLink";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { urlFor } from "../../../../config/sanity";

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

  let buttonHref = data.callToAction?.href;
  if (data.callToAction) {
    if (data.callToAction.linkRef && data.callToAction.linkRef.slug) {
      buttonHref = `/${data.callToAction.linkRef.slug.current}`;
    } else if (data.callToAction.linkRes) {
      buttonHref = `/${data.callToAction.linkRes}`;
    }
  }

  console.log("data", data);

  return (
    <section className="customGrid h-[95vh]">
      <div className="col-span-6 col-start-1 flex items-center lg:col-span-3">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <h2 className="font-heading text-3xl">{data.title}</h2>
            {Array.isArray(data.text) ? (
              <PortableText value={data.text} />
            ) : (
              <p>{data.text}</p>
            )}
          </div>
          {data.callToAction?.label && buttonHref && (
            <ButtonLink
              hasArrow={true}
              label={data.callToAction.label}
              href={buttonHref}
              color="primary"
            />
          )}
        </div>
      </div>
      <div className="bg-primary-100 col-span-6 col-start-1 w-full rounded-xl p-4 lg:col-span-3 lg:col-start-4">
        {data.figure &&
        data.figure.image &&
        data.figure.image.asset &&
        (data.figure.image.asset._ref || data.figure.image.asset._id) ? (
          <Image
            src={urlFor(
              data.figure.image.asset._ref || data.figure.image.asset._id,
            ).url()}
            width={800}
            height={500}
            alt={
              data.figure.altText || data.figure.image.alt || data.title || ""
            }
            className="h-auto w-full rounded-xl object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gray-200 text-gray-500">
            No image
          </div>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
