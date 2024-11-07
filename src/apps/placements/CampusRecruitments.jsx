import Heading from "../../components/Heading";
import ImgAndBreadcrumb from "../../components/ImgAndBreadcrumb";
import Container from "../../components/wrappers/Container";
// import Header from "../header/Header";
import img from "../../assets/breadcrumb.png";
// import { useEffect, useState } from "react";
// import { Button } from "@/components/ui/button";
import Stats from "../../components/Stats";
import Newsletter from "../../components/Newsletter";
import AboutSidebar from "../../components/AboutSidebar";

const sidebarLinks = [
  { href: "/placements/campus-recruitments", label: "Campus Recruitments" },
  { href: "/placements/industry-speaks", label: "Industry Speaks" },
  { href: "/placements/industry-tie-ups", label: "Industry Tie-ups" },
  { href: "/placements/placement-activities", label: "Placement Activities" },
  { href: "/placements/our-recruiters", label: "Our Recruiters" },
];

const imageItems = [
  {
    src: "https://img.freepik.com/free-photo/guy-shows-document-girl-group-young-freelancers-office-have-conversation-working_146671-13569.jpg?t=st=1730971040~exp=1730974640~hmac=59c67a5b90ca22a480b52b4419fd55bec7acff2349d373d3a50f5ca9101fb919&w=1060",
    alt: "Photo by Minh Pham",
    label: "Campus Placements",
    height: "h-48",
    mdHeight: "md:h-80",
  },
  {
    src: "https://images.unsplash.com/photo-1620458738323-4148c6093433?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Photo by Magicle",
    label: "Dream Companies",
    height: "h-48",
    mdHeight: "md:col-span-2 md:h-80",
  },
  {
    src: "https://img.freepik.com/free-photo/architecture-independence-palace-ho-chi-minh-city_181624-21243.jpg",
    alt: "Photo by Martin Sanchez",
    label: "Dream Careers",
    height: "h-48",
    mdHeight: "md:col-span-2 md:h-80",
  },
  {
    src: "https://img.freepik.com/free-photo/businessman-summer-city_1157-16332.jpg?t=st=1730966345~exp=1730969945~hmac=c43701a202238cdddca96feb396e8a50d30d219e5719d199a51ad2bed7f9e0ce&w=1060",
    alt: "Photo by Lorenzo Herrera",
    label: "Dream Jobs",
    height: "h-48",
    mdHeight: "md:h-80",
  },
];
const CampusRecruitments = () => {
  const breadcrumbItems = [
    { href: "/", label: "Home" },
    { href: "/", label: "Placements" },
    { label: "Campus Recruitments" },
  ];
 

  return (
    <div className="relative min-h-screen">
      <ImgAndBreadcrumb
        title="Placements"
        imageSrc={img}
        imageAlt="Description of the image"
        breadcrumbItems={breadcrumbItems}
      />
      <Container className="container grid grid-cols-1 md:grid-cols-4 gap-14">
        <div className="md:sticky md:top-20 self-start">
          <AboutSidebar sidebarLinks={sidebarLinks} />
        </div>
        <div className="col-span-1 md:col-span-3 pt-12">
          <Heading
            title="Campus Recruitments"
            subtitle="Discover a world of career possibilities and growth with our campus placement programs"
            titleClassName="text-secondary-color text-left lg:text-5xl"
            subtitleClassName="text-gray-500 text-justify m-0 lg:text-lg lg:font-normal lg:max-w-full"
            className="lg:pb-10"
          />
          <CampusGallery />
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
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent bg-opacity-50 -z-10 text-white text-opacity-100 bg-black"></div>
          </div>
        </div>
      ))}
    </div>
  );
};
