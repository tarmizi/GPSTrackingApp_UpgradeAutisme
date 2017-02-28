Ext.define('MyGPS.view.Config.TrackingItems.TrackingItemsConfig', {

});

//letak dekat SingleTrackingMap class
var _TrackingItemsConfigDeviceID;
var _CountDevice;
var _CurrentImeiNo;
var _TrackID;
function GetCurrentDeviceID() {

    var _value = _TrackingItemsConfigDeviceID;
    //_DataStore_Maintain_GetByMPI.load();
    //var store = _DataStore_User_Login.getAt(0);
    //if (store != null) {
    //    _value = store.get('ID');
    //}
    return _value;
}

function GetCurrentTrackID() {

    var _value = _TrackID;
    //_DataStore_Maintain_GetByMPI.load();
    //var store = _DataStore_User_Login.getAt(0);
    //if (store != null) {
    //    _value = store.get('ID');
    //}
    return _value;
}
function GetCurrentDeviceCount()
{
    var _value = _CountDevice;
    //_DataStore_Maintain_GetByMPI.load();
    //var store = _DataStore_User_Login.getAt(0);
    //if (store != null) {
    //    _value = store.get('ID');
    //}
    return _value;
}


function GetCurrentImeiNo() {
    var _value = _CurrentImeiNo;
    //_DataStore_Maintain_GetByMPI.load();
    //var store = _DataStore_User_Login.getAt(0);
    //if (store != null) {
    //    _value = store.get('ID');
    //}
    return _value;
}