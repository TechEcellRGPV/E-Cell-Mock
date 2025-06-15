import React from "react";
import {
  FaUserSecret,
  FaCloudRain,
  FaChalkboardTeacher,
  FaTools,
  FaRegCalendarAlt,
} from "react-icons/fa";

const features = [
  {
    number: "01",
    title: "STARTUP",
    description: "Join our student incubation program and unlock startup resources and support.",
    icon: <FaCloudRain className="text-[#AED581] text-2xl" />,
  },
  {
    number: "02",
    title: "MENTORSHIP",
    description: "Gain insights and guidance from top mentors through E-CELL's mentorship network.",
    icon: <FaChalkboardTeacher className="text-[#AED581] text-2xl" />,
  },
  {
    number: "03",
    title: "RECRUITMENT",
    description: "Enhance your entrepreneurial and technical skills through curated opportunities.",
    icon: <FaTools className="text-[#AED581] text-2xl" />,
  },
  {
    number: "04",
    title: "PAST EVENTS",
    description: "Imprenditore, NSC Hackathon, Apple-eTalk, Imprenditore 3.0",
    icon: <FaRegCalendarAlt className="text-[#AED581] text-2xl" />,
  },
];

export default function Adventure() {
  return (
    <div className=" bg-[#F1F8F4] text-[#212121] p-8 flex justify-center w-full">
    <div>
      <h1 className="text-4xl font-bold text-[#2E7D32] text-center mb-12">
        JOURNEY WITH <span className="text-[#AED581]">E-CELL</span>
      </h1>

      <div className="flex flex-col md:flex-row items-center gap-8 min-[930px]:gap-25">
        {/* Left Icon */}
        <div className="bg-[#AED581] rounded-full p-12">
          <FaUserSecret className="text-[#2E7D32] text-[100px]" />
        </div>

        {/* Feature Boxes */}
        <div className="grid grid-cols-1 gap-6">
          {features.map((feature) => (
            <div
              key={feature.number}
              className="flex items-center justify-between bg-white border-l-[6px] rounded-2xl shadow-md px-6 py-4 max-w-xl"
              style={{ borderColor: "#AED581" }}
            >
              <div>
                <div className="font-bold text-xl" style={{ color: "#66BB6A" }}>
                  {feature.number}
                </div>
                <div className="font-bold" style={{ color: "#212121" }}>
                  {feature.title}
                </div>
                <p className="text-sm" style={{ color: "#212121" }}>
                  {feature.description}
                </p>
              </div>
              <div className='m-2 p-2'>
                {feature.icon}
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </div>
  );
}
