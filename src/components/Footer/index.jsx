import React, { memo } from "react";
import FooterLogo from "../../assets/image/footer_logo.jpg";
import "./style.scss";
const Footer = memo(() => {
  return (
    <footer className="footer f-a-c">
      <img src={FooterLogo} alt="" />
      <div className="footer__text">
        © Valve Corporation. All rights reserved. All trademarks are property of
        their respective owners in the US and other countries.
      </div>
    </footer>
  );
});
export default Footer;
