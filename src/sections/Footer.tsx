"use client";
import { FC, useEffect } from "react";
import Button from "@/components/Button";
import { useInView } from "motion/react";

const navItems = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "Projects",
    href: "#projects",
  },
];

const Footer: FC = () => {
  return (
    <footer className="bg-stone-900 text-white py-16" id="contact">
      <div className="container">
        <div className="section">
          <div className="flex items-center gap-3 ">
            <div className="size-3 rounded-full bg-green-400 animate-pulse"></div>
            <span className="uppercase">Available to hire</span>
          </div>
          <div className="grid md:grid-cols-3 md:items-center">
            <div className="md:col-span-2">
              <h2 className="text-4xl lg:text-8xl mt-8 font-extralight md:text-7xl">
                Let&apos;s make something great
              </h2>
              <a
                href="https://github.com/ash-ys"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="secondary"
                  className="mt-8"
                  iconAfter={
                    <div className="size-6 overflow-hidden">
                      <div className="w-12 h-6 flex transition-transform duration-300 group-hover/button:-translate-x-1/2">
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
                    </div>
                  }
                >
                  Github
                </Button>
              </a>
              <a
                href="https://www.behance.net/ashish31"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="secondary"
                  className="mt-8"
                  iconAfter={
                    <div className="size-6 overflow-hidden">
                      <div className="w-12 h-6 flex transition-transform duration-300 group-hover/button:-translate-x-1/2">
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
                    </div>
                  }
                >
                  Behance
                </Button>
              </a>
              <a
                href="https://www.linkedin.com/in/ash121/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="secondary"
                  className="mt-8"
                  iconAfter={
                    <div className="size-6 overflow-hidden">
                      <div className="w-12 h-6 flex transition-transform duration-300 group-hover/button:-translate-x-1/2">
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
                    </div>
                  }
                >
                  Linkedin
                </Button>
              </a>
              <a href="/resume.pdf" download>
                <Button
                  variant="white"
                  className="mt-8"
                  iconAfter={
                    <div className="size-6 overflow-hidden">
                      <div className="w-12 h-6 flex transition-transform duration-300 group-hover/button:-translate-x-1/2">
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
                    </div>
                  }
                >
                  Download Resume
                </Button>
              </a>
              <a
                href="mailto:awagle4@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="secondary"
                  className="mt-8"
                  iconAfter={
                    <div className="size-6 overflow-hidden">
                      <div className="w-12 h-6 flex transition-transform duration-300 group-hover/button:-translate-x-1/2">
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
                    </div>
                  }
                >
                  awagle4@gmail.com
                </Button>
              </a>
            </div>
            <div>
              <nav className="flex flex-col md:items-end gap-8 mt-16 md:mt-0">
                {navItems.map(({ label, href }) => (
                  <a key={label} href={href}>
                    <Button variant="text" className="text-lg">
                      {label}
                    </Button>
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>

        <p className=" text-white/30 text-sm">Copyright &copy; Ashish Wagle</p>
      </div>
    </footer>
  );
};

export default Footer;
