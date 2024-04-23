import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/Home/home";
import AboutPage from "./Pages/About/about";
import FindDoctorPage from "./Pages/FindDoctor/findDoctor";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<FindDoctorPage />} />
      </Routes>
    </div>
  );
}

export default App;
