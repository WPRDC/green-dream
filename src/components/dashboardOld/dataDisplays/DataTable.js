import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { hasValues } from "../../../utils/dataUtils";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const styles = theme => ({
  table: {
    width: "100%",
    marginTop: 0,
    overflowX: "scroll"
  }
});

const DataTable = props => {
  const rows = props.data;
  let header, dataRows;
  if (props.hasHeader) {
    header = rows[0];
    dataRows = rows.slice(1);
  } else {
    dataRows = rows;
  }

  return (
    <Table className={props.classes.table}>
      {header && (
        <TableHead>
          <TableRow>
            {header.map((h, i) => (
              <TableCell
                padding="none"
                numeric={Boolean(i)}
                key={i.toString()}
                className={props.classes.cell}
              >
                {h}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
      )}
      <TableBody>
        {dataRows.map((row, i) => {
          if (hasValues(row)) {
            return (
              <TableRow key={i.toString()}>
                {row.map((cell, j) => (
                  <TableCell
                    padding="none"
                    numeric={Boolean(j)}
                    key={j.toString()}
                    className={props.classes.cell}
                  >
                    {cell}
                  </TableCell>
                ))}
              </TableRow>
            );
          } else {
            return null;
          }
        })}
      </TableBody>
    </Table>
  );
};

export default withStyles(styles)(DataTable);
