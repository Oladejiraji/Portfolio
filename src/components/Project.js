import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const Project = () => {
  return (
    <div className="project">
      <div className="container">
        <h1 className="head_und">Projects</h1>
        <div className="project_container">
          <div className="sample" data-aos="fade-down" data-aos-delay="400">
            <div className="sample_image">
              <StaticImage
                src="../images/project1.png"
                placeholder="blurred"
                alt="hero"
                height={350}
              />
            </div>
            <div className="sample_text">
              <h1>01</h1>
              <h3>WakaWithMe Dashboard</h3>
              <p>
                WakaWithMe is an application that is meant to bring road users
                together. It is meant to connect drivers on the road with people
                going to the same direction.
              </p>
              <div className="sample_btns">
                <button className="secondary_btn">
                  <a href="http://app.wakawithme.com">Live Sample</a>
                </button>
              </div>
            </div>
          </div>
          <div className="sample" data-aos="fade-down" data-aos-delay="400">
            <div className="sample_image">
              <StaticImage
                src="../images/project2.png"
                placeholder="blurred"
                alt="hero"
                height={350}
              />
            </div>
            <div className="sample_text">
              <h1>02</h1>
              <h3>Binary Agency Landing Page</h3>
              <p>
                Binary Agency is an agency that creates high-end mobile and web
                applications for your brand.
              </p>
              <div className="sample_btns">
                <button className="secondary_btn">
                  <a href="https://binary-agency.netlify.app/">Live Sample</a>
                </button>
              </div>
            </div>
          </div>
          <div className="sample" data-aos="fade-down" data-aos-delay="400">
            <div className="sample_image">
              <StaticImage
                src="../images/project3.png"
                placeholder="blurred"
                alt="hero"
                height={350}
              />
            </div>
            <div className="sample_text">
              <h1>04</h1>
              <h3>GESA Landing Page</h3>
              <p>
                GESA is a consultancy service company geared towards the
                provision of research, writing and logistics consultancy for
                students and intending workers who seek for greener pastures
                around the world.
              </p>
              <div className="sample_btns">
                <button className="secondary_btn">
                  <a href="https://gesa.netlify.app/">Live Sample</a>
                </button>
              </div>
            </div>
          </div>
          <div className="sample" data-aos="fade-down" data-aos-delay="400">
            <div className="sample_image">
              <StaticImage
                src="../images/project4.png"
                placeholder="blurred"
                alt="hero"
                height={350}
              />
            </div>
            <div className="sample_text">
              <h1>03</h1>
              <h3>Digita Landing Page</h3>
              <p>
                Binary is a startup aimed at leveraging soundwave and blockchain
                technology by merging digital payments with digital identity for
                seamless and effective last mile and low value payments in
                Africa.
              </p>
              <div className="sample_btns">
                <button className="secondary_btn">
                  <a
                    href="https://digitaa.netlify.app/#home"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Sample
                  </a>
                </button>
              </div>
            </div>
          </div>
          {/* <div className="sample_all">
            <button className="secondary_btn">View All Projects</button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Project;
