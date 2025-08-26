import { HeroTextProps } from "./heroSection.types";
import { PortableText } from "@portabletext/react";
import React from "react";

const HeroText: React.FC<HeroTextProps> = ({ text }) => {
  return Array.isArray(text) ? <PortableText value={text} /> : <p>{text}</p>;
};

export default HeroText;
