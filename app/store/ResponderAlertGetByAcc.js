

Ext.define('MyGPS.store.ResponderAlertGetByAcc', {
    extend: 'Ext.data.Store',
  //  alias: 'store.ResponderAlertGetByAcc',
    config: {
        model: 'MyGPS.model.ResponderAlertModel',
        autoLoad: false,

        proxy: {

            type: 'ajax',
            url: document.location.protocol + '//' + document.location.host + '/API/ResponderAlert/GetResponderAlertByAccNo',
          
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



var _DataStore_ResponderAlertGetByAcc = Ext.create('Ext.data.Store', {
    model: 'MyGPS.model.AutoFenceTimerModel',
    id: 'ResponderAlertGetByAccID',
    proxy: {
        type: 'ajax',
        //  url:'http://192.168.0.102:9012/GPSUser/GPSUserLog_in',
        url: document.location.protocol + '//' + document.location.host + '/API/ResponderAlert/GetResponderAlertByAccNo',
        actionMethods: {
            read: 'GET'
        },

        reader: {
            type: 'json',
            rootProperty: 'results',
            totalProperty: 'total',
            successProperty: 'success',
            messageProperty: 'message'
        }
    },
    //autoLoad: true
});