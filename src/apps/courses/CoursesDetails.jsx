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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {COURSE_DETAILS} from "./course-details"
import {Star} from "lucide-react";

const CoursesDetails = () => {

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
      <Container className="container grid grid-cols-1 md:grid-cols-4 gap-14">
        <div className="self-start md:sticky md:top-5">
          <CourseSidebar />
        </div>
        <div className="col-span-1 pt-12 md:col-span-3">
 
          <CourseDetailsPage  {...COURSE_DETAILS}/>
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

function CourseDetailsPage({badges,title,overview,curriculumYears,subjects,faqs,instructor,reviews,tabs,}) {
  return (
    <div className="container mx-auto">
      {/* <Breadcrumb items={breadcrumbs} /> */}

      <h1 className="mb-4 text-3xl font-bold md:text-4xl text-secondary-color">
        {title}
      </h1>
      <InfoBadges badges={badges} />

      <img
        src="https://v0.dev/placeholder.svg?height=400&width=800"
        alt={title}
        className="object-cover w-full h-64 mb-6 rounded-lg"
      />

      <div className="flex flex-wrap gap-4 mb-8">
        <Button className="flex-grow sm:flex-grow-0">Apply Now</Button>
        <Button variant="outline" className="flex-grow sm:flex-grow-0">
          Download Brochure
        </Button>
      </div>

      <Tabs defaultValue="overview" className="mb-8">
        <TabsList className="grid w-full grid-cols-2 gap-1 mb-4 md:grid-cols-5 sm:h-12 h-max sm:gap-0 ">
          {tabs.map((tab) => (
            <TabsTrigger
              key={tab}
              value={tab.label}
              className="data-[state=active]:bg-gray-800  data-[state=active]:text-white sm:h-full rounded-sm"
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.label.charAt(0).toUpperCase() + tab.label.slice(1)}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value="overview" className="">
          <Card className="border-0 rounded-md shadow-none card lg:shadow sm:border">
            <CardHeader className="px-0 sm:px-6">
              <CardTitle className="px-0 text-3xl">Course Overview</CardTitle>
            </CardHeader>
            <CardContent className="px-0 sm:px-6">
              <p>
                {overview.description}
              </p>
              <h3 className="mt-4 mb-2 font-semibold">Key Highlights</h3>
              <ul className="pl-5 space-y-1 list-disc">
                {overview.overviewHighlights.map((highlight, index) => (
                  <li key={index}>{highlight}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="curriculum">
          <Card className="border-0 rounded-md shadow-none card lg:shadow sm:border">
            <CardHeader className="px-0 sm:px-6">
              <CardTitle className="text-3xl">Course Curriculum</CardTitle>
            </CardHeader>
            <CardContent className="px-0 sm:px-6">
              <Accordion type="single" collapsible className="w-full">
                {curriculumYears.map((year, index) => (
                  <AccordionItem key={year} value={`year${index + 1}`}>
                    <AccordionTrigger>{year}</AccordionTrigger>
                    <AccordionContent>
                      <ul className="pl-5 space-y-1 list-disc">
                        {subjects.map((subject, i) => (
                          <li key={i}>{subject}</li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="instructor">
          <Card className="border-0 rounded-md shadow-none card lg:shadow sm:border">
            <CardHeader className="px-0 sm:px-6">
              <CardTitle className="text-3xl">Course Instructor</CardTitle>
            </CardHeader>
            <CardContent className="px-0 sm:px-6">
              <div className="flex items-center space-x-4">
                <Avatar className="w-16 h-16">
                  <AvatarImage
                    src="/placeholder.svg?height=64&width=64"
                    alt="Dr. Jane Smith"
                  />
                  <AvatarFallback>JS</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-lg font-semibold">{instructor.name}</h3>
                  <p className="text-sm text-gray-500">
                   {instructor.title}
                  </p>
                  <p className="mt-1 text-sm">
                    {instructor.degree}
                  </p>
                  <p className="text-sm">
                   {instructor.specialization}
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <h4 className="mb-2 font-semibold">About the Instructor</h4>
                <p className="text-sm">
                  {instructor.bio}
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="faqs">
          <Card className="border-0 rounded-md shadow-none card lg:shadow sm:border">
            <CardHeader className="px-0 sm:px-6">
              <CardTitle className="text-3xl">
                Frequently Asked Questions
              </CardTitle>
            </CardHeader>
            <CardContent className="px-0 sm:px-6">
              <Accordion type="single" collapsible>
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`faq-${index}`}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reviews">
          <Card className="border-0 rounded-md shadow-none card lg:shadow sm:border">
            <CardHeader className="px-0 sm:px-6">
              <CardTitle className="text-3xl">Student Reviews</CardTitle>
            </CardHeader>
            <CardContent className="px-0 sm:px-6">
              <div className="space-y-4">
                {reviews.map((review, index) => (
                  <ReviewCard key={index} review={review} />
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
