import {FC, useState, useEffect } from "react";

const Carousel: FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const items = [
    "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT15m1zlN0XxCPpn4e7Z4n5HzVz4IhKDjTCbi9PVaO_yIXGXRLrxgLdx51HyxOz8XTLNwYqtwm_QLBD_HXlPcZquw",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQJ2sZUUc6xap9g__-HYUVi9LA2MnfG8_7xF33YejfCkudFpb2voAVKP3K2kg9RBHVo4gFx5saiDaNNzxhhMLjPg",
  ];

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
  };

  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div id="default-carousel" className="relative w-full">
      {/* Carousel Wrapper */}
      <div className="relative h-[300px] overflow-hidden drop-shadow shadow">
        {items.map((src, index) => (
          <div
            key={index}
            className={`absolute w-full transition-opacity duration-700 ease-in-out ${
              index === activeIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={src}
              className="absolute block w-full object-cover object-center -translate-x-1/2 translate-y-[-25%] top-[50%] left-[50%]"
              alt={`Slide ${index + 1}`}
            />

          </div>
        ))}


        {/* TITLE */}
        <h1 className="absolute top-[50%] left-[50%] -translate-[50%] text-7xl drop-shadow-[0_1.2px_1.2px_rgba(255,255,255,0.8)] italic">TOP IN MOROCCO <p></p> </h1>
      
      
      </div>
      {/* Slider Indicators */}
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        {items.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${
              index === activeIndex ? "bg-white" : "bg-gray-400"
            }`}
            aria-current={index === activeIndex}
            aria-label={`Slide ${index + 1}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
      {/* Slider Controls */}
      <button
        type="button"
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={handlePrev}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={handleNext}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 9l4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};

export default Carousel;
