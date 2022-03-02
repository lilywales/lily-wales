import React, { Component } from "react";
import "./sfContent.css";
import sf1 from "./sf1.jpg";
import sf2 from "./sf4.png";
import sf3 from "./sf5.jpg";
import sf4 from "./sf6.jpg";
import sf5 from "./sf7.jpg";
import sf6 from "./sf12.jpg";
import sf8 from "./sf13.jpg";
import sf10 from "./sf10.jpg";
import sf11 from "./sf11.jpg";
import sf14 from "./sf14.jpg";
import sf16 from "./sf16.jpg";

class SilverfishContent extends Component {
  render() {
    return (
        <div className="image_wrapper">
          <img
            className="sfish1"
            src={sf1}
            alt=" "
          />
          <img
            className="sfish2"
            src={sf2}
            alt=" "
          />
          <img
            className="sfish3"
            src={sf3}
            alt=" "
          /> 
            <img
            className="sfish4"
            src={sf4}
            alt=" "
          />
          <img
            className="sfish5"
            src={sf5}
            alt=" "
          /> 
           <img
            className="sfish6"
            src={sf6}
            alt=" "
          />
          <img
            className="sfish7"
            src={sf8}
            alt=" "
          /> 
           <img
            className="sfish8"
            src={sf10}
            alt=" "
          />
          <img
            className="sfish10"
            src={sf11}
            alt=" "
          /> 
           <img
            className="sfish14"
            src={sf14}
            alt=" "
          />
          <img
            className="sfish16"
            src={sf16}
            alt=" "
          /> 
        </div>
    );
  }
}

export default SilverfishContent;
