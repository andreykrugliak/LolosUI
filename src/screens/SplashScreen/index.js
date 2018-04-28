import {Container,Button, Content} from 'native-base';
import React, { Component } from 'react';
import { Image, View, Easing, Animated, TouchableWithoutFeedback,TouchableOpacity, Dimensions, Text} from 'react-native';
import styles from './style'
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

import LinearGradient from 'react-native-linear-gradient';
export default class ButtonExample extends Component {
    
    componentWillMount(){

        this.imageinitialPosition = new Animated.ValueXY({x:0 , y: 100})
        Animated.spring(this.imageinitialPosition,{
            toValue :{ x : 0, y : 0},
            
            easing:Easing.elastic 
        }).start();
        this.initialPosition = new Animated.ValueXY({ x : 0, y : windowHeight-150 });
        Animated.parallel([
                  
        // Animated.spring(this.initialPosition,{
        //     toValue :{ x : 0, y : ((windowHeight)-350) },
           
        //     easing:Easing.elastic 
        // }),
        Animated.spring(this.initialPosition,{
            toValue :{ x : 0, y : ((windowHeight-400)) },
            easing:Easing.elastic,
            duration:100
        }),
        Animated.timing(this.initialPosition,{
            toValue :{ x : 0, y : ((windowHeight-200)) },
            duration:1000
        })]).start();
    }
    // componentDidMount(){
    //     Animated.parallel([
    //         Animated.timing(this.AnimatedValue1,{
    //             toValue : 500,
    //             duration:200
    //         }),
    //         Animated.spring(this.AnimatedValue2,{
    //             toValue : 3
    //         })
    //     ]).start()
    // }
    render() {  
        const animationStyles = {
            transform:[
                {translateY : this.AnimatedValue1},
                {scale : this.AnimatedValue2}
            ]
        }      
      return (
         
          <Container>
            <Animated.Image style={[this.imageinitialPosition.getLayout(),styles.loloImage]} source={require('@images/component/lolos.png')}/>
              <Animated.View style={[this.initialPosition.getLayout(),{width:windowWidth,backgroundColor:"transparent"}]}>

                  <Text style={styles.ShoppingText}>Earn them, Spend them!</Text>

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
                            <Text style={styles.ButtonText}>Check It Out!</Text>
                        </TouchableOpacity>
                  </LinearGradient>

                  {/* <Button onPress={()=>{
                  this.props.navigator.push({
                    screen:'app.LoginScreen',
                    animationType:"slide-horizontal"
                  })
                  
                  }}style={[styles.ButtonView,{marginHorizontal:30},{marginTop:10},{backgroundColor:'#FFFFFF'}]} >
                      <Text style={styles.ButtonText2}>
                          Log In
                      </Text>
                  </Button> */}
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