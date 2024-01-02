import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./components/home";
import About from "./components/about";
import Events from "./components/events";
import Contact from "./components/contact";
import Academics from "./components/academics";
import PhotoGallery from "./components/photogallery";
import Alumini from "./components/alumini";
import History from "./components/history";

function App() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />

          <Route path="/about" element={<About />} />

          <Route path="/history" element={<History />} />

          <Route path="/academics" element={<Academics />} />

          <Route path="/alumini" element={<Alumini />} />

          <Route path="/photogallery" element={<PhotoGallery />} />

          <Route path="/events" element={<Events />} />

          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
