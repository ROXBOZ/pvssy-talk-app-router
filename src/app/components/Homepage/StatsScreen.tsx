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

export default async function StatsScreen() {
  const stats: Stats | null = await getStatsScreenData();
  if (!stats) return null;

  return (
    <div className="customGrid h-[95vh] items-center justify-center bg-violet-100">
      <div className="col-start-1 col-end-7 flex flex-col items-center gap-4 text-center lg:col-start-3 lg:col-end-5">
        {stats.text && <p className="font-heading text-2xl">{stats.text}</p>}
        {stats.callToAction?.label && (
          <ButtonLink
            label={stats.callToAction.label}
            href={`/${stats.callToAction.link?.slug?.current ?? ""}`}
            hasArrow={true}
          />
        )}
      </div>
    </div>
  );
}

async function getStatsScreenData(): Promise<Stats | null> {
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
