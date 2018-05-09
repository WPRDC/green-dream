/**
 * Created by sds25 on 9/20/17.
 */

export const StyleMenuEditModes = Object.freeze({
  ADD: "ADD",
  UPDATE: "UPDATE"
});

export const LayerTypes = Object.freeze({
  HIGHLIGHT: "HIGHLIGHT",
  CUSTOM: "CUSTOM"
});

export const GeoTypes = Object.freeze({
  POINT: "POINT",
  POLYGON: "POLYGON"
});

export const PARCEL = {
  idField: "pin",
  tableId: "allegheny_county_parcel_boundaries",
  srid: 4326
};

export const SELECTION_LAYERS = {
  PARCEL: {
    sql: "SELECT * FROM allegheny_county_parcel_boundaries",
    css:
      "#allegheny_county_parcel_boundaries{" +
      "polygon-fill: #FFFFFF;" +
      "polygon-opacity: 0.0;" +
      "line-color: #4d4d4d;" +
      "line-opacity: 0;" +
      "[zoom >= 15] {line-opacity: 1; line-width: .5}" +
      "[zoom >=17] {line-opacity: 1; line-width: 1}}"
  }
};

export const BASEMAPS = {
  voyager: {
    name: "Voyager",
    url:
      "https://cartodb-basemaps-{s}.global.ssl.fastly.net/rastertiles/voyager/{z}/{x}/{y}.png",
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
    avatar: "osm.png"
  },
  osm: {
    name: "OpenStreetMap",
    url: "http://{s}.tile.osm.org/{z}/{x}/{y}.png",
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>',
    avatar: "osm.png"
  },
  positron: {
    name: "Carto Positron",
    url:
      "https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png",
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
    avatar: "osm.png"
  },
  positronDark: {
    name: "Carto Positron Dark",
    url:
      "https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png",
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
    avatar: "osm.png"
  },
  esri: {
    name: "Esri World Street",
    url:
      "https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}",
    attribution:
      "Tiles &copy; Esri &mdash; Source: Esri, DeLorme, NAVTEQ, USGS, Intermap, iPC, NRCAN, Esri Japan, METI, Esri China (Hong Kong), Esri (Thailand), TomTom, 2012",
    avatar: "osm.png"
  }
};

/**
 * Definition of all available data in Carto.  This is currently manually generated. Eventually I'd like to move to
 * automatically generating this using Carto's metadata. Hopefully manually generating more datasets will lead me to
 * understand exactly how I'd like to do it automatically.  Until then, this is likely to change format.
 * @type {...[]}
 */
export const MAP_DATASETS = [
  {
    id: "assessment",
    name: "Assessment",
    datasetUrl: "https://data.wprdc.org/dataset/property-assessments",
    parcelIdField: "parid",
    cartoConnection: {
      account: "wprdc",
      table: "assessments",
      mapId: "4156fe54-fddc-43e6-993a-6ad37626e9e0",
      cartoCssId: "assessments"
    },
    fields: [
      {
        id: "fairmarkettotal",
        name: "Total Assessed Value (Fair Market)",
        info: "",
        type: "numeric",
        subtype: "money",
        range: [null, null],
        valueFunction: "pow",
        base: ".0001"
      },
      {
        id: "fairmarketland",
        name: "Assessed Land Value (Fair Market)",
        info: "",
        type: "numeric",
        subtype: "money",
        range: [null, null],
        valueFunction: "pow",
        base: "0.0001"
      },
      {
        id: "fairmarketbuilding",
        name: "Assessed Building Value (Fair Market)",
        info: "",
        type: "numeric",
        subtype: "money",
        range: [null, null],
        valueFunction: "pow",
        base: "0.1"
      },
      {
        id: "yearblt",
        name: "Year Built",
        info: "some info and stuff2",
        type: "numeric",
        range: [1755, 2017]
      },
      {
        id: "yearsold",
        name: "Year of Last Sale",
        info: "some info and stuff2",
        type: "numeric",
        range: [1794, 2017]
      },
      {
        id: "classdesc",
        name: "Land Use Class",
        info: "some info and stuff2",
        type: "category"
      },
      {
        id: "usedesc",
        name: "Land Use Description",
        info: "some info and stuff2",
        type: "category"
      },
      {
        id: "ownerdesc",
        name: "Owner Type",
        info: "some info and stuff2",
        type: "category"
      },
      {
        id: "taxdesc",
        name: "Tax Status",
        info: "",
        type: "category"
      },
      {
        id: "homesteadflag",
        name: "Homestead Exemption",
        info: "",
        type: "category"
      },
      {
        id: "gradedesc",
        name: "Dwelling Grade",
        info: "",
        type: "category"
      },
      {
        id: "conditiondesc",
        name: "Dwelling Condition",
        info: "",
        type: "category"
      },
      {
        id: "cdudesc",
        name: "CDU Rating",
        info: "",
        type: "category"
      },
      {
        id: "finishedlivingarea",
        name: "Finished Living Area (sqft)",
        info: "",
        type: "numeric",
        range: [null, null]
      }
    ]
  },
  {
    id: "liens",
    name: "Liens",
    parcelIdField: "pin",
    datasetUrl:
      "https://data.wprdc.org/dataset/allegheny-county-tax-liens-filed-and-satisfied",
    cartoConnection: {
      account: "wprdc",
      table: "d1e80180_5b2e_4dab_8ec3_be621628649e",
      mapId: "2ac98314-c5b9-4730-ae79-71c80dbd8790",
      cartoCssId: "liens"
    },
    fields: [
      {
        id: "total_amount",
        name: "Total Amount of Liens ($)",
        info: "some info and stuff",
        type: "numeric",
        subtype: "money",
        range: [null, null]
      },
      {
        id: "number",
        name: "Number of Liens",
        info: "some info and stuff2",
        type: "numeric",
        range: [null, null]
      }
    ]
  },
  {
    id: "sales",
    name: "Property Sales",
    parcelIdField: "PARID",
    datasetUrl: "https://data.wprdc.org/dataset/real-estate-sales",
    cartoConnection: {
      account: "wprdc",
      table: "table_5bbe6c55_bce6_4edb_9d04_68edeb6bf7b1",
      mapId: "21d67014-8660-45d0-83e1-265bfd9130b3",
      cartoCssId: "sales"
    },
    fields: [
      {
        id: "saledate",
        name: "Sale Date",
        info: "Date of sale",
        type: "string"
      },
      {
        id: "price",
        name: "Sale Price",
        info: "How much the property was sold for.",
        type: "numeric",
        range: [null, null]
      },
      {
        id: "saledesc",
        name: "Sale Type",
        info: "Sale type",
        type: "category"
      },
      {
        id: "instrypdesc",
        name: "Instrument Description",
        info: "Instrument Description",
        type: "category"
      }
    ]
  },
  {
    id: "tax_delinquency",
    name: "Property Tax Delinquencies",
    parcelIdField: "pin",
    datasetUrl:
      "https://data.wprdc.org/dataset/city-of-pittsburgh-property-tax-delinquency",
    cartoConnection: {
      account: "wprdc",
      table: "ed0d1550_c300_4114_865c_82dc7c23235b_1",
      mapId: "21d67014-8660-45d0-83e1-265bfd9130b3",
      cartoCssId: "sales"
    },
    fields: [
      {
        id: "billing_city",
        name: "Billing City",
        info: "City where tax bills are sent.",
        type: "category"
      },
      {
        id: "current_delq",
        name: "Current Amount Delinquent",
        info: "Current delinquent tax amount",
        type: "numeric",
        subtype: "money",
        range: [null, null]
      },
      {
        id: "prior_years",
        name: "Years Delinquent",
        info: "Prior delinquent years",
        type: "numeric",
        range: [null, null]
      }
    ]
  },
  {
    id: "foreclosures",
    name: "Foreclosure Filings",
    parcelIdField: "pin",
    datasetUrl:
      "https://data.wprdc.org/dataset/allegheny-county-mortgage-foreclosure-records",
    cartoConnection: {
      account: "wprdc",
      table: "table_859bccfd_0e12_4161_a348_313d734f25fd",
      mapId: "50adf7e4-ca10-4e9a-aed2-4c2cae9ed3a4",
      cartoCssId: "foreclosures"
    },
    fields: [
      {
        id: "filing_date",
        name: "Filing Date",
        info: "Date when foreclosure filing as submitted",
        type: "string"
      },
      {
        id: "case_id",
        name: "Case ID",
        info: "Case ID for foreclosure",
        type: "string"
      },
      {
        id: "docket_type",
        name: "Docket Type",
        info: "Docket type",
        type: "category"
      },
      {
        id: "plaintiff",
        name: "Plaintiff",
        info: "Plaintiff",
        type: "category"
      },
      {
        id: "amount",
        name: "Amount",
        info: "Amount at issue as of last data extraction",
        type: "numeric",
        subtype: "money",
        range: [null, null]
      }
    ]
  },
  {
    id: "pli_violations",
    name: "Building Code Violations",
    parcelIdField: "pin",
    datasetUrl:
      "https://data.wprdc.org/dataset/pittsburgh-pli-violations-report",
    cartoConnection: {
      account: "wprdc",
      table: "table_859bccfd_0e12_4161_a348_313d734f25fd",
      mapId: "50adf7e4-ca10-4e9a-aed2-4c2cae9ed3a4",
      cartoCssId: "foreclosures"
    },
    fields: [
      // {
      //     id: 'case_number',
      //     name: 'Case Number',
      //     info: 'Case Number identifying violation.',
      //     type: 'string',
      // },
      // {
      //     id: 'violation',
      //     name: 'Violation',
      //     info: 'Code violation',
      //     type: 'string',
      // },
      // {
      //     id: 'corrective_action',
      //     name: 'Corrective Action',
      //     info: 'Prescribed corrective action for violation.',
      //     type: 'string',
      // },
      // {
      //     id: 'location',
      //     name: 'Location',
      //     info: 'Location on the property where the violation occurred.',
      //     type: 'string',
      // },
      // {
      //     id: 'inspection_date',
      //     name: 'Inspection date',
      //     info: 'Date of inspection',
      //     type: 'string',
      // },
      // {
      //     id: 'inspection_result',
      //     name: 'Inspection Result',
      //     info: 'Amount at issue as of last data extraction',
      //     type: 'category',
      // },
    ]
  },
  {
    id: "assessment_appeals",
    name: "Property Assessment Appeals",
    parcelIdField: "PARCEL ID",
    datasetUrl:
      "https://data.wprdc.org/dataset/allegheny-county-property-assessment-appeals",
    cartoConnection: {
      account: "wprdc",
      table: "table_859bccfd_0e12_4161_a348_313d734f25fd",
      mapId: "50adf7e4-ca10-4e9a-aed2-4c2cae9ed3a4",
      cartoCssId: "foreclosures"
    },
    fields: []
  }
];

export class DataSource {
  /**
   * Connects to Carto maps' data (currently hardcoded MAP_DATA)
   * @param data - initial set of data
   */
  constructor(data) {
    this.datasets = data;
  }

  /**
   * Get first dataset that matches datasetId.
   * TODO: assert unique ids at onset to prevent this ambiguous 'first' crap.
   * @param {string} datasetId - identifier of dataset (e.g. 'assessments')
   * @return {{}} dataset
   */
  getDataset = datasetId => {
    return this.datasets.filter(dataset => dataset.id === datasetId)[0];
  };

  /**
   * Get field identified by `fieldId` from dataset identified by `datasetId`
   * @param {string} datasetId - identifier of dataset (e.g. 'assessments')
   * @param {string} fieldId - identifier of field (e.g. 'price')
   * @return {{}} field object identified by `fieldId`
   */
  getField = (datasetId, fieldId) => {
    return this.getDataset(datasetId).fields.filter(
      field => field.id === fieldId
    )[0];
  };

  /**
   * Returns all datasets
   * @return {[{}]} all datasets
   */
  getDatasets = () => {
    return this.datasets;
  };

  /**
   * Returns all fields in dataset, if type is provided, this will return all fields filtered by that type
   * @param {string} datasetId - identifier of dataset (e.g. 'assessments')
   * @param {string} type - type of data the field is (e.g. numeric ,category)
   * @return {[]} array of field objects from dataset
   */
  getFields = (datasetId, type) => {
    if (type) {
      return this.getDatasets(datasetId).fields.filter(
        field => field.type === type
      );
    }
    return this.getDataset(datasetId).fields;
  };

  /**
   * Checks whether dataset identified by `datasetId` accommodates a style type labeled `type`
   * (i.e. any of its fields have type === `type`)
   * @param {string} datasetId - identifier of dataset (e.g. 'assessments')
   * @param {string} type - name of style type
   * @return {boolean} True if the dataset does accommodate the `type`
   */
  accommodatesType = (datasetId, type) => {
    for (let field of this.getFields(datasetId)) {
      if (field.type === type) {
        return true;
      }
    }
    return false;
  };
}

export const dataSource = new DataSource(MAP_DATASETS);
