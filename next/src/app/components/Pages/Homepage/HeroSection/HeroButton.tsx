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
  // If no label, don't render
  if (!callToAction.label) return null;
  // If href is present, render as link; else as button
  return (
    <ButtonLink
      hasArrow={true}
      label={callToAction.label}
      href={buttonHref}
      color="primary"
      onClick={callToAction.onClick}
    />
  );
};

export default HeroButton;
