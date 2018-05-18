import React from "react";

import DataCard from "../dashboardOld/DataCard";
import CensusList from "../dashboardOld/dataDisplays/CensusList";

import { monify, shortenNumber } from "../../utils/dataUtils";

const CensusRace = props => {
  return (
    <DataCard
      title="Population by Race (ACS5 2016)"
      subtitle="estimates"
    >
      <CensusList
        data={props.data["census_data"]["deomgraphics"]}
        missingDataMsg="Uh Oh"
        fields={[
          { resource: "Total Population", field: "estimate" },
          { resource: "White", field: "estimate" },
          { resource: "Black", field: "estimate" },
          { resource: "America Indian/Alaska Native", field: "estimate" },
          { resource: "Asian", field: "estimate" },
          {
            resource: "Native Hawaiian and Other Pacific Islander",
            field: "estimate"
          },
          { resource: "Tother", field: "estimate" },
          { resource: "Two or more races", field: "estimate" }
        ]}
      />
    </DataCard>
  );
};

export default CensusRace;
