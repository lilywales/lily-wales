import React, { Component } from "react";
import "./LVContent.css";
import lv1 from "./lv1.png";
import lv2 from "./lv2.png";
import lv3 from "./lv3.png";
import lv4 from "./lv4.png";
import lv5 from "./lv5.png";
import lv6 from "./lv6.png";
import lv7 from "./lv7.png";
import lv8 from "./lv8.png";
import lv9 from "./lv9.png";
import lv10 from "./lv10.png";
import lv11 from "./lv11.png";
import lv12 from "./lv12.png";
import lv13 from "./lv13.png";
import lv14 from "./lv14.png";
import lv15 from "./lv15.png";
import lv16 from "./lv16.png";
import lv17 from "./lv17.png";
import lv18 from "./lv18.png";
import lv19 from "./lv19.png";

class LVContent extends Component {
  render() {
    return (
      <div >
        <div className="LVTextWrapper">
          <p>
            2,469 miles from Disneyland, the Nevada National Security Site
            boasts of a 1,350 square mile plot just 65 miles northwest of Las
            Vegas. Amenities include the 1200 x 320 foot Sedan crater, a
            resident barn owl, knob creek, nuclear waste disposal, a two story
            colonial house fully kitted out with zero furniture and a canteen
            specialising in tuna melts. Lost? On the way to a classified area?
            The test site offers a shoot to kill poilcy to stop you dead in your
            tracks. Shorts, sandals or capris are not permitted at the Nevada
            National Security Site.
          </p>
        </div>
        <img className="lv1" src={lv1} alt="Lisa, a character who is black and white, she has a mouth but no eyes. Her head extands out mirroring a mushrhoom cloud. Here she is asleep on leaning against the plane window. She's dribbling and wearing a goofy hat. The view outside the window is snow topped mountains." />
        <img className="lv2" src={lv2} alt="Kevin is a hyper-masculine character who is bald, wears sunglasses and is predominetly black and white, except for multi coloured crystals on his huge belly. Here he is waiting in line to take a holiday snap of himself next to the Vegas sign. The queue is long on and he is signalling his wrist to show frustrastion at the time." />
        <img className="lv3" src={lv3} alt="Lisa and Kevin doing an egyptian dance with their casino tat, outside the luxor casino." />
        <img className="lv4" src={lv4} alt="Lisa getting snapped at a bad angle while getting ready in her slamon pink room" />
        <img className="lv5" src={lv5} alt="A view out of the hotel balcony with trees and apartments. To the right is an atomic mushroom cloud." />
        <img className="lv6" src={lv6} alt="An accidental shot of Kevin's lower half while he is in the lift. His penis is appropriated from a mushroom." />
        <img className="lv7" src={lv7} alt="Kevin and Lisa are taking a selfie outside their hotel, behind to the right is an underwhelming swimming pool." />
        <img className="lv8" src={lv8} alt="LA mushroom cloud billows upwards, its reflection can be seen in the glass building opposite." />
        <img className="lv9" src={lv9} alt="A street view with a yellow fire hydrant in front of housing. Behind is a dark purple mushroom cloud." />
        <div className="lv10and11">
          <img className="lv10" src={lv10} alt="Lisa wearing her make america great again hat, on the way to Trump towers." />
          <img className="lv11" src={lv11} alt="Kevin posing with a scultpure of a mushroom cloud at the national atomic test museum" />
        </div>
        <img className="lv12" src={lv12} alt="Kevin and Lisa showing off their atomic soveniers. Lisa is shaking a snow globe. They are stood in front of the museum." />
        <img className="lv13" src={lv13} alt="Kevin is looking into the distance from a bar where people would go to watch atomic bombs go off. The owl in the top right signifies the owl that lives within the nevada test site recording tower." />
        <img className="lv14" src={lv14} alt="Lisa throwing up from too many cocktails at atomic liquor bar." />
        <img className="lv15" src={lv15} alt="Night time and Kevin and Lisa are finally leaving the bar, many cocktails down." />
        <img className="lv16" src={lv16} alt="Lisa is dragging a drunk Kev to the casino strip" />
        <img className="lv17" src={lv17} alt="After seeing an Elvis tribute Kevin hit the jackpot and is flashing his cash outside the casino." />
        <img className="lv18" src={lv18} alt="Lis is passed out on the hotel reception sofa, after being sick in the bin." />
        <img className="lv19" src={lv19} alt="The pink flamingo casino windows show the reflection of a billowing mushroom cloud." />
      </div>
    );
  }
}

export default LVContent;
