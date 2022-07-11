import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaGlobe } from "react-icons/fa";
import { ImLocation, ImPhone } from "react-icons/im";

const Footer = () => {
  return (
    <>
      <div className="bg-slate-800 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 mx-2 gap-10 sm:mx-16 md:mx-24 lg:mx-40">
          <div>
            <h2 className="font-Poppins text-2xl text-white font-bold">
              Algorizon Technologies
            </h2>
            <p className="py-4 text-gray-300 text-sm sm:text-base text-justify font-semibold font-RedHat">
              We are a prominent and innovative organization committed to
              deliver omnipresent, reliable and secure technical solutions to
              our clients with maximum client satisfaction. For any queries
              related to our products or services, feel free and get in touch
              with us anytime
            </p>
          </div>

          <div>
            <h2 className="font-Poppins text-2xl text-white font-bold">
              Socials
            </h2>
            <p className="py-4 text-gray-50 tracking-wider text-lg text-justify font-semibold font-RedHat">
              Facebook <br />
              Instagram <br />
              YouTube <br />
              Linkedin <br />
            </p>
          </div>

          <div>
            <h2 className="font-Poppins text-2xl text-white font-bold">
              ADDRESS
            </h2>
            <div className="flex mt-2 items-center gap-3">
              <div>
                <ImLocation size={30} color="white" />
              </div>
              <p className="py-2 text-gray-50 text-sm font-semibold font-RedHat ">
                249, Kahilipara Main Rd, Jatia, Kahilipara, Guwahati, Assam
                781019
              </p>
            </div>

            <div className="flex items-center ml-1 gap-3">
              <div>
                <AiOutlineMail size={25} color="white" />
              </div>
              <p className="py-2 text-gray-50 text-sm font-semibold font-RedHat ">
              info@algorizon.com, <br /> algorizon@gmail.com
              </p>
            </div>

            <div className="flex items-center ml-1 gap-3">
              <div>
                <ImPhone size={25} color="white" />
              </div>
              <p className="py-2 text-gray-50 text-sm font-semibold font-RedHat ">
              +91-97075-22019, 0361-7960480
              </p>
            </div>

            <div className="flex items-center ml-1 gap-3">
              <div>
                <FaGlobe size={25} color="white" />
              </div>
              <p className="py-4 text-gray-50 text-sm font-semibold font-RedHat ">
              www.algorizon.com
              </p>
            </div>
          </div>
        </div>

        <h2 className="mx-2 sm:mx-16 md:mx-24 lg:mx-40 font-Poppins text-sm text-white mt-2">
          © Algorizon Technologies. All Rights Reserved
          </h2>
      </div>
    </>
  );
};

export default Footer;
