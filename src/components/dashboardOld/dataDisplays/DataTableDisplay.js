import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import DataTable from "./DataTable";
import { extractTable } from "../../../utils/dataUtils";

const TableDisplay = props => {
  const { title, note, data, tableInfo } = props;
  const displayData = extractTable(data, tableInfo);

  return (
    <div className="dataModule">
      <Typography type="title">{title}</Typography>
      <Typography type="subheading">{note}</Typography>
      <div>
        <DataTable
          data={displayData}
          hasHeader={tableInfo.showHeading}
          hasLabel={tableInfo.showLabel}
        />
      </div>
    </div>
  );
};

export default TableDisplay;
