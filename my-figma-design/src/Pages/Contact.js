import React from "react";
import "../Pages/contact.css";

export default function Contact() {
  return (
    <div>
      <div className="container">
        <div className="container main-page-contact p-5">
          <h4>Do you want to get in touch with us?</h4>

          <p className="mt-5 main-page-p">
            Do you have questions of any kind, then send us message. We process
            all incoming messages as fast as possible, and in the order they are
            received. We thank you for your patience, and wish you a great day.
          </p>

          <h4 className="mt-5">Send us your message</h4>

          <div className="row gx-5 gy-2">
            <div className="col-lg-6">
              <div className="contact-inputs mt-2">
                <input type="text" placeholder="Name"></input>
                <input type="email" placeholder="Email"></input>
                <input type="number" placeholder="Phone"></input>
                <textarea placeholder="Message"></textarea>
              </div>
              <div className="main-contact-btn">
                <button className="contact-btn">Send</button>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="contact-txt">
                <h4>Do you want to be our next retailer?</h4>
                <p>
                  If you want to become a retailer for our ChaBil products, then
                  please send us a message.
                </p>

                <p>
                  We are of course always interested in more collaboration
                  partners, and are therefore happy to engage in a dialogue
                  about joint opportunities.{" "}
                </p>

                <p>
                  Contact us at <span>retailer@chabil.co.nz</span>
                </p>
              </div>

              <div className="contact-txt--2">
                <h4>Brand Ambassador Program</h4>
                <p>
                  Are you a Blogger or Social Platform Influencer? Do you love
                  stylish design when it’s at its best?
                </p>

                <p>
                  We are always looking for new business partners if the values
                  ​​are common and match each other{" "}
                </p>

                <p>
                  If you want to display and promote our products, please send
                  your e-mail to <span>blogger@chabil.co.nz</span>
                </p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
