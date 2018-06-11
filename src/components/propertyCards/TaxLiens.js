import React, { Component } from "react";

import KeyValueListDisplay from "../dashboardOld/dataDisplays/KeyValueListDisplay";
import { monify } from "../../utils/dataUtils";
import DataCard from "../dashboardOld/DataCard";

const TaxLiens = props => {
  return (
    <DataCard
      title="Tax Liens Summary"
      subtitle="The information provided here is merely an estimate. Please refer to Allegheny County's Department of Court Records for official tax lien information."
      datasetId="liens"
    >
      <KeyValueListDisplay
        data={props.data}
        title="Tax Liens Summary"
        note=""
        fields={[
          { title: "Number of Liens", field: "number", resource: "tax_liens" },
          {
            title: "Total Amount",
            field: "total_amount",
            resource: "tax_liens",
            formatter: monify
          }
        ]}
        missingDataMsg="No tax liens were found for this property."
      />
    </DataCard>
  );
};

export default TaxLiens;
