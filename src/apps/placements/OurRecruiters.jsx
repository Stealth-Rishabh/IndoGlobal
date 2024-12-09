import Heading from "../../components/Heading";
import ImgAndBreadcrumb from "../../components/ImgAndBreadcrumb";
import Container from "../../components/wrappers/Container";
import img from "../../assets/breadcrumb.png";
import Stats from "../../components/Stats";
import Newsletter from "../../components/Newsletter";
import AboutSidebar from "../../components/AboutSidebar";

// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Badge } from "@/components/ui/badge";
import {
  ChevronDown,
  ChevronUp,
  Search,
  Book,
  Database,
  Cpu,
  Cloud,
  Cog,
  Zap,
  Briefcase,
  Globe,
  Brain,
  Heart,
} from "lucide-react";
// import InfiniteCarousel from "../../components/ui/InfiniteCarousel";
import IconMarquee from "./IconMarquee";
// import ashoklayland from "../../assets/about/tieUps/ashoklayland.png";
import cisco from "../../assets/about/tieUps/cisco.png";
// import ibm from "../../assets/about/tieUps/ibm.png";
// import IETE from "../../assets/about/tieUps/IETE.png";
// import IIT_BOMBAY from "../../assets/about/tieUps/IIT_BOMBAY.png";
// import IIT_Kanpur from "../../assets/about/tieUps/IIT_Kanpur.jpg";
// import ISTE_logo from "../../assets/about/tieUps/ISTE_logo.png";
import oracle from "../../assets/about/tieUps/oracle.png";
import redhat_logo from "../../assets/about/tieUps/redhat_logo.png";
import Roundglass from "../../assets/about/tieUps/Roundglass.png";
// import toyota from "../../assets/about/tieUps/toyota.png";
import university_of_quebec from "../../assets/about/tieUps/university_of_quebec.png";
import IBM from "../../assets/placements/recruiters/ibm.jpg";
// import Infosys from "../../assets/placements/recruiters/infosys.jpg";
import Ashok from "../../assets/placements/recruiters/Ashok.png";
import LT from "../../assets/placements/recruiters/Lt.png";
import Wipro from "../../assets/placements/recruiters/Wipro.png";
import Simplex from "../../assets/placements/recruiters/Simplex.jpg";

const icons = [
  // { src: ashoklayland, alt: "Ashok Leyland" }  ,
  { src: cisco, alt: "Cisco" },
  // { src: ibm, alt: "IBM" },
  // { src: IETE, alt: "IETE" },
  // { src: IIT_BOMBAY, alt: "IIT Bombay" },
  // { src: IIT_Kanpur, alt: "IIT Kanpur" },
  // { src: ISTE_logo, alt: "ISTE" },
  { src: oracle, alt: "Oracle" },
  { src: redhat_logo, alt: "Red Hat" },
  { src: Roundglass, alt: "Roundglass" },
  // { src: toyota, alt: "Toyota" },
  { src: university_of_quebec, alt: "University of Quebec" },
  { src: IBM, alt: "University of Quebec" },
  { src: Ashok, alt: "University of Quebec" },
  { src: LT, alt: "University of Quebec" },
  { src: Wipro, alt: "University of Quebec" },
  { src: Simplex, alt: "University of Quebec" },
];

const sidebarLinks = [
  { href: "/placements/campus-recruitments", label: "Campus Recruitments" },
  { href: "/placements/industry-speaks", label: "Industry Speaks" },
  { href: "/placements/industry-tie-ups", label: "Industry Tie-ups" },
  { href: "/placements/placement-activities", label: "Placement Activities" },
  { href: "/placements/our-recruiters", label: "Our Recruiters" },
];
const OurRecruiters = () => {
  const breadcrumbItems = [
    { href: "/", label: "Home" },
    { href: "/placements/our-recruiters", label: "Placements" },
    { label: "Our Recruiters" },
  ];
  return (
    <div className="relative min-h-screen">
      <ImgAndBreadcrumb
        title="Placements"
        imageSrc={img}
        imageAlt="Description of the image"
        breadcrumbItems={breadcrumbItems}
      />
      <Container className="container grid grid-cols-1 md:grid-cols-4 gap-14">
        <div className="md:sticky md:top-5 self-start">
          <AboutSidebar sidebarLinks={sidebarLinks} />
        </div>
        <div className="col-span-1 md:col-span-3 pt-12">
          <Heading
            title="Preferred Recruitment Destination"
            titleClassName="text-secondary-color text-left lg:text-5xl"
            subtitleClassName="text-gray-500 text-justify m-0 lg:text-lg lg:font-normal lg:max-w-full"
            subtitle="Top companies across various industries now choose Indo Global Colleges as a preferred destination for on-campus recruitment. This success is driven by the dedicated efforts of the Placement Centre's team, who equip students with the skills and guidance needed to secure ideal placements and excel in their careers."
            className="lg:pb-10"
          />
          <IconMarquee icons={icons}/>
        </div>
      </Container>
      <Stats />
      <Newsletter />
    </div>
  );
};

export default OurRecruiters;
