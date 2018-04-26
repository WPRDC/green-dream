import React, {Component} from 'react'

import KeyValueListDisplay from "../dataDisplays/KeyValueListDisplay";
import {monify} from "../../../utils/dataUtils";
import DataCard from '../DataCard'

const Foreclosure = props => {
  return (
    <DataCard title="Foreclosure Filings"
              subtitle="The data presented here is in beta form because only the most recent filing type is included as of September 2017. Monthly updates are forthcoming."
              datasetId="foreclosures"
    >
      <KeyValueListDisplay
        data={props.data}
        title="Foreclosure Filing"
        note=""
        fields={[
          {
            title: 'Case ID',
            field: 'case_id',
            resource: 'foreclosures'
          },
          {
            title: 'Docket Type',
            field: 'docket_type',
            resource: 'foreclosures'
          },
          {
            title: 'Plaintiff',
            field: 'plaintiff',
            resource: 'foreclosures'
          },
          {
            title: 'Filing Date',
            field: 'filing_date',
            resource: 'foreclosures'
          },
          {
            title: 'Amount',
            field: 'amount',
            resource: 'foreclosures',
            formatter: monify
          }
        ]}
        missingDataMsg="No foreclosure filings were found for this property."
      />
    </DataCard>
  );
};

export default Foreclosure