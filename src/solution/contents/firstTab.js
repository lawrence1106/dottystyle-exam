import "./tabsStyles.css";

const firstTab = () => {
  return (
    <div className="tabContainer">
      <div className="tabContents">
        {/* first section */}
        <div>
          We knew movies rated high on the list of our target’s interests and,
          with
        </div>
        <div>
          incredible beaches, seaplanes, yachts and glamorous locations, the
        </div>
        <div>Whitsundays is the perfect setting for a movie.</div>
        {/* first section end */}
        <div className="textSeparator">
          So we invited Australians to write it:
        </div>
        <div className="contentHeader">The Whitsundays.</div>
        <div className="contentHeader">
          A movie that's waiting to be written.
        </div>
        <div className="textSeparator" />
        {/* second section start */}
        <div>
          We enlisted world-renowned screenwriter Craig Pearce as Script
          Supervisor.
        </div>
        <div>
          Then for 20 days we posted a daily storyboard image on Facebook and
        </div>
        <div>
          Instagram, inviting the public to write scenes for a chance to win a
          $10,000
        </div>
        <div>luxury holiday.</div>
      </div>
    </div>
  );
};

export default firstTab;
