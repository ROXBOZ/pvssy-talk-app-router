import React from "react";
import Card from "../UI/Card/Card";

export interface PageDirectoryData {
  title: string;
  cards: Array<{
    _id: string;
    title: string;
    description: string;
    image?: {
      asset?: {
        _id?: string;
        _ref?: string;
        url?: string;
      };
      url?: string;
    };
    mainImage?: {
      asset?: {
        _id?: string;
        _ref?: string;
        url?: string;
      };
      url?: string;
    };
    figure?: {
      image?: {
        asset?: {
          _id?: string;
          _ref?: string;
          url?: string;
        };
        url?: string;
      };
    };
    [key: string]: unknown;
  }>;
}

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
        <h2 className="font-heading text-3xl">{data.title}</h2>
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
