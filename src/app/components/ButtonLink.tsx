import Link from "next/link";

function ButtonLink({
  hasArrow = false,
  label = "Button",
  href = "#",
}: {
  hasArrow?: boolean;
  label?: string;
  href?: string;
}) {
  return (
    <Link
      className="group flex w-fit items-center gap-2 rounded-full bg-violet-300 px-6 py-2 ring-violet-400 ring-inset hover:ring-2 hover:delay-200 hover:duration-200 active:bg-violet-400"
      href={href}
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

export default ButtonLink;
