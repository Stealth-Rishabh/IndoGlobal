import ImgAndBreadcrumb from "../../components/ImgAndBreadcrumb";
import img from "../../assets/admissionsBanner.webp";
import shaping from "../../assets/Admissions.webp";
import Container from "../../components/wrappers/Container";
import Heading from "../../components/Heading";
// import AboutSidebar from "../../components/AboutSidebar";
import Stats from "../../components/Stats";
import Newsletter from "../../components/Newsletter";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { X } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import NoPaperFormsWidget from "../../CRM/NoPaperFormsWidget";
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
  { value: "undergraduate", label: "Undergraduate" },
  { value: "postgraduate", label: "Postgraduate" },
  { value: "polytechnic", label: "Polytechnic" },
];

const Admission = ({ h1 }) => {
  const [activeTab, setActiveTab] = useState(TABS[0].value);
  const [showWidget, setShowWidget] = useState(false);
  return (
    <section className="relative min-h-screen">
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
      <ImgAndBreadcrumb
        title="Admissions"
        imageSrc={img}
        imageAlt="Description of the image"
        breadcrumbItems={breadcrumbItems}
      />
      <Container className="container relative grid gap-14">
        <div className="col-span-1 pt-12">
          <Heading
            title={h1}
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
                    <h2 className="py-4 pl-2 mb-2 text-xl font-semibold text-gray-500">
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
        <TableHead className="hidden sm:table-cell">Duration</TableHead>
        <TableHead className="hidden sm:table-cell">Eligibility</TableHead>
        <TableHead className="hidden sm:table-cell">Type</TableHead>
        <TableHead className="text-center">Action</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      {courses.map((course, index) => (
        <TableRow key={index}>
          <TableCell className="text-xs text-gray-600 sm:text-base">
            {index + 1}
          </TableCell>
          <TableCell className="text-xs text-gray-600 sm:text-base">
            {course.name}
          </TableCell>
          <TableCell className="text-xs text-gray-600 sm:text-base hidden sm:table-cell">
            {course.duration}
          </TableCell>
          <TableCell className="text-xs text-gray-600 sm:text-base hidden sm:table-cell">
            {course.eligibility}
          </TableCell>
          <TableCell className="text-xs text-gray-600 sm:text-base hidden sm:table-cell">
            {course.type}
          </TableCell>
          <TableCell className="text-center">
            <Link to="https://admissions.igef.net">
              <Button variant="outline" size="sm">
                Apply Now
              </Button>
            </Link>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

const AdmissionAbout = () => {
  return (
    <section className="ezy__about1 light py-12 md:py-24 px-6 md:px-0 bg-blue-950 dark:bg-[#0b1727] text-zinc-900 dark:text-white">
      <div className="container mx-auto">
        <div className="flex flex-col justify-center gap-6 mx-auto md:flex-row max-w-7xl">
          <div className="flex flex-col gap-6 md:w-1/2">
            <h2 className="text-4xl font-light leading-tight text-white md:text-end md:text-6xl md:leading-tight">
              Shaping Future Leaders Since 2003
            </h2>
            <div className="relative flex-grow h-48 overflow-hidden rounded">
              {/* <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent "></div> */}
              <img
                src={shaping}
                alt="Admission"
                className="object-cover w-full h-full transition-all duration-300 hover:scale-125"
              />
            </div>
          </div>
          <div className="mt-5 md:w-1/2 lg:pr-">
            <p className="mb-0 text-base tracking-widest text-white opacity-80">
              Welcome to Indo Global Group of Colleges, where academic
              excellence meets industry relevance. Our institution has been at
              the forefront of technical and professional education, offering
              prestigious B.Tech, B.Arch, and MBA programs designed to prepare
              you for leadership roles across diverse sectors.
            </p>
            <p className="mt-12 text-base tracking-widest text-white opacity-80">
              Our cutting-edge curriculum, combined with state-of-the-art
              facilities and experienced faculty, ensures that you receive
              education that&apos;s both comprehensive and future-ready. We
              focus on practical learning, innovation, and personal growth to
              help you achieve your career aspirations.
            </p>
            <p className="mt-12 mb-0 text-base tracking-widest text-white opacity-80">
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
