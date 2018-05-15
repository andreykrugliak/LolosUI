import React,{Component} from 'react';
import {Container, Header, Content, Footer, FooterTab, Button,Input, Text, Icon, Body, Right, Left,Title, Card, Badge, CardItem} from 'native-base';
import {View,Dimensions,Image,TouchableOpacity,FlatList} from 'react-native';

import { HeaderComponent } from "@components/InviteFriends/HeaderComponent.js";
var WindowWidth = Dimensions.get('window').width
var WindowHeight = Dimensions.get('window').height
import styles from './style';
import firebase from 'react-native-firebase'

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
    componentDidMount(){
        let uid=firebase.auth().currentUser.uid;
        let zipText;
        
        firebase.database().ref('users/'+uid).on('value',function(snapshot){
            
            zipText=snapshot.child('zipcode').val();
            
            if(zipText === null) zipText = ''
            if(zipText!=='') this.setState({ disabled:false, color:'#fff',bgColor:'#FF4273'})
           this.setState({              
               zipText
           })
          
        }.bind(this));
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
    next(){
        let uid = firebase.auth().currentUser.uid;
        firebase.database().ref('users/'+uid).update({
            zipcode: this.state.zipText
        })
        .then(()=>{
            this.props.navigator.push({
            screen:'app.shippingAddressApt',
            animationType:"slide-horizontal"
            })
        })
        
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

                <Button onPress={()=>this.next()}disabled={this.state.disabled}
                         style={[styles.buttonContainer,{backgroundColor:this.state.bgColor}]}>
                                <Text style={[styles.buttonText,{color:this.state.color}]}>Next</Text>
                </Button>

            </View>
        )
    }
}  