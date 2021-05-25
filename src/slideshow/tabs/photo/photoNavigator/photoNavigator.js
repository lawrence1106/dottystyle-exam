import "./photoNavigatorStyles.css";

const bulletHightlight = `0px 0px 10px -1px rgba(255,255,255,0.75)`;

const photoNavigator = ({ photoList, setSelectedPhoto, selectedPhoto }) => {
  const dot = () => {
    return <div className="navBullets">&#8226;</div>;
  };
  const renderNavigator = (item, index) => {
    return (
      <div
        style={
          item.title === selectedPhoto
            ? { boxShadow: bulletHightlight, borderRadius: "100%" }
            : null
        }
        key={index}
        onClick={() => {
          setSelectedPhoto(item);
        }}
      >
        {dot()}
      </div>
    );
  };
  return (
    <div className="photoNavigatorContainer">
      {photoList.map(renderNavigator)}
    </div>
  );
};

export default photoNavigator;
