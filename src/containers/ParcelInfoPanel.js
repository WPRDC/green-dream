import React, {Component} from "react";
import {connect} from "react-redux";

import InfoPanel from "../components/InfoPanel";
import DataSection from "../components/dashboardOld/DataSection";
import DashboardHeaderImage from "../components/dashboardOld/DashboardHeaderImage";
import {extractAddressFromData} from "../utils/dataUtils";

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
  Foreclosure,
  PoliticalDistricts,
} from "../components/propertyCards";
import {closeDisplay} from "../actions/dataActions";

const ParcelInfoPanel = props => {
  const {
    currentSelection,
    isFetching,
    data,
    isOpen,
    handleClose,
    imageUrl
  } = props;

  if (data) {
    let title = "Property Information";
    if (isFetching) {
      title = "Retrieving parcel data...";
    } else {
      const addr = extractAddressFromData(data);
      title = (
        <div>
          <p style={{marginBottom: "3px"}}>
            {addr.number} {addr.street}
          </p>
          <p style={{marginTop: "3px", marginBottom: "6px"}}>
            {addr.city}, {addr.state} {addr.zip}
          </p>
          <p style={{marginBottom: "3px", fontSize: '1rem'}}>{currentSelection.id}</p>
        </div>
      );
    }

    return (
      <InfoPanel
        title={title}
        isOpen={isOpen}
        isFetching={isFetching}
        handleClose={handleClose(currentSelection)}
      >
        <DashboardHeaderImage imageUrl={imageUrl}/>
        <DataSection>
          <ParcelCharacteristics data={data}/>
          <OwnerAddress data={data}/>
          <PoliticalDistricts data={data}/>
          <DwellingCharacteristics data={data}/>

          <AssessmentTable data={data}/>

          <PropertyTaxReductions data={data}/>

          <SalesTable data={data}/>

          <BuildingCodeViolations data={data}/>

          <TaxLiens data={data}/>

          <TaxDelinquency data={data}/>

          <Foreclosure data={data}/>
        </DataSection>
      </InfoPanel>
    );
  } else {
    return null;
  }
};

const mapStateToProps = state => {
  const {currentSelection, parcelDataById, parcelImagesById} = state;

  const {isFetching, data} = parcelDataById[currentSelection.id] || {
    isFetching: false,
    data: null
  };
  const isOpen = currentSelection.objectType === "parcels";
  const {imageUrl} = parcelImagesById[currentSelection.id] || {imageUrl: null};
  return {isFetching, data, isOpen, imageUrl, currentSelection};
};

const mapDispatchToProps = dispatch => {
  return {
    handleClose: (currentSelection) => () => {
      console.log(currentSelection);
      dispatch(closeDisplay(currentSelection));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ParcelInfoPanel);
