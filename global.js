//Avoid pink error tiles
OpenLayers.IMAGE_RELOAD_ATTEMPTS = 20;
//OpenLayers.Util.onImageLoadErrorColor = "transparent";
//-----------------------------------------------------------------------------------------
var date_obs_end = new Date(); //instead get the time connected with the server side file
var date_obs_start = new Date(); 
date_obs_start.setMinutes(date_obs_end.getMinutes() - 30);
//date_obs_start.SubtractMonth(1);
document.cookie ="start="+date_obs_start.toString(); 
document.cookie ="end="+date_obs_end.toString(); 
//-----------------------------------------------------------------------------------------
//existing bug list:
// hover text stays when layer is unchecked.
// text box is too long with some text, make text fit in box that shows up.
var stationName;
var map; //used by marker.js
//-----------------------------------------------------------------------------------------
var station = 1;
var stations = new Array(2);
stations[0] = null;
stations[1] = null;
//-----------------------------------------------------------------------------------------
var temp_platform = "";
var last_platform = "";
var prev_lon   =  0;
var prev_lat   =  0;
//-----------------------------------------------------------------------------------------
var clutteredArray = new Array();
var cleanArray = new Array();
var urlPath = urlPath + "path/";
var graphPng = urlPath + "images/graph.png";
//-----------------------------------------------------------------------------------------
var bbox;
var polyOptions;
var polygonControl;
var boxes;
//-----------------------------------------------------------------------------------------
var d = new Date().getTime();
var RADIUS_OF_EARTH = 6378137;
var MS_PER_MINUTE = 60000;
var MS_PER_SECOND = 1000;
var span = 5600;
//-----------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------
var marker_refresh;

//----------------- Image Markers ------------------------
var image;
var size = new OpenLayers.Size(25,25);
var offset = new OpenLayers.Pixel(-(size.w/2), -size.h);
var icon;
//--------------------------------------------------------
// Array to store observation markers
//--------------------------------------------------------
var mobileArray = new Array();
var asosArray = new Array();
var clarusArray = new Array();
var trailArray = new Array();
//---------------------------------------------------
//Used by auto update feature
//---------------------------------------------------
var interval;
var delay = 60000;
//---------------------------------------------------
var opts = {}
//---------------------------------------------------
var mySpinner = new Spinner(opts);
var myTarget;
