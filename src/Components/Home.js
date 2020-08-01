import React from "react";
import FilterComponent from "./FilterComponent";
import MissionsList from "./MissionsList";

function Home(props) {
  return (
    <>
      <header>
        <div className="app-container-title">SpaceX Launch Program</div>
      </header>
      <aside>
        <FilterComponent />
      </aside>
      <section>
        <MissionsList />
      </section>
      <footer>Developer Name: Nitin Verma</footer>
    </>
  );
}

export default Home;
