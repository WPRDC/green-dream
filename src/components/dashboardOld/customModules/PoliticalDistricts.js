import React, { Component } from "react";

import KeyValueListDisplay from "../dataDisplays/KeyValueListDisplay";
import DataCard from "../DataCard";

const fieldMapping = [
  {
    resource: "centroids_and_geo_info",
    field: "geo_name_SenatePA",
    title: "PA Senate District",
    formatter: input => {
      return input.split(" ").pop();
    }
  },
  {
    resource: "centroids_and_geo_info",
    field: "geo_name_HousePA",
    title: "PA House District",
    formatter: input => {
      return input.split(" ").pop();
    }
  },
  {
    resource: "centroids_and_geo_info",
    field: "geo_name_countycouncil",
    title: "Couty Council",
    formatter: input => {
      return input.split(" ").pop();
    }
  },
  {
    resource: "centroids_and_geo_info",
    field: "Pgh_CityCouncil2012",
    title: "City Council"
  },
  {
    resource: "centroids_and_geo_info",
    field: "geo_name_schooldist",
    title: "School District"
  }
];

const PoliticalDistricts = props => {
  return (
    <DataCard title="PoliticalDistricts">
      <KeyValueListDisplay data={props.data} fields={fieldMapping} />
    </DataCard>
  );
};

export default PoliticalDistricts;
