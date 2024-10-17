import { useEffect, useState, useRef } from "react";
// import Container from "../../../components/wrappers/Container";
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
import Container from "../../components/wrappers/Container";
import img from "../../assets/EventImg.svg";
import img2 from "../../assets/EventImg2.svg";
import { Calendar } from "lucide-react";
import Heading from "../../components/Heading";
// import BlurFade from "@/components/ui/blur-fade";
const Events = () => {
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

  const eventDataArray = [
    {
      title: "DENGUE AWARENESS CAMPAIGN",
      date: "15th May 2023",
      image: img,
      registerLabel: "Know Now",
    },
    {
      title:
        "Productivity Session on Ground Breaking Ideas and Inventive Methodologies",
      date: "20th June 2023",
      image: img2,
      registerLabel: "Know Now",
    },
    {
      title: "FITNESS AWARENESS CAMPAIGN",
      date: "10th July 2023",
      image: img,
      registerLabel: "Know more",
    },
    {
      title: "NUTRITION AWARENESS CAMPAIGN",
      date: "25th August 2023",
      image: img,
      registerLabel: "Know Now",
    },
    {
      title: "WELLNESS AWARENESS CAMPAIGN",
      date: "1st September 2023",
      image: img,
      registerLabel: "Know Now",
    },
  ];

  return (
    <Container className="pt-0 lg:pt-0 pb-20">
      <div className="grid items-center justify-center sm:grid-cols-6 pb-8 sm:pb-28">
        <div className="h-2 bg-primary-color hidden sm:block"></div>
        <Heading
          title="Explore Educational Events"
          titleClassName="lg:font-extrabold font-bold text-secondary-color"
          className="w-full sm:col-span-4 pb-0 text-center sm:pb-0 lg:pb-0"
        />
        <div className="h-2 bg-primary-color hidden sm:block"></div>
      </div>

      <div className="hidden md:grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-4">
        {eventDataArray.map((eventData, index) => (
          <EventCard
            key={index}
            eventData={eventData}
            className={index == 1 ? "sm:col-span-2 sm:row-span-2" : "min-h-96 "}
            imgClassname={index == 1 ? "sm:h-[75%]" : "h-3/5 sm:h-1/2 "}
            contentClassname={index == 1 ? "sm:h-[25%]" : "h-2/5 sm:h-1/2"}
          />
        ))}
      </div>

      <Carousel
        plugins={[plugin.current]}
        setApi={setApi}
        onMouseEnter={plugin.current.stop}
        className="w-full grid grid-cols-1 gap-3 md:hidden"
      >
        <CarouselContent>
          {eventDataArray.map((eventData, index) => (
            <CarouselItem key={eventData.id}>
              <EventCard
                key={index}
                eventData={eventData}
                className="h-96 "
                imgClassname="h-3/5 sm:h-1/2"
                contentClassname="h-2/5 sm:h-1/2"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious
          iconStyle="text-white h-4 lg:h-8"
          className="absolute sm:left-[0px] left-[20%] top-[118%] sm:top-[110%] bg-gray-300 hover:bg-red-600 h-10 w-20 active:bg-red-700 sm:w-24 rounded-none opacity-100"
        />
        <CarouselNext
          iconStyle="text-white h-4 lg:h-8"
          className="absolute sm:left-[110px] left-[55%] top-[118%] sm:top-[110%] bg-slate-300 hover:bg-red-600 w-20 sm:w-24 h-10 rounded-none opacity-100 active:bg-red-700"
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
      </div>
    </Container>
  );
};

const EventCard = ({
  className,
  imgClassname,
  contentClassname,
  eventData: { title, date, image: img, registerLabel },
}) => {
  return (
    <div className={`shadow-lg ${className}`}>
      <div className={`overflow-hidden ${imgClassname}`}>
        <img src={img} alt="Event Img" className="object-cover w-full h-full hover:scale-125 transition-all duration-300" />
      </div>

      <div
        className={`p-5  bg-red-600  grid text-white space-y-2 sm:space-y-0 content-between ${contentClassname}`}
      >
        <h1 className="text-sm sm:text-xl font-bold flex items-center tracking-wide text-white">
          {title.toUpperCase()}
        </h1>
        <div className="flex items-center text-xs sm:text-sm font-medium">
          <Calendar size={20} className="mr-2 text-white" /> {date}
        </div>
        <ButtonSq
          className="w-fit bg-secondary-color  hover:bg-blue-700 text-xs sm:text-base"
          label={registerLabel}
          iconStyle="text-primary-color"
          iconDiv="bg-white"
        />
      </div>
    </div>
  );
};

export default Events;
