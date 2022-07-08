import React from "react";
import { BiCheck } from "react-icons/bi";
import { AiOutlineSearch, AiOutlineBulb, AiOutlineSketch } from "react-icons/ai";
import why from "../assets/img/why.jpg";
import { motion} from "framer-motion"
import { FaSchool, FaHome, FaBus, FaHotel, FaCamera } from "react-icons/fa"
import { BsCameraReels } from "react-icons/bs"
 
const HeaderHome = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-purple-300 via-purple-200 to-purple-100 h-[100vh] shadow-sm">
        <div className="flex flex-col mx-4 sm:ml-24 md:ml-40 lg:ml-52 pt-24 sm:pt-28 md:pt-40 lg:pt-52">
          <motion.h2
          initial={{
            y: -50,
            opacity: 0
          }}
          viewport={{
            once: true
          }}
          transition={{
            type: 'tween'
          }}
          whileInView={{
            y: 0,
            opacity: 1
          }}
          className="font-RedHat font-semibold sm:text-3xl">Welcome to</motion.h2>
          <motion.h1
          initial={{
            opacity: 0,
          }}
          viewport={{
            once: true
          }}
          transition={{
            type: 'tween',
            delay: 1
          }}
          whileInView={{
            opacity: 1,
          }}
          className="font-Poppins text-2xl text-red-600 font-extrabold sm:text-6xl">
            Algorizon
          </motion.h1>
          <motion.p 
          initial={{
            opacity: 0,
            y: 20
          }}
          viewport={{
            once: true
          }}
          transition={{
            type: 'tween',
            delay: 1
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          className="font-RedHat text-sm mt-2 font-semibold sm:text-xl">
            We provide Web Development, Graphic Designing, <br /> Digital
            Marketing and much more.
          </motion.p>
        </div>
        <motion.button
        initial={{
          opacity: 0,
          y: 20
        }}
        viewport={{
          once: true
        }}
        transition={{
          type: 'tween',
          delay: 1
        }}
        whileInView={{
          opacity: 1,
          y: 0
        }}
        className="mx-4 mt-4 sm:mt-3 sm:ml-24 md:ml-40 lg:ml-52 px-4 py-2 sm:px-4 bg-purple-600/40 hover:bg-purple-500 rounded-sm font-semibold text-sm sm:text-lg font-Poppins">
          Get in Touch
        </motion.button>
      </div>

      <motion.div
      initial={{
        opacity: 0,
        y: 20
      }}
      transition={{
        type: 'tween',
      }}
      whileInView={{
        opacity: 1,
        y: 0
      }}
      className="my-4 sm:mx-5 md:mx-40 lg:mx-4 px-4 py-2 ">
        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-5 ">
          <div>
            <img src={why} alt="IMG" />
          </div>

          <div>
            <h2 className=" font-Poppins font-bold text-lg sm:text-4xl text-gray-800">
              Why Choose Algorizon Technologies
            </h2>
            <p className="font-RedHat font-semibold mt-2 text-md sm:text-lg text-justify">
              The business philosophy of the company is to lay emphasis on Human
              Values and Personal Relations. ‘At Algorizon – Technology meets
              emotions and limits are higher than the sky.’ Great stress is laid
              on proper communication, transparency and human relations, which
              forms an integral part of the corporate culture. At Algorizon, we
              not only develop products but we develop relationships. We at
              Algorizon believe in teamwork.
            </p>
            <p className="flex mt-3 text-sm sm:text-lg font-sans font-semibold">
              <BiCheck size={25} color="purple" className="mr-3 " /> We are
              completely legal entity.
            </p>
            <p className="flex mt-3 text-sm sm:text-lg font-sans font-semibold">
              <BiCheck size={25} color="purple" className="mr-3 " /> We have in
              house developers and designers.
            </p>
            <p className="flex mt-3 text-sm sm:text-lg font-sans font-semibold">
              <BiCheck size={25} color="purple" className="mr-3 " /> Unique
              Marketing strategies & Digital marketing team.
            </p>
            <p className="flex mt-3 text-sm sm:text-lg font-sans font-semibold">
              <BiCheck size={25} color="purple" className="mr-3 " /> Latest
              Technology for your business .
            </p>
          </div>
        </div>
      </motion.div>

      <div className="bg-purple-50">
        <div className="sm:mx-16 md:mx-24 lg:mx-40">
          <h1 className="p-3 pt-12 pb-5 font-bold font-Poppins text-lg text-center sm:text-3xl text-gray-800">
            We provide you with high quality technology services
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            <motion.div 
            initial={{
              scale: 0.9,
              opacity: 0
            }}
            viewport={{
              once: true,
              amount: 0.5
            }}
            transition={{
              type: 'just'
            }}
            whileInView={{
              scale: 1,
              opacity: 1
            }}
            className="m-3 back bg-violet-500/20 rounded-sm shadow-md">
              <h1 className="p-3 font-Poppins text-lg font-bold text-[#8A39E1] ">
                Web Development
              </h1>
              <p className="px-4 font-RedHat font-semibold pb-2">
                Algorizon Technologies is dedicated and has successfully build
                websites over these years with maximum client satisfaction.
              </p>
            </motion.div>

            <motion.div 
            initial={{
              scale: 0.9,
              opacity: 0
            }}
            viewport={{
              once: true,
              amount: 0.5
            }}
            transition={{
              type: 'just'
            }}
            whileInView={{
              scale: 1,
              opacity: 1
            }}
            className="m-3 back bg-violet-500/20 rounded-sm shadow-md">
              <h1 className="p-3 font-Poppins text-lg font-bold text-[#8A39E1] ">
                Design Services
              </h1>
              <p className="px-4 font-RedHat font-semibold pb-2">
                Algorizon Technologies has successfully rejuvenated the brand
                identity of many businesses by handling a number of designing
                projects for clients.
              </p>
            </motion.div>

            <motion.div
            initial={{
              scale: 0.9,
              opacity: 0
            }}
            viewport={{
              once: true,
              amount: 0.5
            }}
            transition={{
              type: 'just'
            }}
            whileInView={{
              scale: 1,
              opacity: 1
            }}
            className="m-3 back bg-violet-500/20 rounded-sm shadow-md">
              <h1 className="p-3 font-Poppins text-lg font-bold text-[#8A39E1] ">
                Digital Marketing
              </h1>
              <p className="px-4 font-RedHat font-semibold pb-2">
                Algorizon Technologies acts as a partner with whom you can
                collaborate to take effective advantage of new marketing
                opportunities over a wide range of digital marketing platforms.
              </p>
            </motion.div>

            <motion.div
            initial={{
              scale: 0.9,
              opacity: 0
            }}
            viewport={{
              once: true,
              amount: 0.5
            }}
            transition={{
              type: 'just'
            }}
            whileInView={{
              scale: 1,
              opacity: 1
            }}
            className="m-3 back bg-violet-500/20 rounded-sm shadow-md">
              <h1 className="p-3 font-Poppins text-lg font-bold text-[#8A39E1] ">
                Mobile App Development
              </h1>
              <p className="px-4 font-RedHat font-semibold pb-2">
                At Algorizon Technologies, we have the best and brightest minds
                to present our clients the most cutting edge technology.
              </p>
            </motion.div>

            <motion.div
            initial={{
              scale: 0.9,
              opacity: 0
            }}
            viewport={{
              once: true,
              amount: 0.5
            }}
            transition={{
              type: 'just'
            }}
            whileInView={{
              scale: 1,
              opacity: 1
            }}
            className="m-3 back bg-violet-500/20 rounded-sm shadow-md">
              <h1 className="p-3 font-Poppins text-lg font-bold text-[#8A39E1] ">
                E-Commerce Development
              </h1>
              <p className="px-4 font-RedHat font-semibold pb-2">
                Algorizon Technologies has a understanding and experience of
                designing e-commerce websites for its clients that includes
                relevant use of SEO and effective marketing strategies.
              </p>
            </motion.div>

            <motion.div 
            initial={{
              scale: 0.9,
              opacity: 0
            }}
            viewport={{
              once: true,
              amount: 0.5
            }}
            transition={{
              type: 'just'
            }}
            whileInView={{
              scale: 1,
              opacity: 1
            }}
            className="m-3 back bg-violet-500/20 rounded-sm shadow-md">
              <h1 className="p-3 font-Poppins text-lg font-bold text-[#8A39E1] ">
                Social Media Marketing
              </h1>
              <p className="px-4 font-RedHat font-semibold pb-2">
                Algorizon Technologies has an experienced team who gives their
                best in delivering effective response from various social media
                channels of clients
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="bg-violet-100 py-5">
        <div className="bg-violet-700/80 sm:mx-16 md:mx-24 lg:mx-40 shadow-md">
          <div className="flex justify-center flex-col items-center py-2 ">
            <h2 className="text-white py-2 font-RedHat font-semibold">
              HOW WE WORK
            </h2>
            <p className="text-2xl text-center font-bold text-white sm:text-4xl font-Poppins pb-4">
              Stages Of Our Working Process
            </p>
          </div>

          
        </div>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3 mx-2 sm:mx-16 md:mx-24 lg:mx-40 my-3">

          <motion.div
          initial={{
            y: 20,
            opacity: 0
          }}
          viewport={{
            once: true,
            amount: 0.5
          }}
          transition={{
            type: 'just'
          }}
          whileInView={{
            y: 0,
            opacity: 1
          }}
          className="flex flex-col gap-4 items-center bg-gray-700/20 py-12 px-8">
            <AiOutlineSearch size={40} />
            <h2 className="font-Poppins text-center font-bold text-lg sm:text-3xl">
            Research Project
            </h2>
            <p className="font-mono text-center pt-2 font-semibold">
            Before starting out your project, our expert staffs will research on your requirements and work on it.
            </p>
          </motion.div>

          <motion.div
          initial={{
            y: 20,
            opacity: 0
          }}
          viewport={{
            once: true,
            amount: 0.5
          }}
          transition={{
            type: 'just'
          }}
          whileInView={{
            y: 0,
            opacity: 1
          }}
          className="flex flex-col gap-4 items-center bg-gray-700/20 py-12 px-8">
            <AiOutlineBulb size={40} />
            <h2 className="font-Poppins text-center font-bold text-lg sm:text-3xl">
            Finding Solutions
            </h2>
            <p className="font-mono text-center pt-2 font-semibold">
            Once a project completes the research stage, we find solutions to tackle all the problems we found. 
            </p>
          </motion.div>

          <motion.div 
          initial={{
            y: 20,
            opacity: 0
          }}
          viewport={{
            once: true,
            amount: 0.5
          }}
          transition={{
            type: 'just'
          }}
          whileInView={{
            y: 0,
            opacity: 1
          }}
          className="flex flex-col gap-4 items-center bg-gray-700/20 py-12 px-8">
            <AiOutlineSketch size={40} />
            <h2 className="font-Poppins text-center font-bold text-lg sm:text-3xl">
            Build & Deliver
            </h2>
            <p className="font-mono text-center pt-2 font-semibold">
            And lasty we start building your project and deliver what you asked for.
            </p>
          </motion.div>

          </div>
      </div>


      <div className="py-5">
        <div className="bg-purple-600/80 sm:mx-16 md:mx-24 lg:mx-40 shadow-md">
          <div className="flex justify-center flex-col items-center py-2 ">
            <h2 className="text-white py-2 font-RedHat font-semibold">
              OUR PRODUCTS
            </h2>
            <p className="text-2xl text-center font-bold text-white sm:text-4xl font-Poppins pb-4">
            Check out our quality products
            </p>
          </div>

          
        </div>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3 mx-2 sm:mx-16 md:mx-24 lg:mx-40 my-3">

          <motion.div
          initial={{
            y: 20,
            opacity: 0
          }}
          viewport={{
            once: true,
            amount: 0.5
          }}
          transition={{
            type: 'just'
          }}
          whileInView={{
            y: 0,
            opacity: 1
          }}
          className="flex flex-col gap-4 items-center bg-gray-700/20 py-12 px-8">
            <FaSchool size={40} />
            <h2 className="font-Poppins font-bold text-center text-lg sm:text-2xl">
            School Management System
            </h2>
          </motion.div>

          <motion.div
          initial={{
            y: 20,
            opacity: 0
          }}
          viewport={{
            once: true,
            amount: 0.5
          }}
          transition={{
            type: 'just'
          }}
          whileInView={{
            y: 0,
            opacity: 1
          }}
          className="flex flex-col gap-4 items-center bg-gray-700/20 py-12 px-8">
            <FaHome size={40} />
            <h2 className="font-Poppins text-center font-bold text-lg sm:text-2xl">
            Resort Booking System
            </h2>
          </motion.div>

          <motion.div 
          initial={{
            y: 20,
            opacity: 0
          }}
          viewport={{
            once: true,
            amount: 0.5
          }}
          transition={{
            type: 'just'
          }}
          whileInView={{
            y: 0,
            opacity: 1
          }}
          className="flex flex-col gap-4 items-center bg-gray-700/20 py-12 px-8">
            <FaBus size={40} />
            <h2 className="font-Poppins font-bold text-lg sm:text-2xl">
            Bus Booking System
            </h2>
          </motion.div>

          <motion.div 
          initial={{
            y: 20,
            opacity: 0
          }}
          viewport={{
            once: true,
            amount: 0.5
          }}
          transition={{
            type: 'just'
          }}
          whileInView={{
            y: 0,
            opacity: 1
          }}
          className="flex flex-col gap-4 items-center bg-gray-700/20 py-12 px-8">
            <FaHotel size={40} />
            <h2 className="font-Poppins font-bold text-center text-lg sm:text-2xl">
            Hotel Booking System
            </h2>
          </motion.div>

          <motion.div 
          initial={{
            y: 20,
            opacity: 0
          }}
          viewport={{
            once: true,
            amount: 0.5
          }}
          transition={{
            type: 'just'
          }}
          whileInView={{
            y: 0,
            opacity: 1
          }}
          className="flex flex-col gap-4 items-center bg-gray-700/20 py-12 px-8">
            <FaCamera size={40} />
            <h2 className="font-Poppins font-bold text-center text-lg sm:text-2xl">
            Travel Management System
            </h2>
          </motion.div>

          <motion.div 
          initial={{
            y: 20,
            opacity: 0
          }}
          viewport={{
            once: true,
            amount: 0.5
          }}
          transition={{
            type: 'just'
          }}
          whileInView={{
            y: 0,
            opacity: 1
          }}
          className="flex flex-col gap-4 items-center bg-gray-700/20 py-12 px-8">
            <BsCameraReels size={40} />
            <h2 className="font-Poppins text-center font-bold text-lg sm:text-2xl">
            Movie Ticket Booking System
            </h2>
          </motion.div>

          </div>
      </div>
    </>
  );
};

export default HeaderHome;
