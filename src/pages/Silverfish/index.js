import React, { Component } from "react";
import MediaQuery from "react-responsive";
import LilyWales from "./../../Components/LilyWales";
import ProjectTitle from "./../../Components/ProjectTitle";
import ProjectBio from "./../../Components/ProjectBio";
import BackToTop from "./../../Components/BackToTop";
import HomeButton from "./../../Components/HomeButton";
import SilverfishContent from "./../../Components/SilverfishContent";
import SilverfishAnimation from './../../Components/SilverfishAnimation';

class Silverfish extends Component {
    render() {
      return (
        <div>
          <SilverfishAnimation />
          <SilverfishContent/>
            <MediaQuery minWidth={900}>
              <ProjectTitle title="Silverfish" color="rgb(108, 229, 221)"     top="135.5px" />
              <ProjectBio bio="SILVERFISH episode one. Typography by Jodi Hunt and sound by Christoper 'Bunny' Warren." color="rgb(108, 229, 221)" top="86%" height="300px"/>
              <HomeButton
                color="rgb(246, 147, 239)"
                top="218.5%"
                right="5.5%"
                paddingBottom="50px"
              />
              <BackToTop color="rgb(246, 147, 239)" top="215%" right="5.5%" />
            </MediaQuery>
            <MediaQuery minWidth={600} maxWidth={899}>
              <ProjectTitle
                title="Silverfish"
                color="rgb(108, 229, 221)"
                top="65.5px"
              />{" "}
              <ProjectBio bio="SILVERFISH trailer. Typography by Jodi Hunt and sound by Christoper 'Bunny' Warren." color="rgb(108, 229, 221)" top="100%" width="260px" />
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
              <ProjectBio bio="SILVERFISH trailer. Typography by Jodi Hunt and sound by Christoper 'Bunny' Warren." color="rgb(108, 229, 221)" top="72%" width="170px" right="7%" />
            </MediaQuery>
            <MediaQuery maxWidth={320}>
              <HomeButton
                color="rgb(246, 147, 239)"
                top=" 128%"
                left="4.8%"
                paddingBottom="50px"
                />{" "}
              <BackToTop color="rgb(246, 147, 239)" top=" 125%" left="4.8%" />
            </MediaQuery>
          <LilyWales color="rgb(246, 147, 239)" />
          
        </div>
      );
    }
  }
  
  export default Silverfish;
  