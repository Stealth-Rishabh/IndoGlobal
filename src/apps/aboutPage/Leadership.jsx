import Container from "../../components/wrappers/Container";
import Heading from "../../components/Heading";
import ImgAndBreadcrumb from "../../components/ImgAndBreadcrumb";
// import Header from "../header/Header";
import img from "../../assets/aboutUsBanner.webp";
// import { Button } from "@/components/ui/button";
import Stats from "../../components/Stats";
import Newsletter from "../../components/Newsletter";
// import { Link } from "react-router-dom";
import AboutSidebar from "../../components/AboutSidebar";
import chairmanImage from "../../assets/about/chairman.jpg";
const breadcrumbItems = [
  { href: "/", label: "Home" },
  { href: "/about/leadership", label: "About" },
  { label: "Leadership" },
];

const sidebarLinks = [
  { href: "/about/accreditation", label: "Accreditation and Tie-ups" },
  { href: "/about/location", label: "Campus Location" },
  { href: "/about/vision-mission", label: "Vision and Mission" },
  { href: "/about/leadership", label: "Leadership" },
  { href: "/about/eminent-faculty", label: "Eminent Faculty" },
  { href: "/about/notable-alumni", label: "Notable Alumni" },
];


const Leadership = ({ h1 }) => {
  return (
    <div className="relative min-h-screen">
      <ImgAndBreadcrumb
        title="Leadership"
        imageSrc={img}
        imageAlt="Description of the image"
        breadcrumbItems={breadcrumbItems}
      />
      <Container className="container grid grid-cols-1 md:grid-cols-4 gap-14 ">
        <div className="hidden md:block  self-start md:sticky md:top-5">
          <AboutSidebar sidebarLinks={sidebarLinks} />
        </div>
        <div className="col-span-1 pt-12 md:col-span-3">
          <Heading
            title={h1}
            subtitle="Meet our visionary leaders who guide our institution with expertise and dedication. Our leadership team brings together decades of experience in education and administration to ensure excellence in every aspect of our academic journey."
            titleClassName="text-secondary-color text-left lg:text-5xl"
            subtitleClassName="text-gray-500 text-justify m-0 lg:text-lg lg:font-normal lg:max-w-full"
            className="lg:pb-14"
          />

          <section className="ezy__about2 light pt-10 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white">
            <div className="container ">
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                <div>
                  <h2 className="mb-0 text-4xl font-light leading-tight tracking-wide lg:text-end md:text-6xl md:leading-normal lg:pl-6">
                    Late Sukhdev Kumar Singla
                    <span className="block mt-2 text-4xl text-primary-color">
                      Chairman
                    </span>
                  </h2>
                </div>

                <div className="my-6 lg:px-4 lg:my-0">
                  <div className="sm:min-h-[450px md:h-full bg-center bg-cover rounded-lg">
                    <img
                      src={chairmanImage}
                      alt="Chairman"
                      className="object-cover w-full h-full rounded-lg r"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <p className="mb-4 text-2xl font-semibold leading-relaxed text-primary-color">
                    Dear Education Aspirants,
                  </p>
                  <p className="mb-4 text-lg leading-relaxed text-justify text-gray-700">
                    Welcome to Indo Global Colleges. Our degrees in Engineering,
                    Architecture, MBA & Paramedical are a key step towards
                    senior positions in industry, commerce & public sector.
                  </p>
                  <p className="mb-4 text-lg leading-relaxed text-justify text-gray-700">
                    Our programmes will provide you with challenge, stimulation,
                    variety and flexibility. The highly trained staff and your
                    fellow students will provide an unrivalled contribution to
                    your graduate and post-graduate education. Our fully
                    equipped laboratories and workshops with latest machines
                    prepare you to meet the challenges in the fast developing
                    technological world.
                  </p>
                  <p className="mb-4 text-lg leading-relaxed text-justify text-gray-700">
                    Our students have made us proud with university positions
                    and appreciable pass percentage in all courses. I hope the
                    students joining us will work with same fervour and
                    enthusiasm as their seniors. Your stay at this Institute of
                    excellence will not only broaden your knowledge but also
                    open many doors for you.
                  </p>
                  <p className="mb-4 text-lg leading-relaxed text-justify text-gray-700">
                    I pray that your stay at this institute of excellence will
                    not only broaden your knowledge but also open many doors for
                    you.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Container>
      <Stats />
      <Newsletter />
    </div>
  );
};

export default Leadership;


