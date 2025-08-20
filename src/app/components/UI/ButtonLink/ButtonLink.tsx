import Link from "next/link";
import React from "react";

type ButtonLinkProps = {
  hasArrow?: boolean;
  arrowDirection?: "right" | "left" | "bottom";
  label: string;
  href?: string;
  color: "primary" | "secondary" | "border";
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit";
};

const ButtonLink: React.FC<ButtonLinkProps> = ({
  hasArrow,
  arrowDirection,
  label,
  href,
  color,
  onClick,
  disabled,
  type,
}) => {
  const baseClasses =
    "group flex h-fit w-fit items-center gap-2 rounded-full px-6 py-2 font-semibold ring-inset";
  const hoverClasses = disabled
    ? ""
    : "hover:ring-2 hover:delay-200 hover:duration-200";
  const colorClasses =
    color === "primary"
      ? "bg-primary-300 ring-primary-400 active:bg-primary-400"
      : color === "secondary"
        ? "bg-secondary-200 ring-secondary-300 active:bg-secondary-300"
        : "border-primary-400 ring-primary-300 active:bg-primary-300 border-2";
  const disabledButtonClasses = disabled
    ? "cursor-not-allowed opacity-50"
    : "cursor-pointer";
  const disabledLinkClasses = disabled
    ? "cursor-not-allowed opacity-50"
    : "cursor-pointer";

  // Arrow unicode map
  const arrowMap: Record<string, string> = {
    right: "→",
    left: "←",
    bottom: "↓",
  };
  // Arrow hover translation map
  const arrowHoverMap: Record<string, string> = {
    right: "group-hover:translate-x-1",
    left: "group-hover:-translate-x-1",
    bottom: "group-hover:translate-y-1",
  };

  if (href) {
    return (
      <Link
        href={href}
        className={`${baseClasses} ${hoverClasses} ${colorClasses} ${disabledLinkClasses}`}
        aria-disabled={disabled}
        tabIndex={disabled ? -1 : 0}
      >
        {hasArrow && arrowDirection === "left" && (
          <span
            className={`transition-transform duration-300 ${disabled ? "" : arrowHoverMap[arrowDirection as string] || "group-hover:translate-x-1"}`}
          >
            {arrowMap[arrowDirection as string] || "←"}
          </span>
        )}
        {label}
        {hasArrow && arrowDirection !== "left" && (
          <span
            className={`transition-transform duration-300 ${disabled ? "" : arrowHoverMap[arrowDirection as string] || "group-hover:translate-x-1"}`}
          >
            {arrowMap[arrowDirection as string] || "→"}
          </span>
        )}
      </Link>
    );
  }
  return (
    <button
      type={type}
      className={`${baseClasses} ${hoverClasses} ${colorClasses} ${disabledButtonClasses}`}
      onClick={onClick}
      disabled={disabled}
    >
      {hasArrow && arrowDirection === "left" && (
        <span
          className={`transition-transform duration-300 ${disabled ? "" : arrowHoverMap[arrowDirection as string] || "group-hover:translate-x-1"}`}
        >
          {arrowMap[arrowDirection as string] || "←"}
        </span>
      )}
      {label}
      {hasArrow && arrowDirection !== "left" && (
        <span
          className={`transition-transform duration-300 ${disabled ? "" : arrowHoverMap[arrowDirection as string] || "group-hover:translate-x-1"}`}
        >
          {arrowMap[arrowDirection as string] || "→"}
        </span>
      )}
    </button>
  );
};

export default ButtonLink;
