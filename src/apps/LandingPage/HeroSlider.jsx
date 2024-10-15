"use client";
import { useEffect, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../../components/ui/carousel";
import Education from "../../assets/Education.webp";
import Placement from "../../assets/Placements.webp";
import Events from "../../assets/Events.webp";
import Labs from "../../assets/Labs.webp";
import Sports from "../../assets/Sports.webp";
import Auditorium from "../../assets/Auditorium.webp";
import BoxReveal from "../../components/ui/box-reveal";
import WordPullUp from "../../components/ui/word-pull-up";
import ShinyButton from "../../components/ui/shiny-button";

const HeroSlider = () => {
  const imgSlider = [
    {
      image: Events,
      tagline: "Shaping Bright Futures",
      highlight: "World-class curriculum, experienced faculty, and state-of-the-art classrooms.",
    },
    {
      image: Education,
      tagline: "Celebrate Every Moment",
      highlight: "Cultural festivals, workshops, and leadership opportunities.",
    },
    {
      image: Sports,
      tagline: "Fuel Your Passion",
      highlight: "Top-notch facilities, diverse sports options, and vibrant athletic culture.",
    },
    {
      image: Labs,
      tagline: "Innovate and Experiment",
      highlight: "Cutting-edge labs for practical learning, research, and discovery.",
    },
    {
      image: Auditorium,
      tagline: "Inspire and Engage",
      highlight: "Modern auditorium for events, seminars, and cultural programs.",
    },
    {
      image: Placement,
      tagline: "Launch Your Career",
      highlight: "Strong industry connections and 100% placement assistance.",
    },
  ];

  // Initialize Embla Carousel
  const [emblaRef, emblaApi] = useEmblaCarousel({
    draggable: true,
    loop: true,
    speed: 10,
    // Add other options as needed
  });

  // Function to handle parallax effect
  const handleDrag = () => {
    if (!emblaApi) return;

    const progress = emblaApi.scrollProgress();
    const translateX = progress * 100; // Adjust parallax effect intensity
    const items = emblaRef.current.children;

    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      const offset = (i - emblaApi.selectedScrollSnap()) * 100; // Adjust based on index
      item.style.transform = `translateX(${translateX + offset}%)`;
    }
  };

  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.on("scroll", handleDrag); // Attach the drag handler

    return () => {
      emblaApi.off("scroll", handleDrag); // Clean up on unmount
    };
  }, [emblaApi]);

  return (
    <section className="hero-section h-96 md:h-[calc(100vh-160px)] lg:h-[calc(100vh-120px)] w-full relative">
      <Carousel ref={emblaRef}>
        <CarouselContent>
          {imgSlider.map((img, index) => (
            <CarouselItem key={index} className="w-full sm:h-full relative h-96 md:h-[calc(100vh-160px)] lg:h-[calc(100vh-120px)]">
              <img
                src={img.image}
                alt={img.tagline}
                className="object-cover w-screen h-full blur-sm"
              />
              <div className="bg-black inset-0 opacity-50 absolute z-20" />
              <div className="size-full max-w-4xl items-center justify-center overflow-hidden sm:pt-8 absolute top-10 sm:top-[8%] left-[10%] z-20 space-y-5 sm:space-y-10">
                <BoxReveal boxColor={"#DC2626"} duration={0.5}>
                  <p className="md:text-6xl text-5xl lg:text-8xl text-white font-extrabold sm:py-4 sm:tracking-wide leading-tight drop-shadow-lg">
                    {img.tagline.split(" ").map((word, index) => {
                      if (index === 1) {
                        return (
                          <span key={index}>
                            <span style={{ color: "#DC2626" }}>{word}</span>{" "}
                            <br />
                          </span>
                        );
                      } else {
                        return <span key={index}>{word} </span>;
                      }
                    })}
                  </p>
                </BoxReveal>

                <WordPullUp
                  words={img.highlight}
                  className="text-xl font-semibold md:text-3xl text-white md:font-bold text-left max-w-[20rem] md:max-w-3xl"
                />
                <ShinyButton className='text-white bg-white sm:py-5 sm:px-10 rounded-none lg:text-lg text-sm font-bold'>
                  Explore Courses
                </ShinyButton>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default HeroSlider;
