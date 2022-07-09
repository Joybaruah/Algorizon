import React from 'react'
import { motion} from "framer-motion"
import web from "../assets/icons/web.png"
import design from "../assets/icons/design.png"
import digital from "../assets/icons/digital.png"
import app from "../assets/icons/app.png"
import eco from "../assets/icons/eco.png"
import social from "../assets/icons/social.png"

const Services = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-purple-300 via-purple-200 to-purple-100 h-[60vh] lg:h-[50vh] shadow-sm">
        <div className="flex items-center justify-center  h-[60vh] lg:h-[50vh] ">
          <motion.h2
          initial={{
            opacity: 0,
          }}
          viewport={{
            once: true
          }}
          transition={{
            type: 'tween',
            delay: 0.2
          }}
          whileInView={{
            opacity: 1,
          }}
          className=" font-Poppins text-2xl text-violet-700 font-extrabold sm:text-6xl">
           SERVICES
          </motion.h2>
        </div>
      </div>

      <div className="bg-purple-50">
        <div className="sm:mx-16 md:mx-24 lg:mx-40">
          <h1 className="p-3 pt-12 font-bold font-Poppins text-lg text-center sm:text-3xl text-gray-800">
            We provide you with high quality technology services
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 py-5">
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
            className="m-2 py-8 hover:translate-x-20 back gap-3 bg-violet-500/20 rounded-sm shadow-md flex flex-col items-center">
              <img src={web} alt='web' className="w-[30%]" />
              <h1 className=" font-Poppins text-center text-lg font-bold text-[#8A39E1] ">
                Web Development
              </h1>
              <p className="font-RedHat text-center font-semibold px-5">
                We are dedicated and has successfully build
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
            className="m-2 py-8 back gap-3 bg-violet-500/20 rounded-sm shadow-md flex flex-col items-center">
              <img src={design} alt='design' className="w-[30%]" />
              <h1 className="font-Poppins text-center text-lg font-bold text-[#8A39E1] ">
                Design Services
              </h1>
              <p className="font-RedHat text-center font-semibold px-5">
                We have successfully rejuvenated the brand
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
            className="m-2 py-8 back gap-3 bg-violet-500/20 rounded-sm shadow-md flex flex-col items-center">
              <img src={digital} alt='digital' className="w-[30%]" />
              <h1 className="font-Poppins text-center text-lg font-bold text-[#8A39E1] ">
                Digital Marketing
              </h1>
              <p className="px-5 font-RedHat text-center font-semibold ">
                Collaborate with us to take effective advantage of new marketing
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
            className="m-2 py-8 back gap-3 bg-violet-500/20 rounded-sm shadow-md flex flex-col items-center">
              <img src={app} alt='app' className="w-[30%]" />
              <h1 className="p-3 font-Poppins text-center text-lg font-bold text-[#8A39E1] ">
                Mobile App Development
              </h1>
              <p className="px-5 font-RedHat text-center font-semibold">
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
            className="m-2 py-8 back gap-3 bg-violet-500/20 rounded-sm shadow-md flex flex-col items-center">
              <img src={eco} alt='ecommerce' className="w-[30%]" />
              <h1 className="p-3 font-Poppins text-center text-lg font-bold text-[#8A39E1] ">
                E-Commerce Development
              </h1>
              <p className="px-5 font-RedHat text-center font-semibold">
                We have a understanding and experience of
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
            className="m-2 py-8 back gap-3 bg-violet-500/20 rounded-sm shadow-md flex flex-col items-center">
              <img src={social} alt='social' className="w-[30%]" />
              <h1 className="p-3 font-Poppins text-center text-lg font-bold text-[#8A39E1] ">
                Social Media Marketing
              </h1>
              <p className="px-5 font-RedHat text-center font-semibold">
                We have an experienced team who gives their
                best in delivering effective response from various social media
                channels of clients
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Services