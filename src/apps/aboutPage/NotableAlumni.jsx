import Container from "../../components/wrappers/Container";
import Heading from "../../components/Heading";
import ImgAndBreadcrumb from "../../components/ImgAndBreadcrumb";
// import Header from "../header/Header";
import img from "../../assets/aboutUsBanner.webp";
// import { Button } from "@/components/ui/button";
import Stats from "../../components/Stats";
import Newsletter from "../../components/Newsletter";
// import { Link } from "react-router-dom";
import AboutSidebar from "../../components/AboutSidebar";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import harkirat from "../../assets/testimonial/Harkirath.png";
import rohith from "../../assets/testimonial/Rohith.webp";
import manu from "../../assets/testimonial/Manu.png";
import ritwik from "../../assets/testimonial/Ritwik.png";
import gaurav from "../../assets/testimonial/Gaurav.png";
import abhay from "../../assets/testimonial/Abhay.webp";
import arif from "../../assets/testimonial/Mohd.webp";
import devansh from "../../assets/testimonial/devansh.png";
import tanka from "../../assets/testimonial/tanka.png";
import rojeena from "../../assets/testimonial/rojeena.png";
import vijay from "../../assets/testimonial/vijay.png";
import dewansh from "../../assets/testimonial/dewansh.png";
import vrishan from "../../assets/testimonial/vrishan.png";
import gagandeep from "../../assets/testimonial/gagandeep.png";
import munshi from "../../assets/testimonial/munshi.png";
import ugam from "../../assets/testimonial/Ugam.webp";
import kanwal from "../../assets/testimonial/kanwal.png";
import ayush from "../../assets/testimonial/ayush.png";
import vidush from "../../assets/testimonial/vidush.png";
import harpreet from "../../assets/testimonial/Harpreet.webp";
import ujjwal from "../../assets/testimonial/ujjwal.png";

const breadcrumbItems = [
  { href: "/", label: "Home" },
  { href: "/about/notable-alumni", label: "About" },
  { label: "Notable Alumni" },
];

const sidebarLinks = [
  { href: "/about/accreditation", label: "Accreditation and Tie-ups" },
  { href: "/about/location", label: "Campus Location" },
  { href: "/about/vision-mission", label: "Vision and Mission" },
  { href: "/about/leadership", label: "Leadership" },
  { href: "/about/eminent-faculty", label: "Eminent Faculty" },
  { href: "/about/notable-alumni", label: "Notable Alumni" },
];

const NotableAlumni = ({ h1 }) => {
  return (
    <div className="relative min-h-screen">
      <ImgAndBreadcrumb
        title="Eminent Faculty"
        imageSrc={img}
        imageAlt="Description of the image"
        breadcrumbItems={breadcrumbItems}
      />
      <Container className="container relative grid grid-cols-1 md:grid-cols-4 gap-14">
        <div className="hidden md:block  self-start md:sticky md:top-5">
          <AboutSidebar sidebarLinks={sidebarLinks} />
        </div>
        <div className="col-span-1 pt-12 md:col-span-3">
          <Heading
            title={h1}
            subtitle=""
            titleClassName="text-secondary-color text-left lg:text-5xl"
            subtitleClassName="text-gray-500 text-justify m-0 lg:text-lg lg:font-normal lg:max-w-full font-normal"
            className=""
          />
          <div className="grid grid-cols-1 gap-20">
            <TestimonialSection />
          </div>
        </div>
      </Container>
      <Stats />
      <Newsletter />
    </div>
  );
};

export default NotableAlumni;

const testimonials = [
  {
    id: 1,
    title: "Major Harkirath Singh",
    content:
      "Major Harkirath Singh, SM, was commissioned into the Armoured Corps of the Indian Army on September 12, 2015. He has served in challenging Counter-Insurgency and Counter-Terrorism operations in the Kashmir Valley, where he led numerous successful anti-terror operations.",
    image: harkirat,
    role: "Batch of 2014- CSE",
  },
  {
    id: 2,
    title: "Rohith",
    content:
      "Rohith CSE ,it was wonderful studying at Indo Global Colleges of Engineering. I feel truly proud to have graduated from here. Being campus-selected in the 3rd year itself is still a dream for many students, but we achieved it with the unwavering support of our teachers and faculty.",
    image: rohith,
    role: "Batch of 2019-2023 CSE",
  },

  {
    id: 3,
    title: "Manu Kumar",
    content:
      "Manu Kumar from CSE, My graduation from Indo Global College stands as one of the most pivotal decisions I have ever made. The memories forged here with my esteemed faculty and cherished friends will forever be a guiding light, inspiring me towards ever future triumph.",

    image: manu,
    role: "Batch of 2019-2023 CSE",
  },

  {
    id: 4,
    title: "Ritwik",
    content:
      "Hi, Ritwik from Indo Global Colleges, studying at IGC has been of the most enriching experience of my life. I take immense pride in being a graduate of the prestigious instutuion.Getting Campus selection in the 3rd year was a milestone achievement, one that would not have been possible without the consent guidance and encouragement of our exception faculty members.",
    image: ritwik,
    role: "Batch of 2019-2023 CSE",
  },

  {
    id: 5,
    title: "Gaurav",
    content:
      "Hi, Gaurav Sharma M.Tech CSE 2021, it was a great experience studying at IGC with experienced and helping faculty members, guiding time to time for future improvements. The faculty members are really great in imparting knowledge in various areas. I got a very good and knowledgeable platform at IGC.I am thankful to all my teaching staff for providing me guidance and making my future so bright.",
    image: gaurav,
    role: "Batch of 2021 CSE",
  },

  {
    id: 6,
    title: "ABHAY PRASAD",
    content: `As a Supervisor at Nalco Water, an Ecolab Company, based at Tata Steel Jamshedpur since June 2022, I manage the recirculation of industrial water, chemical dosing, and hot water operations across multiple departments. Additionally, I serve as a Site Supervisor at Tata Steel, focusing on safety, cross-functional leadership, and technical support.`,

    image: abhay,
    role: "Batch of 2016 - 2020 Mechanical Engineering",
  },
  {
    id: 7,
    title: "MOHD ARIF WANI",
    content:
      "As a certified PMI-PMP Planning Engineer, I bring extensive experience in project planning, cost control, and data analysis. Currently, I work at Yapı Merkezi in Riyadh, where I've been driving project efficiency since January 2024. My previous roles include serving as a Cost Control and Planning Engineer at SHAR Company in Neom and as a Project Planner at SANS International Construction Company in Yanbu, where I honed my skills in Microsoft Power BI and strategic planning. With a strong commitment to excellence and a proven track record, I am dedicated to delivering results-oriented project solutions.",
    image: arif,
    role: "Batch of 2018 - 2022 Mechanical Engineering",
  },
  {
    id: 8,
    title: "DEVANSH KALRA",
    content:
      "As an alumnus of the Mechanical Engineering Department at Indo Global College of Engineering, I have built a rewarding career in engineering and operations management. With a solid foundation in manufacturing, engineering, and project management, I currently serve as the Operations Head at Microturner in Barotiwala, Baddi, Himachal Pradesh.",
    image: devansh,

    role: "Batch of 2013 - 2017 Mechanical Engineering",
  },

  {
    id: 9,
    title: "TANKA PRASAD DANGI",
    content:
      "Hello! I'm Tanka Prasad Dangi, a Mechanical Engineering graduate from the batch of 2023. I am currently working as a Junior Engineer at the Nepal Hydroelectric Plant, where I contribute to the development and maintenance of renewable energy solutions in Nepal. My journey in the field of mechanical engineering has been driven by a deep interest in sustainable energy and technology.",
    image: tanka,
    role: "Batch of 2019 - 2023 Mechanical Engineering",
  },

  {
    id: 10,
    title: "ROJEENA SUBHA LIMBO",
    content:
      "I'm Rojeena Subha Limboo, a proud graduate from the 2019-2023 batch of Mechanical Engineering. I'm currently working as a Shift Engineer at Cipla, where I oversee production processes and ensure the efficient functioning of operations in the pharmaceutical industry.",
    image: rojeena,
    role: "Batch of 2019 - 2023 Mechanical Engineering",
  },

  {
    id: 11,
    title: "Vijay Kumar",
    content:
      "I am Vijay Kumar, a recent graduate of Mechanical Engineering from the Class of 2023. Currently, I am employed as a Quality Supervisor at L&T in Surat, Gujarat, where I am responsible for ensuring the quality of products throughout the manufacturing process. In my role, I oversee quality control protocols, conduct inspections, and collaborate with various teams to ensure that all products meet the highest industry standards.",
    image: vijay,
    role: "Batch of 2019 - 2023 Mechanical Engineering",
  },

  {
    id: 12,
    title: "Dewansh Gupta",
    content:
      "I am Dewansh Gupta, a proud graduate of the Mechanical Engineering class of 2023. After completing my degree, I took a bold step and founded my own company, Gear Technology Pvt Ltd, where we specialize in advanced mechanical solutions and precision engineering products.",
    image: dewansh,
    role: "Batch of 2019 - 2023 Mechanical Engineering",
  },
  {
    id: 13,
    title: "Vrishan Khera",
    content:
      "I am Vrishan Khera, a proud graduate of the Mechanical Engineering batch of 2023. Currently, I am working as an Assistant Engineer at Bhushan Steel, where I am involved in overseeing and improving manufacturing processes, ensuring the quality and efficiency of steel production.",
    image: vrishan,

    role: "Batch of 2019 - 2023 Mechanical Engineering",
  },
  {
    id: 14,
    title: "Gagandeep Singh",
    content:
      "I am Gagandeep Singh, a proud graduate in Mechanical Engineering. Currently, I am working as a Site Engineer at Larsen & Toubro (L&T), one of India's leading engineering and construction companies. In my role, I am responsible for managing site operations, ensuring that projects are completed on time, within budget, and to the highest quality standards.",
    image: gagandeep,
    role: "B.Tech in Mechanical Engineering",
  },
  {
    id: 15,
    title: "Munshi Pandit",
    content:
      "As a 2023 graduate in Mechanical Engineering, I am proud to be working as a Quality Supervisor at Reliance Industries in Jamnagar, Gujarat. This role allows me to apply my technical knowledge and passion for precision to ensure the highest quality standards in our operations. Being part of one of India's leading industrial hubs has been an incredible learning experience, and I am committed to contributing to the excellence and innovation that Reliance stands for.",
    image: munshi,
    role: "Batch of 2019 - 2023 Mechanical Engineering",
  },
  {
    id: 16,
    title: "UJJWAL BAKSHI",
    content:
      "As a 2024 graduate of Indo-Global College of Engineering, I am privileged to serve as a Duty Officer at All India Radio, Jammu. This role allows me to ensure smooth broadcasting operations while honing my technical and managerial skills. The journey from being a committed student to contributing to India's prestigious media network has been both challenging and rewarding.",
    image: ujjwal,
    role: "Batch of 2020 - 2024 Mechanical Engineering",
  },
  {
    id: 17,
    title: "VIDUSH SHARMA",
    content:
      "As a 2023 graduate, I am honored to serve as a Government Teacher in the Mechanical Engineering Department in the state of Jammu and Kashmir. This role allows me to share my knowledge and passion for engineering with aspiring minds, contributing to their growth and the development of the region's technical education. Being part of this noble profession is deeply fulfilling, and I am dedicated to nurturing the next generation of engineers with enthusiasm and commitment.",
    image: vidush,
    role: "Batch of 2019 - 2023 Mechanical Engineering",
  },
  {
    id: 18,
    title: "HARPREET KAUR",
    content:
      "My journey at Indo Global Colleges was transformative, both academically and personally. The faculty's dedication to imparting knowledge, their unwavering support, and their commitment to nurturing each student's potential played a pivotal role in shaping my career. The comprehensive curriculum, state-of-the-art facilities, and hands-on learning experiences equipped me with the skills and confidence needed to excel in the professional world.",
    image: harpreet,
    role: "Batch of 2009 - 2013 Mechanical Engineering",
  },
  {
    id: 19,
    title: "KANWAL SIDHU",
    content:
      "As I sit here reflecting on my journey from being a student to a professional, I cannot help but feel immense gratitude towards my college. The education, resources, and support I received throughout my time there played a crucial role in helping me secure a job as Junior Engineer in Punjab Govt. (PWRMDC)",
    image: kanwal,

    role: "Batch of 2010 - 2014 Mechanical Engineering",
  },
  {
    id: 20,
    title: "Ayush Sharma",
    content:
      "As I sit down to write about my journey since graduating from Indo Global College of Engineering, I'm overwhelmed with gratitude and nostalgia. The college was more than just an institution - it was my second home, where I grew, learned, and evolved.",
    image: ayush,

    role: "Batch of 2016 - 2020 Civil Engineering",
  },
  {
    id: 21,
    title: "Ugam Kumar Sharma",
    content:
      "I am Ugam Kumar Sharma from Bihar. I have completed my Bachelor of Technology degree in civil engineering with {first class with 89.10} from Indo Global College of engineering, Chandigarh. All the faculty and HOD are supported lots of more during the prepration by which currently I have posted on junior executive engineer in A maharatna central powergrid corporation of india {CPSU} at lakhisarai substation, Bihar.",
    image: ugam,
    role: "Batch of 2019 - 2023 Civil Engineering",
  },
];

function TestimonialSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextTestimonial = useCallback(() => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const previousTestimonial = useCallback(() => {
    setDirection(-1);
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  }, []);

  useEffect(() => {
    const timer = setInterval(nextTestimonial, 8000);
    return () => clearInterval(timer);
  }, [nextTestimonial]);

  return (
    <section className="px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: direction * 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -direction * 50 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col md:flex-row items-center gap-8 md:gap-16"
            >
              <div className="w-full md:w-1/2 relative">
                <div className="aspect-square rounded-full overflow-hidden border-8 border-white shadow-xl">
                  <img
                    src={testimonials[activeIndex].image || "/placeholder.svg"}
                    alt={testimonials[activeIndex].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                  className="absolute -bottom-6 -right-6 bg-blue-500 text-white p-4 rounded-full shadow-lg"
                >
                  <Quote size={32} />
                </motion.div>
              </div>
              <div className="w-full md:w-1/2 space-y-6">
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-3xl font-bold text-gray-900"
                >
                  {testimonials[activeIndex].title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-xl text-gray-600 leading-relaxed"
                >
                  {testimonials[activeIndex].content}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="flex items-center gap-4"
                >
                  <div>
                    <p className="font-semibold text-gray-900">
                      {testimonials[activeIndex].name}
                    </p>
                    <p className="text-gray-500">
                      {testimonials[activeIndex].role}
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between pointer-events-none">
            <button
              onClick={previousTestimonial}
              className="p-2 rounded-full bg-white shadow-md text-gray-800 hover:bg-gray-100 transition-colors pointer-events-auto"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-white shadow-md text-gray-800 hover:bg-gray-100 transition-colors pointer-events-auto"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <div className="mt-12 flex justify-center gap-3 pb-8">
          {testimonials.map((_, index) => {
            // Calculate the current group (0-4, 5-9, 10-14, etc.)
            const currentGroup = Math.floor(activeIndex / 5);
            const startIndex = currentGroup * 5;
            const endIndex = startIndex + 4;

            // Only render buttons for the current group of 5
            if (index >= startIndex && index <= endIndex) {
              return (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`relative w-3 h-3 rounded-full transition-all duration-300 mt-2 ${
                    index === activeIndex ? "bg-blue-500 w-6" : "bg-gray-300"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                >
                  {/* <span className="absolute top-6 left-1/2 -translate-x-1/2 text-xs text-gray-500 whitespace-nowrap">
                    {index + 1}
                  </span> */}
                </button>
              );
            }
            return null;
          })}
        </div>
      </div>
    </section>
  );
}
