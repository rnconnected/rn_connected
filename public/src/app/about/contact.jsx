import React from "react";
import "./contact.css";
import Image from "next/image";

const Contact = () => {
  return (
    <>
      <div className="container">
        <div className="contact_cont">
          <h2>QUICK CONTACT</h2>
          <div className="form_section">
            <div className="form_img_cont">
              <Image
                src={"/about/cus-ser.png"}
                height={1000}
                width={1000}
                alt="form image"
                className="form_img"
              />
            </div>
            <form>
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <input type="text" placeholder="Subject" />
              <input type="phone" placeholder="phone no" />
              <textarea placeholder="Message" />
              <div className="btn_cont">
                <button>Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
