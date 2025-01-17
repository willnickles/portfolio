import React, { useState, useEffect } from "react";

const ScrollProgress = () => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY; // How much the user has scrolled
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight; // Total scrollable height
      const scrollProgress = (scrollTop / windowHeight) * 100;
      setScroll(scrollProgress);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 h-1 bg-blue-500"
      style={{ width: `${scroll}%` }}
    ></div>
  );
};

export default ScrollProgress;
