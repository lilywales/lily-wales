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
      	<img className="mrowl1" src={mrowl1} alt="Using 2 clamps, this artwork is mounted onto a white wall with a grey cement floor, and white square ceiling tiles. The piece is 1.6 metres high and 1.4 metres wide. The material is an old disused billboard that is powder blue in colour with wear and tear, as well being covered in rust. Sections of the piece are neon yellow, with the most prominent section being the middle, where there is also some neon pink paint. The photomontage is black and white. It is a fish like creautre that mechanical in nature and appears connected to a water pipe that extends to the edge of the billboard." />
        <img className="mrowl2" src={mrowl2} alt="The same piece as in the previous image, only the enviroment is more visible. The work is shown within an old NHS rehab centre. A series of holes in the wall resemble bullet holes." />
        <img className="mrowl3" src={mrowl3} alt="A piece that is 3 metres long and 2.3 metres high. Again this piece is an old billboard that is powder blue. There is a lot more rust and creases in the paper visible. Neon pink and yellow appear in multiple sections, alongside splashings of white and pink paint. The piece emulates a seascape with multiple creatures photomontaged." />
        <div className="mrowl4and5">
        <img className="mrowl4" src={mrowl4} alt="A close up of the previous image. A biolumenecent type creture with an entomological appearance. On its right hand side it is encased in a thin layer of white paint with splashes of pink. It appears to have a bulbous head and jelly fish like body that extends down in a curling futurist but natural tail. The upper half is surrounded by a neon yellow background" />
        <img className="mrowl5" src={mrowl5} alt="Another close up. Same powder blue and rusted surface with flashes of neon yellow and pink. There are 3 creatures visible. Top left is the smallest, a jelly fish like form with four eyes in the middle and only one tentscle, it is entitely black and white. Below is the top half of a legless form. It is double the size and its face is reminsicent of a whale or shark. To the right is the largest beast. It is predomintely black and white except a dark shiny teal body part at the top, which has pinchers. The overal form is spikey and smooth with an entomological aesthetic. Its body is curled into a c like shape, appearing to drift away from the other creatures." />

</div>
<img className="mrowl6" src={mrowl6} alt="An image of the whole piece again but this time with more of the gallery space to be seen. The wall is white and there are brown floorboards. A red bench provides some scale for the viewer to see how large the piece is." />
        </div>
    );
  }
}

export default MrOwlContent;
