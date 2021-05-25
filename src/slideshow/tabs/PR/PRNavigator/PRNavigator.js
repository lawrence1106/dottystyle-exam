import "./PRNavigatorStyles.css";

const bulletHightlight = `0px 0px 10px -1px rgba(255,255,255,0.75)`;

const photoNavigator = ({ PRList, setSelectedPR, selectedPR }) => {
  const dot = () => {
    return <div className="navBullets">&#8226;</div>;
  };
  const renderNavigator = (item, index) => {
    return (
      <div
        style={
          item.title === selectedPR
            ? { boxShadow: bulletHightlight, borderRadius: "100%" }
            : null
        }
        key={index}
        onClick={() => {
          setSelectedPR(item);
        }}
      >
        {dot()}
      </div>
    );
  };
  return (
    <div className="PRNavigatorContainer">{PRList.map(renderNavigator)}</div>
  );
};

export default photoNavigator;
