import React, {Component} from "react";

import KeyValueListDisplay from "../dashboardOld/dataDisplays/KeyValueListDisplay";
import DataCard from "../dashboardOld/DataCard";

const fieldMapping = [
  {resource: "assessments", field: "CLASSDESC", title: "Use Class"},
  {resource: "assessments", field: "OWNERDESC", title: "Owner Type"},
  {resource: "assessments", field: "USEDESC", title: "Land Use"},
  {
    resource: "assessments", field: "LOTAREA", title: "Lot Size",
    formatter: input => {
      return [
        `${(input * 0.0000229568).toFixed(2)} acres`,
        ` (${input} ft`,
        <sup
          style={{
            verticalAlign: "baseline",
            position: "relative",
            bottom: "1ex"
          }}
          key="1"
        >
          2
        </sup>,
        ')'
      ];
    }
  }
];

const ParcelCharacteristics = props => {
  return (
    <DataCard title="Property Characteristics" datasetId="assessment">
      <KeyValueListDisplay data={props.data} fields={fieldMapping}/>
    </DataCard>
  );
};

export default ParcelCharacteristics;
