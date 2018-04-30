package com.clickers;

import android.app.Application;

import com.facebook.react.ReactApplication;
import io.invertase.firebase.RNFirebasePackage;
import io.invertase.firebase.storage.RNFirebaseStoragePackage; // <-- Add this line



import com.BV.LinearGradient.LinearGradientPackage;
import com.github.yamill.orientation.OrientationPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.corbt.keepawake.KCKeepAwakePackage;
import com.brentvatne.react.ReactVideoPackage;
import com.brentvatne.react.ReactVideoPackage;
import com.zmxv.RNSound.RNSoundPackage;
//import com.reactnativenavigation.NavigationReactPackage;
import com.BV.LinearGradient.LinearGradientPackage;
import com.imagepicker.ImagePickerPackage;
//import com.swmansion.gesturehandler.react.RNGestureHandlerPackage;
//import com.learnium.RNDeviceInfo.RNDeviceInfo;
import com.rt2zz.reactnativecontacts.ReactNativeContacts;
import com.zmxv.RNSound.RNSoundPackage;
import com.imagepicker.ImagePickerPackage;

//import com.reactnativenavigation.NavigationReactPackage;
import com.BV.LinearGradient.LinearGradientPackage;
import com.imagepicker.ImagePickerPackage;
//import com.swmansion.gesturehandler.react.RNGestureHandlerPackage;
//import com.learnium.RNDeviceInfo.RNDeviceInfo;
import com.rt2zz.reactnativecontacts.ReactNativeContacts;
import com.rt2zz.reactnativecontacts.ReactNativeContacts;

import com.BV.LinearGradient.LinearGradientPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import com.BV.LinearGradient.LinearGradientPackage;
import com.reactnativenavigation.NavigationApplication;
 
import java.util.Arrays;
import java.util.List;

public class MainApplication extends NavigationApplication {

    @Override
    public boolean isDebug() {
        return BuildConfig.DEBUG;
    }

    protected List<ReactPackage> getPackages() {
        return Arrays.<ReactPackage>asList(
            new LinearGradientPackage(),
            new ReactNativeContacts(),
            new RNSoundPackage(),
            new ImagePickerPackage(),
            new ReactVideoPackage(),
            new KCKeepAwakePackage(),
            new OrientationPackage(),
            new RNFirebasePackage(),
            new RNFirebaseStoragePackage()
            
            
            
            
        );
    }

    @Override
    public List<ReactPackage> createAdditionalReactPackages() {
        return getPackages();
    }

    @Override  
    public String getJSMainModuleName() {
      return "index";
    }
 }


