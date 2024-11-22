import Heading from "../../components/Heading";
import ImgAndBreadcrumb from "../../components/ImgAndBreadcrumb";
import Container from "../../components/wrappers/Container";
import img from "../../assets/breadcrumb.png";
import Stats from "../../components/Stats";
import Newsletter from "../../components/Newsletter";
import AboutSidebar from "../../components/AboutSidebar";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";


const Blogs = () => {
  const breadcrumbItems = [
    { href: "/", label: "Home" },
    { label: "Blogs" },
  ];
  return (
    <div className="relative min-h-screen">
      <ImgAndBreadcrumb
        title="Blogs"
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

          <Blog2 />
        </div>
      </Container>
      <Stats />
      <Newsletter />
    </div>
  );
};

export default Blogs;


const blogs = [
  {
    title: "Not Your Regular Home Decoration?",
    description:
      "Assumenda non repellendus distinctio nihil dicta sapiente, quibusdam maiores.",
    author: " John Leo",
    date: "21 Jun, 2022",
    image: "https://cdn.easyfrontend.com/pictures/blog/blog_1.jpg",
  },
  {
    title: "Long lasting fall scent for women sale offer",
    description:
      "It’s no secret that the digital industry is booming. From exciting startups to global brands.",
    author: " Abraham Frin",
    date: "21 Jun, 2022",
    image: "https://cdn.easyfrontend.com/pictures/blog/blog_2.jpg",
  },
  {
    title: "How I’m Styling Everyday Black Outfits",
    description:
      "Viverra tellus in hac habitasse platea dictumst. Sollicitudin tempor id eu nisl.",
    author: " Finn Alen",
    date: "21 Jun, 2022",
    image: "https://cdn.easyfrontend.com/pictures/blog/blog_3.jpg",
  },
  {
    title: "Fashion Essentials All Men Should Know",
    description:
      "Sed ut in perspiciatis unde omnis iste natus error sit tatem doloremque laudantium.",
    author: " Warner Mac",
    date: "21 Jun, 2022",
    image: "https://cdn.easyfrontend.com/pictures/blog/blog_4.jpg",
  },
  {
    title: "Dolor sit amet, consectetur adiplscing eliyt sed",
    description:
      "More off this less hello salamander lied porpoise much over tightly circa horse taped.",
    author: " Maxy Paulo",
    date: "21 Jun, 2022",
    image: "https://cdn.easyfrontend.com/pictures/blog/blog_13_3.jpg",
  },
  {
    title: "Not Your Regular Home Decoration?",
    description:
      "Urna molestie at eleme ntum eu facilisis sed odio Male suada fames .",
    author: " Sarah Taylor",
    date: "21 Jun, 2022",
    image: "https://cdn.easyfrontend.com/pictures/blog/blog_13_1.jpg",
  },
];

const BlogItem = ({ blog }) => {
  const { title, description, author, date, image } = blog;

  return (
    <article className="drop-shadow-lg bg-white dark:shadow-none dark:bg-[#1E2735] rounded overflow-hidden h-full">
      <img src={image} alt={title} className="h-auto w-full" />
      <div className="p-3 pb-8 md:p-6 md:pb-12">
        <h4 className="font-medium text-2xl leading-7 mb-2">{title}</h4>
        <p>
          <span className="ml-2">
            By
            <a href="#!" className="text-blue-600 opacity-70">
              {author}
            </a>
          </span>
          <span>
            At <span>{date}</span>
          </span>
        </p>
        <p className="opacity-60 mt-3 mb-8">{description}</p>
        <Link
          to='/blogs/blog-details'
          className="bg-transparent hover:bg-blue-600 border border-blue-600 hover:text-white py-2 px-5 rounded transition"
        >
          Read More
        </Link>
      </div>
    </article>
  );
};

BlogItem.propTypes = {
  blog: PropTypes.object.isRequired,
};

const Blog2 = () => {
  return (
    <section className="ezy__blog2 light  text-stone-800 dark:text-white bg-white dark:bg-[#0b1727] overflow-hidden">
      <div className="container ">
        <div className="grid grid-cols-12 sm:px-8 pb-5 px-0 gap-6">
          {blogs.map((blog, i) => (
            <div className="col-span-12 md:col-span-6 lg:col-span-4" key={i}>
              <BlogItem blog={blog} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
