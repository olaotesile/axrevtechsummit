import React from "react";
import Home from "./pages/Home";
import VisionMission from "./pages/VisionMission";
import About from "./pages/About";
import Footer from "./pages/Footer";
import Schedule from "./pages/Schedule";


const App = () => {
  return (
    <>
      <Home />
      <VisionMission />
      <About />
      <Schedule />
      <Footer /> {/* Add Footer Here */}
    </>
  );
};

export default App;
