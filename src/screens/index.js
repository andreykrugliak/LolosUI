import { Navigation } from 'react-native-navigation';
import SplashScreen from './SplashScreen/index';
import HomePage from './HomePage/index';
import LandingScreen from './LandingScreen/index';
import TextInputs from './TextInputs/index';
import Login from './Login/index';
import Onboarding from './Onboarding/index'
import SignUp from './SignUp/index'
import Phone from './SignUp/Phone/index'
import LoginScreen from './LoginScreen/index'
import OtpScreen from './SignUp/OtpScreen/index'
import DrawerScreen from './DrawerScreen/index'
import PreviewScreen from './Shop/PreviewScreen'
import ProductPage from './Shop/productPage'
import ConfirmationPage from './Shop/ConfirmationPage'
import FiltersShop from './Shop/FiltersShop'
import ShopSeach from './Shop/ShopSearch'
import InviteFriendsHome from './InviteFriends/Contact/index'
import InviteFriendsContactSearch from './InviteFriends/Contact/index2'
import InviteFriendsInvite from './InviteFriends/Contact/index3'
import InviteFriendsSucess from './InviteFriends/Sucess'
import Notifications from './Notifications/index'

import SliderPage from './HomePage/SliderPage/index'
import Wallet from './HomePage/Wallet/index'

export function registerScreens(params){
    Navigation.registerComponent('app.SplashScreen',()=>SplashScreen);
    Navigation.registerComponent('app.HomePage',()=>HomePage);
    Navigation.registerComponent('app.LandingScreen',()=>LandingScreen);
    Navigation.registerComponent('app.TextInputs',()=>TextInputs);
    Navigation.registerComponent('app.Login',()=>Login);
    Navigation.registerComponent('app.Onboarding',()=>Onboarding);
    Navigation.registerComponent('app.SignUp',()=>SignUp);
    Navigation.registerComponent('app.Phone',()=>Phone);
    Navigation.registerComponent('app.OtpScreen',()=>OtpScreen)
    Navigation.registerComponent('app.LoginScreen',()=>LoginScreen)
    Navigation.registerComponent('app.DrawerScreen',()=>DrawerScreen)
    Navigation.registerComponent('app.PreviewScreen',()=>PreviewScreen)
    Navigation.registerComponent('app.ProductPage',()=>ProductPage)
    Navigation.registerComponent('app.ConfirmationPage',()=>ConfirmationPage)
    Navigation.registerComponent('app.FiltersShop',()=>FiltersShop)
    Navigation.registerComponent('app.ShopSeach',()=>ShopSeach)
    Navigation.registerComponent('app.InviteFriendsHome',()=>InviteFriendsHome)
    Navigation.registerComponent('app.InviteFriendsContactSearch',()=>InviteFriendsContactSearch)
    Navigation.registerComponent('app.InviteFriendsInvite',()=>InviteFriendsInvite)
    Navigation.registerComponent('app.InviteFriendsSucess',()=>InviteFriendsSucess)
    Navigation.registerComponent('app.Notifications',()=>Notifications)

    Navigation.registerComponent('app.SliderPage',()=>SliderPage)
    Navigation.registerComponent('app.Wallet',()=>Wallet)

}