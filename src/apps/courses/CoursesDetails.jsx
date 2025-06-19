/* eslint-disable react/prop-types */
import ImgAndBreadcrumb from "../../components/ImgAndBreadcrumb";
import Container from "../../components/wrappers/Container";
import img from "../../assets/coursesBanner.webp";
import { useState } from "react";
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
import { Star, CheckSquare, X } from "lucide-react";
import { Link, useParams } from "react-router-dom";

import NoPaperFormsWidget from "../../CRM/NoPaperFormsWidget";
import Brochure from "../../assets/pdfs/igc_pamphlet.pdf";
import { seoConfig } from "../seoData/seoConfig";
import SEO from "../../components/SEO";
import { getCanonicalUrl } from "../seoData/seoConfig";

const CoursesDetails = () => {
  const [showWidget, setShowWidget] = useState(false);
  const { coursePath } = useParams();
  const courseData = COURSE_DETAILS.find(
    (course) => course.path === coursePath
  );

  // Get SEO data directly from seoConfig instead of using getMetadata
  const seoData = seoConfig.courses.paths[coursePath];

  if (!courseData) {
    return (
      <>
        <SEO
          title="Course Not Found | Indo Global Colleges"
          description="The requested course could not be found."
          canonicalUrl={getCanonicalUrl(`/courses/${coursePath}`)}
        />
        <div>Course not found</div>
      </>
    );
  }

  const breadcrumbItems = [
    { href: "/", label: "Home" },
    { href: "/courses", label: "Courses" },
    { label: courseData.title },
  ];

  return (
    <section className="relative">
      <SEO
        title={seoData?.title || `${courseData.title} | Indo Global Colleges`}
        description={
          seoData?.description ||
          `Learn more about ${courseData.title} at Indo Global Colleges`
        }
        canonicalUrl={getCanonicalUrl(`/courses/${coursePath}`)}
      />
      <button
        onClick={() => setShowWidget(!showWidget)}
        className={`fixed  top-[30%] -right-10 translate-y-1/2 z-[9998] bg-primary-color text-white px-4 py-2 rounded-tr-md rounded-tl-md shadow-lg hover:bg-primary-color/90 -rotate-90 ${
          showWidget ? "hidden" : ""
        }`}
      >
        Quick Enquiry
      </button>
      <X
        onClick={() => setShowWidget(false)}
        className={`fixed cursor-pointer top-[25%] sm:top-[31%] right-8 translate-y-1/2 z-[9998] bg-white text-secondary-color w-7 h-7  p-1 rounded-sm  shadow-lg hover:bg-white/90 -rotate-90 ${
          showWidget ? "" : "hidden"
        }`}
      />

      {showWidget && (
        <NoPaperFormsWidget className="fixed top-0 right-0 translate-y-1/2 z-[99]" />
      )}
      <div className="relative min-h-screen">
        <ImgAndBreadcrumb
          title={courseData.group}
          imageSrc={img}
          imageAlt="Description of the image"
          breadcrumbItems={breadcrumbItems}
        />
        <Container className="container grid grid-cols-1 gap-14 md:grid-cols-4">
          <div className="self-start hidden md:block md:sticky md:top-5">
            <CourseSidebar />
          </div>
          <div className="col-span-1 pt-12 md:col-span-3">
            <CourseDetailsPage {...courseData} h1={seoData.h1} />
          </div>
        </Container>
        {/* <Stats /> */}
        {/* <Newsletter /> */}
      </div>
    </section>
  );
};

export default CoursesDetails;

const InfoBadges = ({ badges }) => (
  <div className="flex flex-wrap gap-4 mb-6">
    {badges.map((badge, index) => (
      <Badge
        key={index}
        variant="secondary"
        className="flex items-center gap-1"
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
    <div className="flex items-center justify-between">
      <h4 className="font-semibold">{review.name}</h4>
      <StarRating rating={review.rating} />
    </div>
    <p className="mt-1 text-sm">{review.comment}</p>
  </div>
);

// Validate `COURSE_DETAILS` data before using it
function CourseDetailsPage({ badges = [], title = "", image, tabs = [], h1 }) {
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
        {h1}
      </h1>
      <InfoBadges badges={badges} />

      <img
        src={image}
        alt={title}
        className="object-cover w-full mb-6 rounded-lg aspect-video sm:aspect-auto sm:h-96"
      />

      <div className="flex flex-wrap gap-4 mb-8">
        <Link to="https://admissions.igef.net">
          <Button className="flex-grow sm:flex-grow-0">Apply Now</Button>
        </Link>
        <a href={Brochure} target="_blank">
          <Button variant="outline" className="flex-grow sm:flex-grow-0">
            Download Brochure
          </Button>
        </a>
      </div>

      <Tabs defaultValue="overview" className="mb-8">
        <TabsList className="grid w-full grid-cols-2 gap-1 mb-4 md:grid-cols-5 sm:h-12 h-max sm:gap-0">
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
          <Card className="border-0 rounded-md shadow-none card lg:shadow sm:border">
            <CardHeader className="px-0 sm:px-6">
              <CardTitle className="px-0 text-3xl text-secondary-color">
                Course Overview
              </CardTitle>
            </CardHeader>
            <CardContent className="px-0 sm:px-6">
              {overview.map((item, index) => {
                return (
                  <div key={index}>
                    {item.type === "heading" && (
                      <h2 className="mt-6 mb-3 text-xl font-semibold sm:text-2xl text-secondary-color/90">
                        {item.data}
                      </h2>
                    )}
                    {item.type === "sub-heading" && (
                      <h3 className="mt-6 mb-3 text-lg font-semibold sm:text-lg text-secondary-color/80">
                        {item.data}
                      </h3>
                    )}
                    {item.type === "paragraph" && (
                      <p className="text-sm text-gray-700 sm:text-base">
                        {item.data}
                      </p>
                    )}
                    {item.type === "list" && (
                      <ul className="grid items-start grid-cols-1 gap-4 mb-4 list-disc  space- sm:grid-cols-2 justify-items-start">
                        {item.data.map((item, index) => (
                          <li
                            key={index}
                            className="flex flex-row items-start justify-start text-sm text-gray-600 list-none sm:text-base"
                          >
                            <span className="flex items-center w-6 h-6 mr-2 sm:mt-1 sm:w-4 sm:h-4 ">
                              <CheckSquare className="w-4 h-4 sm:w-6 sm:h-6" />
                            </span>
                            <div className="text-sm text-gray-600 sm:text-base">
                              {item}
                            </div>
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
          <Card className="border-0 rounded-md shadow-none card lg:shadow sm:border">
            <CardHeader className="px-0 sm:px-6">
              <CardTitle className="text-3xl text-secondary-color">
                Course Curriculum
              </CardTitle>
            </CardHeader>
            <CardContent className="px-0 sm:px-6">
              <Accordion type="single" collapsible className="w-full">
                {subjects.map((subject, index) => (
                  <AccordionItem key={subject} value={`subject${index + 1}`}>
                    <AccordionTrigger className="text-lg text-gray-600">
                      {subject.year || subject.semester}
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="pl-5 space-y-1 list-disc">
                        {(subject.data || subject.subjects || []).map(
                          (syllabus, i) => (
                            <li key={i} className="text-gray-500 list-decimal">
                              {syllabus}
                            </li>
                          )
                        )}
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
          <Card className="border-0 rounded-md shadow-none card lg:shadow sm:border">
            <CardHeader className="px-0 sm:px-6">
              <CardTitle className="text-3xl text-secondary-color">
                Eligibility Criteria
              </CardTitle>
            </CardHeader>
            <CardContent className="px-0 sm:px-6">
              {eligibility.map((item, index) => {
                return (
                  <div key={index}>
                    {item.type === "heading" && (
                      <h2 className="mt-5 mb-2 text-xl font-semibold sm:text-xl text-secondary-color/90">
                        {item.data}
                      </h2>
                    )}
                    {item.type === "paragraph" && (
                      <p className="text-sm text-gray-600 sm:text-base">
                        {item.data}
                      </p>
                    )}
                  </div>
                );
              })}
            </CardContent>
          </Card>
        </TabsContent>

        {/* FAQs Tab */}
        <TabsContent value="faqs">
          <Card className="border-0 rounded-md shadow-none card lg:shadow sm:border">
            <CardHeader className="px-0 sm:px-6">
              <CardTitle className="text-3xl text-secondary-color">
                FAQs
              </CardTitle>
            </CardHeader>
            <CardContent className="px-0 sm:px-6">
              <Accordion type="single" collapsible>
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`faq-${index}`}>
                    <AccordionTrigger>
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
          <Card className="border-0 rounded-md shadow-none card lg:shadow sm:border">
            <CardHeader className="px-0 sm:px-6">
              <CardTitle className="text-3xl text-secondary-color">
                Student Reviews
              </CardTitle>
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
//   <Card className="border-0 rounded-md shadow-none card lg:shadow sm:border">
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
