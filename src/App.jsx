import React, { useState, useEffect } from "react";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [time, setTime] = useState(new Date());
  const [date, setDate] = useState(new Date());

  const timeSettings = {
    hour: "numeric",
    minute: "numeric",
    hour12: false,
  };

  const dateSettings = {
    weekday: "long",
    month: "long",
    day: "numeric",
  };

  useEffect(() => {
    const handleLoading = () => {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    };

    if (document.readyState === "complete") {
      setLoading(true);
      handleLoading();
    } else {
      setLoading(true);
      document.addEventListener("readystatechange", handleLoading);
    }

    return () => {
      document.removeEventListener("readystatechange", handleLoading);
    };
  }, []);

  useEffect(() => {
    const timerID = setTimeout(() => {
      setTime(new Date());
    }, 60000);

    return () => {
      clearTimeout(timerID);
    };
  }, [time]);

  return (
    <div className="w-screen h-screen relative">
      {/* loader */}
      <div
        className={`w-screen z-50 flex flex-col items-center justify-center gap-3 h-screen bg-black bg-opacity-80 backdrop-blur-sm absolute transition-all duration-500
      ${loading ? "opacity-100" : "opacity-0"} justify-center items-center
      `}
      >
        <svg
          class="animate-spin -ml-1 mr-3 h-10 w-10 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            class="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            stroke-width="4"
          ></circle>
          <path
            class="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
        <span className="text-white text-sm italic">
          Preferably set to full screen
        </span>
      </div>
      <div className="w-screen absolute flex flex-col mt-16 md:mt-44 justify-center items-center font-semibold text-white">
        <span className="md:text-[5rem] md:leading-[6rem] text-4xl leading-[3rem]">
          {time.toLocaleTimeString([], timeSettings)}
        </span>
        <span className="md:text-sm text-xs">
          {date.toLocaleDateString([], dateSettings)}
        </span>
      </div>
      <img
        src="https://images.unsplash.com/photo-1620121692029-d088224ddc74?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="wallpaper"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default App;
