﻿
var buttonAlertstateSettinggeofence;
var mapgeofenceSettinggeofence;
var boundaryColorSettinggeofence = '#ED1B24'; // initialize color of polyline
//ar polyCoordinatesSettinggeofence = []; // initialize an array where we store latitude and longitude pair
var countSettinggeofence = 0;
var markerGeofenceSettinggeofence;
//var latGeofenceSettinggeofence;
//var longGeofenceSettinggeofence;
var drawingManagerSettinggeofence;
var oriShapeSettinggeofence;
var countshapeSettinggeofence;
var radiuseSettinggeofence;
var polygonpathsSettinggeofence;
var polylinespathsSettinggeofence;
var circlecenterYSettinggeofence;
var circlecenterXSettinggeofence;
var shapetypeSettinggeofence;
var coorshapeSettinggeofence;
var geofencepolyLengthInMetersSettinggeofence;
//var checklongGeofenceSettinggeofence;
var geofencetravellengthSettinggeofence;
var geofencetravellengthkmSettinggeofence;
var geofenceLengthSettinggeofence;
var alertisplaySettinggeofence;
var geoFenceDateSettinggeofence;
var public_ImeiNo;

Ext.define('MyGPS.view.SettingFence.SettingFenceMap', {


    extend: 'Ext.Container',

    requires: ['Ext.Map', 'Ext.dataview.List',
        'Ext.data.Store', 'Ext.field.Select',
        'Ext.field.Hidden', 'Ext.form.FieldSet', ],


    xtype: 'SettingFenceMap',


    config: {

        layout: 'fit',
        // layout: 'card',
        styleHtmlContent: true,
        items: [

            {

                xtype: 'toolbar',
                title: '<font size="4.5" color="white">Virtual Boundary Map</font>',
                docked: 'top',
                id: 'toolbarSettingFenceMapTop',
                //  hidden:true,
                items:
                       [


                           {
                               xtype: 'button',

                               id: 'btnSettingFenceMapHome',
                               //  text: 'Show',
                               iconCls: 'home',
                               // html: '<div ><img src="resources/icons/hideGeofence.png" width="33" height="23" alt="Company Name"></div>',
                               ui: 'plain',
                               handler: function () {


                              
                                   DeletemarkerSettingFenceMap();

                                   Ext.getCmp('mainView').setActiveItem(1);
                                   SettingFencePanelSettingInfoHide();
                                   SettingFenceDrawFenceMenuHide();
                                   startChangeBackground('start');
                               }



                           },
                           //   {
                           //       xtype: 'spacer'
                           //   },
                           //{
                           //    xtype: 'button',
                           //    //right: -7,
                           //    //top: 1,
                           //    id: 'btnSettingFenceMapAccInfo',
                           //    margin: '5 5 0 0',
                           //    height: 53,
                           //    width: 60,
                           //    html: '<div ><img src="resources/icons/UogradeAutismeIcon/UserManual.png" width="50" height="43" alt="Company Name"></div>',
                           //    //  html: '<div ><img src="resources/icons/hideGeofence.png" width="30" height="20" alt="Company Name"></div>',
                           //    ui: 'plain',
                           //    handler: function () {



                           //    }
                           //},



                       ]

            },

            {

                xtype: 'toolbar',
               
                id: 'toolbarSettingFenceMapBottom',
                docked: 'bottom',
              
                items:
                    [
                         {
                             xtype: 'button',

                             id: 'btnSettingFenceMapMockText',
                             text: '<font size="2" color="white"><u>Virtual Boundary Setting</u></font>',

                             // html: '<div ><img src="resources/icons/hideGeofence.png" width="33" height="23" alt="Company Name"></div>',
                             ui: 'plain',
                             handler: function () {

                             }



                         },

                           {
                               xtype: 'spacer'
                           },



                           {
                               xtype: 'button',

                               height: 43,
                               width: 43,
                               id: 'btnSettingFenceMapBack',
                               //   text: '<font size="2" color="white">Virtual Boundary Setting</font>',

                               html: '<div ><img src="resources/icons/WhiteBackIcon.png" width="33" height="33" alt="Company Name"></div>',
                               ui: 'plain',
                               handler: function () {
                                
                                   DeletemarkerSettingFenceMap();
                                   loadListOfGeofence();
                                   SettingFenceDrawFenceMenuHide();
                               }



                           },
                          
                              {
                                  xtype: 'button',

                                  height: 43,
                                  width: 43,
                                  id: 'btnSettingFenceMapShow',
                                  //   text: '<font size="2" color="white">Virtual Boundary Setting</font>',
                                 
                                  html: '<div ><img src="resources/icons/WhiteExpendIcon.png" width="33" height="33" alt="Company Name"></div>',
                                  ui: 'plain',
                                  handler: function () {
                                   
                                      SettingFencePanelSettingInfoShow();
                                      if (isClickAddNewSettingFenceButton == 'yes')
                                      {
                                          Ext.getCmp('SettingDrawFence_TrackItem_loadDB').setHidden(true);
                                          Ext.getCmp('SettingDrawFence_ID').setValue(SettingDrawFence_ID);
                                          Ext.getCmp('SettingDrawFence_TrackItem').setHidden(false);
                                        //  Ext.getCmp('SettingDrawFence_TrackItem').setValue(SettingDrawFence_TrackItem);
                                          Ext.getCmp('SettingDrawFence_FencePath').setValue(SettingDrawFence_FencePath);
                                          Ext.getCmp('SettingDrawFence_FenceName').setValue(SettingDrawFence_FenceName);
                                          Ext.getCmp('SettingDrawFence_TimeFrom').setValue(SettingDrawFence_TimeFrom);
                                          Ext.getCmp('SettingDrawFence_TimeTo').setValue(SettingDrawFence_TimeTo);
                                          Ext.getCmp('SettingDrawFence_DaySetting').setValue(SettingDrawFence_DaySetting);
                                          Ext.getCmp('SettingDrawFence_Status').setValue(SettingDrawFence_Status);
                                          Ext.getCmp('SettingDrawFence_Length').setValue(SettingDrawFence_Length);
                                      }
                                      else
                                      {
                                          Ext.getCmp('SettingDrawFence_ID').setValue(SettingDrawFence_ID);
                                          Ext.getCmp('SettingDrawFence_TrackItem_loadDB').setHidden(false);
                                          Ext.getCmp('SettingDrawFence_TrackItem').setHidden(true);
                                          Ext.getCmp('SettingDrawFence_TrackItem_loadDB').setValue(SettingDrawFence_TrackItem);
                                          Ext.getCmp('SettingDrawFence_FencePath').setValue(SettingDrawFence_FencePath);
                                          Ext.getCmp('SettingDrawFence_FenceName').setValue(SettingDrawFence_FenceName);
                                          Ext.getCmp('SettingDrawFence_TimeFrom').setValue(SettingDrawFence_TimeFrom);
                                          Ext.getCmp('SettingDrawFence_TimeTo').setValue(SettingDrawFence_TimeTo);
                                          Ext.getCmp('SettingDrawFence_DaySetting').setValue(SettingDrawFence_DaySetting);
                                          Ext.getCmp('SettingDrawFence_Status').setValue(SettingDrawFence_Status);
                                          Ext.getCmp('SettingDrawFence_Length').setValue(SettingDrawFence_Length);
                                      }
                                     
                                    
                                    

                                  }
                              },
                           
                     


                    ]


            },


        ]
    },
    initialize: function () {
        alertisplaySettinggeofence = "no";
        buttonAlertstateSettinggeofence = "stop";





        this.callParent();
        map = this.add({
            xtype: 'map',
            //useCurrentLocation: true,
            mapOptions: {
              //  18.723921, 90.062886
                center: new google.maps.LatLng(18.723921, 90.062886),
                zoom: 4,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                panControl: false,
                scaleControl: false,
                mapTypeControl: true,
                mapTypeControlOptions: {
                    style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
                    position: google.maps.ControlPosition.TOP_LEFT
                },
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                zoomControl: true,
                zoomControlOptions: {
                    position: google.maps.ControlPosition.RIGHT_BOTTOM
                },
                streetViewControl: false,
                streetViewControlOptions: {
                    position: google.maps.ControlPosition.LEFT_TOP
                }

            },
            listeners: {


                fn: 'initialize',
                event: 'painted',


                maprender: function (comp, map) {
                    mapgeofenceSettinggeofence = map;
                    var me = this;
                    me.map = map;
                    countshapeSettinggeofence = 0;
                    radiuseSettinggeofence = 0;
                    shapetypeSettinggeofence = "none";
                    drawingManagerSettinggeofence = new google.maps.drawing.DrawingManager({
                        //  drawingMode: google.maps.drawing.OverlayType.MARKER,
                        drawingControl: false,
                        drawingControlOptions: {
                            position: google.maps.ControlPosition.TOP_LEFT,
                            drawingModes: [
                               google.maps.drawing.OverlayType.POLYGON,
                              google.maps.drawing.OverlayType.CIRCLE
                            ]
                        },
                        polygonOptions: {
                            //editable: true
                            strokeColor: "#FF004D",
                            // strokeOpacity: 0.8,
                            strokeWeight: 2,
                            fillColor: "#FF004D",
                            fillOpacity: 0.5
                        },
                        //markerOptions: {
                        //    icon: 'images/beachflag.png'
                        //},
                        circleOptions: {
                            fillColor: '#FF004D',
                            fillOpacity: 0.5,
                            strokeWeight: 2,
                            clickable: false,
                            editable: true,
                            zIndex: 1
                        }
                    });



                    drawingManagerSettinggeofence.setMap(mapgeofenceSettinggeofence);
                    google.maps.event.addListener(drawingManagerSettinggeofence, 'polygoncomplete', function (polygon) {
                        //  resetMenuDrawButton();
                        if (countshapeSettinggeofence <= 0) {
                            var coordinatespolygon = (polygon.getPath().getArray());
                            polygonpathsSettinggeofence = new google.maps.Polygon({
                                paths: coordinatespolygon
                            });

                            Ext.Viewport.mask({ xtype: 'loadmask', message: 'Processing geofence..' });
                            var task = Ext.create('Ext.util.DelayedTask', function () {
                                coorshapeSettinggeofence = '';
                                coorshapeSettinggeofence += coordinatespolygon;
                                var tempkm;
                                // alert(coorshapeSettinggeofence);
                                geofencepolyLengthInMetersSettinggeofence = google.maps.geometry.spherical.computeLength(polygon.getPath().getArray());
                                Ext.getCmp('SettingDrawFence_FencePath').setValue(coorshapeSettinggeofence);
                                geofencetravellengthSettinggeofence = +Math.floor(geofencepolyLengthInMetersSettinggeofence);
                                tempkm = geofencetravellengthSettinggeofence / 1000;
                                Ext.getCmp('SettingDrawFence_Length').setValue(tempkm);
                                Ext.getCmp('SettingDrawFence_ShapeType').setValue('polygon');
                                // InsertGeoFences(AAccountNo, SingleTrackID, trackingItems, tempkm, coorshapeSettinggeofence, "polygon", AAlertEmail, AAlertEmail, AAlertEmail, FenceAlertPhone1, FenceAlertPhone2, FenceAlertPhone3, FenceAlertPhone4, UserName, OS, 'Active', 'NotSend', 'ANSxyGPS@hotmail.my', '+60193198764', FenceAlertName1, FenceAlertName2, FenceAlertName3, FenceAlertName4, AISMSAlertMsg, geofenceArea, FenceAlertRelationship1, FenceAlertRelationship2, FenceAlertRelationship3, FenceAlertRelationship4);




                                shapetypeSettinggeofence = "polygon";
                                Ext.Viewport.unmask();
                            });
                            task.delay(1000);
                        }

                        countshapeSettinggeofence = countshapeSettinggeofence + 1;
                        if (countshapeSettinggeofence > 1) {

                            detectedmoreshapeSettinggeofence();
                        }

                    });


                

               

                    google.maps.event.addListener(drawingManagerSettinggeofence, 'circlecomplete', function (circle) {
                        //   resetMenuDrawButton();
                        if (countshapeSettinggeofence <= 0) {


                            Ext.Viewport.mask({ xtype: 'loadmask', message: 'Processing geofence..' });
                            var task = Ext.create('Ext.util.DelayedTask', function () {

                                //   InsertGeoFences(AAccountNo, SingleTrackID, trackingItems, circle.getRadius(), circle.getCenter().lat() + ',' + circle.getCenter().lng(), "circle", AAlertEmail, AAlertEmail, AAlertEmail, FenceAlertPhone1, FenceAlertPhone2, FenceAlertPhone3, FenceAlertPhone4, UserName, OS, 'Active', 'NotSend', 'ANSxyGPS@hotmail.my', '+60193198764', FenceAlertName1, FenceAlertName2, FenceAlertName3, FenceAlertName4, AISMSAlertMsg, geofenceArea, FenceAlertRelationship1, FenceAlertRelationship2, FenceAlertRelationship3, FenceAlertRelationship4);
                                Ext.getCmp('SettingDrawFence_FencePath').setValue(circle.getCenter().lat() + ',' + circle.getCenter().lng());
                                Ext.getCmp('SettingDrawFence_Length').setValue(circle.getRadius());
                                Ext.getCmp('SettingDrawFence_ShapeType').setValue('circle');
                                radiuseSettinggeofence = circle.getRadius();
                                geofencetravellengthkmSettinggeofence = parseInt(radiuseSettinggeofence) + 'M(radius)';
                                geofenceLengthSettinggeofence = +Math.floor(radiuseSettinggeofence);
                                circlecenterYSettinggeofence = circle.getCenter().lat();
                                circlecenterXSettinggeofence = circle.getCenter().lng();
                                shapetypeSettinggeofence = "circle";
                                Ext.Viewport.unmask();
                            });
                            task.delay(1000);

                            google.maps.event.addListener(circle, 'radius_changed', function () {
                                Ext.Viewport.mask({ xtype: 'loadmask', message: 'Radius change..Processing geofence..' });
                                var task = Ext.create('Ext.util.DelayedTask', function () {
                                    // InsertGeoFences(AAccountNo, SingleTrackID, trackingItems, circle.getRadius(), circle.getCenter().lat() + ',' + circle.getCenter().lng(), "circle", AAlertEmail, AAlertEmail, AAlertEmail, FenceAlertPhone1, FenceAlertPhone2, FenceAlertPhone3, FenceAlertPhone4, UserName, OS, 'Active', 'NotSend', 'ANSxyGPS@hotmail.my', '+60193198764', FenceAlertName1, FenceAlertName2, FenceAlertName3, FenceAlertName4, AISMSAlertMsg, geofenceArea,FenceAlertRelationship1, FenceAlertRelationship2, FenceAlertRelationship3, FenceAlertRelationship4);
                                    Ext.getCmp('SettingDrawFence_FencePath').setValue(circle.getCenter().lat() + ',' + circle.getCenter().lng());
                                    Ext.getCmp('SettingDrawFence_Length').setValue(circle.getRadius());
                                    Ext.getCmp('SettingDrawFence_ShapeType').setValue('circle');
                                    radiuseSettinggeofence = circle.getRadius();
                                    geofencetravellengthkmSettinggeofence = parseInt(radiuseSettinggeofence) + 'M(radius)';
                                    geofenceLengthSettinggeofence = geofencetravellengthkmSettinggeofence + '(radius)';
                                    circlecenterYSettinggeofence = circle.getCenter().lat();
                                    circlecenterXSettinggeofence = circle.getCenter().lng();
                                    shapetypeSettinggeofence = "circle";
                                    Ext.Viewport.unmask();
                                });
                                task.delay(1000);
                                console.log('radius changed');
                                radiuseSettinggeofence = circle.getRadius();
                                geofencetravellengthkmSettinggeofence = radiuseSettinggeofence + '(radius)';

                            });



                        }
                        countshapeSettinggeofence = countshapeSettinggeofence + 1;
                        if (countshapeSettinggeofence > 1) {
                            // stopClockGeoFence();
                            detectedmoreshapeSettinggeofence();
                        }

                    });

                    google.maps.event.addListener(drawingManagerSettinggeofence, 'overlaycomplete', function (e) {
                        if (e.type == google.maps.drawing.OverlayType.POLYGON) {
                            // Switch back to non-drawing mode after drawing a shape.
                            drawingManagerSettinggeofence.setDrawingMode(null);
                            // resetMenuDrawButton();
                            if (countshapeSettinggeofence == 0) {
                                oriShapeSettinggeofence = e.overlay;
                                oriShapeSettinggeofence.type = e.type;
                                // alert(oriShape);

                            }

                            if (countshapeSettinggeofence >= 1) {
                                var newShape = e.overlay;
                                newShape.type = e.type;
                                setSelectionSettinggeofence(newShape);
                            }
                        }
                  

                        if (e.type == google.maps.drawing.OverlayType.CIRCLE) {
                            // Switch back to non-drawing mode after drawing a shape.
                            drawingManagerSettinggeofence.setDrawingMode(null);
                            //  resetMenuDrawButton();
                            //     countshapeSettinggeofence = countshapeSettinggeofence + 1;

                            if (countshapeSettinggeofence == 0) {
                                oriShapeSettinggeofence = e.overlay;
                                oriShapeSettinggeofence.type = e.type;

                            }

                            if (countshapeSettinggeofence >= 1) {
                                var newShape = e.overlay;
                                newShape.type = e.type;
                                setSelectionSettinggeofence(newShape);
                            }
                        }
                    
                    });

                 







                }






            }


        });

    }

});




function createPolyline(polyC) {
    Path = new google.maps.Polygon({
        path: polyC,
        editable: true,
        strokeColor: boundaryColorSettinggeofence,
        strokeOpacity: 1.0,
        strokeWeight: 4
    });
    Path.setMap(mapgeofenceSettinggeofence);
}


var selectedShapeSettinggeofence;



function clearSelectionSettinggeofence() {
    if (selectedShapeSettinggeofence) {;
    }
}

function setSelectionSettinggeofence(shape) {
    clearSelectionSettinggeofence();
    selectedShapeSettinggeofence = shape;
}

function deleteSelectedShapeSettinggeofence() {
    if (selectedShapeSettinggeofence) {
        // dialogboxdeletemore.hide();
        selectedShapeSettinggeofence.setMap(null);

    }
}

function deleteAllSelectedShapeSettinggeofence() {

    if (oriShapeSettinggeofence) {
        countshapeSettinggeofence = 0;
        oriShapeSettinggeofence.setMap(null);
    }

    if (polygonpathsSettinggeofence) {
        countshapeSettinggeofence = 0;
        polygonpathsSettinggeofence.setMap(null);
    }

    if (draw_circleSettinggeofence) {
        countshapeSettinggeofence = 0;
        draw_circleSettinggeofence.setMap(null);
    }
}




function detectedmoreshapeSettinggeofence() {
    Ext.Msg.show({
        title: 'Virtual boundary Multiple Shape',
        message: 'Multiple Shape detected..!,virtual boundary only valid in a shape, new shape will be deleted.!',
        width: 300,
        buttons: Ext.MessageBox.OK,
        iconCls: Ext.MessageBox.INFO,
        fn: function (buttonIdmsg) {
            Ext.Viewport.mask({ xtype: 'loadmask', message: 'Removing new Shape..' });
            var task = Ext.create('Ext.util.DelayedTask', function () {
                coorshapeSettinggeofence = '';
                deleteSelectedShapeSettinggeofence();
                Ext.Viewport.unmask();
            });
            task.delay(1000);


        }
    });


}


function selectColor(color) {
    selectedColor = boundaryColorSettinggeofence;
}




















function loadmarkerGeoFenceSettinggeofence() {


    loadgeofenceSettinggeofence();



}



var _valuepanelgeofenceinfo =
    Ext.create('Ext.Panel', {

        xtype: 'panel',
        // style: 'background-color:#57A0DC',
        height: 100,
        //width: 320,
        //  centered: true,
        // height: '10%',
        width: '100%',
        // centered: false,
        id: 'panelgeofenceinfo',
        draggable: false,

        right: 0,
        bottom: 0,


        showAnimation: {
            type: 'slide',
            direction: 'up',
            duration: 350,
            easing: 'ease-out',

        },
        hideAnimation: {
            type: null,
            direction: null,
            duration: 650,
            easing: null,
            out: true

        },


        //right: 1,
        //bottom: 1,
        style: 'background-color: #57A0DC;',
        //showAnimation: {
        //    type: 'slide',
        //    direction: 'down',
        //    duration: 350,
        //    easing: 'ease-out',

        //},
        //hideAnimation: {
        //    type: 'slide',
        //    direction: 'up',
        //    duration: 650,
        //    easing: 'ease-out',
        //    out: true
        //},


        items: {

            //   html: '<table class="tblmasterhistory"><tr > <td class="tdgpsdata">WTP 2681</td> <td class="tdgpsdata">Proton Persona</td></tr> <tr > <td class="tdgpslabel">Tracked ID</td> <td class="tdgpslabel">Tracked Item</td></tr><tr > <td class="tdgpsdata">WTP 2681</td> <td class="tdgpsdata">Proton Persona</td></tr> <tr > <td class="tdgpslabel">Tracked ID</td> <td class="tdgpslabel">Tracked Item</td></tr><tr > <td class="tdgpslabel">Tracked ID</td> <td class="tdgpslabel">Tracked Item</td></tr></table>',
            id: 'Infogeofenceinfo',
            html: '<table class="tblheadetrackedhistory"><tr > <td class="tdgpsdata">Virtual boundary Setting</td> <td class="tdgpsdata"></td></tr></table>                           <br>   <table class="tblmasterhistory"> <tr> <td class="tdgpslabel">Date From</td> <td class="tdgpslabel">Tracked Item</td></tr><tr> <td class="tdgpslabel">Tracked ID</td> <td class="tdgpslabel">Tracked Item</td></tr><tr> <td class="tdgpslabel">Tracked ID</td> <td class="tdgpslabel">Tracked Item</td></tr><tr> <td class="tdgpslabel">Tracked ID</td> <td class="tdgpslabel">Tracked Item</td></tr></table>',
            //html: '<table>  <tr> <td colspan="2" style="background-color: red;  font-size: 13px; color: #fff; text-align: center;  valign:top; height:20%">' + Infotrackid + '</td> </tr><tr> <td colspan="2" style="background-color: red;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">' + Infotracktype + '</td> </tr>    <tr > <td class="tdspeedmax">80km/h</td> <td class="tdspeedmax">120km/h</td></tr> <tr > <td class="tdspeed">Current Speed</td> <td class="tdspeed">Max Speed</td></tr> <tr> <td colspan="2" class="tdspeedmax">02-11-2015 2:06AM</td> </tr>  </table>',
            //html: 'First Panel<br>ssssssss<br>cvxvc<br>ccdfdfs',
            ////style: 'background-color: #5E99CC;'
            //style: 'background-color: #57A0DC;'



            items: {

                xtype: 'container',
                layout: {
                    type: 'hbox',
                    pack: 'right',
                    // align: 'end'
                },
                items: [





                {
                    xtype: 'button',

                    Id: 'deletegeofenceinfo',
                    //   hidden:true,
                    // margin: 'top left bottom right',
                    margin: '-40 0 0 0',
                    //style: 'margin-top: 350px;margin-left: 500px;',
                    // text: '',
                    height: 45,
                    width: 50,
                    html: '<div ><img src="resources/icons/deletegeofence.png" width="40" height="40" alt="Company Name"></div>',
                    //ui:'round'
                    ui: 'plain',
                    handler: function (btn) {

                        Ext.Msg.show({
                            title: 'DELETE VIRTUAL BOUNDARY',
                            message: 'Delete virtual boundary for this item?',
                            width: 500,
                            buttons: Ext.MessageBox.YESNO,
                            iconCls: Ext.MessageBox.INFO,
                            fn: function (buttonId) {
                                if (buttonId == "yes") {
                                    Ext.Viewport.mask({ xtype: 'loadmask', message: 'Deleting Virtual Boundary...' });
                                    var task = Ext.create('Ext.util.DelayedTask', function () {

                                        alertisplaySettinggeofence = "no";


                                        // DeleteGeoFences(AAccountNo, SingleTrackID);
                                        shapetypeSettinggeofence = "none";
                                        deleteAllSelectedShapeSettinggeofence();
                                        coorshapeSettinggeofence = '';

                                        Ext.Viewport.unmask();

                                    });
                                    task.delay(1000);

                                }


                            }
                        });

                        ///////////////







                    }



                },


                ]


            }

        }


    });








function generatePolygonSettinggeofence(pathing) {

    mapPoly = new google.maps.Polygon({
        paths: pathing,
        strokeColor: "#FF8800",
        strokeOpacity: 0.8,
        strokeWeight: 3,
        fillColor: "#FF8800",
        fillOpacity: 0.35
    });
    mapPoly.setMap(mapgeofenceSettinggeofence);
    countshapeSettinggeofence = 1;

}
var draw_circleSettinggeofence;
function generateCircleSettinggeofence(yxcoor, radi) {
    var ctr = new google.maps.LatLng(circlecenterYSettinggeofence, circlecenterXSettinggeofence);
    draw_circleSettinggeofence = new google.maps.Circle({
        center: ctr,
        radius: radiuseSettinggeofence,
        strokeColor: "#FF0000",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#FF0000",
        fillOpacity: 0.35,
        map: mapgeofenceSettinggeofence
    });
    countshapeSettinggeofence = 1;

}

var arraygeofenceSettinggeofence = [];
var arraygeofenceSettinggeofencePolygonBounds = [];

function drawgefenceSettinggeofence(typeshape, pathxy, pathlenght) {
    //alert(typeshape + pathxy + pathlenght);

    console.log(typeshape+'500');
    arraygeofenceSettinggeofence.length = 0;
    if (typeshape == 'circle') {
        var globalFileTypeId = pathxy.split(',');
        var b = parseInt(pathlenght);
        var ctr = new google.maps.LatLng(globalFileTypeId[0], globalFileTypeId[1]);
        draw_circleSettinggeofence = new google.maps.Circle({
            center: ctr,
            radius: b,
            strokeColor: "#FF0000",
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: "#FF0000",
            fillOpacity: 0.35,
            map: mapgeofenceSettinggeofence
        });



        countshapeSettinggeofence = countshapeSettinggeofence + 1;
        radiuseSettinggeofence = b;
        geofencetravellengthkmSettinggeofence = b + 'Meter(radius)';
        circlecenterYSettinggeofence = globalFileTypeId[0];
        circlecenterXSettinggeofence = globalFileTypeId[1];
        shapetypeSettinggeofence = "circle";

        window.setTimeout(function () {
            var bounds = new google.maps.LatLngBounds();
            bounds.extend(ctr);
            //mapgeofenceSettinggeofence.panTo(ctr);
            mapgeofenceSettinggeofence.fitBounds(bounds);

            mapgeofenceSettinggeofence.setZoom(16);
        }, 1000);
        //  mapgeofenceSettinggeofence.map.setCenter(new google.maps.LatLng(45, 19));
        //  mapgeofenceSettinggeofence.setZoom(10);
        //mapgeofenceSettinggeofence.setCenter(ctr); //Make map global
        //mapgeofenceSettinggeofence.setZoom(10);

        // mapgeofenceSettinggeofence.fitBounds(draw_circleSettinggeofence.getBounds());
        //mapgeofenceSettinggeofence.setZoom(10);
        if (countshapeSettinggeofence > 1) {

            deleteShapeFromDrawFence(draw_circleSettinggeofence);

        }

    }else
    if (typeshape == 'polygon') {
        //arraygeofence.push(new google.maps.LatLng(this.lat, this.lng));
      
        var polysplit = pathxy.split('),');


        var polyboundsx;
        var polyboundsy;


        var index, len;
        var a = polysplit;
        for (index = 0, len = a.length; index < len; ++index) {
            //alert(a[index] + ')');

            var splitresult = a[index] + ')'.split(',');
            var text = splitresult.replace(/[\])}[{(]/g, '');
            var pathpoly = text.split(',');

            arraygeofenceSettinggeofence.push(new google.maps.LatLng(pathpoly[0], pathpoly[1]));
            //  arraygeofenceSettinggeofencePolygonBounds.push(text);


            polyboundsy = pathpoly[0];
            polyboundsx = pathpoly[1];

        }

        polygonpathsSettinggeofence = new google.maps.Polygon({
            paths: arraygeofenceSettinggeofence,
            strokeColor: "#FF0000",
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: "#FF0000",
            fillOpacity: 0.35,
            // strokeColor: "#FF8800",            
            //strokeOpacity: 0.8,
            //strokeWeight: 3,
            //fillColor: "#FF8800",
            //fillOpacity: 0.35
        });
     
        countshapeSettinggeofence = countshapeSettinggeofence + 1;

        shapetypeSettinggeofence = "polygon";
        //var bounds = new google.maps.LatLngBounds();
        //bounds.extend(polybounds);
        //alert(polybounds);


        //   arraygeofenceSettinggeofence.length = 0;



        window.setTimeout(function () {
           
            polygonpathsSettinggeofence.setMap(mapgeofenceSettinggeofence);

          //  var ctr = new google.maps.LatLng(polyboundsy, polyboundsx);
         //   var bounds = new google.maps.LatLngBounds();
            var center = new google.maps.LatLng(polyboundsy, polyboundsx);
            // using global variable:
            mapgeofenceSettinggeofence.panTo(center);
            //bounds.extend(ctr);
            //mapgeofenceSettinggeofence.fitBounds(bounds);
            mapgeofenceSettinggeofence.setZoom(16);
        }, 1000);



        if (countshapeSettinggeofence > 1) {

            deleteShapeFromDrawFence(polygonpathsSettinggeofence);

        }
    }



}
function deleteShapeFromDrawFence(newshapefence) {

    newshapefence.setMap(null);


}
function ClearShapeFromDrawFence() {

    if (polygonpathsSettinggeofence) {
        polygonpathsSettinggeofence.setMap(null);
    }
    if (draw_circleSettinggeofence)
    { draw_circleSettinggeofence.setMap(null); }

    countshapeSettinggeofence = 0;

}
function loadgeofenceSettinggeofence() {
    geofenceAreaSettinggeofence = "";
    console.log('loadgeofenceSettinggeofence:' + SingleTrackID);
    Ext.Viewport.mask({ xtype: 'loadmask', message: 'Drawing geofence..!!!!' });
    var task = Ext.create('Ext.util.DelayedTask', function () {
        Ext.getStore('geoFenceStore').getProxy().setExtraParams({
            AccountNo: GetCurrentUserAccountNo(),
            TrackID: SingleTrackID,


        });


        Ext.StoreMgr.get('geoFenceStore').load();
        var myStore = Ext.getStore('geoFenceStore');
        var co = myStore.getCount();
        //alert(co + "---" + AAccountNo + "---" + SingleTrackID);
        if (co >= 1) {
            var modelRecord = myStore.getAt(0);
            var shp = modelRecord.get('ShapeType');
            var shplgth = modelRecord.get('Fencelenght');
            var shppath = modelRecord.get('FencePath');
            geoFenceDateSettinggeofence = modelRecord.get('Createddate');
            geofenceAreaSettinggeofence = modelRecord.get('FenceName');
            geofenceLengthSettinggeofence = shplgth;
            drawgefenceSettinggeofence(shp, shppath, shplgth);
        }
        else if (co == 0) {

            shapetypeSettinggeofence = "none";
            geofenceLengthSettinggeofence = "Null";
            geoFenceDateSettinggeofence = "Null";
        }
        Ext.Viewport.unmask();
    });
    task.delay(1000);


}



function loadSettingFenceDrawMap(ID, TrackItem, TrackID, AccountNo, FencePath, ShapeType, FenceAreaName, TimeFrom, TimeTo, DaySetting, Status, FenceLength) {
    SettingFencePanelSettingInfoShow();





    Ext.Viewport.mask({ xtype: 'loadmask', message: 'Drawing Fence...Please Wait' });
    var task = Ext.create('Ext.util.DelayedTask', function () {

        Ext.getCmp('SettingDrawFence_ID').setValue(ID);

        Ext.getCmp('SettingDrawFence_TrackItem').setHidden(true);
        Ext.getCmp('SettingDrawFence_TrackItem_loadDB').setHidden(false);
        Ext.getCmp('SettingDrawFence_TrackItem_loadDB').setValue(SettingDrawFence_TrackItem);


        Ext.getCmp('SettingDrawFence_AccountNo').setValue(AccountNo);
        Ext.getCmp('SettingDrawFence_FencePath').setValue(FencePath);
        Ext.getCmp('SettingDrawFence_ShapeType').setValue(ShapeType);
        Ext.getCmp('SettingDrawFence_FenceName').setValue(FenceAreaName);
        Ext.getCmp('SettingDrawFence_TimeFrom').setValue(TimeFrom);
        Ext.getCmp('SettingDrawFence_TimeTo').setValue(TimeTo);
        Ext.getCmp('SettingDrawFence_DaySetting').setValue(DaySetting);
        Ext.getCmp('SettingDrawFence_Status').setValue(Status);
        Ext.getCmp('SettingDrawFence_Length').setValue(FenceLength);
        ClearShapeFromDrawFence();
        deleteAllSelectedShapeSettinggeofence();

        drawgefenceSettinggeofence(ShapeType, FencePath, FenceLength)






        Ext.Viewport.unmask();
    });
    task.delay(800);


    //setTimeout(function () {
     
    //}, 1000);
  
 
}

var draw_circleSettingDrawFence
function drawFence(FencePath, ShapeType, pathlenght) {
   

    if (ShapeType == 'circle') {
        var globalFileTypeId = FencePath.split(',');
        var b = parseInt(pathlenght);
        var ctr = new google.maps.LatLng(globalFileTypeId[0], globalFileTypeId[1]);
        draw_circleSettingDrawFence = new google.maps.Circle({
            center: ctr,
            radius: b,
            strokeColor: "#FF0000",
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: "#FF0000",
            fillOpacity: 0.35,
            map: mapgeofenceSettinggeofence
        });
    }
}

var markerSettingFenceMap;
var imageMarkerSettingFenceMap;
var markerSettingFenceMapArr = [];
var markerPreviousImeiNo='00';

function settingFenceMapLocatingPoint(ImeiNo) {
   

    if (markerPreviousImeiNo != ImeiNo && isFirstSettingFenceMapLoad =='no') {
        DeletemarkerSettingFenceMap();
        markerPreviousImeiNo = ImeiNo;
    }

    Ext.Viewport.mask({ xtype: 'loadmask', message: 'Locating Kids.......' });
    var task = Ext.create('Ext.util.DelayedTask', function () {
        Ext.getStore('singlesignalTrackingstore').getProxy().setExtraParams({
            TrackID: ImeiNo,
            AccountNo: GetCurrentUserAccountNo()
        });
        Ext.StoreMgr.get('singlesignalTrackingstore').load();


    });
    task.delay(500);






    Ext.Viewport.mask({ xtype: 'loadmask', message: 'Locating Kids..Please Wait.' });
    var task = Ext.create('Ext.util.DelayedTask', function () {
        Ext.getStore('singlesignalTrackingstore').getProxy().setExtraParams({
            TrackID: ImeiNo,
            AccountNo: GetCurrentUserAccountNo()
        });
        Ext.StoreMgr.get('singlesignalTrackingstore').load();
        var myStore = Ext.getStore('singlesignalTrackingstore');
        var modelRecord = myStore.getAt(0);
        var Latitude = modelRecord.get('Latitude');
        var Longitude = modelRecord.get('Longitude');

        var positions = new google.maps.LatLng(Latitude, Longitude);

        imageMarkerSettingFenceMap = {
            url: ip + 'pulseRed.gif', // url
            scaledSize: new google.maps.Size(80, 80), // scaled size
            //  origin: new google.maps.Point(0, 0), // origin
            anchor: new google.maps.Point(40, 40) // anchor
        };



        markerSettingFenceMap = new MarkerWithLabel({
            position: positions,
            //  position: boundreboundlatlongsingleTrackingMap,
            icon: imageMarkerSettingFenceMap,
            flat: true,
            draggable: false,
            optimized: false,
        

            labelAnchor: new google.maps.Point(70, 13),
            labelClass: "labelsMark",// the CSS class for the label
            map: mapgeofenceSettinggeofence,
            // title: valSingleTrackID
        });
        markerSettingFenceMapArr.length = 0;
        markerSettingFenceMapArr.push(markerSettingFenceMap);
        isFirstSettingFenceMapLoad = 'no';
        mapgeofenceSettinggeofence.setCenter(positions)
        mapgeofenceSettinggeofence.setZoom(16);
       
        Ext.Viewport.setMasked(false);

    });
    task.delay(1000);

    

}


function DeletemarkerSettingFenceMap() {
    //Find and remove the marker from the Array

    console.log("DELETEEEExxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
    //markerSettingFenceMap.setMap(null);
    //mapgeofenceSettinggeofence.setMap(null);

    for (var i = 0; i < markerSettingFenceMapArr.length; i++) {
             
            markerSettingFenceMapArr[i].setMap(null);

            //Remove the marker from array.
            //markerSettingFenceMapArr.splice(i, 1);
     
    }
}


function AutoFenceTimerDelete(ID, AccountNo) {

    Ext.Ajax.request({

        url: document.location.protocol + '//' + document.location.host + '/API/AutoFenceTimer/AutoFenceTimerDelete',

        params: {

            ID: ID,
            AccountNo: AccountNo,


        },
        success: function (result, request) {
            Ext.Msg.alert('Success', 'Record has been Delete');
            Ext.getCmp('SettingDrawFence_ID').setValue('0');
            //if ((messageboxss())) {
            //    Ext.Viewport.add(messageboxss('Delete Succesfully'));
            //    //   Ext.getCmp('GeofenceInfopanel').setHtml('<table class="tblgpssummary">  <tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 13px; color: #fff; text-align: center;  valign:top; height:20%">DISABLED</td> </tr><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">Fence Status</td> </tr>    <tr > <td class="tdspeedmax">{Speed}</td> <td class="tdspeedmax">120km/h</td></tr> <tr > <td class="tdspeed">Curr. Speed</td> <td class="tdspeed">Max Speed</td></tr> <tr> <td colspan="2" class="tdspeedmax">10/13/2015 2:06:56AM</td> </tr>  </table>');
            //}
            ////  Ext.getCmp('GeofenceInfopanel').setHtml('<table>  <tr> <td colspan="2" font-weight: bold; style="background-color: #57A0DC;  font-size: 15px; color: #fff; text-align: center;">DISABLED</td> </tr><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 10px; color: #fff; text-align: center;">Status</td> </tr></table>');
            //  console.log(document.location.protocol + '//' + document.location.host + '/TrackingAppAPI/GeoFence/GeofenceInsert')
        },
        failure: function (result, request) {
            Ext.Msg.alert('Error', request);
            //if ((messageboxss())) {
            //    Ext.Viewport.add(messageboxss('Error,' + request));
            //}
        }
    });
}



var ATCreatedDate;
var ATTrackItem;
var ATTrackID;
var ATAccountNo;
var ATFencePath;
var ATShapeType;
var ATFenceAreaName = 'noneName';
var ATTimeFrom = 'noTime';
var ATTimeTo;
var ATDaySetting;
var ATStatus;
var ATFenceLength;


function GetVirtualFenceActive() {


    Ext.getStore('AutoFenceTimerGetByAccNoDeviceHour').getProxy().setExtraParams({

        AccountNo: GetCurrentUserAccountNo(),
        DeviceID: GetCurrentDeviceID(),
    });
    Ext.StoreMgr.get('AutoFenceTimerGetByAccNoDeviceHour').load();
    //var myStore = Ext.getStore('AutoFenceTimerGetByAccNoDeviceHour');
    //var cou = myStore.getCount();


    var task = Ext.create('Ext.util.DelayedTask', function () {
        Ext.getStore('AutoFenceTimerGetByAccNoDeviceHour').getProxy().setExtraParams({

            AccountNo: GetCurrentUserAccountNo(),
            DeviceID: GetCurrentDeviceID(),
        });
        Ext.StoreMgr.get('AutoFenceTimerGetByAccNoDeviceHour').load();
        var myStore = Ext.getStore('AutoFenceTimerGetByAccNoDeviceHour');
        var modelRecord = myStore.getAt(0);
        ATCreatedDate = modelRecord.get('CreatedDate');
        ATTrackItem = modelRecord.get('TrackItem');
        ATTrackID = modelRecord.get('TrackID');
        ATAccountNo = modelRecord.get('AccountNo');
        ATFencePath = modelRecord.get('FencePath');
        ATShapeType = modelRecord.get('ShapeType');
        ATFenceAreaName = modelRecord.get('FenceAreaName');
        ATTimeFrom = modelRecord.get('TimeFrom');
        ATTimeTo = modelRecord.get('TimeTo');
        ATDaySetting = modelRecord.get('DaySetting');
        ATStatus = modelRecord.get('Status');
        ATFenceLength = modelRecord.get('FenceLength');
    });
    task.delay(1000);





}