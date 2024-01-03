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
    const finishLoading = () => {
      setLoading(false);
    };

    if (document.readyState === 'complete') {
      finishLoading();
    } else {
      /* The code `document.addEventListener('readystatechange', () => {
              if (document.readyState === 'complete') {
                finishLoading();
              }` is adding an event listener to the document object. It listens for changes in the
      readyState property of the document. When the readyState becomes 'complete', indicating that
      the document has finished loading, the `finishLoading()` function is called. This is used to
      determine when the document has finished loading and set the `loading` state to false. */
      document.addEventListener('readystatechange', () => {
        if (document.readyState === 'complete') {
          finishLoading();
        }
      });
    }
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
      <div className="w-screen absolute flex flex-col mt-44 justify-center items-center font-semibold text-white">
        <span className="text-[5rem] leading-[6rem]">
          {time.toLocaleTimeString([], timeSettings)}
        </span>
        <span className="text-sm">{date.toLocaleDateString([], dateSettings)}</span>
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
