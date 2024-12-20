/* eslint-disable react/prop-types */
import Marquee from "../../components/ui/marquee";



export function InfrastructureMarquee3D({logos,index}) {
  return (
    <div className="relative flex h-full w-full sm:w-96 mx-auto flex-col items-center justify-center gap-4 overflow-hidden rounded-lg bg-background px-20 ">
      <div className="flex flex-row gap-4 [perspective:300px]">
        <Marquee
          className="h-96 justify-center overflow-hidden [--duration:8s] [--gap:1rem] drop-shadow-lg"
          vertical
          style={{
            transform:
              index % 2 === 0
                ? "translateX(0px) translateY(0px) translateZ(-50px) rotateX(0deg) rotateY(-20deg) rotateZ(10deg) scale(1.8)"
                : "translateX(0px) translateY(0px) translateZ(-50px) rotateX(0deg) rotateY(20deg) rotateZ(-10deg) scale(1.8)",
          }}
        >
          {logos.map((data, idx) => (
            <img
              key={idx}
              src={data.img}
              alt={data.name}
              className="mx-auto h-full w-3/4 cursor-pointer rounded-xl border border-neutral-300 transition-all duration-300 hover:ring-1 hover:ring-neutral-300"
            />
          ))}
        </Marquee>
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-0 h-1/6 bg-gradient-to-b from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/6 bg-gradient-to-t from-white dark:from-background"></div>
    </div>
  );
}
