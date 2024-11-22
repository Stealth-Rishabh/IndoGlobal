import Heading from "../../components/Heading";
import ImgAndBreadcrumb from "../../components/ImgAndBreadcrumb";
import Container from "../../components/wrappers/Container";
import img from "../../assets/breadcrumb.png";
import Stats from "../../components/Stats";
import Newsletter from "../../components/Newsletter";
import AboutSidebar from "../../components/AboutSidebar";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";


const BlogDetails = () => {
  const breadcrumbItems = [
    { href: "/", label: "Home" },
    { href: "/blogs", label: "Blogs" },
    { label: "Blogs Details" },
  ];
  return (
    <div className="relative min-h-screen">
      <ImgAndBreadcrumb
        title="Blog Details"
        imageSrc={img}
        imageAlt="Description of the image"
        breadcrumbItems={breadcrumbItems}
      />
      <Container className="container grid gap-14">
        <div className="col-span-1 pt-12 md:col-span-3">
          <Heading
            title="Explore Our Blogs"
            titleClassName="text-secondary-color text-center lg:text-5xl"
            subtitleClassName="text-gray-500 text-center m-0 lg:text-lg lg:font-normal lg:max-w-full"
            subtitle="Discover thought-provoking articles, insightful stories, and innovative ideas that inspire learning, creativity, and leadership."
            className="mx-auto max-w-5xl"
          />

          
        </div>
      </Container>
      <Stats />
      <Newsletter />
    </div>
  );
};

export default BlogDetails;


