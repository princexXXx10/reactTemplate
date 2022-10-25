import React from "react";

import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PhoneIcon from "@mui/icons-material/Phone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

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
            <LocationOnOutlinedIcon />
            <p>
              Homer’s Plaza, Opp. Winners’ Chapel, Uromi-ilushi Road,
              Orhuen-Ubiaja, Edo State.
            </p>
          </div>
          <div className="footer__phone">
            <PhoneIcon />
            <p>+234 9023456789</p>
          </div>
          <div className="footer__email">
            <MailOutlineIcon />
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
