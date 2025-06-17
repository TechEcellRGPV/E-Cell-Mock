import React from "react";

export default function VisionSection() {
  return (
    <section className="bg-[#F1F8F4] py-16 px-4 sm:px-8 md:px-16 lg:px-24 text-[#212121]">
      <div className="max-w-5xl mx-auto text-center">
        {/* Icon and Heading */}
        <div className="flex flex-col items-center justify-center mb-10">
          <img
            src="https://cdn-icons-png.flaticon.com/512/190/190411.png"
            alt="Vision Icon"
            className="w-20 h-20 sm:w-24 sm:h-24 mb-4 drop-shadow-lg rounded-full border-4 border-[#A5D6A7] bg-white p-2"
          />

          {/* Heading only - icon removed */}
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1B5E20] mb-2">
            OUR VISION
          </h2>

          {/* Centered underline */}
          <div className="w-20 h-1 mt-1 rounded-full bg-gradient-to-r from-[#66BB6A] via-[#81C784] to-[#A5D6A7] mx-auto"></div>
        </div>

        {/* Paragraphs */}
        <p className="text-base sm:text-lg leading-7 sm:leading-8 text-gray-800">
          <span className="font-semibold text-[#2E7D32]">e-Entrepreneurship Cell, RGPV</span> is a non-profit organization that believes entrepreneurship is pivotal for our country's development. It was established to create, foster, and promote a culture of innovation and entrepreneurship.
        </p>

        <p className="mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-gray-800">
          Our team encourages students to pursue their entrepreneurial dreams and overcome the fear of starting their own ventures. We guide aspiring entrepreneurs from ideation to incubation, helping transform great ideas into impactful startups.
        </p>
      </div>
    </section>
  );
}
