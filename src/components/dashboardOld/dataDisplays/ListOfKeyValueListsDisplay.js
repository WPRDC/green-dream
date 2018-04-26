import React, {Component} from 'react';

import ExpansionPanel, {
  ExpansionPanelSummary,
  ExpansionPanelDetails,
} from 'material-ui/ExpansionPanel';

import Typography from 'material-ui/Typography';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';

import KeyValueList from './KeyValueList';
import MissingDataNote from './MissingDataNote';
import {extractKeyValueSubset, hasValues} from "../../../utils/dataUtils";

const ListOfKeyValueListsDisplay = props => {
  const {data, resource, fields, missingDataMsg, allowNulls, titleField, keepTitleField = false} = props;

  const numberOfItems = data[resource].length;

  const displayData = [];

  for (let i = 0; i < numberOfItems; i++) {
    displayData.push(extractKeyValueSubset(data, fields, i))
  }


  return (
    <div>
      {displayData.length
        ? displayData.map((displayDatum, i) => {
          if (allowNulls || hasValues(displayDatum))
            return (
              <ExpansionPanel key={i.toString()}>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                  <Typography
                    type='subheading'>{titleField ? titleField + ': ' + displayDatum[titleField] : "Record " + i}</Typography>
                  {keepTitleField ? {} : delete displayDatum[titleField]}
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>

                  <KeyValueList data={displayDatum}/>
                </ExpansionPanelDetails>
              </ExpansionPanel>
            )
          else
            return null;
        })
        : <MissingDataNote>{missingDataMsg}</MissingDataNote>
      }
    </div>
  );
};

export default ListOfKeyValueListsDisplay