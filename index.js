import { AppRegistry, Dimensions } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { registerScreens } from '@screens/index';
let windowWidth = Dimensions.get('window').width

registerScreens();
Navigation.startSingleScreenApp({
    screen:{
        screen:'app.ConfirmationPage',
    },
    drawer:{
        left:{
            screen:'app.ConfirmationPage',
            fixedWidth:0.75*(windowWidth*3),
           
        },
        style: {
            leftDrawerWidth: 75,
            //drawerShadow:false
          },
          
          disableOpenGesture: true
    },
    animationType: 'slide-down',
    
   appStyle:{
       orientation: 'portrait'
    },
    
})