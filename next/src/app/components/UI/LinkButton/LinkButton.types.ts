export type LinkButtonProps = {
  hasArrow?: boolean;
  arrowDirection?: "right" | "left" | "bottom";
  label: string;
  href?: string;
  color: "primary" | "secondary" | "border";
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit";
  className?: string;
};
