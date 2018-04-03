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
import PreviewScreen from './Shop/PreviewScreen/index'
import ProductPage from './Shop/productPage/index'
import ConfirmationPage from './Shop/ConfirmationPage/index'
import FiltersShop from './Shop/FiltersShop/index'
import ShopSeach from './Shop/ShopSearch/index'

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
}