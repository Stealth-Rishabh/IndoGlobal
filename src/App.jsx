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
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/contact-us" element={<Contact/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
