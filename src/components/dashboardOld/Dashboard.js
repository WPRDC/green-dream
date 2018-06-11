import React from "react";
import PropTypes from "prop-types";

/* Material UI Components */
import Divider from "material-ui/Divider";
import { LinearProgress } from "material-ui/Progress";

/* Material UI extras */
import { blue } from "material-ui/colors";

/* Helper functions */
import { monify, extractAddressFromData } from "../../utils/dataUtils";

/*Project Components*/
import DashboardHeader from "./DashboardHeader";
import DataSection from "./DataSection";
/* Components that need to be moved */
import {
  ParcelCharacteristics,
  DwellingCharacteristics,
  AssessmentTable,
  PropertyTaxReductions,
  SalesTable,
  TaxLiens,
  OwnerAddress
} from "../propertyCards/index";

/* Project Components */
import ParcelSearch from "../../containers/ParcelSearch";
import TaxDelinquency from "../propertyCards/TaxDelinquency";
import Foreclosure from "../propertyCards/Foreclosure";
import BuildingCodeViolations from "../propertyCards/BuildingCodeViolations";

const blue500 = blue[500];

const style = {
  template: {
    img: {
      height: "229px",
      width: "100%"
    },
    header: {
      height: "80px",
      backgroundColor: blue500
    }
  },
  search: {
    margin: "6px",
    position: "absolute",
    top: 0,
    left: 0,
    width: "454px"
  }
};

const Dashboard = props => {
  const {
    parcelId,
    data,
    geo,
    isFetching,
    imageUrl,
    panMapToTarget,
    handleSearch
  } = props;

  if (data && !isFetching) {
    return (
      <DataSection>
        <ParcelSearch style={style.search} />
        <Divider />
        <ParcelCharacteristics data={data} />
        <Divider />
        <OwnerAddress data={data} parcelId={parcelId} />
        <Divider />
        <DwellingCharacteristics data={data} />
        <Divider />
        <AssessmentTable data={data} />
        <Divider />
        <PropertyTaxReductions data={data} />
        <Divider />
        <SalesTable data={data} />
        <Divider />
        {/*<BuildingCodeViolations data={data}/>*/}
        <Divider />
        <TaxLiens data={data} />
        <Divider />
        <TaxDelinquency data={data} />
        <Divider />
        <Foreclosure data={data} />
      </DataSection>
    );
  } else {
    return (
      <div style={style.base}>
        <DataSection>
          <div style={style.template.img} />
          <LinearProgress mode="query" />
          <div style={style.template.header} />
        </DataSection>
      </div>
    );
  }
};

Dashboard.propTypes = {
  parcelId: PropTypes.string.isRequired,
  data: PropTypes.object,
  isFetching: PropTypes.bool.isRequired,
  imageUrl: PropTypes.string,
  panMapToTarget: PropTypes.func
};

export default Dashboard;
