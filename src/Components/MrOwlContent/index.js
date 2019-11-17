import React, { Component } from "react";
import "./mrOwlContent.css";
import mrowl1 from "./mrowl1.png";
import mrowl2 from "./mrowl2.png";
import mrowl3 from "./mrowl3.png";
import mrowl4 from "./mrowl4.png";
import mrowl5 from "./mrowl5.png";
import mrowl6 from "./mrowl6.png";

class MrOwlContent extends Component {
  render() {
    return (
      <div >
      <div className="mrOwlText">
        <p>A palindrome that responds to theme of ‘The Twin’ for Coventry Biennial. The work explores the sinking of the HMS Coventry that was part of a pairing, unofficially termed Type 64, with the warship Broadsword. After being struck by bombs from a second wave of A-4 Skyhawks, HMS Coventry descended down to the sea floor, taking its on-board weaponry with it.
        </p>
      </div>
      	<img className="mrowl1" src={mrowl1} alt="" />
        <img className="mrowl2" src={mrowl2} alt="" />
        <img className="mrowl3" src={mrowl3} alt="" />
        <div className="mrowl4and5">
        <img className="mrowl4" src={mrowl4} alt="" />
        <img className="mrowl5" src={mrowl5} alt="" />

</div>
<img className="mrowl6" src={mrowl6} alt="" />
        </div>
    );
  }
}

export default MrOwlContent;
