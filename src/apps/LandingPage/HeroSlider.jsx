import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../components/ui/carousel";

//images for carousel images
import Education from "../../assets/SVG Images/Education.svg";
import Placement from "../../assets/SVG Images/Placements.svg";
import Events from "../../assets/SVG Images/Events.svg";
import Labs from "../../assets/SVG Images/Labs.svg";
import Sports from "../../assets/SVG Images/Sports.svg";
import Auditorium from "../../assets/SVG Images/Auditorium.svg";
import BoxReveal from "../../components/ui/box-reveal";
import { Button } from "../../components/ui/button";
import WordPullUp from "../../components/ui/word-pull-up";
import ShinyButton from "../../components/ui/shiny-button";
const HeroSlider = () => {
  const imgSlider = [
    {
      image: Events,
      tagline: "Shaping Bright Futures",
      highlight:"World-class curriculum, experienced faculty, and state-of-the-art classrooms.",
      
    },
    {
      image: Education,
      tagline: "Celebrate Every Moment",
      highlight: "Cultural festivals, workshops, and leadership opportunities.",
     
    },
    {
      image: Sports,
      tagline: "Fuel Your Passion",
      highlight:
        "Top-notch facilities, diverse sports options, and vibrant athletic culture.",
    },
    {
      image: Labs,
      tagline: "Innovate and Experiment",
      highlight:
        "Cutting-edge labs for practical learning, research, and discovery.",
    },
    {
      image: Auditorium,
      tagline: "Inspire and Engage",
      highlight:
        "Modern auditorium for events, seminars, and cultural programs.",
    },

    {
      image: Placement,
      tagline: "Launch Your Career",
      highlight: "Strong industry connections and 100% placement assistance.",
    },
  ];

  return (
    <section className="hero-section h-96 md:h-[calc(100vh-160px)] lg:h-[calc(100vh-120px)] w-full relative">
      <Carousel>
        <CarouselContent>
          {imgSlider.map((img, index) => (
            <CarouselItem key={index} className="w-full sm:h-full relative h-96 md:h-[calc(100vh-160px)] lg:h-[calc(100vh-120px)]">
              {/* <img
                src={img.image}
                alt="a student holding a laptop"
                className="object-cover w-screen  h-96 md:h-[calc(100vh-160px)] lg:h-[calc(100vh-120px)]"
              /> */}
              <div className="bg-black inset-0 opacity-50 absolute z-20 " />
              <div className="size-full max-w-4xl items-center justify-center overflow-hidden sm:pt-8 absolute top-10 sm:top-[8%] left-[10%]  z-20 space-y-5 sm:space-y-10">
                <BoxReveal boxColor={"#DC2626"} duration={0.5} className="">
                  <p className=" md:text-6xl font- text-5xl lg:text-8xl text-white font-extrabold sm:py-4 sm:tracking-wide leading-tight drop-shadow-lg">
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
                  className=" text-xl font-semibold md:text-3xl text-white md:font-bold text-left max-w-[20rem]  md:max-w-3xl"
                />
                <ShinyButton className='text-white bg-white sm:py-5 sm:px-10 rounded-none lg:text-lg text-sm font-bold'>Explore Courses</ShinyButton>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious iconStyle='h-4' className="absolute left-10 top-1/2 -translate-y-1/2"
        />
        <CarouselNext iconStyle='h-4' className="absolute right-10 top-1/2 -translate-y-1/2"/>
      </Carousel>
    </section>
  );
};

export default HeroSlider;
