<img
        src="https://res.cloudinary.com/dsdiqfrnj/image/upload/v1757666290/Container_kxxfhq.png"
        alt="Contact Us banner background"
        className="absolute inset-0 w-full h-full object-cover"
      />

import React, { useState, useRef, useEffect, useCallback } from "react";
import intlTelInput from "intl-tel-input";
import "intl-tel-input/build/css/intlTelInput.css";

    // "intl-tel-input": "^25.3.1",
    // "leaflet": "^1.9.4",
    // "leaflet-geosearch": "^4.2.0",

  const [isValid, setIsValid] = useState(true);

  const phoneInputRef = useRef(null);
  const itiRef = useRef(null); // Store intl-tel-input instance


  // Initialize intl-tel-input
  useEffect(() => {
    if (phoneInputRef.current && !itiRef.current) {
      const iti = intlTelInput(phoneInputRef.current, {
        initialCountry: "gb",
        preferredCountries: ["gb", "in", "us", "ca", "au"],
        separateDialCode: true,
        utilsScript:
          "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/18.3.3/js/utils.js",
      });

      itiRef.current = iti;

      const initialCountryData = iti.getSelectedCountryData();
      setFormData((prev) => ({
        ...prev,
        phone: `+${initialCountryData.dialCode}`,
      }));

      const handleCountryChange = () => {
  const countryData = iti.getSelectedCountryData();
  const currentNumber = iti.getNumber() || `+${countryData.dialCode}`;
  setFormData((prev) => ({
    ...prev,
    phone: currentNumber,
    country: countryData.name, // <-- set country name here
  }));
  setIsValid(iti.isValidNumber() || !currentNumber);
};

      const handleInputChange = () => {
        const number = iti.getNumber() || phoneInputRef.current.value;
        const isValidNumber = iti.isValidNumber() || !number;
        const countryData = iti.getSelectedCountryData();
        setFormData((prev) => ({ ...prev, phone: number,
                                country: countryData.name,
                               }));
        setIsValid(isValidNumber);
      };

      phoneInputRef.current.addEventListener(
        "countrychange",
        handleCountryChange
      );
      phoneInputRef.current.addEventListener("input", handleInputChange);

      return () => {
        if (phoneInputRef.current) {
          phoneInputRef.current.removeEventListener(
            "countrychange",
            handleCountryChange
          );
          phoneInputRef.current.removeEventListener("input", handleInputChange);
        }
        if (itiRef.current) {
          itiRef.current.destroy();
          itiRef.current = null;
        }
      };
    }
  }, []);      

      <div className="mb-4">
            <label
              htmlFor="phone"
              className="text-sm font-medium text-gray-700 mb-1 block"
            >
              Phone Number
            </label>
            <input
              ref={phoneInputRef}
              type="tel"
              id="phone"
              name="phone"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
            {/* {!isValid && formData.phone && (
              <p className="mt-1 text-sm text-red-600">Please enter a valid phone number</p>
            )} */}
          </div>