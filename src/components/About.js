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
            {/* <StaticImage
              src="../images/about.png"
              placeholder="blurred"
              alt="hero"
            /> */}
            <div className="about_img"></div>
          </div>
          <div
            className="about_content"
            data-aos="fade-left"
            data-aos-delay="400"
          >
            <p>
              I am Raji Oladeji, A web designer from Nigeria. I’ve got the right
              skills and technologies to take your online presence on the level
              it truly deserves. I design and develop beautiful websites which
              focus on providing the best experience for everyone using them,
              ensuring they are easy for your team to edit while also delivering
              the best experience for your users.
            </p>
            <p>
              I believe your website should be your no1 sales agent and its
              works 24/7, Get a quote now that’s best for your business. I
              believe great product design comes from focusing on the right
              questions, not the right answers.
            </p>
            <button className="primary_btn" onClick={goToSection}>
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
