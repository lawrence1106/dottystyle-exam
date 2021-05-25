import "./navigatorStyles.css";
import { useSpring, animated } from "react-spring";
import { configs } from "../../configs/animationConfigs";

const tabs = [
  { name: "Video" },
  { name: "Photography" },
  { name: "Social" },
  { name: "PR" },
  { name: "Radio" },
];

const SlideshowNavigator = ({ setTab, tabSelected }) => {
  const RenderTabs = (item, index) => {
    const tabHighlight = useSpring({
      to: {
        scale: item.name === tabSelected ? 1 : 0.8,
        padding: 6,
        background: item.name === tabSelected ? "#174456" : "transparent",
        borderRadius: 10,
      },
      from: { scale: 1, background: "transparent" },
      config: configs.bounce,
    });

    return (
      <animated.div key={index} style={tabHighlight}>
        <li
          onClick={() => {
            setTab(item.name);
          }}
        >
          {item.name}
        </li>
      </animated.div>
    );
  };
  return (
    <>
      {tabSelected ? (
        <div className="navigatorContainer">{tabs.map(RenderTabs)}</div>
      ) : (
        "Please wait. . ."
      )}
    </>
  );
};

export default SlideshowNavigator;
