import React, { Component } from "react";
import { Keyframes, Frame } from "react-keyframes";
import MediaQuery from "react-responsive";
import rhonda from "./../../Components/HomeImages/rhondaHome.jpg";
import blue from "./../../Components/HomeImages/blueStreakHome.jpg";
import lasV from "./../../Components/HomeImages/lasVaguenessHome.jpg";
import contact from "./../../Components/HomeImages/contactHome.jpg";
import atomicK from "./../../Components/HomeImages/atomicKittenHome.jpg";

const styles = {

  homeImagesPhoneGif: {
    position: "absolute",
    top: '190px',
    width: '100%',
  },
  homeImagesIpadGif: {
    position: "absolute",
    top: '288px',
    width: '100%',
  }
};


class HomeImagesGif extends Component {
  render() {
    return (
      <div>
        <MediaQuery maxWidth={600} >
          <Keyframes
            component="pre"
            delay={1}
            loop={true}
            style={styles.homeImagesPhoneGif}
          >
          <Frame alt="Blue Streak" duration={3000}>
            <img src={rhonda} alt="" style={styles.homeImagesPhoneGif} />
          </Frame>
          <Frame duration={3000}>
            <img src={atomicK} alt="" style={styles.homeImagesPhoneGif} />
          </Frame>
          <Frame duration={3000}>
            <img src={blue} alt="" style={styles.homeImagesPhoneGif} />
          </Frame>
          <Frame duration={3000}>
            <img src={lasV} alt="" style={styles.homeImagesPhoneGif} />
          </Frame>

          <Frame duration={3000}>
            <img src={contact} alt="" style={styles.homeImagesPhoneGif} />
          </Frame>
        </Keyframes>
      </MediaQuery>
      <MediaQuery minWidth={601} maxWidth={900} >
        <Keyframes
          component="pre"
          delay={1}
          loop={true}
          style={styles.homeImagesIpadGif}
        >
        <Frame alt="Blue Streak" duration={3000}>
          <img src={rhonda} alt="" style={styles.homeImagesIpadGif} />
        </Frame>
        <Frame duration={3000}>
          <img src={atomicK} alt="" style={styles.homeImagesIpadGif} />
        </Frame>
        <Frame duration={3000}>
          <img src={blue} alt="" style={styles.homeImagesIpadGif} />
        </Frame>
        <Frame duration={3000}>
          <img src={lasV} alt="" style={styles.homeImagesIpadGif} />
        </Frame>
     
        <Frame duration={3000}>
          <img src={contact} alt="" style={styles.homeImagesIpadGif} />
        </Frame>
      </Keyframes>
    </MediaQuery>
    </div>
    );
  }
}

export default HomeImagesGif ;
