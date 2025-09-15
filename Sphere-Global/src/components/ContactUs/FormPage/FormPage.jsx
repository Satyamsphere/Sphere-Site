// src/components/FormPage.jsx
import React, { useState, useRef, useEffect, useCallback } from "react";
import intlTelInput from "intl-tel-input";
import "intl-tel-input/build/css/intlTelInput.css";
import ReCAPTCHA from "react-google-recaptcha";



const TEST_SITE_KEY = "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";
const DELAY = 1500;

const FormPage = () => {

    const [isValid, setIsValid] = useState(true);
    const [formData, setFormData] = useState();
    const phoneInputRef = useRef(null);
    const itiRef = useRef(null);


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
                setFormData((prev) => ({
                    ...prev, phone: number,
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


//capche code
function onChange(value) {
  console.log("Captcha value:", value);
}


return (
  <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
    {/* Left Side - Form */}
    <div>
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-bold text-[#0071A1] mb-4">
        Fill out the form below, and we will get back to you shortly.
      </h2>
      <p className="text-gray-600 mb-6">
        For assistance with your queries, please fill in the details requested
        below and send to us. Alternatively, you can send an email to{" "}
        <a href="mailto:contact@sphereglobal.com" className="text-blue-500">
          contact@sphereglobal.com
        </a>{" "}
        and we will revert to you at the earliest possible.
      </p>

      {/* Form */}
      <form className="space-y-4">
        {/* Full Name & Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              required
              className="w-full border rounded-lg px-4 py-2 
                         focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-700"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              required
              className="w-full border rounded-lg px-4 py-2 
                         focus:outline-none focus:ring-2 focus:ring-sky-700 focus:border-sky-700"
            />
          </div>
        </div>

        {/* Phone Number & Subject */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              ref={phoneInputRef}
              type="tel"
              id="phone"
              name="phone"
              required
              className="w-full border rounded-lg px-4 py-2 
                         focus:outline-none focus:ring-2 focus:ring-sky-700 focus:border-sky-700"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Subject <span className="text-red-500">*</span>
            </label>
            <select
              required
              className="w-full border rounded-lg px-4 py-2 
                         focus:outline-none focus:ring-2 focus:ring-sky-700 focus:border-sky-700"
            >
              <option value="">Select Subject</option>
              <option value="general">General</option>
              <option value="support">Support</option>
              <option value="business">Business</option>
              <option value="opportunity">Opportunity</option>
              <option value="feedback">Feedback</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Message
          </label>
          <textarea
            rows="4"
            placeholder="Type your message here"
            className="w-full border rounded-lg px-4 py-2 
                       focus:outline-none focus:ring-2 focus:ring-sky-700 focus:border-sky-700"
          ></textarea>
        </div>

        {/* Newsletter + Privacy */}
        <div className="space-y-2 text-sm text-gray-700">
          <label className="flex items-center space-x-2">
            <input type="checkbox" />
            <span>
              Yes, I like to receive updates and offers.{" "}
              <span className="text-gray-500">(Optional)</span>
            </span>
          </label>

          <label className="flex items-center space-x-2">
            <input type="checkbox" required />
            <span>
              Your information is safe with us and used solely for communication
              purposes, adhering to our{" "}
              <a href="#" className="text-blue-500 underline">
                Privacy Policy
              </a>
            </span>
          </label>
        </div>

        {/* reCAPTCHA Placeholder */}
        <div className="">
          {/* <span className="text-gray-500">[reCAPTCHA Placeholder]</span> */}
<ReCAPTCHA
    sitekey="6LdmlscrAAAAAPeeq4gVXzKceylj3xM4DNcPWp-6"
    onChange={onChange}
  />

        </div>

        {/* Button */}
        <button
          type="submit"
          className="bg-[#0071A1] text-white px-6 py-3 rounded-lg shadow hover:bg-[#005f80]"
        >
          Send Message
        </button>
      </form>
    </div>

    {/* Right Side - Image */}
    <div className="flex justify-center">
      <img
        src="https://res.cloudinary.com/dsdiqfrnj/image/upload/v1757666289/Container_1_plbca9.png"
        alt="Support"
        className="rounded-lg shadow-lg"
      />
    </div>
  </div>
);



};

export default FormPage;
