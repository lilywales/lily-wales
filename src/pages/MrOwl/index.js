import React, { Component } from "react";
import MediaQuery from "react-responsive";
import LilyWales from "./../../Components/LilyWales";
import ProjectTitle from "./../../Components/ProjectTitle";
import MrOwlContent from "./../../Components/MrOwlContent";
import PhotoCredit from "./../../Components/PhotoCredit";
import BackToTop from "./../../Components/BackToTop";
import HomeButton from "./../../Components/HomeButton";


class MrOwl extends Component {
  render() {
    return (
      <div>
        <div>
          <MrOwlContent/>

            <MediaQuery minWidth={900}>

          <ProjectTitle title="Mr Owl Ate My Metal Worm" color="rgb(111, 69, 59)" top="113px"  width="600px"     lineHeight="0.74" />
          <PhotoCredit
            photoCredit="Photo credit: Alison Baskerville"
            color="rgb(111, 69, 59)"
            right="5%"
            top="232%"
            textAlign="left"
            width="230px"
          />
          <HomeButton color="rgb(30, 246, 45)" top="470%" right="5.5%" paddingBottom="50px" />
          <BackToTop color="rgb(30, 246, 45)" top="466.5%" right="5.5%" />

            </MediaQuery>


          <MediaQuery maxWidth={900} minWidth={601}>
            <ProjectTitle title="Mr Owl Ate My Metal Worm" color="rgb(111, 69, 59)" top="50px"  width="150px"     lineHeight="0.74" />
            <PhotoCredit
              photoCredit="Photo credit: Alison Baskerville"
              color="rgb(111, 69, 59)"
              left="5%"
              top="229%"
              textAlign="left"
              width="170px"
            />
                        <BackToTop color="rgb(30, 246, 45)" top="326.5%" right="5.5%" />
            <HomeButton color="rgb(30, 246, 45)" top="329%" right="5.5%" paddingBottom="50px" />


          </MediaQuery>

          <MediaQuery maxWidth={600} >
          <ProjectTitle title="Mr Owl Ate My Metal Worm" color="rgb(111, 69, 59)" top="26px"  width="150px"     lineHeight="0.71" />
          <PhotoCredit
            photoCredit="Photo credit: Alison Baskerville"
            color="rgb(111, 69, 59)"
            left="5%"
            top="198%"
            textAlign="left"
            width="130px"
          />
                      <BackToTop color="rgb(30, 246, 45)" top="274.5%" right="5.5%" />
          <HomeButton color="rgb(30, 246, 45)" top="277%" right="5.5%" paddingBottom="50px" />

            </MediaQuery>
            <LilyWales color="rgb(30, 246, 45)" />
        </div>
      </div>
    );
  }
}

export default MrOwl;
