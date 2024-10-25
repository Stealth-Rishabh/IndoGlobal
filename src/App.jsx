import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

import Header from "./apps/header/Header";
import Landing from "./apps/landingPage/Landing";

import './App.css'
import Footer from "./apps/footer/Footer";
import Contact from "./apps/contact/Contact";
import AboutUs from "./apps/aboutPage/AboutUs";
import AccreditationAndTieups from "./apps/aboutPage/AccreditationAndTieups";
import CollegeLocation from "./apps/aboutPage/CollegeLocation";
import VisionAndMission from "./apps/aboutPage/VisionAndMission";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<AboutUs/>} />
        <Route path="/about/accreditation" element={<AccreditationAndTieups/>} />
        <Route path="/about/location" element={<CollegeLocation/>} />
        <Route path="/about/vision-mission" element={<VisionAndMission/>} />
        <Route path="/contact-us" element={<Contact/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
