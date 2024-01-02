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
                src="../images/habari.png"
                placeholder="blurred"
                alt="hero"
                height={350}
              />
            </div>
            <div className="sample_text">
              <h1>01</h1>
              <h3>Habari - Connect and Chat</h3>
              <p>
                Habari is the ultimate Proximity Dating App, that brings singles
                together based on their proximity. With habari, you can connect
                with other like-minded individuals who are within close range or
                a specific location, usually measured in meters (up to 15km),
                and chat, bond, and potentially spark a romance.
              </p>
              <div className="sample_btns_con">
                <div className="sample_btns">
                  <button className="secondary_btn">
                    <a href="https://apps.apple.com/ng/app/habari-connect-chat/id6448764507">
                      App Store
                    </a>
                  </button>
                </div>
                <div className="sample_btns">
                  <button className="secondary_btn">
                    <a href="https://play.google.com/store/apps/details?id=com.letstalk.letstalk&hl=en_US">
                      Play Store
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="sample" data-aos="fade-down" data-aos-delay="400">
            <div className="sample_image">
              <StaticImage
                src="../images/buzz.png"
                placeholder="blurred"
                alt="hero"
                height={350}
              />
            </div>
            <div className="sample_text">
              <h1>02</h1>
              <h3>Buzzz</h3>
              <p>
                Buzzz is a merch platform where creators can create and sell
                merch easily.
              </p>
              <div className="sample_btns">
                <button className="secondary_btn">
                  <a href="http://yourbuzzz.com">Live Sample</a>
                </button>
              </div>
            </div>
          </div>

          <div className="sample" data-aos="fade-down" data-aos-delay="400">
            <div className="sample_image">
              <StaticImage
                src="../images/ahaspora.png"
                placeholder="blurred"
                alt="hero"
                height={350}
              />
            </div>
            <div className="sample_text">
              <h1>03</h1>
              <h3>Ahaspora</h3>
              <p>
                Ahaspora is a group Ghanaian professionals who have lived or
                been educated outside Ghana and have returned home. We want to
                use our knowledge, skills, and resources to make Ghana a better
                place to live.
              </p>
              <div className="sample_btns_con">
                <div className="sample_btns">
                  <button className="secondary_btn">
                    <a href="https://apps.apple.com/ng/app/habari-connect-chat/id6448764507">
                      App Store
                    </a>
                  </button>
                </div>
                <div className="sample_btns">
                  <button className="secondary_btn">
                    <a href="https://play.google.com/store/apps/details?id=com.letstalk.letstalk&hl=en_US">
                      Play Store
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>

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
              <h1>04</h1>
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
                src="../images/tenaciti.png"
                placeholder="blurred"
                alt="hero"
                height={350}
              />
            </div>
            <div className="sample_text">
              <h1>05</h1>
              <h3>Tenaciti</h3>
              <p>
                With Tenaciti you can manage your properties from anywhere. Our
                solution allows you to Resolve Maintenance Issues, Collect
                Monthly Rent Payments, Track Revenue and Expenses, Tenant
                Screening, & much more! Old-school property management tools
                aren’t built for the way you work. But Tenaciti is.
              </p>
              <div className="sample_btns">
                <button className="secondary_btn">
                  <a href="https://www.tenaciti.co/">Live Sample</a>
                </button>
              </div>
            </div>
          </div>

          {/* <div className="sample" data-aos="fade-down" data-aos-delay="400">
            <div className="sample_image">
              <StaticImage
                src="../images/project3.png"
                placeholder="blurred"
                alt="hero"
                height={350}
              />
            </div>
            <div className="sample_text">
              <h1>06</h1>

              <p>
                GESA is a consultancy service company geared towards the
                provision of research, writing and logistics consultancy for
                students and intending workers who seek for greener pastures
                around the world.
              </p>
              <div className="sample_btns">
                <button className="secondary_btn">
                  <a href="http://app.wakawithme.com">Live Sample</a>
                </button>
              </div>
            </div>
          </div> */}

          {/* <div className="sample_all">
            <button className="secondary_btn">View All Projects</button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Project;
