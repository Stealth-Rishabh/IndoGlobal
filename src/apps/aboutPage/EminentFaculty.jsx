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

const breadcrumbItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { label: "Eminent Faculty" },
];
const sidebarLinks = [
  { href: "/about/accreditation", label: "Accreditation and Tie-ups" },
  { href: "/about/location", label: "Campus Location" },
  { href: "/about/vision-mission", label: "Vision and Mission" },
  { href: "/about/leadership", label: "Leadership" },
  { href: "/about/eminent-faculty", label: "Eminent Faculty" },
];

const EminentFaculty = () => {
  return (
    <div className="relative min-h-screen">
      <ImgAndBreadcrumb
        title="About Us"
        imageSrc={img}
        imageAlt="Description of the image"
        breadcrumbItems={breadcrumbItems}
      />
      <Container className="container grid grid-cols-1 md:grid-cols-4 gap-14 relative">
        <div className="md:sticky md:top-5 self-start">
          <AboutSidebar sidebarLinks={sidebarLinks} />
        </div>
        <div className="col-span-1 pt-12 md:col-span-3">
          <Heading
            title="Our Dedicated Faculty Members"
            subtitle="With over 22 PhDs, 100+ M.Techs, and 40+ MBAs, our distinguished faculty brings together exceptional academic credentials and rich industry experience to provide world-class education."
            titleClassName="text-secondary-color text-left lg:text-5xl"
            subtitleClassName="text-gray-500 text-justify m-0 lg:text-lg lg:font-normal lg:max-w-full font-normal"
            className=""
          />
          <div className="grid grid-cols-1 gap-20">
            <FacultyMember />
            <FacultyAbout />
          </div>
        </div>
      </Container>
      <Stats />
      <Newsletter />
    </div>
  );
};

export default EminentFaculty;

const FacultyMember = () => {
  const team = [
    {
      avatar:
        "https://images.unsplash.com/photo-1579017331263-ef82f0bbc748?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80",
      name: "Dr. Promila Kaushal",
      title: "Principal",
      desc: "Indo Global College of Engineering",
    },

    {
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      name: "Ar. S. S. Sekhon",
      title: "Director",
      desc: "Indo Global College of Architecture",
    },
    {
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      name: "Ar. Ruchi Lakhani",
      title: "Principal",
      desc: "Indo Global College of Architecture",
    },
    {
      avatar:
        "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      name: "Dr. Karamjeet",
      title: "Principal",
      desc: "Indo Global College of Education",
    },
    {
      avatar:
        "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
      name: "Dr. Hardeep Singh Saini",
      title: "Dean (Academics)",
      desc: "Indo Global College of Engineering",
    },
    {
      avatar:
        "https://images.unsplash.com/photo-1623605931891-d5b95ee98459?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=640&q=80",
      name: "Dr. S.P. Ahuja",
      title: "Principal",
      desc: "Indo Global College of Management and Technology",
    },
  ];

  return (
    <section className="">
      <div className="">
        <div className="">
          <ul className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            {team.map((item, idx) => (
              <li key={idx}>
                <div className="w-full h-60 sm:h-52 md:h-56 overflow-hidden rounded-md relative">
                  <img
                    src={item.avatar}
                    className="w-full h-full object-cover object-center shadow-md  hover:scale-125 transition-all duration-300 "
                    alt=""
                  />
                </div>
                <div className="mt-4">
                  <h4 className="text-lg text-gray-700 font-semibold">
                    {item.name}
                  </h4>
                  <p className="text-indigo-600">{item.title}</p>
                  <p className="text-gray-600 mt-2">{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

const FacultyAbout = () => {
  return (
    <section className="ezy__about11 light  bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white">
      <div className="container ">
        <div className="grid grid-cols-12 gap-5 justify-start items-start">
          <div className="col-span-12 lg:col-span-6">
            <div className="text-left md:pr-20">
              <p className="opacity-75 uppercase ">Indo Global Colleges</p>
              <h1 className="text-4xl md:text-6xl leading-tight font-light uppercase tracking-wide">
                EMINENT <span className="font-bold">FACULTY</span>
                <span className="inline-flex w-3 h-3 rounded-full bg-secondary-color ml-2"></span>
              </h1>
              <p className="text-xl leading-normal opacity-75 mt-4 mb-6">
                The backbone of any academic institution is its faculty. Indo
                Global is proud to have an outstanding and dedicated
                constellation of experienced faculty and academic staff.
              </p>
              <p className="opacity-50 text-sm ">
                Their diverse backgrounds, wealth of knowledge and industry
                experience translate into giving the students an impeccable edge
                in terms of learning and employment.
              </p>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6">
            <div className="">
              <p className="opacity-75 mb-4">
                <span className="text-[40px] text-secondary-color font-bold">
                  T
                </span>
                hey not only induce interest in the subject among the students
                through classroom discussions, GD&apos;s, presentations, debates
                and such interactive methods but also enhance student&apos;s
                communication, presentation skills and help building confidence,
                converting them into lifelong learners.
              </p>
              <p className="opacity-75 mb-4">
                Indo Global Colleges boast of having some of the best, the most
                talented and most dedicated faculty in the region. They come
                from some of the finest Institutions and Industries.
              </p>
              <p className="opacity-75">
                Many of them have rich industry experience, over and above their
                academic qualifications. They are thus, not only academically
                and professionally amongst the best, but also possess high
                standards of moral and ethical values. They are ideal role
                models for the youth and act as mentors to the students.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
