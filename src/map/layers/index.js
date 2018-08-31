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
import alleghenyFloodZones from "./alleghenyFloodZones";
import slope25 from "./slope25";
import bikeTrails from "./bikeTrails";
import pittsburgh from "./pittsburgh";
import pghLandslideProne from "./pghLandslideProne"
import alleghenyLandUseAreas from "./alleghenyLandUseAreas"
import brownfields from "./brownfields"
import trwwGreenInfrastructure from "./trwwGreenInfrastucture"
import lotsToLove from './lotsToLove'
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
import municipalParks from "./municipalParks";
import golfCourses from "./golfCourses";
import landTrustProperty from "./landTrustProperty";
import parkNodes from "./parkNodes";
import aggEasement from "./agrEasement";
import sensitiveSlopeAreas from "./sensitiveSlopeAreas";
import shareTheRoad from "./shareTheRoad";
import trails from "./trails";

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



  municipalParks,
  golfCourses,
  landTrustProperty,
  parkNodes,
  aggEasement,
  sensitiveSlopeAreas,
  shareTheRoad,
  trails,



  vacantLots,
  neighborhoods,
  municipalities,
  pghOpenSpaces,
  pwsaGiConcepts,
  alleghenyEnvironmentalJusticeAreas,
  alleghenyLandUseAreas,
  pghGreenways,
  pittsburghParks,
  alleghenyParks,
  //pghFloodZones, // only need allegheny as of now
  alleghenyFloodZones,




  // Base Layers
  pwsaSewershed,
  alleghenyHyrdologyLines,
  alleghenyHyrdologyAreas,
  pghLandslideProne,
  slope25,
  pittsburgh,
  county
];
