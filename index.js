import { AppRegistry, Dimensions } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { registerScreens } from '@screens/index';
import firebase from 'react-native-firebase';

let windowWidth = Dimensions.get('window').width
let screen = ''
registerScreens();
firebase.auth().onAuthStateChanged(user=>{
    if(user){
        screen = 'app.HomePage'
    }else{
        screen = 'app.SplashScreen'
    }
    Navigation.startSingleScreenApp({
    screen:{
        screen:screen,
    },
    drawer:{
        left:{
            screen:'app.DrawerScreen',
           // fixedWidth:0.75*(windowWidth*3),
        },
        
        style: {
            leftDrawerWidth: 75,
            rightDrawerWidth:windowWidth,
            //drawerShadow:false
          },
          
          disableOpenGesture: true
    },
    animationType: 'slide-down',
    
    appStyle:{
       orientation: 'portrait'
    },
    
})
})

