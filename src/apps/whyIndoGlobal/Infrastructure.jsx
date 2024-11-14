/* eslint-disable react/prop-types */
import Heading from "../../components/Heading";
import ImgAndBreadcrumb from "../../components/ImgAndBreadcrumb";
import Container from "../../components/wrappers/Container";
import img from "../../assets/breadcrumb.png";
import Stats from "../../components/Stats";
import Newsletter from "../../components/Newsletter";
import AboutSidebar from "../../components/AboutSidebar";
import { CheckSquare } from "lucide-react";
import { infrastructureData} from "./data";
import { InfrastructureMarquee3D } from "./InfrastructureMarquee3D";
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

const Infrastructure = () => {
  const breadcrumbItems = [
    { href: "/", label: "Home" },
    { href: "/infrastructure", label: "Why Indo Global" },
    { label: "Infrastructure" },
  ];
  return (
    <div className="relative min-h-screen">
      <ImgAndBreadcrumb
        title="Why Indo Global"
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
            title="Campuse Infrastructure"
            titleClassName="text-secondary-color text-left lg:text-5xl"
            subtitleClassName="text-gray-500 text-justify m-0 lg:text-lg lg:font-normal lg:max-w-full"
            subtitle="Our college infrastructure is designed to provide students with an enriching academic and social environment. Featuring modern classrooms, high-tech labs, collaborative spaces, and recreational facilities, we support holistic development and inspire academic and personal growth."
            className=""
          />
          <div className="grid grid-cols-1 sm:gap-20">
            {infrastructureData.map((data, i) => (
              <InfrastructureItems data={data} key={i} index={i} />
            ))}
          </div>
        </div>
      </Container>
      <Stats />
      <Newsletter />
    </div>
  );
};

export default Infrastructure;

const StoryItem = ({ item, index,stories }) => {
  const { text } = item;
  return (
    <>
      <div className="mb-4 flex">
        <CheckSquare className=" text-blue-600 mr-2 text-sm" />
        <span className="opacity-75 text-sm ">{text}</span>
      </div>

      {index !== stories.length && <hr className="w-11/12 my-2" />}
    </>
  );
};

const InfrastructureItems = ({ data ,index}) => {
  const { title, description, stories ,logos} = data;
  return (
    <section className="light  bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white">
      <div className="container">
        <div className="grid grid-cols-12 items-center gap-4 mb-12">
          <div className={`col-span-12 lg:col-span-6 ${index%2===0 ? 'order-1' : 'order-2'}`}>
            {/* <h6 className="font-medium opacity-70 mb-2">Hello Visitor,</h6> */}
            <h1 className="text-3xl leading-none font-bold uppercase tracking-wider mb-2">
              {title}
            </h1>
            <hr className="bg-blue-600 h-1 rounded-[3px] w-12 opacity-100 my-6" />
            <p className="opacity-70 mb-2 text-justify">{description}</p>
            <ul className="flex flex-col ezy__about9-features mt-5">
              {stories.map((item, i) => (
                <li key={i}>
                  <StoryItem item={item} index={i + 1} key={i}  stories={stories}/>
                </li>
              ))}
            </ul>
          </div>
          <div className={`col-span-12 lg:col-span-6 ${index%2===0 ? 'order-2' : 'order-1' }`}>
            <InfrastructureMarquee3D index={index} logos={logos}/>
          </div>
        </div>
      </div>
    </section>
  );
};
