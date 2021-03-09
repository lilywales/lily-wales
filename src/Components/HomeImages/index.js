import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import MediaQuery from "react-responsive";
import "./HomeImages.css";
import rhondaHomeImg from "./rhondaHome.jpg";
import silverfishHomeImg from "./silverfishHome.jpg";

import blueStreakHomeImg from "./blueStreakHome.jpg";
import aboutHomeImg from "./aboutHome.png";
import bikiniBottomHomeImg from "./bikiniBottomHome.png";


import contactHomeImg from "./contactHome.jpg";

const styles = {
  homeImg: {
    position: "absolute",
    height: "100vh",
    left: "0%"
  },
  homeImgIpad: {
    position: "absolute",
    height: "auto",
    width: "100vw",
    left: "0%"
  },
  homeImgMobile: {
    position: "absolute",
    height: "auto",
    width: "100vw",
    left: "0%"
  }
};

class HomeImages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selection: 0
    };
  }

  onEnter = item => {
    this.setState(prevState => ({
      selection: item
    }));
  };

  render() {
    const images = [
      { label: "Silverfish", src: silverfishHomeImg, path: "silverfish" },
      {
        label: "Radioactive Rhonda!",
        src: rhondaHomeImg,
        className: "rhondaTitle",
        path: "./radioactiverhonda"
      },

      // {
      //   label: "Atomic Kitten",
      //   src: atomicKittenHomeImg,
      //   path: "./atomickitten"
      // },

      {
        label: "Blue Streak",
        src: blueStreakHomeImg,
        path: "/bluestreak"
      },

      // {
      //   label: "Las Vagueness",
      //   src: lasVaguenessHomeImg,
      //   className: "lasVaguenessTitle",
      //   path: "./lasVagueness"
      // },

      // {
      //   label: "Mr Owl Ate My Metal Worm",
      //   src: mrOwlHomeImg,
      //   className: "MrOwlTitle",
      //   path: "./mrowlatedownmymetalworm"
      // },
      // {
      //   label: "Operation Plumbob",
      //   src: plumbobHomeImg,
      //   className: "phormTitle",
      //   path: "./operationPlumbob"
      // },
      {
        label: "Bikini Bottom",
        src: bikiniBottomHomeImg,
        path: "./bikinibottom"
      },
      
      { label: "Contact", src: contactHomeImg, path: "contact" },
      { label: "About", src: aboutHomeImg, path: "about" }
    ];

    return (
      <div>
        <MediaQuery minWidth={900}>
          <div>
            {images
              .filter((selection, index) => {
                return this.state.selection === index;
              })
              .map(selection => (
                <img
                  style={styles.homeImg}
                  src={selection.src}
                  alt={selection.label}
                  href={selection.href}
                />
              ))}
          </div>
        </MediaQuery>
        <MediaQuery maxWidth={600}>
          <div className="homeMobImg">
            {images
              .filter((selection, index) => {
                return this.state.selection === index;
              })
              .map(selection => (
                <img
                  style={styles.homeImgMobile}
                  src={selection.src}
                  alt={selection.label}
                  href={selection.href}
                />
              ))}
          </div>
        </MediaQuery>
        <MediaQuery minWidth={601} maxWidth={899}>
          <div className="homeIpadImg">
            {images
              .filter((selection, index) => {
                return this.state.selection === index;
              })
              .map(selection => (
                <img
                  style={styles.homeImgIpad}
                  src={selection.src}
                  alt={selection.label}
                  href={selection.href}
                />
              ))}
          </div>
        </MediaQuery>
        <div className="titlesTextBox">
          {images.map((selection, index) => (
            <NavLink
              to={selection.path || "/"}
              style={{ textDecoration: "none" }}
            >
              <h3
                onMouseEnter={() => this.onEnter(index)}
                onMouseLeave={this.onLeave}
                className={selection.className}
              >
                {selection.label.toUpperCase()}
              </h3>
            </NavLink>
          ))}
        </div>
      </div>
    );
  }
}

export default HomeImages;
