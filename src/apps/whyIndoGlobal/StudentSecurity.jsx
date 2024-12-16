/* eslint-disable react/prop-types */
import Heading from "../../components/Heading";
import ImgAndBreadcrumb from "../../components/ImgAndBreadcrumb";
import Container from "../../components/wrappers/Container";
import img from "../../assets/aboutUsBanner.webp";
import Stats from "../../components/Stats";
import Newsletter from "../../components/Newsletter";
import AboutSidebar from "../../components/AboutSidebar";
import { cn } from "@/lib/utils";
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
        <div className="self-start md:sticky md:top-5">
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
    img: "https://img.freepik.com/free-photo/portrait-male-security-guard-with-radio-station-camera-screens_23-2150368714.jpg?t=st=1731582170~exp=1731585770~hmac=9f35b2d4c71417003036f9585ad32a5a0f0151f499f1e75ef468710e61dd35cc&w=1060",
    keyword: "Security",
    title: "Secure Campus",
    description:
      "We are dedicated to protecting your safety and providing a welcoming, secure environment. Our security team works around the clock to ensure the well-being of students, faculty, staff, and visitors. Our trained security personnel, often ex-servicemen, uphold both daily security measures and broader safety initiatives.",
  },
  {
    img: "https://img.freepik.com/free-photo/students-studying-sunny-day_23-2147850716.jpg?t=st=1731582303~exp=1731585903~hmac=0e34fe47de10d06c7f800429757a0a07d6d8f9171bad7baf08a2c7df4ef9422a&w=1060",
    keyword: "Convenience",
    title: "On-Campus Amenities",
    description:
      "Experience convenience at every corner. Our campus hosts essential amenities including food courts, stationary shops, and medical facilities, allowing students to access what they need without leaving the grounds. All amenities are designed with your comfort and needs in mind.",
  },
  {
    img: "https://img.freepik.com/free-photo/medium-shot-smiley-father-kid-home_23-2149610748.jpg?t=st=1731582382~exp=1731585982~hmac=8590ef4c60e7ded1f879404837c05ed083eb5549621b861327eef826fa720b9e&w=1060",
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
    img: "https://img.freepik.com/free-photo/college-students-cramming-outdoor_23-2149649382.jpg?t=st=1731582481~exp=1731586081~hmac=82f88ab7ce7343392c9f36f8d9c3a462c2033a83ed5287535aabd4910772abc1&w=1060",
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
      />
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
        <p className="mb-6 lg:mb-12 leading-loose text-justify">{feature.description}</p>
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
