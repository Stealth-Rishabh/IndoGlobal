import Heading from "../../components/Heading";
import ImgAndBreadcrumb from "../../components/ImgAndBreadcrumb";
import Container from "../../components/wrappers/Container";
import img from "../../assets/aboutUsBanner.webp";
import Stats from "../../components/Stats";
import Newsletter from "../../components/Newsletter";
import AboutSidebar from "../../components/AboutSidebar";
import PropTypes from "prop-types";
import { Home, Users, BedDouble } from "lucide-react"; // Relevant Lucide icons for the new content
import hostelImg from "../../assets/whyIndoGlobal/hostels.webp";
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

const Hostels = ({ h1 }) => {
  const breadcrumbItems = [
    { href: "/", label: "Home" },
    { href: "/why-indo-global/hostel", label: "Why Indo Global" },
    { label: "Hostel" },
  ];
  return (
    <div className="relative min-h-screen">
      <ImgAndBreadcrumb
        title="Hostel"
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
            title={h1}
            titleClassName="text-secondary-color text-left lg:text-5xl"
            subtitleClassName="text-gray-500 text-justify m-0 lg:text-lg lg:font-normal lg:max-w-full"
            subtitle="Experience comfortable, secure, and enjoyable campus life with our 
							world-class hostel facilities designed to make you feel at home."
            className=""
          />
          <HostelFeatures />
        </div>
      </Container>
      <Stats />
      <Newsletter />
    </div>
  );
};

export default Hostels;

const features = [
  {
    icon: BedDouble,
    title: "Comfortable Hostel Facilities",
    desc: "Separate hostels for boys and girls provide a comfortable and secure living space for students from all parts of the country. Rooms are spacious, well-ventilated, and supported by 24-hour power supply, ensuring a seamless experience.",
  },
  {
    icon: Home,
    title: "Wholesome Meals",
    desc: "Enjoy four delicious and wholesome meals every day, including breakfast, lunch, tea with snacks, and dinner. The daily changing menu caters to diverse tastes, ensuring everyone feels at home.",
  },
  {
    icon: Users,
    title: "Recreation & Harmony",
    desc: "A range of indoor and outdoor sports keeps students active and fosters camaraderie. Weekly outings on Saturdays and Sundays add a fun and refreshing break from campus life.",
  },
];

const FeatureItem = ({ feature }) => {
  const Icon = feature.icon;
  return (
    <div className="flex relative py-4 md:py-6 mb-4 md:pr-6 lg:mb-6">
      <div className="text-blue-600 rounded-full text-3xl mb-6 mr-6">
        <Icon size={32} />
      </div>
      <div>
        <h4 className="text-2xl font-medium mb-4">{feature.title}</h4>
        <p className="opacity-70">{feature.desc}</p>
      </div>
    </div>
  );
};

FeatureItem.propTypes = {
  feature: PropTypes.shape({
    icon: PropTypes.elementType.isRequired,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
  }).isRequired,
};

const HostelFeatures = () => {
  return (
    <section className=" bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white overflow-hidden">
      <div className="container mx-auto">
        {/* <div className="flex max-w-3xl justify-center text-center mb-12 mx-auto">
					<div>
						<h2 className="text-2xl leading-none font-bold md:text-[45px] mb-6">
							Hostel Facilities
						</h2>
						<p className="text-lg mb-6">
							Experience comfortable, secure, and enjoyable campus life with our 
							world-class hostel facilities designed to make you feel at home.
						</p>
					</div>
				</div> */}
        <div className="grid grid-cols-12 gap-6 justify-end relative">
          <div className="col-span-12 lg:col-span-6">
            <div>
              {features.map((feature, i) => (
                <FeatureItem feature={feature} key={i} />
              ))}
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6">
            <div className="h-full relative rounded-lg  ">
              <div
                className="bg-center bg-no-repeat bg-contain min-h-[350px] w-full lg:float-right lg:h-full "
                style={{
                  backgroundImage: `url(${hostelImg})`,
                }}
              ></div>
              {/* <div className="relative mx-12 -mt-12 rounded-xl overflow-hidden shadow-xl z-20 lg:absolute lg:top-12 lg:bottom-12 lg:left-[65%] lg:right-12 lg:m-0 lg:mt-10">
                <div className="text-white absolute translate-y-2/3 w-2/3 -right-10 rounded-xl bg-blue-950 dark:bg-slate-800 leading-relaxed px-4 py-6 lg:px-6 lg:py-12">
                  <h4 className="text-2xl font-medium mb-4">
                    Boys & Girls Hostel
                  </h4>
                  <p className="opacity-80">
                    Separate hostels for boys and girls ensure security and
                    comfort while providing an environment to learn, bond, and
                    grow.
                  </p>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
