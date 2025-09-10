import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const NAV = [
  {
    label: "Service",
    type: "mega",
    sections: [
      {
        label: "Industry",
        items: [
          { label: "Telecommunication", href: "/telecommunication" },
          { label: "Finance", href: "/finance" },
          { label: "Travel", href: "/travel" },
          { label: "IT Services", href: "/it-services" },
        ],
      },
      {
        label: "BPO Solutions",
        items: [
          { label: "Sale support", href: "/sale-support" },
          { label: "Back office", href: "/back-office" },
          { label: "Data entry", href: "/data-entry" },
        ],
      },
      {
        label: "Consulting",
        items: [
          { label: "Cost optimization", href: "/cost-optimization" },
          { label: "IT Technical", href: "/it-technical" },
          { label: "Project management", href: "/project-management" },
        ],
      },
    ],
  },
  {
    label: "Career",
    type: "simple",
    items: [
      { label: "Current opening", href: "/current-opening" },
      { label: "Life at sphere", href: "/life-at-sphere" },
    ],
  },
  {
    label: "Company",
    type: "simple",
    items: [
      { label: "About", href: "/about" },
      { label: "Resource", href: "/resource" },
    ],
  },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMobileSection, setActiveMobileSection] = useState(null);
  const [activeMobileSub, setActiveMobileSub] = useState(null);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mobileOpen &&
        !event.target.closest("#mobile-menu") &&
        !event.target.closest("#mobile-toggle")
      ) {
        setMobileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileOpen]);

  const toggleMobileSection = (index) => {
    setActiveMobileSection(activeMobileSection === index ? null : index);
    setActiveMobileSub(null);
  };

  const toggleMobileSub = (subIndex) => {
    setActiveMobileSub(activeMobileSub === subIndex ? null : subIndex);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-neutral-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Brand */}
          <Link to="/" className="flex items-center gap-3">
            <span className="relative inline-flex h-8 w-8">
              <span className="absolute inset-0 rounded-md bg-gradient-to-br from-indigo-500 to-cyan-500"></span>
              <span className="absolute inset-[3px] rounded-sm bg-white"></span>
            </span>
            <div className="flex flex-col leading-tight">
              <span className="text-[18px] font-semibold tracking-tight">
                Sphere
              </span>
              <span className="text-[10px] text-neutral-500 uppercase tracking-wide">
                Technology Solutions
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV.map((group, gi) => (
              <div
                key={gi}
                className="relative group/nav focus-within:outline-none"
              >
                <button className="inline-flex items-center gap-1.5 text-[15px] font-medium text-neutral-700 hover:text-sky-700 focus-visible:outline-none">
                  {group.label}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 transition-transform duration-200 group-hover/nav:rotate-180"
                  >
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </button>

                {/* Dropdown */}
                <div className="invisible opacity-0 translate-y-1 group-hover/nav:visible group-hover/nav:opacity-100 group-hover/nav:translate-y-0 focus-within:visible focus-within:opacity-100 focus-within:translate-y-0 transition-all duration-150 absolute left-1/2 -translate-x-1/2 top-full mt-3 z-50">
                  {group.type === "mega" ? (
                    <div className="relative bg-white border border-neutral-200 rounded-lg shadow-xl shadow-black/5">
                      <div className="flex">
                        <ul className="w-56 p-2.5">
                          {group.sections.map((section, si) => (
                            <li key={si} className="relative group/section">
                              <div
                                className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-neutral-800
    group-hover/section:bg-[linear-gradient(255.83deg,#1070AE_0%,#0C6097_50.08%,#095180_100.45%)]
    group-hover/section:text-white cursor-pointer transition-colors"
                              >
                                {section.label}
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="ml-auto h-4 w-4 text-neutral-500 group-hover/section:text-white transition-transform"
                                >
                                  <path d="m9 18 6-6-6-6"></path>
                                </svg>
                              </div>

                              {/* Sub menu */}
                              <div
                                className="absolute left-full top-0 ml-0 w-60 bg-white border border-neutral-200 rounded-lg shadow-xl shadow-black/5 p-2.5 z-50
    opacity-0 translate-x-2 transition-all duration-200 ease-out
    group-hover/section:opacity-100 group-hover/section:translate-x-0
    pointer-events-none group-hover/section:pointer-events-auto"
                              >
                                {/* invisible hover buffer (bridge) */}
                                <div className="absolute -left-2 top-0 w-2 h-full"></div>

                                <ul className="space-y-0.5">
                                  {section.items.map((item, ii) => (
                                    <li key={ii}>
                                      <Link
                                        to={item.href}
                                        className="block rounded-md px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-50 hover:text-sky-700"
                                      >
                                        {item.label}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ) : (
                    <div className="bg-white border border-neutral-200 rounded-lg shadow-xl shadow-black/5 p-2.5 w-56">
                      <ul className="space-y-0.5">
                        {group.items.map((item, i) => (
                          <li key={i}>
                            <Link
                              to={item.href}
                              className="block rounded-md px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-50 hover:text-sky-700"
                            >
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </nav>

          {/* Contact button */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center rounded-md border border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-neutral-800 hover:bg-neutral-50 hover:border-neutral-400 transition-colors"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <button
            id="mobile-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            className="md:hidden inline-flex items-center justify-center rounded-md border border-neutral-300 bg-white p-2 hover:bg-neutral-50 transition"
          >
            {mobileOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18"></path>
                <path d="m6 6 12 12"></path>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="4" x2="20" y1="12" y2="12"></line>
                <line x1="4" x2="20" y1="6" y2="6"></line>
                <line x1="4" x2="20" y1="18" y2="18"></line>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div id="mobile-menu" className="md:hidden border-t border-neutral-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
            <div className="space-y-2">
              {NAV.map((group, gi) => (
                <div
                  key={gi}
                  className="rounded-lg border border-neutral-200 bg-white"
                >
                  <button
                    className="w-full flex items-center justify-between px-3 py-3 text-[15px] font-medium text-neutral-800"
                    onClick={() => toggleMobileSection(gi)}
                    aria-expanded={activeMobileSection === gi}
                  >
                    {group.label}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`h-5 w-5 transition-transform duration-200 ${
                        activeMobileSection === gi ? "rotate-180" : ""
                      }`}
                    >
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                  </button>

                  {activeMobileSection === gi && (
                    <div className="border-t border-neutral-200">
                      {group.type === "mega" ? (
                        <div className="p-1.5">
                          {group.sections.map((section, si) => (
                            <div key={si} className="rounded-md">
                              <button
                                className="w-full flex items-center justify-between rounded-md px-2.5 py-2 text-sm text-neutral-800 hover:bg-neutral-50"
                                onClick={() => toggleMobileSub(si)}
                                aria-expanded={activeMobileSub === si}
                              >
                                {section.label}
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className={`h-4 w-4 transition-transform duration-200 ${
                                    activeMobileSub === si ? "rotate-90" : ""
                                  }`}
                                >
                                  <path d="m9 18 6-6-6-6"></path>
                                </svg>
                              </button>

                              {activeMobileSub === si && (
                                <div className="pl-2.5">
                                  <ul className="py-1">
                                    {section.items.map((item, ii) => (
                                      <li key={ii}>
                                        <Link
                                          to={item.href}
                                          className="block rounded-md px-2.5 py-2 text-sm text-neutral-700 hover:bg-neutral-50"
                                          onClick={() => setMobileOpen(false)}
                                        >
                                          {item.label}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      ) : (
                        <ul className="p-1.5">
                          {group.items.map((item, i) => (
                            <li key={i}>
                              <Link
                                to={item.href}
                                className="block rounded-md px-2.5 py-2 text-sm text-neutral-700 hover:bg-neutral-50"
                                onClick={() => setMobileOpen(false)}
                              >
                                {item.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="pt-3">
              <Link
                to="/contact"
                className="w-full inline-flex items-center justify-center rounded-md border border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-neutral-800 hover:bg-neutral-50 transition"
                onClick={() => setMobileOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
