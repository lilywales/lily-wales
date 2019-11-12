import React, { Component } from "react";
import MediaQuery from "react-responsive";
import LilyWales from "./../../Components/LilyWales";
import ProjectTitle from "./../../Components/ProjectTitle";
import MrOwlContent from "./../../Components/MrOwlContent";

class MrOwl extends Component {
  render() {
    return (
      <div>
        <div>
            <MediaQuery minWidth={900}>
          <ProjectTitle title="Mr Owl Ate My Metal Worm" color="rgb(255, 0, 161)" top="113px"  width="600px"     lineHeight="0.74" />
            </MediaQuery>
          <LilyWales color="rgb(39, 215, 72)" />
          <MrOwlContent/>
        </div>
      </div>
    );
  }
}

export default MrOwl;
