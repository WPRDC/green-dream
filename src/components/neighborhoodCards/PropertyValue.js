import React, {Component} from "react";

import KeyValueListDisplay from "../dashboardOld/dataDisplays/KeyValueListDisplay";
import DataCard from "../dashboardOld/DataCard";
import {monify} from "../../utils/dataUtils";

const PropertyValue = props => {
  const {data} = props;
  const value = monify(data.wprdcData.averageSalePrice.value);
  return (
    <DataCard title="Real Estate Sale Information" subtitle="Valid Sales Only, 2012-Present" datasetId="sales">
      <KeyValueListDisplay
        data={props.data}
        missingDataMsg=""
        fields={[
          {title: "Average Sale Price", value},
        ]}
      />
    </DataCard>
  );
};

export default PropertyValue;
