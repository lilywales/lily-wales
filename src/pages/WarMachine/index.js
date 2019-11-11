import React, { Component } from "react";
import LilyWales from "./../../Components/LilyWales";
import WarMachineContent from "./../../Components/WarMachineContent";
import HomeButton from "./../../Components/HomeButton";
import BackToTop from "./../../Components/BackToTop";
import ProjectTitle from "./../../Components/ProjectTitle";
import MediaQuery from "react-responsive";

class WarMachine extends Component {
  render() {
    return (
      <div>
        <WarMachineContent />
        <ProjectTitle title="War Machine" color="rgb(245, 27, 236)" />
        <LilyWales color={"rgb(0, 41, 255)"} />
        <MediaQuery minWidth={900}>
          <BackToTop top={"645%"} right={"5.5%"} />
          <HomeButton top={"649%"} right={"5.5%"} paddingBottom={"17px"} />{" "}
        </MediaQuery>
        <MediaQuery maxWidth={899} minWidth={600}>
          <BackToTop top={"428%"} right={"9%"} />
          <HomeButton top={"431%"} right={"9%"} paddingBottom={"28px"} />{" "}
        </MediaQuery>
        <MediaQuery maxWidth={600}>
          <HomeButton top={"658%"} right={"5.5%"} paddingBottom={"27px"} />{" "}
          <BackToTop top={"655%"} right={"5.5%"} />
        </MediaQuery>
      </div>
    );
  }
}

export default WarMachine;
