import ButtonLink from "./ButtonLink";
import React from "react";

function Card({ showButton }: { showButton: boolean }) {
  return (
    <div className="bg-gray-100 col-span-2 w-full">
      <div className="bg-gray-200 aspect-video">img</div>
      <div className="p-4 flex justify-between items-baseline gap-4">
        <h3 className="font-heading text-xl">Title</h3>
        {showButton && <ButtonLink />}
      </div>
    </div>
  );
}

export default Card;
