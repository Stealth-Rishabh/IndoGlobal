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
import Promila from "../../assets/about/faculty/Dr.Promila.webp";
import SsSekhon from "../../assets/about/faculty/Sekhon.webp";
import Sonia from "../../assets/about/faculty/Sonia.webp";
import Hardeep from "../../assets/about/faculty/Dr.Hardeep.webp";
// import SpAhuja from "../../assets/about/faculty/Dr.SpAhuja.png";

const breadcrumbItems = [
  { href: "/", label: "Home" },
  { href: "/about/eminent-faculty", label: "About" },
  { label: "Eminent Faculty" },
];

const sidebarLinks = [
  { href: "/about/accreditation", label: "Accreditation and Tie-ups" },
  { href: "/about/location", label: "Campus Location" },
  { href: "/about/vision-mission", label: "Vision and Mission" },
  { href: "/about/leadership", label: "Leadership" },
  { href: "/about/eminent-faculty", label: "Eminent Faculty" },
  { href: "/about/notable-alumni", label: "Notable Alumni" },
];

const EminentFaculty = ({ h1 }) => {
  return (
    <div className="relative min-h-screen">
      <ImgAndBreadcrumb
        title="Eminent Faculty"
        imageSrc={img}
        imageAlt="Description of the image"
        breadcrumbItems={breadcrumbItems}
      />
      <Container className="container relative grid grid-cols-1 md:grid-cols-4 gap-14">
        <div className="self-start hidden md:block md:sticky md:top-5">
          <AboutSidebar sidebarLinks={sidebarLinks} />
        </div>
        <div className="col-span-1 pt-12 md:col-span-3">
          <Heading
            title={h1}
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
      avatar: Promila,
      name: "Dr. Promila Kaushal",
      title: "Director",
      desc: "Indo Global College of Engineering",
    },

    {
      avatar: SsSekhon,
      name: "Ar. S. S. Sekhon",
      title: "Director",
      desc: "Indo Global College of Architecture",
    },
    {
      avatar: Sonia,
      name: "Ar. Sonia Mittal",
      title: "Principal",
      desc: "Indo Global College of Architecture",
    },

    // {
    //   avatar:
    //     "https://th.bing.com/th/id/OIP.pA6t_4n5Y5TvS00-jLkhPwHaHa?w=500&h=500&rs=1&pid=ImgDetMain",
    //   name: "Dr. Karamjeet",
    //   title: "Principal",
    //   desc: "Indo Global College of Education",
    // },
    {
      avatar: Hardeep,
      name: "Dr. Hardeep Singh Saini",
      title: "Principal",
      desc: "Indo Global College of Engineering",
    },

    {
      avatar:
        "https://th.bing.com/th/id/OIP.pA6t_4n5Y5TvS00-jLkhPwHaHa?w=500&h=500&rs=1&pid=ImgDetMain",
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
                <div className="relative w-full overflow-hidden border-2 border-gray-100 rounded-md shadow-md h-96 ">
                  <img
                    src={item.avatar}
                    className="object-cover object-center w-full h-full transition-all duration-300 shadow-md hover:scale-125 "
                    alt=""
                  />
                </div>
                <div className="mt-4">
                  <h4 className="text-lg font-semibold text-gray-700">
                    {item.name}
                  </h4>
                  <p className="text-indigo-600">{item.title}</p>
                  <p className="mt-2 text-gray-600">{item.desc}</p>
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
        <div className="grid items-start justify-start grid-cols-12 gap-5">
          <div className="col-span-12 lg:col-span-6">
            <div className="text-left md:pr-20">
              <p className="uppercase opacity-75 ">Indo Global Colleges</p>
              <h2 className="text-4xl font-light leading-tight tracking-wide uppercase md:text-6xl">
                EMINENT <span className="font-bold">FACULTY</span>
                <span className="inline-flex w-3 h-3 ml-2 rounded-full bg-secondary-color"></span>
              </h2>
              <p className="mt-4 mb-6 text-xl leading-normal opacity-75">
                The backbone of any academic institution is its faculty. Indo
                Global is proud to have an outstanding and dedicated
                constellation of experienced faculty and academic staff.
              </p>
              <p className="text-sm opacity-50 ">
                Their diverse backgrounds, wealth of knowledge and industry
                experience translate into giving the students an impeccable edge
                in terms of learning and employment.
              </p>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6">
            <div className="">
              <p className="mb-4 opacity-75">
                <span className="text-[40px] text-secondary-color font-bold">
                  T
                </span>
                hey not only induce interest in the subject among the students
                through classroom discussions, GD&apos;s, presentations, debates
                and such interactive methods but also enhance student&apos;s
                communication, presentation skills and help building confidence,
                converting them into lifelong learners.
              </p>
              <p className="mb-4 opacity-75">
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
