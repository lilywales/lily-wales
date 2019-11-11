import React, { Component } from "react";
import { Keyframes, Frame } from "react-keyframes";
import MediaQuery from "react-responsive";
import rhonda from "./../../Components/HomeImages/rhondaHome.jpg";
import blue from "./../../Components/HomeImages/blueStreakHome.jpg";
import lasV from "./../../Components/HomeImages/lasVaguenessHome.jpg";
import babyJ from "./../../Components/HomeImages/babyJanesHome.jpg";
import warM from "./../../Components/HomeImages/warMachineHome.jpg";
import nuc from "./../../Components/HomeImages/nuclearosisHome.jpg";

const styles = {

  homeImagesPhoneGif: {
    position: "absolute",
    top: '190px',
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
            <img src={blue} alt="" style={styles.homeImagesPhoneGif} />
          </Frame>
          <Frame duration={3000}>
            <img src={lasV} alt="" style={styles.homeImagesPhoneGif} />
          </Frame>
          <Frame duration={3000}>
            <img src={babyJ} alt="" style={styles.homeImagesPhoneGif} />
          </Frame>
          <Frame duration={3000}>
            <img src={warM} alt="" style={styles.homeImagesPhoneGif} />
          </Frame>
          <Frame duration={3000}>
            <img src={nuc} alt="" style={styles.homeImagesPhoneGif} />
          </Frame>
        </Keyframes>
      </MediaQuery>
    </div>
    );
  }
}

export default HomeImagesGif ;
