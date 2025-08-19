import ButtonLink from "../UIElements/ButtonLink";
import React from "react";

function HeroSection() {
  return (
    <section className="customGrid h-[95vh]">
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
          <ButtonLink hasArrow={true} label="" href="" color="primary" />
        </div>
      </div>
      <div className="bg-primary-100 col-span-6 col-start-1 w-full rounded-xl p-4 lg:col-span-3 lg:col-start-4">
        img
      </div>
    </section>
  );
}

export default HeroSection;
