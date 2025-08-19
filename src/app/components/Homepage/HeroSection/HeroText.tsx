import React from "react";
import { PortableText, PortableTextBlock } from "@portabletext/react";

interface HeroTextProps {
  text: string | PortableTextBlock[];
}

const HeroText: React.FC<HeroTextProps> = ({ text }) => {
  return Array.isArray(text) ? <PortableText value={text} /> : <p>{text}</p>;
};

export default HeroText;
