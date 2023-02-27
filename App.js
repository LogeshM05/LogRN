import React, {useEffect} from 'react';
import {Text, View, TouchableOpacity, StyleSheet, NativeModules} from 'react-native';
import {requestUserPermission, NotificationServices} from './PushNotifications.js';
import CustomModule from './CustomModule';
const App = () => {

//    CustomModule.show();
    useEffect(()=>{
        requestUserPermission();
        NotificationServices();
    },[]);
    function register(){
        let jsonData = {
            "uid": "1",
            "adid": "8",
            "useruid": "7",
            "name": "karthik1",
            "age": "22",
            "email": "karthikrathinavel@email.com",
            "phone": "1234567890",
            "gender": "M",
            "profileURL": "https://github.com/karthikrathinavel",
            "dob": "26/01/2001",
            "education": "B.E",
            "employed": false,
            "married": false,
            "token": "fRgoQr7OQIWiwy69IvUG9Z:APA91bFO8ddH7DQtX8aLMCDBTOIHK_zDRabyUswMQuOYZKaMbdJpv6hfznlNrpZ2kaPYhXuS_B-C_0i_-6R9Cy3KOh-lkmd1LwTZtif3u2E6WHxJEUfoIkH-X2aucach9xR2OAiGXCYa"
        }
        let jsonString = JSON.stringify(jsonData);
        NativeModules.ReReactNativeSDK.userRegister(jsonString);
    }
    function updatePushToken(){
        NativeModules.ReReactNativeSDK.updatePushToken("fRgoQr7OQIWiwy69IvUG9Z:APA91bFO8ddH7DQtX8aLMCDBTOIHK_zDRabyUswMQuOYZKaMbdJpv6hfznlNrpZ2kaPYhXuS_B-C_0i_-6R9Cy3KOh-lkmd1LwTZtif3u2E6WHxJEUfoIkH-X2aucach9xR2OAiGXCYa");
    }
    function locationUpdate(){
        var location = {
            latitude: 13.067439,
            longitude: 80.237617
        }
        NativeModules.ReReactNativeSDK.locationUpdate(JSON.stringify(location));
    }
    function conversion(){
        NativeModules.ReReactNativeSDK.appConversionTracking();
    }
    function conversion1(){
        var data = '{"name":"John", "age":30, "city":"New York"}';
        NativeModules.ReReactNativeSDK.appConversionTrackingWithData(data);
    }
    function addNewNotification(){
        var notificationTitle = "Sample Title";
        var notificationBody = "Sample Body";
        var notificationId = 123;
        var obj = JSON.stringify({notificationId: notificationId});
        NativeModules.ReReactNativeSDK.deleteNotificationByNotificationId(obj);
    }
    function delNotificationById(){
        var id = "1673501625026";
        NativeModules.ReReactNativeSDK.deleteNotificationByNID(id);
    }
    function getReadNotificationCount(){
        NativeModules.ReReactNativeSDK.getReadNotificationCount((count) => {
            if(count != undefined){
                console.log("unread count: ", count);
            }
        });
    }
    function onTrackEvent(){
        var resEvent1 = {
            eventName: 'App Opened',
            data: {}
        }
        NativeModules.ReReactNativeSDK.customEvent(JSON.stringify(resEvent1));
    }
    function readNotification(){
        NativeModules.ReReactNativeSDK.readNotification(102, (count) => {
            if(count != undefined){
                console.log("unread count: ", count);
            }
        });
    }
    function unReadNotification(){
        NativeModules.ReReactNativeSDK.unReadNotification();
    }
    function formDataCapture(){
        let jsonData = {
            "formid": 123,
            "apikey":"b78db6b3-9462-4132-a4d3-894db10b3782",
            "name": "John",
            "age": 30,
            "city": "New York"
        };
        let jsonString = JSON.stringify(jsonData);
        NativeModules.ReReactNativeSDK.formDataCapture(jsonString);
    }
    function getUnreadNotificationCount(){
        NativeModules.ReReactNativeSDK.getUnReadNotificationCount((count) => {
                    if(count != undefined){
                        console.log("unread count: ", count);
                    }
                });
    }
    function getNotifications(){
        NativeModules.ReReactNativeSDK.getNotification((error,list) => {
            console.log(list);
        });
    }
    return(
        <View>
        <TouchableOpacity onPress={register} style={styles.countContainer}>
            <Text>onDeviceUserRegister</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={updatePushToken} style={styles.countContainer}>
            <Text>updatePushToken</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={locationUpdate} style={styles.countContainer}>
            <Text>onLocationUpdate</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={conversion} style={styles.countContainer}>
            <Text style={{color: '#fff'}}>appConversionTracking</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={conversion1} style={styles.countContainer}>
            <Text style={{color: '#fff'}}>appConversionTrackingWithData</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={addNewNotification} style={styles.countContainer}>
            <Text style={{color: '#fff'}}>deleteNotificationByNotificationId</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={delNotificationById} style={styles.countContainer}>
            <Text style={{color: '#fff'}}>DelNotificationbyid</Text>
        </TouchableOpacity>
                     {/*<TouchableOpacity onPress={delNotificationByObj} style={styles.countContainer}>
                      <Text style={{color: '#fff'}}>DelNotificationbyObject</Text>
                     </TouchableOpacity>*/}
        <TouchableOpacity onPress={getReadNotificationCount} style={styles.countContainer}>
            <Text style={{color: '#fff'}}>getReadNotificationCount</Text>
        </TouchableOpacity>
        {/*<TouchableOpacity onPress={updatePushToken} style={styles.countContainer}>
            <Text style={{color: '#fff'}}>updatePushToken</Text>
        </TouchableOpacity>*/}
        <TouchableOpacity onPress={onTrackEvent} style={styles.countContainer}>
            <Text style={{color: '#fff'}}>onTrackEvent</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={readNotification} style={styles.countContainer}>
            <Text style={{color: '#fff'}}>readNotification</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={unReadNotification} style={styles.countContainer}>
            <Text style={{color: '#fff'}}>unReadNotification</Text>
        </TouchableOpacity>
                            {/*<TouchableOpacity onPress={getDeepLinkData} style={styles.countContainer}>
                              <Text style={{color: '#fff'}}>getDeepLinkData</Text>
                            </TouchableOpacity>*/}
        <TouchableOpacity onPress={formDataCapture} style={styles.countContainer}>
            <Text style={{color: '#fff'}}>formDataCapture</Text>
        </TouchableOpacity>
                     {/*<TouchableOpacity onPress={onReceivedCampaign} style={styles.countContainer}>
                                           <Text style={{color: '#fff'}}>onReceivedCampaign</Text>
                                         </TouchableOpacity>*/}
        <TouchableOpacity onPress={getUnreadNotificationCount} style={styles.countContainer}>
            <Text style={{color: '#fff'}}>getUnreadNotificationCount</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={getNotifications} style={styles.countContainer}>
            <Text style={{color: '#fff'}}>getNotifications</Text>
        </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
 countContainer: {
   alignItems: "center",
   padding: 10,
   margin: 5,
   backgroundColor: 'rgba(0,0,0,0.2)',
 }
});
export default App;