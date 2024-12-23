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
import Blogs from "./apps/blogs/Blogs";
import BlogDetails from "./apps/blogs/BlogDetails";
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
    <Router className="relative" >
      <ScrollToTop />
      <ScrollToTopWithBorder />
      <Header />
      <Routes>
        {/* home page */}
        <Route path="/" element={
          <>
            <Helmet>
              <title>Indo Global Group of Colleges</title>
            </Helmet>
            <Landing />
          </>
        } />

        {/* about page */}
        <Route path="/about/accreditation" element={
          <>
            <Helmet>
              <title>Accreditation & Tie-ups | Indo Global Colleges</title>
            </Helmet>
            <AccreditationAndTieups />
          </>
        } />
        <Route path="/about/location" element={
          <>
            <Helmet>
              <title>College Location | Indo Global Colleges</title>
            </Helmet>
            <CollegeLocation />
          </>
        } />
        <Route path="/about/vision-mission" element={
          <>
            <Helmet>
              <title>Vision & Mission | Indo Global Colleges</title>
            </Helmet>
            <VisionAndMission />
          </>
        } />
        <Route path="/about/leadership" element={
          <>
            <Helmet>
              <title>Leadership | Indo Global Colleges</title>
            </Helmet>
            <Leadership />
          </>
        } />
        <Route path="/about/eminent-faculty" element={
          <>
            <Helmet>
              <title>Eminent Faculty | Indo Global Colleges</title>
            </Helmet>
            <EminentFaculty />
          </>
        } />

        {/* courses page */}
        <Route path="/courses" element={
          <>
            <Helmet>
              <title>Courses | Indo Global Colleges</title>
            </Helmet>
            <Courses />
          </>
        } />
        <Route path="/courses/:coursePath" element={
          <>
            <Helmet>
              <title>Course Details | Indo Global Colleges</title>
            </Helmet>
            <CoursesDetails />
          </>
        } />

        {/* admissions page */}
        <Route path="/admissions" element={
          <>
            <Helmet>
              <title>Admissions | Indo Global Colleges</title>
            </Helmet>
            <Admission />
          </>
        } />

        {/* highlights page */}
        <Route path="/spotlights" element={
          <>
            <Helmet>
              <title>Spotlights & Events | Indo Global Colleges</title>
            </Helmet>
            <SpotlightAndEvents />
          </>
        } />
        <Route path="/gallery" element={
          <>
            <Helmet>
              <title>Gallery | Indo Global Colleges</title>
            </Helmet>
            <Gallery />
          </>
        } />

        {/* placements page */}
        <Route path="/placements/campus-recruitments" element={
          <>
            <Helmet>
              <title>Campus Recruitments | Indo Global Colleges</title>
            </Helmet>
            <CampusRecruitments />
          </>
        } />
        <Route path="/placements/industry-speaks" element={
          <>
            <Helmet>
              <title>Industry Speaks | Indo Global Colleges</title>
            </Helmet>
            <IndustrySpeaks />
          </>
        } />
        <Route path="/placements/industry-tie-ups" element={
          <>
            <Helmet>
              <title>Industry Tie-ups | Indo Global Colleges</title>
            </Helmet>
            <IndustryTieUps />
          </>
        } />
        <Route path="/placements/placement-activities" element={
          <>
            <Helmet>
              <title>Placement Activities | Indo Global Colleges</title>
            </Helmet>
            <PlacementActivities />
          </>
        } />
        <Route path="/placements/our-recruiters" element={
          <>
            <Helmet>
              <title>Our Recruiters | Indo Global Colleges</title>
            </Helmet>
            <OurRecruiters />
          </>
        } />

        {/* why indo global page */}
        <Route path="/why-indo-global" element={
          <>
            <Helmet>
              <title>Why Indo Global | Indo Global Colleges</title>
            </Helmet>
          
          </>
        } />
        <Route path="/why-indo-global/industry-oriented-curriculum" element={
          <>
            <Helmet>
              <title>Industry Oriented Curriculum | Indo Global Colleges</title>
            </Helmet>
            <IndustryOrientedCurriculum />
          </>
        } />
        <Route path="/why-indo-global/entrepreneurship" element={
          <>
            <Helmet>
              <title>Entrepreneurship | Indo Global Colleges</title>
            </Helmet>
            <Entrepreneurship />
          </>
        } />
        <Route path="/why-indo-global/sports-arena" element={
          <>
            <Helmet>
              <title>Sports Arena | Indo Global Colleges</title>
            </Helmet>
            <SportsArena />
          </>
        } />
        <Route path="/why-indo-global/infrastructure" element={
          <>
            <Helmet>
              <title>Infrastructure | Indo Global Colleges</title>
            </Helmet>
            <Infrastructure />
          </>
        } />
        <Route path="/why-indo-global/great-transportation" element={
          <>
            <Helmet>
              <title>Transportation | Indo Global Colleges</title>
            </Helmet>
            <Transportation />
          </>
        } />
        <Route path="/why-indo-global/students-security" element={
          <>
            <Helmet>
              <title>Student Security | Indo Global Colleges</title>
            </Helmet>
            <StudentSecurity />
          </>
        } />
        <Route path="/why-indo-global/aicte-spices" element={
          <>
            <Helmet>
              <title>AICTE SPICES | Indo Global Colleges</title>
            </Helmet>
            <AiciteSpices />
          </>
        } />
        <Route path="/why-indo-global/hostel" element={
          <>
            <Helmet>
              <title>Hostels | Indo Global Colleges</title>
            </Helmet>
            <Hostels />
          </>
        } />

        {/* Blogs page */}
        <Route path="/blogs" element={
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
        } />

        {/* Career page  */}
        <Route
          path="/careers"
          element={
            <>
              <Helmet>
                <title>Career</title>
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
                <title>Contact Us</title>
              </Helmet>
              <Contact />
            </>
          }
        />

        <Route path="/online-learning-resources" element={
          <>
            <Helmet>
              <title>Online Learning Resources | Indo Global Colleges</title>
            </Helmet>
            <OnlineLearningResources />
          </>
        } />

        <Route path="/online-grievance" element={
          <>
            <Helmet>
              <title>Student Grievance | Indo Global Colleges</title>
            </Helmet>
            <StudentGrievance />
          </>
        } />
        <Route path="/alumni-login" element={
          <>
            <Helmet>
              <title>Alumni Login | Indo Global Colleges</title>
            </Helmet>
            <AlumniLogin />
          </>
        } />
        <Route path="/alumni-signup" element={
          <>
            <Helmet>
              <title>Alumni Signup | Indo Global Colleges</title>
            </Helmet>
            <AlumniSignup />
          </>
        } />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
