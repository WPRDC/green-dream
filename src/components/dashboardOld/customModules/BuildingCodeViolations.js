import React, { Component } from "react";
import Tabs, { Tab } from "material-ui/Tabs";
import DataCard from "../DataCard";
import ListOfKeyValueListsDisplay from "../dataDisplays/ListOfKeyValueListsDisplay";

const BuildingCodeViolations = props => {
  return (
    <DataCard
      title="Building Code Violations"
      subtitle="Currently only available for the City of Pittsburgh."
      datasetId="pli_violations"
    >
      <ListOfKeyValueListsDisplay
        data={props.data}
        title="Code Violations Filing"
        note=""
        resource="pli_violations"
        titleField={"Case Number"}
        fields={[
          {
            field: "CASE_NUMBER",
            title: "Case Number",
            info: "Case Number identifying violation.",
            resource: "pli_violations",
            type: "string"
          },
          {
            field: "VIOLATION",
            title: "Violation",
            info: "Code violation",
            resource: "pli_violations",
            type: "string"
          },
          {
            field: "CORRECTIVE_ACTION",
            title: "Corrective Action",
            info: "Prescribed corrective action for violation.",
            resource: "pli_violations",
            type: "string"
          },
          {
            field: "LOCATION",
            title: "Location",
            info: "Location on the property where the violation occurred.",
            resource: "pli_violations",
            type: "string"
          },
          {
            field: "INSPECTION_DATE",
            title: "Inspection date",
            info: "Date of inspection",
            resource: "pli_violations",
            type: "string"
          },
          {
            field: "INSPECTION_RESULT",
            title: "Inspection Result",
            info: "Amount at issue as of last data extraction",
            resource: "pli_violations",
            type: "category"
          }
        ]}
        missingDataMsg="No code violations were found for this property."
      />
    </DataCard>
  );
};

export default BuildingCodeViolations;
