import Heading from "../../components/Heading";
import ImgAndBreadcrumb from "../../components/ImgAndBreadcrumb";
import Container from "../../components/wrappers/Container";
import img from "../../assets/breadcrumb.png";
import Stats from "../../components/Stats";
import Newsletter from "../../components/Newsletter";
import AboutSidebar from "../../components/AboutSidebar";


import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CheckCircle, BookOpen, Users, Target, Lightbulb } from 'lucide-react'
import { useState } from "react";

const sidebarLinks = [
  {
    href: "/why-indo-global/industry-oriented-curriculum",
    label: "Industry Oriented Curriculum",
  },
  { href: "/why-indo-global/entrepreneurship", label: "Entrepreneurship" },
  { href: "/why-indo-global/sports-arena", label: "Sports Arena" },
  { href: "/why-indo-global/infrastructure", label: "Infrastructure" },
  {
    href: "/why-indo-global/great-transportation",
    label: "Great Transportation",
  },
  { href: "/why-indo-global/students-security", label: "Students Security" },
  { href: "/why-indo-global/aicte-spices", label: "AICTE SPICES" },
  { href: "/why-indo-global/hostel", label: "Hostel" },
];

const AiciteSpices = () => {
  const breadcrumbItems = [
    { href: "/", label: "Home" },
    { href: "/why-indo-global/aicte-spices", label: "Why Indo Global" },
    { label: "AICTE SPICES" },
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
          <AboutSidebar sidebarLinks={sidebarLinks} />
        </div>
        <div className="col-span-1 pt-12 md:col-span-3 ">
          <Heading
            title="AICTE's SPICES Program"
            titleClassName="text-secondary-color text-left lg:text-5xl"
            subtitleClassName="text-gray-500 text-justify m-0 lg:text-lg lg:font-normal lg:max-w-full"
            subtitle=" Scheme for Promoting Interests, Creativity and Ethics among Students."
            className="lg:pb-10"
          />

          <AiciteSpicesItem />
        </div>
      </Container>
      <Stats />
      <Newsletter />
    </div>
  );
};

export default AiciteSpices;


function AiciteSpicesItem() {
  const [activeTab, setActiveTab] = useState("about")

  const objectives = [
    "Enhance overall skills of students through various clubs",
    "Pursue individual interests and creative work",
    "Showcase talent and provide networking opportunities",
    "Develop teamwork, social experience, and management skills",
    "Expose students to professional ethics",
    "Serve as a platform for communication skills and out-of-the-box thinking",
    "Improve event management, leadership qualities, and public speaking",
    "Promote understanding of national culture",
    "Connect with alumni and industries for fund-raising to ensure club sustainability"
  ]

  const departments = [
    "Computer Science and Engineering",
    "Electronics and Communication Engineering",
    "Civil Engineering",
    "Mechanical Engineering",
    "MBA"
  ]

  return (
    <div className=" mx-auto p space-y-8 ">
      {/* <header className="text-center">
        <h1 className="text-4xl font-bold text-primary mb-2"></h1>
        <p className="text-xl text-muted-foreground">
          Scheme for Promoting Interests, Creativity and Ethics among Students
        </p>
      </header> */}

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="about">About</TabsTrigger>
          <TabsTrigger value="objectives">Objectives</TabsTrigger>
          <TabsTrigger value="departments">Departments</TabsTrigger>
          <TabsTrigger value="get-involved">Get Involved</TabsTrigger>
        </TabsList>
        <TabsContent value="about" className="mt-6 ">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <BookOpen className="mr-2" />
                About SPICES
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                AICTE has introduced the SPICES program to sponsor the development of student clubs, 
                aiming for the well-rounded growth of students by promoting their interests, creativity, 
                and ethics.
              </p>
              <p>
                As part of this initiative, Indo Global College of Engineering has formed various Clubs 
                and Societies for the overall development of students across multiple departments.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="objectives" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Target className="mr-2" />
                Program Objectives
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {objectives.map((objective, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>{objective}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="departments" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="mr-2" />
                Participating Departments
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {departments.map((dept, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                      {dept[0]}
                    </div>
                    <span>{dept}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="get-involved" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Lightbulb className="mr-2" />
                Get Involved
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Students are encouraged to participate in the various clubs and societies formed under 
                the SPICES program. These activities will contribute to your personal growth, skill 
                development, and overall college experience.
              </p>
              <Accordion type="single" collapsible>
                <AccordionItem value="how-to-join">
                  <AccordionTrigger>How to Join?</AccordionTrigger>
                  <AccordionContent>
                    To join a club or society under the SPICES program, contact your department coordinator 
                    or visit the student affairs office. They will provide you with information about 
                    available clubs and the registration process.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="benefits">
                  <AccordionTrigger>Benefits of Participation</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Enhance your skills and creativity</li>
                      <li>Network with peers and industry professionals</li>
                      <li>Gain leadership and management experience</li>
                      <li>Contribute to your personal and professional growth</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}