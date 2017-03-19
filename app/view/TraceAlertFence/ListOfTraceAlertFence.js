var isFirstLoadListOfTraceAlertFence = 'yes';
var TrackIDAlert;
var DateAlert;
var TrackItemAlert;
var GeofenceID ;
var FenceAreaName;
var TimeAlert;
var ActiveVBoundaryTime;
var Fencelength;

Ext.define('MyGPS.view.TraceAlertFence.ListOfTraceAlertFence', {
    extend: 'Ext.Panel', //Ext.navigation.View
    xtype: 'ListOfTraceAlertFence',
    id: 'listTraceAlertFenceID',
    requires: [
        'Ext.dataview.List',
        'Ext.data.Store'
    ],
    zIndex:20,
    config: {
        style: ' background-color:white;',
        layout: 'vbox', //  add a layout
        items:
        [


            {
                xtype: 'toolbar',
                title: '<font size="4" color="white">V.Boundary Trace Alert</font>',
                docked: 'top',
                id: 'toolbarListOfTraceAlertFenceTop',
                items:
                       [
                           {
                               xtype: 'button',
                               id: 'btnListOfTraceAlertFenceHome',
                               iconCls: 'home',
                               ui: 'plain',
                               handler: function () {

                                   Ext.getCmp('mainView').setActiveItem(1);
                                   startChangeBackground('start');
                               }
                           },
                             {
                                 xtype: 'spacer'
                             },
                                       //{
                                       //    xtype: 'button',
                                       //    id: 'btnListOfTraceAlertFenceAccInfo',
                                       //    html: '<div ><img src="resources/icons/MainMenuPictureProfile.png" width="45" height="45" alt="Company Name"></div>',
                                       //    ui: 'plain',
                                       //    handler: function () {

                                       //    }
                                       //},
                       ]
            },
                {


                    xtype: 'toolbar',
                    // xtype: 'titlebar',
                    docked: 'bottom',

                    items: [
                            {


                                xtype: 'button',
                                id: 'btnListOfTraceAlertFenceCountRecord',
                              
                               html: '<font size="2" color="white">0 Record</font>',
                                ui: 'plain',
                                handler: function () {

                                    Ext.getCmp('mainView').setActiveItem(1);

                                }
                            },

                          {
                              xtype: 'spacer'
                          },
                         {
                      
                   
                             xtype: 'button',
                             id: 'btnListOfTraceAlertFenceBack',
                             height: 40,
                             width: 40,
                             html: '<div ><img src="resources/icons/WhiteBackIcon.png" width="30" height="30" alt="Company Name"></div>',
                             ui: 'plain',
                             handler: function () {
                               
                                 Ext.getCmp('mainView').setActiveItem(1);

                             }
                         },
                

                        
                    ]


                },

            {
                xtype: 'container',
                layout: {
                    type: 'vbox'
                },
                items: [
             {
                 xtype: 'label',
                 // id: 'Queue_GetDetailQueueLabel',
                 html: '<u><b>Trace Alert Out Of Virtual Boundary</b></u>'
             },
             {
                 xtype: 'container',
                // width:'100%',
                 //style: 'background-color: transparent;',
                 layout: {
                     type: 'hbox',                    
                 },
                 items: [

                                           {
                                               xtype: 'datepickerfield',
                                               id: 'ListOfTraceAlertFenceYearDate',
                                               destroyPickerOnHide: true,
                                               label: 'Year',
                                                width: 180,
                                               //   name: 'Queue_GetDetailQueue',
                                               // dateFormat: "d/m/Y",
                                               dateFormat: "Y",
                                               clearIcon: true,
                                               //  dateFormat: "Y-m-d",



                                               value: new Date(),
                                               //picker: {
                                               //    yearFrom: 1900
                                               //},
                                               picker:{xtype:'datepicker', slotOrder:["year"],},
                                               listeners: {
                                                   change: function () {
                                                       console.log(isFirstLoadListOfTraceAlertFence);
                                                     
                                                       if (isFirstLoadListOfTraceAlertFence == 'no') {
                                                           var month = Ext.Date.format(new Date(Ext.getCmp('ListOfTraceAlertFenceMonthDate').getValue()), 'm');
                                                           var year = Ext.Date.format(new Date(Ext.getCmp('ListOfTraceAlertFenceYearDate').getValue()), 'Y');
                                                           console.log(year);
                                                           console.log(month);
                                                           LoadListOfTraceAlertFence(year, month);
                                                       }

                                                   }
                                               }




                                           },
                                             {
                                                 xtype: 'datepickerfield',
                                                 id: 'ListOfTraceAlertFenceMonthDate',
                                                 destroyPickerOnHide: true,
                                                 label: 'Month',
                                                 labelWidth:70,
                                                 width: 180,
                                                 //   name: 'Queue_GetDetailQueue',
                                                 // dateFormat: "d/m/Y",
                                                 dateFormat: "m",
                                                 clearIcon: true,
                                                 //  dateFormat: "Y-m-d",



                                                 value: new Date(),
                                                 //picker: {
                                                 //    yearFrom: 1900
                                                 //},
                                                 picker: { xtype: 'datepicker', slotOrder: ["month"], },
                                                 listeners: {
                                                     change: function () {

                                                         // dateFromFormated = Ext.Date.format(new Date(Ext.getCmp('TrackingHistoryCreateriaFromDate').getValue()), 'Y-m-d');
                                                         console.log(isFirstLoadListOfTraceAlertFence);
                                                         if (isFirstLoadListOfTraceAlertFence == 'no')
                                                         {
                                                             var month = Ext.Date.format(new Date(Ext.getCmp('ListOfTraceAlertFenceMonthDate').getValue()), 'm');
                                                             var year = Ext.Date.format(new Date(Ext.getCmp('ListOfTraceAlertFenceYearDate').getValue()), 'Y');
                                                             console.log(year);
                                                             console.log(month);
                                                             LoadListOfTraceAlertFence(year, month);
                                                         }
                                                      
                                                         //  _trackingHistoryMapConfig_dateFromFormated = Ext.Date.format(new Date(Ext.getCmp('TrackingHistoryCreateriaFromDate').getValue()), 'Y-m-d');


                                                     }
                                                 }




                                             },
                                             

                 ]
             },
              {
                  xtype: 'label',
                  // id: 'Queue_GetDetailQueueLabel',
                  //  width:'100%',
                  margin:'-15 0 0 0',
                  html: '<u>_________________________________________________________________________________________________</u>'
              },
             //{
             //     xtype: 'panel',
             //     width: '100%',
             //     id: 'TraceAlertHeaderMobile',
             //     hidden: true,
             //     // docked: 'top',
             //     style: 'background-color:black; color: floralwhite;',
             //     height: 0,
             //     items: [
             //         {
             //             html: '<div class="x-list-item x-stretched x-list-item-tpl x-list-item-relative x-item-selected"><div class="x-innerhtml" style="padding: 12px;"><span style="font-family: Arial; text-transform:uppercase;"><div style="overflow:auto;width:100%;height:100%;font-size: 65%;"><div style="float:left;width:30%"><b>NAME</div><div style="float:left;width:28%"><b>DATE</b></div ><div style="float:left;width:3%"><b>ID</b></div></div></div></div>'
             //         }
             //     ]
             // },
             //{
             //    xtype: 'panel',
             //    width: '100%',
             //    id: 'TraceAlertHeaderPC',
             //    hidden: true,
             //    // docked: 'top',
             //    style: 'background-color:black; color: floralwhite;',
             //    height: 0,
             //    items: [
             //        {
             //            html: '<div class="x-list-item x-stretched x-list-item-tpl x-list-item-relative x-item-selected"><div class="x-innerhtml" style="padding: 12px;"><span style="font-family: Arial; text-transform:uppercase;"><div style="overflow:auto;width:100%;height:100%;font-size: 65%;"><div style="float:left;width:7%"><b>NAME</div><div style="float:left;width:6%"><b>DATE</b></div ><div style="float:left;width:3%"><b>ID</b></div></div></div></div>'
             //        }
             //    ]
             //},


                ]
            },





         {
             xtype: 'list',
             flex: 1,
             store: 'TraceAlertHistoryGetByAccNoYearMonth',
             id: 'TraceAlertHistoryGetByAccNoYearMonthID',
             mode: 'SINGLE',
             itemTpl: '<div class="myContent">' +
                  '<div style="display: none;><b>Accont No:</b><i>{AccountNo}</i></div>' +
                    '<div style="display: none;><b>Track ID:</b><i>{TrackID}</i></div>' +
                 '<div><b>Kid Name:</b><i>{TrackItem}</i></div>' +
                    '<div><b>Area:</b><i>{FenceAreaName}</i></div>' +
                       '<div><b>Active Fence Time:</b><i>{TimeFrom}-{TimeTo}</i></div>' +
                '<div><b>Alert Date:</b><i>{TrackingItem_Alert}</i></div>' +             
                  '<div><b>Alert Time Started:</b><i>{TimeAlert}</i></div>' +
                // '<div><b>Active Fence Time:</b><i>{TimeFromConverted}-{TimeToConverted}</i></div>' +
                // '<div><b>Status:</b><i>{Status}</i></div>' +
                  //  '<div>{GPSSimNumber}</div>' +
                 '<div style="display: none;">{ID}</div>' +

                '</div>',
             height: '100%',
             listeners: {
                 itemsingletap: function (list, idx, target, records, evt) {

                     Ext.getCmp('mainView').setActiveItem(14);
                      TrackIDAlert = records.get('TrackID');
                      DateAlert = records.get('TrackingItem_Alert');
                      TrackItemAlert = records.get('TrackItem');
                      GeofenceID = records.get('CreatedGeofenceID');
                      FenceAreaName = records.get('FenceAreaName');
                      TimeAlert = records.get('TimeAlert');
                      ActiveVBoundaryTime = records.get('TimeFrom') + '-' + records.get('TimeTo');
                      //Fencelength = records.get('Fencelength');
                     Ext.getStore('TraceAlertHistoryGetByAccNoTrackIDGeofenceID').getProxy().setExtraParams({
                         TrackID: TrackIDAlert,
                         DateFrom: DateAlert,
                         DateTo: DateAlert,
                         geofenceID: GeofenceID,
                     });
                     Ext.StoreMgr.get('TraceAlertHistoryGetByAccNoTrackIDGeofenceID').load();
                     Ext.Viewport.mask({ xtype: 'loadmask', message: 'Ploting Point.. Please Wait..' });
                     var task = Ext.create('Ext.util.DelayedTask', function () {
                         Ext.getStore('TraceAlertHistoryGetByAccNoTrackIDGeofenceID').getProxy().setExtraParams({
                             TrackID: TrackIDAlert,
                             DateFrom: DateAlert,
                             DateTo: DateAlert,
                             geofenceID: GeofenceID,
                         });
                         Ext.StoreMgr.get('TraceAlertHistoryGetByAccNoTrackIDGeofenceID').load();
                         TraceAlertFencePlotingHistoryXypath(TrackIDAlert, DateAlert, DateAlert, TrackItemAlert, GeofenceID);




                         Ext.Viewport.setMasked(false);
                     });
                     task.delay(2000);

                     setTimeout(function () {
                         list.deselectAll();
                         TraceAlertFenceHistoryInfoShow();
                      
                       

                     }, 500);
                 },
                 deselect: function (list, records) {
                     // console.log(records.get('DeviceID'));
                     //var value_to_remove = records.get('DeviceID');
                     //trackingid.splice(trackingid.indexOf(value_to_remove), 1);


                 }
             },

         },
        ]
    }

});



function LoadListOfTraceAlertFence(year,month)
{
    console.log('LoadListOfTraceAlertFence');
    console.log(year);
    console.log(month);
    Ext.getStore('TraceAlertHistoryGetByAccNoYearMonth').getProxy().setExtraParams({
        AccNo: GetCurrentUserAccountNo(),
        Year: year,
        Month: month,
    });
    Ext.StoreMgr.get('TraceAlertHistoryGetByAccNoYearMonth').load();


    Ext.Viewport.mask({ xtype: 'loadmask', message: 'Loading Data..' });

    var task = Ext.create('Ext.util.DelayedTask', function () {

        setTimeout(function () {


            Ext.getStore('TraceAlertHistoryGetByAccNoYearMonth').getProxy().setExtraParams({
                AccNo: GetCurrentUserAccountNo(),
                Year: year,
                Month: month,
            });
            Ext.StoreMgr.get('TraceAlertHistoryGetByAccNoYearMonth').load();
            var myStoreTraceAlert = Ext.getStore('TraceAlertHistoryGetByAccNoYearMonth');
            var count = myStoreTraceAlert.getCount();
            Ext.getCmp('btnListOfTraceAlertFenceCountRecord').setHtml('<font size="3" color="white">'+ count + ' Records</font>');

        }, 500);
      
        Ext.Viewport.unmask();
    });
    task.delay(1000);

}