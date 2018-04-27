import React from 'react';


import DataCard from '../DataCard'
import TableDisplay from "../dataDisplays/DataTableDisplay";
import {monify, shortenNumber} from "../../../utils/dataUtils";

const formatter = (n) => `$${shortenNumber(n)}`

const tableMapping =
  {
    showHeading: true,
    showLabel: true,
    heading: ['__label__', 'County', 'Local', 'Fair Market'],
    rows: [
      {
        '__label__': 'Building',
        'County': {resource: 'assessments', id: 'COUNTYBUILDING', formatter},
        'Local': {resource: 'assessments', id: 'LOCALBUILDING', formatter},
        'Fair Market': {resource: 'assessments', id: 'FAIRMARKETBUILDING', formatter}
      }, {
        '__label__': 'Land',
        'County': {resource: 'assessments', id: 'COUNTYLAND', formatter},
        'Local': {resource: 'assessments', id: 'LOCALLAND', formatter},
        'Fair Market': {resource: 'assessments', id: 'FAIRMARKETLAND', formatter}
      }, {
        '__label__': 'Total',
        'County': {resource: 'assessments', id: 'COUNTYTOTAL', formatter},
        'Local': {resource: 'assessments', id: 'LOCALTOTAL', formatter},
        'Fair Market': {resource: 'assessments', id: 'FAIRMARKETTOTAL', formatter}
      },
    ]
  };

const AssessmentTable = props => {
  return (
    <DataCard title="Assessment Values"
              datasetId='assessment'
    >
      <TableDisplay data={props.data}
                    tableInfo={tableMapping}
      />
    </DataCard>
  );
};

export default AssessmentTable