import React, { useState } from "react";
import FilterComponent from "./FilterComponent";
import MissionsList from "./MissionsList";

function Home(props) {
  const [successfulLaunch, setSuccessfulLaunch] = useState(true);
  const [launchFailed, setLaunchFailed] = useState(false);
  const [filterValue, setFilterValue] = useState({});
  console.log(filterValue);
  const successLaunch = (label) => {
    setFilterValue((prevState) => ({ ...prevState, launch_success: label }));
  };
  const successLanding = (label) => {
    setFilterValue((prevState) => ({ ...prevState, land_success: label }));
  };
  const yearActive = (label) => {
    setFilterValue((prevState) => ({ ...prevState, launch_year: label }));
  };
  return (
    <>
      <header>
        <div className="app-container-title">SpaceX Launch Programs</div>
      </header>
      <aside>
        <FilterComponent
          successLaunch={successLaunch}
          successLanding={successLanding}
          yearActive={yearActive}
        />
      </aside>
      <section>
        <MissionsList filterValue={filterValue} />
      </section>
      <footer>Developer Name: Nitin Verma</footer>
    </>
  );
}

export default Home;
