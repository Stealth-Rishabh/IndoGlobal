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
import { motion } from 'framer-motion';
import BlurFade from "@/components/ui/blur-fade";
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

  // State to track if cards are in view
  const [inView, setInView] = useState([false, false, false, false]);

  // Create refs for each card
  const cardRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  useEffect(() => {
    const options = {
      root: null, // Use the viewport as the root
      rootMargin: '0px', // Adjust if needed to provide more visibility
      threshold: 0 // Trigger when any part of the card is in view
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const index = cardRefs.findIndex(ref => ref.current === entry.target);
        if (index !== -1 && entry.isIntersecting) {
          setInView((prev) => {
            const newInView = [...prev];
            newInView[index] = true;
            return newInView;
          });
        }
      });
    }, options);

    cardRefs.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    // Cleanup the observer
    return () => {
      cardRefs.forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
}, [cardRefs]);


  return (
    <Container className="sm:px-0 sm:pb-0">
      <Heading
        title="Our Top Placements"
        subtitle="We are proud to announce that our students have got placed in top companies with highest salary package of 60 Lacs."
        subtitleClassName="text-gray-500"
        titleClassName="text-secondary-color mb-6 md:text-6xl text-4xl font-bold"
      />

      <div className="hidden sm:grid md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-0">
        {/* 1st Card */}
        <motion.div
          ref={cardRefs[0]}
          initial={{ opacity: 0, x: -400 }} // Animate from left
          animate={{ opacity: inView[0] ? 1 : 0, x: inView[0] ? 0 : -400 }} // Animate based on inView state
          transition={{ duration: 0.9 }}
        >
          <PlacementCard
            bgColor={profiles[0].bgColor}
            name={profiles[0].name}
            company={profiles[0].company}
            salary={profiles[0].salary}
            location={profiles[0].location}
            imageUrl={profiles[0].imageUrl}
            logoUrl={profiles[0].logoUrl}
          />
        </motion.div>

        {/* 2nd Card */}
        <motion.div
          ref={cardRefs[1]}
          initial={{ opacity: 0, x: -200 }} // Animate from left
          animate={{ opacity: inView[1] ? 1 : 0, x: inView[1] ? 0 : -200 }} // Animate based on inView state
          transition={{ duration: 0.5 }}
        >
          <PlacementCard
            bgColor={profiles[1].bgColor}
            name={profiles[1].name}
            company={profiles[1].company}
            salary={profiles[1].salary}
            location={profiles[1].location}
            imageUrl={profiles[1].imageUrl}
            logoUrl={profiles[1].logoUrl}
          />
        </motion.div>

        {/* 3rd Card */}
        <motion.div
          ref={cardRefs[2]}
          initial={{ opacity: 0, x: 200 }} // Animate from right
          animate={{ opacity: inView[2] ? 1 : 0, x: inView[2] ? 0 : 200 }} // Animate based on inView state
          transition={{ duration: 0.5 }}
        >
          <PlacementCard
            bgColor={profiles[2].bgColor}
            name={profiles[2].name}
            company={profiles[2].company}
            salary={profiles[2].salary}
            location={profiles[2].location}
            imageUrl={profiles[2].imageUrl}
            logoUrl={profiles[2].logoUrl}
          />
        </motion.div>

        {/* 4th Card */}
        <motion.div
          ref={cardRefs[3]}
          initial={{ opacity: 0, x: 400 }} // Animate from right
          animate={{ opacity: inView[3] ? 1 : 0, x: inView[3] ? 0 : 400 }} // Animate based on inView state
          transition={{ duration: 0.9 }}
        >
          <PlacementCard
            bgColor={profiles[3].bgColor}
            name={profiles[3].name}
            company={profiles[3].company}
            salary={profiles[3].salary}
            location={profiles[3].location}
            imageUrl={profiles[3].imageUrl}
            logoUrl={profiles[3].logoUrl}
          />
        </motion.div>
      </div>

      {/* Mobile View */}
      <Carousel
        plugins={[plugin.current]}
        setApi={setApi}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.play}
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

      {/* end here */}
      <PlacementStats />
    </Container>
  );
};

export default Placements;
