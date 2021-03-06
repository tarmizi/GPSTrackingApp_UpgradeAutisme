﻿

var SettingDrawFence_ID = '0';
var SettingDrawFence_TrackID= '-1';
var SettingDrawFence_TrackItem = '-1';
var SettingDrawFence_FencePath = 'null';
var SettingDrawFence_FenceName = 'Enter Area Name';
var SettingDrawFence_TimeFrom = '-1';
var SettingDrawFence_TimeTo = '-1';
var SettingDrawFence_DaySetting = '-1';
var SettingDrawFence_Status='-1';
var SettingDrawFence_Length='-1'
var isClickAddNewSettingFenceButton = 'no';
var isFirstSettingFenceMapLoad;
var SettingFenceBtnAddNew_or_ListofGeofence;


Ext.define('MyGPS.view.SettingFence.SettingFenceListOfGeoFence', {
    extend: 'Ext.Panel', //Ext.navigation.View
    xtype: 'SettingFenceListOfGeoFence',
    id: 'SettingFenceListOfGeoFenceID',
    requires: [
        'Ext.dataview.List',
        'Ext.data.Store'
    ],
    config: {
        style: ' background-color:white;',
        layout: 'vbox', //  add a layout
        items:
        [
{

    xtype: 'toolbar',
    title: '<font size="4" color="white">Virtual Boundary</font>',
    docked: 'top',
    id: 'toolbarGeofenceTop',
    //  hidden:true,
    items:
           [


               {
                   xtype: 'button',

                   id: 'btnSettingFenceListOfGeoFenceHome',
                   //  text: 'Show',
                   iconCls: 'home',
                   // html: '<div ><img src="resources/icons/hideGeofence.png" width="33" height="23" alt="Company Name"></div>',
                   ui: 'plain',
                   handler: function () {
                       Ext.getCmp('mainView').setActiveItem(1);
                       SettingFencePanelSettingInfoHide();
                       startChangeBackground('start');
                   }



               },

                 //{
                 //    xtype: 'spacer'
                 //},
                 //          {
                 //              xtype: 'button',
                 //              //right: -7,
                 //              //top: 1,
                 //              id: 'btnSettingFenceListOfGeoFenceHomeAccInfo',
                 //              margin: '5 5 0 0',
                 //              height: 53,
                 //              width: 60,
                 //              html: '<div ><img src="resources/icons/UogradeAutismeIcon/UserManual.png" width="50" height="43" alt="Company Name"></div>',
                 //              //  html: '<div ><img src="resources/icons/hideGeofence.png" width="30" height="20" alt="Company Name"></div>',
                 //              ui: 'plain',
                 //              handler: function () {



                 //              }
                 //          },


           ]

},
{

    xtype: 'toolbar',

    docked: 'bottom',
    layout: {
        pack: 'center'
    },
    items:
        [
            {


                xtype: 'button',
                id: 'btnSettingFenceCountRecord',

                html: '<font size="2" color="white">0 Record</font>',
                ui: 'plain',
                handler: function () {

                  

                }
            },



        {
            xtype: 'spacer'
        },
         {
             xtype: 'button',
          
             id: 'SettingAutoFenceBackbtn',
             //ui: 'action',
             //text: "Back",
             height: 40,
             width: 40,
            
             html: '<div ><img src="resources/icons/WhiteBackIcon.png" width="30" height="30" alt="Company Name"></div>',
             ui: 'plain',
             handler: function (btn) {
                 Ext.getCmp('mainView').setActiveItem(1);
            
             }

         },


           {
               xtype: 'button',
               hidden:true,
               id: 'SettingAutoFenceTraceAlert',
               //ui: 'action',
               //text: "Back",
               height: 40,
               width: 47,

               html: '<div ><img src="resources/icons/WhiteTraceAlertIcon.png" width="41" height="33" alt="Company Name"></div>',
               ui: 'plain',
               handler: function () {
                   Ext.getCmp('mainView').setActiveItem(12);
                   var currentTime = new Date()
                   var month = currentTime.getMonth() + 1;
                   var day = currentTime.getDate();
                   var year = currentTime.getFullYear();
                   LoadListOfTraceAlertFence(year, month);

                 



               

               }

           },



             {
                   xtype: 'button',

                   id: 'SettingAutoFenceAddNewbtn',
                   //ui: 'action',
                   //text: "Add New Virtual Boundry Setting",
                   height: 40,
                   width: 50,

                   html: '<div ><img src="resources/icons/AddNewFenceSettingWhite.png" width="46" height="38" alt="Company Name"></div>',
                   ui: 'plain',
                   handler: function (btn) {
                       Ext.getCmp('mainView').setActiveItem(13);
                       isFirstSettingFenceMapLoad = 'yes';
                       isClickAddNewSettingFenceButton = 'yes';
                       SettingFenceBtnAddNew_or_ListofGeofence = 'BtnAddNew';
                     
                       SettingFencePanelSettingInfoShow();
                       SettingFenceDrawFenceMenuShow();
                     //  SettingFencePanelSettingInfoSaveShow();
                       deleteAllSelectedShapeSettinggeofence();
                       SettingDrawFence_ID = '0';
                       SettingDrawFence_TrackItem = '-1';
                       SettingDrawFence_FencePath = 'null';
                       SettingDrawFence_FenceName = 'Enter Area Name';
                       SettingDrawFence_TimeFrom = '-1';
                       SettingDrawFence_TimeTo = '-1';
                       SettingDrawFence_DaySetting = '-1';
                       SettingDrawFence_Status = '-1';
                       SettingDrawFence_Length = '-1';
                       Ext.getCmp('SettingDrawFence_ID').setValue(SettingDrawFence_ID);
                       Ext.getCmp('SettingDrawFence_TrackItem_loadDB').setHidden(true);
                       Ext.getCmp('SettingDrawFence_TrackItem').setValue(SettingDrawFence_TrackItem);
                       Ext.getCmp('SettingDrawFence_FencePath').setValue(SettingDrawFence_FencePath);                    
                       Ext.getCmp('SettingDrawFence_FenceName').setValue(SettingDrawFence_FenceName);
                       Ext.getCmp('SettingDrawFence_TimeFrom').setValue(SettingDrawFence_TimeFrom);
                       Ext.getCmp('SettingDrawFence_TimeTo').setValue(SettingDrawFence_TimeTo);
                       Ext.getCmp('SettingDrawFence_DaySetting').setValue(SettingDrawFence_DaySetting);
                       Ext.getCmp('SettingDrawFence_Status').setValue(SettingDrawFence_Status);
                       Ext.getCmp('SettingDrawFence_Length').setValue(SettingDrawFence_Length);
                       Ext.getCmp('btnSettingFencePanelSettingInfoSaveEdit').setHidden(true);
                       Ext.getCmp('btnSettingFencePanelSettingInfoSaveAdd').setHidden(false);
                   
                     

                   



                       Ext.Viewport.mask({ xtype: 'loadmask', message: 'Re-Center  Map..' });
                       //mapgeofenceSettinggeofence.setZoom(5);

                     





                       var task = Ext.create('Ext.util.DelayedTask', function () {

                           Ext.getStore('TrackingItemList').getProxy().setExtraParams({
                               AccNo: GetCurrentUserAccountNo(),
                           });
                           Ext.StoreMgr.get('TrackingItemList').load();
                           setTimeout(function () {

                             
                               Ext.getStore('TrackingItemList').getProxy().setExtraParams({
                                   AccNo: GetCurrentUserAccountNo(),
                               });
                               Ext.StoreMgr.get('TrackingItemList').load();
                              
                           }, 500);

                        
                         
                           Ext.Viewport.unmask();
                       });
                       task.delay(1000);


                        // This will trigger a zoom_changed on the map
                       mapgeofenceSettinggeofence.setCenter(new google.maps.LatLng(9.340446, 110.298495));
                     //  var center = new google.maps.LatLng(18.723921, 90.062886);
                       // using global variable:
                     //  mapgeofenceSettinggeofence.panTo(center);
                       //bounds.extend(ctr);
                       //mapgeofenceSettinggeofence.fitBounds(bounds);
                    mapgeofenceSettinggeofence.setZoom(4);

                   }

               },







        ]


},

            {
                xtype: 'container',

                //height: '100%',
                //itemId: 'bottom',
                //width: '100%',
                layout: {
                    type: 'hbox'
                },
                items: [
             {
                 xtype: 'label',
                 // id: 'Queue_GetDetailQueueLabel',
                 html: 'This is an auto virtual boundary that enabled by time range'
             },

             //{
             //    xtype: 'spacer',

             //},

             //{
             //    xtype: 'button',
             //    Id: 'btnAddNewSettingDrawFence',
             //    text: 'Add Setting',
             //    ui: 'action',

             //    iconCls: 'reply',

             //    height: 35,
             //    width: 135,

             //   // html: '<div ><img src="resources/icons/drawpolyline.png" width="45" height="45" alt="Company Name"></div>',
             //    //ui:'round'
             //  //  ui: 'plain',
             //    handler: function (btnbtnAddNewSettingDrawFence) {


             //    }


             //},
                ]
            },
            {
                xtype: 'list',
                flex: 1,
                store: 'AutoFenceTimerGetByAcc',
                id: 'listgeofenceitemedsettinggeofence',
                mode: 'SINGLE',
                itemTpl: '<div class="myContent">' +
                   '<div><b>Kid Name:</b><i>{TrackItem}</i></div>' +
                   '<div><b>Area:</b><i>{FenceAreaName}</i></div>' +
                    '<div><b>Active Virtual Boundary Time:</b><i>{TimeFromConverted}-{TimeToConverted}</i></div>' +
                    '<div><b>Status:</b><i>{Status}</i></div>' +
                     //  '<div>{GPSSimNumber}</div>' +
                    '<div style="display: none;">{ID}</div>' +

                   '</div>',
                height: '100%',
                listeners: {
                    //  select: function (list, records) {
                    //  onItemDisclosure: function (record, btn, index) {
                    itemsingletap: function (list, idx, target, records, evt) {
                        // SingleTrackID = (records.get('TrackID'));
                        // trackingItems = (records.get('TrackItem'));
                        // DeviceID = (records.get('DeviceID'));

                        // Ext.getStore('singlesignalstore').getProxy().setExtraParams({
                        //     TrackID: SingleTrackID,
                        //     AccountNo: AAccountNo
                        // });
                        // Ext.StoreMgr.get('singlesignalstore').load();
                        // TrackItem, TrackID, AccountNo, FencePath, ShapeType, FenceAreaName, TimeFrom, TimeTo, DaySetting, Status


                      
                        SettingFenceBtnAddNew_or_ListofGeofence = 'ListofGeofence';
                        Ext.getCmp('mainView').setActiveItem(13);
                        var ID = (records.get('ID'));
                        var TrackItem = (records.get('TrackItem'));
                        var TrackID = (records.get('TrackID'));
                        var ImeiNo = (records.get('DeviceID'));
                        
                        var AccountNo = (records.get('AccountNo'));
                        var FencePath = (records.get('FencePath'));
                        var ShapeType = (records.get('ShapeType'));
                        var FenceAreaName = (records.get('FenceAreaName'));
                        var TimeFrom = (records.get('TimeFrom'));
                        var TimeTo = (records.get('TimeTo'));
                        var DaySetting = (records.get('DaySetting'));
                        var Status = (records.get('Status'));
                        var FenceLength = (records.get('FenceLength'));
                        isClickAddNewSettingFenceButton = 'no';
                        _CurrentImeiNo = ImeiNo;

                        SettingDrawFence_ID = ID;
                        SettingDrawFence_TrackID = TrackID;
                         SettingDrawFence_TrackItem = TrackItem;
                         SettingDrawFence_FencePath = FencePath;
                         SettingDrawFence_FenceName = FenceAreaName;
                         SettingDrawFence_TimeFrom = TimeFrom;
                         SettingDrawFence_TimeTo = TimeTo;
                         SettingDrawFence_DaySetting = DaySetting;
                         SettingDrawFence_Status = Status;
                         SettingDrawFence_Length = FenceLength;
                        

                        loadSettingFenceDrawMap(ID, TrackItem, TrackID, AccountNo, FencePath, ShapeType, FenceAreaName, TimeFrom, TimeTo, DaySetting, Status, FenceLength);


                        SettingFencePanelSettingInfoShow();
                        SettingFenceDrawFenceMenuShow();



                        setTimeout(function () {
                            list.deselectAll();
                            Ext.getCmp('btnSettingFencePanelSettingInfoSaveEdit').setHidden(false);
                            Ext.getCmp('btnSettingFencePanelSettingInfoSaveAdd').setHidden(true);
                        }, 500);
                    },
                    deselect: function (list, records) {
                        // console.log(records.get('DeviceID'));
                        var value_to_remove = records.get('DeviceID');
                        trackingid.splice(trackingid.indexOf(value_to_remove), 1);


                    }
                },

            }
        ]
    }

});



function loadListOfGeofence()
{


    Ext.getStore('AutoFenceTimerGetByAcc').getProxy().setExtraParams({
        AccNo: GetCurrentUserAccountNo(),
    });
    Ext.StoreMgr.get('AutoFenceTimerGetByAcc').load();

    Ext.Viewport.mask({ xtype: 'loadmask', message: 'Loading Data...Please Wait' });
    var task = Ext.create('Ext.util.DelayedTask', function () {

        Ext.getStore('AutoFenceTimerGetByAcc').getProxy().setExtraParams({
            AccNo: GetCurrentUserAccountNo(),
        });
        Ext.StoreMgr.get('AutoFenceTimerGetByAcc').load();
        var myStore = Ext.getStore('AutoFenceTimerGetByAcc');
        var count = myStore.getCount();
        

       
        _CountDevice = count;
        Ext.getCmp('mainView').setActiveItem(4);

        Ext.getCmp('btnSettingFenceCountRecord').setHtml('<font size="2" color="white">' + count + ' Record.(s)</font>');





        Ext.Viewport.unmask();
    });
    task.delay(1000);
}