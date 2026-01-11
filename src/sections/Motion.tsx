"use client";
import { stagger } from "motion";
import { useAnimate, useInView } from "motion/react";
import { FC, useEffect } from "react";
import SplitType from "split-type"

const motionProjects = [
  {
    title: "Project Title 1",
    videoSrc: "/videos/project-1.mp4", // Replace with your video path
  },
  {
    title: "Project Title 2",
    videoSrc: "/videos/project-2.mp4", // Replace with your video path
  },
  {
    title: "Project Title 3",
    videoSrc: "/videos/project-3.mp4", // Replace with your video path
  },
];

const MotionShowcase: FC = () => {
  const [scope, animate] = useAnimate();
  const inView = useInView(scope, {
    once: true,
  });

  useEffect(() => {
    new SplitType(scope.current.querySelector(".showcase-text"), {
      types: "lines,words",
      tagName: "span",
    });
  }, [scope]);

  useEffect(() => {
    if (inView) {
      animate(
        scope.current.querySelectorAll(".word"),
        {
          transform: "translateY(0)",
        },
        {
          duration: 0.5,
          delay: stagger(0.2),
        }
      );
    }
  }, [inView, animate, scope]);

  return (
    <section className="section" id="motion" ref={scope}>
      <div className="container">
        <div className="grid md:grid-cols-5 md:gap-8 lg:gap-16 md:items-center">
  
  {/* TEXT — appears first on mobile */}
  <blockquote className="order-1 md:order-2 md:col-span-3 mb-10 md:mb-0">
    <div className="text-3xl mt-8 md:text-5xl lg:text-6xl md:mt-0">
      <span className="showcase-text">
        Some of my{" "}
        <span className="text-red-orange-500">motion design </span>
        works
        <span className="text-red-orange-500 font-semibold">.</span>
      </span>
    </div>
  </blockquote>

  {/* VIDEOS — appear below text on mobile */}
  <div className="order-2 md:order-1 md:col-span-2 flex flex-col gap-4">
    
    {/* First video */}
    <div className="aspect-video w-full">
        <a href="https://www.youtube.com/watch?v=QseTy3Qjq18" target="_blank" rel="noopener noreferrer">
      <video
        src={motionProjects[0].videoSrc}
        autoPlay
        loop
        muted
        playsInline
        className="size-full object-cover"
      /></a>
    </div>

    {/* Second + Third */}
    <div className="grid grid-cols-2 gap-4">
      
      <div className="aspect-square w-full overflow-hidden">
        <a href="https://www.youtube.com/watch?v=7gX6pvSL3tg " target="_blank" rel="noopener noreferrer">
        <video
          src={motionProjects[1].videoSrc}
          autoPlay
          loop
          muted
          playsInline
          className="size-full object-cover"
        /></a>
      </div>
      <div className="aspect-square w-full overflow-hidden">
        <a href="https://www.youtube.com/watch?v=EJM-JqfVSQY&t=1s " target="_blank" rel="noopener noreferrer">
        <video
          src={motionProjects[2].videoSrc}
          autoPlay
          loop
          muted
          playsInline
          className="size-full object-cover"
        /></a>
      </div>
    </div>

  </div>
</div>

      </div>
    </section>
  );
};

export default MotionShowcase;