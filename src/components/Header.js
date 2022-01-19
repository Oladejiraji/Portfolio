import React, { useEffect, useState } from "react";
import { useAppContext } from "../context/Context";

const Header = () => {
  const { theme, toggleTheme } = useAppContext();
  useEffect(() => {
    // let storedTheme = localStorage.getItem("theme");
    // if (storedTheme) {
    //   document
    //     .getElementsByTagName("HTML")[0]
    //     .setAttribute("data-theme", storedTheme);
    // } else {
    //   document
    //     .getElementsByTagName("HTML")[0]
    //     .setAttribute("data-theme", "red");
    // }
    document
      .getElementsByTagName("HTML")[0]
      .setAttribute("data-theme", "neutral");
  }, []);
  return (
    <div className="header" data-aos="fade-down" data-aos-delay="400">
      <div className="header_glass">
        <div className="header_wrap">
          <div className="container">
            <div className="header_flex">
              <div className="title">Oladeji</div>
              <div className="theme">
                <div
                  className={
                    theme === "neutral" ? "active_box boxes box1" : "boxes box1"
                  }
                  onClick={() => toggleTheme("neutral")}
                ></div>
                <div
                  className={
                    theme === "red" ? "active_box boxes box2" : "boxes box2"
                  }
                  onClick={() => toggleTheme("red")}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
