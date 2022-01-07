import React from "react";

const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <h1 className="head_und">Contact Us</h1>
        <div className="form-box">
          <div className="form-square" data-ani="0"></div>
          <div className="form-square" data-ani="1"></div>
          <div className="form-square" data-ani="2"></div>
          <div className="form-square" data-ani="3"></div>
          <div className="form-square" data-ani="4"></div>
          <div className="form-container">
            <div className="form  hidden">
              <form>
                <div className="control-flex">
                  <div className="control">
                    <input type="text" placeholder="Enter Full Name..." />
                  </div>
                  <div className="control">
                    <input type="text" placeholder="Enter Phone No..." />
                  </div>
                </div>
                <div className="control-flex">
                  <div className="control">
                    <input type="text" placeholder="Enter Email..." />
                  </div>
                  <div className="control">
                    <input type="text" placeholder="Enter Topic..." />
                  </div>
                </div>
                <div className="control">
                  <textarea
                    name="message"
                    id=""
                    placeholder="Enter Mesage Here..."
                  ></textarea>
                </div>
                <div className="control">
                  <button>Send Message</button>
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
