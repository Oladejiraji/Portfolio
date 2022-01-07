import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const Service = () => {
  return (
    <div className="service">
      <div className="container">
        <h1 className="head_und special">Services</h1>
        <div className="service_flex">
          <div className="service_card hidden">
            <div className="service_image">
              <div className="services_glass">
                <div className="service_xml"></div>
                <div className="service_flash1">
                  <StaticImage
                    src="../images/flash.png"
                    placeholder="blurred"
                    alt="hero"
                    width={100}
                    height={100}
                  />
                </div>
                <div className="service_flash2">
                  <StaticImage
                    src="../images/flash.png"
                    placeholder="blurred"
                    alt="hero"
                    width={100}
                    height={100}
                  />
                </div>
                <div className="service_red1"></div>
                <div className="service_red2"></div>
                <div className="service_white1"></div>
                <div className="service_white2"></div>
              </div>
            </div>
            <div className="service_text">
              <h1>Web Development</h1>
              <p>
                I am confident i know the right , modern web technologies needed
                for your site’s optimization
              </p>
            </div>
          </div>
          <div className="service_card hidden">
            <div className="service_image">
              <div className="services_glass">
                <div className="service_xml"></div>
                <div className="service_flash1">
                  <StaticImage
                    src="../images/flash.png"
                    placeholder="blurred"
                    alt="hero"
                    width={100}
                    height={100}
                  />
                </div>
                <div className="service_flash2">
                  <StaticImage
                    src="../images/flash.png"
                    placeholder="blurred"
                    alt="hero"
                    width={100}
                    height={100}
                  />
                </div>
                <div className="service_red1"></div>
                <div className="service_red2"></div>
                <div className="service_white1"></div>
                <div className="service_white2"></div>
              </div>
            </div>
            <div className="service_text">
              <h1>Web Development</h1>
              <p>
                I am confident i know the right , modern web technologies needed
                for your site’s optimization
              </p>
            </div>
          </div>
          <div className="service_card hidden">
            <div className="service_image">
              <div className="services_glass">
                <div className="service_xml"></div>
                <div className="service_flash1">
                  <StaticImage
                    src="../images/flash.png"
                    placeholder="blurred"
                    alt="hero"
                    width={100}
                    height={100}
                  />
                </div>
                <div className="service_flash2">
                  <StaticImage
                    src="../images/flash.png"
                    placeholder="blurred"
                    alt="hero"
                    width={100}
                    height={100}
                  />
                </div>
                <div className="service_red1"></div>
                <div className="service_red2"></div>
                <div className="service_white1"></div>
                <div className="service_white2"></div>
              </div>
            </div>
            <div className="service_text">
              <h1>Web Development</h1>
              <p>
                I am confident i know the right , modern web technologies needed
                for your site’s optimization
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
