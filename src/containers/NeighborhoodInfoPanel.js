import React, {Component} from "react";
import {connect} from "react-redux";

import InfoPanel from "../components/InfoPanel";
import DataSection from "../components/dashboardOld/DataSection";
import CensusIncome from "../components/neighborhoodCards/CensusIncome";
import CensusRace from "../components/neighborhoodCards/CensusRace";
import CensusAge from "../components/neighborhoodCards/CensusAge";
import {closeDisplay} from "../actions/dataActions";
import SaleValue from "../components/neighborhoodCards/SaleValue";
import AssessmentValue from "../components/neighborhoodCards/AssessmentValue";

const NeighborhoodInfoPanel = props => {
  const {
    name, currentSelection,
    isFetching,
    data,
    isOpen,
    handleClose
  } = props;

  if (data) {
    return (
      <InfoPanel
        title={name || "Neighborhood Information"}
        isOpen={isOpen}
        isFetching={isFetching}
        handleClose={handleClose(currentSelection)}
      >
        <DataSection>
          <AssessmentValue data={data}/>
          <SaleValue data={data}/>
          <CensusRace data={data}/>
          <CensusIncome data={data}/>
          <CensusAge data={data}/>
        </DataSection>
      </InfoPanel>
    );
  } else {
    return null;
  }
};

const mapStateToProps = state => {
  const {currentSelection, neighborhoodDataById} = state;
  const {isFetching, data} = currentSelection.id
    ? neighborhoodDataById[currentSelection.id.toLowerCase().replace(/(\-|\s)/g, "_")] || {
    isFetching: false,
    data: null
  }
    : {
      isFetching: false,
      data: null
    };

  const name = currentSelection.id ? currentSelection.id.replace('_', ' ') : null;
  const isOpen = ['neighborhoods', 'municipalities'].includes(currentSelection.objectType);
  return {isOpen, isFetching, data, name, currentSelection};
};

const mapDispatchToProps = dispatch => {
  return {
    handleClose: (currentSelection) => () => {
      dispatch(closeDisplay(currentSelection));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  NeighborhoodInfoPanel
);
