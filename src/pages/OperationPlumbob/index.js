import React, { Component } from "react";
import MediaQuery from "react-responsive";
import LilyWales from "./../../Components/LilyWales";
import ProjectTitle from "./../../Components/ProjectTitle";
import BackToTop from "./../../Components/BackToTop";
import HomeButton from "./../../Components/HomeButton";
import PlumbobContent from "./../../Components/PlumbobContent";
import PhotoCredit from "./../../Components/PhotoCredit";

class OperationPlumbob extends Component {
  render() {
    return (
      <div>
        <PlumbobContent />
        <MediaQuery minWidth={601}>
          <ProjectTitle title="Operation Plumbob" color="rgb(255,85,1)" />
        </MediaQuery>


        <MediaQuery minWidth={900}>
          <BackToTop color="rgb(5,176,255)" top="513%" right="5%" />{" "}
            <HomeButton color="rgb(5,176,255)" top="517%" right="5%" />
            <PhotoCredit
              photoCredit="Photo credit: Tom Bird"
              color="rgb(255,85,1)"
              right="5%"
              top="239%"
              textAlign="left"
              width="200px"
            />

        </MediaQuery>


        <MediaQuery maxWidth={899} minWidth={601}>
          <HomeButton
            color="rgb(5,176,255)"
            top="252%"
            left="2.5%"
            paddingBottom={"20px"}
          />
            <BackToTop color="rgb(5,176,255)" top="249%" left="2.5%" />
            <PhotoCredit
              photoCredit="Photo credit: Tom Bird"
              color="rgb(255,85,1)"
              right="3%"
              top="105.5%"
              textAlign="left"
              width="120px"
            />


        </MediaQuery>
        <MediaQuery maxWidth={600}>
        <ProjectTitle
          title="Operation Plumbob"
          color="rgb(255,85,1)"
          top="25px"
          lineHeight="0.7"
        />
          <HomeButton
            color="rgb(5,176,255)"
            top="272.5%"
            right="9%"
            paddingBottom="15px"
          />
          <BackToTop color="rgb(5,176,255)" top="270%" right="9%" />
          <PhotoCredit
            photoCredit="Photo credit: Tom Bird"
            color="rgb(255,85,1)"
            left="9%"
            top="225%"
            textAlign="left"
            width="100px"
          />

        </MediaQuery>

  <LilyWales color="rgb(5,176,255)" />

      </div>
    );
  }
}

export default OperationPlumbob;
