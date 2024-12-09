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
import WhyIndoGlobal from "./apps/whyIndoGlobal/WhyIndoGlobal";
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
import Spotlights from "./apps/highlights/Spotlights";
import OnlineLearningResources from "./apps/footer/OnlineLearningResources";
import SpotlightAndEvents from "./apps/highlights/SpotlightAndEvents";
import ScrollToTopWithBorder from "./components/ScrollToTopWithBorder";
import Entrepreneurship from "./apps/whyIndoGlobal/Entrepreneurship";
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
        <Route path="/" element={<Landing />} />

        {/* about page */}
        <Route
          path="/about/accreditation"
          element={<AccreditationAndTieups />}
        />
        <Route path="/about/location" element={<CollegeLocation />} />
        <Route path="/about/vision-mission" element={<VisionAndMission />} />
        <Route path="/about/leadership" element={<Leadership />} />
        <Route path="/about/eminent-faculty" element={<EminentFaculty />} />

        {/* courses page */}
        <Route path="/courses" element={<Courses />} />
        {/* <Route
          path="/courses/b.tech-in-mechanical-engineering"
          element={<CoursesDetails />}
        /> */}
        <Route path="/courses/:courseTitle" element={<CoursesDetails />} />

        {/* admissions page */}
        <Route path="/admissions" element={<Admission />} />

        {/* highlights page */}
        <Route path="/spotlights" element={<SpotlightAndEvents />} />
        {/* <Route path="/spotlights" element={<Spotlights/>} /> */}
        <Route path="/gallery" element={<Gallery />} />

        {/* placements page */}
        <Route
          path="/placements/campus-recruitments"
          element={<CampusRecruitments />}
        />
        <Route
          path="/placements/industry-speaks"
          element={<IndustrySpeaks />}
        />
        <Route
          path="/placements/industry-tie-ups"
          element={<IndustryTieUps />}
        />
        <Route
          path="/placements/placement-activities"
          element={<PlacementActivities />}
        />
        <Route path="/placements/our-recruiters" element={<OurRecruiters />} />

        {/* why indo global page */}
        <Route path="/why-indo-global" element={<WhyIndoGlobal />} />
        <Route
          path="/why-indo-global/industry-oriented-curriculum"
          element={<IndustryOrientedCurriculum />}
        />
        <Route
          path="/why-indo-global/entrepreneurship"
          element={<Entrepreneurship/>}
        />
        <Route path="/why-indo-global/sports-arena" element={<SportsArena />} />
        <Route
          path="/why-indo-global/infrastructure"
          element={<Infrastructure />}
        />
        <Route
          path="/why-indo-global/great-transportation"
          element={<Transportation />}
        />
        <Route
          path="/why-indo-global/students-security"
          element={<StudentSecurity />}
        />
        <Route
          path="/why-indo-global/aicte-spices"
          element={<AiciteSpices />}
        />
        <Route path="/why-indo-global/hostel" element={<Hostels />} />

        {/* Blogs page  */}
        <Route path="/blogs" element={<Blogs />} />
        {/* Blog details page  */}
        <Route path="/blogs/blog-details" element={<BlogDetails />} />

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

        <Route
          path="/online-learning-resources"
          element={<OnlineLearningResources />}
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
