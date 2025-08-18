import ButtonLink from "../ButtonLink";
import React from "react";

function StatsScreen() {
  return (
    <div className="h-[95vh] customGrid items-center justify-center bg-gray-100">
      <div className="flex flex-col col-start-1 col-end-7 lg:col-start-3 lg:col-end-5 text-center items-center gap-4">
        <p className="text-2xl font-heading">
          Les douleurs pendant les rapports sexuels concernent une personne à
          vulve sur cinq. C’est loin d’être un problème isolé.
        </p>
        <ButtonLink />
      </div>
    </div>
  );
}

export default StatsScreen;
