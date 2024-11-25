import Heading from "../../components/Heading";
import ImgAndBreadcrumb from "../../components/ImgAndBreadcrumb";
import Container from "../../components/wrappers/Container";
import img from "../../assets/breadcrumb.png";
import Stats from "../../components/Stats";
import Newsletter from "../../components/Newsletter";
import AboutSidebar from "../../components/AboutSidebar";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Linkedin, Twitter, Facebook } from "lucide-react";
import BlogSidebar from "./BlogSidebar";

const BlogDetails = () => {
  const breadcrumbItems = [
    { href: "/", label: "Home" },
    { href: "/blogs", label: "Blogs" },
    { label: "Blogs Details" },
  ];
  return (
    <div className="relative min-h-screen bg-slate-50 z-0">
      <ImgAndBreadcrumb
        title="Blog Details"
        imageSrc={img}
        imageAlt="Description of the image"
        breadcrumbItems={breadcrumbItems}
      />
      <Container className="container grid grid-cols-1 md:grid-cols-4 gap-5 px-0">
        <div className="col-span-1 pt-12  md:col-span-3">
          {/* <Heading
            title="Explore Our Blogs"
            titleClassName="text-secondary-color text-center lg:text-5xl"
            subtitleClassName="text-gray-500 text-center m-0 lg:text-lg lg:font-normal lg:max-w-full"
            subtitle="Discover thought-provoking articles, insightful stories, and innovative ideas that inspire learning, creativity, and leadership."
            className="mx-auto max-w-5xl"
          /> */}
          <BlogContent />
        </div>
        <div className="self-start md:sticky md:top-5">
          <BlogSidebar />
        </div>
      </Container>
      <Stats />
      <Newsletter />
    </div>
  );
};

export default BlogDetails;

const BlogContent = () => {
  // Placeholder data
  const blogPost = {
    title: "The Future of Web Development: Trends to Watch in 2024",
    image: "https://v0.dev/placeholder.svg?height=400&width=800",
    date: "January 15, 2024",
    author: "Jane Doe",
    tags: ["Web Development", "Technology", "Trends"],
    content: [
      {
        type: "paragraph",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      {
        type: "paragraph",
        content:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
      {
        type: "heading",
        content: "Key Trends",
      },
      {
        type: "list",
        items: [
          "Progressive Web Apps (PWAs)",
          "Artificial Intelligence in Web Design",
          "Voice User Interface (VUI)",
          "WebAssembly",
        ],
      },
      {
        type: "paragraph",
        content:
          "Stay tuned as we dive deeper into each of these trends and explore how they are shaping the future development.",
      },
    ],
  };

  const renderContent = (content) => {
    return content.map((item, index) => {
      switch (item.type) {
        case "paragraph":
          return (
            <p key={index} className="mb-4 text-gray-700 leading-relaxed">
              {item.content}
            </p>
          );
        case "heading":
          return (
            <h2 key={index} className="text-2xl text-secondary-color font-bold mb-4 mt-6">
              {item.content}
            </h2>
          );
        case "list":
          return (
            <ul key={index} className="list-disc pl-6 mb-4 space-y-2">
              {item.items.map((listItem, listIndex) => (
                <li key={listIndex} className="text-gray-700">
                  {listItem}
                </li>
              ))}
            </ul>
          );
        default:
          return null;
      }
    });
  };

  return (
    <Card className="max-w-5xl mx-auto shadow sm:shadow-lg">
      <CardContent className="p-8">
        <h1 className="sm:text-4xl text-2xl font-bold mb-6 text-secondary-color">
          {blogPost.title}
        </h1>
        <div className="relative w-full sm:aspect-auto aspect-video sm:h-96 mb-6">
          <img
            src={blogPost.image}
            alt="Blog post cover"
            className="rounded-lg object-cover w-full h-full"
          />
        </div>
        <div className="flex flex-wrap items-center gap-3 mb-8">
          <span className="text-sm text-gray-600">{blogPost.date}</span>
          <span className="text-sm text-gray-400">•</span>
          <span className="text-sm text-gray-600">{blogPost.author}</span>
          <span className="text-sm text-gray-400">•</span>
          <div className="flex gap-2 flex-wrap">
            {blogPost.tags.map((tag, index) => (
              <Badge key={index} variant="secondary" className="bg-gray-100">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
        <div className="space-y-4">{renderContent(blogPost.content)}</div>
      </CardContent>
      <CardFooter className="flex flex-col sm:flex-row justify-between items-center border-t p-6 gap-4">
        <div className="text-sm text-gray-600 font-medium">
          Share this post:
        </div>
        <div className="flex gap-3">
          <Button size="sm" variant="outline" className="hover:bg-blue-50">
            <Linkedin className="w-4 h-4 mr-2" />
            LinkedIn
          </Button>
          <Button size="sm" variant="outline" className="hover:bg-blue-50">
            <Twitter className="w-4 h-4 mr-2" />
            Twitter
          </Button>
          <Button size="sm" variant="outline" className="hover:bg-blue-50">
            <Facebook className="w-4 h-4 mr-2" />
            Facebook
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};
