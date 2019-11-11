import React, { Component } from 'react';
import './warMachineContent.css';
import wm1 from './wm1.jpg';
import wm2 from './wm2.jpg';
import wm3 from './wm3.jpg';
import wm4 from './wm4.jpg';
import wm5 from './wm5.jpg';
import wm6 from './wm6.jpg';
import wm7 from './wm7.jpg';
import wm8 from './wm8.jpg';
import wm9 from './wm9.jpg';
import wm10 from './wm10.jpg';

class WarMachineContent extends Component {
	render() {
		return (
			<div >
				<img className="wm1" src={wm1} alt="The face of a taruntula bonded to the lower half of a child wearing a gask mask. The glue bonding them is white and web like." />
        <div className="wm2and3">
          <img className="wm2" src={wm2} alt="A black and white photo of a man standing in front of a brick wall. He is wearing a suit and breathing apparatus. In the middle of the image is a circular overlay in colour of a bioluminescent creature. The positioning makes the man look as if his breathing equipment is connected to the creature" />
          <img className="wm3" src={wm3} alt="Two figures in a black white image, wearing gask maks against a clouded sky. In the lower haf of the image, there is a circular over lay of a blue neck with a scientific asesthetic. The glue around the circle has discoloured yellow from age." />
        </div>
        <div className="wm4and5">
          <img className="wm4" src={wm4} alt="The top half of the montage is a black and white photo of 2 dogs wearing gas masks. This image is glued to a coloured image of a dogs barking mouth." />
          <img className="wm5" src={wm5} alt="A crowd of soldiers wearing gas masks with a circular overlay of an antelopes horns. The glue is messy and discoloured yellow." />
        </div>
        <div className="wm6and7">
          <img className="wm6" src={wm6} alt="Split between the image of a horse wearing a gas mask and a buffalo, this montage looks as if a childs horse toy. Yellow discoloured glue is visible vertically." />
          <img className="wm7" src={wm7} alt="Split diagonally down corner to corner, a soldiers uniform mimicks the print of a zebra." />
        </div>
        <div className="wm8and9">
        <img className="wm8" src={wm8} alt="Split down the middle horizontally, the top half is filled with orange maggots. Bonded with puckered discoloured glue, below is a black and white image of the lower half of a horse. Only the legs are visible, alongside the bottom of its gas mask which is a long tube bag." />
        <img className="wm9" src={wm9} alt="The top half of is a black and white image of a woman wearing a gas mask, taking her baby out for a walk in a pram. It is juxtaposed with the scales of a crocodile, which fill the lower half of the overall image." />
        </div>
				<img className="wm10" src={wm10} alt="The final piece in the series , is split down the middle vertically with the white puckered glue mirroring the surface of waves to the left. The waves are created by a great white shark whose mouth is open to attack. The righthand side of the image is a black and white shot of a family going swimming wearing gas masks." />
				<div className="wmWrapper">
					<p className="wmDescription">
						In this series the
						notion of war is explored through the juxtaposition
						of predatory
						instinct and the need for survival. Selected artworks
						exhibited at The
						Photographers Wall & Argentea Gallery.
					</p>
				</div>
        <div className="mobImgs">
          <img className="wm2mob" src={wm3} alt="Two figures in a black white image, wearing gask maks against a clouded sky. In the lower haf of the image, there is a circular over lay of a blue neck with a scientific asesthetic. The glue around the circle has discoloured yellow from age." />
          <img className="wm3mob" src={wm2} alt="A black and white photo of a man standing in front of a brick wall. He is wearing a suit and breathing apparatus. In the middle of the image is a circular overlay in colour of a bioluminescent creature. The positioning makes the man look as if his breathing equipment is connected to the creature" />
          <img className="wm4mob" src={wm4} alt="The top half of the montage is a black and white photo of 2 dogs wearing gas masks. This image is glued to a coloured image of a dogs barking mouth." />
          <img className="wm5mob" src={wm5} alt="A crowd of soldiers wearing gas masks with a circular overlay of an antelopes horns. The glue is messy and discoloured yellow." />
          <img className="wm6mob" src={wm6} alt="Split between the image of a horse wearing a gas mask and a buffalo, this montage looks as if a childs horse toy. Yellow discoloured glue is visible vertically." />
          <img className="wm7mob" src={wm7} alt="Split diagonally down corner to corner, a soldiers uniform mimicks the print of a zebra." />
          <img className="wm8mob" src={wm8} alt="Split down the middle horizontally, the top half is filled with orange maggots. Bonded with puckered discoloured glue, below is a black and white image of the lower half of a horse. Only the legs are visible, alongside the bottom of its gas mask which is a long tube bag." />
          <img className="wm9mob" src={wm9} alt="The top half of is a black and white image of a woman wearing a gas mask, taking her baby out for a walk in a pram. It is juxtaposed with the scales of a crocodile, which fill the lower half of the overall image." />
        </div>
      </div>
		);
	}
}

export default WarMachineContent ;
