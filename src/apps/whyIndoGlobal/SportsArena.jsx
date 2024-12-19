/* eslint-disable react/prop-types */
import Heading from "../../components/Heading";
import ImgAndBreadcrumb from "../../components/ImgAndBreadcrumb";
import Container from "../../components/wrappers/Container";
import img from "../../assets/aboutUsBanner.webp";
import Stats from "../../components/Stats";
import Newsletter from "../../components/Newsletter";
import AboutSidebar from "../../components/AboutSidebar";
import { sportsData } from "./data";

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

const SportsArena = () => {
  const breadcrumbItems = [
    { href: "/", label: "Home" },
    { href: "/why-indo-global/sports-arena", label: "Why Indo Global" },
    { label: "Sports Arena" },
  ];
  return (
    <div className="relative min-h-screen">
      <ImgAndBreadcrumb
        title="Sports Arena"
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
            title="Sports-Centric Curriculum"
            titleClassName="text-secondary-color text-left lg:text-5xl"
            subtitleClassName="text-gray-500 text-justify m-0 lg:text-lg lg:font-normal lg:max-w-full"
            subtitle="Building a comprehensive learning environment that fosters athletic skill, teamwork, discipline, and resilience, preparing students to excel in sports and lead with integrity on and off the field."
            className=""
          />
          <div className="space-y-14">
            {sportsData.map((data, index) => {
              return <Gallery imageItems={data} key={index} />;
            })}
          </div>
        </div>
      </Container>
      <Stats />
      <Newsletter />
    </div>
  );
};

export default SportsArena;

const Gallery = ({ imageItems }) => {
  const { title, description, items } = imageItems;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 xl:gap-8">
      {items.map((item, index) => (
        <div
          key={index}
          href="#"
          className={`group relative flex ${item.height} items-end border border-gray-300 overflow-hidden rounded-lg bg-gray-100 shadow hover:shadow-lg ${item.mdHeight}`}
        >
          <img
            src={item.src}
            loading="lazy"
            alt={item.alt}
            className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
          />

          <div className="w-full relative pl-4 py-3 inline-block text-sm text-white md:pl-5 md:text-lg translate-y-14 group-hover:translate-y-0 group-hover:transition-all duration-300">
            {item.label}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent bg-opacity-50 -z-10 text-white text-opacity-100 bg-black blur-sm"></div>
          </div>
        </div>
      ))}
      <div className="col-span-1 sm:col-span-2 md:col-span-3 mt- pl-1">
        <h1 className="text-3xl md:text-4xl leading-none font-bold mb-3 text-secondary-color/90">
          {title}
        </h1>
        <p className="text-base leading-6 mb-6 text-gray-500 text-justify ">
          {description}
        </p>
      </div>
    </div>
  );
};
