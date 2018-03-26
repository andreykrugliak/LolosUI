import {Container, Content} from 'native-base';
import React, { Component } from 'react';
import { Image, View, Easing, Animated, TouchableWithoutFeedback, Dimensions} from 'react-native';
import styles from './style'
const windowHeight = Dimensions.get('window').height;
export default class ButtonExample extends Component {
    
    componentWillMount(){
        this.initialPosition = new Animated.ValueXY({ x : 0, y : windowHeight-141 });
        Animated.spring(this.initialPosition,{
            toValue :{ x : 0, y : ((windowHeight / 2)-100)},
            
            easing:Easing.bounce
        }).start();
    }
    render() {        
      return (
        <Container>
                <View style={{flex:1}}>
                    {/* <Animated.View
                        style={[this.initialPosition.getLayout(),{height:50,width:50,backgroundColor:"#f00"}]}
                    >

                     </Animated.View> */}
                     <Animated.Image
                        style={[this.initialPosition.getLayout(),{
                        width: 125,
                        resizeMode:"contain",
                        height: 125,
                        alignSelf:"center"
                    }]}
                        source={require('@images/SplashScreen/image2.png')}
                    />
                </View>
        </Container>
      );
    }
  }