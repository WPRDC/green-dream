import parcels from "./parcels";
import transit from "./transit";
import municipalities from "./municipalities";
import neighborhoods from "./neighborhoods";
import county from "./county";
import growPghGardens from "./growPghGardens";
import pittsburghParks from "./pittsburghParks";
import alleghenyParks from "./alleghenyParks";
import citySteps from "./citySteps";
import pghGreenways from "./pghGreenways";
import pghFloodZones from "./pghFloodZones";
import pghSlope25 from "./pghSlope25";
import bikeTrails from "./bikeTrails";
import pittsburgh from "./pittsburgh";
import pghLandslideProne from "./pghLandslideProne"
import alleghenyLandUseAreas from "./alleghenyLandUseAreas"
import brownfields from "./brownfields"
import aerial from "./aerial"
import trwwGreenInfrastructure from "./trwwGreenInfrastucture"
import lotsToLove from './lotsToLove'
import greenprint from './greenprint'
import alleghenyEnvironmentalJusticeAreas from './alleghenyEnvironmentalJusticeAreas'
import landslides from "./landslides";


export const defaultLayers = [
  growPghGardens,
  brownfields,
  landslides,
  trwwGreenInfrastructure,
  lotsToLove,
  //aerial,
  parcels,
  neighborhoods,
  citySteps,
  bikeTrails,
  municipalities,
  //greenprint,
  alleghenyEnvironmentalJusticeAreas,
  alleghenyLandUseAreas,
  pghGreenways,
  pittsburghParks,
  alleghenyParks,
  pghFloodZones,
  pghLandslideProne,
  pghSlope25,
  pittsburgh,
  county
];
