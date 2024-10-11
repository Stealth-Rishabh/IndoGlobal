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
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
