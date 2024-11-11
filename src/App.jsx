import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

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
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        {/* <Route path="/about" element={<AboutUs/>} /> */}
        <Route path="/about/accreditation" element={<AccreditationAndTieups/>} />
        <Route path="/about/location" element={<CollegeLocation/>} />
        <Route path="/about/vision-mission" element={<VisionAndMission/>} />
        <Route path="/about/leadership" element={<Leadership/>} />
        <Route path="/about/eminent-faculty" element={<EminentFaculty/>} />
        <Route path="/admissions" element={<Admission/>} />
        <Route path="/events" element={<Event/>} />
        <Route path="/gallery" element={<Gallery/>} />
        <Route path="/placements/campus-recruitments" element={<CampusRecruitments/>} />
        <Route path="/placements/industry-speaks" element={<IndustrySpeaks/>} />
        <Route path="/placements/industry-tie-ups" element={<IndustryTieUps/>} />
        <Route path="/placements/placement-activities" element={<PlacementActivities/>} />

        <Route path="/contact-us" element={<Contact/>} />

      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
