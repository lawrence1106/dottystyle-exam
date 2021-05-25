import NavBar from "./navbar/";
import LandingPage from "./landingPage/";
import BackgroundChallenge from "./backgroundChallenge/";
import Solution from "./solution/";
import SlideShow from "./slideshow/";
import { Helmet, HelmetProvider } from "react-helmet-async";
// store
import Store from "./globalStates/Store";

import "./app.css";
function App() {
  return (
    <Store>
      <HelmetProvider>
        <Helmet>
          <title>DottyStyle Creatives Exam</title>
        </Helmet>
        <div className="font-face-gm">
          <NavBar />
          <div className="contentMargins">
            <LandingPage />
            <BackgroundChallenge />
            <Solution />
            <SlideShow />
          </div>
        </div>
      </HelmetProvider>
    </Store>
  );
}

export default App;
