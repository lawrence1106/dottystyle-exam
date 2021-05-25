import "./videoNavigatorStyles.css";

const bulletHightlight = `0px 0px 10px -1px rgba(255,255,255,0.75)`;

const videoNavigator = ({ videoList, setSelectedVideo, selectedVideo }) => {
  const dot = () => {
    return <div className="navBullets">&#8226;</div>;
  };
  const renderNavigator = (item, index) => {
    return (
      <div
        style={
          item.title === selectedVideo
            ? { boxShadow: bulletHightlight, borderRadius: "100%" }
            : null
        }
        key={index}
        onClick={() => {
          setSelectedVideo(item);
        }}
      >
        {dot()}
      </div>
    );
  };

  return (
    <div className="videoNavigatorContainer">
      {videoList.map(renderNavigator)}
    </div>
  );
};

export default videoNavigator;
