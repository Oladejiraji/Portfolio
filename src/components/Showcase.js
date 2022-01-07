import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const Showcase = () => {
  return (
    <div className="showcase">
      <div className="semi"></div>
      <div className="container">
        <div className="showcase_flex">
          <div className="showcase_text hidden">
            <h1>
              Hey! I'm <span>Ololade</span>
            </h1>
            <p>I make websites that convert more into more more more!</p>
            <button className="primary_btn">Learn More</button>
          </div>
          <div className="showcase_image hidden">
            <StaticImage
              src="../images/hero.png"
              placeholder="blurred"
              alt="hero"
              width={500}
              height={500}
            />
            <div className="showcase_blur"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
