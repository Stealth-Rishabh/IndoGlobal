import Heading from "../../components/Heading";
import ImgAndBreadcrumb from "../../components/ImgAndBreadcrumb";
import Container from "../../components/wrappers/Container";
import img from "../../assets/breadcrumb.png";
import Stats from "../../components/Stats";
import Newsletter from "../../components/Newsletter";
import CourseSidebar from "../../components/CourseSidebar";
import {
  ChevronRight,
  Clock,
  GraduationCap,
  Calendar,
  Users,
  BookOpen,
  Star,
  DollarSign,
  MapPin,
  Book,
  List,
  User,
  HelpCircle,
  IndianRupee
} from "lucide-react";
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
          {/* <Heading
            title="Entrepreneurship-Focused Curriculum"
            titleClassName="text-secondary-color text-left lg:text-5xl"
            subtitleClassName="text-gray-500 text-justify m-0 lg:text-lg lg:font-normal lg:max-w-full"
            subtitle="Creating a dynamic learning environment where students build entrepreneurial skills, innovative thinking, and resilience to become successful, responsible leaders and change-makers."
            className=""
          /> */}

          <CourseDetailsPage />
        </div>
      </Container>
      <Stats />
      <Newsletter />
    </div>
  );
};

export default CoursesDetails;

const COURSE_INFO = {
  title: "B.Tech Computer Science Engineering",
  badges: [
    { icon: Clock, text: "4 Years" },
    { icon: GraduationCap, text: "Bachelor's Degree" },
    { icon: Calendar, text: "Next Intake: Sept 2024" },
    { icon: Users, text: "120 students" },
    { icon: BookOpen, text: "Full-time" },
    { icon: IndianRupee, text: "10,000/year" },
    { icon: MapPin, text: "On-campus" },
  ],
  breadcrumbs: [
    { text: "Home", href: "/" },
    { text: "Courses", href: "/courses" },
    { text: "B.Tech Computer Science Engineering", current: true },
  ],
};

const CURRICULUM_YEARS = ["Year 1", "Year 2", "Year 3", "Year 4"];
const SUBJECTS = [
  "Introduction to Programming",
  "Data Structures and Algorithms",
  "Computer Organization and Architecture",
  "Discrete Mathematics",
  "Digital Logic Design",
];

const FAQS = [
  {
    question: "What are the admission requirements?",
    answer:
      "Candidates must have completed 10+2 with Physics, Chemistry, and Mathematics as core subjects, with a minimum aggregate of 60%.",
  },
  {
    question: "Is there a placement assistance program?",
    answer:
      "Yes, our college has a dedicated placement cell that assists students with internships and job placements. We have a strong network of industry partners and alumni.",
  },
  {
    question: "Are there any scholarships available?",
    answer:
      "We offer merit-based scholarships for top-performing students. Additionally, there are government scholarships available for eligible candidates.",
  },
  {
    question: "What kind of projects will I work on?",
    answer:
      "Throughout the course, you'll work on various projects including software development, web applications, mobile apps, and a final year capstone project. Many projects involve real-world problem-solving and industry collaboration.",
  },
];

const REVIEWS = [
  {
    name: "Alex Johnson",
    rating: 5,
    comment:
      "Excellent course with a perfect blend of theory and practical knowledge. The faculty is highly knowledgeable and supportive.",
  },
  {
    name: "Samantha Lee",
    rating: 4,
    comment:
      "Great curriculum that covers all the latest technologies. The project work really helped me build a strong portfolio.",
  },
  {
    name: "Rahul Sharma",
    rating: 5,
    comment:
      "The course prepared me well for the industry. I secured a great job right after graduation thanks to the skills I learned here.",
  },
];

const TABS = [
  { label: "overview", icon: <Book className="w-4 h-4" /> },
  { label: "curriculum", icon: <List className="w-4 h-4" /> },
  { label: "instructor", icon: <User className="w-4 h-4" /> },
  { label: "faqs", icon: <HelpCircle className="w-4 h-4" /> },
  { label: "reviews", icon: <Star className="w-4 h-4" /> },
];

const Breadcrumb = ({ items }) => (
  <nav className="flex mb-4 text-sm text-gray-500" aria-label="Breadcrumb">
    <ol className="inline-flex items-center space-x-1 md:space-x-3">
      {items.map((item, index) => (
        <li
          key={index}
          className={
            index > 0 ? "flex items-center" : "inline-flex items-center"
          }
        >
          {index > 0 && <ChevronRight className="w-4 h-4 text-gray-400" />}
          {item.current ? (
            <span className="ml-1 text-gray-700">{item.text}</span>
          ) : (
            <a href={item.href} className="ml-1 hover:text-gray-700">
              {item.text}
            </a>
          )}
        </li>
      ))}
    </ol>
  </nav>
);

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

function CourseDetailsPage() {
  return (
    <div className="container mx-auto">
      {/* <Breadcrumb items={COURSE_INFO.breadcrumbs} /> */}

      <h1 className="mb-4 text-3xl font-bold md:text-4xl text-secondary-color">
        {COURSE_INFO.title}
      </h1>
      <InfoBadges badges={COURSE_INFO.badges} />

      <img
        src="https://v0.dev/placeholder.svg?height=400&width=800"
        alt={COURSE_INFO.title}
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
          {TABS.map((tab) => (
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
                The B.Tech in Computer Science Engineering program is designed
                to equip students with a strong foundation in computer science
                principles and cutting-edge technologies. This comprehensive
                course covers various aspects of software development,
                algorithms, data structures, artificial intelligence, and more.
              </p>
              <h3 className="mt-4 mb-2 font-semibold">Key Highlights</h3>
              <ul className="pl-5 space-y-1 list-disc">
                {[
                  "Comprehensive curriculum covering core CS concepts and emerging technologies",
                  "Hands-on projects and internship opportunities",
                  "State-of-the-art computer labs and learning resources",
                  "Industry-experienced faculty members",
                  "Strong placement record with top tech companies",
                ].map((highlight, index) => (
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
                {CURRICULUM_YEARS.map((year, index) => (
                  <AccordionItem key={year} value={`year${index + 1}`}>
                    <AccordionTrigger>{year}</AccordionTrigger>
                    <AccordionContent>
                      <ul className="pl-5 space-y-1 list-disc">
                        {SUBJECTS.map((subject, i) => (
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
                  <h3 className="text-lg font-semibold">Dr. Jane Smith</h3>
                  <p className="text-sm text-gray-500">
                    Associate Professor of Computer Science
                  </p>
                  <p className="mt-1 text-sm">
                    Ph.D. in Computer Science from Stanford University
                  </p>
                  <p className="text-sm">
                    Specialization: Artificial Intelligence and Machine Learning
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <h4 className="mb-2 font-semibold">About the Instructor</h4>
                <p className="text-sm">
                  Dr. Jane Smith has over 15 years of experience in teaching and
                  research in computer science. She has published numerous
                  papers in top-tier conferences and journals, and has worked on
                  several industry-sponsored projects. Her teaching philosophy
                  emphasizes practical application of theoretical concepts.
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
                {FAQS.map((faq, index) => (
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
                {REVIEWS.map((review, index) => (
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
