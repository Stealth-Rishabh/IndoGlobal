import ImgAndBreadcrumb from "../../components/ImgAndBreadcrumb";
import img from "../../assets/breadcrumb.png";
import Container from "../../components/wrappers/Container";
import Heading from "../../components/Heading";
import AboutSidebar from "../../components/AboutSidebar";
import Stats from "../../components/Stats";
import Newsletter from "../../components/Newsletter";

const breadcrumbItems = [
    { href: "/", label: "Home" },
    { label: "Admissions" },
  ];

const Admission = () => {
  return (
    <section className="relative min-h-screen">
      <ImgAndBreadcrumb
        title="Admissions"
        imageSrc={img}
        imageAlt="Description of the image"
        breadcrumbItems={breadcrumbItems}
      />
    <Container className="container grid grid-cols-1 md:grid-cols-4 gap-14 relative">
        <div className="col-span-1 pt-12 md:col-span-3">
          <Heading
            title=" "
            subtitle="With over 22 PhDs, 100+ M.Techs, and 40+ MBAs, our distinguished faculty brings together exceptional academic credentials and rich industry experience to provide world-class education."
            titleClassName="text-secondary-color text-left lg:text-5xl"
            subtitleClassName="text-gray-500 text-justify m-0 lg:text-lg lg:font-normal lg:max-w-full font-normal"
            className=""
          />
          <div className="grid grid-cols-1 gap-20">
           
          </div>
        </div>
        <div className="md:sticky md:top-20 self-start">
          {/* <AboutSidebar sidebarLinks={sidebarLinks} /> */}
        </div>
      </Container>
      <Stats />
      <Newsletter />
    </section>
  );
};

export default Admission;
