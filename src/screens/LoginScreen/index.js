import React, { Component } from 'react';
import {View , Image,Text,TouchableOpacity, ImageBackground, Dimensions} from 'react-native'
import {Input,Button} from 'native-base'
import styles from './style'
export default class LoginScreen extends Component{
    static navigatorStyle = {
        navBarHidden:true
      };
    render(){
        return(
            <View style={styles.container}>
                <Image style={styles.loloLogo} source={require('@images/LoginScreen/lolos.png')}/>
                <Text style={styles.shoppingText}>Shopping online made fun</Text>
                <Image style={styles.threeImages} source={require('@images/LoginScreen/three.png')}/>
                <Text style={styles.welcomeText}>Welcome back! </Text>
                
                <View style={styles.inputText1}>
                    <Input style={{paddingLeft:20}}placeholder="Full Name"/>
                </View>
                <View style={styles.inputText2}>
                    <Input style={{paddingLeft:20}}placeholder="Password"/>
                </View>
                <Text style={styles.forgetPassword}>Forgot your password?</Text>
                <Button onPress={()=>{
                    this.props.navigator.push({
                    screen:'app.HomePage',
                   
                })}}  style={styles.buttonStyle}>
                    <Text style={styles.buttonText}>
                        Log In
                    </Text>
                </Button>
            </View>
        )
    }
}