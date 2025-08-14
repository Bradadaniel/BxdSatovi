import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.scss";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./routes/Home";
import Shop from "./routes/Shop";

import { GridLoader } from "react-spinners";
import AOS from "aos";
import "aos/dist/aos.css";
import Contact from "./routes/Contact";
import AboutUs from "./routes/AboutUs";
import Blog from "./routes/Blog";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 2800,
      once: true,
    });
    AOS.refresh();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="loader">
        <div className="spinner" />
        <GridLoader size={30} color="#222" />
      </div>
    );
  }

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
