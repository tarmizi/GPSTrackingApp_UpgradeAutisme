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




        Ext.Viewport.unmask();
    });
    task.delay(1000);
}