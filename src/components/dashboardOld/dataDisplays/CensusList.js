import React, { Component } from "react";

import KeyValueList from "./KeyValueList";
import MissingDataNote from "./MissingDataNote";
import { extractKeyValueSubset, hasValues } from "../../../utils/dataUtils";

const CensusList = props => {
  const {
    title,
    note,
    data,
    resource,
    fields,
    missingDataMsg,
    allowNulls
  } = props;
  const displayData = {}
  for (let item in data){
    displayData[item] = data[item].estimate
  }
  console.log('DISPLAY2', displayData)

  return (
    <div>
      {allowNulls || hasValues(displayData) ? (
        <KeyValueList data={displayData} />
      ) : (
        <MissingDataNote>{missingDataMsg}</MissingDataNote>
      )}
    </div>
  );
};

export default CensusList;
