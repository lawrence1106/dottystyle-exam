import { useState, useEffect } from "react";
import "./photoStyles.css";
import PhotoNavigator from "./photoNavigator/photoNavigator";

const photoList = [
  {
    alt: "photoAlt",
    title: "Hands with Phones",
    link: "https://images.unsplash.com/photo-1573152143286-0c422b4d2175?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    desc: `the imparting or exchanging of information or news.`,
  },
  {
    alt: "photoAlt",
    title: "Social Media Rubber Logos",
    link: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80",
    desc: `websites and applications that enable users to create and share content or to participate in social networking.`,
  },
  {
    alt: "photoAlt",
    title: "Holding Phone Upwards",
    link: "https://images.unsplash.com/photo-1516251193007-45ef944ab0c6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    desc: `A mobile phone signal (also known as reception and service) is the signal strength (measured in dBm) received by a mobile phone from a cellular network (on the downlink). Depending on various factors, such as proximity to a tower, any obstructions such as buildings or trees, etc. this signal strength will vary.`,
  },
  {
    alt: "photoAlt",
    title: "Ipad with hands on it",
    link: "https://images.unsplash.com/photo-1504270997636-07ddfbd48945?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80",
    desc: `The iPad is a tablet computer developed by Apple. It is smaller than a typical laptop, but significantly larger than the average smartphone. The iPad does not include a keyboard or a trackpad, but instead has a touchscreen interface, which is used to control the device.`,
  },
  {
    alt: "photoAlt",
    title: "Hooman using Laptop",
    link: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    desc: `a computer that is portable and suitable for use while traveling.`,
  },
  {
    alt: "photoAlt",
    title: "Hands again with Phones",
    link: "https://images.unsplash.com/photo-1532356884227-66d7c0e9e4c2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    desc: `the end part of a person's arm beyond the wrist, including the palm, fingers, and thumb.`,
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
