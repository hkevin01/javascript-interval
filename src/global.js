// Modernized global variables and configuration
// Avoid pink error tiles
// OpenLayers.IMAGE_RELOAD_ATTEMPTS = 20;

/**
 * Project-wide configuration and state
 */
export const config = {
  imageReloadAttempts: 20,
  radiusOfEarth: 6378137,
  msPerMinute: 60000,
  msPerSecond: 1000,
  span: 5600,
};

export let dateObsEnd = new Date();
export let dateObsStart = new Date(dateObsEnd.getTime() - 30 * config.msPerMinute);

// Example: set cookies for start/end
export function setObservationCookies() {
  document.cookie = `start=${dateObsStart.toString()}`;
  document.cookie = `end=${dateObsEnd.toString()}`;
}

// Other global state (refactored for modularity)
export let stationName = '';
export let map = null;
export let station = 1;
export let stations = [null, null];
export let tempPlatform = '';
export let lastPlatform = '';
export let prevLon = 0;
export let prevLat = 0;
export let clutteredArray = [];
export let cleanArray = [];
export let urlPath = 'path/';
export let graphPng = `${urlPath}images/graph.png`;
export let bbox = null;
export let polyOptions = null;
export let polygonControl = null;
export let boxes = null;
export let markerRefresh = null;
export let image = null;
export let size = { w: 25, h: 25 };
export let offset = { x: -(25 / 2), y: -25 };
