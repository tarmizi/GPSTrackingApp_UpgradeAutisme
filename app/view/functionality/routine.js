Ext.define('MyGPS.view.functionality.routine', {

});

var clockmapsendcommands;
var clockmultiple;
var panoramaMap;
var panoOptions;
var panoramastreetMap;
var hasrunning;
var viewmap;
var pointXYn;
var holderID;
var xstreetview;
var ystreetview;
var maxspeeding;
var currspeeding;



var panoOptions;
var btnSingleSignalCount;
var isSingleTrackingRun;
var showinfostatus;
var storeindex;
var IMEI_no;
var Speed;
var GPSSimNumber;

var BatteryReading;
var TrackItem;
var TrackItemType;
var GPSModel;
var AccountNo;
var DateDT;



var Infotrackid;
var Infotracktype;
var Infospeed;
var docStore;

var geoX;
var geoY;

var trackingrun;
var ImeiNo;
var mapmap;
var kirarow;
var onoffgeolocation;
var lastMarker;
//var multimarker;
//var Locatemarker;
var latlngbounds;
var holdPosisi;
var previousPosisi;
var locateholdPosisi;
var locatepreviousPosisi;
var panMap;
var showSummar;
var hideSummar;
var countresult;
var id;
var markerss = {};
var boundreboundlatlong;
//var multiplemarkerloc=[]; // creating array
var multiplemarkerloc = new Array(); // creating array
//var ip = 'http://localhost/';
var ip = document.location.protocol + '//' + document.location.host + '/';
//var ip = 'http://192.168.0.105/';
//var ip = 'http://20.9.11.190/';
//var ip = 'http://192.168.0.101/7.gif';
//var ip = 'http://20.9.11.194/';
var co;
var lastpoint = 0;

