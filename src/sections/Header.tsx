"use client";

import { FC, useEffect, useState } from "react";
import Button from "@/components/Button";
import { motion, useAnimate } from "framer-motion";

/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
const navItems = [
  {
    label: "About",
    href: "#intro",
  },
  {
    label: "Selected Works",
    href: "#projects",
  },
   {
    label: "Motion Designs",
    href: "#motion",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

const Header: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [topLineScope, topLineAnimate] = useAnimate();
  const [bottomLineScope, bottomLineAnimate] = useAnimate();
  const [navScope, navAnimate] = useAnimate();

  useEffect(() => {
    if (isOpen) {
      topLineAnimate([
        [
          topLineScope.current,
          {
            translateY: 4,
          },
        ],
        [
          topLineScope.current,
          {
            rotate: 45,
          },
        ],
      ]);
      bottomLineAnimate([
        [
          bottomLineScope.current,
          {
            translateY: -4,
          },
        ],
        [
          bottomLineScope.current,
          {
            rotate: -45,
          },
        ],
      ]);
      navAnimate(
        navScope.current,
        {
          height: "100%",
        },
        {
          duration: 0.7,
        }
      );
    } else {
      topLineAnimate([
        [
          topLineScope.current,
          {
            rotate: 0,
          },
        ],
        [
          topLineScope.current,
          {
            translateY: 0,
          },
        ],
      ]);
      bottomLineAnimate([
        [
          bottomLineScope.current,
          {
            rotate: 0,
          },
        ],
        [
          bottomLineScope.current,
          {
            translateY: 0,
          },
        ],
      ]);
      navAnimate(navScope.current, {
        height: 0,
      });
    }
  }, [
    isOpen,
    topLineScope,
    bottomLineScope,
    topLineAnimate,
    bottomLineAnimate,
    navScope,

    navAnimate,
  ]);
  const handleClickMobileNavItem = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsOpen(false);
    const url = new URL(e.currentTarget.href);
    const hash = url.hash;
    const target = document.querySelector(hash);
    if (!target) return;
    target.scrollIntoView({
      behavior: "smooth",
    });
    //element.scrollIntoView({
    //   behavior: "smooth",
    // });
  };

  return (
    <header id="home">
      <div
        className="fixed top-0 left-0 right-0 w-full h-0 overflow-hidden bg-stone-900 z-10"
        ref={navScope}
      >
        <nav className="mt-20 flex flex-col">
          {navItems.map(({ label, href }) => (
            <a
              href={href}
              key={label}
              className="text-stone-200 border-t border-stone-800 last:border-b py-8 group/nav-item relative isolate"
              onClick={handleClickMobileNavItem}
            >
              <div className="container !max-w-full flex items-center justify-between">
                <span className="text-3xl group-hover/nav-item:pl-4 transition-all duration-500">
                  {label}
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </div>
              <div className="absolute w-full h-0 bg-red-orange-500 group-hover/nav-item:h-full transition duration-500 bottom-0 -z-10"></div>
            </a>
          ))}
        </nav>
      </div>
      <div className="fixed top-0 left-0 right-0  w-full mix-blend-difference  backdrop-blur-md z-10   ">
        <div className="container !max-w-full">
          <div className="flex  justify-between h-20 items-center">
            <button
              onClick={() => {
                const topSection = document.querySelector("#home");
                if (topSection) {
                  topSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="cursor-pointer text-xl font-bold uppercase text-white pointer-events-auto"
            >
              Ashish&nbsp;W*
            </button>
          </div>
        </div>
      </div>
      <div className="fixed top-0 left-0 right-0 w-full z-50 pointer-events-none">
        <div className="container !max-w-full">
          <div className="flex  justify-end h-20 items-center">
            <div className="flex items-center gap-4">
              <div
                className="size-11 border border-stone-400 pointer-events-auto  hover:border-red-orange-500 hover:text-red-orange-500 rounded-full inline-flex items-center justify-center bg-stone-200 "
                onClick={() => setIsOpen(!isOpen)}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <motion.rect
                    x="3"
                    y="7"
                    width="18"
                    height="2"
                    fill="currentColor"
                    ref={topLineScope}
                    style={{
                      transformOrigin: "12px 8px",
                      // transform: "translateY(4px) rotate(45deg)",
                    }}
                  />

                  <motion.rect
                    x="3"
                    y="15"
                    width="18"
                    height="2"
                    fill="currentColor"
                    ref={bottomLineScope}
                    style={{
                      transformOrigin: "12px 16px",
                      // transform: "translateY(-4px) rotate(-45deg)",
                    }}
                  />
                </svg>
              </div>
              <Button
                variant="primary"
                className=" hidden md:inline-flex pointer-events-auto"
                onClick={() => {
                  const section = document.getElementById("contact");
                  if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Contact Me
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
