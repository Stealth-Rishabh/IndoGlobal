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
  const [selectedCourse, setSelectedCourse] = useState("");

  const navigate = useNavigate();

  const handleViewDetails = (coursePath) => {
    navigate(`/courses/${coursePath}`);
  };

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

  // Toggle category selection for single selection
  const toggleCategory = (category) => {
    setSelectedCategories((prev) => {
      if (prev.includes(category)) {
        // Deselect if already selected
        return [];
      } else {
        // Select only the clicked category
        return [category];
      }
    });

    // Reset other filters when changing categories
    setSearchTerm("");
    setSelectedCourse("");
  };

  // Handle category selection for small screens with single selection
  const handleCategorySelect = (value) => {
    setSelectedCategories((prev) => {
      if (prev.includes(value)) {
        // Deselect if already selected
        return [];
      } else {
        // Select only the chosen category
        return [value];
      }
    });
    // Reset other filters
    setSearchTerm("");
    setSelectedCourse("");
  };

  // Handle course selection for small screens
  const handleCourseSelect = (value) => {
    setSelectedCourse(value);
    // Ensure the course's category is selected
    const course = courses.find((c) => c.title === value);
    if (course && !selectedCategories.includes(course.category)) {
      setSelectedCategories([course.category]);
    }
    // Reset search term
    setSearchTerm("");
  };

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      // Check if search term matches (case-insensitive)
      const matchesSearch = searchTerm
        ? course.title.toLowerCase().includes(searchTerm.toLowerCase())
        : true;

      // Check if category matches
      const matchesCategory =
        selectedCategories.length === 0 ||
        selectedCategories.includes(course.category);

      // Check if specific course is selected
      const matchesSelectedCourse = !selectedCourse || course.title === selectedCourse;

      // Combine all conditions
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
            subtitleClassName="hidden md:block text-gray-500 text-justify m-0 lg:text-lg lg:font-normal lg:max-w-full font-normal text-center"
            className="lg:pb-10"
          />

          <div className="search-section mb-12 sm:mb-24 space-y-8" id="top">
            <div className="relative w-full max-w-6xl mx-auto">
              <Input
                id="search"
                type="text"
                placeholder="Search courses..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setSelectedCourse("");
                  // Optionally, you can keep category selection
                }}
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
                <Select
                  onValueChange={handleCategorySelect}
                  value={selectedCategories[0] || ""}
                >
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
                  disabled={selectedCategories.length === 0}
                  value={selectedCourse || ""}
                >
                  <SelectTrigger className="w-full sm:w-[180px]">
                    <SelectValue placeholder="Select course" />
                  </SelectTrigger>
                  <SelectContent>
                    {courses
                      .filter(
                        (course) =>
                          !selectedCategories.length ||
                          selectedCategories.includes(course.category)
                      )
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
                <Button
                  className="mt-4 w-full"
                  onClick={() => handleViewDetails(course.path)}
                >
                  View Details
                </Button>
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

      {/* <Stats /> */}
      {/* <Newsletter /> */}
    </section>
  );
}
