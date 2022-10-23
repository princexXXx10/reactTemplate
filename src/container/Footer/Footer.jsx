import React from "react";

import "./Footer.css";

const Footer = () => (
  <div className="footer__container">
    <div className="footer__wrapper custom__wrapper">
      <div className="footer__content">
        <div className="footer__content--main">
          <p>Omoike Integrated Farm © 2022 - Present</p>
          <div className="footer__socialIcons">
            <img
              src="https://img.icons8.com/color/48/000000/whatsapp--v1.png"
              alt="Whatsapp icon - (Icon8)"
            />
            <img
              src="https://img.icons8.com/color/48/000000/facebook-new.png"
              alt="Facebook icon - (Icon8)"
            />
            <img
              src="https://img.icons8.com/color/48/000000/instagram-new--v1.png"
              alt="Instagram icon - (Icon8)"
            />
          </div>
        </div>

        <div className="footer__smallScreen">
          <div className="footer__address">
            <img
              src="https://img.icons8.com/ios-glyphs/30/000000/address.png"
              alt="Location icon - (Icon8)"
            />
            <p>
              Homer’s Plaza, Opp. Winners’ Chapel, Uromi-ilushi Road,
              Orhuen-Ubiaja, Edo State.
            </p>
          </div>
          <div className="footer__phone">
            <img
              src="https://img.icons8.com/ios-glyphs/30/000000/phone--v1.png"
              alt="Phone icon - (Icon8)"
            />
            <p>+234 9023456789</p>
          </div>
          <div className="footer__email">
            <img
              src="https://img.icons8.com/ios-glyphs/30/000000/phone--v1.png"
              alt="Email icon - (Icon8)"
            />
            <p>omoikefarms@gmail.com</p>
          </div>

          <div className="footer__smallScreen--socialIcons">
            <img
              src="https://img.icons8.com/color/48/000000/whatsapp--v1.png"
              alt="Whatsapp icon - (Icon8)"
            />
            <img
              src="https://img.icons8.com/color/48/000000/facebook-new.png"
              alt="Facebook icon - (Icon8)"
            />
            <img
              src="https://img.icons8.com/color/48/000000/instagram-new--v1.png"
              alt="Instagram icon - (Icon8)"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
