import { HeroButtonProps } from "./heroSection.types";
import LinkButton from "@/app/components/UI/LinkButton";
import React from "react";

const HeroButton: React.FC<HeroButtonProps> = ({ callToAction }) => {
  if (!callToAction) return null;
  let buttonHref = callToAction.href;
  if (callToAction.linkRef && callToAction.linkRef.slug) {
    buttonHref = `/${callToAction.linkRef.slug.current}`;
  } else if (callToAction.linkRes) {
    buttonHref = `/${callToAction.linkRes}`;
  }

  if (!callToAction.label) return null;

  return (
    <LinkButton
      hasArrow={true}
      label={callToAction.label}
      href={buttonHref}
      color="primary"
      onClick={callToAction.onClick}
    />
  );
};

export default HeroButton;
