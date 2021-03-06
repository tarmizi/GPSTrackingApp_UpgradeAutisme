﻿var _isSingleTrackingWPSListClicked = 'no';
var _singleTrackingWPSList;
Ext.define('MyGPS.view.SingleTracking.CustomePanel.SingleTrackingWPSList', {
});

function SingleTrackingWPSList() {
    _singleTrackingWPSList =
  Ext.create('Ext.Panel', {

      xtype: 'panel',
      height: 1,
      width: 1,
      id: 'SingleTrackingWPSListID',
      draggable: false,
      left: -12,
      bottom: 200,
      zIndex:10,
     // bottom: 71,

      showAnimation: {
          type: 'slide',
          direction: 'up',
          duration: 450,
          easing: 'ease-out'
      },
      //hideAnimation: {
      //    type: null,
      //    direction: null,
      //    duration: null,
      //    //  easing: 'ease-in'
      //},



      //showAnimation: {
      //    type: 'popIn',
      //    duration: 250,
      //    easing: 'ease-out'
      //},
      hideAnimation: {
          type: null,
          direction: null,
          duration: null,
          //  easing: 'ease-in'
      },
      //hideAnimation: {
      //    type: 'popOut',
      //    duration: 250,
      //    easing: 'ease-out'
      //},
      style: 'background-color: transparent;',
      items: {

          xtype: 'container',
          style: 'background-color: transparent;',
          layout: {
              type: 'vbox',
              //pack: 'left',
              //align: 'end'
          },

          items: [

                 
               
                     {
                         xtype: 'button',
                         id: 'btnSingleTrackingWPSList',
                         height: 210,
                         width: 180,
                         html: '<div ><img src="resources/icons/wps-list1.png" width="170" height="200" alt="Company Name"></div>',
                         //   html: '<div ><img src="resources/icons/DetailsPoint.png" width="45" height="45" alt="Company Name"></div>',
                         ui: 'plain',
                         handler: function () {
                             _isWPSpanelshow = 'no';
                             SingleTrackingWPSListHide();
                             SingleTrackingWPSListButtonShow();
                         }
                     },
                     //{
                     //    xtype: 'button',
                     //    id: 'btnsingleTrackingMapSpeedometerCurrentSpeed',
                     //    height: 40,
                     //    width: 50,
                     //    margin:'45 0 0 -115',
                     //    html: '<font size="5" color="black"><b>80</b></font>',
                     //    //   html: '<div ><img src="resources/icons/DetailsPoint.png" width="45" height="45" alt="Company Name"></div>',
                     //    ui: 'plain',
                     //    handler: function () {
                     //    }
                     //},
                         

                       //{
                       //    xtype: 'button',
                       //    id: 'btnSingleTrackingWPSListAPNdetected',
                       //    height: 180,
                       //    width: 210,
                       //    margin: '-190 0 0 -15',
                       //    html: '<font size="1.5" color="red"><b>BitGuestWifi<br>FeldaWifi<br>PufyBuffyRestorent<br>Che Mat Restorent Wifi</b></font>',
                       //    //   html: '<div ><img src="resources/icons/DetailsPoint.png" width="45" height="45" alt="Company Name"></div>',
                       //    ui: 'plain',
                       //    handler: function () {
                       //        _isWPSpanelshow = 'no';
                       //        SingleTrackingWPSListHide();
                       //        SingleTrackingWPSListButtonShow();
                       //    }
                       //},

                         {
                             xtype: 'container',
                             height: 110,
                               zIndex:20,       
                             width: 166,
                             margin: '-145 0 0 10',
                             //style: 'background-color:#57A0DC color: #fff',
                             style: 'background-color:#57A0DC',
                             layout: {

                                 type: 'vbox',

                             },
                             scrollable: {
                                 direction: 'vertical',
                                 directionLock: true
                             },

                             items: [
                                  {
                                      margin: '0 0 0 10',
                                      html: '<font size="1.5" color="white"><b>BitGuestWifi<br>FeldaWifi<br>PufyBuffyRestorent<br>Che Mat Restorent Wifi</b></font>',
                                      //xtype: 'textareafield',
                                      id: 'SingleTrackingWPSListAPNdetected',
                                      //width: 130,
                                      //height:130,
                                      //placeHolder: 'Tom Roy',
                                      //autoCapitalize: true,
                                      ////required: true,
                                      //clearIcon: true
                                  },

                             ]







                         },
                           //{
                           //    xtype: 'button',
                           //    id: 'btnSingleTrackingWPSListAPNCountdetected',
                           //    height: 180,
                           //    width: 210,
                           //    margin: '-103 0 0 35',
                           //    html: '<font size="2" color="black"><b>APN Detected</b></font>',
                           //    //   html: '<div ><img src="resources/icons/DetailsPoint.png" width="45" height="45" alt="Company Name"></div>',
                           //    ui: 'plain',
                           //    handler: function () {
                           //        _isWPSpanelshow = 'no';
                           //        SingleTrackingWPSListHide();
                           //        SingleTrackingWPSListButtonShow();
                           //    }
                           //},
                           {
                               xtype: 'button',
                               id: 'btnSingleTrackingWPSListdetectedMode',
                               height: 180,
                               width: 210,
                               margin: '-213 0 0 11',
                               html: '<font size="2" color="black"><b>WPS MODE-OFF</b></font>',
                               //   html: '<div ><img src="resources/icons/DetailsPoint.png" width="45" height="45" alt="Company Name"></div>',
                               ui: 'plain',
                               handler: function () {
                                 
                               }
                           },

          ]

      },


  });

    return _singleTrackingWPSList
}


function SingleTrackingWPSListHide()
{
    _isSingleTrackingWPSListClicked = 'no';
    _singleTrackingWPSList.hide();
}



function SingleTrackingWPSListShow() {
    _isSingleTrackingWPSListClicked = 'yes';
    Ext.Viewport.remove(_singleTrackingWPSList);
    this.overlay = Ext.Viewport.add(SingleTrackingWPSList()); // _GeofenceInfoPanel place in Geofence_fencingstatusAlert class.                   
    this.overlay.show();
}