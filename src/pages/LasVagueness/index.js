import React, { Component } from "react";
import MediaQuery from "react-responsive";
import LilyWales from "./../../Components/LilyWales";
import ProjectTitle from "./../../Components/ProjectTitle";
import BackToTop from "./../../Components/BackToTop";
import HomeButton from "./../../Components/HomeButton";
import LVContent from "./../../Components/LVContent";

class LasVagueness extends Component {
  render() {
    return (
      <div>
      <LVContent />
      <MediaQuery minWidth={900}>
        <HomeButton
          color="rgb(0, 41, 255)"
          top="1701%"
          left="4.8%"
          paddingBottom="50px"
        />{" "}
        <BackToTop color="rgb(0, 41, 255)" top="1697%" left="4.8%" />

      </MediaQuery>


        <LilyWales color="rgb(0, 41, 255)" />

        <MediaQuery maxWidth={899} minWidth={601}>
          <BackToTop color="rgb(0, 41, 255)" top="887%"   right="5.5%"/>
          <HomeButton
            color="rgb(0, 41, 255)"
            top="889.5%"
            right="5.5%"
            paddingBottom="50px"
          />

        </MediaQuery>





        <MediaQuery maxWidth={600} minWidth={321}>

          <BackToTop color="rgb(0, 41, 255)" top=" 691%" right="4.8%" />
          <HomeButton
            color="rgb(0, 41, 255)"
            top=" 693.5%"
            right="4.8%"
            paddingBottom="50px"
          />{" "}
        </MediaQuery>


        <MediaQuery minWidth={321}>
          <ProjectTitle title="Las Vagueness" color="rgb(255,32,32)" />
        </MediaQuery>
        <MediaQuery maxWidth={320}>
          <ProjectTitle
            title="Las Vagueness"
            color="rgb(255,32,32)"
            lineHeight="0.7"
            top="26px"
          />
          <HomeButton
            color="rgb(0, 41, 255)"
            top=" 701%"
            left="4.8%"
            paddingBottom="50px"
          />
            <BackToTop color="rgb(0, 41, 255)" top=" 698%" left="4.8%" />
        </MediaQuery>
      </div>
    );
  }
}

export default LasVagueness;
