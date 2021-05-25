import { useState, useEffect, useContext } from "react";
import "./landingPagestyles.css";
import playButton from "../images/play.png";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import VisibilitySensor from "react-visibility-sensor";
import { Context } from "../globalStates/Store";

const MySwal = withReactContent(Swal);

const playVideo = () => {
  MySwal.fire({
    html: (
      <div>
        <iframe
          width="850"
          height="360"
          title="Binibini"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          src="https://www.youtube.com/embed/INvHma-qltE"
        />
      </div>
    ),
    customClass: "swal-wide",
    showConfirmButton: false,
  });
};

const LandingPage = () => {
  const [
    // eslint-disable-next-line
    state,
    dispatch,
  ] = useContext(Context);
  const [visibility, setVisibility] = useState(false);

  useEffect(() => {
    setVisibility(true);
  }, []);

  return (
    <div>
      <VisibilitySensor
        onChange={(isVisibile) => {
          if (isVisibile) {
            dispatch("Home");
            setVisibility(isVisibile);
          }
        }}
      >
        <div
          style={{
            opacity: visibility ? 1 : 0.25,
            transition: "opacity 500ms linear",
          }}
          id="home"
          className="lPContainer"
        >
          <div onClick={playVideo} className="playButton">
            <img alt="play button" src={playButton} />
          </div>
          <div className="sloganContainer">
            <div className="slogan">
              <div className="the">
                <span className="txtGradient">The</span>
              </div>
              <div className="whitsundays">
                <span className="txtGradient">Whitsundays</span>
              </div>
              <div className="desc">
                <span className="txtGradient">
                  A Movie that's waiting to be written
                </span>
              </div>
            </div>
          </div>
        </div>
      </VisibilitySensor>
    </div>
  );
};

export default LandingPage;
