import React, { Component } from 'react';
import './rhonda.css';
import rhonda1 from './r1.jpg';
import rhonda2 from './r2.jpg';
import rhonda3 from './r3.jpg';
import rhonda4 from './r4.jpg';
import rhonda5 from './r5.jpg';
import rhonda6 from './r6.jpg';

class Rhonda extends Component {
	render() {
		return (
			<div >
				<img className="rhonda1" src={rhonda1} alt="A close up of Rhonda, showing half her circular form. Her surfce is multi-coloured with collages that of natural, mechanical and medical elements. The most prominent colours on this image are red and blue tones. The background wall is white and at the bottom you can see the beige sand with dark speckles that she sits on." />
				<div className="rhonda2and3">
					<img className="rhonda2" src={rhonda2} alt="A close up of Rhonda showing the complex detail of her skin. Images reference biological and unnatural forms to comment on nuclear culture." />
					<img className="rhonda3" src={rhonda3} alt="A close up of Rhonda's lower half. The beige sand she sits on references the Nevada Test Site where atomic testing used to take place." />
				</div>
				<img className="rhonda4" src={rhonda4} alt="A large white room with 8 foot white boards, the cieling is much higher with a large circle embossed into the wall, mirroring Rhonda's shape. The room is lit by natural light from windows on right of the roof. Rhonda looks large and her photomontage surface complex." />
				<img className="rhonda5" src={rhonda5} alt="A small section of Rhonda, greens, reds and blues are visible on her skin with teeth and plant like photomontages. " />
				<img className="rhonda6" src={rhonda6} alt="Rhonds's full spherical form in the centre of the image. Her surface multi-coloured and she sits on sand with the wall providing a white background." />
				<div className="RTextWrapper">
					<p>
					Radioactive Rhonda! is a<br /> hyperreal parody of<br /> Gadget, the
					bomb device
					<br />used in the first nuclear<br /> test Trinity (1945).<br />{' '}
					Mirroring the scale of<br /> Gadget at 6 foot, her<br /> simulation
					threatens the<br /> difference between true<br /> and false, symtoms
					of<br /> placebo soon emerge in<br /> her presence. Rhonda<br />{' '}
					proves the truth is often<br /> stranger than fiction. Her<br />{' '}
					name seamlessly slips<br /> into the US government’s<br /> portfolio
					of weaponry
					<br />names, alongside Atomic<br />Annie, Mr Plumbob,<br /> Romeo
					and Smokey to<br /> name a few.
					</p>
				</div>
				<div className="mobImgs">
					<img className="rhonda2mob" src={rhonda2} alt="A close up of Rhonda showing the complex detail of her skin. Images reference biological and unnatural forms to comment on nuclear culture." />
					<img className="rhonda3mob" src={rhonda3} alt="A close up of Rhonda's lower half. The beige sand she sits on references the Nevada Test Site where atomic testing used to take place." />
				</div>
			</div>
		);
	}
}

export default Rhonda;
