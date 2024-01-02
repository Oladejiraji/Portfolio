import React from "react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import { StaticImage } from "gatsby-plugin-image";

const About = () => {
  gsap.registerPlugin(ScrollToPlugin);
  const goToSection = () => {
    console.log(gsap);
    const header = document.querySelector(".header");
    const headerHeight = header.offsetHeight;
    gsap.to(window, 1.5, {
      scrollTo: { y: ".contact", offsetY: headerHeight - 200 },
      ease: "circ.out",
    });
    gsap.to(window, 1.5, {});
  };
  return (
    <div className="about">
      <div className="container">
        <h1 className="head_und">About Me</h1>
        <div className="about_flex">
          <div
            className="about_image"
            data-aos="fade-right"
            data-aos-delay="400"
          >
            <div className="about_img"></div>
          </div>
          <div
            className="about_content"
            data-aos="fade-left"
            data-aos-delay="400"
          >
            <p>
              With a background as a founding developer for multiple startups
              and a portfolio boasting several apps live on both the App Store
              and Google Play Store, alongside web applications currently in
              production, I've consistently delivered tangible results.
              Adaptability is key to my engineering approach—I thrive on
              tackling abrupt challenges with a steadfast commitment to success.
              I'm excited to apply my expertise to drive meaningful outcomes in
              new, challenging environments, leveraging my track record for
              impactful results.
            </p>
            <p>
              I am deeply eager to leverage the depth of my expertise and the
              breadth of my experiences to spearhead transformative outcomes in
              new and dynamic environments. My professional journey has equipped
              me with a wealth of skills and a mindset primed for tackling fresh
              challenges. I am enthusiastic about the prospect of applying these
              strengths to drive impactful and meaningful change in endeavors
              that demand innovation and excellence.
            </p>
            <button className="primary_btn" onClick={goToSection}>
              Let's Connect
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
