import { FC } from "react";
import Button from "@/components/Button";
const navItems = [
  {
    label: "Home",
    href: "#intro",
  },
  {
    label: "Projects",
    href: "#projects",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

const Footer: FC = () => {
  return (
    <footer className="bg-stone-900 text-white py-16">
      <div className="container">
        <div className="section">
          <div className="flex items-center gap-3 ">
            <div className="size-3 rounded-full bg-green-400"></div>
            <span className="uppercase">Available to hire</span>
          </div>
          <div className="grid md:grid-cols-3 md:items-center">
            <div className="md:col-span-2">
          <h2 className="text-4xl lg:text-8xl mt-8 font-extralight md:text-7xl">
            Enough talk, Let's make something great
          </h2>
          <Button
            variant="secondary"
            className="mt-8"
            iconAfter={
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
            }
          >
            awagle4@gmail.com
          </Button></div>
          <div>
          <nav className="flex flex-col md:items-end gap-8 mt-16 md:mt-0">
            {navItems.map(({ label, href }) => (
              <a key={label} href={href}>
                <Button variant="text" className="text-lg">{label}</Button>
              </a>
            ))}
          </nav></div>
          </div>
        </div>

        <p className="py-16 text-white/30 text-sm">Copyright &copy; Ashish Wagle</p>
      </div>
    </footer>
  );
};

export default Footer;
