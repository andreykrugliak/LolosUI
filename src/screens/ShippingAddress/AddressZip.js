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
            zipText:''
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
                    <Input value={this.state.zipText} style={{marginLeft:16}} returnKeyType='done' onChangeText={(text) => this.setState({zipText:text})}/>
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
                                screen:'app.HomePage',
                                animationType:"slide-horizontal"
                            })
                         }}style={[styles.buttonContainer]}>
                                <Text style={[styles.buttonText]}>Next</Text>
                </Button>

            </View>
        )
    }
}  