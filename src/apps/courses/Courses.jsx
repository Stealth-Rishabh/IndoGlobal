import { useState, useMemo } from "react";
import { Search } from "lucide-react";
import ImgAndBreadcrumb from "../../components/ImgAndBreadcrumb";
import img from "../../assets/breadcrumb.png";
import Container from "../../components/wrappers/Container";
import Heading from "../../components/Heading";
import Stats from "../../components/Stats";
import Newsletter from "../../components/Newsletter";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card } from "../../components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useNavigate } from "react-router-dom";
import { COURSE_DETAILS } from "./course-details";
const breadcrumbItems = [{ href: "/", label: "Home" }, { label: "Courses" }];

export default function Courses() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("");

  const navigate = useNavigate();

  const handleViewDetails = (courseTitle) => {
    const formattedTitle = courseTitle.toLowerCase().replace(/ /g, "-");
    navigate(`/courses/${formattedTitle}`);
  };

  // const courses = useMemo(
  //   () => [
  //     {
  //       id: 1,
  //       title: "B.Tech in Mechanical Engineering",
  //       category: "B.Tech / B.tech Lateral Entry",
  //       image:
  //         "https://www.accurate.in/engg/article/img/banner/btech-program-in-greater-noida-03-05-22.webp",
  //     },
  //     {
  //       id: 2,
  //       title: "B.Tech in Computer Science Engineering",
  //       category: "B.Tech / B.tech Lateral Entry",
  //       image:
  //         "https://www.accurate.in/engg/article/img/banner/btech-program-in-greater-noida-03-05-22.webp",
  //     },
  //     {
  //       id: 3,
  //       title: "B.Tech in Electronics and Communication Engineering",
  //       category: "B.Tech / B.tech Lateral Entry",
  //       image:
  //         "https://www.accurate.in/engg/article/img/banner/btech-program-in-greater-noida-03-05-22.webp",
  //     },
  //     {
  //       id: 4,
  //       title: "B.Tech in Civil Engineering",
  //       category: "B.Tech / B.tech Lateral Entry",
  //       image:
  //         "https://www.accurate.in/engg/article/img/banner/btech-program-in-greater-noida-03-05-22.webp",
  //     },
  //     {
  //       id: 5,
  //       title: "M.Tech in Civil Engineering",
  //       category: "M.Tech",
  //       image:
  //         "https://images.javatpoint.com/fullformpages/images/m-tech-full-form.png",
  //     },
  //     {
  //       id: 6,
  //       title: "M.Tech in Computer Science Engineering",
  //       category: "M.Tech",
  //       image:
  //         "https://images.javatpoint.com/fullformpages/images/m-tech-full-form.png",
  //     },
  //     {
  //       id: 7,
  //       title: "M.Tech in Electronics and Communication",
  //       category: "M.Tech",
  //       image:
  //         "https://images.javatpoint.com/fullformpages/images/m-tech-full-form.png",
  //     },
  //     {
  //       id: 8,
  //       title: "Polytechnic in Mechanical Engineering",
  //       category: "Polytechnic / Polytechnic Lateral Entry",
  //       image: "https://www.accurate.in/img/college/1711704889-1.webp",
  //     },
  //     {
  //       id: 9,
  //       title: "Polytechnic in Civil Engineering",
  //       category: "Polytechnic / Polytechnic Lateral Entry",
  //       image: "https://www.accurate.in/img/college/1711704889-1.webp",
  //     },
  //     {
  //       id: 10,
  //       title: "Master in Of Business Administration (MBA)",
  //       category: "Management and Technology",
  //       image:
  //         "https://trio.dev/wp-content/uploads/2024/04/Technology_Management__What_Is_It_and_Why_Is_It_Important__.png",
  //     },
  //     {
  //       id: 11,
  //       title: "Bachelor in Of Business Administration (BBA)",
  //       category: "Management and Technology",
  //       image:
  //         "https://trio.dev/wp-content/uploads/2024/04/Technology_Management__What_Is_It_and_Why_Is_It_Important__.png",
  //     },
  //     {
  //       id: 12,
  //       title: "Bachelor in of Computer Application (BCA)",
  //       category: "Management and Technology",
  //       image:
  //         "https://trio.dev/wp-content/uploads/2024/04/Technology_Management__What_Is_It_and_Why_Is_It_Important__.png",
  //     },
  //     {
  //       id: 13,
  //       title: "Bachelor in of Architecture",
  //       category: "Architecture",
  //       image:
  //         "https://www.krmangalam.edu.in/wp-content/uploads/2024/02/347bs_BlogBanner3-1024x576.webp",
  //     },
  //     {
  //       id: 14,
  //       title: "B.Sc. in Medical Laboratory Sciences (MLS)",
  //       category: "Paramedical Courses",
  //       image:
  //         "https://www.virohan.com/_next/image?url=https%3A%2F%2Fmedia-cms.virohan.com%2Fstaging%2FParamedical_Courses_1188d33c7e.jpg&w=1080&q=75",
  //     },
  //     {
  //       id: 15,
  //       title: "B.Sc in Radiology & Imaging Technology",
  //       category: "Paramedical Courses",
  //       image:
  //         "https://www.virohan.com/_next/image?url=https%3A%2F%2Fmedia-cms.virohan.com%2Fstaging%2FParamedical_Courses_1188d33c7e.jpg&w=1080&q=75",
  //     },
  //     {
  //       id: 16,
  //       title: "B.Sc in Operation Theatre Technology",
  //       category: "Paramedical Courses",
  //       image:
  //         "https://www.virohan.com/_next/image?url=https%3A%2F%2Fmedia-cms.virohan.com%2Fstaging%2FParamedical_Courses_1188d33c7e.jpg&w=1080&q=75",
  //     },
  //   ],
  //   []
  // );

  const courses = useMemo(() => COURSE_DETAILS, []);

  const categories = useMemo(
    () => [
      "B.Tech / B.tech Lateral Entry",
      "M.Tech",
      "Polytechnic / Polytechnic Lateral Entry",
      "Management and Technology",
      "Architecture",
      "Paramedical Courses",
    ],
    []
  );

  // for large screen

  const toggleCategory = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  // for phone view
  const handleCategorySelect = (value) => {
    setSelectedCategory(value);
    setSelectedCourse("");
  };

  const handleCourseSelect = (value) => {
    setSelectedCourse(value);
    setSelectedCategories([selectedCategory]);
  };

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const matchesSearch = course.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      console.log("inside filter", course);
      console.log("inside filter search", matchesSearch);
      const matchesCategory =
        selectedCategories.length === 0 ||
        selectedCategories.includes(course.category);
      const matchesSelectedCourse = selectedCourse
        ? course.title === selectedCourse
        : true;
      return matchesSearch && matchesCategory && matchesSelectedCourse;
    });
  }, [courses, searchTerm, selectedCategories, selectedCourse]);

  return (
    <section className="relative min-h-screen">
      <ImgAndBreadcrumb
        title="Courses"
        imageSrc={img}
        imageAlt="Courses header image"
        breadcrumbItems={breadcrumbItems}
      />
      <Container className="container grid gap-14 relative">
        <div className="col-span-1 pt-12">
          <Heading
            title="Explore Our Academic Programs"
            subtitle="Discover a wide range of courses designed to prepare you for success in your chosen field. From engineering to management, we offer diverse educational pathways."
            titleClassName="text-secondary-color text-left lg:text-5xl text-center"
            subtitleClassName="text-gray-500 text-justify m-0 lg:text-lg lg:font-normal lg:max-w-full font-normal text-center"
            className="lg:pb-10"
          />

          <div className="search-section mb-12 sm:mb-24 space-y-8" id="top">
            <div className="relative w-full max-w-6xl mx-auto">
              <Input
                id="search"
                type="text"
                placeholder="Search courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="placeholder:text-gray-400 py-6 pl-12 rounded-full border-secondary-color border-2"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            </div>
            <div className="categories-filter">
              {/* Large screen filter */}
              <div className="hidden md:flex justify-center flex-wrap sm:gap-4 gap-2 max-w-6xl mx-auto">
                {categories.map((category) => (
                  <Badge
                    key={category}
                    className={`cursor-pointer sm:hover:-translate-y-1 transition-all ${
                      selectedCategories.includes(category)
                        ? "bg-secondary-color text-white"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                    onClick={() => toggleCategory(category)}
                  >
                    {category}
                  </Badge>
                ))}
              </div>

              {/* Small screen filter */}
              <div className="md:hidden flex flex-col sm:flex-row gap-4">
                <Select onValueChange={handleCategorySelect}>
                  <SelectTrigger className="w-full sm:w-[180px]">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select
                  onValueChange={handleCourseSelect}
                  disabled={!selectedCategory}
                >
                  <SelectTrigger className="w-full sm:w-[180px]">
                    <SelectValue placeholder="Select course" />
                  </SelectTrigger>
                  <SelectContent>
                    {courses
                      .filter((course) => course.category === selectedCategory)
                      .map((course) => (
                        <SelectItem key={course.id} value={course.title}>
                          {course.title}
                        </SelectItem>
                      ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <div className="courses grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
            {filteredCourses.map((course) => (
              <Card key={course.id} className="p-4 hover:shadow-lg shadow">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover rounded"
                />
                <h3 className="text-lg font-bold mt-2">{course.title}</h3>
                <p className="text-gray-500">{course.category}</p>
                {/* <Link to={`/courses/${course.title}`}> */}
                <Button
                  className="mt-4 w-full"
                  onClick={() => handleViewDetails(course.title)}
                >
                  View Details
                </Button>
                {/* </Link> */}
              </Card>
            ))}
          </div>

          {filteredCourses.length === 0 && (
            <div className="text-center text-gray-500 py-8">
              No courses found matching your criteria.
            </div>
          )}
        </div>
      </Container>

      <Stats />
      <Newsletter />
    </section>
  );
}
