import React, {Component} from 'react'
import {connect} from 'react-redux'

import InfoPanel from '../components/infoPanel/InfoPanel'
import DataSection from '../components/dashboardOld/DataSection'

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
} from '../components/dashboardOld/customModules'
import {closeDisplay} from "../actions/dataActions";


const ParcelInfoPanel = props => {
  const {
    children,
    classes,
    parcelId,
    isFetching,
    data,
    dataDisplay,
    handleClose
  } = props;

  if(data) {
    return (
      <InfoPanel title="Property Information" isOpen={dataDisplay.open} isFetching={isFetching}>
        <DataSection>
          <ParcelCharacteristics data={data}/>
          <OwnerAddress data={data} parcelId={parcelId}/>

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
}

const mapStateToProps = state => {
  const {
    currentParcelId,
    parcelDataById,
    dataDisplay
  } = state;
  const {isFetching, data} = parcelDataById[currentParcelId] || {isFetching: false, data: null};
  return {currentParcelId, isFetching, data, dataDisplay}
}

const mapDispatchToProps = dispatch => {
  return {
    handleClose: () => {
      dispatch(closeDisplay())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ParcelInfoPanel);