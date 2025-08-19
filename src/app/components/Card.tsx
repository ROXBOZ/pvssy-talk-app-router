import ButtonLink from "./ButtonLink";
import React from "react";

function Card({ showButton }: { showButton: boolean }) {
  return (
    <div className="col-span-2 w-full overflow-hidden rounded-2xl border-2 border-violet-100 bg-neutral-50">
      <div className="aspect-video p-4">img</div>
      <div className="flex items-baseline justify-between gap-4 p-4">
        <h3 className="font-heading text-xl">Title</h3>
        {showButton && (
          <ButtonLink hasArrow={true} label="" href="" color="violet" />
        )}
      </div>
    </div>
  );
}

export default Card;
