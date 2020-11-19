import React, { Component } from 'react';
import './atomicKittenContent.css';
import ak1 from './ak1.jpg';
import ak2 from './ak2.jpg';
import mosh from './mosh.gif';
import ak3 from './ak3.jpg';
import ak4 from './ak4.jpg';
import ak5 from './ak5.jpg';
import ak6 from './ak6.jpg';
import ak7 from './ak7.jpg';
import ak8 from './ak8.jpg';
import ak9 from './ak9.jpg';
import ak10 from './ak10.jpg';


class AtomicKittenContent extends Component {
	render() {
		return (
      
      <div >
         <div className="akText">
          <p>Atomic Kitten explores the impact objects of war have on both the natural and poltical climate. Commenting on invisible systems that run on automatic within the societal infrastructure.</p>
        </div>
      	<img className="ak1" src={ak1} alt="A black and white checkered backround that is crumpled around a mushroom shaped form, with a circular bottom of sharp teeth."/>
        <img className="ak2" src={mosh} alt="A pink neon background with neon green flecks. In the middle is a black and white form that is organic in nature, with submarine elements. There is a thin swirled tail that coils, the overal form is loosely triangular. Along the bottom is a yellow that bleeds into the montage."/>
        <img className="ak3" src={ak3} alt="A neon yellow background with two peice of neon green tape visible at the top. The black shape in the middle, is similar to the shape of a submarine but with an insect like appearance. Along the bottom of the creature drips a bright toxic purple."/>
        <img className="ak4" src={ak4} alt="A checkered backrgound that folds on the righthand side. The organic and mechnaical creature has a drill like appearance."/>
        <div className="ak5and6">
        <img className="ak5" src={ak5} alt="A neon pink brackground with lilac flecks. The black and white form is round but sharp in places, with a pretuding eye."/>
        <img className="ak6" src={ak6} alt="A square neon pink background. The tail of a bug like creature, which also resembles a sea cucumber, comes in from the right hand side. pouring from the tip is a toxic yellow substance."/>
        <img className="ak7" src={ak7} alt="A checkered black and white background. A form with no limbs, except one small deviation, swims facing down. The face of a submarine "/>
        <img className="ak8" src={ak8} alt="A neon green background, with an orgnaic submarine form gliding across. A black substance with pink flecks seeps across horizontally."/>
        <img className="ak9" src={ak9} alt="A mechanical form with a hollow centre, reveals the neon yellow background, alonside sparadic redness."/>
        <img className="ak10" src={ak10} alt="A checkered background that crumples as a missile like form cuts through the composition. It was deployed from the organic subrmaine coasting above."/>
        </div>
        <div className='player-wrapper'>

      </div>
     
      </div>
    );
  }
}

export default AtomicKittenContent;
