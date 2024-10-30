
import Container from "../../components/wrappers/Container";
import Heading from "../../components/Heading";
import ImgAndBreadcrumb from "../../components/ImgAndBreadcrumb";
// import Header from "../header/Header";
import img from "../../assets/breadcrumb.png";
  // import { Button } from "@/components/ui/button";
import Stats from "../../components/Stats";
import Newsletter from "../../components/Newsletter";
// import { Link } from "react-router-dom";
import { MapPin, Phone, Globe, Mail, Building } from 'lucide-react';
import AboutSidebar from "../../components/AboutSidebar";

const breadcrumbItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { label: "College Location" },
];

const sidebarLinks = [
  { href: "/about/accreditation", label: "Accreditation and Tie-ups" },
  { href: "/about/location", label: "College Location" },
  { href: "/about/vision-mission", label: "Vision and Mission" },
  { href: "/about/leadership", label: "Leadership" },
  { href: "/about/eminent-faculty", label: "Eminent Faculty" },
];



const locations = [
  {
    title: "Campus Address",
    details: [
      { icon: <Building className="w-5 h-5" />, text: "Indo Global Education City" },
      { icon: <MapPin className="w-5 h-5" />, text: "ABHIPUR, NEW CHANDIGARH - 140109" },
      { icon: <MapPin className="w-5 h-5" />, text: "District Mohali (Punjab)" },
      { icon: <Phone className="w-5 h-5" />, text: "0160-5036000" },
      { icon: <Globe className="w-5 h-5" />, text: "www.igef.net" },
      { icon: <Mail className="w-5 h-5" />, text: "contact@igef.net" },
    ],
    image: "https://img.freepik.com/free-photo/architecture-independence-palace-ho-chi-minh-city_181624-21243.jpg",
  },
  {
    title: "Correspondence Address",
    details: [
      { icon: <Building className="w-5 h-5" />, text: "Indo Global Education Foundation" },
      { icon: <MapPin className="w-5 h-5" />, text: "244, Sector- 16, Chandigarh -160015" },
      { icon: <Phone className="w-5 h-5" />, text: "+91-7307211222" },
      { icon: <Globe className="w-5 h-5" />, text: "www.igef.net" },
      { icon: <Mail className="w-5 h-5" />, text: "contact@igef.net" },
    ],
    image: "https://img.freepik.com/free-photo/office-buildings-trees_1127-396.jpg",
  },
  {
    title: "Nepal Address",
    details: [
      { icon: <Building className="w-5 h-5" />, text: "CRT Building, 3rd floor, Putalisadak" },
      { icon: <MapPin className="w-5 h-5" />, text: "Kathmandu, Nepal" },
      { icon: <Phone className="w-5 h-5" />, text: "0977-01-4232264" },
      { icon: <Globe className="w-5 h-5" />, text: "www.igef.net" },
      { icon: <Mail className="w-5 h-5" />, text: "indoglobal07@gmail.com" },
    ],
    image: "https://img.freepik.com/free-photo/beautiful-streets-switzerland_8353-9666.jpg",
  },
];

const CollegeLocation = () => {
  
  return (
    <div className="relative min-h-screen">
      <ImgAndBreadcrumb
        title="About Us"
        imageSrc={img}
        imageAlt="Description of the image"
        breadcrumbItems={breadcrumbItems}
      />
      <Container className="container grid grid-cols-1 md:grid-cols-4 gap-14 ">
        <div className="col-span-1 pt-12 md:col-span-3">
          <Heading
            title="College Location"
            subtitle="Explore our modern campus where innovation thrives. Our cutting-edge facilities foster creativity and collaboration, preparing students for future success in a dynamic learning environment."
            titleClassName="text-secondary-color text-left lg:text-5xl"
            subtitleClassName="text-gray-500 text-justify m-0 lg:text-lg lg:font-normal lg:max-w-full"
            className="lg:pb-14"
          />
          <div className="pr-">
            {locations.map((location, i) => (
              <div
                className={`grid grid-cols-12 justify-center  ${i == 0 ? "items-start" : "items-center"}`}
                key={i}
              >
                <LocationItem location={location} index={i + 1} />
              </div>
            ))}
          </div>
        </div>

        <div className="md:sticky md:top-20 self-start">
        <AboutSidebar sidebarLinks={sidebarLinks} />  
        </div>
        
      </Container>
      <Stats />
      <Newsletter />
    </div>
  );
};

export default CollegeLocation;





const LocationItem = ({ location, index }) => {
  const { title, details,image } = location;
  return (
    <>
      <div
        className={`col-span-12 md:col-span-5 ${
          index % 2 === 0
            ? "order-1 md:order-2 md:col-start-6"
            : "order-2 md:order-1 md:col-start-1"
        }`}
      >
        <div
          className={`flex flex-col justify-center ${
            index % 2 === 0 ? "lg:pl-14" : "lg:pr-14"
          }`}
        >
          <h4 className="text-2xl font-bold mb-6 text-secondary-color">{title}</h4>
          <ul className="space-y-2">
        {details.map((detail, index) => (
          <li key={index} className="flex items-center">
            <span className="mr-2 text-primary-color">{detail.icon}</span>
            <span className="text-base text-gray-600 font-">{detail.text}</span>
          </li>
        ))}
      </ul>
        </div>
      </div>
      {/* IMG */}
      <div
        className={`${
          index % 2 === 0
            ? "order-1 md:col-start-1"
            : "order-1 md:order-2 md:col-start-6"
        } col-span-12 md:col-span-5  mb-6 md:mb-0 mt-6 md:mt-0`}
      >
        <div className="overflow-hidden shadow-lg hover:drop-shadow-2x rounded-xl h-80">
          <img
            src={image}
            alt='location'
            className="w-full h-full object-cover hover:scale-125 transition-all duration-300"
          />
        </div>
      </div>
    </>
  );
};
