
var MainSettinglistrecord;
var _mainSettingModule;
Ext.define('MyGPS.view.Setting.MainSetting', {
    extend: 'Ext.Panel', //Ext.navigation.View
    xtype: 'listMainSetting',
    id: 'listMainSettingID',
    requires: [
        'Ext.dataview.List',
        'Ext.data.Store'
    ],
    config: {
       // style: ' background-color:white;',
        layout: 'vbox', //  add a layout
        items:
        [

            {
                xtype: 'toolbar',
                title: 'Setting',
                id: 'toolbarMainSettingID',
                ui: 'light',
                docked: 'top',
                items: [
                    {
                        xtype: 'button',

                        id: 'btnMainSettingTopHome',
                        //  text: 'Show',
                        iconCls: 'home',
                        // html: '<div ><img src="resources/icons/hideGeofence.png" width="33" height="23" alt="Company Name"></div>',
                        ui: 'plain',
                        handler: function () {

                            Ext.getCmp('mainView').setActiveItem(1);
                            //Ext.Viewport.remove(_value);
                            //_value.hide();

                        }




                    },
                           {
                               xtype: 'spacer'
                           },
                           {
                               xtype: 'button',
                               //right: -7,
                               //top: 1,
                               id: 'btnMainSettingTopAccInfo',
                               html: '<div ><img src="resources/icons/MainMenuPictureProfile.png" width="45" height="45" alt="Company Name"></div>',
                               //  html: '<div ><img src="resources/icons/hideGeofence.png" width="30" height="20" alt="Company Name"></div>',
                               ui: 'plain',
                               handler: function () {



                               }
                           },
                ]
            },

            {



                xtype: 'list',
                itemTpl: '{title}',
                flex: 1,
                data: [{

                    title: '<img src="resources/icons/MainSetting_MapSetting.png" width="130" height="50" alt="Company Name" >',
                    //  selectable: false

                },
                {

                    title: '<img src="resources/icons/MainSetting_MilageCount.png" width="130" height="50" alt="Company Name" >',
                    //  selectable: false

                },
                {

                    title: '<img src="resources/icons/MainSetting_RentalDetails.png" width="130" height="50" alt="Company Name" >',
                    //  selectable: false

                },
                {

                    title: '<img src="resources/icons/MainSetting_iAlertSetting.png" width="130" height="50" alt="Company Name" >',
                    //  selectable: false

                },
              


                ],

                onItemDisclosure: function (record, btn, index) {
                    MainSettinglistrecord = record;
                    if (index == 1) {
                        Setting_TrackingItemList_LoadByAccountNo();
                        _mainSettingModule = 'MilageCount';
                        Ext.Viewport.mask({ xtype: 'loadmask', message: 'Fetching data..Please Wait.' });
                        var task = Ext.create('Ext.util.DelayedTask', function () {
                            if (count_Setting_TrackingItemList_LoadByAccountNo > 1)
                            {
                               
                                Setting_TrackingItemListShow();
                                Ext.getCmp('btnSettingTrackingItemListCount').setText("Found:" + count_Setting_TrackingItemList_LoadByAccountNo + '  items.');
                            } else
                            {
                               
                                MilageCountInfoLoadByAccountNoDeviceID(Setting_TrackingItemList_GetAccountNo(), Setting_TrackingItemList_GetDeviceID());
                                SettingResponderAlert_LoadByAccountNoModule(Setting_TrackingItemList_GetAccountNo(), _mainSettingModule);
                                MilageCountSettingShow();
                            }
                          
                            DeselectMainSettingList();
                            Ext.Viewport.unmask();
                        });
                        task.delay(800);
                       
                     
                       // Setting_TrackingItemListShow();
                        //var countListItem = Setting_TrackingItemList_LoadByAccNo();
                        //alert(countListItem);
                        //Ext.getCmp('mainView').setActiveItem(11);
                       // MilageCountSettingShow();
                    }
                   // alert(index);

                },
                listeners: {

                    select: function (list, record) {
                        MainSettinglistrecord = record;

                    },
                    itemdoubletap: function (dataview, index, target, record, e, eOpts) {
                      
                        if(index==1)
                        {
                            _mainSettingModule = 'MilageCount';
                         Setting_TrackingItemList_LoadByAccountNo();
                         Ext.Viewport.mask({ xtype: 'loadmask', message: 'Fetching data..Please Wait.' });
                         var task = Ext.create('Ext.util.DelayedTask', function () {
                             if (count_Setting_TrackingItemList_LoadByAccountNo > 1) {
                                 
                                
                                 Setting_TrackingItemListShow();
                                 Ext.getCmp('btnSettingTrackingItemListCount').setText("Found:" + count_Setting_TrackingItemList_LoadByAccountNo + '  items.');
                             } else {
                               
                                 MilageCountInfoLoadByAccountNoDeviceID(Setting_TrackingItemList_GetAccountNo(), Setting_TrackingItemList_GetDeviceID());
                                 SettingResponderAlert_LoadByAccountNoModule(Setting_TrackingItemList_GetAccountNo(), _mainSettingModule);
                                 MilageCountSettingShow();
                                
                             }

                             DeselectMainSettingList();
                             Ext.Viewport.unmask();
                         });
                         task.delay(800);
                      
                           // Setting_TrackingItemListShow();
                            //var countListItem = Setting_TrackingItemList_LoadByAccNo();
                            //alert(countListItem);
                            //Ext.getCmp('mainView').setActiveItem(11);
                           // MilageCountSettingShow();
                        }
                        //idxcommands = index + 1;
                        //list.deselect(idxcommands);
                        //return false;

                    },
                    itemtap: function (record, index, item, e) {

                        //  listIndex.push(index);
                        MainSettinglistrecord = record;

                    }
                    //itemsingletap: function (dataview, index, target, record, e, eOpts) {

                    //    //idxcommands = index + 1;
                    //    //list.deselect(idxcommands);
                    //    //return false;

                    //}
                    //select: function (list, model) {
                    //    var value = model.get('title');
                    //    if (model.get('selectable') === false) {
                    //        list.deselect(model);
                    //        return false;
                    //    }


                    //}
                }

            },
            {
                xtype: 'toolbar',
                id: 'toolbarMainSettingIDbottom',
                width: '100%',
                height: 35,
                //   style: _ToolbarMenu_ToolbarDarkColor(),
                layout: {
                    pack: 'right'
                },
                //  ui: 'dark',
                styleHtmlContent: true,
                docked: 'bottom',
                items: [
                    {

                        id: 'btnMainSettingMapBack',
                        width: 65,
                        height: 35,
                        margin:'-12 0 0 0',
                       text:'<font size="2" color="white">Back</font>',
                        ui: 'action',
                      
                       
                        xtype: 'button',
                   

                        handler: function () {

                            Ext.getCmp('mainView').setActiveItem(1);
                           

                        }
                    },
                 



                ]
            },

        ]
    }




});

function DeselectMainSettingList() {
    for (var i = 0; i < 20; i++) {
        MainSettinglistrecord.deselect(i);

    }
        
  
}


function MainSetting_getModule(index)
{
    var Module = '';

    if (index == 1)
    {
        Module = 'MilageCount';
    }



    return Module;
}


