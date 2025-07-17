// Modernized global variables and configuration
// Avoid pink error tiles
// OpenLayers.IMAGE_RELOAD_ATTEMPTS = 20;

/**
 * Project-wide configuration and state
 * @type {{imageReloadAttempts: number, radiusOfEarth: number, msPerMinute: number, msPerSecond: number, span: number}}
 */
export const config = {
  imageReloadAttempts: 20,
  radiusOfEarth: 6378137,
  msPerMinute: 60000,
  msPerSecond: 1000,
  span: 5600,
};

/** @type {Date} */
export let dateObsEnd = new Date();
/** @type {Date} */
export let dateObsStart = new Date(dateObsEnd.getTime() - 30 * config.msPerMinute);

/**
 * Set cookies for observation start/end times
 */
export function setObservationCookies() {
  document.cookie = `start=${dateObsStart.toString()}`;
  document.cookie = `end=${dateObsEnd.toString()}`;
}

/** @type {string} */
export let stationName = '';
/** @type {?any} */
export let map = null;
/** @type {number} */
export let station = 1;
/** @type {Array<null>} */
export let stations = [null, null];
/** @type {string} */
export let tempPlatform = '';
/** @type {string} */
export let lastPlatform = '';
/** @type {number} */
export let prevLon = 0;
/** @type {number} */
export let prevLat = 0;
/** @type {Array<any>} */
export let clutteredArray = [];
/** @type {Array<any>} */
export let cleanArray = [];
/** @type {string} */
export let urlPath = 'path/';
/** @type {string} */
export let graphPng = `${urlPath}images/graph.png`;
