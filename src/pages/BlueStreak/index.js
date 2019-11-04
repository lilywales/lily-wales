import React, { Component } from "react";
import MediaQuery from "react-responsive";
import LilyWales from "./../../Components/LilyWales";
import ProjectTitle from "./../../Components/ProjectTitle";
import BackToTop from "./../../Components/BackToTop";
import HomeButton from "./../../Components/HomeButton";
import BlueStreakContent from "./../../Components/BlueStreakContent";

class BlueStreak extends Component {
  render() {
    return (
      <div>
        <BlueStreakContent/>
          <MediaQuery minWidth={900}>
            <ProjectTitle title="Blue Streak" color="rgb(0, 33, 255)"     top="133.5px" />
            <HomeButton
              color="rgb(0, 33, 255)"
              top="803.5%"
              right="5.5%"
              paddingBottom="50px"
            />
            <BackToTop color="rgb(0, 33, 255)" top="800%" right="5.5%" />
          </MediaQuery>
          <MediaQuery minWidth={600} maxWidth={899}>
            <ProjectTitle
              title="Blue Streak"
              color="rgb(0, 33, 255)"
              top="65.5px"
            />{" "}
            <BackToTop color="rgb(0, 33, 255)" top="530.5%" left="4.8%" />
            <HomeButton
              color="rgb(0, 33, 255)"
              top="534.5%"
              left="4.8%"
              paddingBottom="50px"
            />
          </MediaQuery>
        <LilyWales color="rgb(38, 235, 34)" />
      </div>
    );
  }
}

export default BlueStreak;
