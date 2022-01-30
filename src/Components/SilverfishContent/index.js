import React, { Component } from "react";
import "./sfContent.css";
import sf1 from "./sf1a.jpg";
import sf2 from "./sf4.png";
import sf3 from "./sf5.jpg";

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
        </div>
    );
  }
}

export default SilverfishContent;
