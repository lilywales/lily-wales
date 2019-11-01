import React, { Component } from 'react';
import './rhonda.css';
import rhonda1 from './r1.jpg';
import rhonda2 from './r2.jpg';
import rhonda23 from './r2-3.png';
import rhonda3 from './r3.jpg';
import rhonda4 from './r4.jpg';
import rhonda5 from './r5.jpg';
import rhonda6 from './r6.jpg';

class Rhonda extends Component {
	render() {
		return (
			<div className="wrapper">
				<img className="rhonda1" src={rhonda1} alt="A close up of Rhonda, showing half her circular form. Her surfce is multi-coloured with collages that of natural, mechanical and medical elements. The most prominent colours on this image are red and blue tones. The background wall is white and at the bottom you can see the beige sand with dark speckles that she sits on." />
				<img className="rhonda2-3" src={rhonda23} alt="Two close images of Rhonda, fousing on the lower hald of her spherical form. The beige sand is visible and on her surface, bioluminescent forms, tumours and images referencinh nuclear culture can be seen, such as mushroom clouds." />
				<img className="rhonda2" src={rhonda2} alt="A close up of Rhonda showing the complex detail of her skin. Images reference biological and unnatural forms to comment on nuclear culture." />
				<img className="rhonda3" src={rhonda3} alt="A close up of Rhonda's lower half. The beige sand she sits on references the Nevada Test Site where atomic testing used to take place." />
				<img className="rhonda4" src={rhonda4} alt="A large white room with 8 foot white boards, the cieling is much higher with a large circle embossed into the wall, mirroring Rhonda's shape. The room is lit by natural light from windows on right of the roof. Rhonda looks large and her photomontage surface complex." />
				<img className="rhonda5" src={rhonda5} alt="A small section of Rhonda, greens, reds and blues are visible on her skin with teeth and plant like photomontages. " />
				<img className="rhonda6" src={rhonda6} alt="Rhonds's full spherical form in the centre of the image. Her surface multi-coloured and she sits on sand with the wall providing a white background." />
			</div>
		);
	}
}

export default Rhonda;
