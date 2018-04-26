import React,{Component} from 'react';
import {Container, Header, Content, Footer, FooterTab, Button,Input, Text, Icon, Body, Right, Left,Title, Card, Badge, CardItem} from 'native-base';
import {View,Dimensions,Image,TouchableOpacity,FlatList} from 'react-native';

import { HeaderComponent } from "@components/InviteFriends/HeaderComponent.js";
var WindowWidth = Dimensions.get('window').width
var WindowHeight = Dimensions.get('window').height
import styles from './style'

export default class Zip extends Component{

    static navigatorStyle={
        navBarHidden:true
    }

    constructor(props){
        super(props)
        this.state={
            disabled:true,
            zipText:'',
            color:'#CCCCCC',
            bgColor:'#F0F0F0'
        }
    }

    _handleInput(text){
        this.setState({
            zipText:text
        })
        if(this.state.zipText){
            this.setState({
                disabled:false,
                color:'#fff',
                bgColor:'#FF4273'
            })
        }
    }

    render(){
        return(
            <View style={styles.container}>
                <HeaderComponent title="SHIPPING ADDRESS" navigator={this.props.navigator}/>

                <Text style={[styles.bodyText,{marginTop:29}]}>
                    Zip/Postal Code
                </Text>

                <View style={styles.inputContainer}>
                    <View style={styles.input}>
                    <Input value={this.state.zipText} style={{marginLeft:16}} returnKeyType='done' onChangeText={(text) =>{this._handleInput(text)}}/>
                    <TouchableOpacity style={styles.imageContainer} 
                        onPress={()=>{
                            this.setState({
                            zipText:'',
                            
                        }) }}>
                        <Image style={styles.crossImage} source={require('@images/LoginScreen/cross.png')}/>     
                    </TouchableOpacity>
                    </View>
                </View>

                <Button onPress={()=>{
                            this.props.navigator.push({
                                screen:'app.shippingAddressApt',
                                animationType:"slide-horizontal"
                            })
                         }}disabled={this.state.disabled}
                         style={[styles.buttonContainer,{backgroundColor:this.state.bgColor}]}>
                                <Text style={[styles.buttonText,{color:this.state.color}]}>Next</Text>
                </Button>

            </View>
        )
    }
}  