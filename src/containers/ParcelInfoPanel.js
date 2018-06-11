import React, { Component } from "react";
import { connect } from "react-redux";

import InfoPanel from "../components/InfoPanel";
import DataSection from "../components/dashboardOld/DataSection";
import DashboardHeaderImage from "../components/dashboardOld/DashboardHeaderImage";
import { extractAddressFromData } from "../utils/dataUtils";

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
import { closeDisplay } from "../actions/dataActions";

const ParcelInfoPanel = props => {
  const {
    children,
    classes,
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
          <p style={{ marginBottom: "3px" }}>
            {addr.number} {addr.street}
          </p>
          <p style={{ marginTop: "3px" }}>
            {addr.city}, {addr.state} {addr.zip}
          </p>
        </div>
      );
    }

    return (
      <InfoPanel
        title={title}
        isOpen={isOpen}
        isFetching={isFetching}
        handleClose={handleClose}
      >
        <DashboardHeaderImage imageUrl={imageUrl} />
        <DataSection>
          <ParcelCharacteristics data={data} />
          <OwnerAddress data={data} />
          <PoliticalDistricts data={data}/>
          <DwellingCharacteristics data={data} />

          <AssessmentTable data={data} />

          <PropertyTaxReductions data={data} />

          <SalesTable data={data} />

          <BuildingCodeViolations data={data} />

          <TaxLiens data={data} />

          <TaxDelinquency data={data} />

          <Foreclosure data={data} />
        </DataSection>
      </InfoPanel>
    );
  } else {
    return null;
  }
};

const mapStateToProps = state => {
  const { currentSelection, parcelDataById, parcelImagesById } = state;
  const { objectType, id, name } = currentSelection;

  const { isFetching, data } = parcelDataById[id] || {
    isFetching: false,
    data: null
  };
  const isOpen = objectType === "parcels";
  const { imageUrl } = parcelImagesById[id] || { imageUrl: null };
  return { id, isFetching, data, isOpen, imageUrl };
};

const mapDispatchToProps = dispatch => {
  return {
    handleClose: () => {
      dispatch(closeDisplay());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ParcelInfoPanel);
