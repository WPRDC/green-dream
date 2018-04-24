import parcels from './parcels'
import transit from './transit'
import municipalities from './municipalities'
import neighborhoods from './neighborhoods'
import county from './county'
import growPghGardens from './growPghGardens'
import pittsburghParks from "./pittsburghParks";
import alleghenyParks from "./alleghenyParks";
import citySteps from "./citySteps";
import pghGreenways from "./pghGreenways";
import pghFloodZones from "./pghFloodZones";
import pghSlope25 from "./pghSlope25";
import bikeTrails from "./bikeTrails";

export const defaultLayers = [
  parcels,
  citySteps,
  bikeTrails,

  municipalities,
  neighborhoods,
  growPghGardens,
  pghGreenways,
  pittsburghParks,
  alleghenyParks,
  pghFloodZones,
  pghSlope25,
  county,

]
