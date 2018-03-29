import { AppRegistry, Dimensions } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { registerScreens } from '@screens/index';
let windowWidth = Dimensions.get('window').width
registerScreens();
Navigation.startSingleScreenApp({
    screen:{
        screen:'app.Phone',
    },
    drawer:{
        left:{
            screen:'app.DrawerScreen',
            fixedWidth:windowWidth*3
        },
        style: {
            leftDrawerWidth: 100,
          }
    },
    animationType: 'slide-down',
})