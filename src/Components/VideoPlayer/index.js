import React, { Component } from "react";
import Vimeo from "@u-wave/react-vimeo";
class VideoPlayer extends Component {
  render() {
    return <Vimeo video="465786669" autoplay loop />;
  }
}

export default VideoPlayer;
