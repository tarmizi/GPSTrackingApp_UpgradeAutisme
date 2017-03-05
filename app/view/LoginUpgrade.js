Ext.define('MyGPS.view.LoginUpgrade', {
    extend: 'Ext.Container',
    //  extend: 'Ext.Panel',
    xtype: 'LoginUpgrade',
    config: {
        styleHtmlContent: true,
        layout: 'fit',
        fullscreen: true,
        scrollable: false,
        style: "background-color: #157fcc; color:white;",

        items: [

           





           

           
            {
                xtype: 'container',
                //  top:100,
                margin: '0 0 0 0',
                layout: {
                    type: 'vbox',
                    pack: 'center',
                    align: 'center'

                },
                items: [








                   








                    {
                        xtype: 'container',
                        margin: '-30 0 0 0',
                        layout: {
                            type: 'vbox',
                            pack: 'center',
                            align: 'center'

                        },


                        items: [



                     {
                         xtype: 'panel',
                         //  bodyPadding: 10,
                         //height: 180,
                         //width: 350,
                        
                            //margin: '-100 0 0 0',
                      
                      //   html: '<img src="resources/icons/MostiTrackICon2.png"/>',
                        html: '<img src="resources/icons/MostiTrackICon2.png" style="max-height:100%; max-width:100%;"/>',
                        

                     },
                     //{
                     //    xtype: 'spacer',
                     //    width: 10
                     //},

                    


                     {
                          xtype: 'fieldset',
                          width: '90%',
                         margin: '-60 0 0 0',
                          title: '<font size=2px color=white>User Login</font>',
                          items: [
                              {
                                  xtype: 'textfield',
                                  //  margin: '-10 0 0 0',
                                  placeHolder: 'Username',
                                  id: 'loginuserNameTextField',
                                  // name: 'userNameTextFieldname',
                                  required: true
                              },
                              {

                                  xtype: 'passwordfield',
                                  placeHolder: 'Password',
                                  id: 'loginpasswordTextField',
                                  // name: 'passwordTextFieldname',
                                  required: true
                              },






                          ],


                     },



                   
                   {
                       xtype: 'container',
                       //height: '100%',
                       width: '90%',
                       margin: '10 0 0 0',
                       layout: {
                           // flex: 1,
                           type: 'vbox',
                           // pack: 'center',
                       },

                       items: [








                         {

                             xtype: 'button',
                             align: 'stretch',
                             id: 'loginlogInButton',
                             ui: 'action',
                             //width: '50%',
                             //height: '10%',
                             padding: '10px',
                             text: 'Log In',
                             handler: function () {

                                 Ext.Viewport.mask({ xtype: 'loadmask', message: 'Login....' });
                                 var task = Ext.create('Ext.util.DelayedTask', function () {
                                     _DataStore_User_Login.getProxy().setExtraParams({
                                         US: Ext.getCmp('loginuserNameTextField').getValue(),
                                         PW: Ext.getCmp('loginpasswordTextField').getValue(),
                                         PLYR: Ext.browser.name,
                                         SISOP: detectOs(),
                                         //IP: myip,
                                         IPADD: 'MostiTrack',
                                     });

                                     //  _DataStore_GPSUserLogin.getProxy().setUrl(document.location.protocol + '//' + document.location.host + '/GPSUser/GPSuserLoginR');

                                     _DataStore_User_Login.load({

                                         callback: function (record, operation, success) {


                                             if (success) {
                                                 var store = _DataStore_User_Login.getAt(0);


                                                 if (store != null) {



                                                     Ext.getCmp('mainView').setActiveItem(1);
                                                     AAccountNo = GetCurrentUserAccountNo();

                                                     _IsSuccessLogin = true;
                                                     Ext.Msg.alert("Login Success..!");
                                                     var UserName = Ext.getCmp('loginuserNameTextField').getValue();
                                                     Ext.getCmp('MainMenuUserLabelUpgrade1').setHtml('<font size="3" color="white">Welcome!<br>' + UserName + '</font>');


                                                 } else {
                                                     Ext.Msg.alert("Failed.!");
                                                     _IsSuccessLogin = false;
                                                 }
                                             }
                                             else {

                                                 Ext.Msg.alert("Failed.!");
                                                 _IsSuccessLogin = false;
                                             }



                                         }
                                     })

                                     Ext.Viewport.setMasked(false);
                                 });
                                 task.delay(1000);

                             }





                         },
                          {
                              xtype: 'spacer',
                              padding: '3px',
                          },
                            {
                                xtype: 'button',
                                align: 'stretch',
                                itemId: 'loginRegButton',
                                ui: 'action',
                                //width: '50%',
                                //height: '10%',
                                padding: '10px',
                                text: 'Register',
                                handler: function () {

                                    RegistrationFormShow();
                                },


                            },

                          
                       ]


                   },








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
                html: '<font size=2px color=white>MOSTI Social Innovation Program-2017</font>',
            },
            {
                xtype: 'panel',
                height:15
            },
            {
               // xtype: 'panel',
                //  bodyPadding: 10,
                //height: 180,
                //width: 350,
               // margin: '30 0 0 0',
               // margin: '-100 0 0 0',
             
                html: '<img src="resources/icons/MostiTrackLogo1.png" height="80" width="300"/>',
               // html: '<img src="resources/icons/MostiTrackLogo1.png" style="max-height:100%; max-width:100%;"/>',
            },
          //  {
          //      xtype: 'spacer',
          //      width: 75
          //  },
          //{
              
          //},
        ]

    },




     












                ]
            },






        ]
    }
});


function detectOs() {
    var OS;
    if (Ext.os.is('Android')) {

        OS = 'Andriod';


    } else
        if (Ext.os.is('Windows')) {
            OS = 'Windows';
        }
        else
            if (Ext.os.is('iOS')) {
                OS = 'iOS';
            }
            else
                if (Ext.os.is('iPad')) {
                    OS = 'iPad';
                }
                else
                    if (Ext.os.is('iPhone')) {
                        OS = 'iPhone';
                    }
                    else
                        if (Ext.os.is('iPod')) {
                            OS = 'iPod';
                        }
                        else
                            if (Ext.os.is('WebOS')) {
                                OS = 'WebOS';
                            }
                            else
                                if (Ext.os.is('Bada')) {
                                    OS = 'BlackBerry';
                                }
                                else
                                    if (Ext.os.is('MacOS')) {
                                        OS = 'MacOS';
                                    }
                                    else
                                        if (Ext.os.is('RIMTablet')) {
                                            OS = 'RIMTablet';
                                        }
                                        else
                                            if (Ext.os.is('Linux')) {
                                                OS = 'Linux';
                                            } else (OS = 'other')

    return OS;

}


function setUserName(UserName) {

    Ext.Viewport.mask({ xtype: 'loadmask', message: 'Login....' });
    var task = Ext.create('Ext.util.DelayedTask', function () {





        Ext.Viewport.setMasked(false);
    });


    task.delay(1000);
}