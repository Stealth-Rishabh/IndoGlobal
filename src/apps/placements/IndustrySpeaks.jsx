import Heading from "../../components/Heading";
import ImgAndBreadcrumb from "../../components/ImgAndBreadcrumb";
import Container from "../../components/wrappers/Container";
// import Header from "../header/Header";
import img from "../../assets/breadcrumb.png";
import IconMarquee from "../aboutPage/IconMarquee";
// import { useEffect, useState } from "react";
// import { Button } from "@/components/ui/button";
import Stats from "../../components/Stats";
import Newsletter from "../../components/Newsletter";
//imgs
import ashoklayland from "../../assets/about/tieUps/ashoklayland.png";
import cisco from "../../assets/about/tieUps/cisco.png";
import ibm from "../../assets/about/tieUps/ibm.png";
import IETE from "../../assets/about/tieUps/IETE.png";
import IIT_BOMBAY from "../../assets/about/tieUps/IIT_BOMBAY.png";
import IIT_Kanpur from "../../assets/about/tieUps/IIT_Kanpur.jpg";
import ISTE_logo from "../../assets/about/tieUps/ISTE_logo.png";
import oracle from "../../assets/about/tieUps/oracle.png";
import redhat_logo from "../../assets/about/tieUps/redhat_logo.png";
import Roundglass from "../../assets/about/tieUps/Roundglass.png";
import toyota from "../../assets/about/tieUps/toyota.png";
import university_of_quebec from "../../assets/about/tieUps/university_of_quebec.png";
// import { Link } from "react-router-dom";
import AboutSidebar from "../../components/AboutSidebar";

const icons = [
  { src: ashoklayland, alt: "Ashok Leyland" },
  { src: cisco, alt: "Cisco" },
  { src: ibm, alt: "IBM" },
  { src: IETE, alt: "IETE" },
  { src: IIT_BOMBAY, alt: "IIT Bombay" },
  { src: IIT_Kanpur, alt: "IIT Kanpur" },
  { src: ISTE_logo, alt: "ISTE" },
  { src: oracle, alt: "Oracle" },
  { src: redhat_logo, alt: "Red Hat" },
  { src: Roundglass, alt: "Roundglass" },
  { src: toyota, alt: "Toyota" },
  { src: university_of_quebec, alt: "University of Quebec" },
];

const sidebarLinks = [
    { href: "/placements/campus-recruitments", label: "Campus Recruitments" },
    { href: "/placements/industry-speaks", label: "Industry Speaks" },
    { href: "/placements/industry-tie-ups", label: "Industry Tie-ups" },
    { href: "/placements/placement-activities", label: "Placement Activities" },
    { href: "/placements/our-recruiters", label: "Our Recruiters" },
  ];
const IndustrySpeaks = () => {
    const breadcrumbItems = [
        { href: "/", label: "Home" },
        { href: "/industry-speaks", label: "Placements" },
        { label: "Industry Speaks" },
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
        <div className="md:sticky md:top-5 self-start">
          <AboutSidebar sidebarLinks={sidebarLinks} />
        </div>
        <div className="col-span-1 md:col-span-3 pt-12">
          <Heading
            title="Industry Insights"
            titleClassName="text-secondary-color text-left lg:text-5xl"
            subtitleClassName="text-gray-500 text-justify m-0 lg:text-lg lg:font-normal lg:max-w-full"
            subtitle="Gain valuable insights from industry experts on developing intellectual, practical, and social skills, with a focus on leadership, socially responsible behavior, and lifelong learning."
          />
          <IconMarquee icons={icons} />
        </div>
      </Container>
      <Stats />
      <Newsletter />
    </div>
  );
};

export default IndustrySpeaks;
