import ButtonLink from "./ButtonLink";
import React from "react";

function Card({ showButton }: { showButton: boolean }) {
  return (
    <div className="col-span-2 w-full overflow-hidden rounded-2xl bg-orange-50 shadow shadow-orange-100">
      <div className="aspect-video bg-orange-100 p-4">img</div>
      <div className="flex items-baseline justify-between gap-4 p-4">
        <h3 className="font-heading text-xl">Title</h3>
        {showButton && <ButtonLink hasArrow={true} />}
      </div>
    </div>
  );
}

export default Card;
