import { Routes, Route } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Home from "../pages/Home/Home";
import ContactUs from "../components/ContactUs/ContactUs.jsx"

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}

        <Route path="/contactus" element={<ContactUs />} />

        {/*<Route path="/services" element={<Services />} /> */}
      </Route>
    </Routes>
  );
};

export default AppRoutes;
