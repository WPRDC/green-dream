import React from "react";
import { withStyles } from "material-ui/styles";
import { hasValues } from "../../../utils/dataUtils";

import Table, {
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from "material-ui/Table";

const styles = theme => ({
  table: {
    width: "100%",
    marginTop: 0,
    overflowX: "scroll"
  },
  moe: {
    color: "gray"
  }
});

const CensusTable = props => {
  const { data, classes } = props;
  const { fields, records, denominator } = data;
  console.log(fields);
  console.log(records);
  console.log(denominator);
  return (
    <Table className={classes.table}>
      <TableBody>
        {fields.map((field, i) => {
          const { title, value, moe, proportion, proportion_moe } = records[
            field
          ];
          return (
            <TableRow key={i.toString()}>
              <TableCell padding="none">
                {title}
              </TableCell>
              <TableCell padding="none" numeric>
                <span className={classes.proportion}>
                  <span>{(proportion * 100).toFixed(0)}%</span>
                  <span className={classes.moe}> &plusmn;{(proportion_moe* 100).toFixed(0)}%</span>
                </span>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default withStyles(styles)(CensusTable);
