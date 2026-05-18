// src/routes/AppRoutes.jsx

import { BrowserRouter, Route, Routes } from "react-router-dom";

// Public Pages
import NavBar from "../components/common/NavBar";
import AboutPage from "../pages/public/AboutPage";
import ContactPage from "../pages/public/ContactPage";
import HomePage from "../pages/public/HomePage";
import ServicePage from "../pages/public/ServicePage";

// Optional Components

// import Footer from "../components/common/Footer";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      {/* Common Layout Components */}
      <NavBar />

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/services" element={<ServicePage />} />

        {/* 404 Page */}
        <Route
          path="*"
          element={
            <h1 className="text-center text-3xl mt-10">404 Page Not Found</h1>
          }
        />
      </Routes>

      {/* <Footer /> */}
    </BrowserRouter>
  );
};

export default AppRoutes;
