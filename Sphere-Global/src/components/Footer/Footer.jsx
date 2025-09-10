import { Link } from "react-router-dom";
import {
  MessageSquare,
  Linkedin,
  Facebook,
  Instagram,
  Send,
} from "lucide-react";

const Footer = () => {
  return (
    <>
      {/* ======================= CTA Top Band ======================= */}
      <section aria-label="Help CTA" className="relative bg-sky-900">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="flex items-center justify-center text-center py-14 sm:py-16">
            <div>
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
                How can we help?
              </h2>
              <div className="mt-5">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/5 px-5 py-2.5 text-white shadow-sm backdrop-blur transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span className="text-sm font-medium">Contact Us</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================= Footer ======================= */}
      <footer className="relative">
        {/* Subtle angled shapes (background accents) */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 overflow-hidden"
        >
          <div className="absolute -left-40 top-16 h-96 w-96 -rotate-12 rounded-3xl bg-slate-100"></div>
          <div className="absolute left-1/3 -bottom-24 h-40 w-40 rotate-45 rounded-xl bg-slate-50"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-6 sm:px-8">
          <div className="flex flex-col gap-6 items-start justify-between py-10 sm:flex-row sm:items-center">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 grid place-items-center rounded-md bg-teal-600">
                <div className="h-4 w-4 rotate-12 rounded-sm bg-white/90"></div>
              </div>
              <div>
                <p className="text-xl font-semibold tracking-tight text-slate-900 leading-none">
                  SPHERE
                </p>
                <p className="mt-0.5 text-xs text-slate-500 uppercase tracking-wide">
                  Technology Solutions
                </p>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href="#"
                aria-label="LinkedIn"
                className="group inline-flex h-9 w-9 items-center justify-center rounded-md border border-slate-200 text-slate-500 hover:text-sky-700 hover:border-sky-200 transition"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="group inline-flex h-9 w-9 items-center justify-center rounded-md border border-slate-200 text-slate-500 hover:text-sky-700 hover:border-sky-200 transition"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="group inline-flex h-9 w-9 items-center justify-center rounded-md border border-slate-200 text-slate-500 hover:text-sky-700 hover:border-sky-200 transition"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px w-full bg-slate-200"></div>

          {/* Grid Links */}
          <div className="grid grid-cols-1 gap-10 py-10 md:grid-cols-4">
            {/* Services */}
            <nav aria-label="Services" className="space-y-4">
              <h3 className="text-base font-semibold tracking-tight text-slate-900">
                Services
              </h3>
              <div className="h-px w-full bg-slate-200"></div>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link to="#">Digital Workplace</Link>
                </li>
                <li>
                  <Link to="#">Cloud & Application Services</Link>
                </li>
                <li>
                  <Link to="#">Depot & Logistics Services</Link>
                </li>
                <li>
                  <Link to="#">Strategic Staffing & Payroll Services</Link>
                </li>
                <li>
                  <Link to="#">Consulting & Professional Services</Link>
                </li>
                <li>
                  <Link to="#">Service Desk</Link>
                </li>
                <li>
                  <Link to="#">Enterprise Services</Link>
                </li>
                <li>
                  <Link to="#">Value Added Reseller</Link>
                </li>
              </ul>
            </nav>

            {/* Careers & Resources */}
            <div className="space-y-10">
              <nav aria-label="Careers" className="space-y-4">
                <h3 className="text-base font-semibold tracking-tight text-slate-900">
                  Careers
                </h3>
                <div className="h-px w-full bg-slate-200"></div>
                <ul className="space-y-3 text-sm">
                  <li>
                    <Link to="#">Current Openings</Link>
                  </li>
                  <li>
                    <Link to="#">Life at SPHERE</Link>
                  </li>
                </ul>
              </nav>

              <nav aria-label="Resources" className="space-y-4">
                <h3 className="text-base font-semibold tracking-tight text-slate-900">
                  Resources
                </h3>
                <div className="h-px w-full bg-slate-200"></div>
                <ul className="space-y-3 text-sm">
                  <li>
                    <Link to="#">News & Announcements</Link>
                  </li>
                  <li>
                    <Link to="#">Case Studies</Link>
                  </li>
                  <li>
                    <Link to="#">Blog</Link>
                  </li>
                </ul>
              </nav>
            </div>

            {/* Company */}
            <nav aria-label="Company" className="space-y-4">
              <h3 className="text-base font-semibold tracking-tight text-slate-900">
                Company
              </h3>
              <div className="h-px w-full bg-slate-200"></div>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link to="#">About Us</Link>
                </li>
                <li>
                  <Link to="#">SPHERE at a Glance</Link>
                </li>
                <li>
                  <Link to="#">Leadership Team</Link>
                </li>
                <li>
                  <Link to="#">Partners</Link>
                </li>
                <li>
                  <Link to="#">Corporate Social Responsibility</Link>
                </li>
                <li>
                  <Link to="#">Sustainability</Link>
                </li>
              </ul>
            </nav>

            {/* Newsletter */}
            <section aria-label="Newsletter" className="space-y-4">
              <h3 className="text-base font-semibold tracking-tight text-slate-900">
                Stay Connected
              </h3>
              <div className="h-px w-full bg-slate-200"></div>
              <p className="text-sm text-slate-600">
                Get the latest SPHERE information delivered to your inbox.
              </p>

              <form className="relative">
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <div className="flex items-center">
                  <input
                    id="email"
                    type="email"
                    placeholder="Email"
                    className="w-full rounded-full border border-slate-300 bg-white px-4 py-2.5 pr-12 text-sm outline-none transition placeholder:text-slate-400 focus:border-sky-400 focus:ring-2 focus:ring-sky-100"
                  />
                  <button
                    type="submit"
                    className="absolute right-1 inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-white hover:bg-slate-800 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
                  >
                    <Send className="h-4 w-4" />
                  </button>
                </div>
              </form>

              {/* Compliance badges */}
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700">
                  CMMI Level 3
                </span>
                <span className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700">
                  ISO 9001:2015
                </span>
                <span className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700">
                  ISO 45001:2018
                </span>
                <span className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700">
                  ISO 27001:2022
                </span>
              </div>
            </section>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col gap-4 items-start justify-between border-t border-slate-200 py-6 text-xs text-slate-500 sm:flex-row sm:items-center">
            <p>©2025 SPHERE Technology Solutions | All Rights Reserved.</p>
            <p className="order-3 sm:order-none">
              Powered by{" "}
              <a
                href="#"
                className="text-sky-700 hover:text-sky-800 font-medium"
              >
                RulesPlay
              </a>
            </p>
            <nav aria-label="Legal" className="flex items-center gap-4">
              <a href="#" className="hover:text-slate-700">
                Privacy Policy
              </a>
              <span className="text-slate-300">|</span>
              <a href="#" className="hover:text-slate-700">
                Cookie Policy
              </a>
              <span className="text-slate-300">|</span>
              <a href="#" className="hover:text-slate-700">
                Sitemap
              </a>
            </nav>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
