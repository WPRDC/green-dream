import React, {Component} from "react";

import KeyValueListDisplay from "../dashboardOld/dataDisplays/KeyValueListDisplay";
import DataCard from "../dashboardOld/DataCard";
import {monify} from "../../utils/dataUtils";

const AssessmentValue = props => {
  const {data} = props;
  const value = monify(data.wprdcData.averageAssessedValue.value);
  return (
    <DataCard title="Assessment Information" subtitle={"Based on residential properties only"} datasetId="assessment">
      <KeyValueListDisplay
        data={props.data}
        missingDataMsg=""
        fields={[
          {title: "Average Assessment Value Price", value},
        ]}
      />
    </DataCard>
  );
};

export default AssessmentValue;
