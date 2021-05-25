import { useState, useContext } from "react";
import "./backgroundChallenge.css";
import OtherDetails from "./otherDetails/OtherDetails";
import HeaderContent from "./pageHeaderContent/HeaderContent";
import VisibilitySensor from "react-visibility-sensor";
import { Context } from "../globalStates/Store";

const BackgroundChallenge = () => {
  const [
    // eslint-disable-next-line
    state,
    dispatch,
  ] = useContext(Context);
  const [visibility, setVisibility] = useState(false);

  return (
    <div id="backgroundChallenge" className="bAndCContainer">
      <VisibilitySensor
        onChange={(isVisibile) => {
          if (isVisibile) {
            dispatch("Background & Challenge");
            setVisibility(isVisibile);
          }
        }}
      >
        <div
          style={{
            opacity: visibility ? 1 : 0.25,
            transition: "opacity 500ms linear",
          }}
        >
          <div className="bAndCContent">
            <HeaderContent />
            <OtherDetails />
          </div>
        </div>
      </VisibilitySensor>
    </div>
  );
};

export default BackgroundChallenge;
