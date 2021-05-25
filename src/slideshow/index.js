import { useState, useContext } from "react";
import "./slideshowStyles.css";
import SlideshowNavigator from "./navigator/slideshowNavigator";
import VisibilitySensor from "react-visibility-sensor";
import { Context } from "../globalStates/Store";
// componentns
import Video from "./tabs/video/";
import Photo from "./tabs/photo/";
import Social from "./tabs/social/";
import PR from "./tabs/PR/";
import Radio from "./tabs/radio";

const Slideshow = () => {
  const [
    // eslint-disable-next-line
    state,
    dispatch,
  ] = useContext(Context);
  const [tabOpen, setTabOpen] = useState("Video");
  const [visibility, setVisibility] = useState(false);

  const setTab = (tabName) => {
    setTabOpen(tabName);
  };

  const renderer = () => {
    if (tabOpen === "Video") {
      return <Video />;
    }
    if (tabOpen === "Photography") {
      return <Photo />;
    }
    if (tabOpen === "Social") {
      return <Social />;
    }
    if (tabOpen === "PR") {
      return <PR />;
    }
    if (tabOpen === "Radio") {
      return <Radio />;
    }
  };

  return (
    <div
      style={{
        opacity: visibility ? 1 : 0.25,
        transition: "opacity 500ms linear",
      }}
      id="slideshow"
      className="slideshowContainer"
    >
      <VisibilitySensor
        onChange={(isVisibile) => {
          if (isVisibile) {
            dispatch("Slideshow");
            setVisibility(isVisibile);
          }
        }}
      >
        <div className="slideshowContents">
          <SlideshowNavigator setTab={setTab} tabSelected={tabOpen} />
          <div className="tabOpen">{renderer()}</div>
        </div>
      </VisibilitySensor>
    </div>
  );
};

export default Slideshow;
