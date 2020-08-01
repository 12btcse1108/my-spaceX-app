import React from "react";

function MissionCard(props) {
  const { mission } = { ...props };
  const year = new Date(mission.launch_date_local).getFullYear();
  const cover = mission.links.mission_patch
    ? mission.links.mission_patch
    : null;
  return (
    <>
      <div className="mission-card-container">
        <div className="image-container">
          <img alt="mission cover" src={cover} />
        </div>
        <div className="content-container">
          <div className="mission-name-data">{`${mission.mission_name} #${mission.flight_number}`}</div>
          <h4>
            Mission Ids:{" "}
            <span className="mission-data-span">
              {mission.mission_id.length > 0
                ? mission.mission_id.map((id) => <li>{id}</li>)
                : "N/A"}
            </span>
          </h4>
          <h4>
            Launch Year: <span className="mission-data-span">{year}</span>
          </h4>
          <h4>
            Successful Launch:{" "}
            <span className="mission-data-span">
              {mission.launch_success ? "true" : "false"}
            </span>
          </h4>
          <h4>
            Successful Landing:{" "}
            <span className="mission-data-span">
              {mission.launch_landing === true
                ? "true"
                : mission.launch_landing === false
                ? "false"
                : "N/A"}
            </span>
          </h4>
        </div>
      </div>
    </>
  );
}

export default MissionCard;
