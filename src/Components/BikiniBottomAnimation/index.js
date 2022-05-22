import React from "react";
import Vimeo from "@u-wave/react-vimeo";
import MediaQuery from 'react-responsive';


const BikiniBottomAnimation = props => {
	const styles = {
  largevid: {
    position: 'absolute',
    right: '5.5%',
    top: props.top || '130%',

  },
  mediumvid: {
    position: 'absolute',
    right: '5.5%',
    top: props.top || '105%',

  },
  smallvid: {
    position: 'absolute',
    right: '9%',
    top: props.top || '90%',

  }
  };


    return (
      <div>
      <MediaQuery minWidth={900}>
    <div style={styles.largevid} >
      <Vimeo  video="712436287" autoplay loop muted height={'500'} width={'800'}  />
      </div>
      </MediaQuery>
      	<MediaQuery minWidth={601} maxWidth={899}>
				<div style={styles.mediumvid}>
        <Vimeo  video="712436287" autoplay loop muted height={'300'} width={'600'}  />
				</div>
			</MediaQuery>
      <MediaQuery  maxWidth={600}>
				<div style={styles.smallvid}>
        <Vimeo  video="712436287" autoplay loop muted height={'130'} width={'230'}  />
				</div>
			</MediaQuery>
      </div>
    )
  };







export default BikiniBottomAnimation;




