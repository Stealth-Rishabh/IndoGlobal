import Heading from "../../components/Heading";
import ImgAndBreadcrumb from "../../components/ImgAndBreadcrumb";
import Container from "../../components/wrappers/Container";
import img from "../../assets/breadcrumb.png";
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

const Transportation = () => {
  const breadcrumbItems = [
    { href: "/", label: "Home" },
    { href: "/great-transportation", label: "Why Indo Global" },
    { label: "Transportation" },
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
            title="Reliable Transportation Services"
            titleClassName="text-secondary-color text-left lg:text-5xl"
            subtitleClassName="text-gray-500 text-justify m-0 lg:text-lg lg:font-normal lg:max-w-full"
            subtitle="We provide convenient and safe transportation options for students, ensuring easy access to and from campus. Our fleet of well-maintained vehicles offers reliable service, helping students focus on their studies while enjoying stress-free commutes."
            className=""
          />
          <div>
            <TransportationItem/>
          </div>
        </div>
      </Container>
      <Stats />
      <Newsletter />
    </div>
  );
};

export default Transportation;




const features = [
    {
      img: "https://img.freepik.com/free-photo/medium-shot-women-walking-with-coffee_23-2149142296.jpg?t=st=1731579824~exp=1731583424~hmac=48e2d96278ff14fdce9eb954547cdabdbaa87804cba2afda3b9ffa01f298941d&w=1060",
      keyword: "Commute",
      title: "Easy Commute",
      description:
        "Our fleet of buses ensures hassle-free transportation from Chandigarh, Panchkula, Mohali, Morinda, Ropar, Zirakpur, Derabassi, and other nearby towns, making your commute comfortable and convenient.",
    },
    {
      img: "https://img.freepik.com/free-photo/urban-bus-stop-public-transport-dubai-city_93675-131309.jpg?t=st=1731579899~exp=1731583499~hmac=18ccee4ee67b0e6f4402976737d605c152c19b98bf74fdf2be0958e4178e124d&w=1060",
      keyword: "Space",
      title: "Ample Parking Facility",
      description:
        "Our campus offers ample parking space for both day scholars and resident students, ensuring that your vehicle is safe and easily accessible.",
    },
    {
      img: "https://img.freepik.com/free-photo/member-log-membership-username-password-concept_53876-120842.jpg?t=st=1731580089~exp=1731583689~hmac=93077b6011d8d73090d75f996d84be7f6ce0b9df6c6ea892d5c462b4a9ff19de&w=996",
      keyword: "Students",
      title: "Parking Registration",
      description:
        "Students wishing to use the parking facility must register their vehicles (2-wheelers and/or 4-wheelers) by filling out the registration form and paying the necessary fee before bringing them onto the campus.",
    },
  ];
  

const FeatureItem = ({ feature, index }) => (
	<div className="grid grid-cols-12 mx-0 mb-6 md:mb-0">
		<div
			className={cn("col-span-12 md:col-span-6 relative z-20 p-0 overflow-hidden", {
				"md:order-2": index % 2,
			})}
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
			<div className={cn("p-6 hover:translate-y-5 duration-300 ", { "md:ml-4": !(index % 2) })}>
				<div className="mb-6">
					<span className="block text-[45px] leading-none">
						{feature.keyword}
					</span>
					<span className="text-base uppercase block mt-3 ml-1">
						{feature.title}
					</span>
				</div>
				<p className="mb-6 lg:mb-12 leading-loose">{feature.description}</p>
				
			</div>
		</div>
	</div>
);



const TransportationItem = () => {
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
