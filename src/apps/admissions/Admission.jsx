import ImgAndBreadcrumb from "../../components/ImgAndBreadcrumb";
import img from "../../assets/breadcrumb.png";
import Container from "../../components/wrappers/Container";
import Heading from "../../components/Heading";
import AboutSidebar from "../../components/AboutSidebar";
import Stats from "../../components/Stats";
import Newsletter from "../../components/Newsletter";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
const collegeCourses = {
  postgraduate: [
    {
      name: "M.Tech Computer Science Engineering",
      duration: "Two Years",
      eligibility: "B.Tech/BE",
      type: "M.Tech",
    },
    {
      name: "M.Tech Electronics and Communication Engineering",
      duration: "Two Years",
      eligibility: "B.Tech/BE",
      type: "M.Tech",
    },
    {
      name: "M.Tech Civil Engineering",
      duration: "Two Years",
      eligibility: "B.Tech/BE",
      type: "M.Tech",
    },
    {
      name: "Master of Business Administration (M.B.A)",
      duration: "Two Years",
      eligibility: "Graduation",
      type: "MBA",
    },
  ],

  undergraduate: [
    {
      name: "B.Tech Computer Science Engineering",
      duration: "Four Years",
      eligibility: "10+2",
      type: "B.Tech",
    },
    {
      name: "B.Tech Electronics and Communication Engineering",
      duration: "Four Years",
      eligibility: "10+2",
      type: "B.Tech",
    },
    {
      name: "B.Tech Mechanical Engineering",
      duration: "Four Years",
      eligibility: "10+2",
      type: "B.Tech",
    },
    {
      name: "B.Tech Civil Engineering",
      duration: "Four Years",
      eligibility: "10+2",
      type: "B.Tech",
    },
    {
      name: "Degree Program (Direct Admission To 2nd Year B.Tech Program)",
      duration: "Three Years",
      eligibility: "Diploma (Engg)",
      type: "B.Tech",
    },
    {
      name: "B.Arch",
      duration: "Five Years",
      eligibility: "10+2",
      type: "Architecture",
    },
    {
      name: "BBA",
      duration: "Three Years",
      eligibility: "10+2",
      type: "Business",
    },
    {
      name: "BCA",
      duration: "Three Years",
      eligibility: "10+2",
      type: "Computer Applications",
    },
    {
      name: "B.Sc. Medical Laboratory Sciences(MLS)",
      duration: "Three Years",
      eligibility: "10+2",
      type: "Medical Sciences",
    },
    {
      name: "B.Sc Radiology & Imaging Technology",
      duration: "Three Years",
      eligibility: "10+2",
      type: "Medical Sciences",
    },
    {
      name: "B.Sc Operation Theatre Technology",
      duration: "Three Years",
      eligibility: "10+2",
      type: "Medical Sciences",
    },
  ],

  polytechnic: [
    {
      name: "Diploma in Mechanical Engineering",
      duration: "Three Years",
      eligibility: "10th",
      type: "Diploma",
    },
    {
      name: "Diploma in Civil Engineering",
      duration: "Three Years",
      eligibility: "10th",
      type: "Diploma",
    },
  ],
};
const breadcrumbItems = [{ href: "/", label: "Home" }, { label: "Admissions" }];

const TABS = [
  { value: "postgraduate", label: "Postgraduate" },
  { value: "undergraduate", label: "Undergraduate" },
  { value: "polytechnic", label: "Polytechnic" },
];

const Admission = () => {
  const [activeTab, setActiveTab] = useState(TABS[0].value);

  return (
    <section className="relative min-h-screen">
      <ImgAndBreadcrumb
        title="Admissions"
        imageSrc={img}
        imageAlt="Description of the image"
        breadcrumbItems={breadcrumbItems}
      />
      <Container className="container grid gap-14 relative">
        <div className="col-span-1 pt-12">
          <Heading
            title="Start Your Journey Here"
            subtitle="Apply now for these exciting programs and take the first step towards your future in education. Our admission process is designed to help you succeed."
            titleClassName="text-secondary-color text-left lg:text-5xl"
            subtitleClassName="text-gray-500 text-justify m-0 lg:text-lg lg:font-normal lg:max-w-full font-normal"
            className="lg:pb-10"
          />
          <div className="grid grid-cols-1 gap-20">
            <div className="container mx-auto">
              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="grid w-full grid-cols-3 sm:h-12">
                  {TABS.map((tab) => (
                    <TabsTrigger
                      key={tab.value}
                      value={tab.value}
                      className="data-[state=active]:bg-red-500 data-[state=active]:text-white h-full rounded-sm sm:text-base text-xs"
                    >
                      {tab.label}
                    </TabsTrigger>
                  ))}
                </TabsList>

                {TABS.map((tab) => (
                  <TabsContent
                    key={tab.value}
                    value={tab.value}
                    className="mt-6"
                  >
                    <h2 className="text-xl font-semibold mb-2 text-gray-500 pl-2 py-4">
                      {tab.label} Courses
                    </h2>
                    {renderTable(collegeCourses[tab.value])}
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          </div>
        </div>
      </Container>
      <AdmissionAbout />
      <Stats />
      <Newsletter />
    </section>
  );
};

export default Admission;

const renderTable = (courses) => (
  <Table>
    <TableHeader>
      <TableRow>
        <TableHead>S.No</TableHead>
        <TableHead>Name</TableHead>
        <TableHead>Duration</TableHead>
        <TableHead>Eligibility</TableHead>
        <TableHead>Type</TableHead>
        <TableHead className="text-center">Action</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      {courses.map((course, index) => (
        <TableRow key={index}>
          <TableCell className="text-xs sm:text-base text-gray-600">
            {index + 1}
          </TableCell>
          <TableCell className="text-xs sm:text-base text-gray-600">
            {course.name}
          </TableCell>
          <TableCell className="text-xs sm:text-base text-gray-600">
            {course.duration}
          </TableCell>
          <TableCell className="text-xs sm:text-base text-gray-600">
            {course.eligibility}
          </TableCell>
          <TableCell className="text-xs sm:text-base text-gray-600">
            {course.type}
          </TableCell>
          <TableCell className="text-center">
            <Button variant="outline" size="sm">
              Apply Now
            </Button>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

const AdmissionAbout = () => {
  return (
    <section className="ezy__about1 light py-12 md:py-24 bg-blue-950 dark:bg-[#0b1727] text-zinc-900 dark:text-white">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row gap-6 justify-center max-w-7xl mx-auto">
          <div className="md:w-1/2 flex flex-col gap-6">
            <h2 className="md:text-end text-4xl md:text-6xl  text-white leading-tight md:leading-tight font-light">
              Shaping Future Leaders Since 1996
            </h2>
            <div className="flex-grow rounded overflow-hidden h-48 relative">
              <div className="inset-0 absolute bg-gradient-to-t from-black/60 to-transparent"></div>
                <img
                  src="https://images.unsplash.com/photo-1620458738323-4148c6093433?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Admission"
                className="object-cover hover:scale-125 w-full transition-all duration-300 h-full"
              />
            </div>
          </div>
          <div className="md:w-1/2 mt-5 lg:pr-">
            <p className="text-base tracking-widest opacity-80 mb-0 text-white">
              Welcome to Indo Global Group of Colleges, where academic
              excellence meets industry relevance. Our institution has been at
              the forefront of technical and professional education, offering
              prestigious B.Tech, B.Arch, and MBA programs designed to prepare
              you for leadership roles across diverse sectors.
            </p>
            <p className="text-base tracking-widest opacity-80 mt-12 text-white">
              Our cutting-edge curriculum, combined with state-of-the-art
              facilities and experienced faculty, ensures that you receive
              education that&apos;s both comprehensive and future-ready. We focus
              on practical learning, innovation, and personal growth to help you
              achieve your career aspirations.
            </p>
            <p className="text-base tracking-widest opacity-80 mt-12 mb-0 text-white">
              Join our vibrant community of learners and become part of a legacy
              that has produced countless industry leaders. At Indo Global, we
              don't just offer education – we provide a transformative
              experience that prepares you for the challenges and opportunities
              of tomorrow.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
