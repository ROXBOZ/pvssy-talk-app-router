import Link from "next/link";
import React from "react";

type ButtonLinkProps = {
  hasArrow?: boolean;
  label: string;
  href?: string;
  color: "primary" | "secondary" | "border";
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit";
};

const ButtonLink: React.FC<ButtonLinkProps> = ({
  hasArrow,
  label,
  href,
  color,
  onClick,
  disabled,
  type,
}) => {
  if (href) {
    return (
      <Link
        href={href}
        className={`group flex h-fit w-fit cursor-pointer items-center gap-2 rounded-full px-6 py-2 font-semibold ring-inset hover:ring-2 hover:delay-200 hover:duration-200 ${color === "primary" ? "bg-primary-300 ring-primary-400 active:bg-primary-400" : color === "secondary" ? "bg-secondary-200 ring-secondary-300 active:bg-secondary-300" : "border-primary-400 ring-primary-300 active:bg-primary-300 border-2"} `}
        aria-disabled={disabled}
        tabIndex={disabled ? -1 : 0}
      >
        {label}
        {hasArrow && (
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        )}
      </Link>
    );
  }
  return (
    <button
      type={type}
      className={`group flex h-fit w-fit cursor-pointer items-center gap-2 rounded-full px-6 py-2 font-semibold ring-inset hover:ring-2 hover:delay-200 hover:duration-200 ${color === "primary" ? "bg-primary-300 ring-primary-400 active:bg-primary-400" : color === "secondary" ? "bg-secondary-200 ring-secondary-300 active:bg-secondary-300" : "border-primary-400 ring-primary-300 active:bg-primary-300 border-2"} `}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
      {hasArrow && (
        <span className="transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      )}
    </button>
  );
};

export default ButtonLink;
