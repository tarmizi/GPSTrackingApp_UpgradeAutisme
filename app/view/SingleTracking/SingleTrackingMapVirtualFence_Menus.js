var boundstatus = 'yes';
var _singleTrackingMapVirtualFence_Menu;
var _isSingleTrackingMapVirtualFence_MenuInitialized = 'no';
var drawCircleCountSingleTrackingMapDrawFence = 0;

Ext.define('MyGPS.view.SingleTracking.SingleTrackingMapVirtualFence_Menus', {

});



function SingleTrackingMapVirtualFence_Menu() {
    _singleTrackingMapVirtualFence_Menu =
  Ext.create('Ext.Panel', {

      xtype: 'panel',
      height: 1,
      width: 1,
      id: '_SingleTrackingMapVirtualFence_MenuID',
      draggable: false,
      right: -5,
      bottom: 362,
      zIndex: 10,
      // bottom: 165,

      showAnimation: {
          type: 'slide',
          direction: 'left',
          duration: 250,
          easing: 'ease-out'
      },
      hideAnimation: {
          type: null,
          direction: null,
          duration: null,
          //  easing: 'ease-in'
      },
      style: 'background-color: transparent;',
      items: {

          xtype: 'container',
          style: 'background-color: transparent;',
          layout: {
              type: 'vbox',
              pack: 'left',
              align: 'end'
          },

          items: [

                  {
                      xtype: 'button',
                      id: 'btnSingleTrackingMapVirtualFence_MenuChangeMaps',
                      height: 62,
                      width: 65,
                      // hidden:true,
                      // html: '<div ><img src="resources/icons/streetviewIcon.png" width="45" height="45" alt="Company Name"></div>',
                      //   html: '<div ><img src="resources/icons/GPSListRound.png" width="55" height="55" alt="Company Name"></div>',
                      html: '<div ><img src="resources/icons/ChangeMapRound.png" width="55" height="55" alt="Company Name"></div>',
                      //   html: '<div ><img src="resources/icons/DetailsPoint.png" width="45" height="45" alt="Company Name"></div>',
                      ui: 'plain',
                      handler: function () {

                          SingleTrackingMapVirtualFenceMenuHide();
                          _isSingleTrackingMapVirtualFence_MenuInitialized = 'yes';
                          ////  Ext.Viewport.remove(_SingleTrackingMap_Menu);

                          countMapChange = countMapChange + 1;
                          //   btn.setHtml('<div ><img src="resources/icons/changeMap2.png" width="45" height="45" alt="Company Name"></div>');
                          if (countMapChange == 1) {
                              singleTrackingMap.setMapTypeId(google.maps.MapTypeId.SATELLITE);
                              changeMsg = "Please wait,Change Map SATELLITE";

                              // Ext.getCmp('btnsingleTrackingOverViewMapGeolocationAddressWeb').setHtml('<div ><img src="resources/icons/PictureGeoLocation.png" width="45" height="45" alt="Company Name"></div>');

                          } else if (countMapChange == 2) {
                              //  Ext.getCmp('btnsingleTrackingOverViewMapGeolocationAddressWeb').setHtml('<div ><img src="resources/icons/PictureGeoLocation.png" width="45" height="45" alt="Company Name"></div>');
                              singleTrackingMap.setMapTypeId(google.maps.MapTypeId.HYBRID);
                              changeMsg = "Please wait,Change Map HYBRID";

                          } else if (countMapChange == 3) {
                              // Ext.getCmp('btnsingleTrackingOverViewMapGeolocationAddressWeb').setHtml('<div ><img src="resources/icons/locate.png" width="45" height="45" alt="Company Name"></div>');
                              singleTrackingMap.setMapTypeId(google.maps.MapTypeId.ROADMAP);
                              changeMsg = "Please wait,Change Map ROADMAP";

                          } else if (countMapChange == 4) {
                              // Ext.getCmp('btnsingleTrackingOverViewMapGeolocationAddressWeb').setHtml('<div ><img src="resources/icons/locate.png" width="45" height="45" alt="Company Name"></div>');
                              singleTrackingMap.setMapTypeId(google.maps.MapTypeId.TERRAIN);
                              changeMsg = "Please wait,Change Map TERRAIN";

                              countMapChange = 0;
                          }
                          SingleTrackingMapVirtualFence_BurgerMenuShow();

                          Ext.Viewport.mask({ xtype: 'loadmask', message: changeMsg });
                          var task = Ext.create('Ext.util.DelayedTask', function () {

                              Ext.Viewport.unmask();
                              // btn.setHtml('<div ><img src="resources/icons/changeMape1.png" width="45" height="45" alt="Company Name"></div>');
                          });
                          task.delay(800);
                      }
                  },

                {
                    xtype: 'button',
                    id: 'btnSingleTrackingMapVirtualFence_LocateRound',
                    height: 62,
                    width: 65,
                    //  html: '<div ><img src="resources/icons/OverViewMapRound.png" width="55" height="55" alt="Company Name"></div>',
                    html: '<div ><img src="resources/icons/LocateRound.png" width="55" height="55" alt="Company Name"></div>',
                    ui: 'plain',
                    handler: function () {
                        SingleTrackingMapVirtualFenceMenuHide();
                        SingleTrackingMapVirtualFence_BurgerMenuShow();
                        _isSingleTrackingMapVirtualFence_MenuInitialized = 'yes';
                        console.log(geolocationisOn);
                        if (geolocationisOn == 'no') {

                            Ext.Viewport.mask({ xtype: 'loadmask', message: 'Detecting Location..Please Wait.' });
                            var task = Ext.create('Ext.util.DelayedTask', function () {
                                geolocationisOn = 'yes';
                                geolocate('yes');
                                Ext.Viewport.unmask();
                            });
                            task.delay(500);

                            return;
                        }
                        if (geolocationisOn == 'yes') {
                            Ext.Viewport.mask({ xtype: 'loadmask', message: 'Remove GeoLocation..Please Wait.' });
                            var task = Ext.create('Ext.util.DelayedTask', function () {
                                geolocationisOn = 'no';


                                singleTrackingMap.setCenter(boundreboundlatlongsingleTrackingMap)
                                singleTrackingMap.setZoom(8);
                                boundstatus = 'no';

                                Ext.Viewport.unmask();
                            });
                            task.delay(500);

                           

                            return;

                        }



                    }
                },
               {
                   xtype: 'button',
                   id: 'btnSingleTrackingMapVirtualFence_MenuZoomPoints',
                   height: 62,
                   width: 65,
                   html: '<div ><img src="resources/icons/NearMeRound.png" width="55" height="55" alt="Company Name"></div>',
                   ui: 'plain',
                   handler: function () {
                       SingleTrackingMapVirtualFenceMenuHide();
                       SingleTrackingMapVirtualFence_BurgerMenuShow();
                       _isSingleTrackingMapVirtualFence_MenuInitialized = 'yes';
                       // Ext.Viewport.remove(_SingleTrackingMap_Menu);
                      
                       if (boundstatus == 'yes') {
                           Ext.Viewport.mask({ xtype: 'loadmask', message: 'Re-center Map View' });
                           var task = Ext.create('Ext.util.DelayedTask', function () {
                               singleTrackingMap.setCenter(boundreboundlatlongsingleTrackingMap)
                               singleTrackingMap.setZoom(8);
                               boundstatus = 'no';
                               Ext.Viewport.unmask();
                           });
                           task.delay(1000);
                           return;

                       }
                       if (boundstatus == 'no') {
                           Ext.Viewport.mask({ xtype: 'loadmask', message: 'Re Map to Point..' });
                           var task = Ext.create('Ext.util.DelayedTask', function () {

                               //var bounds = new google.maps.LatLngBounds();
                               //bounds.extend(boundreboundlatlongsingleTrackingMap);
                               //singleTrackingMap.fitBounds(bounds);

                               singleTrackingMap.setCenter(boundreboundlatlongsingleTrackingMap)
                               singleTrackingMap.setZoom(18);
                               boundstatus = 'yes';
                               Ext.Viewport.unmask();
                           });
                           task.delay(1000);
                           return;
                       }


                   }
               },

               {
                   xtype: 'button',
                   id: 'btnSingleTrackingMapVirtualFence_MenuCreateLayerPolygon',
                   height: 62,
                   width: 65,
                   html: '<div ><img src="resources/icons/multipleMapTrackingSettingLayerCreateLayerPolygon.png" width="55" height="55" alt="Company Name"></div>',
                   ui: 'plain',
                   handler: function () {
                       SingleTrackingMapVirtualFenceMenuHide();
                       SingleTrackingMapVirtualFence_BurgerMenuShow();
                       _isSingleTrackingMapVirtualFence_MenuInitialized = 'yes';


                   }
               },


                    {
                        xtype: 'button',
                        id: 'btnSingleTrackingMapVirtualFence_MenuCreateLayerCircle',
                        height: 62,
                        width: 65,
                        html: '<div ><img src="resources/icons/multipleMapTrackingSettingLayerCreateLayerCircle.png" width="55" height="55" alt="Company Name"></div>',
                        ui: 'plain',
                        handler: function () {
                            SingleTrackingMapVirtualFenceMenuHide();
                            SingleTrackingMapVirtualFence_BurgerMenuShow();
                            _isSingleTrackingMapVirtualFence_MenuInitialized = 'yes';



                            drawCircleCountSingleTrackingMapDrawFence = drawCircleCountSingleTrackingMapDrawFence + 1;
                            // loadGeofenceResponderAlert();
                            if (drawCircleCountSingleTrackingMapDrawFence == 1) {
                                // btnGeofenceDrawCircleEvent.setHtml('<div ><img src="resources/icons/drawcircle2.png" width="45" height="45" alt="Company Name"></div>');
                                drawingManagerSingleTrackingMap.setDrawingMode(google.maps.drawing.OverlayType.CIRCLE);

                            } else if (drawCircleCountSingleTrackingMapDrawFence == 2) {
                                //   btnGeofenceDrawCircleEvent.setHtml('<div ><img src="resources/icons/drawcircle.png" width="45" height="45" alt="Company Name"></div>');
                                drawingManagerSingleTrackingMap.setDrawingMode(null);
                                drawCircleCountSingleTrackingMapDrawFence = 0;

                            }






                        }
                    },

                    {
                        xtype: 'button',
                        id: 'btnSingleTrackingMapVirtualFence_MenuCreateLayerDelete',
                        height: 62,
                        width: 65,
                        html: '<div ><img src="resources/icons/multipleMapTrackingSettingLayerCreateLayerDelete.png" width="55" height="55" alt="Company Name"></div>',
                        ui: 'plain',
                        handler: function () {
                            SingleTrackingMapVirtualFenceMenuHide();
                            SingleTrackingMapVirtualFence_BurgerMenuShow();
                            _isSingleTrackingMapVirtualFence_MenuInitialized = 'yes';


                        }
                    },



              {
                  // [top, right, bottom, and left]
                  xtype: 'button',

                  id: 'btnSingleTrackingMapVirtualFence_MenuBack',
                  height: 62,
                  width: 65,
                  margin: '-62 63 0 0',
                  //  html: '<div ><img src="resources/icons/OverViewMapRound.png" width="55" height="55" alt="Company Name"></div>',
                  //  html: '<div ><img src="resources/icons/GPSListRound.png" width="55" height="55" alt="Company Name"></div>',

                  html: '<div ><img src="resources/icons/BackStreetViewRound.png" width="55" height="55" alt="Company Name"></div>',

                  ui: 'plain',
                  handler: function () {
               
                      SingleTrackingMapVirtualFenceMenuHide();
                      trackingid.length = 0;
                      DeselectMultipleTrackingList();
                      stopClocksingleTrackingMaps();
                      markersingleTrackingMap.setMap(null);
                                       
                      Ext.getCmp('mainView').setActiveItem(1);

                      if(_isSingleTrackingWPSListButtonClicked=='yes')
                      {
                          SingleTrackingWPSListButtonHide();
                      }
                      if (_isSingleTrackingWPSListClicked == 'yes') {
                          SingleTrackingWPSListHide();
                      }

                  }
              },




          ]

      },

      initialize: function () {

          //   _singleTrackingMap_BurgeMenu.hide();
      }

  });





    return _singleTrackingMapVirtualFence_Menu;
}


function SingleTrackingMapVirtualFenceMenuShow() {
    Ext.Viewport.remove(_singleTrackingMapVirtualFence_Menu);
    this.overlay = Ext.Viewport.add(SingleTrackingMapVirtualFence_Menu()); // _GeofenceInfoPanel place in Geofence_fencingstatusAlert class.                   
    this.overlay.show();
}


function SingleTrackingMapVirtualFenceMenuHide() {
    _singleTrackingMapVirtualFence_Menu.hide();

}


