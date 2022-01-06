import "./App.scss";
import Splash from "./components/splash-page/Splash";
import Projects from "./components/projects/Projects";
import Sidebar from "./components/sidebar/Sidebar";
import Navbar from "./components/navbar/Navbar";
import Contact from "./components/contact/Contact";
import About from "./components/about/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app_wrapper">
      <div className="router">
        <Router>
          <Navbar />
          <Routes className="router-container">
            <Route exact path="/" element={<Splash />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
          </Routes>
          {/* <Sidebar /> */}
        </Router>
      </div>
      <Contact />
    </div>
  );
}

export default App;
