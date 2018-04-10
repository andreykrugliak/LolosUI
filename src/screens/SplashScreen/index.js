import {Container,Button, Content} from 'native-base';
import React, { Component } from 'react';
import { Image, View, Easing, Animated, TouchableWithoutFeedback,TouchableOpacity, Dimensions, Text} from 'react-native';
import styles from './style'
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

import LinearGradient from 'react-native-linear-gradient';
export default class ButtonExample extends Component {
    
    componentWillMount(){
        this.initialPosition = new Animated.ValueXY({ x : 0, y : windowHeight-141 });
        Animated.spring(this.initialPosition,{
            toValue :{ x : 0, y : ((windowHeight)-220)},
            
            easing:Easing.bounce
        }).start();
    }
    render() {        
      return (
          <Container>
              <Animated.View style={[this.initialPosition.getLayout(),{width:windowWidth,backgroundColor:"transparent"}]}>

                  <Text style={styles.ShoppingText}>Shopping online made fun</Text>

                  <LinearGradient 
                  start={{x: 1.04, y: 0.55}} end={{x: -0.04, y: 0.45}}  
                  locations={[0.00,1.00]}
                   style={styles.linerButton} colors={['#F5317F', '#FF7C6E']} >
                        <TouchableOpacity onPress={()=>{
                  this.props.navigator.push({
                    screen:'app.Onboarding',
                    animationType:"slide-horizontal"
                  })
                  
                  }} style={styles.ButtonView}>
                            <Text style={styles.ButtonText}>Create Account</Text>
                        </TouchableOpacity>
                  </LinearGradient>

                  <Button onPress={()=>{
                  this.props.navigator.push({
                    screen:'app.LoginScreen',
                    animationType:"slide-horizontal"
                  })
                  
                  }}style={[styles.ButtonView,{marginHorizontal:30},{marginTop:10},{backgroundColor:'#FFFFFF'}]} >
                      <Text style={styles.ButtonText2}>
                          Log In
                      </Text>
                  </Button>
              </Animated.View>
          </Container>
        // <Container>
        //         <View style={{flex:1}}>
        //             {/* <Animated.View
        //                 style={[this.initialPosition.getLayout(),{height:50,width:50,backgroundColor:"#f00"}]}
        //             >

        //              </Animated.View> */}
        //              <Animated.Image
        //                 style={[/**this.initialPosition.getLayout()*/{
        //                 width: windowWidth,
        //                 //resizeMode:"contain",
        //                 height: windowHeight,
        //                 //alignSelf:"center"
        //             }]}
        //                 source={require('@images/SplashScreen/splash.png')}
        //             />
        //         </View> */
        // </Container>
      );
    }
  }