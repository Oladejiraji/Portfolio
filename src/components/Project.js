import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const Project = () => {
  return (
    <div className="project">
      <div className="container">
        <h1 className="head_und">Projects</h1>
        <div className="project_container">
          <div className="sample">
            <div className="sample_image hidden">
              <StaticImage
                src="../images/project1.png"
                placeholder="blurred"
                alt="hero"
                height={350}
              />
            </div>
            <div className="sample_text hidden">
              <h1>01</h1>
              <h3>Coffee Shop Landing Page</h3>
              <p>
                5 bucks is a coffee shop landing page concept. The idea is to
                get a coffee delivered faster at no cost higher than 5 bucks.
                They also offer delivery as service.
              </p>
              <div className="sample_btns">
                <button className="primary_btn">Details</button>
                <button className="secondary_btn">Live Sample</button>
              </div>
            </div>
          </div>
          <div className="sample">
            <div className="sample_image hidden">
              <StaticImage
                src="../images/project1.png"
                placeholder="blurred"
                alt="hero"
                height={350}
              />
            </div>
            <div className="sample_text hidden">
              <h1>02</h1>
              <h3>Coffee Shop Landing Page</h3>
              <p>
                5 bucks is a coffee shop landing page concept. The idea is to
                get a coffee delivered faster at no cost higher than 5 bucks.
                They also offer delivery as service.
              </p>
              <div className="sample_btns">
                <button className="primary_btn">Details</button>
                <button className="secondary_btn">Live Sample</button>
              </div>
            </div>
          </div>
          <div className="sample">
            <div className="sample_image hidden">
              <StaticImage
                src="../images/project1.png"
                placeholder="blurred"
                alt="hero"
                height={350}
              />
            </div>
            <div className="sample_text hidden">
              <h1>03</h1>
              <h3>Coffee Shop Landing Page</h3>
              <p>
                5 bucks is a coffee shop landing page concept. The idea is to
                get a coffee delivered faster at no cost higher than 5 bucks.
                They also offer delivery as service.
              </p>
              <div className="sample_btns">
                <button className="primary_btn">Details</button>
                <button className="secondary_btn">Live Sample</button>
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
