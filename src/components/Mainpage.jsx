import React from "react";
import "./Mainpage.css";
import headerimg from "./assests/images/image-hero-desktop.png";
import audiophile from "./assests/images/client-audiophile.svg";
import maker from "./assests/images/client-maker.svg";
import meet from "./assests/images/client-meet.svg";
import databiz from "./assests/images/client-databiz.svg";
function Mainpage() {
  return (
    <div className="main flex">
      <div className="left-hero flex">
        <h1>
          <b>Make </b> <br />
          remote work
        </h1>
        <p>
          Get your team in sync, no matter your location.
          <br />
          Steamline processes,create team rituals,and watch productivity soar.
        </p>
        <div className="btndiv">
          <button className="leftbtn">Learn more</button>
        </div>
        <div className="client client">
          <img src={databiz} alt="clogos" className="data" />
          <img src={audiophile} alt="clogos" className="audio" />
          <img src={meet} alt="clogos" className="meet" />
          <img src={maker} alt="clogos" className="maker" />
        </div>
      </div>
      <div className="right-hero">
        <img src={headerimg} alt="headerImage" />
      </div>
    </div>
  );
}

export default Mainpage;
