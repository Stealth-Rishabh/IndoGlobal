import React from "react";
import {
  Book,
  Users,
  MessageSquare,
  Building,
  PenTool,
  Presentation,
  Network,
  BookOpen,
  Globe2,
  Trophy,
  RefreshCw,
} from "lucide-react";
import Heading from "../../components/Heading";
import ImgAndBreadcrumb from "../../components/ImgAndBreadcrumb";
import Container from "../../components/wrappers/Container";
import Stats from "../../components/Stats";
import Newsletter from "../../components/Newsletter";
import AboutSidebar from "../../components/AboutSidebar";
import img from "../../assets/breadcrumb.png";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const features = [
  {
    title: "Panel Discussions",
    description:
      "Interactive sessions with industry leaders sharing experiences and insights with our students through engaging discussions.",
    icon: <MessageSquare />,
  },
  {
    title: "Soft Skills Training",
    description:
      "Comprehensive training in communication skills and personality development to give students a competitive edge.",
    icon: <PenTool />,
  },
  {
    title: "Seminars & Workshops",
    description:
      "Skill development opportunities through hands-on workshops and informative seminars on various industry topics.",
    icon: <Presentation />,
  },
  {
    title: "Industry Interface",
    description:
      "Regular interaction with industry leaders and professionals to understand global business practices and trends.",
    icon: <Building />,
  },
];

const trainingActivities = [
  {
    title: "Mock Interviews",
    description:
      "Regular practice sessions to prepare students for real interview scenarios",
    icon: <Users />,
  },
  {
    title: "Aptitude Training",
    description:
      "Comprehensive preparation for competitive examinations and placement tests",
    icon: <Book />,
  },
  {
    title: "Group Discussions",
    description:
      "Interactive sessions to enhance communication and leadership skills",
    icon: <Network />,
  },
  {
    title: "Case Studies",
    description:
      "Real-world problem solving and analytical thinking development",
    icon: <BookOpen />,
  },
];

const sidebarLinks = [
  { href: "/placements/campus-recruitments", label: "Campus Recruitments" },
  { href: "/placements/industry-speaks", label: "Industry Speaks" },
  { href: "/placements/industry-tie-ups", label: "Industry Tie-ups" },
  { href: "/placements/placement-activities", label: "Placement Activities" },
  { href: "/placements/our-recruiters", label: "Our Recruiters" },
];

const PlacementActivities = () => {
  const breadcrumbItems = [
    { href: "/", label: "Home" },
    { href: "/placement-activities", label: "Placements" },
    { label: "Placement Activities " },
  ];

  return (
    <div className="relative min-h-screen">
      <ImgAndBreadcrumb
        title="Placements"
        imageSrc={img}
        imageAlt="Placement Activities"
        breadcrumbItems={breadcrumbItems}
      />
      <Container className="container grid grid-cols-1 md:grid-cols-4 gap-14">
        <div className="md:sticky md:top-5 self-start">
          <AboutSidebar sidebarLinks={sidebarLinks} />
        </div>
        <div className="col-span-1 md:col-span-3  space-y-5 pt-12">
          <Heading
            title="Training & Placement Cell"
            subtitle="Indo Global Colleges have a full-fledged Training & Placement Cell which is integral to our institution. 
        We maintain strong industry networks and provide regular guidance to ensure our students are well-prepared 
        for their professional careers. Our focus extends beyond placements to comprehensive skill development 
        that meets current industry challenges."
            titleClassName="text-secondary-color text-left lg:text-5xl"
            subtitleClassName="text-gray-500 text-justify m-0 lg:text-lg lg:font-normal lg:max-w-full"
            className="lg:pb-10 "
          />
          <TrainingPrograms />
          <CoreActivities />
          <IndustryConnect />
        </div>
      </Container>
      <Stats />
      <Newsletter />
    </div>
  );
};

export default PlacementActivities;

const TrainingPrograms = () => (
  <section className="rounded-lg bg-gray-50">
    <h2 className="text-4xl font-bold mb-8">Training Programs</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {trainingActivities.map((activity, index) => (
        <div
          key={index}
          className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm"
        >
          <div className="p-3 bg-blue-100 rounded-lg text-blue-600">
            {activity.icon}
          </div>
          <div>
            <h3 className="font-semibold text-xl mb-2">{activity.title}</h3>
            <p className="text-gray-600">{activity.description}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

const CoreActivities = () => (
  <section className="ezy__featured5 py-6 bg-white relative  z-[1]">
    <div className="mb-10">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">Core Activities</h2>
      <p className="text-lg text-gray-500">
        Comprehensive programs designed to enhance student skills and industry
        readiness
      </p>
    </div>
    <div className="grid grid-cols-12 gap-6">
      {features.map((feature, i) => (
        <div
          className="col-span-12 md:col-span-6 hover:scale-105 duration-300 hover:drop-shadow-lg"
          key={i}
        >
          <div
            className={`sm:mx-[2rem] sm:my-[1.5em] rounded-[20px] bg-gray-100 p-6 lg:p-12 relative before:bg-blue-600 before:rounded-[20px] before:absolute before:-top-6 before:-bottom-6 ${
              i % 2 ? "before:-right-6" : "before:-left-6"
            } before:w-1/3 before:-z-[1]`}
          >
            <div className="w-[74px] h-[74px] bg-white text-blue-600 rounded-xl text-[32px] inline-flex items-center justify-center mb-6">
              {feature.icon}
            </div>
            <h4 className="text-2xl font-bold mb-4">{feature.title}</h4>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

function IndustryConnect() {
  const industryItems = [
    {
      title: "Interactive sessions with industry leaders",
      icon: <Users className="h-5 w-5" />,
      content:
        "Engage in thought-provoking discussions with top executives and entrepreneurs from various sectors.",
    },
    {
      title: "Exposure to global business practices",
      icon: <Globe2 className="h-5 w-5" />,
      content:
        "Gain insights into international business strategies and cross-cultural management techniques.",
    },
    {
      title: "Practical learning opportunities",
      icon: <BookOpen className="h-5 w-5" />,
      content:
        "Participate in internships, live projects, and case studies to apply classroom knowledge in real-world scenarios.",
    },
    {
      title: "Leadership development programs",
      icon: <Trophy className="h-5 w-5" />,
      content:
        "Enhance your leadership skills through workshops, seminars, and mentorship programs led by industry experts.",
    },
    {
      title: "Curriculum updates based on industry needs",
      icon: <RefreshCw className="h-5 w-5" />,
      content:
        "Benefit from a constantly evolving curriculum that reflects the latest trends and requirements in the business world.",
    },
  ];

  return (
    <div className="">
      <Card className="w-full  mx-auto overflow-hidden bg-blue-950 border-slate-700">
        <CardHeader className="bg-gradient-to-r from-slate-700 to-slate-600 p-8">
          <CardTitle className="text-4xl font-bold text-slate-100">
            Industry Interface
          </CardTitle>
        </CardHeader>
        <CardContent className="p-8">
          <p className="text-lg text-slate-300 mb-6">
            Regular industry interaction forms a vital part of our academic
            curriculum, providing students with valuable exposure to global
            business practices. Our industry interface program includes:
          </p>
          <Accordion type="single" collapsible className="w-full">
            {industryItems.map((item, index) => (
              <AccordionItem
                value={`item-${index}`}
                key={index}
                className="border-slate-600"
              >
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center gap-3 text-left">
                    <div className="bg-slate-600 p-2 rounded-full text-slate-200">
                      {item.icon}
                    </div>
                    <span className="text-slate-200">{item.title}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-slate-400 pl-12">
                  {item.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
}
