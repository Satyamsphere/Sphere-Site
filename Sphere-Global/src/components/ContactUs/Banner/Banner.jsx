// src/components/Banner.jsx
import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section
      className="relative w-full h-40 md:h-100 flex items-center justify-center"
      aria-label="Contact Us banner"
    >
      {/* Background image (reliable visibility + proper scaling) */}
      <img
        src="https://res.cloudinary.com/dsdiqfrnj/image/upload/v1757666290/Container_kxxfhq.png"
        alt="Contact Us banner background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay for better readability */}
      <div className="absolute inset-0  bg-opacity-40"></div>

      {/* Text Content */}
      <div className="relative z-10 text-center">
        {/* Breadcrumb */}
        <p className="text-white text-sm mb-2 mr-210">
          <Link to="/" className="hover:underline">
            Home
          </Link>{" "}
          &gt;{" "}
          <Link to="/contactus" className="hover:underline">
            Contact Us
          </Link>
        </p>
        {/* Heading */}
        <h1 className="text-white text-5xl font-extrabold mr-20">
  Have Questions? We Have Answers
</h1>

      </div>
    </section>
  );
};

export default Banner;
