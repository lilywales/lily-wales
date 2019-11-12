import React, { Component } from "react";
import MediaQuery from "react-responsive";
import LilyWales from "./../../Components/LilyWales";
import HomeButton from "./../../Components/HomeButton";
import ProjectTitle from "./../../Components/ProjectTitle";
import PhotoCredit from "./../../Components/PhotoCredit";
import Rhonda from "./../../Components/Rhonda";
import BackToTop from "./../../Components/BackToTop";

class RadioactiveRhonda extends Component {
  render() {
    return (
      <div>
        <Rhonda/>
        <MediaQuery minWidth={901}>
          <ProjectTitle
            title="Radioactive Rhonda!"
            color="rgb(255,32,32)"
            width="92%"
          />{" "}
          <HomeButton color="rgb(0,255,126)" top="487%" right="5.5%" />
          <BackToTop color="rgb(0,255,126)" top="482%" right="5.5%" />
          <PhotoCredit
            photoCredit="Photo credit: Murdock Ramone"
            color="rgb(255,32,32)"
            right="5.5%"
            top="422%"
            textAlign="right"
          />
        </MediaQuery>
        <MediaQuery maxWidth={900} minWidth={601}>
          <ProjectTitle
            title="Radioactive Rhonda!"
            color="rgb(255,32,32)"
            lineHeight="0.7"
            top="51px"
          />{" "}
          <HomeButton
            color="rgb(0,255,126)"
            top="333%"
            right="5.5%"
            paddingBottom="15px"
          />
          <BackToTop color="rgb(0,255,126)" top="330.5%" right="5.5%" />
          <PhotoCredit
            photoCredit="Photo credit: Murdock Ramone"
            color="rgb(255,32,32)"
            left="9.5%"
            top="230.5%"
            textAlign="left"
          />
        </MediaQuery>
        <MediaQuery maxWidth={600}>
          <ProjectTitle
            title="Radioactive Rhonda!"
            color="rgb(255,32,32)"
            lineHeight="0.7"
            top="26px"
          />
          <HomeButton
            color="rgb(0,255,126)"
            top="363%"
            right="5%"
            paddingBottom="15px"
          />
          <BackToTop color="rgb(0,255,126)" top="360.5%" right="5%" />
          <PhotoCredit
            photoCredit="Photo credit: Murdock Ramone"
            color="rgb(255,32,32)"
            left="9.5%"
            top="233%"
            textAlign="left"
          />
        </MediaQuery>
        <LilyWales color="rgb(0,255,126)" />
      </div>
    );
  }
}

export default RadioactiveRhonda;
