import React, { Component } from "react";



import "./sfContent.css";
import sf1 from "./sf1.jpg";


class SilverfishContent extends Component {
  render() {
    return (
     
     
        <div className="image_wrapper">
          <img
            className="sfish1"
            src={sf1}
            alt="title frame from the animation. a black gloop with bolts and bubbles background with a hot pink outline of the word silverfish, which looks like electricity"
          />

     
         
        </div>
      
    );
  }
}

export default SilverfishContent;
