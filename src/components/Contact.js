import React from 'react'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom'

const Contact = () => {

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }, [pathname])

  return (
    <>
      <div className="bg-gradient-to-r from-purple-300 via-purple-200 to-purple-100 h-[60vh] lg:h-[100vh] shadow-sm">
        <div className="flex items-center justify-center  h-[60vh] lg:h-[100vh] ">
          <h2 className=" font-Poppins text-2xl text-violet-700 font-extrabold sm:text-6xl">
           CONTACT
          </h2>
        </div>
      </div>
    </>
  )
}

export default Contact