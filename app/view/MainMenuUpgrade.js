Ext.define('MyGPS.view.MainMenuUpgrade', {
    extend: 'Ext.Container',
    //  extend: 'Ext.Panel',
    xtype: 'mainmenu',
    config: {
        styleHtmlContent: true,
        layout: 'fit',
        //layout: {

        //},
        // style: "background-color: #000033; color:white;",
        style: "background-color: #157fcc; color:white;",

        items: [






            {
                xtype: 'container',
                //  top:100,
                layout: {
                    type: 'vbox',
                    pack: 'left'

                },
                items: [
                    {
                        //xtype: 'button',
                        //id: 'btnMainMenuIconNotification',
                        //height: 55,
                        //width: 55,
                        // html: '<font size="3" color="white">Welcome!<br>Tarmizi@Hotmail.my<br>Last Login:19/3/1983 12:14AM</font>',
                        id: 'MainMenuUserLabel',
                        html: '<font size="3" color="white">Welcome!<br>Tarmizi@Hotmail.my</font>',
                        //ui: 'plain',
                    },
            //{
            //    xtype: 'button',
            //    id: 'btnMainMenuMainMenuTitleicture',
            //    height: 120,
            //    width: 120,
            //    top: 90,
            //    left: 21,
            //    html: '<div ><img src="resources/icons/MainMenuTitleicture.png" width="110" height="110" alt="Company Name"></div>',
            //    ui: 'plain',
            //},

            //            {
            //                top: 110,
            //                left: 135,
            //                html: '<font size="5" color="white">ALZHEMIER GPS Tracking<br>Application v 1.0</font>',


            //            },
                  

                ]
            },

            {
                xtype: 'container',
                //  top:100,
                layout: {
                    type: 'hbox',
                    pack: 'right'

                },
                items: [
                     {
                         xtype: 'button',
                         id: 'btnMainMenuIconPictureProfile',
                         height: 55,
                         width: 55,
                         html: '<div ><img src="resources/icons/MainMenuPictureProfile.png" width="45" height="45" alt="Company Name"></div>',
                         ui: 'plain',
                         handler: function () {

                         }
                     },
                    {
                        xtype: 'button',
                        id: 'btnMainMenuIconNotification',
                        height: 55,
                        width: 55,
                        html: '<div ><img src="resources/icons/Notification.png" width="45" height="45" alt="Company Name"></div>',
                        ui: 'plain',
                    },
                    {
                        xtype: 'button',
                        id: 'btnMainMenuIconNotificationText',
                        height: 25,
                        width: 25,
                        text: '10',
                        //html: '<div ><img src="resources/icons/notificationIcon.png" width="45" height="45" alt="Company Name"></div>',
                        ui: 'decline',
                    }

                ]
            },



            {
                xtype: 'container',
                //  top:100,
                layout: {
                    type: 'vbox',
                    pack: 'center',
                    align: 'center'

                },
                items: [



                     {
                         xtype: 'container',
                        //   top:100,
                         layout: {
                             type: 'hbox',
                             pack: 'center',
                             align: 'center'

                         },


                         items: [


    //{
    //    xtype: 'button',
    //    id: 'btnMainMenuMainMenuTitleicture',
    //    height: 120,
    //    width: 120,
    //    //top: 90,
    //    //left: 21,
    //    html: '<div ><img src="resources/icons/MainMenuTitleicture.png" width="110" height="110" alt="Company Name"></div>',
    //    ui: 'plain',
    //},

                        {
                         //   top: 110,
                            //left: 135,
                            hidden:true,
                            margin:'-70 0 0 10',
                            html: '<font size="3" color="white">MOSTI TRACK AUTISM <br>GPS Tracking Application<br> v 2.0</font>',


                        },
                         ]

                     },















                    {
                        xtype: 'container',
                        //  top:100,
                        layout: {
                            type: 'hbox',
                            pack: 'center',
                            align: 'center'

                        },


                        items:[



                     {
                         xtype: 'button',
                         id: 'btnMainMenuSetVirtualBoundary',
                         //  margin: '0 -60 90 0',

                         height: 110,
                         width: 110,
                         //   html: '<div ><img src="resources/icons/MainMenuHistoryRoute.png" width="90" height="90" alt="Company Name"></div>',
                         html: '<div ><img src="resources/icons/UogradeAutismeIcon/SetVirtualBoundary.png" width="110" height="110" alt="Company Name"></div>',

                         ui: 'plain',

                         handler: function () {
                             isFirstLoadListOfTraceAlertFence = 'no';
                             // ada kat class SettingFenceListOfGeoFence
                             loadListOfGeofence();
                         }

                     },
                     {
                         xtype: 'spacer',
                         width:30
                     },
                      {
                          xtype: 'button',
                          id: 'btnMainMenuMyAccount',
                          //  margin: '0 15 195 0',

                          height: 100,
                          width: 100,
                          //   html: '<div ><img src="resources/icons/MainMenuHistoryRoute.png" width="90" height="90" alt="Company Name"></div>',
                          html: '<div ><img src="resources/icons/UogradeAutismeIcon/MyAccount.png" width="100" height="100" alt="Company Name"></div>',

                          ui: 'plain',
                          handler: function () {
                              SetMyAccountDetailsByAccountNo();
                              Ext.getCmp('mainView').setActiveItem(3);
                          }



                      },
                        ]

                    },
  
  
    {
        xtype: 'container',
      margin:'10 0 0 0',
        layout: {
            type: 'hbox',
            pack: 'center',
            align: 'center'

        },


        items: [



      
            {
                xtype: 'button',
                id: 'btnMainMenuTraceVirtualBoundaryAlert',
                // margin: '0 -215 153 0',

                height: 100,
                width: 100,
                //  margin: '0 -13 220 0',
                html: '<div ><img src="resources/icons/UogradeAutismeIcon/TraceVirtualBoundaryAlert.png" width="100" height="100" alt="Company Name"></div>',

                
             
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
                xtype: 'spacer',
                width: 30
            },
          {
              xtype: 'button',
              id: 'btnMainMenuRealTimeTracking',

              height: 110,
              width: 110,
              //  margin: '0 -13 220 0',
              html: '<div ><img src="resources/icons/UogradeAutismeIcon/RealTimeTracking.png" width="110" height="110" alt="Company Name"></div>',

              ui: 'plain',
              handler: function () {
                  _DataStore_TrackingItemListStore_AccountNo.getProxy().setExtraParams({
                      AccNo: GetCurrentUserAccountNo()

                  });


                  _DataStore_TrackingItemListStore_AccountNo.load({

                      callback: function (record, operation, success) {
                          Ext.Viewport.mask({ xtype: 'loadmask', message: 'Fetching....' });
                          var task = Ext.create('Ext.util.DelayedTask', function () {

                              if (success) {

                                  var store = _DataStore_TrackingItemListStore_AccountNo.getAt(0);

                                  if (store != null) {


                                      var count = _DataStore_TrackingItemListStore_AccountNo.getCount();
                                      Ext.getCmp('MultiTrackingListLabelTop').setHtml('<u>Registered GPS tracking items</u><br><b>Found :' + count + ' Items</b>');
                                      if (count == 1) {

                                          var IMEI_no = store.get('DeviceID');
                                          loadmarkerSingleTrackingMap(IMEI_no);
                                          Ext.getCmp('mainView').setActiveItem(2);



                                          setTimeout(function () {
                                              SingleTrackingWPSListButtonShow();
                                              SingleTrackingMapVirtualFenceMenuShow();

                                          }, 500);





                                      } else if (count > 1) {

                                          Ext.getCmp('mainView').setActiveItem(7);
                                      }
                                  }
                              }
                              else {

                                  Ext.Msg.alert("Failed.!");
                              }


                              Ext.Viewport.setMasked(false);
                          });
                          task.delay(500);
                      }
                  })








                  Ext.getStore('TrackingItemList').getProxy().setExtraParams({
                      AccNo: GetCurrentUserAccountNo(),
                  });
                  Ext.StoreMgr.get('TrackingItemList').load();
                  setTimeout(function () {


                      Ext.getStore('TrackingItemList').getProxy().setExtraParams({
                          AccNo: GetCurrentUserAccountNo(),
                      });
                      Ext.StoreMgr.get('TrackingItemList').load();
                      var myStore = Ext.getStore('TrackingItemList');


                  }, 500);
              }
          },
        ]

    },




     {
         xtype: 'container',
         margin: '10 0 0 0',
         layout: {
             type: 'hbox',
             pack: 'center',
             align: 'center'

         },


         items: [


          {
              xtype: 'button',
              id: 'btnMainMenuLogOut',
              //  margin: '0 -134 115 0',
              height: 90,
              width: 90,
              //  margin: '0 -13 220 0',
              html: '<div ><img src="resources/icons/UogradeAutismeIcon/LogOut.png" width="80" height="80" alt="Company Name"></div>',

              ui: 'plain',
              handler: function () {
                  Ext.getCmp('mainView').setActiveItem(0);
              }
          },
          {
              xtype: 'spacer',
              width: 30
          },
             {
                 xtype: 'button',
                 id: 'btnMainMenuUserManual',
                 // margin: '0 -215 153 0',
                 height: 90,
                 width: 90,
                 html: '<div ><img src="resources/icons/UogradeAutismeIcon/UserManual.png" width="80" height="80" alt="Company Name"></div>',
                 ui: 'plain',
                 handler: function () {

                     //   SettingFenceAddNewfenceShow();
                     isFirstLoadListOfTraceAlertFence = 'no';
                     // ada kat class SettingFenceListOfGeoFence
                     loadListOfGeofence();


                 }
             },

              
         ]

     },

               




  



            

                ]
            },






        ]
    }
});


