import { BrowserRouter, Route, Routes } from "react-router-dom";

// Public Pages
import NavBar from "../components/common/NavBar";

import AboutPage from "../pages/public/AboutPage";
import ContactPage from "../pages/public/ContactPage";
import HomePage from "../pages/public/HomePage";
import ServicePage from "../pages/public/ServicePage";

// SCROLL TO TOP
import ScrollToTop from "../components/common/ScrollToTop";

// Optional Components
// import Footer from "../components/common/Footer";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      {/* AUTO SCROLL TOP */}
      <ScrollToTop />

      {/* COMMON COMPONENTS */}
      <NavBar />

      <Routes>
        {/* PUBLIC ROUTES */}
        <Route path="/" element={<HomePage />} />

        <Route path="/about" element={<AboutPage />} />

        <Route path="/contact" element={<ContactPage />} />

        <Route path="/services" element={<ServicePage />} />

        {/* 404 PAGE */}
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
