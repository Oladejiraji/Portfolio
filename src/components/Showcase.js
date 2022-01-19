import React from "react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import { StaticImage } from "gatsby-plugin-image";

const Showcase = () => {
  gsap.registerPlugin(ScrollToPlugin);
  const goToSection = () => {
    console.log(gsap);
    const header = document.querySelector(".header");
    const headerHeight = header.offsetHeight;
    gsap.to(window, 1.5, {
      scrollTo: { y: ".about", offsetY: headerHeight - 200 },
      ease: "circ.out",
    });
    gsap.to(window, 1.5, {});
  };
  return (
    <div className="showcase">
      <div className="semi"></div>
      <div className="container">
        <div className="showcase_flex">
          <div
            className="showcase_text"
            data-aos="fade-right"
            data-aos-delay="400"
          >
            <h1>
              Hey! I'm <span>Oladeji</span>
            </h1>
            <p>
              I am a software engineer and I build websites, web applications
              and mobile applications!
            </p>
            <button className="primary_btn" onClick={goToSection}>
              Learn More
            </button>
          </div>
          <div
            className="showcase_image"
            data-aos="fade-left"
            data-aos-delay="400"
          >
            {/* <StaticImage
              src="../svg/test2.svg"
              placeholder="blurred"
              alt="hero"
              width={300}
              height={300}
            /> */}
            <div className="showcase_img"></div>
            <div className="showcase_blur"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
