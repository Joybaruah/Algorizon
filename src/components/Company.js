import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import about from "../assets/img/about1.jpg";
import { motion } from "framer-motion";

const Company = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return (
    <>
      <div className="bg-gradient-to-r from-purple-300 via-purple-200 to-purple-100 h-[60vh] lg:h-[50vh] shadow-sm">
        <div className="flex items-center justify-center  h-[60vh] lg:h-[50vh] ">
          <motion.h2
            initial={{
              opacity: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              type: "tween",
              delay: 0.2,
            }}
            whileInView={{
              opacity: 1,
            }}
            className=" font-Poppins text-2xl text-violet-700 font-extrabold sm:text-6xl"
          >
            COMPANY PROFILE
          </motion.h2>
        </div>
      </div>

      <motion.div
        initial={{
          opacity: 0,
          y: 10,
        }}
        transition={{
          type: "tween",
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        className="my-4 max-w-5xl mx-auto py-2 "
      >
        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-3">
          <img src={about} alt="IMG" className="my-5 px-2" />

          <div>
            <h2 className=" font-Poppins font-bold mx-2 text-lg sm:text-5xl text-gray-800 my-5">
              Algorizon Technologies - About us
            </h2>
            <hr className="w-[30%] mb-3" />
            <p className="font-RedHat text-gray-600 mx-2 font-semibold mt-2 text-md sm:text-lg text-justify">
              Algorizon Technologies is a leading solution provider for all
              internet based applications. Established in the year 2015,
              Algorizon Technologies has a team of experienced and skilled
              professionals who are dedicated in helping the clients to solve
              all IT related issues. Along with the use of latest technology
              gadgets, we are equipped with knowledgeable minds with years of
              experience to offer user friendly customizes solutions. Within the
              first year of its inception, we have managed to establish
              ourselves successfully as a reputed name in the world of IT
              industry. We have been proficiently extending our services by
              acquiring and delivering several domestic and international
              projects with maximum client satisfaction feedback. The company
              has been victorious in placing itself as a renowned name in the IT
              industry within a relatively short span of time. This has been
              possible due to our dedication to deliver the desired results to
              all our clients within budget friendly prices and scheduled time.
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div className="max-w-5xl mx-auto my-3">
        <div className="px-2">
          <h2 className="text-2xl font-Poppins text-violet-700 font-bold ">
            Location & Contact
          </h2>
          <div>
            <p className="py-2 font-RedHat font-semibold">
              Kahilipara Main Rd, Jatia, Kahilipara, Guwahati, Assam 781019
            </p>
            <p className="py-2 font-RedHat font-semibold">
              info@algorizon.com, algorizon@gmail.com
            </p>
            <p className="py-2 font-RedHat font-semibold">
              +91-97075-22019, 0361-7960480{" "}
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        transition={{
          type: "tween",
        }}
        viewport={{
          amount: 0.5,
          once: true,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        className="bg-violet-700/80"
      >
        <motion.div className="max-w-6xl mx-auto py-6">
          <h2 className="py-4 font-Poppins text-sm md:text-lg sm:text-xl font-semibold text-white px-2">
            We at Algorizon Technologies believe in delivering our projects to
            our clients by utilizing the latest technologies and high expertise
            of our team and through it we are aiming to build and grow ourselves
            in the world of IT industry.
          </h2>
          <p className="font-RedHat text-sm sm:text-lg py-2 text-gray-100 font-semibold px-3">
            Our philosophy is to place our topmost priority on client
            satisfaction and maintaining a cordial relationship with them. At
            Algorizon Technologies – “Technology meets emotions”. We work
            relentlessly to fulfill the required needs of the clients. We place
            great emphasis on proper communication and transparency in our work
            which forms an integral part of our corporate culture. At Algorizon,
            we aim not only to deliver services but also to build relationships.
            Each day, we look forward to acquiring new competencies. Daily
            assessment, experimenting, innovating, learning and growing;
            bringing a revolution to the world of IT industry and challenging
            ourselves to achieve new milestones is the way we go about each day.
          </p>
        </motion.div>
      </motion.div>

      <div className="my-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-3">
          <motion.div
            whileHover={{
              y: -10,
            }}
            initial={{
              opacity: 0,
              y: 20,
            }}
            transition={{
              type: "tween",
            }}
            viewport={{
              amount: 0.5,
              once: true,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            className="mx-3 bg-purple-400 px-6 py-4 rounded-sm shadow-md"
          >
            <h2 className="font-Poppins font-bold text-xl py-2">Our Mission</h2>
            <p className="font-RedHat font-semibold text-md py-2">
              Every member at Algorizon Technologies is a dedicated team player
              who dedicates their time and energy to sincerely carry out their
              responsibilities. Our mission is our commitment in delivering high
              quality security and customer service. We focus on attaining
              maximum client satisfaction through innovative and cost friendly
              IT services.
            </p>
          </motion.div>

          <motion.div
            whileHover={{
              y: -10,
            }}
            initial={{
              opacity: 0,
              y: 20,
            }}
            transition={{
              type: "tween",
            }}
            viewport={{
              amount: 0.5,
              once: true,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            className="mx-3 bg-purple-400 px-6 py-4 rounded-sm shadow-md"
          >
            <h2 className="font-Poppins font-bold text-xl py-2">Our Vision</h2>
            <p className="font-RedHat font-semibold text-md py-2">
              Our vision is to build a team of highly skilled and efficient
              people that can provide all IT related solutions. We continuously
              equip ourselves to face new challenges. We look forward in working
              on new projects and catering to all requirements of the clients.
              Our priority is our client and we are available to assist them at
              any hour of the day.
            </p>
          </motion.div>

          <motion.div
            whileHover={{
              y: -10,
            }}
            initial={{
              opacity: 0,
              y: 20,
            }}
            transition={{
              type: "tween",
            }}
            viewport={{
              amount: 0.5,
              once: true,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            className="mx-3 bg-purple-400 px-6 py-4 rounded-sm shadow-md"
          >
            <h2 className="font-Poppins font-bold text-xl py-2">Our Values</h2>
            <p className="font-RedHat font-semibold text-md py-2">
              At Algorizon Technologies, we respect several values and we expect
              every member of the team to acknowledge these values. These values
              are honesty, determination, perseverance, reliability and
              cooperation. These values help us to discipline ourselves and
              enable us to serve our clients in an extreme professional and
              efficient manner.
            </p>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Company;
