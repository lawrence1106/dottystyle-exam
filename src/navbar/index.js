import "./navStyles.css";
import { useContext } from "react";
import { PlayArrow, SystemUpdateAlt } from "@material-ui/icons";
import Swal from "sweetalert2";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Context } from "../globalStates/Store";

const dot = () => {
  return <div className="navBullets">&#8226;</div>;
};

const bulletHightlight = {
  boxShadow: `0px 0px 10px -1px rgba(255,255,255,0.75)`,
  borderRadius: "100%",
};

const downloadBoard = () => {
  Swal.fire({
    icon: "question",
    title: "Confirmation",
    text: "Download Board?",
    showCancelButton: true,
    confirmButtonText: "Yes",
    cancelButtonText: "No",
    preConfirm: () => {
      return Swal.fire({
        icon: "success",
        title: "Download Success!",
        text: "Board Downloaded!",
      });
    },
  });
};

const tabHighlight = {
  backgroundColor: "#282828",
  borderRadius: 10,
};

const Navbar = () => {
  const [state, dispatch] = useContext(Context);
  const missingSectionWarning = () => {
    Swal.fire({
      icon: "warning",
      title: "Missing Section",
      text: `Di ko po makita/mapalabas yung "Results & Effectivenes" section sa psd file po. :(`,
    });
  };

  const navTabs = [
    { name: "Home", link: "home", icon: <PlayArrow /> },
    { name: "Background & Challenge", link: "backgroundChallenge" },
    { name: "Solution", link: "solution" },
    { name: "Results & Effectiveness", link: "home" },
    { name: "Slideshow", link: "slideshow" },
  ];

  const renderNavTabs = (item, index) => {
    return (
      <AnchorLink key={index} href={`#${item.link}`}>
        <div
          onClick={() => {
            if (item.name === "Results & Effectiveness") {
              dispatch(item.name);
              dispatch("Home");
              return missingSectionWarning();
            }
            dispatch(item.name);
            dispatch(item.name);
          }}
          style={state.activeTab === item.name ? tabHighlight : null}
          className={item.name === "Home" ? "playIcon" : "navItems"}
        >
          {item.icon ? item.icon : item.name}
        </div>
      </AnchorLink>
    );
  };

  const renderSideNav = (item, index) => {
    return (
      <AnchorLink key={index} href={`#${item.link}`}>
        <div
          style={state.activeTab === item.name ? bulletHightlight : null}
          onClick={() => {
            if (item.name === "Results & Effectiveness") {
              dispatch(item.name);
              dispatch("Home");
              return missingSectionWarning();
            }
            dispatch(item.name);
            dispatch(item.name);
          }}
        >
          {dot()}
        </div>
      </AnchorLink>
    );
  };

  return (
    <div className="navBar">
      <div className="navContainerBg">
        <div className="navContainer">
          <div className="navItemsContainer">{navTabs.map(renderNavTabs)}</div>
          <div className="board">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginLeft: 10,
              }}
            >
              <SystemUpdateAlt />
            </div>
            <div
              onClick={downloadBoard}
              style={{ paddingLeft: 8, cursor: "pointer" }}
            >
              Download Board
            </div>
          </div>
        </div>
      </div>
      <div className="side-nav">
        <div className="side-nav-items">{navTabs.map(renderSideNav)}</div>
      </div>
    </div>
  );
};

export default Navbar;
