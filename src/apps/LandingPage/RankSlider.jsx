import { useEffect, useState, useRef } from "react";
import Container from "../../components/wrappers/Container";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ButtonSq from "../../components/ButtonSq";
import img from "../../assets/sliderImg.png";
import bg from "../../assets/slider-bg.png";
import { div } from "framer-motion/client";
const RankSlider = () => {
  const [api, setApi] = useState(null);
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));
  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className="relative">
      <img
        src={bg}
        alt=""
        className="absolute object-cover w-full h-full -z-10 "
      />
      <Container className="relative lg:mb-14">
        <Carousel
          plugins={[plugin.current]}
          setApi={setApi}
          onMouseEnter={plugin.current.stop}
          // onMouseLeave={plugin.current.reset}
          className="w-full "
        >
          <CarouselContent className="">
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card className="bg-transparent border-none rounded-none shadow-none">
                    <CardContent className="p-0  h-96 sm:h-[400px] border-none shadow-none grid ">
                      <div className="flex justify-between w-full">
                        <h2 className="text-4xl font-semibold tracking-tight scroll-m-20 first:mt-0">
                          Rankings, Accereditations <br /> &amp; Tie-up.
                        </h2>
                        <ButtonSq
                          label="Know more..."
                          iconDiv="bg-primary-color h-14 flex item-center justify-center"
                          className="text-white h-14 bg-secondary-color hover:bg-secondary-color/90"
                          iconStyle="mt-3"
                        />
                      </div>
                      <div className="flex justify-between ">
                        <div className="grid content-end justify-end grid-cols-3 gap-3 pb-10">
                          <div className="flex flex-col items-center content-end justify-end">
                            <h2 className="flex items-center text-4xl font-bold tracking-tight scroll-m-20 first:mt-0 text-secondary-color">
                              Ranked
                            </h2>
                            <span className="text-[10rem] my-0 pt-0 font-extrabold stroke-text leading-none">
                              #
                            </span>
                          </div>

                          <span className="text-[15rem] font-extrabold stroke-text flex leading-none p-0 ">
                            3
                          </span>
                          <div className="flex flex-col justify-end gap-2 pb-5 leading-none text-left">
                            <p className="text-4xl font-bold text-secondary-color">
                              Among
                            </p>
                            <p className="text-4xl font-bold text-secondary-color">
                              Group of
                            </p>
                            <p className="text-4xl font-bold text-red-500">
                              Colleges
                            </p>
                            <p className="text-4xl font-bold text-red-500">
                              by PTU
                            </p>
                          </div>
                        </div>
                        <div className="grid content-end justify-end">
                          <img
                            src={img}
                            alt="Slider imgs "
                            className="object-contain h-[90%] m"
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious
            iconStyle="text-white lg:h-8  "
            className="absolute left-[0px] top-[110%] bg-gray-300 hover:bg-red-600 h-10 active:bg-red-700 w-24 rounded-sm opacity-100 "
          />
          <CarouselNext
            iconStyle="text-white lg:h-8"
            className="absolute left-[110px] top-[110%] bg-slate-300 hover:bg-red-600 w-24 h-10 rounded-sm opacity-100 active:bg-red-700 "
          />
        </Carousel>
        <div className="flex justify-center mt-4 space-x-2">
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === current ? "bg-destructive/70" : "bg-gray-300"
              }`}
              onClick={() => api?.scrollTo(index)}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default RankSlider;
