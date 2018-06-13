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
import InviteFriendsHome from './InviteFriends/Contact/index.js'
import InviteFriendsContactSearch from './InviteFriends/Contact/index2'
import InviteFriendsInvite from './InviteFriends/Contact/index3'
import InviteFriendsSucess from './InviteFriends/Sucess'
import NotificationsHome from './Notifications/index'
import Notifications from './Notifications/index2'
import SliderPage from './HomePage/SliderPage'
import Wallet from './HomePage/Wallet/index'
import MyProfile from './MyProfile/index'
import ShippingAddressShow from './ShippingAddress/AddressShow'
import ShippingAddressHome from './ShippingAddress/AddressHome'
import ShippingAddressCountry from './ShippingAddress/AddressCountry'
import ShippingAddressState from './ShippingAddress/AddressState'
import ShippingAddressCity from './ShippingAddress/AddressCity'
import ShippingAddressStreet from './ShippingAddress/AddressStreet'
import ShippingAddressZip from './ShippingAddress/AddressZip'
import ShippingAddressApt from './ShippingAddress/AddressApt'
import ShippingAddressEdit from './ShippingAddress/AddressEdit'
import VideoCard from './VideoCard'
import ValleyScreen from './FakeWallet/Valley'
import ValleyCheckout from './FakeWallet/ValleyCheckout';
import CrazyLab from './FakeWallet/CrazyLab';
import BorderLine from './FakeWallet/BorderLine';
import Store from './FakeWallet/Store';
import BorderLineRefund from './FakeWallet/BorderLineRefund'


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
    Navigation.registerComponent('app.Notifications',()=>NotificationsHome)
    Navigation.registerComponent('app.NoficationScreen',()=>Notifications)
    Navigation.registerComponent('app.SliderPage',()=>SliderPage)
    Navigation.registerComponent('app.Wallet',()=>Wallet)
    Navigation.registerComponent('app.myProfile',()=>MyProfile)
    Navigation.registerComponent("app.shippingAddressShow",()=>ShippingAddressShow)
    Navigation.registerComponent("app.shippingAddressHome",()=>ShippingAddressHome)
    Navigation.registerComponent("app.shippingAddressCountry",()=>ShippingAddressCountry)
    Navigation.registerComponent("app.shippingAddressState",()=>ShippingAddressState)
    Navigation.registerComponent("app.shippingAddressCity",()=>ShippingAddressCity)
    Navigation.registerComponent("app.shippingAddressStreet",()=>ShippingAddressStreet)
    Navigation.registerComponent("app.shippingAddressZip",()=>ShippingAddressZip)
    Navigation.registerComponent("app.shippingAddressApt",()=>ShippingAddressApt)
    Navigation.registerComponent("app.shippingAddressEdit",()=>ShippingAddressEdit)
    Navigation.registerComponent("app.VideoCard",()=>VideoCard)
    Navigation.registerComponent("app.ValleyScreen",()=>ValleyScreen)
    Navigation.registerComponent("app.ValleyCheckout",()=>ValleyCheckout)
    Navigation.registerComponent("app.CrazyLab",()=>CrazyLab)
    Navigation.registerComponent("app.BorderLine",()=>BorderLine)
    Navigation.registerComponent("app.Store",()=>Store)
    Navigation.registerComponent("app.BorderLineRefund",()=>BorderLineRefund)
    

    

    
    
    
    
}