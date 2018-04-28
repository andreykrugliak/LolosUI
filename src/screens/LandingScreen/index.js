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
        <View style={styles.container}>
            {this._splashScreen()}
        </View>
        // <ImageBackground style={styles.container} source={require('@images/SplashScreen/newsplash.jpg')}>

        //     {this._splashScreen()}
        // </ImageBackground>
        
      );
    }
  }