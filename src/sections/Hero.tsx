import { FC, useEffect, useRef } from "react";
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
import heroImage from "@/assets/images/hero-image.jpg";
import Image from "next/image";
import Button from "@/components/Button";
import SplitType from "split-type";
import {
  useAnimate,
  motion,
  stagger,
  useScroll,
  
} from "motion/react";
// import { transform } from "next/dist/build/swc/generated-native";

// import { div } from "motion/react-client";

const Hero: FC = () => {
  const [titleScope, titleAnimate] = useAnimate();
  const scrollingDiv = useRef<HTMLDivElement>(null);
  const { } = useScroll({
    target: scrollingDiv,
    offset: ["start end", "end end"],
  });
  //  const portraitWidth = useTransform(scrollYProgress, [0, 1], ["100%", "240%"]);
  useEffect(() => {
    new SplitType(titleScope.current, {
      types: "lines,words,chars",
      tagName: "span",
    });
    titleAnimate(
      titleScope.current.querySelectorAll(".word"),
      { transform: "translateY(0)" },
      {
        duration: 0.5,
        delay: stagger(0.2),
        ease: "easeOut",
      }
    );
  }, [titleAnimate, titleScope]);

  return (
    <section>
      <div className="grid md:grid-cols-12 md:h-screen items-stretch sticky top-0 ">
        <div className="md:col-span-7  flex flex-col justify-center">
          <div className="container !max-w-full">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-5xl md:text-6xl lg:text-7xl mt-40 md:mt-0"
              ref={titleScope}
            >
              A full-service designer specialized in Branding & Web Design.
            </motion.h1>
            <div className="flex flex-col md:flex-row md:items-center mt-10 items-start gap-6">
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.75 }}
              >
                <Button
                  variant="secondary"
                  onClick={() => {
                    const section = document.getElementById("projects");
                    if (section) {
                      section.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  iconAfter={
                    <div className="overflow-hidden size-5">
                      <div className="h-5 w-10 flex group-hover/button:-translate-x-1/2 transition-transform duration-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="size-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="size-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
                          />
                        </svg>
                      </div>
                    </div>
                  }
                >
                  <span>View My Work</span>
                </Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 2 }}
              >
                <Button
                  variant="text"
                  onClick={() => {
                    const section = document.getElementById("contact");
                    if (section) {
                      section.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  Let&apos;s Talk
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
        <div className="md:col-span-5 relative">
          <div className="mt-20 md:mt-0  md:size-full md:absolute md:right-0 max-md:!w-full">
            <Image
              src={heroImage}
              alt="My portrait"
              className="object-cover size-full"
            />
            {/* <DotLottieReact
              src="https://lottie.host/3318ce16-6d21-4f17-92ac-0507a9a3060f/tzjUlAiZm8.lottie"
              loop
              autoplay
            />  */}
          </div>
        </div>
      </div>
      {/* <motion.div className="md:h-[200vh] ref={scrollingDiv}"></motion.div>  */}
    </section>
  );
};

export default Hero;
