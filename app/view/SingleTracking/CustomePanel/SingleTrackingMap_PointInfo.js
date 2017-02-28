var _singleTrackingMap_PointInfo;

Ext.define('MyGPS.view.SingleTracking.CustomePanel.SingleTrackingMap_PointInfo', {

});


function SingleTrackingMapPointIfo() {



    _singleTrackingMap_PointInfo =
        Ext.create('Ext.Panel', {
            // draggable: true,
            centered: true,
            //  scrollable: false,
            //right: 0,

            //top: 50,
            //bottom: 50,
            //left: 0,

            height: 370,
            width: 276,
            // width: '70%',
            // height: '50%',
            modal: true,
            zIndex: 20,
            //  style: "background-color: #57A0DC; color:white;",
           // hideOnMaskTap: true,
            showAnimation: {
                type: 'popIn',
                duration: 250,
                easing: 'ease-out'
            },
            hideAnimation: {
                type: 'popOut',
                duration: 250,
              //  easing: 'ease-out'
            },

            items: [



                {
                    // xtype: 'carousel',
                    xtype: 'panel',
                    height: 330,

                    // height: 148,
                    items: [


                        {

                            xtype: 'container',
                          
                            layout: {

                                type: 'vbox',
                                style: "background-color: #57A0DC; color:white;",

                            },
                            // style: 'background-color: transparent;',
                            items: [

                                 

  {
      xtype: 'button',
      margin: '-30 0 0 230',
      id: 'SingleTrackingMap_Close',
      //ui: 'action',
      //text: "Add New Virtual Boundry Setting",
      height: 62,
      width: 62,

      html: '<div ><img src="resources/icons/ClosePointInfo.png" width="52" height="52" alt="Company Name"></div>',
      ui: 'plain',
      handler: function () {
          SingleTrackingMap_PointInfoHide();
          var IMEI_no = GetCurrentDeviceID();
          //   loadmarkerSingleTrackingMap(IMEI_no);
          startsingleTrackingMaps('start', IMEI_no);
     
      }

  },

                                        {
                                            margin: '-35 0 0 0',
                                            id: 'LiveTrackingInfoPanelpanelHeader',
                                             // <tr> <td colspan="2" font-weight: bold; style="background-color: #57A0DC;  font-size: 15px; color: #fff; text-align: center;">Status:Static (11h20m24s)</td> </tr>
                                            html: '<table width=100%><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 10px; color: #fff; text-align: center; border: 1px solid #fff;"><img src="/resources/icons/loadingImage4.png" style="width:242px;height:223px;"></td> </tr></table>',
                                           // html: '<table width=100%><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 10px; color: #fff; text-align: center; border: 1px solid #fff;">LOADING IMAGE.......</td> </tr></table>',


                                        },

                                        





                                              {

                                                  xtype: 'carousel',
                                                  height: 100,
                                                  // top:-200,
                                                  // height: 148,
                                                  items: [
                                                      {
                                                          id: 'LiveTrackingInfoPanel1',
                                                          html: '<table class="tabledetail"><tr> <td class="tde">PROTON PERSONA</td> <td class="tde">WTP2681</td></tr> <tr > <td class="tdk">Track Item</td> <td class="tdk">Track ID</td></tr><tr > <td class="tde">OFF</td> <td class="tde">AUTHISME</td></tr> <tr > <td class="tdk">Age</td> <td class="tdk">Risk</td></tr><tr > <td class="tde">{Speed}</td> <td class="tde">160km/h</td></tr> <tr > <td class="tdk">Current Speed</td> <td class="tdk">Max Speed</td></tr><tr > <td class="tde">{BatteryReading}</td> <td class="tde">BATTERY</td></tr> <tr > <td class="tdk">Batery Status</td> <td class="tdk">Power Mode</td></tr><tr > <td class="tde">{GPSModel}</td> <td class="tde">Standard</td></tr> <tr > <td class="tdk">GPS Tracker Model</td> <td class="tdk">Tracking Mode</td></tr><tr > <td class="tde">{GPSSimNumber}</td> <td class="tde">68 meter</td></tr> <tr > <td class="tdk">Sim Number</td> <td class="tdk">Max Elevation</td></tr></table>',
                                                          cls: 'card1'
                                                      },
                                                       //{
                                                          // id: 'GeofenceDetailpanel2',
                                                         //  html: '<table class="tabledetail"><tr> <td class="tde">X=1.02154554<br>Y:1.0255881</td> <td class="tde">JALAN SRI PERMAISURI 1 ,BANDAR SRI PERMAISURI,56000 KUALA LUMPUR</td></tr> <tr > <td class="tdk">Location</td> <td class="tdk">Geocode Adress</td></tr> <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"></td> <td class="tdk"></td></tr><tr > <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"></td> <td class="tdk"></td></tr><tr > <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"></td> <td class="tdk"></td></tr><tr > <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"</td> <td class="tdk"></td></tr></table>',
                                                          // cls: 'card2'
                                                       //},
                                                      {
                                                          id: 'LiveTrackingInfoPanel3',
                                                          html: '<table class="tabledetail"><tr> <td class="tde">TARMIZI BIN RAHIM (FATHER)</td> <td class="tde">AZULIANA BT MOHAMMAD (MOTHER)</td></tr> <tr > <td class="tdk">Responder 1</td> <td class="tdk">Responder 2</td></tr> <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"></td> <td class="tdk"></td></tr><tr > <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"></td> <td class="tdk"></td></tr><tr > <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"></td> <td class="tdk"></td></tr><tr > <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"</td> <td class="tdk"></td></tr></table>',
                                                          cls: 'card2'
                                                      },
                                                      {
                                                          id: 'LiveTrackingInfoPanel4',
                                                          html: '<table class="tabledetail"><tr> <td class="tde">MOHD HELMI BIN RAHIM(RELATIVE)</td> <td class="tde">ZULKIFLI BIN RAHIM (RELATIVE)</td></tr> <tr > <td class="tdk">Responder 3</td> <td class="tdk">Responder 4</td></tr> <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"></td> <td class="tdk"></td></tr><tr > <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"></td> <td class="tdk"></td></tr><tr > <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"></td> <td class="tdk"></td></tr><tr > <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"</td> <td class="tdk"></td></tr></table>',
                                                          //html: '<table class="tabledetail"><tr> <td class="tde">MOHD HELMI BIN RAHIM(RELATIVE)</td> <td class="tde">ZULKIFLI BIN RAHIM (RELATIVE)</td></tr> <tr > <td class="tdk">Responder3</td> <td class="tdk">Responder4</td></tr><tr ><td class="tde">{Speed}</td> <td class="tde">160km/h</td></tr> <tr > <td class="tdk">Current Speed</td> <td class="tdk">Max Speed</td></tr><tr > <td class="tde">{BatteryReading}</td> <td class="tde">BATTERY</td></tr> <tr > <td class="tdk">Batery Status</td> <td class="tdk">Power Mode</td></tr><tr > <td class="tde">{GPSModel}</td> <td class="tde">Standard</td></tr> <tr > <td class="tdk">GPS Tracker Model</td> <td class="tdk">Tracking Mode</td></tr><tr > <td class="tde">{GPSSimNumber}</td> <td class="tde">68 meter</td></tr> <tr > <td class="tdk">Sim Number</td> <td class="tdk">Max Elevation</td></tr></table>',
                                                          cls: 'card3'
                                                      },
                                                      {
                                                          id: 'LiveTrackingInfoPanel5',
                                                          html: '<table class="tabledetail"><tr> <td class="tde">10.5KM</td> <td class="tde">20-10-2015 09:35AM</td></tr> <tr > <td class="tdk">Fence Length</td> <td class="tdk">Fence Date</td></tr> <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"></td> <td class="tdk"></td></tr><tr > <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"></td> <td class="tdk"></td></tr><tr > <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"></td> <td class="tdk"></td></tr><tr > <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"</td> <td class="tdk"></td></tr></table>',
                                                          //html: '<table class="tabledetail"><tr> <td class="tde">MOHD HELMI BIN RAHIM(RELATIVE)</td> <td class="tde">ZULKIFLI BIN RAHIM (RELATIVE)</td></tr> <tr > <td class="tdk">Responder3</td> <td class="tdk">Responder4</td></tr><tr ><td class="tde">{Speed}</td> <td class="tde">160km/h</td></tr> <tr > <td class="tdk">Current Speed</td> <td class="tdk">Max Speed</td></tr><tr > <td class="tde">{BatteryReading}</td> <td class="tde">BATTERY</td></tr> <tr > <td class="tdk">Batery Status</td> <td class="tdk">Power Mode</td></tr><tr > <td class="tde">{GPSModel}</td> <td class="tde">Standard</td></tr> <tr > <td class="tdk">GPS Tracker Model</td> <td class="tdk">Tracking Mode</td></tr><tr > <td class="tde">{GPSSimNumber}</td> <td class="tde">68 meter</td></tr> <tr > <td class="tdk">Sim Number</td> <td class="tdk">Max Elevation</td></tr></table>',
                                                          cls: 'card3'
                                                      }
                                                  ]




                                              }



                            ],

                        },

                    ]
                },




            ],



        });



    return _singleTrackingMap_PointInfo;





}





function SingleTrackingMap_PointInfoShow() {
    Ext.Viewport.remove(_singleTrackingMap_PointInfo);
    this.overlay = Ext.Viewport.add(SingleTrackingMapPointIfo());
    this.overlay.show();
   
}

function SingleTrackingMap_PointInfoHide() {
    _singleTrackingMap_PointInfo.hide();
}


function LoadPointInfoPicture()
{
  
    Ext.getStore('TrackingItemImagestore').getProxy().setExtraParams({
        TrackID: GetCurrentTrackID(),
        DeviceID:GetCurrentDeviceID(),
            AccNo: GetCurrentUserAccountNo()
    });
    Ext.StoreMgr.get('TrackingItemImagestore').load();






    Ext.Viewport.mask({ xtype: 'loadmask', message: 'Loading Picture...Please Wait' });
    var task = Ext.create('Ext.util.DelayedTask', function () {
        var PictureLength = 0;
        Ext.getStore('TrackingItemImagestore').getProxy().setExtraParams({
            TrackID: GetCurrentTrackID(),
            DeviceID: GetCurrentDeviceID(),
            AccNo: GetCurrentUserAccountNo()
        });
        Ext.StoreMgr.get('TrackingItemImagestore').load();
        var myStore = Ext.getStore('TrackingItemImagestore');
        var modelRecord = myStore.getAt(0);
        var Picture = modelRecord.get('Picture');
      
        PictureLength = parseInt(Picture.length);
        console.log(PictureLength);
        if (PictureLength > 1)
        {
            Ext.getCmp('LiveTrackingInfoPanelpanelHeader').setHtml('<table width=100%><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 10px; color: #fff; text-align: center; border: 1px solid #fff;"><img src=' + Picture + ' style="width:242px;height:223px;"></td> </tr></table>');

        }
        if (PictureLength < 1) {
            Ext.getCmp('LiveTrackingInfoPanelpanelHeader').setHtml('<table width=100%><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 10px; color: #fff; text-align: center; border: 1px solid #fff;"><img src="/resources/icons/NoImage4.png" style="width:242px;height:223px;"></td> </tr></table>');

        }


        loadResponderAlertByAccount();
     

        Ext.Viewport.unmask();
    });
    task.delay(1000);
}













var iCount;
var ResponderNameAlertbyAccArry = [];
var ResponderRelationsAlertbyAccArry = [];
var ResponderPhoneNoAlertbyAccArry = [];
var ResponderName1;
var ResponderRelationShip1;
var ResponderPhoneNo1;
var ResponderName2;
var ResponderRelationShip2;
var ResponderPhoneNo2;
var ResponderName3;
var ResponderRelationShip3;
var ResponderPhoneNo3;
var ResponderName4;
var ResponderRelationShip4;
var ResponderPhoneNo4;
function loadResponderAlertByAccount() {


    ResponderNameAlertbyAccArry.length = 0;
    ResponderRelationsAlertbyAccArry.length = 0;
    ResponderPhoneNoAlertbyAccArry.length = 0;
    Ext.getStore('ResponderAlertGetByAcc').getProxy().setExtraParams({

        AccNo: GetCurrentUserAccountNo(),
    });
    Ext.StoreMgr.get('ResponderAlertGetByAcc').load();
    //var myStore = Ext.getStore('ResponderAlertGetByAcc');
    //var count = myStore.getCount();

    var task = Ext.create('Ext.util.DelayedTask', function () {
        Ext.getStore('ResponderAlertGetByAcc').getProxy().setExtraParams({
            AccNo: GetCurrentUserAccountNo(),
        });
        Ext.StoreMgr.get('ResponderAlertGetByAcc').load();
        var myStore = Ext.getStore('ResponderAlertGetByAcc');
        var count = myStore.getCount();
      
        for (iCount = 0; iCount < count; iCount++) {
            var modelRecord = myStore.getAt(iCount);
            ResponderNameAlertbyAccArry.push(modelRecord.get('ResponderName'));
            ResponderRelationsAlertbyAccArry.push(modelRecord.get('ResponderRelationShip'));
            ResponderPhoneNoAlertbyAccArry.push(modelRecord.get('ResponderPhoneNo'));
        }
        ResponderName1 = ResponderNameAlertbyAccArry[0];
                            ResponderName2 = ResponderNameAlertbyAccArry[1];
                            ResponderName3 = ResponderNameAlertbyAccArry[2];
                            ResponderName4 = ResponderNameAlertbyAccArry[3];


        ResponderRelationShip1 = ResponderRelationsAlertbyAccArry[0]; ResponderRelationShip2 = ResponderRelationsAlertbyAccArry[1]; ResponderRelationShip3 = ResponderRelationsAlertbyAccArry[2]; ResponderRelationShip4 = ResponderRelationsAlertbyAccArry[3];
        ResponderPhoneNo1 = ResponderPhoneNoAlertbyAccArry[0]; ResponderPhoneNo2 = ResponderPhoneNoAlertbyAccArry[1]; ResponderPhoneNo3 = ResponderPhoneNoAlertbyAccArry[2]; ResponderPhoneNo4 = ResponderPhoneNoAlertbyAccArry[3];

        setResponder();


        //alert(ResponderName1);

        //alert(ResponderRelationShip1);
        //alert(ResponderPhoneNo1);
    });
    task.delay(1000);
                        
 
   
}











function setResponder()
{
  //  alert(ResponderName1);
    Ext.getCmp('LiveTrackingInfoPanel3').setHtml('<table class="tabledetail"><tr> <td class="tde">' + ResponderName1 + '-' + ResponderPhoneNo1 + ' (' + ResponderRelationShip1 + ')</td> <td class="tde">' + ResponderName2 + '-' + ResponderPhoneNo2 + ' (' + ResponderRelationShip2 + ')</td></tr> <tr > <td class="tdk">Responder 1</td> <td class="tdk">Responder 2</td></tr> <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"></td> <td class="tdk"></td></tr><tr > <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"></td> <td class="tdk"></td></tr><tr > <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"></td> <td class="tdk"></td></tr><tr > <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"</td> <td class="tdk"></td></tr></table>');
    Ext.getCmp('LiveTrackingInfoPanel4').setHtml('<table class="tabledetail"><tr> <td class="tde">' + ResponderName3 + '-' + ResponderPhoneNo3 + ' (' + ResponderRelationShip3 + ')</td> <td class="tde">' + ResponderName4 + '-' + ResponderPhoneNo4 + ' (' + ResponderRelationShip4 + ')</td></tr> <tr > <td class="tdk">Responder 1</td> <td class="tdk">Responder 2</td></tr> <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"></td> <td class="tdk"></td></tr><tr > <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"></td> <td class="tdk"></td></tr><tr > <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"></td> <td class="tdk"></td></tr><tr > <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"</td> <td class="tdk"></td></tr></table>');
    setVirtualFenceInfo();
}

function setVirtualFenceInfo()
{
    Ext.getCmp('LiveTrackingInfoPanel1').setHtml('<table class="tabledetail"><tr> <td class="tde">' + VirtualFenceCurrentHourFenceAreaName + '</td> <td class="tde">' + VirtualFenceCurrentHourTimeFromConverted + ' - ' + VirtualFenceCurrentHourTimeToConverted + '</td></tr> <tr > <td class="tdk">V.Boundary Name</td> <td class="tdk">V.Boundary Time</td></tr><tr > <td class="tde">' + VirtualFenceCurrentHourTimeStatus + '</td> <td class="tde">' + VirtualFenceCurrentHourFenceLength + '</td></tr> <tr > <td class="tdk">V.Boundary Status</td> <td class="tdk">Fence Length/radius</td></tr><tr > <td class="tde">{Speed}</td> <td class="tde">160km/h</td></tr> <tr > <td class="tdk">Current Speed</td> <td class="tdk">Max Speed</td></tr><tr > <td class="tde">{BatteryReading}</td> <td class="tde">BATTERY</td></tr> <tr > <td class="tdk">Batery Status</td> <td class="tdk">Power Mode</td></tr><tr > <td class="tde">{GPSModel}</td> <td class="tde">Standard</td></tr> <tr > <td class="tdk">GPS Tracker Model</td> <td class="tdk">Tracking Mode</td></tr><tr > <td class="tde">{GPSSimNumber}</td> <td class="tde">68 meter</td></tr> <tr > <td class="tdk">Sim Number</td> <td class="tdk">Max Elevation</td></tr></table>');

}




