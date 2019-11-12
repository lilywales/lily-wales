import React, { Component } from 'react';
import './plumbobContent.css';
import p1 from './phorm.jpg';
import p2 from './phorm2.jpg';
import p3 from './phorm3.jpg';
import p4 from './phorm4.jpg';
import p5 from './phorm5.jpg';
import p6 from './phorm6.jpg';

class PlumbobContent extends Component {
	render() {
		return (
			<div>
				<img className="plum1" src={p1} alt="Phorm" />
				<div className="plum2and3">
				   <img className="plum2" src={p2} alt="Phorm" />
				   <img className="plum3" src={p3} alt="Phorm" />
        </div>
				<img className="plum4" src={p4} alt="Phorm" />
				<img className="plum5" src={p5} alt="Phorm" />
				<img className="plum6" src={p6} alt="Phorm" />
        <div className="mobImgs">
           <img className="plum2mob" src={p2} alt="Phorm" />
           <img className="plum3mob" src={p3} alt="Phorm" />
        </div>
			</div>
		);
	}
}

export default PlumbobContent;
