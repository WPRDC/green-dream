import React, { Component } from "react";
import { connect } from "react-redux";

import InfoPanel from "../components/infoPanel/InfoPanel";
import DataSection from "../components/dashboardOld/DataSection";

import {
  ParcelCharacteristics,
  DwellingCharacteristics,
  AssessmentTable,
  PropertyTaxReductions,
  SalesTable,
  TaxLiens,
  OwnerAddress,
  BuildingCodeViolations,
  TaxDelinquency,
  Foreclosure
} from "../components/dashboardOld/customModules";
import { closeDisplay } from "../actions/dataActions";

const NeighborhoodInfoPanel = props => {
  const { children, classes, isFetching, data, isOpen, handleClose } = props;

  return (
    <InfoPanel
      title="Neighborhood Information"
      isOpen={isOpen}
      isFetching={false}
      handleClose={handleClose}
    >
      <DataSection>
        <p>This is where neighborhood data will go!</p>
      </DataSection>
    </InfoPanel>
  );
};

const mapStateToProps = state => {
  const { currentSelection } = state;
  const {objectType, id, name} = currentSelection
  const isOpen = objectType === "neighborhoods";
  return { isOpen };
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
