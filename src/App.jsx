import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ProjectsPage from "./pages/ProjectsPage";
import SingleProjectPage from "./pages/SingleProjectPage"; // General component for individual projects

const basename = process.env.NODE_ENV === "production" ? "/" : "/";

const App = () => {
  return (
    <Router basename={basename}>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/projects/:projectId" element={<SingleProjectPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
