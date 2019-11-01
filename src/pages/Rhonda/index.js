import React, { Component } from "react";
import MediaQuery from "react-responsive";
import LilyWales from "./../../Components/LilyWales";
import HomeButton from "./../../Components/HomeButton";
import ProjectTitle from "./../../Components/ProjectTitle";
import Rhonda from "./../../Components/Rhonda";
import BackToTop from "./../../Components/BackToTop";
import ProjectDescription from "./../../Components/ProjectDescription";

class RadioactiveRhonda extends Component {
  render() {
    return (
      <div>
      <Rhonda/>
      <ProjectDescription
        description="	Radioactive Rhonda! is a hyperreal parody of Gadget, the bomb device used in the first nuclear test Trinity (1945). Mirroring the scale of Gadget at 6 foot, her simulation threatens the difference between true and false, symtoms of placebo soon emerge in her presence. Rhonda proves the truth is often stranger than fiction. Her name seamlessly slips into the US government’s portfolio of weaponry names, alongside Atomic Annie, Mr Plumbob, Romeo and Smokey to name a few."
        color="rgb(255,32,32)"
        

      />
        <MediaQuery minWidth={901}>
          <ProjectTitle
            title="Radioactive Rhonda!"
            color="rgb(255,32,32)"
            width="92%"
          />{" "}
        </MediaQuery>
        <MediaQuery maxWidth={900} minWidth={600}>
          <ProjectTitle
            title="Radioactive Rhonda!"
            color="rgb(255,32,32)"
            lineHeight="0.7"
            top="51px"
          />{" "}
        </MediaQuery>
        <MediaQuery maxWidth={599}>
          <ProjectTitle
            title="Radioactive Rhonda!"
            color="rgb(255,32,32)"
            lineHeight="0.7"
            top="26px"
          />
        </MediaQuery>
        <LilyWales color="rgb(0,255,126)" />


        <MediaQuery minWidth={900}>
          <HomeButton color="rgb(0,255,126)" top="487%" right="5.5%" />
        </MediaQuery>
        <MediaQuery maxWidth={899} minWidth={601}>
          <HomeButton
            color="rgb(0,255,126)"
            top="323%"
            right="5.5%"
            paddingBottom="15px"
          />
        </MediaQuery>
        <MediaQuery maxWidth={600}>
          <HomeButton
            color="rgb(0,255,126)"
            top="363%"
            right="5%"
            paddingBottom="15px"
          />


        </MediaQuery>
        <MediaQuery minWidth={900}>
          <BackToTop color="rgb(0,255,126)" top="482%" right="5.5%" />
        </MediaQuery>
        <MediaQuery minWidth={601} maxWidth={900}>
          <BackToTop color="rgb(0,255,126)" top="319.5%" right="5.5%" />
        </MediaQuery>
        <MediaQuery maxWidth={600}>
          <BackToTop color="rgb(0,255,126)" top="360.5%" right="5%" />
        </MediaQuery>
      </div>
    );
  }
}

export default RadioactiveRhonda;
