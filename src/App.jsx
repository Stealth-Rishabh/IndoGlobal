import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  useParams,
} from "react-router-dom";

import { useEffect } from "react";

import { Helmet } from "react-helmet";
import Header from "./apps/header/Header";
import Landing from "./apps/LandingPage/Landing";

import "./App.css";
import Footer from "./apps/footer/Footer";
import Contact from "./apps/contact/Contact";
// import AboutUs from "./apps/aboutPage/AboutUs";
import AccreditationAndTieups from "./apps/aboutPage/AccreditationAndTieups";
import CollegeLocation from "./apps/aboutPage/CollegeLocation";
import VisionAndMission from "./apps/aboutPage/VisionAndMission";
import Leadership from "./apps/aboutPage/Leadership";
import EminentFaculty from "./apps/aboutPage/EminentFaculty";
import NotableAlumni from "./apps/aboutPage/NotableAlumni";
import Admission from "./apps/admissions/Admission";
// import Event from "./apps/highlights/Event";
import Gallery from "./apps/highlights/Gallery";

import CampusRecruitments from "./apps/placements/CampusRecruitments";
import IndustrySpeaks from "./apps/placements/IndustrySpeaks";
import IndustryTieUps from "./apps/placements/IndustryTieUps";
import PlacementActivities from "./apps/placements/PlacementActivities";
import OurRecruiters from "./apps/placements/OurRecruiters";
// import WhyIndoGlobal from "./apps/whyIndoGlobal/WhyIndoGlobal";
import IndustryOrientedCurriculum from "./apps/whyIndoGlobal/IndustryOrientedCurriculum";
import SportsArena from "./apps/whyIndoGlobal/SportsArena";
import Infrastructure from "./apps/whyIndoGlobal/Infrastructure";
import Transportation from "./apps/whyIndoGlobal/Transportation";
import StudentSecurity from "./apps/whyIndoGlobal/StudentSecurity";
import AiciteSpices from "./apps/whyIndoGlobal/AiciteSpices";
import Hostels from "./apps/whyIndoGlobal/Hostels";
import Courses from "./apps/courses/Courses";
import CoursesDetails from "./apps/courses/CoursesDetails";
// import Blogs from "./apps/blogs/Blogs";
// import BlogDetails from "./apps/blogs/BlogDetails";
import Careers from "./apps/careers/Careers";
// import Spotlights from "./apps/highlights/Spotlights";
import OnlineLearningResources from "./apps/footer/OnlineLearningResources";
import SpotlightAndEvents from "./apps/highlights/SpotlightAndEvents";
import ScrollToTopWithBorder from "./components/ScrollToTopWithBorder";
import Entrepreneurship from "./apps/whyIndoGlobal/Entrepreneurship";
import StudentGrievance from "./apps/footer/StudentGrievance";
import AlumniLogin from "./apps/footer/AlumniLogin";
import AlumniSignup from "./apps/footer/AlumniSignup";
function App() {
  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  };
  return (
    // <Router className="relative" basename="/IndoGlobal">
    <Router className="relative">
      <ScrollToTop />
      <ScrollToTopWithBorder />
      <Header />
      <Routes>
        {/* home page */}
        <Route
          path="/"
          element={
            <>
              <Helmet>
                <title>
                  Best Architecture & Engineering College in Chandigarh | IGEF
                </title>
                <meta
                  name="description"
                  content="Join Indo Global Group of Colleges, the best architecture & engineering college in Chandigarh. Explore B.Tech, MBA, Polytechnic & more. Apply today!"
                />
              </Helmet>
              <Landing />
            </>
          }
        />

        {/* about page */}
        <Route
          path="/about/accreditation"
          element={
            <>
              <Helmet>
                <title>
                  IGEF Accreditation | Recognized Excellence in Education
                </title>
                <meta
                  name="description"
                  content="Explore the accreditations of IGEF, highlighting our commitment to academic excellence, global standards, and quality education for a brighter future."
                />
              </Helmet>
              <AccreditationAndTieups />
            </>
          }
        />
        <Route
          path="/about/location"
          element={
            <>
              <Helmet>
                <title>
                  Location of Indo Global Education Foundation | IGEF Campus
                  Details
                </title>
                <meta
                  name="description"
                  content="Explore the location of the Indo Global Education Foundation (IGEF). Discover campus details, accessibility, and directions to our vibrant learning hub."
                />
              </Helmet>
              <CollegeLocation />
            </>
          }
        />
        <Route
          path="/about/vision-mission"
          element={
            <>
              <Helmet>
                <title>
                  Vision and Mission | Indo Global Group of Colleges
                </title>
                <meta
                  name="description"
                  content="Discover the vision and mission of Indo Global Group of Colleges, fostering academic excellence and innovation for future leaders in education and industry."
                />
              </Helmet>
              <VisionAndMission />
            </>
          }
        />
        <Route
          path="/about/leadership"
          element={
            <>
              <Helmet>
                <title>Leadership at IGEF | Meet Our Visionary Team</title>
                <meta
                  name="description"
                  content="Discover the leadership team of IGEF dedicated to excellence in education. Learn about our vision, mission, and commitment to shaping future leaders."
                />
              </Helmet>
              <Leadership />
            </>
          }
        />
        <Route
          path="/about/eminent-faculty"
          element={
            <>
              <Helmet>
                <title>
                  Eminent Faculty at Indo Global Group of Colleges | IGEF
                </title>
                <meta
                  name="description"
                  content="Discover the experienced and accomplished faculty at Indo Global Group of Colleges. Learn how their expertise shapes future-ready professionals."
                />
              </Helmet>
              <EminentFaculty />
            </>
          }
        />
        <Route
          path="/about/notable-alumni"
          element={
            <>
              <Helmet>
                <title>Notable Alumni | Indo Global Colleges</title>
                <meta
                  name="description"
                  content="Meet our notable alumni who have excelled in their fields and contributed to society."
                />
              </Helmet>
              <NotableAlumni />
            </>
          }
        />

        {/* courses page */}
        <Route
          path="/courses"
          element={
            <>
              <Helmet>
                <title>
                  Explore Courses at Indo Global College - Top College in
                  Chandigarh
                </title>
                <meta
                  name="description"
                  content="Check out the wide range of courses offered by Indo Global College, a leading engineering and architecture college in Chandigarh. Enroll in your dream course today!"
                />
              </Helmet>
              <Courses />
            </>
          }
        />
        <Route
          path="/courses/:coursePath"
          element={
            <>
              <Helmet>
                <title>Course Details | Indo Global Colleges</title>
                <meta
                  name="description"
                  content="Get detailed information about the course you are interested in at Indo Global College."
                />
              </Helmet>
              <CoursesDetails />
            </>
          }
        />

        {/* admissions page */}
        <Route
          path="/admissions"
          element={
            <>
              <Helmet>
                <title>
                  Admissions - IGEF Institute | Apply Now for Your Future
                </title>
                <meta
                  name="description"
                  content="Explore admission details for IGEF Institute. Apply for undergraduate and postgraduate courses. Start your educational journey today!"
                />
              </Helmet>
              <Admission />
            </>
          }
        />

        {/* highlights page */}
        <Route
          path="/spotlights"
          element={
            <>
              <Helmet>
                <title>
                  Spotlights | IGEF - Discover Inspirational Stories &
                  Achievements
                </title>
                <meta
                  name="description"
                  content="Explore IGEF's Spotlights section to read inspiring stories, achievements, and highlights from our community, showcasing excellence in various fields."
                />
              </Helmet>
              <SpotlightAndEvents />
            </>
          }
        />
        <Route
          path="/gallery"
          element={
            <>
              <Helmet>
                <title>Gallery - IGEF | Capturing Moments of Excellence</title>
                <meta
                  name="description"
                  content="Explore the gallery of IGEF showcasing events, achievements, and memorable moments. A visual journey of success and excellence at IGEF."
                />
              </Helmet>
              <Gallery />
            </>
          }
        />

        {/* placements page */}
        <Route
          path="/placements/campus-recruitments"
          element={
            <>
              <Helmet>
                <title>
                  Campus Recruitments at Indo Global College - Placement Drive
                </title>
                <meta
                  name="description"
                  content="Explore the campus recruitment opportunities at Indo Global College, one of the top engineering and architecture colleges in Chandigarh. Secure your future today!"
                />
              </Helmet>
              <CampusRecruitments />
            </>
          }
        />
        <Route
          path="/placements/industry-speaks"
          element={
            <>
              <Helmet>
                <title>
                  Industry Speaks - Placement Opportunities at Indo Global
                  College
                </title>
                <meta
                  name="description"
                  content="Explore placement opportunities and industry insights at Indo Global College, one of the best engineering and architecture colleges in Chandigarh."
                />
              </Helmet>
              <IndustrySpeaks />
            </>
          }
        />
        <Route
          path="/placements/industry-tie-ups"
          element={
            <>
              <Helmet>
                <title>
                  Industry Tie-Ups at Indo Global College - Top Placement
                  Support
                </title>
                <meta
                  name="description"
                  content="Explore industry tie-ups at Indo Global College, enhancing placements for students in engineering, architecture, and other top courses in Chandigarh."
                />
              </Helmet>
              <IndustryTieUps />
            </>
          }
        />
        <Route
          path="/placements/placement-activities"
          element={
            <>
              <Helmet>
                <title>
                  Top Placement Activities at Indo Global College, Chandigarh
                </title>
                <meta
                  name="description"
                  content="Explore placement activities at Indo Global College in Chandigarh. We provide excellent career opportunities for students in engineering, architecture, and more."
                />
              </Helmet>
              <PlacementActivities />
            </>
          }
        />
        <Route
          path="/placements/our-recruiters"
          element={
            <>
              <Helmet>
                <title>
                  Top Recruiters at Indo Global College - Placements & Careers
                </title>
                <meta
                  name="description"
                  content="Explore the top recruiters at Indo Global College, Chandigarh. We connect students with leading companies for placements in engineering, architecture, and more."
                />
              </Helmet>
              <OurRecruiters />
            </>
          }
        />

        {/* why indo global page */}
        <Route
          path="/why-indo-global"
          element={
            <>
              <Helmet>
                <title>Why Indo Global | Indo Global Colleges</title>
                <meta
                  name="description"
                  content="Discover why Indo Global College is the best choice for your education in architecture and engineering."
                />
              </Helmet>
            </>
          }
        />
        <Route
          path="/why-indo-global/industry-oriented-curriculum"
          element={
            <>
              <Helmet>
                <title>
                  Industry-Oriented Curriculum at Indo Global College
                </title>
                <meta
                  name="description"
                  content="Discover Indo Global's industry-oriented curriculum, offering best-in-class architecture and engineering courses in Chandigarh. Prepare for a successful career in design & tech."
                />
              </Helmet>
              <IndustryOrientedCurriculum />
            </>
          }
        />
        <Route
          path="/why-indo-global/entrepreneurship"
          element={
            <>
              <Helmet>
                <title>Entrepreneurship | Indo Global Colleges</title>
                <meta
                  name="description"
                  content="Explore the entrepreneurship programs at Indo Global College, designed to foster innovation and business acumen."
                />
              </Helmet>
              <Entrepreneurship />
            </>
          }
        />
        <Route
          path="/why-indo-global/sports-arena"
          element={
            <>
              <Helmet>
                <title>
                  Sports Arena at Indo Global - Top Architecture College in
                  India
                </title>
                <meta
                  name="description"
                  content="Explore the state-of-the-art sports arena at Indo Global College, one of the top architecture colleges in Chandigarh, offering world-class facilities."
                />
              </Helmet>
              <SportsArena />
            </>
          }
        />
        <Route
          path="/why-indo-global/infrastructure"
          element={
            <>
              <Helmet>
                <title>
                  Best Architecture College in India | Indo Global
                  Infrastructure
                </title>
                <meta
                  name="description"
                  content="Discover the best architecture colleges in India. Indo Global College offers top courses and infrastructure for aspiring architects in Chandigarh."
                />
              </Helmet>
              <Infrastructure />
            </>
          }
        />
        <Route
          path="/why-indo-global/great-transportation"
          element={
            <>
              <Helmet>
                <title>
                  Great Transportation at Indo Global College, Chandigarh
                </title>
                <meta
                  name="description"
                  content="Explore excellent transportation services at Indo Global College, Chandigarh, making it easy for students to commute to the best engineering and architecture colleges."
                />
              </Helmet>
              <Transportation />
            </>
          }
        />
        <Route
          path="/why-indo-global/students-security"
          element={
            <>
              <Helmet>
                <title>
                  Student Security at Indo Global College - Safe Campus
                </title>
                <meta
                  name="description"
                  content="Experience a secure learning environment at Indo Global College, one of the top colleges in Chandigarh. Prioritizing student safety and well-being."
                />
              </Helmet>
              <StudentSecurity />
            </>
          }
        />
        <Route
          path="/why-indo-global/aicte-spices"
          element={
            <>
              <Helmet>
                <title>
                  AICTE SPICES Program at Indo Global College - Chandigarh
                </title>
                <meta
                  name="description"
                  content="Join Indo Global College, Chandigarh, for AICTE SPICES Program. A top architecture and engineering college offering the best education in various disciplines."
                />
              </Helmet>
              <AiciteSpices />
            </>
          }
        />
        <Route
          path="/why-indo-global/hostel"
          element={
            <>
              <Helmet>
                <title>
                  Hostel Facilities at Indo Global College - Best in Chandigarh
                </title>
                <meta
                  name="description"
                  content="Experience top-class hostel facilities at Indo Global College, offering safe, comfortable, and affordable accommodations for students in Chandigarh."
                />
              </Helmet>
              <Hostels />
            </>
          }
        />

        {/* Career page  */}
        <Route
          path="/careers"
          element={
            <>
              <Helmet>
                <title>Career</title>
                <meta
                  name="description"
                  content="Explore career opportunities and pathways at Indo Global College."
                />
              </Helmet>
              <Careers />
            </>
          }
        />

        {/* Contact us page  */}
        <Route
          path="/contact-us"
          element={
            <>
              <Helmet>
                <title>
                  Contact IGEF - Reach Out to Us for Queries and Assistance
                </title>
                <meta
                  name="description"
                  content="Get in touch with the IGEF team for any queries, assistance, or information. Fill out the contact form or call us to connect. We're here to help you!"
                />
              </Helmet>
              <Contact />
            </>
          }
        />

        <Route
          path="/online-learning-resources"
          element={
            <>
              <Helmet>
                <title>
                  Online Learning Resources - Indo Global Engineering College
                </title>
                <meta
                  name="description"
                  content="Explore top online learning resources at Indo Global College. Enhance your skills in architecture, engineering, and more with our expert-led programs."
                />
              </Helmet>
              <OnlineLearningResources />
            </>
          }
        />

        <Route
          path="/online-grievance"
          element={
            <>
              <Helmet>
                <title>
                  Online Grievance Redressal System - Indo Global College
                </title>
                <meta
                  name="description"
                  content="Submit your grievances easily with Indo Global College's online grievance redressal system. We value your feedback for a better academic environment."
                />
              </Helmet>
              <StudentGrievance />
            </>
          }
        />
        <Route
          path="/alumni-login"
          element={
            <>
              <Helmet>
                <title>
                  IGEF Alumni Login | Connect with Your Alumni Network
                </title>
                <meta
                  name="description"
                  content="Login to the IGEF Alumni Portal to reconnect with peers, explore opportunities, and stay updated on alumni events. Join your community today!"
                />
              </Helmet>
              <AlumniLogin />
            </>
          }
        />
        <Route
          path="/alumni-signup"
          element={
            <>
              <Helmet>
                <title>Alumni Signup | Indo Global Colleges</title>
                <meta
                  name="description"
                  content="Sign up for the IGEF Alumni Portal to stay connected and access exclusive alumni resources."
                />
              </Helmet>
              <AlumniSignup />
            </>
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

{
  /* Blogs page */
}
{
  /* <Route path="/blogs" element={
          <>
            <Helmet>
              <title>Blogs | Indo Global Colleges</title>
            </Helmet>
            <Blogs />
          </>
        } />
        <Route path="/blogs/blog-details" element={
          <>
            <Helmet>
              <title>Blog Details | Indo Global Colleges</title>
            </Helmet>
            <BlogDetails />
          </>
        } /> */
}
