Ext.define('MyGPS.view.UserManual', {

});

var _floatingPanelPDF;
var filepdf;
function AttractUserManual() {
    filepdf = "UserManual-MOSTI-TRACK-AUTISM.jpg";
    _floatingPanelPDF = Ext.create('Ext.Panel', {
        draggable: false,
        centered: true,
        scrollable: false,
        //height: 630,
        //width: 800,
         width: '90%',
         height: '80%',
        //modal: true,
        //hideOnMaskTap: true,
        showAnimation: {
            type: 'popIn',
            duration: 250,
            easing: 'ease-out'
        },
        hideAnimation: {
            type: 'popOut',
            duration: 250,
            easing: 'ease-out'
        },

        items: [
            {
                docked: 'top',
                xtype: 'toolbar',
                id: 'userManual_TitleBar',
                title: 'User Manual',
                ui: 'light',
                items:
                     [
                        
                           {
                               xtype: 'spacer'
                           },
                                     {
                                         xtype: 'button',
                                         id: 'btnUserManualClose',
                                        // html: '<div ><img src="resources/icons/MainMenuPictureProfile.png" width="45" height="45" alt="Company Name"></div>',
                                         ui: 'round',
                                         text:'Close',
                                         handler: function () {
                                             AttractUserManualHide();
                                         }
                                     },
                     ]

            },


            {
                //html: '<table class="tabledetail">  <tr > <td colspan="2" style="background-color: grey;  font-size: 12px; color: #fff; text-align: center; ">GPS Live Data Info<br>(20-11-2014 01:32AM)</td> </tr><tr > <td class="tde">WTP 2681</td> <td class="tde">Proton Persona Car</td></tr> <tr > <td class="tdk">Tracking ID</td> <td class="tdk">Tracking Item</td></tr><tr > <td class="tde">03.9304893048</td> <td class="tde">101.283746484</td></tr> <tr > <td class="tdk">Latituded</td> <td class="tdk">Longituded</td></tr><tr > <td class="tde">89km/h</td> <td class="tde">160km/h</td></tr> <tr > <td class="tdk">Current Speed</td> <td class="tdk">Max Speed</td></tr><tr > <td class="tde">76.9%</td> <td class="tde">BATTERY</td></tr> <tr > <td class="tdk">Batery Status</td> <td class="tdk">Power Mode</td></tr><tr > <td class="tde">TK102-B</td> <td class="tde">Standard</td></tr> <tr > <td class="tdk">GPS Tracker Model</td> <td class="tdk">Tracking Mode</td></tr><tr > <td class="tde">+60193198764</td> <td class="tde">68 meter</td></tr> <tr > <td class="tdk">Sim Number</td> <td class="tdk">Max Elevation</td></tr></table>',
                //  html: '<iframe id="myIframe2" src="http://drms.dsmaf.mil.my/User_manual_Web_DRMS2.pdf" width="100%" height="700" ></iframe>',
                html: '<iframe id="myIframe2" src="' + document.location.protocol + '//' + document.location.host + '/' + filepdf + '"  width="100%" height="100%" ></iframe>',
            },








        ],



    });
    return _floatingPanelPDF
}





function AttractUserManualShow() {
    Ext.Viewport.remove(_floatingPanelPDF);
    this.overlay = Ext.Viewport.add(AttractUserManual());
    this.overlay.show();
}



function AttractUserManualHide() {
    _floatingPanelPDF.hide();
}
