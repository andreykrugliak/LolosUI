import { Container, Header, Content } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import React, { Component } from 'react';
import {View , Image,Text, ImageBackground} from 'react-native'
import styles from './style'
import {ImageLogoComponent} from '@components/ImageLogoComponent'
import Button from '@components/ButtonComponent'
import SplashScreen from '@screens/SplashScreen'


export default class ButtonExample extends Component {
  static navigatorStyle = {
    navBarHidden:true
  };
  constructor(props){
    super(props)
    this.state = {
      loading:false,
      showSplash:false,
    }
  }
  componentDidMount(){
    setTimeout(()=>{
      this.setState({
        
        showSplash:true
      })
    },1000)
   
  }
  _splashScreen(){
    
    if(this.state.showSplash==true){
      return(
          <SplashScreen navigator={this.props.navigator}/>
      )
    }
  }
    render() {
       
        
      return (
        <ImageBackground style={styles.container} source={require('@images/SplashScreen/splash.jpg')}>
          <Image style={{position:'absolute',top:240,right:100,height:104,width:104}} source={require('@images/SplashScreen/image2.png')}></Image>
            {this._splashScreen()}
        </ImageBackground>
        
      );
    }
  }