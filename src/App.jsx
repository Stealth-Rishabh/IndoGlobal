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
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<AboutUs/>} />
        <Route path="/contact-us" element={<Contact/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
