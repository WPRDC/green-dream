import React, {Component} from 'react'

import KeyValueListDisplay from "../dataDisplays/KeyValueListDisplay";
import {monify} from "../../../utils/dataUtils";
import DataCard from '../DataCard'

const TaxDelinquency = props => {
  return (
    <DataCard title="Property Tax Delinquency"
              subtitle="Currently only for City of Pittsburgh properties."
              datasetId="tax_delinquency"
    >
      <KeyValueListDisplay
        data={props.data}
        title="Tax Liens Summary"
        note=""
        fields={[
          {
            title: 'Current Delinquency',
            field: 'current_delq',
            resource: 'pgh_tax_delinquency',
            formatter: monify
          },
          {
            title: 'Years Delinquent',
            field: 'prior_years',
            resource: 'pgh_tax_delinquency',
          }
        ]}
        missingDataMsg="No tax delinquencies were found for this property."
      />

    </DataCard>
  );
}

export default TaxDelinquency
