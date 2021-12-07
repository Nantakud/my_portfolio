import "./App.css";
import Splash from "./components/splash-page/Splash";
import Projects from "./components/projects/Projects";
import Sidebar from "./components/sidebar/Sidebar";
import Contact from "./components/contact/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app_wrapper">
      <div className="router">
        <Router>
          <Routes>
            <Route exact path="/" element={<Splash />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
          <Sidebar />
        </Router>
      </div>
      <Contact />
    </div>
  );
}

export default App;
