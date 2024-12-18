/* eslint-disable react/prop-types */
import Heading from "../../components/Heading";
import ImgAndBreadcrumb from "../../components/ImgAndBreadcrumb";
import Container from "../../components/wrappers/Container";
import img from "../../assets/aboutUsBanner.webp";
import Stats from "../../components/Stats";
import Newsletter from "../../components/Newsletter";
import AboutSidebar from "../../components/AboutSidebar";
import {
  Lightbulb,
  Target,
  GraduationCap,
  Users,
  BeakerIcon,
  UserCheck,
  BarChart,
  Settings,
  HeartIcon,
} from "lucide-react";

import outcome from "../../assets/whyIndoGlobal/IndustryOrientedCurriculum/IndustryOrientedCurriculum (3).webp";
import technology from "../../assets/whyIndoGlobal/IndustryOrientedCurriculum/IndustryOrientedCurriculum (1).webp";
import valueBased from "../../assets/whyIndoGlobal/IndustryOrientedCurriculum/IndustryOrientedCurriculum (2).webp";

const data = [
  {
    section: "Outcome-Based Education",
    icon: <BarChart className="w-10 h-10 text-blue-600" />,
    imgUrl: outcome,
    points: [
      {
        text: "Implement a student-centered model that evaluates knowledge, skills, and attitudes through measurable outcomes.",
        icon: <Target className="w-6 h-6 text-blue-500" />,
      },
      {
        text: "Align curriculum with specific learning outcomes that define the skills and behaviors graduates should attain.",
        icon: <GraduationCap className="w-6 h-6 text-blue-500" />,
      },
      {
        text: "Assess students continuously to ensure they meet all essential competencies throughout their learning journey.",
        icon: <BarChart className="w-6 h-6 text-blue-500" />,
      },
    ],
  },
  {
    section: "Technology",
    icon: <Settings className="w-10 h-10 text-blue-600" />,
    imgUrl: technology,
    points: [
      {
        text: "Cultivate innovation and creativity, encouraging students to think beyond conventional solutions.",
        icon: <Lightbulb className="w-6 h-6 text-blue-500" />,
      },
      {
        text: "Integrate cutting-edge technology into learning, preparing students for a rapidly evolving digital world.",
        icon: <BeakerIcon className="w-6 h-6 text-blue-500" />,
      },
      {
        text: "Advance technical knowledge, fostering expertise in fields that drive growth and development.",
        icon: <Target className="w-6 h-6 text-blue-500" />,
      },
    ],
  },
  {
    section: "Value-Based Education",
    icon: <HeartIcon className="w-10 h-10 text-blue-600" />,
    imgUrl: valueBased,
    points: [
      {
        text: "Instill values such as discipline, teamwork, and integrity as foundational pillars of personal growth.",
        icon: <UserCheck className="w-6 h-6 text-blue-500" />,
      },
      {
        text: "Encourage students to embody ethical behavior and contribute positively to society.",
        icon: <HeartIcon className="w-6 h-6 text-blue-500" />,
      },
      {
        text: "Promote a culture of respect and empathy, shaping responsible and socially aware citizens.",
        icon: <Users className="w-6 h-6 text-blue-500" />,
      },
    ],
  },
];

const sidebarLinks = [
  {
    href: "/why-indo-global/industry-oriented-curriculum",
    label: "Industry Oriented Curriculum",
  },
  { href: "/why-indo-global/entrepreneurship", label: "Entrepreneurship" },
  { href: "/why-indo-global/sports-arena", label: "Sports Arena" },
  { href: "/why-indo-global/infrastructure", label: "Infrastructure" },
  {
    href: "/why-indo-global/great-transportation",
    label: "Great Transportation",
  },
  { href: "/why-indo-global/students-security", label: "Students Security" },
  { href: "/why-indo-global/aicte-spices", label: "AICTE SPICES" },
  { href: "/why-indo-global/hostel", label: "Hostel" },
];

const IndustryOrientedCurriculum = () => {
  const breadcrumbItems = [
    { href: "/", label: "Home" },
    {
      href: "/why-indo-global/industry-oriented-curriculum",
      label: "Why Indo Global",
    },
    { label: "Industry Oriented Curriculum" },
  ];
  return (
    <div className="relative min-h-screen">
      <ImgAndBreadcrumb
        title="Industry-Oriented Curriculum"
        imageSrc={img}
        imageAlt="Description of the image"
        breadcrumbItems={breadcrumbItems}
      />
      <Container className="container grid grid-cols-1 md:grid-cols-4 gap-14">
        <div className="self-start md:sticky md:top-5">
          <AboutSidebar sidebarLinks={sidebarLinks} />
        </div>
        <div className="col-span-1 pt-12 md:col-span-3">
          <Heading
            title="Industry-Ready Curriculum"
            titleClassName="text-secondary-color text-left lg:text-5xl"
            subtitleClassName="text-gray-500 text-justify m-0 lg:text-lg lg:font-normal lg:max-w-full"
            subtitle="Fostering a holistic learning environment where students develop intellectual, practical, and social skills to become leaders, socially responsible citizens, and lifelong learners prepared to meet industry demands."
            className=""
          />
          <div className="grid grid-cols-1 gap-20">
            {data.map((data, index) => (
              <IndustryOrientedCurriculumSection
                key={index}
                data={data}
                order={index}
              />
            ))}
          </div>
        </div>
      </Container>
      <Stats />
      <Newsletter />
    </div>
  );
};

export default IndustryOrientedCurriculum;

const IndustryOrientedCurriculumSection = ({ data, order }) => {
  return (
    <section className="ezy__featured7 light relative bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white z-[1]">
      <div className="">
        <div className="grid justify-center grid-cols-12">
          <div className="col-span-12 ">
            <div className="grid grid-cols-12">
              <div
                className={`col-span-12 md:col-span-6 md:py-12 ${
                  order % 2 === 0 ? "order-1" : "order-2"
                }`}
              >
                <div className="bg-center shadow-md hover:drop-shadow-xl hover:-translate-y-2 transition-all duration-300 bg-no-repeat bg-cover rounded-xl min-h-[150px] h-full overflow-hidden">
                  <img
                    src={data.imgUrl}
                    alt="Outcome"
                    className="w-full h-full object-cover "
                  />
                </div>
              </div>
              <div
                className={`col-span-12 md:col-span-6 pb-6 md:py-2 relative ${
                  order % 2 === 0 ? "order-2" : "order-1"
                }`}
              >
                <div
                  className={`bg-blue-100 dark:bg-[#1E2735] absolute -top-[10%] right-0 left-0 bottom-0 md:top-0 ${
                    order % 2 === 0 ? "md:-left-[20%]" : "md:-right-[20%]"
                  } rounded-xl rotate-180 -z-[1]`}
                ></div>
                <div className="p-6 mb-12 lg:p-14">
                  <div className="w-[74px] h-[74px] bg-white/50 rounded-xl text-[32px] inline-flex items-center justify-center mb-6">
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
