import React from "react";
import Typography from "material-ui/Typography";
import SingleItemDisplay from "../dashboardOld/dataDisplays/SingleItemDisplay";

import DataCard from "../dashboardOld/DataCard";

import { dataSource } from "../../utils/mapDefaults";
import { nl2br } from "../../utils/dataUtils";

const style = {
  div: {
    margin: "6px 0",
    fontSize: "13px !important"
  }
};

const sqlBase = address => () =>
  `SELECT *
    FROM (
    SELECT ds.cartodb_id, pb.the_geom, pb.the_geom_webmercator,
           (ds.changenoticeaddress1 || ds.changenoticeaddress2 || ds.changenoticeaddress3 || ds.changenoticeaddress4
      ) as owner_address, ds.parid
    FROM wprdc.allegheny_county_parcel_boundaries pb
    JOIN "wprdc"."assessments" ds ON pb.pin = ds.parid) as subquery
    WHERE owner_address='${address}'`;

const cssBase = address => color =>
  `#owner{ polygon-opacity: 0.0; line-color: #000; line-opacity: 0; line-width: 1; [ owner_address = "${address}" ]{ polygon-opacity: 1.0; polygon-fill: ${color};}}`;

const OwnerAddress = props => {
  const { data } = props;
  // Parse full address from data
  const assessmentData = data.assessments[0];
  const ownerName = data.owner;
  const {
    CHANGENOTICEADDRESS1,
    CHANGENOTICEADDRESS2,
    CHANGENOTICEADDRESS3,
    CHANGENOTICEADDRESS4
  } = assessmentData;
  const address =
    CHANGENOTICEADDRESS1 +
    CHANGENOTICEADDRESS2 +
    CHANGENOTICEADDRESS3 +
    CHANGENOTICEADDRESS4;

  // Format the address into several lines.  if a line doesn't exist (filter
  const addressString = [
    CHANGENOTICEADDRESS1,
    CHANGENOTICEADDRESS2,
    CHANGENOTICEADDRESS3 + CHANGENOTICEADDRESS4
  ]
    .filter(line => line.replace(/\s+/g, ""))
    .join("\n");

  // Prepare data for highlight menu
  const dataset = dataSource.getDataset("assessment");
  const makeSql = sqlBase(address);
  const makeCss = cssBase(address);

  return (
    <DataCard
      title="Property Owner"
      datasetId="assessment"
      map={{
        dataset,
        items: [
          {
            field: "Owner Address",
            value: addressString,
            formatter: nl2br,
            makeSql,
            makeCss
          }
        ]
      }}
    >
      <SingleItemDisplay
        data={data}
        formatter={data => {
          return (
            <div style={style.div}>
              <Typography type="body2">{ownerName}</Typography>
              <br />
              <Typography type="body1">{CHANGENOTICEADDRESS1}</Typography>
              <Typography type="body1">{CHANGENOTICEADDRESS2}</Typography>
              <Typography type="body1">
                {CHANGENOTICEADDRESS3} {CHANGENOTICEADDRESS4}
              </Typography>
            </div>
          );
        }}
      />
    </DataCard>
  );
};

export default OwnerAddress;
