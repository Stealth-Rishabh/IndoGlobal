import Heading from "../../components/Heading";
import ImgAndBreadcrumb from "../../components/ImgAndBreadcrumb";
import Container from "../../components/wrappers/Container";
// import Header from "../header/Header";
import img from "../../assets/BannerPlacements.webp";
// import { useEffect, useState } from "react";
// import { Button } from "@/components/ui/button";
import Stats from "../../components/Stats";
import Newsletter from "../../components/Newsletter";
//imgs

// import { Link } from "react-router-dom";
import AboutSidebar from "../../components/AboutSidebar";
import { IndustryMarquee } from "./IndustryMarquee";

const sidebarLinks = [
  { href: "/placements/campus-recruitments", label: "Campus Recruitments" },
  { href: "/placements/industry-speaks", label: "Industry Speaks" },
  { href: "/placements/industry-tie-ups", label: "Industry Tie-ups" },
  { href: "/placements/placement-activities", label: "Placement Activities" },
  { href: "/placements/our-recruiters", label: "Our Recruiters" },
];
const IndustrySpeaks = ({ h1 }) => {
  const breadcrumbItems = [
    { href: "/", label: "Home" },
    { href: "/placements/industry-speaks", label: "Placements" },
    { label: "Industry Speaks" },
  ];
  return (
    <div className="relative min-h-screen">
      <ImgAndBreadcrumb
        title="Industry Speaks"
        imageSrc={img}
        imageAlt="Description of the image"
        breadcrumbItems={breadcrumbItems}
      />
      <Container className=" grid grid-cols-1 md:grid-cols-4 gap-14">
        <div className="md:sticky md:top-5 self-start">
          <AboutSidebar sidebarLinks={sidebarLinks} />
        </div>
        <div className="col-span-1 md:col-span-3 sm:pt-12">
          <Heading
            title={h1}
            titleClassName="text-secondary-color text-left lg:text-5xl"
            subtitleClassName="text-gray-500 text-justify m-0 lg:text-lg lg:font-normal lg:max-w-full"
            subtitle="Gain valuable insights from industry experts on developing intellectual, practical, and social skills, with a focus on leadership, socially responsible behavior, and lifelong learning."
          />
          <Testimonials />
          <IndustrySpeakers  />
        </div>
      </Container>
      <Stats />
      <Newsletter />
    </div>
  );
};

export default IndustrySpeaks;

const Testimonials = () => {
  const testimonials = [
    {
      avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
      name: "Manoj Sharma",
      title: "HR & Sales, Bhagwati Steel, Chandigarh",
      quote:
        "A well-organized job fair with great management. The quality of students from this college was impressive. Looking forward to similar events in the future.",
    },

    {
      avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
      name: "Mr. S. Swapnil",
      title: "Wipro Technologies, Pune",
      quote:
        "All teams here handle the recruitment process seamlessly. Special thanks to Ms. Abhilasha for her proactiveness and support. Appreciate it!",
    },
    {
      avatar: "https://randomuser.me/api/portraits/men/46.jpg",
      name: "CDR. A.S. Sethi",
      title: "Indian Navy",
      quote:
        "Visiting the college was a fantastic experience. The placement team was diligent, and the students were highly motivated. Thank you.",
    },
    {
      avatar: "https://randomuser.me/api/portraits/men/46.jpg",
      name: "Mr. Karnal/Mr. Manoj (BDM)",
      title: "Intellisense Tech. , Chandigarh",
      quote:
        "It was a pleasure visiting your campus for recruitment. We hope for the same wonderful coordination in future endeavors.",
    },
    {
      avatar: "https://randomuser.me/api/portraits/men/86.jpg",
      name: "Col. (Retd) Surinder Singh",
      title: "IEC Gensets Ltd",
      quote:
        "Great interaction with students and a very organized setup. The team showed excellent attention to detail. Well done.",
    },
    {
      avatar: "https://randomuser.me/api/portraits/men/86.jpg",
      name: "Col. (Retd) Surinder Singh",
      title: "IEC Gensets Ltd",
      quote:
        "Great interaction with students and a very organized setup. The team showed excellent attention to detail. Well done.",
    },
  ];

  return (
    <section className="relative sm:py-4 rounded-lg overflow-hidden">
      <div className="relative z-10 max-w-screen-xl sm:mx-auto px-4 md:px-8">
        {/* <div className="max-w-xl sm:text-center md:mx-auto">
                  <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                      Hear from our customers
                  </h3>
                  <p className="mt-3 text-gray-600">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et est hendrerit, porta nunc vitae, gravida justo. Nunc fermentum magna lorem, euismod volutpat arcu volutpat et.
                  </p>
              </div> */}
        <div className="mt-12">
          <ul className="grid items-center  justify-center gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((item, idx) => (
              <li
                key={idx}
                className="bg-white h-auto flex flex-col justify-between  rounded-xl border shadow-md"
              >
                <div className="p-4">
                  <svg
                    className="w-9 h-9 text-gray-300"
                    viewBox="0 0 35 35"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.47895 14.5833C9.15374 14.5833 8.84166 14.6329 8.53103 14.6781C8.63166 14.3398 8.7352 13.9956 8.90145 13.6865C9.0677 13.2373 9.32728 12.8479 9.58541 12.4556C9.80124 12.0312 10.1819 11.7439 10.4619 11.3808C10.755 11.0279 11.1546 10.7931 11.471 10.5C11.7817 10.1937 12.1885 10.0406 12.5123 9.82478C12.8506 9.63082 13.1452 9.41645 13.4602 9.31437L14.2462 8.99062L14.9375 8.70332L14.2302 5.87708L13.3596 6.08707C13.081 6.15707 12.7412 6.23874 12.3548 6.33645C11.9596 6.40937 11.5381 6.60916 11.0685 6.79145C10.6048 6.99853 10.0681 7.13853 9.56937 7.47103C9.0677 7.78895 8.48874 8.05437 7.97833 8.4802C7.48395 8.91916 6.88749 9.29978 6.44708 9.85833C5.96583 10.3804 5.49041 10.9287 5.12145 11.5529C4.69416 12.1479 4.40395 12.8012 4.0977 13.4473C3.82062 14.0933 3.59749 14.754 3.4152 15.3956C3.06958 16.6819 2.91499 17.904 2.8552 18.9496C2.80562 19.9967 2.83478 20.8673 2.89603 21.4973C2.91791 21.7948 2.95874 22.0835 2.98791 22.2833L3.02437 22.5283L3.06228 22.5196C3.32167 23.7312 3.91877 24.8446 4.78452 25.7311C5.65028 26.6175 6.7493 27.2408 7.95447 27.5287C9.15963 27.8166 10.4217 27.7575 11.5946 27.3581C12.7676 26.9587 13.8035 26.2354 14.5825 25.2719C15.3616 24.3083 15.8519 23.1439 15.9969 21.9133C16.1418 20.6828 15.9353 19.4363 15.4014 18.3181C14.8675 17.2 14.028 16.2558 12.9799 15.5949C11.9318 14.934 10.718 14.5832 9.47895 14.5833ZM25.5206 14.5833C25.1954 14.5833 24.8833 14.6329 24.5727 14.6781C24.6733 14.3398 24.7769 13.9956 24.9431 13.6865C25.1094 13.2373 25.369 12.8479 25.6271 12.4556C25.8429 12.0312 26.2235 11.7439 26.5035 11.3808C26.7967 11.0279 27.1962 10.7931 27.5127 10.5C27.8233 10.1937 28.2302 10.0406 28.554 9.82478C28.8923 9.63082 29.1869 9.41645 29.5019 9.31437L30.2879 8.99062L30.9792 8.70332L30.2719 5.87708L29.4012 6.08707C29.1227 6.15707 28.7829 6.23874 28.3965 6.33645C28.0012 6.40937 27.5798 6.60916 27.1102 6.79145C26.6479 6.99999 26.1098 7.13853 25.611 7.47249C25.1094 7.79041 24.5304 8.05582 24.02 8.48166C23.5256 8.92062 22.9292 9.30124 22.4887 9.85833C22.0075 10.3804 21.5321 10.9287 21.1631 11.5529C20.7358 12.1479 20.4456 12.8012 20.1394 13.4473C19.8623 14.0933 19.6392 14.754 19.4569 15.3956C19.1112 16.6819 18.9567 17.904 18.8969 18.9496C18.8473 19.9967 18.8765 20.8673 18.9377 21.4973C18.9596 21.7948 19.0004 22.0835 19.0296 22.2833L19.066 22.5283L19.104 22.5196C19.3633 23.7312 19.9604 24.8446 20.8262 25.7311C21.6919 26.6175 22.791 27.2408 23.9961 27.5287C25.2013 27.8166 26.4634 27.7575 27.6363 27.3581C28.8093 26.9587 29.8452 26.2354 30.6242 25.2719C31.4033 24.3083 31.8936 23.1439 32.0385 21.9133C32.1834 20.6828 31.977 19.4363 31.4431 18.3181C30.9092 17.2 30.0697 16.2558 29.0216 15.5949C27.9735 14.934 26.7597 14.5832 25.5206 14.5833Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <figure className="flex flex-col flex-grow justify-between">
                  <blockquote>
                    <p className="text-gray-800 text-base font-semibold px-4 py-3">
                      {item.quote}
                    </p>
                  </blockquote>
                  <div className="grid  items-center gap-2 p-4 mt- bg-indigo-50">
                    {/* <img
                      src={item.avatar}
                      className="w-16 h-16 rounded-full border-2 border-indigo-500"
                    /> */}
                    <div>
                      <span className="block text-gray-800 font-semibold">
                        {item.name}
                      </span>
                      <span className="block text-indigo-600 text-sm mt-0.5">
                        {item.title}
                      </span>
                    </div>
                  </div>
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div
        className="absolute top-0 w-full h-[350px]"
        style={{
          background:
            "linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.17) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)",
        }}
      ></div>
    </section>
  );
};

const IndustrySpeakers = ({ h1 }) => {
  return (
    <section className="ezy__about11 pt-20 sm:px-8 light  bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white">
      <div className="container ">
        <div className="grid grid-cols-12 gap-5 justify-start items-start">
          <div className="col-span-12 lg:col-span-6">
            <div className="text-left md:pr-20">
              <p className="opacity-75 uppercase ">Indo Global Colleges</p>
              <h2 className="text-4xl md:text-6xl leading-tight font-light uppercase tracking-wide">
                EMINENT <span className="font-bold">GUEST SPEAKERS</span>
                <span className="inline-flex w-3 h-3 rounded-full bg-secondary-color ml-2"></span>
              </h2>
              <p className="text-xl leading-normal opacity-75 mt-4 mb-6">
                Be part of an institution renowned for extensive industry
                interaction wherein IGC students have interacted with the
                leading Global Gurus.
              </p>
              <p className="opacity-50 text-sm ">
                Industry leaders, top professionals, entrepreneurs, policy
                makers and global gurus also share their wisdom, insight and
                experiences thereby facilitating practical learning for you.
              </p>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6">
            <IndustryMarquee />
          </div>
        </div>
      </div>
    </section>
  );
};
