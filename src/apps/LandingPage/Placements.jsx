import { useEffect, useState, useRef } from "react";

import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Heading from "../../components/Heading";
import Container from "../../components/wrappers/Container";
import PlacementCard from "./PlacementCard";
import img1 from "../../assets/placement-img.svg";
import logo from "../../assets/placement-logo.svg";
import PlacementStats from "./PlacementStats";
const Placements = () => {
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
  const profiles = [
    {
      bgColor: "bg-gray-900",
      name: "Gurpreet Randhawa",
      company: "Cerner",
      salary: "₹40 Lakh",
      location: "Bengaluru",
      imageUrl: img1,
      logoUrl: logo,
    },
    {
      bgColor: "bg-blue-900",
      name: "Rohit Sharma",
      company: "Google",
      salary: "₹50 Lakh",
      location: "Hyderabad",
      imageUrl: img1,
      logoUrl: logo,
    },
    {
      bgColor: "bg-gray-900",
      name: "Anita Desai",
      company: "Microsoft",
      salary: "₹45 Lakh",
      location: "Delhi",
      imageUrl: img1,
      logoUrl: logo,
    },
    {
      bgColor: "bg-blue-900",
      name: "Rahul Verma",
      company: "Amazon",
      salary: "₹60 Lakh",
      location: "Mumbai",
      imageUrl: img1,
      logoUrl: logo,
    },
  ];

  return (
    <Container className="sm:px-0  sm:pb-0">
      <Heading
        title="Our Top Placements"
        subtitle="We are proud to announce that our students have got placed in top companies with highest salary package of 60 Lacs."
        subtitleClassName="text-gray-500"
        titleClassName="text-secondary-color mb-6 md:text-6xl text-4xl font-bold"
      />
      <div className="hidden sm:grid md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-0">
        {profiles.map((profile, index) => (
          <PlacementCard
            key={index}
            bgColor={profile.bgColor}
            name={profile.name}
            company={profile.company}
            salary={profile.salary}
            location={profile.location}
            imageUrl={profile.imageUrl}
            logoUrl={profile.logoUrl}
          />
        ))}
      </div>
      <Carousel
        plugins={[plugin.current]}
        setApi={setApi}
        onMouseEnter={plugin.current.stop}
        className="w-full grid grid-cols-1 gap-3 md:hidden "
      >
        <CarouselContent>
          {profiles.map((profile, index) => (
            <CarouselItem key={profile.id}>
              <PlacementCard
            key={index}
            bgColor={profile.bgColor}
            name={profile.name}
            company={profile.company}
            salary={profile.salary}
            location={profile.location}
            imageUrl={profile.imageUrl}
            logoUrl={profile.logoUrl}
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
      <PlacementStats/>
    </Container>
  );
};

export default Placements;
