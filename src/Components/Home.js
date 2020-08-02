import React, { useState } from "react";
import FilterComponent from "./FilterComponent";
import MissionsList from "./MissionsList";

function Home(props) {
  const { initialData } = { ...props };
  const [filterValue, setFilterValue] = useState({});
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
        <MissionsList filterValue={filterValue} initialData={initialData} />
        <footer>
          <h4>
            Developed by: <span className="footer-credit">Nitin Verma</span>
          </h4>
        </footer>
      </section>
    </>
  );
}

export default Home;
