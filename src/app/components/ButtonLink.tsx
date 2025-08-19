import Link from "next/link";

function ButtonLink({
  hasArrow,
  label,
  href,
  color,
}: {
  hasArrow: boolean;
  label: string;
  href: string;
  color: "violet" | "lime";
}) {
  return (
    <Link
      className={`group flex h-fit w-fit items-center gap-2 rounded-full ${color === "violet" ? "bg-primary-300 ring-primary-400 active:bg-primary-400" : "bg-secondary-200 ring-secondary-300 active:bg-secondary-300"} px-6 py-2 font-semibold ring-inset hover:ring-2 hover:delay-200 hover:duration-200`}
      href={href}
    >
      {label ? label : "Default Label"}
      {hasArrow && (
        <span className="transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      )}
    </Link>
  );
}

export default ButtonLink;
