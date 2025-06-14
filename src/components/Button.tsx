import { ButtonHTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

const Button = (
  props: {
    variant: "primary" | "secondary" | "white" | "text";
    iconAfter?: ReactNode;
  } & ButtonHTMLAttributes<HTMLButtonElement>
) => {
  const { className, children, variant, iconAfter, ...rest } = props;
  return (
    <button
      className={twMerge(
        " h-11 px-6 rounded-full  border border-red-orange-500 uppercase inline-flex items-center gap-2 transition duration-600 relative group/button",
        variant === "primary" &&
          "bg-red-orange-500 text-white hover:bg-[#D91C00] hover:text-white active:bg-[#B01700]",
        variant === "white" &&
          "bg-white text-stone-800 hover:bg-red-orange-500 hover:text-white border-white active:bg-[#B01700]",
        variant === "secondary" &&
          " hover:bg-red-orange-500 hover:text-stone-200 active:bg-[#B01700] hover:border-white",
        variant === "text" &&
          "h-auto px-0 border-transparent after:transition-all after:duration-500 after:contrnt-['']  after:w-0 after:h-px after:absolute after:top-full after:bg-red-orange-500 hover:after:w-full hover:text-red-orange-500 leading-none",
        className
      )}
      {...rest}
    >
      <span>{children}</span>
      {iconAfter && <span>{iconAfter}</span>}
    </button>
  );
};
export default Button;
