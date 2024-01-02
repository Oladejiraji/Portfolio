import React from "react";

const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <h1 className="head_und">Contact Us</h1>
        <div className="form-box" data-aos="fade-down" data-aos-delay="400">
          <div className="form-square" data-ani="0"></div>
          <div className="form-square" data-ani="1"></div>
          <div className="form-square" data-ani="2"></div>
          <div className="form-square" data-ani="3"></div>
          <div className="form-square" data-ani="4"></div>
          <div className="form-container">
            <div className="form">
              <form
                action="https://formsubmit.co/rajioladeji2@gmail.com"
                method="POST"
              >
                <div className="control-flex">
                  <div className="control">
                    <input
                      type="text"
                      placeholder="Enter Full Name..."
                      name="name"
                      required
                    />
                  </div>
                  <div className="control">
                    <input
                      type="text"
                      placeholder="Enter Phone No..."
                      name="phone"
                      required
                    />
                  </div>
                </div>
                <div className="control">
                  <input
                    type="text"
                    placeholder="Enter Email..."
                    name="email"
                    required
                  />
                </div>
                <div className="control">
                  <textarea
                    required
                    name="message"
                    id=""
                    placeholder="Enter Mesage Here..."
                  ></textarea>
                </div>
                <div className="control">
                  <button type="submit">Connect with us</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
