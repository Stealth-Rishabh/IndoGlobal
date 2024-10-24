import Heading from "../../components/Heading";
import ImgAndBreadcrumb from "../../components/ImgAndBreadcrumb";
import Container from "../../components/wrappers/Container";
import Header from "../header/Header";
import img from "../../assets/breadcrumb.png"


const AccreditationAndTieups = () => {
  const breadcrumbItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { label: "Our Team" },
  ]
  return (
    <div className="">
     <ImgAndBreadcrumb 
      imageSrc={img}
      imageAlt="Description of the image"
      breadcrumbItems={breadcrumbItems}
    />
      <Container>
        <Heading title="Accreditation & Tie-ups"
        titleClassName="text-secondary-color"
        subtitleClassName="text-gray-500 "
        subtitle="To provide a learning environment in which all students are challenged to develop their intellectual, practical and social skills in a holistic way focusing on leadership, socially responsible behaviour and lifelong learning."
        />
      </Container>
    </div>
  )
}

export default AccreditationAndTieups;
