import { useState, useEffect } from "react";
import "./radioStyles.css";
import RadioNavigator from "./radioNavigator/radioNavigator";

const radioList = [
  {
    alt: "photoAlt",
    title: "A Radio",
    link: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    desc: `the transmission and reception of electromagnetic waves of radio frequency, especially those carrying sound messages.`,
  },
  {
    alt: "photoAlt",
    title: "Feet on Radio",
    link: "https://images.unsplash.com/photo-1487180144351-b8472da7d491?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80",
    desc: `the lower extremity of the leg below the ankle, on which a person stands or walks.`,
  },
  {
    alt: "photoAlt",
    title: "Old Radio",
    link: "https://images.unsplash.com/photo-1604838577951-fc3334039881?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=968&q=80",
    desc: `the transmission and reception of electromagnetic waves of radio frequency, especially those carrying sound messages.`,
  },
  {
    alt: "photoAlt",
    title: "On Air",
    link: "https://images.unsplash.com/photo-1598743400863-0201c7e1445b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    desc: `the action or process of recording sound or a performance for subsequent reproduction or broadcast.
    `,
  },
  {
    alt: "photoAlt",
    title: "The Mic",
    link: "https://images.unsplash.com/photo-1485579149621-3123dd979885?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80",
    desc: `There are some interactive elements involved, including a feature that lets viewers applaud (literally, into a computer mic) and have that applause be visually communicated to the performers.`,
  },
  {
    alt: "photoAlt",
    title: "Radio with Plant-kun",
    link: "https://images.unsplash.com/photo-1593078166039-c9878df5c520?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    desc: `a wide way leading from one place to another, especially one with a specially prepared surface which vehicles can use`,
  },
];

const Radio = () => {
  const [selectedRadio, setSelectedRadio] = useState({});

  const radioRenderer = () => {
    return (
      <div className="radio-render">
        <img
          alt={selectedRadio.alt}
          width="560"
          height="360"
          title="Shinkai"
          src={selectedRadio.link}
        />
        <div className="radio-details">
          <div className="radio-title">{selectedRadio.title}</div>
          <div className="radio-desc">{selectedRadio.desc}</div>
        </div>
      </div>
    );
  };

  useEffect(() => {
    setSelectedRadio(radioList[0]);
  }, []);

  return (
    <div className="radioContainer">
      <div>{radioRenderer()}</div>
      <div className="centered-navigator">
        <RadioNavigator
          radioList={radioList}
          setSelectedRadio={setSelectedRadio}
          selectedRadio={selectedRadio.title}
        />
      </div>
    </div>
  );
};
export default Radio;
