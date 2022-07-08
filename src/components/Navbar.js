import React, { useState, useEffect } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { GrClose } from "react-icons/gr";

const Navbar = () => {
  const [active, setActive] = useState(false);

  const { pathname } = useLocation();

  const handleClick = () => {
    setActive(!active);
  };

  useEffect(() => {
    setActive(false);
  }, [pathname]);

  return (
    <div>
      <div className="flex sm:hidden justify-end bg-violet-500/60 w-full fixed p-2">
        <BiMenuAltRight size={30}  onClick={handleClick} />
      </div>

      <motion.div
      initial={{
        x: 50
      }}
      whileInView={{
        x: 0
      }}
        className={`${
          active ? "block" : "hidden"
        } backdrop-blur-md w-[100vw] h-[100vh] fixed`}
      >
        <motion.div 
        initial={{
          y: -20
        }}
        transition={{
          type: 'spring',
        }}
        whileInView={{
          y: 0
        }}
        className="flex sm:hidden justify-end w-full fixed">
          <GrClose size={25} className="m-3" onClick={handleClick} />
        </motion.div>
        <ul className="flex pl-3 gap-4 mt-4 flex-col">
          <Link to={"/"} className="font-Poppins font-semibold mt-6">
            HOME
          </Link>
          <Link to={"/company"} className="font-Poppins font-semibold">
            COMPANY PROFILE
          </Link>
          <Link to={"/services"} className="font-Poppins font-semibold">SERVICES</Link>
          <Link to={"/products"} className="font-Poppins font-semibold">PRODUCTS</Link>
          <Link to={"contact"} className="font-Poppins font-semibold">CONTACT</Link>
        </ul>
      </motion.div>

      <motion.nav className="hidden sm:flex justify-end ">
        <div className="fixed">
          <ul className="flex gap-4 flex-row bg-violet-500/30 py-4 px-5 mt-2">
            <Link
              to={"/"}
              className="font-Poppins font-semibold cursor-pointer"
            >
              HOME
            </Link>
            <Link
              to={"/company"}
              className="font-Poppins font-semibold cursor-pointer"
            >
              COMPANY PROFILE
            </Link>
            <Link to={"/services"} className="font-Poppins font-semibold cursor-pointer">
              SERVICES
            </Link>
            <Link to={"/products"} className="font-Poppins font-semibold cursor-pointer">
              PRODUCTS
            </Link>
            <Link to={"contact"} className="font-Poppins font-semibold cursor-pointer">
              CONTACT
            </Link>
          </ul>
        </div>
      </motion.nav>
    </div>
  );
};

export default Navbar;
