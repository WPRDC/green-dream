import React, { Component } from "react";

import KeyValueListDisplay from "../dashboardOld/dataDisplays/KeyValueListDisplay";
import DataCard from "../dashboardOld/DataCard";

const PropertyTaxReductions = props => {
  return (
    <DataCard title="Tax Reductions" datasetId="assessment">
      <KeyValueListDisplay
        data={props.data}
        fields={[
          {
            title: "Homestead",
            field: "HOMESTEADFLAG",
            resource: "assessments",
            formatter: data => (data ? "YES" : "NO")
          },
          {
            title: "Farmstead",
            field: "FARMSTEADFLAG",
            resource: "assessments",
            formatter: data => (data ? "YES" : "NO")
          },
          {
            title: "Clean & Green",
            field: "CLEANGREEN",
            resource: "assessments",
            formatter: data => (data ? "YES" : "NO")
          },
          {
            title: "Abatement",
            field: "ABATEMENTFLAG",
            resource: "assessments",
            formatter: data => (data ? "YES" : "NO")
          }
        ]}
        allowNulls={true}
      />
    </DataCard>
  );
};

export default PropertyTaxReductions;
