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
};
const breadcrumbItems = [{ href: "/", label: "Home" }, { label: "Admissions" }];

const TABS = [
  { value: 'polytechnic', label: 'Polytechnic' },
  { value: 'undergraduate', label: 'Undergraduate' },
  { value: 'postgraduate', label: 'Postgraduate' }
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
                <TabsList className="grid w-full grid-cols-3">
                  {TABS.map(tab => (
                    <TabsTrigger key={tab.value} value={tab.value} className="data-[state=active]:bg-red-500 data-[state=active]:text-white">
                      {tab.label}
                    </TabsTrigger>
                  ))}
                </TabsList>
                
                {TABS.map(tab => (
                  <TabsContent key={tab.value} value={tab.value} className='mt-6'>
                    <h2 className="text-xl font-semibold mb-2 text-gray-600">
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
        <TableHead>Action</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      {courses.map((course, index) => (
        <TableRow key={index}>
          <TableCell>{index + 1}</TableCell>
          <TableCell>{course.name}</TableCell>
          <TableCell>{course.duration}</TableCell>
          <TableCell>{course.eligibility}</TableCell>
          <TableCell>{course.type}</TableCell>
          <TableCell>
            <Button variant="outline" size="sm">
              Apply Now
            </Button>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);
