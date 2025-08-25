import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import LinkButton from "../../UI/LinkButton";
import { MenuGridProps } from "./Menu.types";

const menus = [
  {
    id: "informer",
    label: "S'informer",
    items: ["S'informer 1", "S'informer 2", "S'informer 3", "S'informer 4"],
  },
  {
    id: "soigner",
    label: "Se soigner",
    items: ["Se soigner 1", "Se soigner 2", "Se soigner 3", "Se soigner 4"],
  },
];

const MenuGrid: React.FC<MenuGridProps> = ({ items }) => {
  return (
    <div className="divide-primary-400 grid h-full w-full grid-cols-4 gap-4 divide-x">
      {items.map((item, idx) => (
        <div key={idx} className="flex flex-col gap-2">
          <span className="typography__heading text-xl font-semibold">
            {item}
          </span>
        </div>
      ))}
    </div>
  );
};

function HeaderMenu({ open = true }: { open?: boolean }) {
  const bgRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(open);
  const [picked, setPicked] = useState<string | null>(menus[0].id);

  useEffect(() => {
    if (open && visible) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [open, visible]);

  useEffect(() => {
    if (open) {
      setPicked(menus[0].id);
    } else {
      setPicked(null);
    }
  }, [open]);

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
    <div className="bg-primary-400/95 fixed inset-0 z-40 h-screen w-screen p-24">
      <div
        ref={bgRef}
        className="bg-background relative flex h-full w-full origin-top-right transform flex-col rounded-xl p-4"
      >
        <div className="mb-8 flex items-center justify-center gap-4">
          {menus.map((menu) => (
            <LinkButton
              key={menu.id}
              label={menu.label}
              color="primary"
              onClick={() => setPicked(menu.id)}
            />
          ))}
        </div>

        {picked && (
          <MenuGrid
            items={menus.find((menu) => menu.id === picked)?.items || []}
          />
        )}
      </div>
    </div>
  );
}

export default HeaderMenu;
