import React, { useState } from "react";

function FilterComponent(props) {
  const [yearsButtonId, setYearsButtonId] = useState("");
  const [launchButtonId, setLaunchButtonId] = useState("");
  const [landButtonId, setLandButtonId] = useState("");
  return (
    <>
      <div className="filter-component-container">
        <h1 className="filter-title">Filters</h1>
        <div className="launch-properties">
          <h3 className="launch-properties-title">Launch Year</h3>
          <div>
            <div className="filter-button-container">
              <button
                id="2006"
                className={
                  yearsButtonId === "2006"
                    ? "launch-years-button-active"
                    : "launch-years-button"
                }
                value="2006"
                onClick={(e) => {
                  e.preventDefault();
                  setYearsButtonId(e.target.id);
                  props.yearActive(e.target.value);
                }}
              >
                2006
              </button>
              <button
                id="2007"
                className={
                  yearsButtonId === "2007"
                    ? "launch-years-button-active"
                    : "launch-years-button"
                }
                value="2007"
                onClick={(e) => {
                  e.preventDefault();
                  setYearsButtonId(e.target.id);
                  props.yearActive(e.target.value);
                }}
              >
                2007
              </button>
            </div>
            <div className="filter-button-container">
              <button
                id="2008"
                className={
                  yearsButtonId === "2008"
                    ? "launch-years-button-active"
                    : "launch-years-button"
                }
                value="2008"
                onClick={(e) => {
                  e.preventDefault();
                  setYearsButtonId(e.target.id);
                  props.yearActive(e.target.value);
                }}
              >
                2008
              </button>
              <button
                id="2009"
                className={
                  yearsButtonId === "2009"
                    ? "launch-years-button-active"
                    : "launch-years-button"
                }
                value="2009"
                onClick={(e) => {
                  e.preventDefault();
                  setYearsButtonId(e.target.id);
                  props.yearActive(e.target.value);
                }}
              >
                2009
              </button>
            </div>
            <div className="filter-button-container">
              <button
                id="2010"
                className={
                  yearsButtonId === "2010"
                    ? "launch-years-button-active"
                    : "launch-years-button"
                }
                value="2010"
                onClick={(e) => {
                  e.preventDefault();
                  setYearsButtonId(e.target.id);
                  props.yearActive(e.target.value);
                }}
              >
                2010
              </button>
              <button
                id="2011"
                className={
                  yearsButtonId === "2011"
                    ? "launch-years-button-active"
                    : "launch-years-button"
                }
                value="2011"
                onClick={(e) => {
                  e.preventDefault();
                  setYearsButtonId(e.target.id);
                  props.yearActive(e.target.value);
                }}
              >
                2011
              </button>
            </div>
            <div className="filter-button-container">
              <button
                id="2012"
                className={
                  yearsButtonId === "2012"
                    ? "launch-years-button-active"
                    : "launch-years-button"
                }
                value="2012"
                onClick={(e) => {
                  e.preventDefault();
                  setYearsButtonId(e.target.id);
                  props.yearActive(e.target.value);
                }}
              >
                2012
              </button>
              <button
                id="2013"
                className={
                  yearsButtonId === "2013"
                    ? "launch-years-button-active"
                    : "launch-years-button"
                }
                value="2013"
                onClick={(e) => {
                  e.preventDefault();
                  setYearsButtonId(e.target.id);
                  props.yearActive(e.target.value);
                }}
              >
                2013
              </button>
            </div>
            <div className="filter-button-container">
              <button
                id="2014"
                className={
                  yearsButtonId === "2014"
                    ? "launch-years-button-active"
                    : "launch-years-button"
                }
                value="2014"
                onClick={(e) => {
                  e.preventDefault();
                  setYearsButtonId(e.target.id);
                  props.yearActive(e.target.value);
                }}
              >
                2014
              </button>
              <button
                id="2015"
                className={
                  yearsButtonId === "2015"
                    ? "launch-years-button-active"
                    : "launch-years-button"
                }
                value="2015"
                onClick={(e) => {
                  e.preventDefault();
                  setYearsButtonId(e.target.id);
                  props.yearActive(e.target.value);
                }}
              >
                2015
              </button>
            </div>
            <div className="filter-button-container">
              <button
                id="2016"
                className={
                  yearsButtonId === "2016"
                    ? "launch-years-button-active"
                    : "launch-years-button"
                }
                value="2016"
                onClick={(e) => {
                  e.preventDefault();
                  setYearsButtonId(e.target.id);
                  props.yearActive(e.target.value);
                }}
              >
                2016
              </button>
              <button
                id="2017"
                className={
                  yearsButtonId === "2017"
                    ? "launch-years-button-active"
                    : "launch-years-button"
                }
                value="2017"
                onClick={(e) => {
                  e.preventDefault();
                  setYearsButtonId(e.target.id);
                  props.yearActive(e.target.value);
                }}
              >
                2017
              </button>
            </div>
            <div className="filter-button-container">
              <button
                id="2018"
                className={
                  yearsButtonId === "2018"
                    ? "launch-years-button-active"
                    : "launch-years-button"
                }
                value="2018"
                onClick={(e) => {
                  e.preventDefault();
                  setYearsButtonId(e.target.id);
                  props.yearActive(e.target.value);
                }}
              >
                2018
              </button>
              <button
                id="2019"
                className={
                  yearsButtonId === "2019"
                    ? "launch-years-button-active"
                    : "launch-years-button"
                }
                value="2019"
                onClick={(e) => {
                  e.preventDefault();
                  setYearsButtonId(e.target.id);
                  props.yearActive(e.target.value);
                }}
              >
                2019
              </button>
            </div>
            <div className="filter-button-container-last">
              <button
                id="2020"
                className={
                  yearsButtonId === "2020"
                    ? "launch-years-button-active"
                    : "launch-years-button"
                }
                value="2020"
                onClick={(e) => {
                  e.preventDefault();
                  setYearsButtonId(e.target.id);
                  props.yearActive(e.target.value);
                }}
              >
                2020
              </button>
            </div>
          </div>
        </div>
        <div className="successful-launch">
          <h3 className="launch-properties-title">Successful Launch</h3>
          <div className="filter-button-container">
            <button
              id="successful-launch-true"
              className={
                launchButtonId === "successful-launch-true"
                  ? "launch-years-button-active"
                  : "launch-years-button"
              }
              value="true"
              onClick={(e) => {
                e.preventDefault();
                setLaunchButtonId(e.target.id);
                props.successLaunch(true);
              }}
            >
              True
            </button>
            <button
              id="successful-launch-false"
              className={
                launchButtonId === "successful-launch-false"
                  ? "launch-years-button-active"
                  : "launch-years-button"
              }
              value="false"
              onClick={(e) => {
                e.preventDefault();
                setLaunchButtonId(e.target.id);
                props.successLaunch(false);
              }}
            >
              False
            </button>
          </div>
        </div>
        <div className="successful-landing">
          <h3 className="launch-properties-title">Successful Landing</h3>
          <div className="filter-button-container">
            <button
              id="successful-land-true"
              className={
                landButtonId === "successful-land-true"
                  ? "launch-years-button-active"
                  : "launch-years-button"
              }
              value="true"
              onClick={(e) => {
                e.preventDefault();
                setLandButtonId(e.target.id);
                props.successLanding(true);
              }}
            >
              True
            </button>
            <button
              id="successful-land-false"
              className={
                landButtonId === "successful-land-false"
                  ? "launch-years-button-active"
                  : "launch-years-button"
              }
              value="successful-land-false"
              onClick={(e) => {
                e.preventDefault();
                setLandButtonId(e.target.id);
                props.successLanding(false);
              }}
            >
              False
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default FilterComponent;
