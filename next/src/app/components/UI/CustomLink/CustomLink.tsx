import "./underline-animate.css";
import "./arrow-animate.css";

import Link from "next/link";
import React from "react";

function CustomLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const isExternal = /^https?:\/\//.test(href);
  return (
    <Link
      href={href}
      className="underline-animate active:text-primary-700"
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      <span>
        {children}
        {isExternal && (
          <span
            className="arrow-animate"
            aria-hidden="true"
            style={{ display: "inline-block", marginLeft: 2 }}
          >
            ↗
          </span>
        )}
      </span>
      <span className="underline-animate__line" />
    </Link>
  );
}

export default CustomLink;
