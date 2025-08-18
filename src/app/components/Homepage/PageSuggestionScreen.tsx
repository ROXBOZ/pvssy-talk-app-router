import ButtonLink from "../ButtonLink";
import Link from "next/link";
import React from "react";

function PageSuggestionScreen() {
  return (
    <div className="customGrid h-[95vh]">
      <div className="col-span-6 col-start-1 flex items-center lg:col-span-3">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <h2 className="font-heading text-3xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
              incidunt nobis.
            </h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio
              provident debitis in aut, consequatur nam eveniet adipisci quidem
              nulla. Modi commodi quos quas ipsam est doloremque reiciendis ad
              illo perspiciatis!
            </p>
          </div>
          <ButtonLink hasArrow={true} />
        </div>
      </div>
      <div className="col-span-6 col-start-1 w-full bg-gray-200 lg:col-span-3 lg:col-start-4">
        img
      </div>
    </div>
  );
}

export default PageSuggestionScreen;
