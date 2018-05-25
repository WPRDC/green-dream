import React from "react";

import DataCard from "../dashboardOld/DataCard";
import CensusTable from "../dashboardOld/dataDisplays/CensusTable";

const CensusAge = props => {
  const { data } = props;
  return (
    <DataCard title="Population by Age" subtitle="ACS 2016 5-year Estimates">
      <CensusTable data={data.censusData.age}/>
    </DataCard>
  );
};

export default CensusAge;
