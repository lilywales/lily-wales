import React, { Component } from "react";
import "./about.css";
import LilyWales from "./../../Components/LilyWales";
import HomeButton from "./../../Components/HomeButton";
import ProjectTitle from "./../../Components/ProjectTitle";
import BackToTop from "./../../Components/BackToTop";
import aboutImage from "./aboutImg.png";
import MediaQuery from "react-responsive";

class About extends Component {
  render() {
    return (
      <div>
        <LilyWales color="rgb(248,39,127)" />
        <ProjectTitle title="About" color="rgb(0,204,255)" />
        <div className="bio">
          Lily Wales is a UK<br/> based artist working<br/> with handmade photomontage and sculpture. Previously her<br/>  practice has explored the appropriation of nature within nuclear weaoponry, exploring the mushroom cloud as an icon and commenting on the bizarre naming of atomic bombs, in order to examine the ability language has to anaesthetise public perception. Currently her practice aims to reframe the narrative around nuclear weoponry in order to explore its impact   on both the natural and politcal climate.
        </div>
        <div className="cv">
          <p>RESIDENCIES AND RESEARCH</p>
            <li>Indonesia, British Council, 2020</li>
            <li>New York, a-n, 2019</li>
            <li>The New Art Gallery Walsall residency, 2018</li>
            <li>Hiroshima & Nagasaki, DYCP Arts Council England, 2018</li>
            <li>Nevada Test Site, Engine & Grain bursary, 2018</li>
          <p>SHOWS</p>
            <li>Coventry Biennial, 2019</li>
            <li>Illustrated Brum X PMT, 2019</li>
            <li>Blue Streak in Mezz, The New Art Gallery Walsall, 2019</li>
            <li>Phorm, Salford Circus, 2018</li>
            <li>New Art West Midlands, Airspace Gallery, 2018</li>
            <li>Yorks ikon, 2017</li>
            <li>Reclaim Photography Festival, 2017</li>
            <li>Fertile Ground, Argentea Gallery, 2017</li>
            <li>Future Late, Tate Modern, 2016</li>
            <li>112 Space, 2015</li>
            <li>Chaos Computer Club, Birmingham Open Media, 2015</li>
            <li>Photographers Wall, Library of Birmingham, 2014</li>
            <li>Narrative Structures, Stryx gallery, 2013</li>
            <li>Much Beta, MAC birmingham, 2013</li>
        </div>
        <img className="aboutImg" src={aboutImage} alt="A photomontage from the series Bikini Bottom. A mostly black and white image with flashes of red. The piece is a sea like creature formed of organic and mechanical elements. It has a lumpy and rounded triangular body with a long muscular neck that curls up and to the left, with a mutated head that is slightly smaller than the body." />
        <MediaQuery minWidth={900}>
         <HomeButton
            color="rgb(248,39,127)"
            top="214%"
            right="5.5%"
            paddingBottom="20px"
          />
          <BackToTop top="210%" color="rgb(248,39,127)" right="5.5%" />{" "}
        </MediaQuery>
        <MediaQuery minWidth={601} maxWidth={899}>
          <ProjectTitle title="About" color="rgb(0,204,255)" top="65px" />
          <HomeButton
            top="198.5%"
            color="rgb(248,39,127)"
            left="10%"
            paddingBottom="20px"
          />
          <BackToTop top="195%" color="rgb(248,39,127)" left="10%" />
        </MediaQuery>
        <MediaQuery maxWidth={600}>
          <HomeButton
            color="rgb(248,39,127)"
            top="233%"
            left="11%"
            paddingBottom="50px"
          />
        <BackToTop top="229%" color="rgb(248,39,127)" left="11%" />
       </MediaQuery>
      </div>
    );
  }
}

export default About;
