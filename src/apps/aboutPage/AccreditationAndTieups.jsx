import Heading from "../../components/Heading";
import ImgAndBreadcrumb from "../../components/ImgAndBreadcrumb";
import Container from "../../components/wrappers/Container";
import Header from "../header/Header";
import img from "../../assets/breadcrumb.png";
import IconMarquee from "./IconMarquee";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
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
import { Link } from "react-router-dom";

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
  { href: "/about/accreditation", label: "Accreditation and Tie-ups" },
  { href: "/about/location", label: "College Location" },
  { href: "/about/vision-mission", label: "Vision and Mission" },
  { href: "/about/leadership", label: "Leadership" },
  { href: "/about/faculty", label: "Eminent Faculty" },
];
const AccreditationAndTieups = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sidebar = document.querySelector(".sidebar");
      const container = document.querySelector(".container");
      if (sidebar && container) {
        const containerRect = container.getBoundingClientRect();
        const sidebarRect = sidebar.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (
          containerRect.bottom > windowHeight &&
          sidebarRect.height < windowHeight
        ) {
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const breadcrumbItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { label: "Accreditation & Tie-ups" },
  ];
  return (
    <div className="relative">
      <ImgAndBreadcrumb
        title="About Us"
        imageSrc={img}
        imageAlt="Description of the image"
        breadcrumbItems={breadcrumbItems}
      />
      <Container className="container grid grid-cols-1 md:grid-cols-4 gap-14">
        <div className="col-span-1 md:col-span-3 pt-12">
          <Heading
            title="Accreditation & Tie-ups"
            titleClassName="text-secondary-color text-left lg:text-5xl"
            subtitleClassName="text-gray-500 text-justify m-0 lg:text-lg lg:font-normal lg:max-w-full"
            subtitle="To provide a learning environment in which all students are challenged to develop their intellectual, practical and social skills in a holistic way focusing on leadership, socially responsible behaviour and lifelong learning."
          />
          <IconMarquee icons={icons} />
        </div>

        <div
          className={`sidebar col-span-1  pt-8  ${
            isSticky ? "md:sticky md:top-4" : ""
          }`}
        >
          <div className="bg-white p-6 rounded-lg border-gray-200 flex flex-col h-full">
            <h2 className="text-xl font-bold mb-4 text-secondary-color">
              Overview
            </h2>
            <nav className="space-y-2 mb-6">
              {sidebarLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="block py-2 px-4 hover:pl-6 transition-all duration-200 hover:text-secondary-color text-gray-500 hover:bg-gray-100 rounded hover:font-medium text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <Button className="w-full mb-6 bg-primary-color hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
              Apply Online
            </Button>
            <div className=" flex-grow rounded-md overflow-hidden relative">
              <img src={img} alt="cta" className="w-full h-full object-cover absolute inset-0" />
              <div className="absolute inset-0 bg-black opacity-40"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
                <p className="text-xl font-semibold mb-3 text-center">Discover Our Partnerships</p>
                <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-black transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Stats />
      <Newsletter />
    </div>
  );
};

export default AccreditationAndTieups;
