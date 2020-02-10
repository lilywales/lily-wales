import React, { Component } from "react";
import MediaQuery from "react-responsive";
import LilyWales from "./../../Components/LilyWales";
import ProjectTitle from "./../../Components/ProjectTitle";
import BackToTop from "./../../Components/BackToTop";
import HomeButton from "./../../Components/HomeButton";
import AtomicKittenContent from "./../../Components/AtomicKittenContent";

class AtomicKitten extends Component {
  render() {
    return (
      <div>
        <AtomicKittenContent/>
          <MediaQuery minWidth={900}>
            <ProjectTitle title="Atomic Kitten" color="rgb(9, 116, 165)"     top="135.5px" />
            <HomeButton
              color="rgb(255, 102, 255)"
              top="803.5%"
              right="5.5%"
              paddingBottom="50px"
            />
            <BackToTop color="rgb(255, 102, 255)" top="800%" right="5.5%" />
          </MediaQuery>
          <MediaQuery minWidth={600} maxWidth={899}>
            <ProjectTitle
              title="Atomic Kitten"
              color="rgb(9, 116, 165)"
              top="65.5px"
             
            />{" "}
            <BackToTop color="rgb(255, 102, 255)" top="455%" left="4.8%" />
            <HomeButton
              color="rgb(255, 102, 255)"
              top="457.5%"
              left="4.8%"
              paddingBottom="50px"
            />
          </MediaQuery>
          <MediaQuery maxWidth={600} minWidth={321}>
            <HomeButton
              color="rgb(255, 102, 255)"
              top=" 430%"
              left="4.8%"
              paddingBottom="50px"
            />{" "}
            <BackToTop color="rgb(255, 102, 255)" top=" 427%" left="4.8%" />
          </MediaQuery>
          <MediaQuery maxWidth={599}>
            <ProjectTitle
              title="Atomic Kitten"
              color="rgb(9, 116, 165)"
              top="37px"
            />
          </MediaQuery>
          <MediaQuery maxWidth={320}>
            <HomeButton
              color="rgb(255, 102, 255)"
              top="430%"
              left="5%"
              paddingBottom="50px"
              />{" "}
            <BackToTop color="rgb(255, 102, 255)" top=" 427%" left="5%" />
          </MediaQuery>
        <LilyWales color="rgb(255, 102, 255)" />
      </div>
    );
  }
}

export default AtomicKitten;
