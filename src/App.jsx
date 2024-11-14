import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { Helmet } from 'react-helmet';
import Header from "./apps/header/Header";
import Landing from "./apps/LandingPage/Landing";

import './App.css'
import Footer from "./apps/footer/Footer";
import Contact from "./apps/contact/Contact";
// import AboutUs from "./apps/aboutPage/AboutUs";
import AccreditationAndTieups from "./apps/aboutPage/AccreditationAndTieups";
import CollegeLocation from "./apps/aboutPage/CollegeLocation";
import VisionAndMission from "./apps/aboutPage/VisionAndMission";
import Leadership from "./apps/aboutPage/Leadership";
import EminentFaculty from "./apps/aboutPage/EminentFaculty";
import Admission from "./apps/admissions/Admission";
import Event from "./apps/highlights/Event";
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
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* home page */}
        <Route path="/" element={<Landing />} />


        {/* about page */}
        <Route path="/about/accreditation" element={<AccreditationAndTieups/>} />
        <Route path="/about/location" element={<CollegeLocation/>} />
        <Route path="/about/vision-mission" element={<VisionAndMission/>} />
        <Route path="/about/leadership" element={<Leadership/>} />
        <Route path="/about/eminent-faculty" element={<EminentFaculty/>} />

        {/* admissions page */}
        <Route path="/admissions" element={<Admission/>} />

        {/* highlights page */}
        <Route path="/events" element={<Event/>} />
        <Route path="/gallery" element={<Gallery/>} />

        {/* placements page */}
        <Route path="/placements/campus-recruitments" element={<CampusRecruitments/>} />
        <Route path="/placements/industry-speaks" element={<IndustrySpeaks/>} />
        <Route path="/placements/industry-tie-ups" element={<IndustryTieUps/>} />
        <Route path="/placements/placement-activities" element={<PlacementActivities/>} />
        <Route path="/placements/our-recruiters" element={<OurRecruiters/>} />

        {/* why indo global page */}
        <Route path="/why-indo-global" element={<WhyIndoGlobal/>} />
        <Route path="/why-indo-global/industry-oriented-curriculum" element={<IndustryOrientedCurriculum/>} />
        <Route path="/why-indo-global/sports-arena" element={<SportsArena/>} />
        <Route path="/why-indo-global/infrastructure" element={<Infrastructure/>} />
        <Route path="/why-indo-global/great-transportation" element={<Transportation/>} />



        <Route path="/contact-us" element={
          <>
          <Helmet>
            <title>Contact Us</title>
          </Helmet>
          <Contact/>
          </>
          } />

      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
