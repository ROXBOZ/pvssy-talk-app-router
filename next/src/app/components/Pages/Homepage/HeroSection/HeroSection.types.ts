import { PortableTextBlock } from "@portabletext/react";

export interface HeroButtonProps {
  callToAction?: HeroBlockData["callToAction"];
}

export interface HeroImageProps {
  figure?: HeroBlockData["figure"];
  title: string;
}

export interface HeroBlockData {
  title: string;
  text: string | PortableTextBlock[];
  figure?: {
    altText?: string;
    image?: {
      asset?: { _ref?: string; _id?: string };
      alt?: string;
    };
  };
  callToAction?: {
    label: string;
    href?: string;
    linkRef?: {
      _id: string;
      _type: string;
      title?: string;
      slug?: { current: string };
    } | null;
    linkRes?: string;
    linkType?: string;
    onClick?: () => void;
  };
}

export interface HeroTextProps {
  text: string | PortableTextBlock[];
}
