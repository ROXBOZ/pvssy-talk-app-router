import React from "react";
import type { HeroBlockData } from "./HeroSection";
import ButtonLink from "@/app/components/UI/ButtonLink/ButtonLink";

interface HeroButtonProps {
  callToAction?: HeroBlockData["callToAction"];
}

const HeroButton: React.FC<HeroButtonProps> = ({ callToAction }) => {
  if (!callToAction) return null;
  let buttonHref = callToAction.href;
  if (callToAction.linkRef && callToAction.linkRef.slug) {
    buttonHref = `/${callToAction.linkRef.slug.current}`;
  } else if (callToAction.linkRes) {
    buttonHref = `/${callToAction.linkRes}`;
  }
  if (!callToAction.label || !buttonHref) return null;
  return (
    <ButtonLink
      hasArrow={true}
      label={callToAction.label}
      href={buttonHref}
      color="primary"
    />
  );
};

export default HeroButton;
