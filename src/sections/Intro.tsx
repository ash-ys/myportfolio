"use client";
import { stagger } from "motion";
import { useAnimate, useInView } from "motion/react";
import { FC, useEffect } from "react";
import SplitType from "split-type";

const Intro: FC = () => {
  const [scope, animate] = useAnimate();
  const inView = useInView(scope, {
    once: true,
  });
  useEffect(()=>{
     new SplitType(scope.current.querySelector("h2"), {
        types: "lines,words",
        tagName: "span",
      });
  }, [scope]);

  useEffect(() => {
    if (inView) {
     
      animate(
        scope.current.querySelectorAll(".word"),
        {
         transform: "translateY(0)" ,},
        {
          duration: 0.5,
          delay: stagger(0.2),
        }
          
      );
    }
    }, [inView, animate]);

  return (
    <section className="section mt-12 md:mt-16 lg:mt-20" ref={scope} id="intro">
      <div className="container">
        <h2 className="text-4xl md:text-7xl lg:text-8xl lg:w-[80%]">
         I&apos;ll collab with you to <span className="text-red-orange-500">design</span> and <span className="text-red-orange-500">build</span> a custom website that reflects your brand<span className="text-red-orange-500 font-semibold">.</span>        
        </h2>
      </div>
    </section>
  );
};

export default Intro;
