/* eslint-disable react/prop-types */
import Heading from "../../components/Heading";
import ImgAndBreadcrumb from "../../components/ImgAndBreadcrumb";
import Container from "../../components/wrappers/Container";
import img from "../../assets/aboutUsBanner.webp";
import Stats from "../../components/Stats";
import Newsletter from "../../components/Newsletter";
import AboutSidebar from "../../components/AboutSidebar";
import { cn } from "@/lib/utils";
import studentSecurity1 from "../../assets/whyIndoGlobal/StudentsSecurity/StudentsSecurity (1).jpg";
import studentSecurity2 from "../../assets/whyIndoGlobal/StudentsSecurity/StudentsSecurity (2).webp";
import studentSecurity3 from "../../assets/whyIndoGlobal/StudentsSecurity/StudentsSecurity (3).webp";
import studentSecurity4 from "../../assets/whyIndoGlobal/StudentsSecurity/StudentsSecurity (4).webp";

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

const StudentSecurity = () => {
  const breadcrumbItems = [
    { href: "/", label: "Home" },
    { href: "/why-indo-global/students-security ", label: "Why Indo Global" },
    { label: "Security" },
  ];
  return (
    <div className="relative min-h-screen">
      <ImgAndBreadcrumb
        title="Students Security"
        imageSrc={img}
        imageAlt="Description of the image"
        breadcrumbItems={breadcrumbItems}
      />
      <Container className="container grid grid-cols-1 md:grid-cols-4 gap-14">
        <div className="hidden md:block  self-start md:sticky md:top-5">
          <AboutSidebar sidebarLinks={sidebarLinks} />
        </div>
        <div className="col-span-1 pt-12 md:col-span-3">
          <Heading
            title="Campus Security and Safety"
            titleClassName="text-secondary-color text-left lg:text-5xl"
            subtitleClassName="text-gray-500 text-justify m-0 lg:text-lg lg:font-normal lg:max-w-full"
            subtitle="Our campus is equipped with comprehensive security measures to ensure a safe and secure environment for all students, faculty, and staff. With 24/7 surveillance, trained security personnel, and emergency response systems, we prioritize safety to create a welcoming and worry-free campus experience."
            className=""
          />

          <div>
            <StudentSecurityItem />
          </div>
        </div>
      </Container>
      <Stats />
      <Newsletter />
    </div>
  );
};

export default StudentSecurity;

const features = [
  {
    img: studentSecurity1,
    keyword: "Security",
    title: "Secure Campus",
    description:
      "We are dedicated to protecting your safety and providing a welcoming, secure environment. Our security team works around the clock to ensure the well-being of students, faculty, staff, and visitors. Our trained security personnel, often ex-servicemen, uphold both daily security measures and broader safety initiatives.",
  },
  {
    img: studentSecurity4,
    keyword: "Convenience",
    title: "On-Campus Amenities",
    description:
      "Experience convenience at every corner. Our campus hosts essential amenities including food courts, stationary shops, and medical facilities, allowing students to access what they need without leaving the grounds. All amenities are designed with your comfort and needs in mind.",
  },
  {
    img: studentSecurity3,
    keyword: "Support",
    title: "Student Counseling",
    description:
      "Your well-being matters to us. Our student counseling services provide support in academic, personal, and career-related matters. Experienced counselors offer guidance, helping students navigate challenges and make the most of their college experience.",
  },
  {
    img: "https://img.freepik.com/free-photo/medium-shot-doctor-checking-blood-pressure-female-patient_1098-19334.jpg?t=st=1731582428~exp=1731586028~hmac=0f0b15e8aa18d8301213501f8a5b8b3bc1d9c5a3099ca0154983c203742ba6ae&w=1060",
    keyword: "Health",
    title: "Health Services",
    description:
      "The on-campus health center offers a range of medical services to keep students and staff healthy. From regular check-ups to emergency care, our health professionals are here to support your physical well-being, ensuring a safe and healthy campus experience.",
  },
  {
    img: studentSecurity2,
    keyword: "Engagement",
    title: "Vibrant Student Life",
    description:
      "Get involved! From clubs and societies to sports and cultural events, our campus is bustling with opportunities for students to engage, learn, and grow. Build lasting connections, develop new skills, and make unforgettable memories with a vibrant campus community.",
  },
];

const FeatureItem = ({ feature, index }) => (
  <div className="grid grid-cols-12 mx-0 mb-6 md:mb-0">
    <div
      className={cn(
        "col-span-12 md:col-span-6 relative z-20 p-0 overflow-hidden",
        {
          "md:order-2": index % 2,
        }
      )}
    >
      <div
        className={cn(
          "bg-center bg-no-repeat bg-cover h-full min-h-[350px] w-full md:w-full -z-10 overflow-hidden grayscale hover:grayscale-0 hover:scale-125 transition-all duration-300",
          {
            "float-right": !(index % 2),
          }
        )}
        style={{
          backgroundImage: `url(${feature.img})`,
        }}
      >
        <img
          src={feature.img}
          alt="Feature"
          className="absolute inset-0 object-cover w-full h-full"
        />
      </div>
    </div>
    <div className="col-span-12 md:col-span-6 relative z-20 p-0">
      <div
        className={cn("p-6 hover:translate-y-5 duration-300 ", {
          "md:ml-4": !(index % 2),
        })}
      >
        <div className="mb-6">
          <span className="block text-[45px] leading-none">
            {feature.keyword}
          </span>
          <span className="text-base uppercase block mt-3 ml-1">
            {feature.title}
          </span>
        </div>
        <p className="mb-6 lg:mb-12 leading-loose text-justify">
          {feature.description}
        </p>
      </div>
    </div>
  </div>
);

const StudentSecurityItem = () => {
  return (
    <section className=" bg-white dark:bg-[#0e1012] text-zinc-900 dark:text-white relative overflow-hidden z-10">
      <div className="container mx-auto">
        {features.map((feature, i) => (
          <FeatureItem feature={feature} index={i + 1} key={i} />
        ))}
      </div>
    </section>
  );
};
