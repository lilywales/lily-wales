import React, { Component } from 'react';
import Linkify from 'react-linkify';

import './sfContent.css';
import sf1 from './sf1.jpg';
import sf2 from './sf2.jpg';
import sf3 from './sf3.jpg';

class SilverfishContent extends Component {
	render() {
		return (
            <Linkify>
			<div className="image_wrapper">
				<img className="sfish1" src={sf1} alt="title frame from the animation. a black gloop with bolts and bubbles background with a hot pink outline of the word silverfish, which looks like electricity" />
                <div className="sfishText">
					<p>
					Still frames from the SILVERFISH trailer. To watch full animation please click here. https://vimeo.com/465786669
					</p>
                    
				</div>
                <img className="sfish2" src={sf2} alt="a bright pink fleshy background with black tones. A close up of the SILVERFISH split into 3 closely arranged boxes, the middle box is square and the other two are vertical rectangles. Within them the hard, scaley-shell like surface can be seen. it is mostly black with with green tones. an antenne can be seen and an organic turret pretudes from the middle." />
                <img className="sfish3" src={sf3} alt="a bright pink fleshy background with light pink tones. A large toxic green egg that has lime coloured slime at the top sits in the left side of the frame. There are 7 mini version of the same egg, varying in sizes, dotted around the frame" />
            </div>
            </Linkify>
		);
	}
}

export default SilverfishContent;
