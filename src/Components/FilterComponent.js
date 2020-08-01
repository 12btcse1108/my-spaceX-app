import React, { useState } from "react";

function FilterComponent(props) {
  const [successfulLaunch, setSuccessfulLaunch] = useState(true);
  return (
    <>
      <div className="filter-component-container">
        <h1 className="filter-title">Filters</h1>
        <div className="launch-properties">
          <h3 className="launch-properties-title">Launch Year</h3>
          <div>
            <div className="filter-button-container">
              <button
                value="2006"
                onClick={(e) => {
                  e.preventDefault();
                  props.yearActive(e.target.value);
                }}
              >
                2006
              </button>
              <button
                value="2007"
                onClick={(e) => {
                  e.preventDefault();
                  props.yearActive(e.target.value);
                }}
              >
                2007
              </button>
            </div>
            <div className="filter-button-container">
              <button
                value="2008"
                onClick={(e) => {
                  e.preventDefault();
                  props.yearActive(e.target.value);
                }}
              >
                2008
              </button>
              <button
                value="2009"
                onClick={(e) => {
                  e.preventDefault();
                  props.yearActive(e.target.value);
                }}
              >
                2009
              </button>
            </div>
            <div className="filter-button-container">
              <button
                value="2010"
                onClick={(e) => {
                  e.preventDefault();
                  props.yearActive(e.target.value);
                }}
              >
                2010
              </button>
              <button
                value="2011"
                onClick={(e) => {
                  e.preventDefault();
                  props.yearActive(e.target.value);
                }}
              >
                2011
              </button>
            </div>
            <div className="filter-button-container">
              <button
                value="2012"
                onClick={(e) => {
                  e.preventDefault();
                  props.yearActive(e.target.value);
                }}
              >
                2012
              </button>
              <button
                value="2013"
                onClick={(e) => {
                  e.preventDefault();
                  props.yearActive(e.target.value);
                }}
              >
                2013
              </button>
            </div>
            <div className="filter-button-container">
              <button
                value="2014"
                onClick={(e) => {
                  e.preventDefault();
                  props.yearActive(e.target.value);
                }}
              >
                2014
              </button>
              <button
                value="2015"
                onClick={(e) => {
                  e.preventDefault();
                  props.yearActive(e.target.value);
                }}
              >
                2015
              </button>
            </div>
            <div className="filter-button-container">
              <button
                value="2016"
                onClick={(e) => {
                  e.preventDefault();
                  props.yearActive(e.target.value);
                }}
              >
                2016
              </button>
              <button
                value="2017"
                onClick={(e) => {
                  e.preventDefault();
                  props.yearActive(e.target.value);
                }}
              >
                2017
              </button>
            </div>
            <div className="filter-button-container">
              <button
                value="2018"
                onClick={(e) => {
                  e.preventDefault();
                  props.yearActive(e.target.value);
                }}
              >
                2018
              </button>
              <button
                value="2019"
                onClick={(e) => {
                  e.preventDefault();
                  props.yearActive(e.target.value);
                }}
              >
                2019
              </button>
            </div>
            <div className="filter-button-container">
              <button
                value="2020"
                onClick={(e) => {
                  e.preventDefault();
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
              value="true"
              onClick={(e) => {
                e.preventDefault();
                props.successLaunch(true);
              }}
            >
              True
            </button>
            <button
              value="false"
              onClick={(e) => {
                e.preventDefault();
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
              value="true"
              onClick={(e) => {
                e.preventDefault();
                props.successLanding(true);
              }}
            >
              True
            </button>
            <button
              value="false"
              onClick={(e) => {
                e.preventDefault();
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
