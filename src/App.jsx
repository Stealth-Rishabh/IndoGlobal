import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

import Header from "./apps/header/Header";
import Landing from "./apps/LandingPage/Landing";

import './App.css'
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>

      {/* <h1>Hello</h1> */}
    </Router>
  );
}

export default App;
