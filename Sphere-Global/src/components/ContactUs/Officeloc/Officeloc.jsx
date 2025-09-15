// src/components/OfficeLoc.jsx
import React, { useState } from "react";

const Officeloc = () => {
  const [region, setRegion] = useState("India");

  const offices = {
    India: [
      {
        country: "Mohali",
        address:
          "Blue Saphire, D-234 (P&C) Industrial Area, Phase 8B Mohali",
      },
      {
        country: "Mumbai",
        address:
          "Technopolis Knowledge Park, Mahakali Caves Rd, Chakala, Hanuman Nagar, Andheri East, Mumbai",
      },
      {
        country: "Punjab",
        address: "Punjab Khatti, Hoshiarpur Road, Phagwara, Punjab",
      },
      
    ],
    foreign: [
      {
        country: "UK, London",
        address:
          "222 Bishopsgate, London, ENGLAND EC2M 4QD Wolverhampton, The Maltings, 2 Anderson Road, Bearwood, West Midlands, England, B66 4AR",
      },
      {
        country: "UAE",
        address: "Dubai Al Habtoor Business Tower, Dubai Marina",
      },
      {
        country: "USA",
        address: "California 690 Saratoga Ave 1st floor, San Jose",
      },
    ],
  };

  return (
    <div className="bg-gradient-to-b from-sky-600 to-sky-800 text-white py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Our Offices Around The World
        </h2>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          {["India", "foreign"].map((tab) => (
            <button
              key={tab}
              onClick={() => setRegion(tab)}
              className={`px-6 py-2 rounded-full border cursor-pointer ${
                region === tab
                  ? "bg-white text-sky-700 font-semibold"
                  : "border-white text-white hover:bg-sky-700"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Offices Grid */}
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {offices[region]?.map((office, idx) => (
            <div key={idx} className="p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-1">
                {office.country}
              </h3>
              {office.company && (
                <p className="text-sm">{office.company}</p>
              )}
              <p className="text-sm text-gray-200">{office.address}</p>
            </div>
          ))}
        </div>


      </div>
    </div>
  );
};

export default Officeloc;
