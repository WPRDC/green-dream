import React from "react";

import DataCard from "../dashboardOld/DataCard";
import CensusTable from "../dashboardOld/dataDisplays/CensusTable";

const CensusIncome = props => {
  const { data } = props;
  return (
    <DataCard title="Population by Household Income" subtitle="ACS 2016 5-year Estimates">
      <CensusTable data={data.censusData.income}/>
    </DataCard>
  );
};

export default CensusIncome;
