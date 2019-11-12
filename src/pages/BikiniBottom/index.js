import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import LilyWales from './../../Components/LilyWales';
import ProjectTitle from './../../Components/ProjectTitle';
import BackToTop from './../../Components/BackToTop';
import HomeButton from './../../Components/HomeButton';
import BikiniBottomContent from './../../Components/BikiniBottomContent';

class BikiniBottom extends Component {
	render() {
		return (
			<div>
				<BikiniBottomContent />
				<MediaQuery minWidth={900}>
					<ProjectTitle title="Bikini Bottom" color="rgb(201,0,203)" />
          <HomeButton
						color="rgb(201,0,203)"
						top="885%"
						left="5.5%"
						paddingBottom="50px"
					/>
          <BackToTop color="rgb(201,0,203)" top="880%" left="5.5%" />
      	</MediaQuery>
				<MediaQuery minWidth={601} maxWidth={899}>
					<ProjectTitle
						title="Bikini Bottom"
						color="rgb(201,0,203)"
						top="65.5px"
					/>{' '}
        <BackToTop color="rgb(201,0,203)" top="481%" left="5.5%" />
        <HomeButton
          color="rgb(201,0,203)"
          top="483.5%"
          left="5.5%"
          paddingBottom="50px"
        />
      	</MediaQuery>

				<MediaQuery maxWidth={600}>
					<ProjectTitle
						title="Bikini Bottom"
						color="rgb(201,0,203)"
						top="37px"
					/>
          <BackToTop color="rgb(201,0,203)" top=" 661%" left="6%" />
          <HomeButton
  						color="rgb(201,0,203)"
  						top=" 664%"
  						left="6%"
  						paddingBottom="50px"
  					/>
      	</MediaQuery>


				<LilyWales color="rgb(30,255,0)" />





			</div>
		);
	}
}

export default BikiniBottom;
