import React, { Component } from 'react';
import './bikiniBottomContent.css';
import bb1 from './bb1.jpg';
import bb2 from './bb2.jpg';
import bb3 from './bb3.jpg';
import bb4 from './bb4.png';
import bb5 from './bb5.png';
import bb6 from './bb6.jpg';
import bb7 from './bb7.jpg';
import bb8 from './bb8.jpg';
import bb9 from './bb9.jpg';
import bb10 from './bb10.png';
import bb11 from './bb11.jpg';
import bb12 from './bb12.jpg';

class BikiniBottomContent extends Component {
	render() {
		return (
			<div>
					<img className="bb1" src={bb1} alt="A hot pink background with a mutated crustacean photomontage. It's head is formed from a vintage diving suit and the body is black adn white organic matter. Blue pincers pertrude from the bottm of the body." />
					<img className="bb2" src={bb2} alt="A vibrant blue with a turquoise tone is the background for a mutated tuna like fish that has the facial features of a mad scientist" />
					<div className="bb3and4 desktopImgs">
						<img className="bb3" src={bb3} alt="An orange background with a jellyfish like creature. It has a long black and white body with splashes of pink detail. There are six tentacles, some flow softly and others are shraper and more rigid." />
						<img className="bb4" src={bb4} alt="A starfish like creature, that is a parady of Patrick from Spongebob Squarepants. His body is spotty and only the lower two legs are in colour, a redish pink." />
					</div>
					<div className="bb5and6 desktopImgs">
						<img className="bb5" src={bb5} alt="A parady of Squidward on a neon green background. Embedded in the stiff upright body is a gas mask that mirrors the circular framework of the coral that acts as Squidward's face." />
						<img className="bb6" src={bb6} alt="A photomontage from the series Bikini Bottom. A mostly black and white image with flashes of red. The piece is a sea like creature formed of organic and mechanical elements. It has a lumpy and rounded triangular body with a long muscular neck that curls up and to the left, with a mutated head that is slightly smaller than the body." />
					</div>
					<img className="bb7" src={bb7} alt="A blob fish like mound sits in a puddle of melted organic matter, against a hot pink background." />
					<div className="bb8and9 desktopImgs">
						<img className="bb8" src={bb8} alt="A formation of coral that curls round encasing a mysterious form made up of a vintage diving suit." />
						<img className="bb9" src={bb9} alt="A loose parady of a Spongebob Squarepants. Its rectangular face is symetrical with the surface of burnt skin. One leg is an old boot and another has been appropriated by a mushroom." />
					</div>
					<img className="bb10" src={bb10} alt="A mutated sea turtle with a sharks jaw, a back flipper resembling a deformed hand, cyrstals and coral frowing from its shell." />
					<div className="bb11and12 desktopImgs">
						<img className="bb11" src={bb11} alt="On a vibrant blue with a turquoise tone, is an aggressive looking seagull with sharp teeth and a pretuding eye coming out of its back. Its neck is bent in a dramatic manner and one leg is formed of jagged crystals" />
						<img className="bb12" src={bb12} alt="Like mickey mouse this sea slug like creature has a red body with white spots, as well as two round eyes and a boy on its head. Seeming to have four eyes, this curved thing is on a neon green background." />
					</div>

					<p className="BBdescript">
						A series exploring<br /> the mutated marine<br /> life left behind
						by<br /> the 23 atomic tests<br /> at Bikini Atoll<br /> between
						1946 and<br /> 1958.
					</p>

			<div className="mobImgs">
				<img className="bb3mob" src={bb3} alt="An orange background with a jellyfish like creature. It has a long black and white body with splahes of pink detail. There are six tentacles, some flow softly and others are shraper and more rigid." />
				<img className="bb4mob" src={bb4} alt="A starfish like creature, that is a parady of Patrick from Spongebob Squarepants. His body is spotty and only the lower two legs are in colour, a redish pink." />
				<img className="bb5mob" src={bb5} alt="A parady of Squidward on a neon green background. Embedded in the stiff upright body is a gas mask that mirrors the circular framework of the coral that acts as Squidward's face." />
				<img className="bb6mob" src={bb6} alt="A photomontage from the series Bikini Bottom. A mostly black and white image with flashes of red. The piece is a sea like creature formed of organic and mechanical elements. It has a lumpy and rounded triangular body with a long muscular neck that curls up and to the left, with a mutated head that is slightly smaller than the body." />
				<img className="bb8mob" src={bb8} alt="A formation of coral that curls round encasing a mysterious form made up of a vintage diving suit." />
				<img className="bb9mob" src={bb9} alt="A loose parady of a Spongebob Squarepants. Its rectangular face is symetrical with the surface of burnt skin. One leg is an old boot and another has been appropriated by a mushroom." />
				<img className="bb11mob" src={bb11} alt="On a vibrant blue with a turquoise tone, is an aggressive looking seagull with sharp teeth and a pretuding eye coming out of its back. Its neck is bent in a dramatic manner and one leg is formed of jagged crystals" />
				<img className="bb12mob" src={bb12} alt="Like mickey mouse this sea slug like creature has a red body with white spots, as well as two round eyes and a boy on its head. Seeming to have four eyes, this curved thing is on a neon green background." />
			</div>
			</div>
		);
	}
}

export default BikiniBottomContent;
