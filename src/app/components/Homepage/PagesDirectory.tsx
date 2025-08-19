import Card, { CardBaseProps } from "../UIElements/Card";
import React from "react";

export interface PageDirectoryData {
  title: string;
  cards: Array<{
    _id: string;
    title: string;
    description: string;
    image: {
      asset: {
        _id: string;
        url: string;
      };
    };
  }>;
}

const PagesDirectory: React.FC<{ data: PageDirectoryData }> = ({ data }) => {
  const cards: CardBaseProps[] = data.cards.map((card) => {
    return {
      _id: card._id,
      title: card.title,
      description: card.description,
      mainImage: {
        ...card.image,
        asset: {
          _ref: card.image.asset._id,
          ...card.image.asset,
        },
      },
      showButton: true,
    };
  });

  return (
    <section>
      <div className="p-4">
        <h2 className="font-heading text-3xl">{data.title}</h2>
      </div>
      <div className="customGrid">
        {cards && cards.length > 0 ? (
          cards.map((card) => <Card key={card._id} {...card} />)
        ) : (
          <div>No pages found.</div>
        )}
      </div>
    </section>
  );
};

export default PagesDirectory;
