export const dynamic = "force-static";

import ButtonLink from "../ButtonLink";
import React from "react";
import { client } from "../../../../config/sanity";

interface Stats {
  text: string;
  callToAction: {
    label: string;
    link: {
      slug: {
        current: string;
      };
    };
  };
}

export default async function Stats() {
  const data: Stats | null = await getData();
  if (!data) return null;

  return (
    <div className="customGrid bg-primary-100 h-[95vh] items-center justify-center">
      <div className="col-start-1 col-end-7 flex flex-col items-center gap-4 text-center lg:col-start-3 lg:col-end-5">
        {data.text && <p className="font-heading text-2xl">{data.text}</p>}
        {data.callToAction?.label && (
          <ButtonLink
            label={data.callToAction.label}
            href={`/${data.callToAction.link?.slug?.current ?? ""}`}
            hasArrow={true}
            color="violet"
          />
        )}
      </div>
    </div>
  );
}

async function getData(): Promise<Stats | null> {
  try {
    return await client.fetch(
      `*[_type == "homepage" && !(_id in path("drafts.**"))][0]{
        "dotsZone": content[_type == "dotsZone"][0]{
          text,
          callToAction{
            ...,
            link->{slug{current}}
          }
        }
      }.dotsZone`,
    );
  } catch (error) {
    console.error("Error fetching stats:", error);
    return null;
  }
}
