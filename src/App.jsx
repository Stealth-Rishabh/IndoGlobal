import Header from "./apps/header/Header";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Header />} />
 
      </Routes>

      {/* <h1>Hello</h1> */}
    </Router>
  );
}

export default App;
