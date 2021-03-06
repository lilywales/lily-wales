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
            <ProjectTitle title="Blue Streak" color="rgb(0, 33, 255)"     top="135.5px" />
            <HomeButton
              color="rgb(38, 235, 34)"
              top="803.5%"
              right="5.5%"
              paddingBottom="50px"
            />
            <BackToTop color="rgb(38, 235, 34)" top="800%" right="5.5%" />
          </MediaQuery>
          <MediaQuery minWidth={600} maxWidth={899}>
            <ProjectTitle
              title="Blue Streak"
              color="rgb(0, 33, 255)"
              top="65.5px"
            />{" "}
            <BackToTop color="rgb(38, 235, 34)" top="455%" left="4.8%" />
            <HomeButton
              color="rgb(38, 235, 34)"
              top="457.5%"
              left="4.8%"
              paddingBottom="50px"
            />
          </MediaQuery>
          <MediaQuery maxWidth={600} minWidth={321}>
            <HomeButton
              color="rgb(38, 235, 34)"
              top=" 416%"
              left="4.8%"
              paddingBottom="50px"
            />{" "}
            <BackToTop color="rgb(38, 235, 34)" top=" 413%" left="4.8%" />
          </MediaQuery>
          <MediaQuery maxWidth={599}>
            <ProjectTitle
              title="Blue Streak"
              color="rgb(0, 33, 255)"
              top="37px"
            />
          </MediaQuery>
          <MediaQuery maxWidth={320}>
            <HomeButton
              color="rgb(38, 235, 34)"
              top=" 426%"
              left="4.8%"
              paddingBottom="50px"
              />{" "}
            <BackToTop color="rgb(38, 235, 34)" top=" 423%" left="4.8%" />
          </MediaQuery>
        <LilyWales color="rgb(38, 235, 34)" />
      </div>
    );
  }
}

export default BlueStreak;
