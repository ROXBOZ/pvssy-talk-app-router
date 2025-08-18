import ButtonLink from "../ButtonLink";
import React from "react";

function StatsScreen() {
  return (
    <div className="customGrid h-[95vh] items-center justify-center bg-violet-100">
      <div className="col-start-1 col-end-7 flex flex-col items-center gap-4 text-center lg:col-start-3 lg:col-end-5">
        <p className="font-heading text-2xl">
          Les douleurs pendant les rapports sexuels concernent une personne à
          vulve sur cinq. C’est loin d’être un problème isolé.
        </p>
        <ButtonLink hasArrow={false} />
      </div>
    </div>
  );
}

export default StatsScreen;
