import React from "react";
import { PortableText } from "@portabletext/react";
import { HeroTextProps } from "./HeroSection.types";

const HeroText: React.FC<HeroTextProps> = ({ text }) => {
  return Array.isArray(text) ? <PortableText value={text} /> : <p>{text}</p>;
};

export default HeroText;
