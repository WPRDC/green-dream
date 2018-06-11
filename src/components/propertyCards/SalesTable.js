import React from "react";

import DataCard from "../dashboardOld/DataCard";
import TableDisplay from "../dashboardOld/dataDisplays/DataTableDisplay";
import { monify } from "../../utils/dataUtils";

const SalesTable = props => {
  return (
    <DataCard title="Previous Sales" datasetId="sales">
      <TableDisplay
        data={props.data}
        tableInfo={{
          showHeading: true,
          showLabel: false,
          heading: ["Sale Date", "Price"],
          rows: [
            {
              "Sale Date": { resource: "assessments", id: "PREVSALEDATE2" },
              Price: {
                resource: "assessments",
                id: "PREVSALEPRICE2",
                formatter: number => {
                  return monify(number, 0);
                }
              }
            },
            {
              "Sale Date": { resource: "assessments", id: "PREVSALEDATE" },
              Price: {
                resource: "assessments",
                id: "PREVSALEPRICE",
                formatter: number => {
                  return monify(number, 0);
                }
              }
            },
            {
              "Sale Date": { resource: "assessments", id: "SALEDATE" },
              Price: {
                resource: "assessments",
                id: "SALEPRICE",
                formatter: number => {
                  return monify(number, 0);
                }
              }
            }
          ]
        }}
      />
    </DataCard>
  );
};

export default SalesTable;
