
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import Top from "../../componant/Top-sec/Top";
import "./Contact.scss";

const Contact = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    surname: "",
    email: "",
    mobile: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;

    setLoading(true);

    const templateParams = {
      first_name: formData.first_name,
      surname: formData.surname,
      email: formData.email,
      mobile: formData.mobile,
      message: formData.message,
      time: new Date().toLocaleString(),
    };

    try {
      const response = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      );

      if (response.status === 200) {
        toast.success("Your message has been sent successfully!");

        setFormData({
          first_name: "",
          surname: "",
          email: "",
          mobile: "",
          message: "",
        });
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast.error("Unable to send your message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-parent parent">
      <Top title="Contact Me" />

      <div className="contact-container container">
        <div className="contact-form-section">

          <div className="contact-form-heading">
            <h2>Let's Get in Touch</h2>
            <p>
              Have a question or want to work together?
              Feel free to send me a message.
            </p>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>

            {/* First Row */}
            <div className="form-row">

              <div className="form-group">
                <label>First Name</label>
                <input
                  type="text"
                  name="first_name"
                  placeholder="Enter your first name"
                  value={formData.first_name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Surname</label>
                <input
                  type="text"
                  name="surname"
                  placeholder="Enter your surname"
                  value={formData.surname}
                  onChange={handleChange}
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
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Mobile Number</label>
                <input
                  type="tel"
                  name="mobile"
                  placeholder="Enter your mobile number"
                  value={formData.mobile}
                  onChange={handleChange}
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
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            {/* Submit Button */}
            <div className="form-submit">
              <button
                type="submit"
                className="btn"
                disabled={loading}
              >
                {loading ? "SENDING..." : "SUBMIT"}
              </button>
            </div>

          </form>

        </div>
      </div>
    </div>
  );
};

export default Contact;
