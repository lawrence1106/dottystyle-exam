import { useState, useEffect } from "react";
import "./photoStyles.css";
import PhotoNavigator from "./photoNavigator/photoNavigator";

const photoList = [
  {
    alt: "photoAlt",
    title: "A House",
    link: "https://images.unsplash.com/photo-1465572089651-8fde36c892dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1189&q=80",
    desc: `a building for human habitation, especially one that is lived in by a family or small group of people.`,
  },
  {
    alt: "photoAlt",
    title: "A Car",
    link: "https://images.unsplash.com/photo-1496753480864-3e588e0269b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1405&q=80",
    desc: `A car (or automobile) is a wheeled motor vehicle used for transportation. Most definitions of cars say that they run primarily on roads, seat one to eight people, have four wheels, and mainly transport people rather than goods`,
  },
  {
    alt: "photoAlt",
    title: "Ice Skiing Hooman",
    link: "https://images.unsplash.com/photo-1487777571634-48eb9b252b68?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    desc: `each of a pair of long narrow pieces of hard flexible material, typically pointed and turned up at the front, fastened under the feet for gliding over snow.`,
  },
  {
    alt: "photoAlt",
    title: "Some Weird Plants",
    link: "https://images.unsplash.com/photo-1508158832212-ddcf020bd13e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    desc: `a succulent plant with a thick, fleshy stem that typically bears spines, lacks leaves, and has brilliantly colored flowers. Cacti are native to arid regions of the New World and are cultivated elsewhere, especially as houseplants.`,
  },
  {
    alt: "photoAlt",
    title: "The X-Smoke",
    link: "https://images.unsplash.com/photo-1501947248335-9b511c0cb5c9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    desc: `a visible suspension of carbon or other particles in air, typically one emitted from a burning substance.`,
  },
  {
    alt: "photoAlt",
    title: "The X-Road",
    link: "https://images.unsplash.com/photo-1527090370835-4e7ba36c1272?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=968&q=80",
    desc: `a wide way leading from one place to another, especially one with a specially prepared surface which vehicles can use`,
  },
];

const Photo = () => {
  const [selectedPhoto, setSelectedPhoto] = useState({});

  const photoRenderer = () => {
    return (
      <div className="photo-render">
        <img
          alt={selectedPhoto.alt}
          width="560"
          height="360"
          title="Shinkai"
          src={selectedPhoto.link}
        />
        <div className="photo-details">
          <div className="photo-title">{selectedPhoto.title}</div>
          <div className="photo-desc">{selectedPhoto.desc}</div>
        </div>
      </div>
    );
  };

  useEffect(() => {
    setSelectedPhoto(photoList[0]);
  }, []);

  return (
    <div className="photoContainer">
      <div>{photoRenderer()}</div>
      <div className="centered-navigator">
        <PhotoNavigator
          photoList={photoList}
          setSelectedPhoto={setSelectedPhoto}
          selectedPhoto={selectedPhoto.title}
        />
      </div>
    </div>
  );
};
export default Photo;
