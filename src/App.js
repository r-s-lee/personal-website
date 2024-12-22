import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
// import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import Random from "./pages/Random";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" exact element={<About />} />
          {/* <Route path="/contact" exact element={<Contact />} /> */}
          <Route path="/random" exact element={<Random />} />
          <Route path="/resume" exact element={<Resume />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
