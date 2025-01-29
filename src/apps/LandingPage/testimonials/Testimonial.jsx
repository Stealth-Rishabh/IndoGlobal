import { useEffect, useState, useRef } from "react";
import Container from "../../../components/wrappers/Container";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";
import OrbitingCircles from "../../../components/ui/orbiting-circles";
import ugam from "../../../assets/testimonial/Ugam.webp";
import harpreet from "../../../assets/testimonial/Harpreet.png";
import mohd from "../../../assets/testimonial/Mohd.webp";
import masoom from "../../../assets/testimonial/Masoom.png";
import rohith from "../../../assets/testimonial/Rohith.webp";
import Heading from "../../../components/Heading";

export function Testimonials() {
  // Testimonials data array
  const testimonials = [
    {
      id: 4,
      image: rohith,
      quote: "Being campus-selected in the 3rd year was a dream come true.",
      name: "Rohith",
      batch: "2019-2023",
      position: "CSE Graduate",
      message:
        "It was wonderful studying at Indo Global College of Engineering. I feel proud to have graduated from here. Being campus-selected in the 3rd year itself is a dream for many students, but we achieved it with the unwavering support of our teachers and faculty. This institution not only gave us knowledge but also instilled confidence to excel in our careers. The memories and lessons learned here will always remain close to my heart. I am grateful for the lifelong friendships and connections I made during my time here.",
    },
    {
      id: 0,
      image: ugam,
      quote:
        "Indo Global College is the best in Chandigarh for education and faculty support.",
      name: "Ugam Kumar Sharma",
      batch: "2019-2023",
      position: "Junior Executive Engineer, Central Powergrid Corporation",
      message:
        "I am Ugam Kumar Sharma from Bihar. I have completed my Bachelor of Technology degree in civil engineering with first class (89.10%) from Indo Global College of Engineering, Chandigarh. The faculty and HOD supported me immensely during my preparation, leading to my position as a Junior Executive Engineer at a Maharatna CPSU at Lakhisarai substation, Bihar. To my juniors, I say: study seriously, gain more knowledge, and make the best use of time. Always strive to be the best version of yourself. Best wishes for your bright future!",
    },
    {
      id: 1,
      image: harpreet,
      quote: "The faculty’s dedication shaped my career and achievements.",
      name: "HARPREET BAINS",
      batch: "2008-2012",
      position: "Sr. Talent Acquisition Manager, Edifecs",
      message:
        `Harpreet Bains working as a Sr. Talent Acquisition Manager in Edifecs , which provides
market-leading technology to its payer and health system customers, who serve nearly
300 million people in the U.S. healthcare market. It gives me great pleasure to say with
pride that I have completed my B. Tech (Computer Science Engineering) from Indo
Global College of Engineering in 2012. The four years spent here were splendid and
have helped me to grow better professionally &amp; personally.`,
    },
    {
      id: 2,
      image: mohd,
      quote: "IGCE built my foundation for a successful career in engineering.",
      name: "Mohd Arif Wani",
      batch: "2018-2022",
      position: "Planning Engineer, Yapı Merkezi, Riyadh",
      message:
        "As a certified PMI-PMP Planning Engineer, I specialize in project planning, cost control, and data analysis. Currently, I work at Yapı Merkezi in Riyadh, driving project efficiency since January 2024. My previous roles include Cost Control and Planning Engineer at SHAR Company in Neom and Project Planner at SANS International Construction Company in Yanbu. Indo Global College of Engineering laid the foundation for my skills and professional journey, equipping me with the knowledge to excel in strategic planning and project management.",
    },
    {
      id: 3,
      image: masoom,
      quote: "IGCE gave me the skills and confidence to excel in my career.",
      name: "MASOOM",
      batch: "",
      position:
        "CSE Graduate",
      message:
        `My experience at Indo global college has been truly transformative. The combination of
dedicated faculty, a supportive community, and access to exceptional resources has
empowered me both academically and personally. The curriculum not only challenged
me to excel but also encouraged me to think critically and creatively. The vibrant
campus life provided countless opportunities for growth, from clubs and events to
meaningful friendships that will last a lifetime. Indo global college has prepared me to
step confidently into the future, and I am proud to be part of its legacy`,
    },
    
  ];

  // Set initial state for the central image
  const [centralImage, setCentralImage] = useState(testimonials[0].image);
  const [fade, setFade] = useState(false);
  const [api, setApi] = useState(null);
  const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: true }));
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    api.on("select", () => {
      const selectedIndex = api.selectedScrollSnap();
      setCurrentIndex(selectedIndex);
      handleImageChange(selectedIndex); // Update central image on carousel select
    });
  }, [api]);

  // Function to handle image swapping with fade effect
  const handleImageChange = (index) => {
    setFade(true); // Trigger fade-out effect

    // Wait for fade-out to complete before swapping the images
    setTimeout(() => {
      setCentralImage(testimonials[index].image);
      setCurrentIndex(index); // Update current index
      setFade(false); // Trigger fade-in effect after swap
    }, 300); // Adjust the timeout to match the fade-out duration
  };

  // Functions for next and previous button handling
  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % testimonials.length;
    api.scrollTo(nextIndex); // Scroll to the next testimonial
    handleImageChange(nextIndex); // Update central image
  };

  const handlePrevious = () => {
    const prevIndex =
      (currentIndex - 1 + testimonials.length) % testimonials.length;
    api.scrollTo(prevIndex); // Scroll to the previous testimonial
    handleImageChange(prevIndex); // Update central image
  };

  // Function to handle orbiting circle clicks
  const handleOrbitingCircleClick = (index) => {
    api.scrollTo(index); // Scroll to the corresponding testimonial
    handleImageChange(index); // Update central image and current index
  };

  return (
    <Container className="grid ">
      <Heading
        title="Student Testimonials"
        titleClassName="lg:font-extrabold lg:text-left  text-secondary-color rem]"
        className=" sm:hidden block w-full pb-0 text-left sm:col-span-4 sm:pb-0 lg:pb-14"
      />
      <div className="grid grid-cols-1 gap-8 md:gap-20 md:grid-cols-2">
        <div className="hidden relative h-[600px] md:flex w-full flex-col items-center justify-center rounded-lg">
          {/* Central Image with Fade Effect */}
          <span
            className={`pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-black transition-opacity duration-300 ${
              fade ? "opacity-0" : "opacity-100"
            }`}
          >
            <img src={centralImage} alt="Central" className="w-[160px]  h-[160px] object-cover rounded-full ring-8 ring-blue-50" />
          </span>

          {/* Orbiting Circles */}
          <div></div>
          {testimonials.map((testimonial, index) => (
            <OrbitingCircles
              key={testimonial.id}
              className="size-[100px] border-none"
              radius={index % 2 === 0 ? 170 : 290} // Adjust radius for alternate circles
              duration={20}
              delay={index * 5} // Use index to stagger delays
              reverse={index % 2 === 1} // Reverse effect for alternate circles
            >
              <div className="rounded-full overflow-hidden z-1000000 ring-4 ring-sky-100 relative">
              <img
                src={testimonial.image}
                alt={`Person ${index + 1}`}
                className={`w-[100px] h-[100px] object-cover cursor-pointer transition-opacity duration-300 ${
                  fade ? "opacity-0" : "opacity-100"
                }`}
                onClick={() => handleOrbitingCircleClick(index)} // Update click handler
              />
              </div>
            </OrbitingCircles>
          ))}
        </div>
        <div className="md:hidden relative h-[300px] flex w-full flex-col items-center justify-center rounded-lg">
          {/* Central Image with Fade Effect */}
          <span
            className={`pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-black transition-opacity duration-300 ${
              fade ? "opacity-0" : "opacity-100"
            }`}
          >
            <img src={centralImage} alt="Central" className="w-[80px] h-[80px] object-cover rounded-full" />
          </span>

          {/* Orbiting Circles */}
          <div></div>
          {testimonials.map((testimonial, index) => (
            <OrbitingCircles
              key={testimonial.id}
              className="size-[50px] border-none rounded-full"
              radius={index % 2 === 0 ? 90 : 140} // Adjust radius for alternate circles
              duration={20}
              delay={index * 5} // Use index to stagger delays
              // Reverse effect for alternate circles
            >
              <div className="rounded-full overflow-hidden z-1000000 relative">
                <img
                src={testimonial.image}
                alt={`Person ${index + 1}`}
                className={`w-[50px] h-[50px] object-cover cursor-pointer rounded-full transition-opacity duration-300 ${
                  fade ? "opacity-0" : "opacity-100"
                }`}
                onClick={() => handleOrbitingCircleClick(index)} // Update click handler
              /> 
              </div>
             
            </OrbitingCircles>
          ))}
        </div>
        <div className="w-full h-full">
          <Heading
            title="Student Testimonials"
            titleClassName="lg:font-extrabold lg:text-left  text-secondary-color rem]"
            className=" hidden sm:block w-full pb-0 text-left sm:col-span-4 sm:pb-0 lg:pb-14"
          />

          <Carousel
            plugins={[plugin.current]}
            setApi={setApi}
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.play}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id}>
                  <div className="p-1">
                    <Card className="bg-transparent border-none rounded-none shadow-none">
                      <CardContent className="p-0 lg min-h-[500px] sm:h-[400px] border-none shadow-none grid">
                        <div className="bg-white">
                          <div className="p-0 sm:space-y-8">
                            <div className="flex mb-4 justify-center sm:justify-start">
                              {[...Array(4)].map((_, i) => (
                                <Star
                                  key={i}
                                  className="sm:w-6 sm:h-6 text-yellow-400 fill-current"
                                />
                              ))}
                              <Star className="w-6 h-6 text-gray-300" />
                            </div>
                            <blockquote className="md:text-lg  text-center sm:text-left text-base sm:font-medium text-gray-700 mb-4 sm:leading-[3rem]">
                              {testimonial.message}
                            </blockquote>
                            <div className="mt-6">
                              <p className="text-lg text-center sm:text-left font-semibold text-red-600 md:text-2xl">
                                {testimonial.name} - {testimonial.batch}
                              </p>
                             
                              <p className="text-sm text-center sm:text-left text-gray-600 md:text-xl">
                                {testimonial.position}
                              </p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious
              onClick={handlePrevious}
              iconStyle="text-white h-4 lg:h-8"
              className="absolute sm:left-[0px] left-[20%] top-[90%] sm:top-[110%] bg-gray-300 hover:bg-red-600 h-10 w-20 active:bg-red-700 sm:w-24 rounded-none opacity-100"
            />
            <CarouselNext
              onClick={handleNext}
              iconStyle="text-white h-4 lg:h-8"
              className="absolute sm:left-[110px] left-[55%] top-[90%] sm:top-[110%] bg-slate-300 hover:bg-red-600 w-20 sm:w-24 h-10 rounded-none opacity-100 active:bg-red-700"
            />
          </Carousel>
        </div>
      </div>
    </Container>
  );
}
