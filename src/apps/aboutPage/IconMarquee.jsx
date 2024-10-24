import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";

const IconItem = ({ src, alt }) => {
  return (
    <img
      src={src}
      alt={alt}
      className="aspect-4/3 w-40 rounded mx-4 object-contain"
    />
  );
};

export function IconMarquee({ icons }) {
  const firstRow = icons.slice(0, Math.ceil(icons.length / 2));
  const secondRow = icons.slice(Math.ceil(icons.length / 2));

  return (
    <div className="relative flex h-96 w-full flex-col items-center justify-center overflow-hidden  gap-8">
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
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}

export default IconMarquee;