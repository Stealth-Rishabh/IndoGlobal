/* eslint-disable react/prop-types */
import ImgAndBreadcrumb from "../../components/ImgAndBreadcrumb";
import Container from "../../components/wrappers/Container";
import img from "../../assets/breadcrumb.png";
import Stats from "../../components/Stats";
import Newsletter from "../../components/Newsletter";
import CourseSidebar from "../../components/CourseSidebar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { COURSE_DETAILS } from "./course-details";
import { Star, CheckSquare } from "lucide-react";
import { useParams } from "react-router-dom";
const CoursesDetails = () => {
  const { courseTitle } = useParams();
  const formattedTitle = courseTitle.replace(/-/g, " ");
  const courseData = COURSE_DETAILS.find(
    (course) => course.title.toLowerCase() === formattedTitle
  );

  if (!courseData) {
    return <div>Course not found</div>;
  }
  const breadcrumbItems = [
    { href: "/", label: "Home" },
    { href: "/courses", label: "Courses" },
    { label: "B.Tech" },
  ];
  return (
    <div className="relative min-h-screen">
      <ImgAndBreadcrumb
        title="Why Indo Global"
        imageSrc={img}
        imageAlt="Description of the image"
        breadcrumbItems={breadcrumbItems}
      />
      <Container className="container grid grid-cols-1 gap-14 md:grid-cols-4">
        <div className="self-start md:sticky md:top-5">
          <CourseSidebar />
        </div>
        <div className="col-span-1 pt-12 md:col-span-3">
          <CourseDetailsPage {...courseData} />
        </div>
      </Container>
      <Stats />
      <Newsletter />
    </div>
  );
};

export default CoursesDetails;

const InfoBadges = ({ badges }) => (
  <div className="flex flex-wrap gap-4 mb-6">
    {badges.map((badge, index) => (
      <Badge
        key={index}
        variant="secondary"
        className="flex gap-1 items-center"
      >
        <badge.icon className="w-4 h-4" />
        {badge.text}
      </Badge>
    ))}
  </div>
);

const StarRating = ({ rating }) => (
  <div className="flex items-center">
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
        }`}
      />
    ))}
  </div>
);

const ReviewCard = ({ review }) => (
  <div className="pb-4 border-b last:border-b-0">
    <div className="flex justify-between items-center">
      <h4 className="font-semibold">{review.name}</h4>
      <StarRating rating={review.rating} />
    </div>
    <p className="mt-1 text-sm">{review.comment}</p>
  </div>
);

// Validate `COURSE_DETAILS` data before using it
function CourseDetailsPage({ badges = [], title = "", image, tabs = [] }) {
  // Extract content from tabs
  const overview = tabs.find((tab) => tab.label === "overview")?.content || [];

  const subjects =
    tabs
      .find((tab) => tab.label === "curriculum")
      ?.content?.find((item) => item.label === "Subjects")?.data || [];

  // const instructor =
  //   Object.fromEntries(
  //     tabs
  //       .find((tab) => tab.label === "instructor")
  //       ?.content?.map((item) => [item.label.toLowerCase(), item.data]) || []
  //   ) || {};

  const faqs = tabs.find((tab) => tab.label === "faqs")?.content || [];

  const reviews = tabs.find((tab) => tab.label === "reviews")?.content || [];

  const eligibility =
    tabs.find((tab) => tab.label === "eligibility")?.content || {};

  return (
    <div className="container mx-auto">
      <h1 className="mb-4 text-3xl font-bold md:text-4xl text-secondary-color">
        {title}
      </h1>
      <InfoBadges badges={badges} />

      <img
        src={image}
        alt={title}
        className="object-cover mb-6 w-full aspect-video sm:aspect-auto  sm:h-96 rounded-lg"
      />

      <div className="flex flex-wrap gap-4 mb-8">
        <Button className="flex-grow sm:flex-grow-0">Apply Now</Button>
        <Button variant="outline" className="flex-grow sm:flex-grow-0">
          Download Brochure
        </Button>
      </div>

      <Tabs defaultValue="overview" className="mb-8">
        <TabsList className="grid grid-cols-2 gap-1 mb-4 w-full md:grid-cols-5 sm:h-12 h-max sm:gap-0">
          {tabs.map((tab) => (
            <TabsTrigger
              key={tab.label}
              value={tab.label}
              className="data-[state=active]:bg-gray-800  data-[state=active]:text-white sm:h-full rounded-sm"
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.label.charAt(0).toUpperCase() + tab.label.slice(1)}
            </TabsTrigger>
          ))}
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview">
          <Card className="rounded-md border-0 shadow-none card lg:shadow sm:border">
            <CardHeader className="px-0 sm:px-6">
              <CardTitle className="px-0 text-3xl text-secondary-color">Course Overview</CardTitle>
            </CardHeader>
            <CardContent className="px-0 sm:px-6">
              {overview.map((item, index) => {
                return (
                  <div key={index}>
                    {item.type === "heading" && (
                      <h2 className="mt-6 mb-3 font-semibold text-xl sm:text-2xl text-secondary-color/90">
                        {item.data}
                      </h2>
                    )}
                    {item.type === "sub-heading" && (
                      <h3 className="mt-6 mb-3 font-semibold text-lg sm:text-lg text-secondary-color/80">
                        {item.data}
                      </h3>
                    )}
                    {item.type === "paragraph" && <p className="text-gray-700 ">{item.data}</p>}
                    {item.type === "list" && (
                      <ul className=" space- list-disc grid grid-cols-1 sm:grid-cols-2 justify-items-start gap-4 items-start mb-4">
                        {item.data.map((item, index) => (
                          <li
                            key={index}
                            className="flex items-start list-none justify-start text-gray-600"
                          >
                            <CheckSquare className="w-6 mt-1 h-6 sm:w-4 sm:h-4 mr-2 " />
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                );
              })}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Curriculum Tab */}
        <TabsContent value="curriculum">
          <Card className="rounded-md border-0 shadow-none card lg:shadow sm:border">
            <CardHeader className="px-0 sm:px-6">
              <CardTitle className="text-3xl text-secondary-color">Course Curriculum</CardTitle>
            </CardHeader>
            <CardContent className="px-0 sm:px-6">
              <Accordion type="single" collapsible className="w-full">
                {subjects.map((subject, index) => (
                  <AccordionItem key={subject} value={`subject${index + 1}`}>
                    <AccordionTrigger className="text-gray-600 text-lg">{subject.year}</AccordionTrigger>
                    <AccordionContent>
                      <ul className="pl-5 space-y-1 list-disc">
                        {(subject.data || []).map((syllabus, i) => (
                          <li key={i} className="text-gray-500 list-decimal">{syllabus}</li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>
        {/* Eligibility Tab */}
        <TabsContent value="eligibility">
          <Card className="rounded-md border-0 shadow-none card lg:shadow sm:border">
            <CardHeader className="px-0 sm:px-6">
              <CardTitle className="text-3xl text-secondary-color">Eligibility Criteria</CardTitle>
            </CardHeader>
            <CardContent className="px-0 sm:px-6">
              {eligibility.map((item, index) => {
                return (
                  <div key={index}>
                    {item.type === "heading" && (
                      <h2 className="mt-5 mb-2 font-semibold text-xl sm:text-xl text-secondary-color/90">
                        {item.data}
                      </h2>
                    )}
                    {item.type === "paragraph" && <p className="text-gray-600">{item.data}</p>}
                  </div>
                );
              })}
            </CardContent>
          </Card>
        </TabsContent>

        {/* FAQs Tab */}
        <TabsContent value="faqs">
          <Card className="rounded-md border-0 shadow-none card lg:shadow sm:border">
            <CardHeader className="px-0 sm:px-6">
              <CardTitle className="text-3xl text-secondary-color">FAQs</CardTitle>
            </CardHeader>
            <CardContent className="px-0 sm:px-6">
              <Accordion type="single" collapsible>
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`faq-${index}`}>
                    <AccordionTrigger >
                      {faq.data?.question || "FAQ"}
                    </AccordionTrigger>
                    <AccordionContent>
                      {faq.data?.answer || "No Answer"}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reviews">
          <Card className="rounded-md border-0 shadow-none card lg:shadow sm:border">
            <CardHeader className="px-0 sm:px-6">
              <CardTitle className="text-3xl text-secondary-color">Student Reviews</CardTitle>
            </CardHeader>
            <CardContent className="px-0 sm:px-6">
              <div className="space-y-4">
                {reviews.map((review, index) => (
                  <ReviewCard
                    key={index}
                    review={{
                      name: review.data.name,
                      rating: review.data.rating,
                      comment: review.data.comment,
                    }}
                  />
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

//   {/* Instructor Tab */}
//   <TabsContent value="instructor">
//   <Card className="rounded-md border-0 shadow-none card lg:shadow sm:border">
//     <CardHeader className="px-0 sm:px-6">
//       <CardTitle className="text-3xl">Course Instructor</CardTitle>
//     </CardHeader>
//     <CardContent className="px-0 sm:px-6">
//       <div className="flex items-center space-x-4">
//         <Avatar className="w-16 h-16">
//           <AvatarImage src={instructor.avatar} alt="Instructor" />
//           <AvatarFallback>NA</AvatarFallback>
//         </Avatar>
//         <div>
//           <h3 className="text-lg font-semibold">
//             {instructor.name || "Not Available"}
//           </h3>
//           <p className="text-sm text-gray-500">{instructor.title}</p>
//         </div>
//         <div>
//           <p className="text-sm text-gray-500">{instructor.degree}</p>
//           <p className="text-sm text-gray-500">{instructor.specialization}</p>
//         </div>
//       </div>
//     </CardContent>
//   </Card>
// </TabsContent>
