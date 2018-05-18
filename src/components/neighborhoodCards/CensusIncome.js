import React from "react";

import DataCard from "../dashboardOld/DataCard";
import CensusList from "../dashboardOld/dataDisplays/CensusList";

import { monify, shortenNumber } from "../../utils/dataUtils";

const CensusIncome = props => {
  return (
    <DataCard title="Population by Income (ACS5 2016)"
              subtitle="estimates">
      <CensusList
        data={props.data["census_data"]["income"]}
        missingDataMsg="Uh Oh"
        fields={[
          { resource: "Less than $10000", field: "estimate", title: "Less than $10000"},
          { resource: "10,000 to $14,999", field: "estimate", title: "10,000 to $14,999", },
          { resource: "$15,000 to $19,999", field: "estimate" },
          { resource: "$20,000 to $24,999", field: "estimate" },
          { resource: "$25,000 to $29,999", field: "estimate" },
          { resource: "$30,000 to $34,999", field: "estimate" },
          { resource: "$35,000 to $39,999", field: "estimate" },
          { resource: "$40,000 to $44,999", field: "estimate" },
          { resource: "$45,000 to $49,999", field: "estimate" },
          { resource: "$50,000 to $59,999", field: "estimate" },
          { resource: "$60,000 to $74,999", field: "estimate" },
          { resource: "$75,000 to $99,999", field: "estimate" },
          { resource: "$100,000 to $124,999", field: "estimate" },
          { resource: "$125,000 to $149,999", field: "estimate" },
          { resource: "$150,000 to $199,999", field: "estimate" },
          { resource: "$200,000 or more", field: "estimate" }
        ]}
      />
    </DataCard>
  );
};

export default CensusIncome;
