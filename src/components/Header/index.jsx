import React, { memo } from "react";
import LogoSteam from "../../assets/image/logo_steamworks_sales.png";
import "./style.scss";
const Header = memo(() => {
  return (
    <header className="header">
      <img src={LogoSteam} alt="SteamWorks Sales Activations Reports" />
    </header>
  );
});
export default Header;
