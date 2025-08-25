import Card from "../../../UI/Card/Card";
import React from "react";
import { PageDirectoryData } from "./PageDirectory.types";

const PagesDirectory: React.FC<{ data: PageDirectoryData }> = ({ data }) => {
  const cards = data.cards.map((card) => {
    if (!card.mainImage && card.figure?.image) {
      return {
        ...card,
        mainImage: card.figure.image,
      };
    } else if (!card.mainImage && card.image) {
      return {
        ...card,
        mainImage: card.image,
      };
    }
    return card;
  });

  return (
    <section>
      <div className="p-4">
        <h2 className="typography__heading text-3xl">{data.title}</h2>
      </div>
      <div className="customGrid">
        {cards && cards.length > 0 ? (
          cards.map((card, i) => <Card key={i} {...card} showButton={true} />)
        ) : (
          <div>No pages found.</div>
        )}
      </div>
    </section>
  );
};

export default PagesDirectory;
