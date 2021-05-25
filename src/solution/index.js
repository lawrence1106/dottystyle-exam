import { useState, useContext } from "react";
import "./solutionStyles.css";
import FirstTab from "./contents/firstTab";
import SecondTab from "./contents/secondTab";
import VisibilitySensor from "react-visibility-sensor";
import { Context } from "../globalStates/Store";

const Solution = () => {
  const [
    // eslint-disable-next-line
    state,
    dispatch,
  ] = useContext(Context);
  const [visibility, setVisibility] = useState(false);

  return (
    <div
      style={{
        opacity: visibility ? 1 : 0.25,
        transition: "opacity 500ms linear",
      }}
      id="solution"
      className="solutionContainer"
    >
      <div className="solutionHeader">Solution</div>
      <VisibilitySensor
        onChange={(isVisibile) => {
          if (isVisibile) {
            dispatch("Solution");
            setVisibility(isVisibile);
          }
        }}
      >
        <div className="solutionContent">
          <FirstTab />
          <SecondTab />
        </div>
      </VisibilitySensor>
    </div>
  );
};

export default Solution;
