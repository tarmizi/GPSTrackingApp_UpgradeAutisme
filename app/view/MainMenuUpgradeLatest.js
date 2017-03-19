Ext.define('MyGPS.view.MainMenuUpgradeLatest', {
    extend: 'Ext.Container',
    //  extend: 'Ext.Panel',
    xtype: 'mainmenu',
    config: {
        styleHtmlContent: true,
        layout: 'fit',
        //layout: {

        //},
        // style: "background-color: #000033; color:white;",
        //style: "background-color: #157fcc; color:white;",
        id: 'MainMenuUpgradeLatestID',
        style: 'background-image: url("resources/icons/UogradeAutismeIcon/Mosti TrackMenuBackground.jpg"); background-size: 100% 100%;',
        items: [






            {
                xtype: 'container',

                layout: {
                    type: 'vbox',
                    pack: 'left'

                },
                items: [
                    {
                        xtype: 'button',
                        //id: 'btnMainMenuIconNotification',
                        //height: 55,
                        //width: 55,
                        margin: '3 0 0 0',
                        id: 'btnMainMenuBurgerMenu',
                        height: 33,
                        width: 45,
                        //   html: '<div ><img src="resources/icons/MainMenuHistoryRoute.png" width="90" height="90" alt="Company Name"></div>',
                        html: '<div ><img src="resources/icons/UogradeAutismeIcon/AboutUpgrade.png" width="35" height="33" alt="Company Name"></div>',

                        ui: 'plain',

                        handler: function () {
                            LoginInfoPanelShow();
                            Ext.getCmp('loginInfoPanelUserName').setHtml('<font size="5" color="black"><b>' + UserName + '</b></font>');
                            Ext.getCmp('loginInfoPanelLastLogin').setHtml('<font size="3" color="black"><i>' + LastLoginDate + '</i></font>');
                            
                        }


                    },




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
                                          id: 'btnMainMenuIconNotification',
                                          margin: '3 5 0 0',
                                          height: 33,
                                          width: 40,
                                          html: '<div ><img src="resources/icons/UogradeAutismeIcon/Notification.png" width="35" height="33" alt="Company Name"></div>',
                                          ui: 'plain',
                                          handler: function () {
                                            


                                          }
                                      },
                                        {
                                            xtype: 'button',
                                            id: 'btnMainMenuIconNotificationCount',
                                            //hidden:true,
                                            margin: '3 3 0 0',
                                            height: 13,
                                            width: 30,
                                            html: '<font size=1px color=white><b>1</b></font>',
                                            ui: 'decline',
                                            handler: function () {



                                            }
                                        },
                                     

                                  ]
              },





              {
                  xtype: 'container',
                  id:'MainMenuLogoContainer',
                  margin: '-250 0 0 0',
                  layout: {
                      type: 'vbox',
                      pack: 'center',
                      align: 'center'

                  },
                  items: [

                       {
                           xtype: 'button',
                           id: 'btnMainMenuMostiLogo',
                           //  margin: '0 -60 90 0',

                           height: 122,
                           width: 162,
                           //   html: '<div ><img src="resources/icons/MainMenuHistoryRoute.png" width="90" height="90" alt="Company Name"></div>',
                           html: '<div ><img src="resources/icons/ooiweihanLogo12.png" width="152" height="112" alt="Company Name"></div>',

                           ui: 'plain',

                           handler: function () {
                              
                           }

                       },





                          {
                           //   xtype: 'button',
                              id: 'btnMainMenuMostiLogoText',
                              //  margin: '0 -60 90 0',

                              //height: 122,
                              //width: 162,
                              //   html: '<div ><img src="resources/icons/MainMenuHistoryRoute.png" width="90" height="90" alt="Company Name"></div>',
                           //   html: '<div ><img src="resources/icons/ooiweihanLogo12.png" width="152" height="112" alt="Company Name"></div>',
                              html: '<font size=5px color=white><b>A Project Developed for <br>MOSTI Social Innovation<br>Program(MSI)</b></font>',
                              //ui: 'plain',

                              //handler: function () {

                              //}

                          },
                      ]

              },







              
            {
                xtype: 'container',
             id:'MainMenuContainerID',
                //  top:100,
                margin:'230 5 0 0',
                layout: {
                    type: 'vbox',
                    pack: 'center',
                    align: 'center'

                },
                items: [




                    {
                        xtype: 'container',
                       
                        //margin: '-250 0 0 0',
                        layout: {
                            type: 'hbox',
                            pack: 'center',
                            align: 'center'
                        },


                        items: [



                     {
                         xtype: 'button',
                         id: 'btnMainMenuSetVirtualBoundary',
                      
                         height: 62,
                         width: 172,
                     
                         html: '<div ><img src="resources/icons/UogradeAutismeIcon/SetVirtualBoundaryBtn.png" width="162" height="52" alt="Company Name"></div>',

                         ui: 'plain',

                         handler: function () {
                             isFirstLoadListOfTraceAlertFence = 'no';
                             // ada kat class SettingFenceListOfGeoFence
                             stopChangeBackground();
                             loadListOfGeofence();
                         }

                     },
                     //{
                     //    xtype: 'spacer',
                     //    width: 40
                     //},
                      {
                          xtype: 'button',
                          id: 'btnMainMenuMyAccount',
                          //  margin: '0 15 195 0',

                          //height: 162,
                          //width: 172,
                          height: 62,
                          width: 172,
                          //   html: '<div ><img src="resources/icons/MainMenuHistoryRoute.png" width="90" height="90" alt="Company Name"></div>',
                          html: '<div ><img src="resources/icons/UogradeAutismeIcon/MyAccountBtn.png" width="162" height="52" alt="Company Name"></div>',

                          ui: 'plain',
                          handler: function () {
                              SetMyAccountDetailsByAccountNo();
                              stopChangeBackground();
                              Ext.getCmp('mainView').setActiveItem(3);
                          }



                      },
                        ]

                    },


    {
        xtype: 'container',
        //margin: '10 -25 0 0',
        layout: {
            type: 'hbox',
            pack: 'center',
            align: 'center'

        },


        items: [




            {
                xtype: 'button',
                id: 'btnMainMenuVirtualBoundaryNewIcon',
                //margin: '0 -40 0 0',

                height: 62,
                width: 172,
                //  margin: '0 -13 220 0',
                html: '<div ><img src="resources/icons/UogradeAutismeIcon/VirtualBoundaryAlertHistoryBtn.png" width="162" height="52" alt="Company Name"></div>',



                ui: 'plain',
                handler: function () {
                  
                    Ext.getCmp('mainView').setActiveItem(12);
                    var currentTime = new Date()
                    var month = currentTime.getMonth() + 1;
                    var day = currentTime.getDate();
                    var year = currentTime.getFullYear();
                    LoadListOfTraceAlertFence(year, month);
                    isFirstLoadListOfTraceAlertFence = 'no';
                 
                    stopChangeBackground();

                }
            },
            //{
            //    xtype: 'spacer',
            //    width: 75
            //},
          {
              xtype: 'button',
              id: 'btnMainMenuRealTimeTracking',
              //  margin: '0 0 0 -25',
              height: 62,
              width: 172,
              //  margin: '0 -13 220 0',
              html: '<div ><img src="resources/icons/UogradeAutismeIcon/RealTimeTrackingBtn.png" width="162" height="52" alt="Company Name"></div>',

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
                                  stopChangeBackground();
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

        //margin: '-250 0 0 0',
        layout: {
            type: 'hbox',
            pack: 'center',
            align: 'center'
        },


        items: [



     {
         xtype: 'button',
         id: 'btnMainMenuTrackingHistory',

         height: 62,
         width: 172,

         html: '<div ><img src="resources/icons/UogradeAutismeIcon/TrackingHistoryBtn.png" width="162" height="52" alt="Company Name"></div>',

         ui: 'plain',

         handler: function () {
             _trackingHistoryCreteriaSource = 'MainMenu';
             Ext.getCmp('mainView').setActiveItem(5);


             Ext.getStore('TrackingItemList').getProxy().setExtraParams({
                 AccNo: AAccountNo,
             });
             Ext.StoreMgr.get('TrackingItemList').load();
             setTimeout(function () {


                 Ext.getStore('TrackingItemList').getProxy().setExtraParams({
                     AccNo: AAccountNo,
                 });
                 Ext.StoreMgr.get('TrackingItemList').load();
             }, 500);

         }

     },
     //{
     //    xtype: 'spacer',
     //    width: 40
     //},
      {
          xtype: 'button',
          id: 'btnMainMenuLogingOut',
            margin: '-3 0 0 0',

          //height: 162,
          //width: 172,
          height: 55,
          width: 172,
          //   html: '<div ><img src="resources/icons/MainMenuHistoryRoute.png" width="90" height="90" alt="Company Name"></div>',
          html: '<div ><img src="resources/icons/UogradeAutismeIcon/LogOut1Btn.png" width="162" height="45" alt="Company Name"></div>',

          ui: 'plain',
          handler: function () {
              stopClocksingleTrackingMaps();
              stopChangeBackground();
              Ext.getCmp('mainView').setActiveItem(0);
          }



      },
        ]

    },



     //{
     //    xtype: 'container',
         
     //    margin: '10 0 0 0',
     //    layout: {
     //        type: 'hbox',
     //        pack: 'center',
     //        align: 'center'

     //    },


     //    items: [


     //     {
     //         xtype: 'button',
     //         id: 'btnMainMenuUserManual',
     //         //  margin: '0 -134 115 0',
     //         height: 105,
     //         width: 100,
     //         //  margin: '0 -13 220 0',
     //         html: '<div ><img src="resources/icons/UogradeAutismeIcon/UserManual.png" width="90" height="95" alt="Company Name"></div>',

     //         ui: 'plain',
     //         handler: function () {
     //             AttractUserManualShow();
     //         }
     //     },
     //     {
     //         xtype: 'spacer',
     //         width: 40
     //     },
     //        {
     //            xtype: 'button',
     //            id: 'btnMainMenuLogOut',
     //            margin: '-8 0 0 0',
     //            height: 105,
     //            width: 85,
     //            html: '<div ><img src="resources/icons/UogradeAutismeIcon/LogOut2.png" width="75" height="95" alt="Company Name"></div>',
     //            ui: 'plain',
     //            handler: function () {
     //                stopClocksingleTrackingMaps();
     //                Ext.getCmp('mainView').setActiveItem(0);


     //            }
     //        },


     //    ]

     //},












                ]
            },

            {
                xtype: 'container',
                docked: 'bottom',
                layout: {
                    type: 'vbox',
                    pack: 'center',
                    align: 'center'

                },


                items: [


                    {
                        html: '<font size=2px color=white><center>MOSTI Social Innovation Program<br>Initiated By</center></font>',
                    },
                    {
                        xtype: 'panel',
                        height: 15
                    },
                    {
                        // xtype: 'panel',
                        //  bodyPadding: 10,
                        //height: 180,
                        //width: 350,
                        // margin: '30 0 0 0',
                        // margin: '-100 0 0 0',

                        html: '<img src="resources/icons/MostiLogoNew7.png" height="80" width="230"/>',
                        // html: '<img src="resources/icons/MostiTrackLogo1.png" style="max-height:100%; max-width:100%;"/>',
                    },
                      //{
                      //    html: '<font size=2px color=white><b>KEMENTERIAN SAINS,TEKNOLOGI DAN INOVASI</b></font>',
                      //},
                      //{
                      //    html: '<font size=1px color=white><i>MINISTRY SCIENCE,TECHNOLOGY AND INNOVATION</i></font>',
                      //},
                  //  {
                  //      xtype: 'spacer',
                  //      width: 75
                  //  },
                  //{

                  //},
                ]

            },





        ]
    }
});

var countstartChangeBackground = 0;
var timerstartChangeBackground
function startChangeBackground(val) {
  
    if (val == 'start') {
        timerstartChangeBackground = setInterval(function () {
            countstartChangeBackground = countstartChangeBackground + 1;
           
            if (countstartChangeBackground == 10) {
                Ext.getCmp('MainMenuUpgradeLatestID').setStyle('background-image: url("resources/icons/UogradeAutismeIcon/Mosti TrackMenuBackground.jpg"); background-size: 100% 100%;');
               
            }
            if (countstartChangeBackground == 20) {
                Ext.getCmp('MainMenuUpgradeLatestID').setStyle('background-image: url("resources/icons/UogradeAutismeIcon/backgraound33.png"); background-size: 100% 100%;');
                countstartChangeBackground = 0;
            }
            //if (countstartChangeBackground == 30) {
            //    Ext.getCmp('MainMenuUpgradeLatestID').setStyle('background-image: url("resources/icons/UogradeAutismeIcon/backgraound3a.jpg"); background-size: 100% 100%;');
            //    countstartChangeBackground = 0;
            //}
        }, 1000);
    } else {

        clearInterval(timerstartChangeBackground);
    }
}

function stopChangeBackground() {

    startChangeBackground('stop');
    countstartChangeBackground = 0;
}





function CheckHeigtWidthMainMenu() {


   
    var x = parseInt(screen.width);
    var y = parseInt(screen.height);

    if (x <= 320 && y <= 534) {
        alert('CheckH---vvvvvvvvvvvvvv||||m4');
        Ext.getCmp('MainMenuContainerID').setMargin('130 0 0 -6');
        Ext.getCmp('btnMainMenuSetVirtualBoundary').setWidth(162);
        Ext.getCmp('btnMainMenuSetVirtualBoundary').setHtml('<div ><img src="resources/icons/UogradeAutismeIcon/SetVirtualBoundaryBtn.png" width="152" height="52" alt="Company Name"></div>');


        Ext.getCmp('btnMainMenuMyAccount').setWidth(162);
        Ext.getCmp('btnMainMenuMyAccount').setHtml('<div ><img src="resources/icons/UogradeAutismeIcon/MyAccountBtn.png" width="152" height="52" alt="Company Name"></div>');


        Ext.getCmp('btnMainMenuVirtualBoundaryNewIcon').setWidth(162);
        Ext.getCmp('btnMainMenuVirtualBoundaryNewIcon').setHtml('<div ><img src="resources/icons/UogradeAutismeIcon/VirtualBoundaryAlertHistoryBtn.png" width="152" height="52" alt="Company Name"></div>');

        Ext.getCmp('btnMainMenuRealTimeTracking').setWidth(162);
        Ext.getCmp('btnMainMenuRealTimeTracking').setHtml('<div ><img src="resources/icons/UogradeAutismeIcon/RealTimeTrackingBtn.png" width="152" height="52" alt="Company Name"></div>');


        Ext.getCmp('btnMainMenuTrackingHistory').setWidth(162);
        Ext.getCmp('btnMainMenuTrackingHistory').setHtml('<div ><img src="resources/icons/UogradeAutismeIcon/TrackingHistoryBtn.png" width="152" height="52" alt="Company Name"></div>');

        Ext.getCmp('btnMainMenuLogingOut').setWidth(162);
        Ext.getCmp('btnMainMenuLogingOut').setHtml('<div ><img src="resources/icons/UogradeAutismeIcon/LogOut1Btn.png" width="152" height="45" alt="Company Name"></div>');




        Ext.getCmp('MainMenuLogoContainer').setMargin('-300 0 0 0');


        Ext.getCmp('btnMainMenuMostiLogo').setHeight(102);
        Ext.getCmp('btnMainMenuMostiLogo').setWidth(142);

       
        Ext.getCmp('btnMainMenuMostiLogo').setHtml('<div ><img src="resources/icons/ooiweihanLogo12.png" width="132" height="92" alt="Company Name"></div>')
       Ext.getCmp('btnMainMenuMostiLogoText').setHtml('<font size=4px color=white><b>A Project Developed for <br>MOSTI Social Innovation<br>Program(MSI)</b></font>');
       
      
    }
}
