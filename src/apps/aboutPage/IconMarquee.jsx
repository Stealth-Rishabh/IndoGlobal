/* eslint-disable react/prop-types */
// import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";

const IconItem = ({ src, alt }) => {
  return (
    <img
      src={src}
      alt={alt}
      className="object-contain w-40 mx-4 rounded aspect-4/3"
    />
  );
};

export function IconMarquee({ icons }) {
  // eslint-disable-next-line react/prop-types
  const firstRow = icons.slice(0, Math.ceil(icons.length / 2));
  const secondRow = icons.slice(Math.ceil(icons.length / 2));

  return (
    <div className="relative flex flex-col items-center justify-center w-full gap-8 overflow-hidden h-96">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((icon, index) => (
          <IconItem key={index} {...icon} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((icon, index) => (
          <IconItem key={index} {...icon} />
        ))}
      </Marquee>
      <div className="absolute inset-y-0 left-0 w-1/3 pointer-events-none bg-gradient-to-r from-white dark:from-background"></div>
      <div className="absolute inset-y-0 right-0 w-1/3 pointer-events-none bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}

export default IconMarquee;
