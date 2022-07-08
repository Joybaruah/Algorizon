import React, { useState, useEffect } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { Link , useLocation} from "react-router-dom";
import { motion } from "framer-motion"

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
      <div className="flex sm:hidden justify-end bg-violet-500/60 w-full fixed">
        <BiMenuAltRight size={25} className="m-1" onClick={handleClick} />
      </div>

      <div
        className={`${
          active ? "block" : "hidden"
        } backdrop-blur-sm absolute w-[100vw] h-[100vh]`}
      >
        <ul className="flex ml-3 gap-4 mt-4 flex-col">
          <Link to={'/'} className="font-Poppins font-semibold">HOME</Link>
          <Link to={'/company'} className="font-Poppins font-semibold">COMPANY PROFILE</Link>
          <li className="font-Poppins font-semibold">SERVICES</li>
          <li className="font-Poppins font-semibold">PRODUCTS</li>
          <li className="font-Poppins font-semibold">CONTACT</li>
        </ul>
      </div>

      <motion.nav
      className="hidden sm:flex justify-end ">
        <div className="fixed">
          <ul className="flex gap-4 mt-3 flex-row bg-violet-500/30 py-4 px-5">
            <Link to={'/'} className="font-Poppins font-semibold cursor-pointer">HOME</Link>
            <Link to={'/company'} className="font-Poppins font-semibold cursor-pointer">
              COMPANY PROFILE
            </Link>
            <li className="font-Poppins font-semibold cursor-pointer">
              SERVICES
            </li>
            <li className="font-Poppins font-semibold cursor-pointer">
              PRODUCTS
            </li>
            <li className="font-Poppins font-semibold cursor-pointer">
              CONTACT
            </li>
          </ul>
        </div>
      </motion.nav>
    </div>
  );
};

export default Navbar;
