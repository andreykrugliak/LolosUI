import React,{Component} from 'react';
import {Container, Header, Content, Footer, FooterTab, Button, Text, Icon, Body, Right, Left,Title, Card, Badge, CardItem} from 'native-base';
import {View,Dimensions,Image,TouchableOpacity,FlatList} from 'react-native';
import Swiper from 'react-native-deck-swiper'
import { HeaderComponent } from "@components/InviteFriends/HeaderComponent.js";
var WindowWidth = Dimensions.get('window').width
var WindowHeight = Dimensions.get('window').height
import styles from './style'

export default class AddressHome extends Component{

    static navigatorStyle={
        navBarHidden:true
    }

    render(){
        return(
            <View style={styles.container}>
                 <HeaderComponent title="SHIPPING ADDRESS" navigator={this.props.navigator}/>
                 <Text style={[styles.headText,{marginTop:32}]}>
                     Where To?
                 </Text>

                 <Text numberOfLines={3} style={[styles.bodyText,{marginTop:20,paddingHorizontal:40}]}>
                     when You buy Stuff,we need to make sure you get them,for that we need your address
                 </Text>

                 <Image style={[styles.emoj,{bottom:WindowWidth-52-108}]} source={require('@images/HomePage/lolomailman.png')}/>

                 <TouchableOpacity
                 onPress={()=>{
                            this.props.navigator.push({
                                screen:'app.shippingAddressStreet',
                                animationType:"slide-horizontal"
                            })
                         }}
                  
                   style={styles.btnGoodContainer}>
     
                    <View style={styles.btnGood}>
                        <Text style={styles.btnGoodText}>Next</Text>
                    </View>
                </TouchableOpacity>

            </View>
        )
    }
}