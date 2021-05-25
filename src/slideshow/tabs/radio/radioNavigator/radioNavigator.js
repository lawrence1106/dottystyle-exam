import "./radioNavigatorStyles.css";

const bulletHightlight = `0px 0px 10px -1px rgba(255,255,255,0.75)`;

const photoNavigator = ({ radioList, setSelectedRadio, selectedRadio }) => {
  const dot = () => {
    return <div className="navBullets">&#8226;</div>;
  };
  const renderNavigator = (item, index) => {
    return (
      <div
        style={
          item.title === selectedRadio
            ? { boxShadow: bulletHightlight, borderRadius: "100%" }
            : null
        }
        key={index}
        onClick={() => {
          setSelectedRadio(item);
        }}
      >
        {dot()}
      </div>
    );
  };
  return (
    <div className="photoNavigatorContainer">
      {radioList.map(renderNavigator)}
    </div>
  );
};

export default photoNavigator;
