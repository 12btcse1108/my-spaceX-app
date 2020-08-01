import React from "react";

function FilterComponent(props) {
  return (
    <>
      <div>
        <h1>Filters</h1>
        <div className="launch-year">
          <h3>Launch Year</h3>
          <button>2006</button>
          <button>2007</button>
          <button>2008</button>
          <button>2009</button>
          <button>2010</button>
          <button>2011</button>
          <button>2012</button>
          <button>2013</button>
          <button>2014</button>
          <button>2015</button>
          <button>2016</button>
          <button>2017</button>
          <button>2018</button>
          <button>2019</button>
          <button>2020</button>
        </div>
        <div className="successful-launch">
          <h3>Successful Launch</h3>
          <button>True</button>
          <button>False</button>
        </div>
        <div className="successful-landing">
          <h3>Successful Landing</h3>
          <button>True</button>
          <button>False</button>
        </div>
      </div>
    </>
  );
}

export default FilterComponent;
