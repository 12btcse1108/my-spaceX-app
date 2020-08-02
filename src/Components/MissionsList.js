import React, { useEffect, useState } from "react";
import MissionCard from "./MissionCard";

function MissionList(props) {
  const [missionData, setMissionData] = useState(props.initialData);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState("");
  const { filterValue } = { ...props };
  useEffect(() => {
    var queryString = Object.keys(filterValue)
      .map((key) => key + "=" + filterValue[key])
      .join("&");
    if (Object.keys(filterValue).length > 0) {
      const parse_url =
        Object.keys(filterValue).length > 0
          ? `https://api.spaceXdata.com/v3/launches?limit=100&${queryString}`
          : `https://api.spaceXdata.com/v3/launches?limit=100`;
      setIsLoading(true);
      fetch(parse_url)
        .then((res) => res.json())
        .then(
          (result) => {
            setIsLoading(false);
            setMissionData(result);
          },
          // exceptions from actual bugs in components.
          (error) => {
            setErrors(error);
          }
        );
    }
  }, [filterValue]);
  // console.log(missionData[0]);
  return (
    <>
      {isLoading ? (
        <div className="loading-container">Loading ....</div>
      ) : (
        <div className="mission-list-container">
          {missionData.length > 0 ? (
            missionData.map((mission) => (
              <MissionCard
                key={String(mission.flight_number)}
                mission={mission}
              />
            ))
          ) : (
            <div className="loading-container">No Data</div>
          )}
        </div>
      )}
    </>
  );
}

export default MissionList;
