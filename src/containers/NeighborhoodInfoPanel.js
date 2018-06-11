import React, { Component } from "react";
import { connect } from "react-redux";

import InfoPanel from "../components/InfoPanel";
import DataSection from "../components/dashboardOld/DataSection";
import CensusIncome from "../components/neighborhoodCards/CensusIncome";
import CensusRace from "../components/neighborhoodCards/CensusRace";
import CensusAge from "../components/neighborhoodCards/CensusAge";
import { closeDisplay } from "../actions/dataActions";
import PropertyValue from "../components/neighborhoodCards/PropertyValue";

const NeighborhoodInfoPanel = props => {
  const {
    children,
    classes,
    isFetching,
    data,
    isOpen,
    id,
    name,
    handleClose
  } = props;

  if (data) {
    return (
      <InfoPanel
        title={name || "Neighborhood Information"}
        isOpen={isOpen}
        isFetching={isFetching}
        handleClose={handleClose}
      >
        <DataSection>
          <PropertyValue data={data}/>
          <CensusRace data={data} />
          <CensusIncome data={data} />
          <CensusAge data={data}/>
        </DataSection>
      </InfoPanel>
    );
  } else {
    return null;
  }
};

const mapStateToProps = state => {
  const { currentSelection, neighborhoodDataById } = state;
  const { objectType, id, name } = currentSelection;

  const { isFetching, data } = id
    ? neighborhoodDataById[id.toLowerCase().replace(/(\-|\s)/g, "_")] || {
        isFetching: false,
        data: null
      }
    : {
        isFetching: false,
        data: null
      };
  console.log(isFetching);
  const isOpen = objectType === "neighborhoods";
  return { isOpen, id, name, isFetching, data };
};

const mapDispatchToProps = dispatch => {
  return {
    handleClose: () => {
      dispatch(closeDisplay());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  NeighborhoodInfoPanel
);
