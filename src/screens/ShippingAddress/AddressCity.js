import React,{Component} from 'react';
import {Container, Header, Content, Footer, FooterTab, Button,Input, Text, Icon, Body, Right, Left,Title, Card, Badge, CardItem} from 'native-base';
import {View,Dimensions,Image,TouchableOpacity,FlatList} from 'react-native';
import CountryPicker, {
    getAllCountries
} from 'react-native-country-picker-modal'
import { HeaderComponent } from "@components/InviteFriends/HeaderComponent.js";
var WindowWidth = Dimensions.get('window').width
var WindowHeight = Dimensions.get('window').height
import styles from './style';
import firebase from 'react-native-firebase'

export default class Country extends Component{

    static navigatorStyle={
        navBarHidden:true
    }

    constructor(props){
        super(props)
        this.state={
            disabled:true,
            cityText:'',
            color:'#CCCCCC',
            bgColor:'#F0F0F0'
        }
    }

    _handleInput(text){
        this.setState({
            cityText:text
        })
        if(this.state.cityText){
            this.setState({
                disabled:false,
                color:'#fff',
                bgColor:'#FF4273'
            })
        }
    }
    next(){
        let uid = firebase.auth().currentUser.uid
        firebase.database().ref('users/'+uid).update({
            city: this.state.cityText
        })
        .then(()=>{
                this.props.navigator.push({
                screen:'app.shippingAddressStreet',
                animationType:"slide-horizontal"
            })
        })
        
    }
    render(){
        return(
            <View style={styles.container}>
                <HeaderComponent title="SHIPPING ADDRESS" navigator={this.props.navigator}/>

                <Text style={[styles.bodyText,{marginTop:29}]}>
                    City
                </Text>

                <View style={styles.inputContainer}>
                    <View style={styles.input}>
                    <Input value={this.state.cityText} style={{marginLeft:16}} returnKeyType='done' onChangeText={(text) =>{this._handleInput(text)}}/>
                    <TouchableOpacity style={styles.imageContainer} 
                        onPress={()=>{
                            this.setState({
                            cityText:'',
                            
                        }) }}>
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