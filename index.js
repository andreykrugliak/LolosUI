import { AppRegistry, Dimensions } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { registerScreens } from '@screens/index';

let windowWidth = Dimensions.get('window').width

registerScreens();
Navigation.startSingleScreenApp({
    screen:{
        screen:'app.LandingScreen',
    },
    drawer:{
        left:{
            screen:'app.DrawerScreen',
           // fixedWidth:0.75*(windowWidth*3),
        },
        right:{
            screen:'app.Notifications',
            fixedWidth:windowWidth*2
           // fixedWidth:windowWidth*3
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