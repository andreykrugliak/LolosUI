import React,{Component} from 'react';
import {Container, Header, Content, Footer, FooterTab, Button,Input, Text, Icon, Body, Right, Left,Title, Card, Badge, CardItem} from 'native-base';
import {View,Dimensions,Image,TouchableOpacity,FlatList} from 'react-native';
import CountryPicker, {
    getAllCountries
} from 'react-native-country-picker-modal'
import { HeaderComponent } from "@components/InviteFriends/HeaderComponent.js";
var WindowWidth = Dimensions.get('window').width
var WindowHeight = Dimensions.get('window').height
import styles from './style'

export default class Country extends Component{

    static navigatorStyle={
        navBarHidden:true
    }

    constructor(props){
        super(props)
        this.state={
            aptText:'',
            disabled:true,
            color:'#CCCCCC',
            bgColor:'#F0F0F0'
        }
    }

    _handleInput(text){
        this.setState({
            aptText:text
        })
        if(this.state.aptText){
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
                    Apt,Suite,Unit,etc...
                </Text>

                <View style={styles.inputContainer}>
                    <View style={styles.input}>
                    <Input value={this.state.aptText} style={{marginLeft:16}} returnKeyType='done' onChangeText={(text) =>{this._handleInput(text)}}/>
                    <TouchableOpacity style={styles.imageContainer} 
                        onPress={()=>{
                            this.setState({
                            Country:'',
                            
                        }) }}>
                    </TouchableOpacity>
                    </View>
                </View>

                <Button onPress={()=>{
                            this.props.navigator.push({
                                screen:'app.shippingAddressShow',
                                animationType:"slide-horizontal"
                            })
                         }}
                         disabled={this.state.disabled}
                         style={[styles.buttonContainer,{backgroundColor:this.state.bgColor}]}>
                                <Text style={[styles.buttonText,{color:this.state.color}]}>Next</Text>
                </Button>

            </View>
        )
    }
}  