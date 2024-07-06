import React, { useState, useEffect } from "react";
import coverImageData from "../data/coverImage";

function Slider({ bottomRef }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === coverImageData.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleLearnMoreClick = () => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      {/* Image Slider Section */}
      <div className="relative overflow-hidden w-full mt-[15vh]">
        <div
          className="flex transition-transform duration-500 h-[85vh]"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {coverImageData.map((item, index) => (
            <div key={index} className="min-w-full relative">
              <img
                src={item.image}
                className="w-full h-full object-cover"
                alt={item.altText}
              />
              <div className="absolute top-0 left-0 bg-black opacity-30 w-full h-[85vh]"></div>
              <div className="absolute inset-0 flex flex-col items-start ml-[20px] md:ml-[50px] justify-center top-[15%] text-gray-300 text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-2 tracking-wide">
                  {item.heading}
                </h1>
                <p className="mb-4 tracking-wide font-light text-start">
                  {item.paragraph}
                </p>
                <button
                  className="py-2 md:py-3 px-10 rounded-md bg-green-800 font-semibold hover:bg-green-600 transition-colors border-[#213547] duration-200 ease-in focus:outline-none focus:ring-1 focus:ring-[#270e8c]"
                  onClick={handleLearnMoreClick}
                >
                  {item.button}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Slider;
