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
import SEO from "./components/SEO";
import {
  getSeoDataByPath,
  getCanonicalUrl,
  seoConfig,
} from "./apps/seoData/seoConfig";

const CourseRouteWrapper = () => {
  const { coursePath } = useParams();
  const seoData = getSeoDataByPath(coursePath);

  if (!seoData) {
    // Fallback SEO data if none exists for this course
    return (
      <>
        <SEO
          title="Course Details | Indo Global Colleges"
          description="Explore our course details at Indo Global Colleges"
          canonicalUrl={getCanonicalUrl(`/courses/${coursePath}`)}
        />
        <CoursesDetails />
      </>
    );
  }

  return (
    <>
      <SEO
        title={seoData.title}
        description={seoData.description}
        canonicalUrl={getCanonicalUrl(`/courses/${coursePath}`)}
      />
      <CoursesDetails />
    </>
  );
};

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
              <SEO
                title={seoConfig.home.title}
                description={seoConfig.home.description}
                canonicalUrl={getCanonicalUrl("/")}
              />
              <Landing />
            </>
          }
        />

        {/* about page */}
        <Route
          path="/about/accreditation"
          element={
            <>
              <SEO
                title={seoConfig.about.accreditation.title}
                description={seoConfig.about.accreditation.description}
                canonicalUrl={getCanonicalUrl("/about/accreditation")}
              />
              <AccreditationAndTieups />
            </>
          }
        />
        <Route
          path="/about/location"
          element={
            <>
              <SEO
                title={seoConfig.about.location.title}
                description={seoConfig.about.location.description}
                canonicalUrl={getCanonicalUrl("/about/location")}
              />
              <CollegeLocation />
            </>
          }
        />
        <Route
          path="/about/vision-mission"
          element={
            <>
              <SEO
                title={seoConfig.about.visionMission.title}
                description={seoConfig.about.visionMission.description}
                canonicalUrl={getCanonicalUrl("/about/vision-mission")}
              />
              <VisionAndMission />
            </>
          }
        />
        <Route
          path="/about/leadership"
          element={
            <>
              <SEO
                title={seoConfig.about.leadership.title}
                description={seoConfig.about.leadership.description}
                canonicalUrl={getCanonicalUrl("/about/leadership")}
              />
              <Leadership />
            </>
          }
        />
        <Route
          path="/about/eminent-faculty"
          element={
            <>
              <SEO
                title={seoConfig.about.eminentFaculty.title}
                description={seoConfig.about.eminentFaculty.description}
                canonicalUrl={getCanonicalUrl("/about/eminent-faculty")}
              />
              <EminentFaculty />
            </>
          }
        />
        <Route
          path="/about/notable-alumni"
          element={
            <>
              {/* <SEO
                title={seoConfig.about.notableAlumni.title}
                description={seoConfig.about.notableAlumni.description}
                canonicalUrl={getCanonicalUrl("/about/notable-alumni")}
              /> */}
              <NotableAlumni />
            </>
          }
        />

        {/* courses page */}
        <Route
          path="/courses"
          element={
            <>
              <SEO
                title={seoConfig.courses.index.title}
                description={seoConfig.courses.index.description}
                canonicalUrl={getCanonicalUrl("/courses")}
              />
              <Courses />
            </>
          }
        />
        <Route path="/courses/:coursePath" element={<CourseRouteWrapper />} />

        {/* admissions page */}
        <Route
          path="/admissions"
          element={
            <>
              <SEO
                title={seoConfig.admissions.title}
                description={seoConfig.admissions.description}
                canonicalUrl={getCanonicalUrl("/admissions")}
              />
              <Admission />
            </>
          }
        />

        {/* highlights page */}
        <Route
          path="/spotlights"
          element={
            <>
              <SEO
                title={seoConfig.spotlights.title}
                description={seoConfig.spotlights.description}
                canonicalUrl={getCanonicalUrl("/spotlights")}
              />
              <SpotlightAndEvents />
            </>
          }
        />
        <Route
          path="/gallery"
          element={
            <>
              <SEO
                title={seoConfig.gallery.title}
                description={seoConfig.gallery.description}
                canonicalUrl={getCanonicalUrl("/gallery")}
              />
              <Gallery />
            </>
          }
        />

        {/* placements page */}
        <Route
          path="/placements/campus-recruitments"
          element={
            <>
              <SEO
                title={seoConfig.placements.campusRecruitments.title}
                description={
                  seoConfig.placements.campusRecruitments.description
                }
                canonicalUrl={getCanonicalUrl(
                  "/placements/campus-recruitments"
                )}
              />
              <CampusRecruitments />
            </>
          }
        />
        <Route
          path="/placements/industry-speaks"
          element={
            <>
              <SEO
                title={seoConfig.placements.industrySpeaks.title}
                description={seoConfig.placements.industrySpeaks.description}
                canonicalUrl={getCanonicalUrl("/placements/industry-speaks")}
              />
              <IndustrySpeaks />
            </>
          }
        />
        <Route
          path="/placements/industry-tie-ups"
          element={
            <>
              <SEO
                title={seoConfig.placements.industryTieUps.title}
                description={seoConfig.placements.industryTieUps.description}
                canonicalUrl={getCanonicalUrl("/placements/industry-tie-ups")}
              />
              <IndustryTieUps />
            </>
          }
        />
        <Route
          path="/placements/placement-activities"
          element={
            <>
              <SEO
                title={seoConfig.placements.placementActivities.title}
                description={
                  seoConfig.placements.placementActivities.description
                }
                canonicalUrl={getCanonicalUrl(
                  "/placements/placement-activities"
                )}
              />
              <PlacementActivities />
            </>
          }
        />
        <Route
          path="/placements/our-recruiters"
          element={
            <>
              <SEO
                title={seoConfig.placements.ourRecruiters.title}
                description={seoConfig.placements.ourRecruiters.description}
                canonicalUrl={getCanonicalUrl("/placements/our-recruiters")}
              />
              <OurRecruiters />
            </>
          }
        />

        {/* why indo global page */}
        <Route
          path="/why-indo-global"
          element={
            <>
              <SEO
                title={seoConfig.whyIndoGlobal.title}
                description={seoConfig.whyIndoGlobal.description}
                canonicalUrl={getCanonicalUrl("/why-indo-global")}
              />
            </>
          }
        />
        <Route
          path="/why-indo-global/industry-oriented-curriculum"
          element={
            <>
              <SEO
                title={seoConfig.whyIndoGlobal.industryOrientedCurriculum.title}
                description={
                  seoConfig.whyIndoGlobal.industryOrientedCurriculum.description
                }
                canonicalUrl={getCanonicalUrl(
                  "/why-indo-global/industry-oriented-curriculum"
                )}
              />
              <IndustryOrientedCurriculum />
            </>
          }
        />
        <Route
          path="/why-indo-global/entrepreneurship"
          element={
            <>
              <SEO
                title={seoConfig.whyIndoGlobal.entrepreneurship.title}
                description={
                  seoConfig.whyIndoGlobal.entrepreneurship.description
                }
                canonicalUrl={getCanonicalUrl(
                  "/why-indo-global/entrepreneurship"
                )}
              />
              <Entrepreneurship />
            </>
          }
        />
        <Route
          path="/why-indo-global/sports-arena"
          element={
            <>
              <SEO
                title={seoConfig.whyIndoGlobal.sportsArena.title}
                description={seoConfig.whyIndoGlobal.sportsArena.description}
                canonicalUrl={getCanonicalUrl("/why-indo-global/sports-arena")}
              />
              <SportsArena />
            </>
          }
        />
        <Route
          path="/why-indo-global/infrastructure"
          element={
            <>
              <SEO
                title={seoConfig.whyIndoGlobal.infrastructure.title}
                description={seoConfig.whyIndoGlobal.infrastructure.description}
                canonicalUrl={getCanonicalUrl(
                  "/why-indo-global/infrastructure"
                )}
              />
              <Infrastructure />
            </>
          }
        />
        <Route
          path="/why-indo-global/great-transportation"
          element={
            <>
              <SEO
                title={seoConfig.whyIndoGlobal.greatTransportation.title}
                description={
                  seoConfig.whyIndoGlobal.greatTransportation.description
                }
                canonicalUrl={getCanonicalUrl(
                  "/why-indo-global/great-transportation"
                )}
              />
              <Transportation />
            </>
          }
        />
        <Route
          path="/why-indo-global/students-security"
          element={
            <>
              <SEO
                title={seoConfig.whyIndoGlobal.studentsSecurity.title}
                description={
                  seoConfig.whyIndoGlobal.studentsSecurity.description
                }
                canonicalUrl={getCanonicalUrl(
                  "/why-indo-global/students-security"
                )}
              />
              <StudentSecurity />
            </>
          }
        />
        <Route
          path="/why-indo-global/aicte-spices"
          element={
            <>
              <SEO
                title={seoConfig.whyIndoGlobal.aicteSpices.title}
                description={seoConfig.whyIndoGlobal.aicteSpices.description}
                canonicalUrl={getCanonicalUrl("/why-indo-global/aicte-spices")}
              />
              <AiciteSpices />
            </>
          }
        />
        <Route
          path="/why-indo-global/hostel"
          element={
            <>
              <SEO
                title={seoConfig.whyIndoGlobal.hostel.title}
                description={seoConfig.whyIndoGlobal.hostel.description}
                canonicalUrl={getCanonicalUrl("/why-indo-global/hostel")}
              />
              <Hostels />
            </>
          }
        />

        {/* Career page  */}
        <Route
          path="/careers"
          element={
            <>
              <SEO
                title={seoConfig.careers.title}
                description={seoConfig.careers.description}
                canonicalUrl={getCanonicalUrl("/careers")}
              />
              <Careers />
            </>
          }
        />

        {/* Contact us page  */}
        <Route
          path="/contact-us"
          element={
            <>
              <SEO
                title={seoConfig.contactUs.title}
                description={seoConfig.contactUs.description}
                canonicalUrl={getCanonicalUrl("/contact-us")}
              />
              <Contact />
            </>
          }
        />

        <Route
          path="/online-learning-resources"
          element={
            <>
              <SEO
                title={seoConfig.onlineLearningResources.title}
                description={seoConfig.onlineLearningResources.description}
                canonicalUrl={getCanonicalUrl("/online-learning-resources")}
              />
              <OnlineLearningResources />
            </>
          }
        />

        <Route
          path="/online-grievance"
          element={
            <>
              <SEO
                title={seoConfig.onlineGrievance.title}
                description={seoConfig.onlineGrievance.description}
                canonicalUrl={getCanonicalUrl("/online-grievance")}
              />
              <StudentGrievance />
            </>
          }
        />
        <Route
          path="/alumni-login"
          element={
            <>
              <SEO
                title={seoConfig.alumniLogin.title}
                description={seoConfig.alumniLogin.description}
                canonicalUrl={getCanonicalUrl("/alumni-login")}
              />
              <AlumniLogin />
            </>
          }
        />
        <Route
          path="/alumni-signup"
          element={
            <>
              <SEO
                title={seoConfig.alumniSignup.title}
                description={seoConfig.alumniSignup.description}
                canonicalUrl={getCanonicalUrl("/alumni-signup")}
              />
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
