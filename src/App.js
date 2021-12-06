import "./App.css";
import Splash from "./components/splash-page/Splash";
import Projects from "./components/projects/Projects";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Link to="/">Home</Link>
      <Link to="/projects">Projects</Link>
      <Routes>
        <Route exact path="/" element={<Splash />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
}

export default App;
