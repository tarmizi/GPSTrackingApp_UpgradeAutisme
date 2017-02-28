Ext.define('MyGPS.store.AutoFenceTimer.AutoFenceTimerGetByAccNoDeviceHour', {
    extend: 'Ext.data.Store',
    //  alias: 'store.ResponderAlertGetByAcc',
    config: {
        model: 'MyGPS.model.AutoFenceTimerModel',
        autoLoad: false,

        proxy: {

            type: 'ajax',
            url: document.location.protocol + '//' + document.location.host + '/API/AutoFenceTimer/GetAutoFenceTimerGetByAccNoDeviceIDHour',

            reader: {
                type: 'json',
                rootProperty: 'results',
                totalProperty: 'total',
                successProperty: 'success',
                messageProperty: 'message'
            },



        }


    }
});







