import React, { useState, useEffect } from "react";

const App = () => {
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
    const timerID = setTimeout(() => {
      setTime(new Date());
    }, 60000);

    return () => {
      clearTimeout(timerID);
    };
  }, [time]);

  return (
    <div className="w-screen h-screen relative">
      <div className="w-screen absolute flex flex-col mt-28 justify-center items-center">
        <span className="text-6xl font-semibold">
          {time.toLocaleTimeString([], timeSettings)}
        </span>
        <span>{date.toLocaleDateString([], dateSettings)}</span>
      </div>
      <img
        src="https://images.unsplash.com/photo-1490598000245-075175152d25?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="wallpaper"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default App;
