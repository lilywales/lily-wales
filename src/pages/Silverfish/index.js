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
              <ProjectBio bio="SILVERFISH is a 5 minute animation developed under the Birmingham Open Media Fellowship, The starting point in the R&D was a visit to a U-434 submarine in Hamburg and the Blankenese ship wreckages. The mutation within SILVERFISH mirrors the evolution of submarine technology and the animation explores the process of regeneration, within the context of the silverfish, a small, primitive insect that commonly infests bathrooms. Typography by Jodi Hunt and sound by Christoper 'Bunny' Warren." color="rgb(108, 229, 221)" top="86%" height="300px"/>
              <HomeButton
                color="rgb(246, 147, 239)"
                top="1138.5%"
                right="5.5%"
                paddingBottom="50px"
                
              />
              <BackToTop color="rgb(246, 147, 239)" top="1135%" right="5.5%" />
            </MediaQuery>
            <MediaQuery minWidth={600} maxWidth={899}>
              <ProjectTitle
                title="Silverfish"
                color="rgb(108, 229, 221)"
                top="65.5px"
              />{" "}
              <ProjectBio bio="SILVERFISH is a 5 minute animation developed under the Birmingham Open Media Fellowship, The starting point in the R&D was a visit to a U-434 submarine in Hamburg and the Blankenese ship wreckages. The mutation within SILVERFISH mirrors the evolution of submarine technology and the animation explores the process of regeneration, within the context of the silverfish, a small, primitive insect that commonly infests bathrooms. Typography by Jodi Hunt and sound by Christoper 'Bunny' Warren." color="rgb(108, 229, 221)" top="100%" width="260px" />
              <BackToTop color="rgb(246, 147, 239)" top="607%" left="4.8%" />
              <HomeButton
                color="rgb(246, 147, 239)"
                top="610%"
                left="4.8%"
                paddingBottom="50px"
              />
            </MediaQuery>
            <MediaQuery maxWidth={600} minWidth={322}>
              <HomeButton
                color="rgb(246, 147, 239)"
                top=" 350%"
                right="4.8%"
                paddingBottom="80px"
              />{" "}
              <BackToTop color="rgb(246, 147, 239)" top=" 348%" right="4.8%" />
            </MediaQuery>
            <MediaQuery minWidth={322} maxWidth={599}>
              <ProjectTitle
                title="Silverfish"
                color="rgb(108, 229, 221)"
                top="37px"
              />
              <ProjectBio bio="SILVERFISH is a 5 minute animation developed under the Birmingham Open Media Fellowship, The starting point in the R&D was a visit to a U-434 submarine in Hamburg and the Blankenese ship wreckages. The mutation within SILVERFISH mirrors the evolution of submarine technology and the animation explores the process of regeneration, within the context of the silverfish, a small, primitive insect that commonly infests bathrooms. Typography by Jodi Hunt and sound by Christoper 'Bunny' Warren." color="rgb(108, 229, 221)" top="72%" width="200px" right="7%" />
            </MediaQuery>

            <MediaQuery maxWidth={321}>
            <ProjectTitle
                title="Silverfish"
                color="rgb(108, 229, 221)"
                top="37px"
              />
              <HomeButton
                color="rgb(246, 147, 239)"
                top=" 358%"
                left="4.8%"
                paddingBottom="50px"
                />{" "}
                <ProjectBio bio="SILVERFISH is a 5 minute animation developed under the Birmingham Open Media Fellowship, The starting point in the R&D was a visit to a U-434 submarine in Hamburg and the Blankenese ship wreckages. The mutation within SILVERFISH mirrors the evolution of submarine technology and the animation explores the process of regeneration, within the context of the silverfish, a small, primitive insect that commonly infests bathrooms. Typography by Jodi Hunt and sound by Christoper 'Bunny' Warren." color="rgb(108, 229, 221)" top="70%" width="230px" right="7%" />
              <BackToTop color="rgb(246, 147, 239)" top=" 355%" left="4.8%" />
            </MediaQuery>
          <LilyWales color="rgb(246, 147, 239)" />
          
        </div>
      );
    }
  }
  
  export default Silverfish;
  