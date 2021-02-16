import React, { Component } from "react";
import MediaQuery from "react-responsive";
import LilyWales from "./../../Components/LilyWales";
import ProjectTitle from "./../../Components/ProjectTitle";
import BackToTop from "./../../Components/BackToTop";
import HomeButton from "./../../Components/HomeButton";
import SilverfishContent from "./../../Components/SilverfishContent";

class Silverfish extends Component {
    render() {
      return (
        <div>
          <SilverfishContent/>
            <MediaQuery minWidth={900}>
              <ProjectTitle title="Silverfish" color="rgb(108, 229, 221)"     top="135.5px" />
              <HomeButton
                color="rgb(246, 147, 239)"
                top="323.5%"
                right="5.5%"
                paddingBottom="50px"
              />
              <BackToTop color="rgb(246, 147, 239)" top="320%" right="5.5%" />
            </MediaQuery>
            <MediaQuery minWidth={600} maxWidth={899}>
              <ProjectTitle
                title="Silverfish"
                color="rgb(108, 229, 221)"
                top="65.5px"
              />{" "}
              <BackToTop color="rgb(246, 147, 239)" top="207%" left="4.8%" />
              <HomeButton
                color="rgb(246, 147, 239)"
                top="210%"
                left="4.8%"
                paddingBottom="50px"
              />
            </MediaQuery>
            <MediaQuery maxWidth={600} minWidth={321}>
              <HomeButton
                color="rgb(246, 147, 239)"
                top=" 167%"
                right="4.8%"
                paddingBottom="50px"
              />{" "}
              <BackToTop color="rgb(246, 147, 239)" top=" 164%" right="4.8%" />
            </MediaQuery>
            <MediaQuery maxWidth={599}>
              <ProjectTitle
                title="Silverfish"
                color="rgb(108, 229, 221)"
                top="37px"
              />
            </MediaQuery>
            <MediaQuery maxWidth={320}>
              <HomeButton
                color="rgb(246, 147, 239)"
                top=" 426%"
                left="4.8%"
                paddingBottom="50px"
                />{" "}
              <BackToTop color="rgb(246, 147, 239)" top=" 423%" left="4.8%" />
            </MediaQuery>
          <LilyWales color="rgb(246, 147, 239)" />
          
        </div>
      );
    }
  }
  
  export default Silverfish;
  