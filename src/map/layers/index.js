import parcels from "./parcels";
import patRoutes from "./patRoutes";
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
import pghOpenSpaces from './pghOpenSpaces'
import vacantLots from'./vacantLots'
import alleghenyHyrdologyAreas from './alleghenyHydrologyAreas'
import alleghenyHyrdologyLines from './alleghenyHydrologyLines'
import patStops from "./patStops";
import bikePghBikeLanes from "./bikePghBikeLanes";
import healthyRideStations from "./healthyRideStations";
import pwsaSewershed from "./pwsaSewershed";
import pwsaGiConcepts from "./pwsaGiConcepts";

export const defaultLayers = [

  // Points
  growPghGardens,
  brownfields,
  landslides,
  trwwGreenInfrastructure,
  lotsToLove,
  healthyRideStations,
  patStops,

  // Lines
  patRoutes,
  citySteps,
  bikeTrails,
  bikePghBikeLanes,

  // Polygons
  parcels,
  vacantLots,
  neighborhoods,
  municipalities,
  pghOpenSpaces,
  alleghenyEnvironmentalJusticeAreas,
  alleghenyLandUseAreas,
  pghGreenways,
  pittsburghParks,
  alleghenyParks,
  pghFloodZones,
  pwsaGiConcepts,

  // Base Layers
  pwsaSewershed,
  alleghenyHyrdologyLines,
  alleghenyHyrdologyAreas,
  pghLandslideProne,
  pghSlope25,
  pittsburgh,
  county
];
