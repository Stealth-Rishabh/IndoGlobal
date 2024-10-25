import Container from "../../components/wrappers/Container";
import Heading from "../../components/Heading";
import ImgAndBreadcrumb from "../../components/ImgAndBreadcrumb";
// import Header from "../header/Header";
import img from "../../assets/breadcrumb.png";
// import { Button } from "@/components/ui/button";
import Stats from "../../components/Stats";
import Newsletter from "../../components/Newsletter";
// import { Link } from "react-router-dom";
import { MapPin, Phone, Globe, Mail, Building } from "lucide-react";
import AboutSidebar from "../../components/AboutSidebar";

const breadcrumbItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { label: "Vision & Mission" },
];

const sidebarLinks = [
  { href: "/about/accreditation", label: "Accreditation and Tie-ups" },
  { href: "/about/location", label: "College Location" },
  { href: "/about/vision-mission", label: "Vision and Mission" },
  { href: "/about/leadership", label: "Leadership" },
  { href: "/about/faculty", label: "Eminent Faculty" },
];

const VisionAndMission = () => {
  return (
    <div className="relative">
      <ImgAndBreadcrumb
        title="About Us"
        imageSrc={img}
        imageAlt="Description of the image"
        breadcrumbItems={breadcrumbItems}
      />
      <Container className="container grid grid-cols-1 md:grid-cols-4 gap-14 ">
        <div className="col-span-1 pt-12 md:col-span-3">
          <Heading title="Vision and Mission" subtitle="Our vision is to be a leading institution in the field of technology education, providing innovative and quality education to students. Our mission is to prepare students for successful careers in the technology industry by providing them with the knowledge, skills, and experience they need to succeed." titleClassName="text-secondary-color text-left lg:text-5xl" subtitleClassName="text-gray-500 text-justify m-0 lg:text-lg lg:font-normal lg:max-w-full" className="lg:pb-14" />
        </div>
        <AboutSidebar sidebarLinks={sidebarLinks} />
      </Container>
    </div>
  );
};

export default VisionAndMission;
