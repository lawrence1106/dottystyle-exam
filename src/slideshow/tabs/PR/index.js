import { useState, useEffect } from "react";
import "./PRStyles.css";
import PRNavigator from "./PRNavigator/PRNavigator";

const PRList = [
  {
    alt: "photoAlt",
    title: "Some Birds",
    link: "https://images.unsplash.com/photo-1583159429746-30d28f92da6e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80",
    desc: `a warm-blooded egg-laying vertebrate distinguished by the possession of feathers, wings, and a beak and (typically) by being able to fly.`,
  },
  {
    alt: "photoAlt",
    title: "Motorbikeku",
    link: "https://images.unsplash.com/photo-1613738452920-936361c412ef?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    desc: `a motorcycle, typically a small, lightweight one.`,
  },
  {
    alt: "photoAlt",
    title: "Sora da!",
    link: "https://images.unsplash.com/photo-1590605417242-c345d9365941?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    desc: `the region of the atmosphere and outer space seen from the earth.
    "hundreds of stars shining in the sky"`,
  },
  {
    alt: "photoAlt",
    title: "Baka here",
    link: "a fully grown female animal of a domesticated breed of ox, kept to produce milk or beef.",
    desc: `a succulent plant with a thick, fleshy stem that typically bears spines, lacks leaves, and has brilliantly colored flowers. Cacti are native to arid regions of the New World and are cultivated elsewhere, especially as houseplants.`,
  },
  {
    alt: "photoAlt",
    title: "The Tree",
    link: "https://images.unsplash.com/photo-1617332498551-ad4f490f856d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80",
    desc: `a woody perennial plant, typically having a single stem or trunk growing to a considerable height and bearing lateral branches at some distance from the ground.`,
  },
  {
    alt: "photoAlt",
    title: "Some Random Buildings",
    link: "https://images.unsplash.com/photo-1601480772033-4c0c23c438a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    desc: `a structure with a roof and walls, such as a house, school, store, or factory.`,
  },
];

const PR = () => {
  const [selectedPR, setSelectedPR] = useState({});

  const PRRenderer = () => {
    return (
      <div className="photo-render">
        <img
          alt={selectedPR.alt}
          width="560"
          height="360"
          title="Shinkai"
          src={selectedPR.link}
        />
        <div className="photo-details">
          <div className="photo-title">{selectedPR.title}</div>
          <div className="photo-desc">{selectedPR.desc}</div>
        </div>
      </div>
    );
  };

  useEffect(() => {
    setSelectedPR(PRList[0]);
  }, []);

  return (
    <div className="photoContainer">
      <div>{PRRenderer()}</div>
      <div className="centered-navigator">
        <PRNavigator
          PRList={PRList}
          setSelectedPR={setSelectedPR}
          selectedPR={selectedPR.title}
        />
      </div>
    </div>
  );
};
export default PR;
