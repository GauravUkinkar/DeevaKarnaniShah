
import React, { useState } from "react";
import Top from "../../componant/Top-sec/Top";
import "./Contact.scss";

const Contact = () => {
  return (
    <div className="contact-parent parent">
      <div className="contact-container container">

        <Top title="Contact Me" />

        <div className="contact-form-section">
          <div className="contact-form-heading">
            <h2>Let's Get in Touch</h2>
            <p>
              Have a question or want to work together?
              Feel free to send me a message.
            </p>
          </div>

          <form className="contact-form" >

            {/* First Row */}
            <div className="form-row">
              <div className="form-group">
                <label>First Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="form-group">
                <label>Surname</label>
                <input
                  type="text"
                  name="surname"
                  placeholder="Enter your surname"
                  required
                />
              </div>
            </div>

            {/* Second Row */}
            <div className="form-row">
              <div className="form-group">
                <label>Email Address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="form-group">
                <label>Mobile Number</label>
                <input
                  type="tel"
                  name="mobile"
                  placeholder="Enter your mobile number"
                  required
                />
              </div>
            </div>

            {/* Message */}
            <div className="form-group message-group">
              <label>Your Message</label>
              <textarea
                name="message"
                placeholder="Write your message here..."
                rows="6"
                required
              />
            </div>

            {/* Submit Button */}
            <div className="form-submit">
              <button type="submit" className="btn">
                SUBMIT
              </button>
            </div>

          </form>
        </div>

      </div>
    </div>
  );
};

export default Contact;
