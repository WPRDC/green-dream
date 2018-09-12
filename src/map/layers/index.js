import parcels from "./base/parcels";
import patRoutes from "./transportation/patRoutes";
import municipalities from "./base/municipalities";
import neighborhoods from "./base/neighborhoods";
import county from "./base/county";
import growPghGardens from "./green-features/growPghGardens";
import pittsburghParks from "./green-features/pittsburghParks";
import alleghenyParks from "./green-features/alleghenyParks";
import citySteps from "./transportation/citySteps";
import pghGreenways from "./green-features/pghGreenways";
import alleghenyFloodZones from "./natural-features/alleghenyFloodZones";
import slope25 from "./natural-features/slope25";
import bikeTrails from "./transportation/bikeTrails";
import pittsburgh from "./base/pittsburgh";
import pghLandslideProne from "./natural-features/pghLandslideProne"
import alleghenyLandUseAreas from "./green-features/alleghenyLandUseAreas"
import brownfields from "./other/brownfields"
import trwwGreenInfrastructure from "./green-features/trwwGreenInfrastucture"
import lotsToLove from './green-features/lotsToLove'
import alleghenyEnvironmentalJusticeAreas from './other/alleghenyEnvironmentalJusticeAreas'
import landslides from "./natural-features/landslides";
import pghOpenSpaces from './green-features/pghOpenSpaces'
import vacantLots from './other/vacantLots'
import alleghenyHyrdologyAreas from './natural-features/alleghenyHydrologyAreas'
import alleghenyHyrdologyLines from './natural-features/alleghenyHydrologyLines'
import patStops from "./transportation/patStops";
import bikePghBikeLanes from "./transportation/bikePghBikeLanes";
import healthyRideStations from "./transportation/healthyRideStations";
import pwsaSewershed from "./base/pwsaSewershed";
import pwsaGiConcepts from "./green-features/pwsaGiConcepts";
import municipalParks from "./green-features/municipalParks";
import golfCourses from "./green-features/golfCourses";
import landTrustProperty from "./green-features/landTrustProperty";
import parkNodes from "./green-features/parkNodes";
import agrEasement from "./green-features/agrEasement";
import sensitiveSlopeAreas from "./natural-features/sensitiveSlopeAreas";
import shareTheRoad from "./transportation/shareTheRoad";
import trails from "./green-features/trails";
import greenprint from "./green-features/greenprint";

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

  golfCourses,
  parkNodes,
  municipalParks,
  pittsburghParks,
  alleghenyParks,

  greenprint,
  landTrustProperty,
  agrEasement,
  sensitiveSlopeAreas,
  // shareTheRoad,  only one feature, pretty much impossible to see unless you know where it is
  trails,



  vacantLots,
  municipalities,
  neighborhoods,
  pghOpenSpaces,
  pwsaGiConcepts,
  alleghenyEnvironmentalJusticeAreas,
  alleghenyLandUseAreas,
  pghGreenways,

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
