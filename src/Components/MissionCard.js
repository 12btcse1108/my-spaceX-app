import React from "react";

function MissionCard(props) {
  return (
    <>
      <div className="mission-card-container">
        <div className="image-container">
          <img alt="mission cover" src="" />
        </div>
        <div className="content-container">
          <h4>Mission Ids</h4>
          <h4>Launch Year</h4>
          <h4>Successful Launch</h4>
          <h4>Successful Landing</h4>
        </div>
      </div>
    </>
  );
}

export default MissionCard;
