import React, { useEffect, useState } from "react";
import MissionCard from "./MissionCard";

function MissionList(props) {
  const [missionData, setMissionData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState("");
  const { filterValue } = { ...props };
  useEffect(() => {
    var queryString = Object.keys(filterValue)
      .map((key) => key + "=" + filterValue[key])
      .join("&");
    console.log(queryString);
    const parse_url =
      filterValue.launch_year !== undefined
        ? `https://api.spaceXdata.com/v3/launches?limit=100&${queryString}`
        : `https://api.spaceXdata.com/v3/launches?limit=100`;
    // const url = `https://api.spaceXdata.com/v3/launches?limit=100&launch_success=${filterValue.launch_success}`;
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
  }, [filterValue]);
  return (
    <>
      {isLoading ? (
        <div>Loading ....</div>
      ) : (
        <div className="mission-list-container">
          {missionData.length > 0 && !isLoading
            ? missionData.map((mission) => <MissionCard mission={mission} />)
            : ""}
        </div>
      )}
    </>
  );
}

export default MissionList;
