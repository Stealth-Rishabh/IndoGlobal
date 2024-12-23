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
import { Link } from "react-router-dom";

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
      <Container className="relative lg:mb">
        {/* <Carousel
          plugins={[plugin.current]}
          setApi={setApi}
          onMouseEnter={plugin.current.stop}
          // onMouseLeave={plugin.current.reset}
          className="w-full "
        >
          <CarouselContent className="">
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}> */}
                <div className="p-1">
                  <Card className="bg-transparent border-none rounded-none shadow-none">
                    <CardContent className="p-0  h-[550px] sm:h-[500px] border-none shadow-none grid ">
                      <div className="flex md:flex-row flex-col sm:justify-between w-full gap-5 sm:gap-0">
                        <h2 className=" text-2xl  sm:text-4xl font-semibold tracking-tight scroll-m-20 first:mt-0">
                          Rankings, Accreditations <br /> &amp; Tie-ups.
                        </h2>
                        {/* <Link to="/about/accreditation"> */}
                          <ButtonSq
                            label="Know more..."
                            iconDiv="bg-primary-color sm:h-14 flex item-center justify-center"
                            className="text-white text-xs md:text-lg sm:h-14 bg-secondary-color hover:bg-secondary-color/90 w-fit"
                            iconStyle="h sm:mt-3"
                            to="/about/accreditation"
                          />
                        {/* </Link> */}
                      </div>
                      <div className="flex sm:flex-row flex-col-reverse gap-4 sm:gap-0 mt- sm:mt-0 item-start sm:justify-between ">
                        <div className="grid content-end justify-end grid-cols-3 gap-3 pb-10">
                          <div className="flex flex-col items-center sm:content-end sm:justify-end">
                            <h2 className="flex items-center sm:text-4xl font-bold tracking-tight scroll-m-20 first:mt-0 text-secondary-color">
                              Ranked
                            </h2>
                            <span className="text-[7rem] sm:text-[15rem] my-0 pt-0 font-medium sm:font-extrabold stroke-text leading-none">
                              #
                            </span>
                          </div>

                          <span className="text-[9rem] sm:text-[25rem] font-semibold sm:font-extrabold stroke-text flex leading-none p-0 ">
                            3
                          </span>
                          <div className="flex flex-col justify-end sm:gap-2 pb-5 leading-none text-left">
                            <p className="text-2xl sm:text-5xl font-bold text-secondary-color">
                              Among
                            </p>
                            <p className="text-2xl sm:text-5xl font-bold text-secondary-color">
                              Group of
                            </p>
                            <p className="text-2xl sm:text-5xl font-bold text-red-500">
                              Colleges
                            </p>
                            <p className="text-2xl sm:text-5xl font-bold text-red-500">
                              by PTU
                            </p>
                          </div>
                        </div>
                        <div className="grid sm:content-end sm:justify-end">
                          <img
                            src={img}
                            alt="Slider imgs "
                            className="object-contain h-48 sm:h-[100%] mx-auto bg-blend-"
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              {/* </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious
            iconStyle="text-white h-4 lg:h-8"
            className="absolute sm:left-[0px] left-[20%] top-[96.5%] sm:top-[106%] bg-gray-300 hover:bg-red-600 h-8 sm:h-10  w-20 active:bg-red-700 sm:w-24 rounded-none opacity-100"
          />
          <CarouselNext
            iconStyle="text-white h-4 lg:h-8"
            className="absolute sm:left-[110px] left-[55%] top-[96.5%] sm:top-[106%] bg-slate-300 hover:bg-red-600 w-20 sm:w-24 h-8 sm:h-10  rounded-none opacity-100 active:bg-red-700"
          />
        </Carousel>
        <div className="sm:hidden flex justify-center mt-4 space-x-2">
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              className={`w-4 h-[2px] rounded-sm ${
                index === current ? "bg-destructive/70" : "bg-gray-300"
              }`}
              onClick={() => api?.scrollTo(index)}
            />
          ))}
        </div> */}
      </Container>
    </div>
  );
};

export default RankSlider;
