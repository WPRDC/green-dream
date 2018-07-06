import React from "react";
import { withStyles } from "@material-ui/core/styles";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

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
  return (
    <Table className={classes.table}>
      <TableBody>
        {fields.map((field, i) => {
          const { title, value, moe, proportion, proportion_moe } = records[field];
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
