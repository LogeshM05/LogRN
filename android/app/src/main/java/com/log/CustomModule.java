package com.log;

import android.widget.Toast;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import org.json.JSONException;
import org.json.JSONObject;

import java.util.ArrayList;

import io.mob.resu.reandroidsdk.MRegisterUser;
import io.mob.resu.reandroidsdk.RNotification;
import io.mob.resu.reandroidsdk.ReAndroidSDK;

public class CustomModule extends ReactContextBaseJavaModule {
    private static ReactApplicationContext reactContext;
    CustomModule(ReactApplicationContext context){
        super(context);
        reactContext = context;
    }
    @ReactMethod
    public void show(){
        Toast.makeText(reactContext, "Hi android", Toast.LENGTH_LONG).show();
    }

    @ReactMethod
    public void onDeviceUserRegister(String json) throws JSONException {
        JSONObject json1 = new JSONObject(json);
        System.out.println(json1);
        MRegisterUser obj = new MRegisterUser();
        obj.setAdId(json1.getString("uid"));
        obj.setUserUniqueId(json1.getString("useruid"));
        obj.setName(json1.getString("name"));
        obj.setAge(json1.getString("age"));
        obj.setEmail(json1.getString("email"));
        obj.setPhone(json1.getString("phone"));
        obj.setGender(json1.getString("gender"));
        obj.setDeviceToken(json1.getString("token"));
        obj.setProfileUrl(json1.getString("profileURL"));
        obj.setDob(json1.getString("dob"));
        obj.setEducation(json1.getString("education"));
        obj.setEmployed(json1.getBoolean("employed"));
        obj.setMarried(json1.getBoolean("married"));
        ReAndroidSDK.getInstance(reactContext).onDeviceUserRegister(obj);
    }

    @ReactMethod
    public void updatePushToken(String token){
        ReAndroidSDK.getInstance(reactContext).updatePushToken(token);
    }

    @ReactMethod
    public void location(double latitude, double longitude){
        ReAndroidSDK.getInstance(reactContext).onLocationUpdate(latitude, longitude);
        System.out.println("onLocationUpdate");
    }

    @ReactMethod
    public void appConversionTracking() {
        ReAndroidSDK.getInstance(reactContext).appConversionTracking();
        System.out.println("appConversionTracking");
    }

    @ReactMethod
    public void appConversionTracking1(String data) throws JSONException{
        JSONObject json1 = new JSONObject(data);
        ReAndroidSDK.getInstance(reactContext).appConversionTracking(json1);
    }

    @ReactMethod
    public void addNewNotification(String title, String body){
        ReAndroidSDK.getInstance(reactContext).addNewNotification(title, body, "MainActivity");
        System.out.println("addNewNotification");
    }

    @ReactMethod
    public void deleteNotificationByNID(String id){
        ReAndroidSDK.getInstance(reactContext).deleteNotificationByNotificationId(id);
        System.out.println("deleteNotificationByNotificationId");
    }

    @ReactMethod
    public void getReadNotificationCount(){
        int readedCount = ReAndroidSDK.getInstance(reactContext).getUnReadNotificationCount();
        System.err.println("Notification readed count: " + readedCount);
    }

    @ReactMethod
    public void onTrackEvent(){
        ReAndroidSDK.getInstance(reactContext).onTrackEvent("SampleEvent");
    }

    @ReactMethod
    public void readNotification(){
        ReAndroidSDK.getInstance(reactContext).readNotification("1673591227344");
    }

    @ReactMethod
    public void unReadNotification(){
        ReAndroidSDK.getInstance(reactContext).unReadNotification("1673591227344");
    }

    @ReactMethod
    public void formDataCapture(String json) throws JSONException {
        JSONObject json1 = new JSONObject(json);
        ReAndroidSDK.getInstance(reactContext).formDataCapture(json1);
    }

    @ReactMethod
    public void getUnreadNotificationCount(){
        int unReadCount = ReAndroidSDK.getInstance(reactContext).getUnReadNotificationCount();
        System.out.println(unReadCount);
    }

    @ReactMethod
    public void getNotifications(){
        ArrayList<RNotification> arrayList = new ArrayList<>();
        arrayList = ReAndroidSDK.getInstance(reactContext).getNotifications();
        System.out.println(arrayList);
    }

    @NonNull
    @Override
    public String getName() {
        return "CustomModule";
    }
}
