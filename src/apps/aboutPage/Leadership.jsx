import Container from "../../components/wrappers/Container";
import Heading from "../../components/Heading";
import ImgAndBreadcrumb from "../../components/ImgAndBreadcrumb";
// import Header from "../header/Header";
import img from "../../assets/breadcrumb.png";
// import { Button } from "@/components/ui/button";
import Stats from "../../components/Stats";
import Newsletter from "../../components/Newsletter";
// import { Link } from "react-router-dom";
import AboutSidebar from "../../components/AboutSidebar";
import chairmanImage from "../../assets/about/chairman.jpg";
const breadcrumbItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { label: "Leadership" },
];

const sidebarLinks = [
  { href: "/about/accreditation", label: "Accreditation and Tie-ups" },
  { href: "/about/location", label: "College Location" },
  { href: "/about/vision-mission", label: "Vision and Mission" },
  { href: "/about/leadership", label: "Leadership" },
  { href: "/about/faculty", label: "Eminent Faculty" },
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
            title="Leadership"
            subtitle="Meet our visionary leaders who guide our institution with expertise and dedication. Our leadership team brings together decades of experience in education and administration to ensure excellence in every aspect of our academic journey."
            titleClassName="text-secondary-color text-left lg:text-5xl"
            subtitleClassName="text-gray-500 text-justify m-0 lg:text-lg lg:font-normal lg:max-w-full"
            className="lg:pb-14"
          />

          <section className="ezy__about2 light pt-10 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white">
            <div className="container px-4">
              <div className="grid lg:grid-cols-2 gap-6">
                <div>
                  <h2 className="lg:text-end text-4xl md:text-6xl leading-tight md:leading-normal tracking-wide font-light lg:pl-6 mb-0">
                    Late Sukhdev Kumar Singla
                    <span className="block text-4xl mt-2 text-primary-color">Chairman</span>
                  </h2>
                </div>
                <div className="lg:px-4 my-6 lg:my-0">
                  <div
                    className="min-h-[450px] md:h-full bg-center bg-cover rounded-lg"
                    style={{
                      backgroundImage: `url(${chairmanImage})`,
                    }}
                  ></div>
                </div>
                <div className="col-span-2">
                  <p className="text-2xl leading-relaxed mb-4 text-primary-color font-semibold">
                    Dear Education Aspirants,
                  </p>
                  <p className="text-lg leading-relaxed mb-4 text-justify text-gray-700">
                    Welcome to Indo Global Colleges. Our degrees in Engineering, Architecture, MBA & Paramedical are a key step towards senior positions in industry, commerce & public sector.
                  </p>
                  <p className="text-lg leading-relaxed mb-4 text-justify text-gray-700">
                    Our programmes will provide you with challenge, stimulation, variety and flexibility. The highly trained staff and your fellow students will provide an unrivalled contribution to your graduate and post-graduate education. Our fully equipped laboratories and workshops with latest machines prepare you to meet the challenges in the fast developing technological world.
                  </p>
                  <p className="text-lg leading-relaxed mb-4 text-justify text-gray-700">
                    Our students have made us proud with university positions and appreciable pass percentage in all courses. I hope the students joining us will work with same fervour and enthusiasm as their seniors. Your stay at this Institute of excellence will not only broaden your knowledge but also open many doors for you.
                  </p>
                  <p className="text-lg leading-relaxed mb-4 text-justify text-gray-700">
                    I pray that your stay at this institute of excellence will not only broaden your knowledge but also open many doors for you.
                  </p>
                </div>
              </div>
            </div>
          </section>
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
  const { title, details, image } = location;
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
          <h4 className="text-2xl font-bold mb-6 text-secondary-color">
            {title}
          </h4>
          <ul className="space-y-2">
            {details.map((detail, index) => (
              <li key={index} className="flex items-center">
                <span className="mr-2 text-primary-color">{detail.icon}</span>
                <span className="text-base text-gray-600 font-">
                  {detail.text}
                </span>
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
            alt="location"
            className="w-full h-full object-cover hover:scale-125 transition-all duration-300"
          />
        </div>
      </div>
    </>
  );
};
