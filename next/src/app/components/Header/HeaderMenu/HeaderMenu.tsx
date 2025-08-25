import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

function HeaderMenu({ open = true }: { open?: boolean }) {
  const bgRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(open);

  useEffect(() => {
    if (open) setVisible(true);
  }, [open]);

  useEffect(() => {
    if (visible && open) {
      gsap.fromTo(
        bgRef.current,
        { scale: 0, transformOrigin: "100% 0%" },
        { scale: 1, duration: 0.3, ease: "power2.out" },
      );
    }
  }, [visible, open]);

  useEffect(() => {
    if (!open && visible) {
      gsap.to(bgRef.current, {
        scale: 0,
        transformOrigin: "100% 0%",
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => {
          setVisible(false);
        },
      });
    }
  }, [open, visible]);

  if (!visible) return null;

  return (
    <div className="bg-primary-400/80 absolute inset-0 z-40 h-screen w-screen p-24">
      <div
        ref={bgRef}
        className="bg-background relative flex h-full w-full origin-top-right transform rounded-xl p-4"
      >
        HeaderMenu
      </div>
    </div>
  );
}

export default HeaderMenu;
