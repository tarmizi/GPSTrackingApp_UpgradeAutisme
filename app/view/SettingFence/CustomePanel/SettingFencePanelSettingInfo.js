


var _settingFencePanelSettingInfo;

Ext.define('MyGPS.view.SettingFence.CustomePanel.SettingFencePanelSettingInfo', {

});




function SettingFencePanelSettingInfo() {

    _settingFencePanelSettingInfo = Ext.create('Ext.Panel',


        {


        requires: [
        'Ext.dataview.List',
        'Ext.data.Store'
        ],


        ////xtype: 'panel',
            // style: 'background-color:#57A0DC',
        height: 200,
            //width: 320,
            //  centered: true,
            // height: '10%',
        width: '100%',
            // centered: false,
        id: 'SettingFencePanelSettingInfoID',
        draggable: false,
        scrollable: true,
        right: 0,
        bottom: 0,
        showAnimation: {
            type: 'slide',
            direction: 'up',
            duration: 150,
            easing: 'ease-out'
        },
        hideAnimation: {
            type: null,
            duration: null,
            easing: null

        },
            ////style: 'background-color: #57A0DC;',


            style: 'background-color: #57A0DC;',















        items: [

        
            {

                xtype: 'toolbar',
               // title: 'Boundary Info',
                docked: 'top',
                height:30,
                id: 'SettingFencePanelSettingInfoTop',
                //  hidden:true,
                items:
                       [


                           {
                               xtype: 'button',

                               id: 'btnSettingFencePanelSettingInfoMockText',
                               text: '<font size="2" color="white"><u>Virtual Boundary Setting</u></font>',
                             
                               // html: '<div ><img src="resources/icons/hideGeofence.png" width="33" height="23" alt="Company Name"></div>',
                               ui: 'plain',
                               handler: function () {
                                  
                               }



                           },

                           {
                               xtype:'spacer'
                           },



                           {
                               xtype: 'button',

                               height: 43,
                               width:43,
                               id: 'btnSettingFencePanelSettingInfoBack',
                            //   text: '<font size="2" color="white">Virtual Boundary Setting</font>',

                               html: '<div ><img src="resources/icons/WhiteBackIcon.png" width="33" height="33" alt="Company Name"></div>',
                               ui: 'plain',
                               handler: function () {
                                   var ImeiNo = public_ImeiNo;
                                   DeletemarkerSettingFenceMap(ImeiNo);
                                   SettingFenceDrawFenceMenuHide();
                                   SettingFencePanelSettingInfoHide();
                                   loadListOfGeofence();
                               }



                           },


                           {
                               xtype: 'button',

                               height: 38,
                               width: 38,
                               id: 'btnSettingFencePanelSettingInfoSaveEdit',
                               //   text: '<font size="2" color="white">Virtual Boundary Setting</font>',

                               html: '<div ><img src="resources/icons/WhiteSaveIcon.png" width="28" height="28" alt="Company Name"></div>',
                               ui: 'plain',
                               handler: function () {
                                   var ID = Ext.getCmp('SettingDrawFence_ID').getValue();

                                   var TrackID = SettingDrawFence_TrackID;
                                   //Ext.getCmp('SettingDrawFence_AccountNo').setValue(AAccountNo);
                                   var AccountNo = GetCurrentUserAccountNo();
                                   var FencePath = Ext.getCmp('SettingDrawFence_FencePath').getValue();
                                   var ShapeType = Ext.getCmp('SettingDrawFence_ShapeType').getValue();
                                   var FenceAreaName = Ext.getCmp('SettingDrawFence_FenceName').getValue();
                                   var TimeFrom = parseInt(Ext.getCmp('SettingDrawFence_TimeFrom').getValue());
                                   var TimeTo = parseInt(Ext.getCmp('SettingDrawFence_TimeTo').getValue());
                                   var DaySetting = Ext.getCmp('SettingDrawFence_DaySetting').getValue();
                                   var Status = Ext.getCmp('SettingDrawFence_Status').getValue();
                                   var FenceLength = Ext.getCmp('SettingDrawFence_Length').getValue();
                                   //  alert(checkDuplicateTimeToStatus);
                                   Ext.Viewport.mask({ xtype: 'loadmask', message: 'Saving Edit..Please Wait' });



                                   var task = Ext.create('Ext.util.DelayedTask', function () {



                                       //  alert(TimeFrom +'----'+ TimeTo);
                                       Ext.Viewport.unmask();
                                       if (TrackID == '-1')
                                       { Ext.Msg.alert('ERROR', 'Track Item Not Valid !'); return; }
                                       else if (AccountNo == '')
                                       { Ext.Msg.alert('ERROR', 'Account No Not Valid !'); return; }
                                       else if (FencePath == 'null')
                                       { Ext.Msg.alert('ERROR', 'Fence Path Not Valid !'); return; }
                                       else if (FenceAreaName == 'Enter Fence Area Name' || FenceAreaName == '')
                                       { Ext.Msg.alert('ERROR', 'Fence Area Name Not Valid !'); return; }
                                       else if (TimeFrom == '-1')
                                       { Ext.Msg.alert('ERROR', 'TimeFrom Not Valid !'); return; }
                                       else if (TimeFrom >= TimeTo)
                                       { Ext.Msg.alert('ERROR', 'TimeFrom Not Valid ,TimeFrom >= TimeTo !'); return; }
                                       else if (TimeTo == '-1')
                                       { Ext.Msg.alert('ERROR', 'TimeTo Not Valid !'); return; }
                                       else if (TimeTo <= TimeFrom)
                                       { Ext.Msg.alert('ERROR', 'TimeTo Not Valid !,TimeTo <= TimeFrom'); return; }
                                           //  else if (DaySetting == '-1')
                                           //{ Ext.Msg.alert('ERROR', 'Day Setting Not Valid !'); return; }
                                       else if (Status == '-1')
                                       { Ext.Msg.alert('ERROR', 'Fence Status Not Valid !'); return; }
                                       else if (FenceLength == '-1')
                                       { Ext.Msg.alert('ERROR', 'FenceLength Not Valid !'); return; }

                                       else
                                       {
                                           
                                           AutoFenceTimerInsertUpdate(ID, 'IDK', TrackID, AccountNo, FencePath, ShapeType, FenceAreaName, TimeFrom, TimeTo, DaySetting, Status, FenceLength);

                                       }

                                       // InsertUpdateSetting(AAccountNo, 'null', Ext.getCmp('SelectedMarker').getValue(), Ext.getCmp('PanMapAfterPointChange').getValue(), Ext.getCmp('AttachedLabelOnMarker').getValue(), Ext.getCmp('Geo_Setting_CIGPS').getValue());

                                   });
                                   task.delay(1000);

                               }




                           },




                           {
                               xtype: 'button',

                               height: 38,
                               width: 38,
                               id: 'btnSettingFencePanelSettingInfoSaveAdd',
                               //   text: '<font size="2" color="white">Virtual Boundary Setting</font>',

                               html: '<div ><img src="resources/icons/WhiteSaveIcon.png" width="28" height="28" alt="Company Name"></div>',
                               ui: 'plain',
                               handler: function () {
                                   var ID = Ext.getCmp('SettingDrawFence_ID').getValue();
                                 
                                   var TrackID = Ext.getCmp('SettingDrawFence_TrackItem').getValue();
                                   //Ext.getCmp('SettingDrawFence_AccountNo').setValue(AAccountNo);
                                   var AccountNo = GetCurrentUserAccountNo();
                                   var FencePath = Ext.getCmp('SettingDrawFence_FencePath').getValue();
                                   var ShapeType = Ext.getCmp('SettingDrawFence_ShapeType').getValue();
                                   var FenceAreaName = Ext.getCmp('SettingDrawFence_FenceName').getValue();
                                   var TimeFrom = parseInt(Ext.getCmp('SettingDrawFence_TimeFrom').getValue());
                                   var TimeTo = parseInt(Ext.getCmp('SettingDrawFence_TimeTo').getValue());
                                   var DaySetting = Ext.getCmp('SettingDrawFence_DaySetting').getValue();
                                   var Status = Ext.getCmp('SettingDrawFence_Status').getValue();
                                   var FenceLength = Ext.getCmp('SettingDrawFence_Length').getValue();
                                   //  alert(checkDuplicateTimeToStatus);
                                   Ext.Viewport.mask({ xtype: 'loadmask', message: 'Saving..Please Wait' });



                                   var task = Ext.create('Ext.util.DelayedTask', function () {



                                       //  alert(TimeFrom +'----'+ TimeTo);
                                       Ext.Viewport.unmask();
                                       if (TrackID == '-1')
                                       { Ext.Msg.alert('ERROR', 'Track Item Not Valid !'); return; }
                                       else if (AccountNo == '')
                                       { Ext.Msg.alert('ERROR', 'Account No Not Valid !'); return; }
                                       else if (FencePath == 'null')
                                       { Ext.Msg.alert('ERROR', 'Fence Path Not Valid !'); return; }
                                       else if (FenceAreaName == 'Enter Fence Area Name' || FenceAreaName == '')
                                       { Ext.Msg.alert('ERROR', 'Fence Area Name Not Valid !'); return; }
                                       else if (TimeFrom == '-1')
                                       { Ext.Msg.alert('ERROR', 'TimeFrom Not Valid !'); return; }
                                       else if (TimeFrom >= TimeTo)
                                       { Ext.Msg.alert('ERROR', 'TimeFrom Not Valid ,TimeFrom >= TimeTo !'); return; }
                                       else if (TimeTo == '-1')
                                       { Ext.Msg.alert('ERROR', 'TimeTo Not Valid !'); return; }
                                       else if (TimeTo <= TimeFrom)
                                       { Ext.Msg.alert('ERROR', 'TimeTo Not Valid !,TimeTo <= TimeFrom'); return; }
                                           //  else if (DaySetting == '-1')
                                           //{ Ext.Msg.alert('ERROR', 'Day Setting Not Valid !'); return; }
                                       else if (Status == '-1')
                                       { Ext.Msg.alert('ERROR', 'Fence Status Not Valid !'); return; }
                                       else if (FenceLength == '-1')
                                       { Ext.Msg.alert('ERROR', 'FenceLength Not Valid !'); return; }

                                       else
                                       {
                                           //Ext.getStore('AutoFenceTimerGetByAcc').getProxy().setExtraParams({
                                           //    AccNo: AAccountNo,
                                           //});
                                           //Ext.StoreMgr.get('AutoFenceTimerGetByAcc').load();
                                           AutoFenceTimerInsertUpdate(ID, 'IDK', TrackID, AccountNo, FencePath, ShapeType, FenceAreaName, TimeFrom, TimeTo, DaySetting, Status, FenceLength);

                                       }

                                       // InsertUpdateSetting(AAccountNo, 'null', Ext.getCmp('SelectedMarker').getValue(), Ext.getCmp('PanMapAfterPointChange').getValue(), Ext.getCmp('AttachedLabelOnMarker').getValue(), Ext.getCmp('Geo_Setting_CIGPS').getValue());

                                   });
                                   task.delay(1000);

                               }
                               



                           },
                             
                               {
                                   xtype: 'button',

                                   height: 43,
                                   width: 43,
                                   id: 'btnSettingFencePanelSettingInfoSaveHide',
                                   //   text: '<font size="2" color="white">Virtual Boundary Setting</font>',
                                   
                                   html: '<div ><img src="resources/icons/WhiteShrinkIcon.png" width="33" height="33" alt="Company Name"></div>',
                                   ui: 'plain',
                                   handler: function () {
                                       SettingFencePanelSettingInfoHide();
                                     
                                   }



                               },
                       ]

            },

                    
                           
                         

                                  //{
                                  //    xtype: "button",
                                  //    ui: "action",
                                  //    text: "Boundary Information",
                                     
                                  //    handler: function () {
                                  //        SettingFencePanelSettingInfoHide();
                                  //      //  Ext.getCmp('SettingDrawFence_detailPanel').setHidden(true);
                                  //    }
                                  //},
                                   {
                                       xtype: 'textfield',
                                       label: 'ID',
                                       width: '100%',
                                       id: 'SettingDrawFence_ID',
                                       labelWrap: true,
                                   
                                       disabled: true,
                                       // placeHolder: 'C01'

                                   },

                                     {
                                         xtype: 'textfield',
                                         label: 'Tracking Item',
                                         width: '100%',
                                         id: 'SettingDrawFence_TrackItem_loadDB',
                                         labelWrap: true,
                                       
                                         disabled: true,
                                         // placeHolder: 'C01'

                                     },
                                 {
                                     xtype: 'selectfield',

                                     id: 'SettingDrawFence_TrackItem',
                                     label: 'Tracking Item',
                                     labelWrap: true,
                                  //   width: '100%',
                                     //  _DataStore_getTrackID
                                     // labelWidth: '40%',
                                     //store: 'multipletrackingitemselectFID',
                                     store: 'TrackingItemList',
                                     valueField: 'DeviceID',
                                     displayField: 'TrackItem',
                                     //listeners: {
                                     //    change: function () {

                                     //        }


                                     //}

                                 },


                                 {
                                     xtype: 'textfield',
                                     label: 'Virtual Boundary Name',
                                  //   width: '100%',
                                     id: 'SettingDrawFence_FenceName',
                                     labelWrap: true,
                                     // disabled: true,
                                     placeHolder: 'Virtual Boundary Name'

                                 },
                             {

                                 xtype: 'selectfield',
                             //    width: '100%',
                                 label: 'Time From',
                                 id: 'SettingDrawFence_TimeFrom',
                                 options: [
                                      {
                                          text: '05:00-AM',
                                          value: '5'
                                      }, {
                                          text: '06:00-AM',
                                          value: '6'
                                      },
                                 {
                                     text: '07:00-AM',
                                     value: '7'
                                 },
                                     {
                                         text: '08:00-AM',
                                         value: '8'
                                     },
                                 {
                                     text: '09:00-AM',
                                     value: '9'
                                 },
                                  {
                                      text: '10:00-AM',
                                      value: '10'
                                  },
                                 {
                                     text: '11:00-AM',
                                     value: '11'
                                 }, {
                                     text: '12:00-PM',
                                     value: '12'
                                 },
                                 {
                                     text: '01:00-PM',
                                     value: '13'
                                 }, {
                                     text: '02:00-PM',
                                     value: '14'
                                 },
                                 {
                                     text: '03:00-PM',
                                     value: '15'
                                 }, {
                                     text: '04:00-PM',
                                     value: '16'
                                 },
                                 {
                                     text: '05:00-PM',
                                     value: '17'
                                 }, {
                                     text: '06:00-PM',
                                     value: '18'
                                 },
                                 {
                                     text: '07:00-PM',
                                     value: '19'
                                 }, {
                                     text: '08:00-PM',
                                     value: '20'
                                 },
                                 {
                                     text: '09:00-PM',
                                     value: '21'
                                 }, {
                                     text: '10:00-PM',
                                     value: '22'
                                 },
                                 {
                                     text: '11:00-PM',
                                     value: '23'
                                 }, {
                                     text: '12:00-AM',
                                     value: '24'
                                 },
                                 {
                                     text: 'Please Select',
                                     value: '-1'
                                 },


                                 ]
                             },
                                 {

                                     xtype: 'selectfield',
                                   //  width: '100%',
                                     label: 'Time To',
                                     id: 'SettingDrawFence_TimeTo',
                                     options: [

                                           {
                                               text: '05:00-AM',
                                               value: '5'
                                           }, {
                                               text: '06:00-AM',
                                               value: '6'
                                           },
                                 {
                                     text: '07:00-AM',
                                     value: '7'
                                 },
                                     {
                                         text: '08:00-AM',
                                         value: '8'
                                     },
                                 {
                                     text: '09:00-AM',
                                     value: '9'
                                 },
                                  {
                                      text: '10:00-AM',
                                      value: '10'
                                  },
                                 {
                                     text: '11:00-AM',
                                     value: '11'
                                 }, {
                                     text: '12:00-PM',
                                     value: '12'
                                 },
                                 {
                                     text: '01:00-PM',
                                     value: '13'
                                 }, {
                                     text: '02:00-PM',
                                     value: '14'
                                 },
                                 {
                                     text: '03:00-PM',
                                     value: '15'
                                 }, {
                                     text: '04:00-PM',
                                     value: '16'
                                 },
                                 {
                                     text: '05:00-PM',
                                     value: '17'
                                 }, {
                                     text: '06:00-PM',
                                     value: '18'
                                 },
                                 {
                                     text: '07:00-PM',
                                     value: '19'
                                 }, {
                                     text: '08:00-PM',
                                     value: '20'
                                 },
                                 {
                                     text: '09:00-PM',
                                     value: '21'
                                 }, {
                                     text: '10:00-PM',
                                     value: '22'
                                 },
                                 {
                                     text: '11:00-PM',
                                     value: '23'
                                 }, {
                                     text: '12:00-AM',
                                     value: '24'
                                 },
                                 {
                                     text: 'Please Select',
                                     value: '-1'
                                 },


                                     ]
                                 }, {

                                     xtype: 'selectfield',
                                     hidden: true,
                                     width: '100%',
                                     label: 'Days Setting',
                                     id: 'SettingDrawFence_DaySetting',
                                     options: [

                                         {
                                             text: 'EverDays',
                                             value: '1'
                                         },
                                     {
                                         text: 'Exclude Saturday & Sunday',
                                         value: '0'
                                     },

                                     {
                                         text: 'Please Select',
                                         value: '-1'
                                     },

                                     ]
                                 },
                                  {

                                      xtype: 'selectfield',
                                      width: '100%',
                                      label: 'Status',
                                      id: 'SettingDrawFence_Status',
                                      options: [

                                          {
                                              text: 'Active',
                                              value: 'Active'
                                          },
                                      {
                                          text: 'InActive',
                                          value: 'InActive'
                                      },
                                       {
                                           text: 'Please Select',
                                           value: '-1'
                                       },


                                      ]
                                  },


                                   {
                                       xtype: 'textfield',
                                       label: 'SettingDrawFencePath',
                                       width: '100%',
                                       id: 'SettingDrawFence_FencePath',
                                       labelWrap: true,
                                       hidden: true,
                                       // disabled: true,
                                       // placeHolder: 'C01'

                                   },
                                   {
                                       xtype: 'textfield',
                                       label: 'SettingDrawFenceShapeType',
                                       width: '100%',
                                       id: 'SettingDrawFence_ShapeType',
                                       labelWrap: true,
                                       hidden: true,
                                       // disabled: true,
                                       // placeHolder: 'C01'

                                   }, {
                                       xtype: 'textfield',
                                       label: 'SettingDrawFenceLength',
                                       width: '100%',
                                       id: 'SettingDrawFence_Length',
                                       labelWrap: true,
                                       hidden: true,
                                       // disabled: true,
                                       // placeHolder: 'C01'

                                   }, {
                                       xtype: 'textfield',
                                       label: 'SettingDrawFenceAccountNo',
                                       width: '100%',
                                       id: 'SettingDrawFence_AccountNo',
                                       labelWrap: true,
                                       hidden: true,
                                       // disabled: true,
                                       // placeHolder: 'C01'

                                   },
                                      {
                                          xtype: 'button',
                                          id: 'SettingDrawFence_Mockbtn',
                                          ui: 'plain',

                                          text: " ",
                                          handler: function () {

                                          }
                                      },
                                        {
                                            xtype: 'button',
                                            id: 'SettingDrawFence_Mockbtn2',
                                            ui: 'plain',

                                            text: " ",
                                            handler: function () {

                                            }
                                        },
                                          {
                                              xtype: 'button',
                                              id: 'SettingDrawFence_Mockbtn3',
                                              ui: 'plain',

                                              text: " ",
                                              handler: function () {

                                              }
                                          },
                                          {
                                              xtype: 'button',
                                              id: 'SettingDrawFence_Mockbtn4',
                                              ui: 'plain',

                                              text: " ",
                                              handler: function () {

                                              }
                                          },
                                          {
                                              xtype: 'button',
                                              id: 'SettingDrawFence_Mockbtn5',
                                              ui: 'plain',

                                              text: " ",
                                              handler: function () {

                                              }
                                          },
                       
                   

                         

                     ],

         

                  



       


    });

    return _settingFencePanelSettingInfo;
}



function SettingFencePanelSettingInfoShow() {
   Ext.Viewport.remove(_settingFencePanelSettingInfo);
    this.overlay = Ext.Viewport.add(SettingFencePanelSettingInfo());
    this.overlay.show();
}

function SettingFencePanelSettingInfoHide() {
    //  Ext.getCmp('TrackingHistoryMapInfoPanelDetails').setHtml('<table class="tblheadetrackedhistory"><tr > <td class="tdgpsdatahistory"><u>Tracking ID :  N/A </u></td></tr></table>                           <br>   <table class="tblmasterhistory"> <tr> <td class="tdgpslabel">Date From</td> <td class="tdgpslabel"> TODAY :' + now + '</td></tr><tr> <td class="tdgpslabel">Date To</td> <td class="tdgpslabel"> N/A </td></tr><tr> <td class="tdgpslabel">Travel range(KM)</td> <td class="tdgpslabel"> N/A | Point: N/A  </td></tr><tr> <td class="tdgpslabel">Tracking Item</td> <td class="tdgpslabel"> N/A </td></tr></table>');
    _settingFencePanelSettingInfo.hide();
}













function AutoFenceTimerInsertUpdate(ID, TrackItem, TrackID, AccountNo, FencePath, ShapeType, FenceAreaName, TimeFrom, TimeTo, DaySetting, Status, FenceLength) {


    console.log(ID + '//' + TrackItem + '//' + TrackID + '//' + AccountNo + '//' + FencePath + '//' + ShapeType + '//' + FenceAreaName + '//' + TimeFrom + '//' + TimeTo + '//' + DaySetting + '//' + Status + '//' + FenceLength);
    Ext.Ajax.request({

        url: document.location.protocol + '//' + document.location.host + '/API/AutoFenceTimer/AutoFenceTimerInsertUpdate',

        params: {

            ID: ID,
            TrackID: TrackID,
            TrackItem: TrackItem,
            TrackID: TrackID,
            AccountNo: AccountNo,
            FencePath: FencePath,
            ShapeType: ShapeType,
            FenceAreaName: FenceAreaName,
            TimeFrom: TimeFrom,
            TimeTo: TimeTo,
            DaySetting: DaySetting,
            Status: Status,
            FenceLength: FenceLength
        },
        success: function (result, request) {

            Ext.getStore('AutoFenceTimerGetByAcc').getProxy().setExtraParams({
                AccNo: GetCurrentUserAccountNo(),
            });
            Ext.StoreMgr.get('AutoFenceTimerGetByAcc').load();
            Ext.Viewport.mask({ xtype: 'loadmask', message: 'Please Wait...' });
            var task = Ext.create('Ext.util.DelayedTask', function () {
                Ext.getStore('AutoFenceTimerGetByAcc').getProxy().setExtraParams({
                    AccNo: GetCurrentUserAccountNo(),
                });
                Ext.StoreMgr.get('AutoFenceTimerGetByAcc').load();
                CheckingAutoTimerDuplicate(ID, 'IDK', TrackID, AccountNo, FencePath, ShapeType, FenceAreaName, TimeFrom, TimeTo, DaySetting, Status, FenceLength)
                Ext.Viewport.unmask();
            });
            task.delay(1500);
        },
        failure: function (result, request) {
            Ext.Msg.alert('Error', request);
            //if ((messageboxss())) {
            //    Ext.Viewport.add(messageboxss('Error,' + request));
            //}
        }
    });




}
function ReAutoFenceTimerInsertUpdate(ID, TrackItem, TrackID, AccountNo, FencePath, ShapeType, FenceAreaName, TimeFrom, TimeTo, DaySetting, Status, FenceLength) {

    Ext.Ajax.request({

        url: document.location.protocol + '//' + document.location.host + '/API/AutoFenceTimer/AutoFenceTimerInsertUpdate',

        params: {

            ID: ID,
            TrackID: TrackID,
            TrackItem: TrackItem,
            TrackID: TrackID,
            AccountNo: AccountNo,
            FencePath: FencePath,
            ShapeType: ShapeType,
            FenceAreaName: FenceAreaName,
            TimeFrom: TimeFrom,
            TimeTo: TimeTo,
            DaySetting: DaySetting,
            Status: 'InActive-Duplicate',
            FenceLength: FenceLength
        },
        success: function (result, request) {
            Ext.Msg.alert('Save', 'Detected SAME/TWICE Time From And Time to in different fence Area !<br>Time From and Time To only valid in one fence area<br>The Row will be InActive');


        },
        failure: function (result, request) {
            Ext.Msg.alert('Error', request);
            //if ((messageboxss())) {
            //    Ext.Viewport.add(messageboxss('Error,' + request));
            //}
        }
    });




}

function CheckingAutoTimerDuplicate(ID, IDK, TrackID, AccountNo, FencePath, ShapeType, FenceAreaName, TimeFrom, TimeTo, DaySetting, Status, FenceLength) {
    var TimeFrom;
    var TimeTo;
    var Status;
    var AccountNo;
    var checkDuplicate = 'False';
    var IDduplicate;
    var arr = [];
    var arrTimeFrom = [];
    var arrTimeTo = [];
    var ii;
    var lastTimeFrom;
    var lastTimeTo;
    var TimeFromNext;
    var TimeToNext;
    var StatusNext;
    var areaOverlap;
    var TrackIDnext;
    var previousArea;
    var previousTrackID;

    var IDnext;
    var countForCheck = 1;
    var timefromNextActive;
    var timeToActive;
    Ext.getStore('AutoFenceTimerGetByAcc').getProxy().setExtraParams({
        AccNo: GetCurrentUserAccountNo(),
    });
    Ext.StoreMgr.get('AutoFenceTimerGetByAcc').load();
    var myStore = Ext.getStore('AutoFenceTimerGetByAcc');
    var myStore1 = Ext.getStore('AutoFenceTimerGetByAcc');
    var count = myStore.getCount();

    console.log('count is:' + count);
    console.log(ID);



    if (count == 1) {
        Ext.Msg.alert('Success', 'Record has been saved!');
        var modelRecord = myStore.getAt(0);
        Ext.getCmp('SettingDrawFence_ID').setValue(modelRecord.get('ID'));
        return;
    } else
        if (count > 1) {
            for (ii = 0; ii < count - 1; ii++) {
                console.log('ii:' + ii);
                console.log('countForCheck:' + countForCheck);
                var modelRecord = myStore.getAt(ii);
                var modelRecord1 = myStore1.getAt(countForCheck);
                countForCheck = countForCheck + 1;
                TimeFromNext = parseInt(modelRecord1.get('TimeFrom'));
                TimeToNext = modelRecord1.get('TimeTo');
                StatusNext = modelRecord1.get('Status');
                areaOverlap = modelRecord1.get('FenceAreaName');
                IDnext = modelRecord1.get('ID');
                TrackIDnext = modelRecord1.get('TrackID');
                Ext.getCmp('SettingDrawFence_ID').setValue(modelRecord1.get('ID'));

                previousTrackID = modelRecord.get('TrackID');
                AccountNo = modelRecord.get('AccountNo');
                TimeFrom = modelRecord.get('TimeFrom');
                TimeTo = parseInt(modelRecord.get('TimeTo'));
                Status = modelRecord.get('RowStatus');
                IDduplicate = modelRecord.get('ID');
                previousArea = modelRecord.get('FenceAreaName');
                console.log('TimeFromNext:' + TimeFromNext);
                console.log('TimeTo:' + TimeTo);


                //if (Status == 'Active' && StatusNext == 'InActive') {
                //    StatusNext = 'Active';
                //}
                //if (Status == 'InActive' && StatusNext == 'Active') {
                //    Status = 'Active';
                //}
                //if (Status == 'Active' && StatusNext == 'Active') {


                if (previousTrackID != TrackIDnext) {
                    Ext.Msg.alert('Success', 'Record has been saved!');
                    return;
                } else {



                    console.log(IDnext);
                    console.log("StatusNext:" + StatusNext);
                    console.log("Status:" + Status);
                    if (Status == 'Active') {
                        timeToActive = parseInt(TimeTo);

                    }
                    if (StatusNext == 'Active') {
                        timefromNextActive = parseInt(TimeFromNext);


                        if (timefromNextActive < timeToActive) {
                            AutoFenceTimerSetInActive(IDnext, AccountNo);
                            Ext.Msg.alert('Warning !!', 'System detected overlap Time  In Area (' + areaOverlap + ') with Existing area . Please Check your Time From and Time To range ,Data will not be Activated');
                            return;
                        }

                    }



                }
                //  Ext.Msg.alert('Success', 'Record has been saved!');
                // arr.push(AccountNo + TimeFrom + TimeTo + Status);
                //  }

            }


        

            Ext.Msg.alert('Success', 'Record has been saved!');
        }
}




function AutoFenceTimerDeleteOverLapArea(ID, AccountNo) {

    Ext.Ajax.request({

        url: document.location.protocol + '//' + document.location.host + '/API/AutoFenceTimer/AutoFenceTimerDelete',

        params: {

            ID: ID,
            AccountNo: AccountNo,


        },
        success: function (result, request) {

            Ext.getCmp('SettingDrawFence_ID').setValue('0');

        },
        failure: function (result, request) {
            Ext.Msg.alert('Error', request);
            //if ((messageboxss())) {
            //    Ext.Viewport.add(messageboxss('Error,' + request));
            //}
        }
    });
}


function AutoFenceTimerSetInActive(ID, AccountNo) {

    Ext.Ajax.request({

        url: document.location.protocol + '//' + document.location.host + '/API/AutoFenceTimer/AutoFenceTimerInsertUpdate',

        params: {

            ID: ID,
            TrackID: null,
            TrackItem: null,
            TrackID: null,
            AccountNo: AccountNo,
            FencePath: null,
            ShapeType: null,
            FenceAreaName: null,
            TimeFrom: null,
            TimeTo: null,
            DaySetting: null,
            Status: 'InActive-Duplicate',
            FenceLength: null
        },
        success: function (result, request) {

            Ext.getStore('AutoFenceTimerGetByAcc').getProxy().setExtraParams({
                AccNo: AAccountNo,
            });
            Ext.StoreMgr.get('AutoFenceTimerGetByAcc').load();

        },
        failure: function (result, request) {
            Ext.Msg.alert('Error', request);
            //if ((messageboxss())) {
            //    Ext.Viewport.add(messageboxss('Error,' + request));
            //}
        }
    });




}