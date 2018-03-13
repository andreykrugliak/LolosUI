import { Container, Header, Content } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import React, { Component } from 'react';
import {View , Image,Text} from 'react-native'
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
        loading:true,
        showSplash:true
      })
    },1000)
    setTimeout(()=>{
      this.setState({
        loading:false
      })
    },3000)
  }
    render() {
        if(!this.state.loading && !this.state.showSplash){
          return <Text></Text>
        }
          if(this.state.loading && this.state.showSplash){
            return <SplashScreen/>
          }
        
      return (
        <LinearGradient colors={['#FF7C6E', '#F5317F']} style={styles.linearGradient}>
          <View style={styles.allItems}>
          <ImageLogoComponent/>
            <View style={{marginTop:46}}>
              <Text style={[styles.titleText,styles.transparentText]}>Main Title Goe's here</Text>
            </View>
            <View>
              <Text style={[styles.descriptionText,styles.transparentText]}>Description Will Be Here</Text>
            </View>
            <View style={{marginTop:164}}>
              <Button text={`PERSONA "A"`} onPress={()=>{
                this.props.navigator.push({
                  screen:'app.Login',
                  animationType:"slide-horizontal"
                })
                
                }}>
              </Button>
            </View>
            <View style={{marginTop:12}}>
              <Text style={[styles.personaText,styles.transparentText]}>Persona "B"</Text>
            </View>
          </View>
        </LinearGradient>
      );
    }
  }