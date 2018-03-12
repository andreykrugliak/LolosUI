import { AppRegistry } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { registerScreens } from '@screens/index';

registerScreens();
Navigation.startSingleScreenApp({
    screen:{
        screen:'app.LandingScreen',
    },
    animationType: 'slide-down',
})