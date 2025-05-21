import React from 'react'
import { FaCertificate } from "react-icons/fa";

const ResumeCard = ({title, subTitle, result, des, certificateLink}) => {
  return (
    <div className="w-full group flex">
      <div className="w-10 h-[6px] bgOpacity mt-16 relative">
        <span className="absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-black bg-opacity-60">
          <span className="w-3 h-3 rounded-full bg-bodyColor inline-flex group-hover:bg-designColor duration-300"></span>
        </span>
      </div>

      <div className="w-full bg-black bg-opacity-20 hover:bg-opacity-30 duration-300 rounded-lg p-4 lgl:px-10 flex flex-col justify-center gap-6 lgl:gap-10 shadow-shadowOne">
        <div className="flex flex-col lgl:flex-row justify-between lgl:items-center gap-4">
            <div>
              <h3 className="text-xl md:text-2xl font-semibold group-hover:text-white duration-300">
                {title}
              </h3>
              <p className="text-sm mt-2 text-gray-400 group-hover:text-white duration-300">
                {subTitle} 
              </p>
            </div>
            <div className="flex items-center gap-2">
               <p className="px-4 py-2 text-designColor bg-black bg-opacity-25 rounded-lg flex justify-center items-center shadow-shadowOne text-sm font-medium">
              {result}
              </p>
               {certificateLink && (
                <a 
                  href={certificateLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-black bg-opacity-25 rounded-lg flex justify-center items-center shadow-shadowOne text-designColor hover:text-white hover:bg-designColor duration-300"
                  title="View Certificate"
                >
                  <FaCertificate className="text-xl" />
                </a>
               )}
            </div>
          </div> 
            <p className="text-sm md:text-base font-medium text-gray-400 group-hover:text-gray-300 duration-300">
              {des}
            </p>
        </div>
      </div>
  );
}

export default ResumeCard