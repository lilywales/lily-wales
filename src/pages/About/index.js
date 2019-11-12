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
        <img className="aboutImg" src={aboutImage} alt="A photomontage from the series Bikini Bottom. A mostly black and white image with flashes of red. The piece is a sea like creature formed of organic and mechanical elements. It has a lumpy and rounded triangular body with a long muscular neck that curls up and to the left, with a mutated head that is slightly smaller than the body." />
        <div className="bio">
        Lily Wales is a UK
<br /> based artist working
<br /> with handmade
<br />
photomontage and
<br /> sculpture. Currently her
<br /> practice investigates
<br /> the appropriation of
<br /> nature within nuclear
<br /> weaponry, exploring the
<br />
mushroom cloud as an
<br /> icon and commenting
<br /> on the bizarre use of
<br />
language in historical
<br /> civil defence. With
<br /> specific attention
<br />
towards the naming of
<br /> nuclear weaponry such
<br /> as the M65 cannon
<br /> more commonly known
<br /> as Atomic Annie, as
<br /> well as the atomic
<br /> bombs Mr Plumbob,
<br /> Smokey and Romeo to
<br /> name a few, Lily
<br /> examines the ability
<br />
language has to
<br /> anaesthetise public
<br /> perception.
        </div>
        <div className="cv">
          <p>RESIDENCIES AND RESEARCH</p>
            <li>Cemeti residency, Indonesia, British Council, upcoming 2020</li>
            <li>Fellow, Birmingham Open Media, 2019-2020</li>
            <li>New York, a-n bursary, 2019</li>
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
        <MediaQuery minWidth={900}>
         <HomeButton
            color="rgb(248,39,127)"
            top="223.5%"
            right="5.5%"
            paddingBottom="20px"
          />
          <BackToTop top="220%" color="rgb(248,39,127)" right="5.5%" />{" "}
        </MediaQuery>
        <MediaQuery minWidth={601} maxWidth={899}>
          <ProjectTitle title="About" color="rgb(0,204,255)" top="65px" />
          <HomeButton
            top="187.5%"
            color="rgb(248,39,127)"
            left="8%"
            paddingBottom="20px"
          />
          <BackToTop top="185%" color="rgb(248,39,127)" left="8%" />
        </MediaQuery>
        <MediaQuery maxWidth={600}>
          <HomeButton
            color="rgb(248,39,127)"
            top="203%"
            left="8%"
            paddingBottom="50px"
          />
        <BackToTop top="200%" color="rgb(248,39,127)" left="8%" />
       </MediaQuery>
      </div>
    );
  }
}

export default About;
