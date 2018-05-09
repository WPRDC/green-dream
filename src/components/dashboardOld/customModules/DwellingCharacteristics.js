import React, { Component } from "react";

import KeyValueListDisplay from "../dataDisplays/KeyValueListDisplay";
import DataCard from "../DataCard";

const DwellingCharacteristics = props => {
  return (
    <DataCard title="Dwelling Characteristics" datasetId="assessment">
      <KeyValueListDisplay
        data={props.data}
        missingDataMsg="Dwelling characteristics are only available for residential parcels."
        fields={[
          { resource: "assessments", field: "STYLEDESC", title: "Style" },
          { resource: "assessments", field: "STORIES", title: "Stories" },
          { resource: "assessments", field: "YEARBLT", title: "Year Built" },
          {
            resource: "assessments",
            field: "EXTFINISH_DESC",
            title: "Exterior Finish"
          },
          {
            resource: "assessments",
            field: "HEATINGCOOLINGDESC",
            title: "Heating/Cooling"
          },
          { resource: "assessments", field: "ROOFDESC", title: "Roof" },
          { resource: "assessments", field: "BASEMENTDESC", title: "Basement" },
          { resource: "assessments", field: "GRADE", title: "Grade" },
          {
            resource: "assessments",
            field: "CONDITIONDESC",
            title: "Condition"
          },
          {
            resource: "assessments",
            field: "CDUDESC",
            title: "CDU",
            note: "Condition/Desirability/Utility"
          }
        ]}
      />
    </DataCard>
  );
};

export default DwellingCharacteristics;
