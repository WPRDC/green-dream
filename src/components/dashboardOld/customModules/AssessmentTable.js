import React from 'react';


import DataCard from '../DataCard'
import TableDisplay from "../dataDisplays/DataTableDisplay";
import {monify} from "../../../utils/dataUtils";

const tableMapping =
  {
    showHeading: true,
    showLabel: true,
    heading: ['__label__', 'County', 'Local', 'Fair Market'],
    rows: [
      {
        '__label__': 'Building',
        'County': {
          resource: 'assessments', id: 'COUNTYBUILDING', formatter: monify
        },
        'Local': {
          resource: 'assessments', id: 'LOCALBUILDING', formatter: monify
        },
        'Fair Market': {
          resource: 'assessments', id: 'FAIRMARKETBUILDING', formatter: monify
        }
      }, {
        '__label__': 'Land',
        'County': {resource: 'assessments', id: 'COUNTYLAND', formatter: monify},
        'Local': {resource: 'assessments', id: 'LOCALLAND', formatter: monify},
        'Fair Market': {
          resource: 'assessments', id: 'FAIRMARKETLAND', formatter: monify
        }
      }, {
        '__label__': 'Total',
        'County': {resource: 'assessments', id: 'COUNTYTOTAL', formatter: monify},
        'Local': {resource: 'assessments', id: 'LOCALTOTAL', formatter: monify},
        'Fair Market': {
          resource: 'assessments', id: 'FAIRMARKETTOTAL', formatter: monify
        }
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