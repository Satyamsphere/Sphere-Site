import { Routes, Route } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Home from "../pages/Home/Home";
import Services from "../pages/Services/Services";
import Telecommunication from "../pages/Services/industry/Telecommunication";
import Travel from "../pages/Services/industry/Travel";
import ItService from "../pages/Services/industry/ItService";
import Finance from "../pages/Services/industry/Finance";
import Blogs from "../pages/Company/resources/blog/Blogs";
import Resources from "../pages/Company/resources/Resources";
import About from "../pages/Company/about/About";
import KnowledgeBase from "../pages/Company/resources/knowledge/KnowledgeBase";
import Faq from "../pages/Company/resources/faq/Faq";
import BackOffice from "../pages/Services/bpoSolutions/BackOffice";
import SaleSupport from "../pages/Services/bpoSolutions/SaleSupport";
import DataEntry from "../pages/Services/bpoSolutions/DataEntry";
import CostOptimization from "../pages/Services/consulting/CostOptimization";
import ProjectManagement from "../pages/Services/consulting/ProjectManagement";
import ItTechnical from "../pages/Services/consulting/ItTechnical";
import CurrentOpening from "../pages/Career/currentOpening/CurrentOpening";
import LifeAtSphere from "../pages/Career/lifeAtSphere/LifeAtSphere";
import Industry from "../pages/Services/industry/Industry";
import BpoSolutions from "../pages/Services/bpoSolutions/BpoSolutions";
import Consulting from "../pages/Services/consulting/Consulting";
import ContactUs from "../components/ContactUs/ContactUs.jsx"


const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />

        <Route path="/services/*" element={<Services />} />
        <Route path="/services/industry" element={<Industry />} />
        <Route path="/services/bpo" element={<BpoSolutions />} />
        <Route path="/services/consulting" element={<Consulting />} />
        
        <Route path="/services/industry/finance" element={<Finance />} />
        <Route
          path="/services/industry/telecommunication"
          element={<Telecommunication />}
        />
        <Route path="/services/industry/travel" element={<Travel />} />
        <Route path="/services/industry/it-services" element={<ItService />} />
        {/* <Route path="/company/*" element={<Company />} /> */}
        <Route path="/company/about" element={<About />} />
        <Route path="/company/resources" element={<Resources />} />
        <Route path="/company/resources/blogs" element={<Blogs />} />
        <Route path="/company/resources/faq" element={<Faq />} />
        <Route
          path="/company/resources/knowledge-base"
          element={<KnowledgeBase />}
        />
        <Route path="/services/bpo/back-office" element={<BackOffice />} />
        <Route path="/services/bpo/sale-support" element={<SaleSupport />} />
        <Route path="/services/bpo/data-entry" element={<DataEntry />} />

        <Route
          path="/services/consulting/cost-optimization"
          element={<CostOptimization />}
        />
        <Route
          path="/services/consulting/project-management"
          element={<ProjectManagement />}
        />
        <Route
          path="/services/consulting/it-technical"
          element={<ItTechnical />}
        />
        <Route path="/career/current-opening" element={<CurrentOpening />} />
        <Route path="/career/life-at-sphere" element={<LifeAtSphere />} />

        <Route
          path="*"
          element={
            <div className="flex items-center justify-center  text-2xl mt-50 w-screen">
              404 <br /> Page Not Found
            </div>
          }
        />

        {/* <Route path="/about" element={<About />} /> */}

        <Route path="/contactus" element={<ContactUs />} />

        {/*<Route path="/services" element={<Services />} /> */}

      </Route>
    </Routes>
  );
};

export default AppRoutes;
