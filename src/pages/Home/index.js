import React, { Component } from "react";
import LilyWales from "./../../Components/LilyWales";
import HomeImages from "./../../Components/HomeImages";
import HomeImagesGif from "./../../Components/HomeImagesGif";

class Home extends Component {
  render() {
    return (
      <div className="animate-bottom">
        <HomeImages />
        <LilyWales color="rgb(255,71,153)" />
        <HomeImagesGif/>
      </div>
    );
  }
}
export default Home;
