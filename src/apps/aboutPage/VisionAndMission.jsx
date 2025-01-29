import Container from "../../components/wrappers/Container";
import Heading from "../../components/Heading";
import ImgAndBreadcrumb from "../../components/ImgAndBreadcrumb";
import img from "../../assets/aboutUsBanner.webp";
import Stats from "../../components/Stats";
import Newsletter from "../../components/Newsletter";
// import { Link } from "react-router-dom";
// import { MapPin, Phone, Globe, Mail, Building } from "lucide-react";
import AboutSidebar from "../../components/AboutSidebar";
// import Leaf from "../../assets/leaf.png";
import {
  Lightbulb,
  Target,
  Trophy,
  GraduationCap,
  Users,
  BeakerIcon,
  Binary,
  UserCheck,
} from "lucide-react";

import vision from "../../assets/about/Vision&Mission/Vision&Mission (3).webp";
import philosophy from "../../assets/about/Vision&Mission/Vision&Mission (1).webp";
const institutionalData = [
  {
    section: "Vision and Mission",
    image: vision,
    icon: <Lightbulb className="w-10 h-10 text-blue-600" />,
    points: [
      {
        text: "Create an inclusive learning environment that empowers students through balanced development of intellectual, practical, and leadership skills",
        icon: <GraduationCap className="w-6 h-6 text-blue-500" />,
      },
      {
        text: "Establish market leadership as the preferred institution for students, faculty, and industry partners",
        icon: <Target className="w-6 h-6 text-blue-500" />,
      },
      {
        text: "Achieve top-10 ranking across all programs: education, health sciences, engineering, management, and architecture",
        icon: <Trophy className="w-6 h-6 text-blue-500" />,
      },
    ],
  },
  {
    section: "Philosophy",
    image: philosophy,
    icon: <Users className="w-10 h-10 text-blue-600" />,
    points: [
      {
        text: "Enable students to master industry-relevant tools and technologies through hands-on learning and practical application",
        icon: <BeakerIcon className="w-6 h-6 text-blue-500" />,
      },
      {
        text: "Develop comprehensive understanding of systems, methodologies, and materials through integrated learning approaches",
        icon: <Binary className="w-6 h-6 text-blue-500" />,
      },
      {
        text: "Foster collaborative excellence and leadership skills to ensure graduates become highly sought-after professionals",
        icon: <UserCheck className="w-6 h-6 text-blue-500" />,
      },
    ],
  },
];

const breadcrumbItems = [
  { href: "/", label: "Home" },
  { href: "/about/vision-mission", label: "About" },
  { label: "Vision & Mission" },
];

const sidebarLinks = [
  { href: "/about/accreditation", label: "Accreditation and Tie-ups" },
  { href: "/about/location", label: "Campus Location" },
  { href: "/about/vision-mission", label: "Vision and Mission" },
  { href: "/about/leadership", label: "Leadership" },
  { href: "/about/eminent-faculty", label: "Eminent Faculty" },
  { href: "/about/notable-alumni", label: "Notable Alumni" },
];

const VisionAndMission = () => {
  return (
    <div className="min-h-screen ">
      <ImgAndBreadcrumb
        title="Vision & Mission"
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
            title="Vision & Mission"
            subtitle="Our vision is to be a leading technology education institution. Our mission is to equip students with the knowledge and skills for successful careers in the tech industry."
            titleClassName="text-secondary-color text-left lg:text-5xl"
            subtitleClassName="text-gray-500 text-justify m-0 lg:text-lg lg:font-normal lg:max-w-full"
            className=""
          />
          <div className="grid grid-cols-1 gap-20">
            {institutionalData.map((data, index) => (
              <VisionAndMissionSection key={index} data={data} order={index} />
            ))}
          </div>
        </div>
      </Container>
      <Stats />
      <Newsletter />
    </div>
  );
};

export default VisionAndMission;

const VisionAndMissionSection = ({ data, order }) => {
  return (
    <section className="ezy__featured7 light relative bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white z-[1]">
      <div className="">
        <div className="grid justify-center grid-cols-12">
          <div className="col-span-12 ">
            <div className="grid grid-cols-12">
              <div
                className={`col-span-12 md:col-span-6 md:py-12 ${
                  order === 0 ? "order-1" : "order-2"
                }`}
              >
                <img
                  src={data.image}
                  alt="Vision"
                  className="object-cover w-full h-full transition-all duration-300 rounded-xl drop-shadow-sm hover:drop-shadow-xl hover:-translate-y-2 scale-200"
                />
              </div>
              <div
                className={`col-span-12 md:col-span-6 pb-6 md:py-2 relative ${
                  order === 0 ? "order-2" : "order-1"
                }`}
              >
                <div
                  className={`bg-blue-100 dark:bg-[#1E2735] absolute -top-[10%] right-0 left-0 bottom-0 md:top-0 ${
                    order === 0 ? "md:-left-[20%]" : "md:-right-[20%]"
                  } rounded-xl rotate-180 -z-[1]`}
                ></div>
                <div className="p-6 mb-12 lg:p-14">
                  <div className="w-[74px] h-[74px] rounded-xl text-[32px] inline-flex items-center justify-center mb-6">
                    {data.icon}
                  </div>
                  <h4 className="mb-8 text-3xl font-bold text-secondary-color/80">
                    {data.section}
                  </h4>
                  <div className="space-y-4">
                    {data.points.map((point, index) => (
                      <div
                        key={index}
                        className="flex items-start justify-center gap-3 "
                      >
                        <span className="mt-1">{point.icon}</span>
                        <p className="text-base text-secondary-color/70">
                          {point.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
