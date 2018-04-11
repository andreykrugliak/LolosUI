import React,{Component} from 'react';
import {Container, Header, Content, Footer, FooterTab, Button, Text, Icon, Body, Right, Left,Title, Card, Badge, CardItem} from 'native-base';
import {View,Dimensions,Image,TouchableOpacity,FlatList} from 'react-native';
import { HeaderComponent } from "@components/InviteFriends/HeaderComponent.js";
var WindowWidth = Dimensions.get('window').width
var WindowHeight = Dimensions.get('window').height
import styles from './style'

export default class AddressEdit extends Component{
    render(){
        return(
            <View style={styles.container}>

                <Image style={[{marginTop:41,alignSelf:'center',height:108,width:96}]} source={require('@images/HomePage/lolomailman.png')}/>

                <Text numberOfLines={2} style={[styles.headText,{marginTop:25,textAlign:'center',paddingHorizontal:81}]}>
                    Your Shipping Address
                </Text>

                <Text style={[styles.bodyText,{marginTop:39}]}>
                    44 Shirley Ave.
                </Text>
                
                <Text style={[styles.bodyText,{marginTop:0,paddingTop:4}]}>
                    West Chicago, IL60185
                </Text>

                <TouchableOpacity style={styles.editIcon}>
                    <Image style={{height:22,width:22}} source={require('@images/ShippingAddress/edit.png')}/>
                </TouchableOpacity>
            </View>
        )
    }
}