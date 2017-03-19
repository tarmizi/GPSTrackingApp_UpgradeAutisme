Ext.define('MyGPS.view.Logins.LoginInfoPanel', {

});


var _loginInfoPanel;
function LoginInfoPanel() {

    _loginInfoPanel =
          Ext.create('Ext.Container', {

              xtype: 'container',
              height: '100%',
              width: 190,
              id: 'LoginInfoPanelID',
              zIndex:20,
              // centered: true,
              left: -1,
              //top:32,
                modal: true,
               hideOnMaskTap: true,

              showAnimation: {
                  type: 'slideIn',
                  direction: 'right',
                  duration: 250,
                  //easing: 'ease-in'
              },
              hideAnimation: {
                  //type: 'reveal',
                  //duration: 250,
                  type: 'slideOut',
                
    direction:'left',
    duration: 250
              },

           //   style: "background-color: #157fcc; color:white; border:2px solid white",
              items: [


                    {

                        xtype: 'container',
                        // style: "background-color: #157fcc; color:white;",
                        //  style: "background-color: white; color:black; border:1px solid white",
                        style: 'background-image: url("resources/icons/slideNavi1.PNG"); background-size: 100% 100%;',
                        height: 700,
                        width: 220,
                        // top:5,
                        layout: {
                            type: 'vbox',
                            //pack: 'left',
                            //align: 'end'
                        },
                        scrollable: {
                            direction: 'vertical',
                            directionLock: true
                        },

                        items: [


                            {
                                margin: '5 0 0 10',
                                html: '<font size=5px color=black><b>Welcome!</b></font>',
                            },
                              {
                                  margin: '-5 0 0 10',
                                  id:'loginInfoPanelUserName',
                                  html: '<font size=5px color=black><b>Tarmizi</b></font>',
                              },

                               {
                                   margin: '-5 0 0 10',
                                   html: '<font size=3px color=black><b>Last Login</b></font>',
                               },
                              {
                                  margin: '-5 0 0 10',
                                  id: 'loginInfoPanelLastLogin',
                                  html: '<font size=3px color=black><i>07-03-2017 12:45:23</i></font>',
                              },


                             {
                                 margin: '-5 0 0 0',
                                 html: '<font size=2px color=#C0C0C0>_______________________________________________________</font>',
                             },


                             //{
                             //    xtype: 'container',
                             //    layout: {
                             //        type: 'hbox',
                                     
                             //    },
                             //    items:[

                             //         {
                             //             xtype: 'button',
                             //             id: 'btnMainMenuMyAccountImg',
                             //             //  margin: '0 15 195 0',

                             //             height: 52,
                             //             width: 52,
                             //             //   html: '<div ><img src="resources/icons/MainMenuHistoryRoute.png" width="90" height="90" alt="Company Name"></div>',
                             //             html: '<div ><img src="resources/icons/UogradeAutismeIcon/MyAccountMenu.png" width="42" height="42" alt="Company Name"></div>',

                             //             ui: 'plain',
                             //             handler: function () {
                             //                 SetMyAccountDetailsByAccountNo();
                             //                 stopChangeBackground();
                             //                 Ext.getCmp('mainView').setActiveItem(3);
                             //             }



                             //         },
                             //         {
                             //             xtype: 'spacer',
                             //             width:'6px'
                             //         },
                             //         {
                                        
                             //             id: 'btnMainMenuMyAccountText',
                             //             html: '<font size=3px color=black><b>My Account</b></font>',
                             //         },
                             //    ]
                             //},


                            {
                             

                                html: '<img src="resources/icons/ooiweihanLogo12.png" width="200" height="140"/>',
                             
                            },



                            {
                                margin: '0 0 0 5',
                                html: '<font size=2px color=black>This application is initiated by The<br> National Space Agency(ANGKASA)<br>under The Ministry of Science,<br>Technology and Innovation(MOSTI) <br> funded by MOSTI Social Innovation<br> (MSI)Grant 2016</font>',
                            },




                        ]

                    },




              ],



          });

    return _loginInfoPanel





}


function LoginInfoPanelShow()
{
    Ext.Viewport.remove(_loginInfoPanel);
    this.overlay = Ext.Viewport.add(LoginInfoPanel());
    this.overlay.show();
}


function LoginInfoPanelHide() {
    _loginInfoPanel.hide();
}