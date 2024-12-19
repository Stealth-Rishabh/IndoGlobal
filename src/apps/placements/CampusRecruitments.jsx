/* eslint-disable react/prop-types */
import Heading from "../../components/Heading";
import ImgAndBreadcrumb from "../../components/ImgAndBreadcrumb";
import Container from "../../components/wrappers/Container";
// import Header from "../header/Header";
import img from "../../assets/BannerPlacements.webp";
// import { useEffect, useState } from "react";
// import { Button } from "@/components/ui/button";
import Stats from "../../components/Stats";
import Newsletter from "../../components/Newsletter";
import AboutSidebar from "../../components/AboutSidebar";
import PlacementProcess from "./PlacementProcess";
import { Users, Laptop, Lightbulb, Network } from "lucide-react";
import CampusRecruitments1 from "../../assets/placements/CampusRecruitments/CampusRecruitments (1).webp";
import CampusRecruitments2 from "../../assets/placements/CampusRecruitments/CampusRecruitments (2).webp";
import CampusRecruitments3 from "../../assets/placements/CampusRecruitments/CampusRecruitments (3).webp";
import CampusRecruitments4 from "../../assets/placements/CampusRecruitments/CampusRecruitments (4).webp";


const features = [
  {
    title: "Communication Skills",
    description:
      "Build effective communication and collaboration abilities crucial for workplace success through interactive workshops and team projects.",
    icon: <Users />,
  },
  {
    title: "PowerPoint Presentations",
    description:
      "Gain proficiency in digital tools and public speaking through guided presentation workshops and practice sessions.",
    icon: <Laptop />,
  },
  {
    title: "Entrepreneurship Classes",
    description:
      "Learn essential skills for starting and running a business, including business planning, financial literacy, and market analysis.",
    icon: <Lightbulb />,
  },
  {
    title: "Entrepreneurial Clubs",
    description:
      "Join clubs that connect you with successful entrepreneurs and investors through networking events and mentorship sessions.",
    icon: <Network />,
  },
];
const cards = [
  {
    title: "723 out of 800 Students Placed in 2022-2023",
  },
  {
    title: "Over 8700+ Students Placed Since 2007",
  },
  {
    title: "150+ Companies Visited in 2022-23 for Placement Drives",
  },
];

const sidebarLinks = [
  { href: "/placements/campus-recruitments", label: "Campus Recruitments" },
  { href: "/placements/industry-speaks", label: "Industry Speaks" },
  { href: "/placements/industry-tie-ups", label: "Industry Tie-ups" },
  { href: "/placements/placement-activities", label: "Placement Activities" },
  { href: "/placements/our-recruiters", label: "Our Recruiters" },
];

const imageItems = [
  {
    src: CampusRecruitments4,
    alt: "Photo by Minh Pham",
    label: "Campus Placements",
    height: "h-48",
    mdHeight: "md:h-80",
  },
  {
    src: CampusRecruitments1,
    alt: "Photo by Magicle",
    label: "Dream Companies",
    height: "h-48",
    mdHeight: "md:col-span-2 md:h-80",
  },
  {
    src: CampusRecruitments2,
    alt: "Photo by Martin Sanchez",
    label: "Dream Careers",
    height: "h-48",
    mdHeight: "md:col-span-2 md:h-80",
  },
  {
    src: CampusRecruitments3,
    alt: "Photo by Lorenzo Herrera",
    label: "Dream Jobs",
    height: "h-48",
    mdHeight: "md:h-80",
  },
];
const CampusRecruitments = () => {
  const breadcrumbItems = [
    { href: "/", label: "Home" },
    { href: "/placements/campus-recruitments", label: "Placements" },
    { label: "Campus Recruitments" },
  ];

  return (
    <div className="relative min-h-screen">
      <ImgAndBreadcrumb
        title="Campus Recruitments"
        imageSrc={img}
        imageAlt="Description of the image"
        breadcrumbItems={breadcrumbItems}
      />
      <Container className="container grid grid-cols-1 md:grid-cols-4 gap-14">
        <div className="md:sticky md:top-5 self-start">
          <AboutSidebar sidebarLinks={sidebarLinks} />
        </div>
        <div className="col-span-1 md:col-span-3 pt-12 space-y-14">
          <Heading
            title="Campus Recruitments"
            subtitle="Discover a world of career possibilities and growth with our campus placement programs"
            titleClassName="text-secondary-color text-left lg:text-5xl"
            subtitleClassName="text-gray-500 text-justify m-0 lg:text-lg lg:font-normal lg:max-w-full"
            className="lg:pb-10"
          />
          <CampusGallery />
          <PlacementHighlights />
          <PlacementProcess />
          <SkillDevelopmentEntrepreneurship />
        </div>
      </Container>
      <Stats />
      <Newsletter />
    </div>
  );
};

export default CampusRecruitments;

const CampusGallery = () => {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8 ">
      {imageItems.map((item, index) => (
        <div
          key={index}
          href="#"
          className={`group relative flex ${item.height} items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg ${item.mdHeight}`}
        >
          <img
            src={item.src}
            loading="lazy"
            alt={item.alt}
            className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
          />

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

          <div className="w-full relative pl-4 py-3 inline-block text-sm text-white md:pl-5 md:text-lg translate-y-14 group-hover:translate-y-0 group-hover:transition-all duration-300">
            {item.label}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent bg-opacity-50 -z-10 text-white text-opacity-100 bg-black blur-sm"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

const CardItem = ({ item }) => (
  <div className="">
    <div className=" ">
      <img
        src="https://cdn.easyfrontend.com/pictures/logos/award-logo.png"
        alt=""
        className="max-w-[100px] text-blue-600 mx-auto hover:rotate-[360deg] duration-300"
      />
    </div>
    <h5 className="text-[17px] font-medium leading-relaxed mb-0 text-center ">
      {item.title}
    </h5>
  </div>
);

const PlacementHighlights = () => {
  return (
    <section className="rounded-lg dark-gray    dark:bg-[#0b1727] text-slate-800 dark:text-white">
      <div className="container  mx-auto">
        <div className="grid grid-cols-3 gap-6 ">
          <div className="col-span-3 space-y-4 mb-10 ">
            <h2 className="text-3xl font-bold md:text-4xl ">
              Placement Highlights
            </h2>
            <p className="text-lg leading-6 mb-6 text-gray-500">
              Join us to explore the latest placement highlights and success
              stories.
            </p>
          </div>
          {cards.map((item, i) => (
            <div
              className="col-span-3 md:col-span-1 hover:scale-105 duration-300"
              key={i}
            >
              <CardItem item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FeatureItem = ({ feature, align }) => {
  return (
    <div
      className={`rounded-[20px] bg-gray-100 dark:bg-[#1E2735] p-6 lg:p-12 relative before:bg-blue-600 before:rounded-[20px] before:absolute before:-top-6 before:-bottom-6 ${
        align ? "before:-left-6" : "before:-right-6"
      } before:w-1/3 before:-z-[1]`}
    >
      <div className="w-[74px] h-[74px] bg-white dark:bg-[#0b1727] text-blue-600 rounded-xl text-[32px] inline-flex items-center justify-center mb-6">
        {/* <FontAwesomeIcon icon={feature.icon} /> */}
        {feature.icon}
      </div>
      <h4 className="text-2xl font-bold mb-4">{feature.title}</h4>
      <p className="opacity-70">{feature.description}</p>
    </div>
  );
};

const SkillDevelopmentEntrepreneurship = () => {
  return (
    <section className="ezy__featured5 light py-6 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white relative overflow-hidden z-[1]">
      <div className="  mx-auto">
        <div className="grid grid-cols-12 justify-center mb-16">
          <div className="col-span-12 ">
            <h2 className="text-3xl md:text-4xl leading-none font-bold mb-6">
              Skills Development and Entrepreneurship
            </h2>
            <p className="text-lg leading-6 mb-6 text-gray-500">
              We offer a wide range of programs that help students develop their
              skills and entrepreneurship skills.
            </p>
          </div>
        </div>

        <div className=" px-4 grid grid-cols-12 justify-end gap-y-6 md:gap-x-6">
          {features.map((feature, i) => (
            <div className="col-span-12 md:col-span-6" key={i}>
              <FeatureItem align={i % 2 ? false : true} feature={feature} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
