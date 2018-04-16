import React,{Component} from 'react';
import {Container, Header, Content, Footer, FooterTab, Button, Text, Icon, Body, Right, Left,Title, Card, Badge, CardItem} from 'native-base';
import {View,Dimensions,Image,TouchableOpacity,FlatList,Platform} from 'react-native';
import { HeaderComponent } from "@components/InviteFriends/HeaderComponent.js";
var WindowWidth = Dimensions.get('window').width
var WindowHeight = Dimensions.get('window').height
import styles from './style'

export default class ShippingAddress extends Component{

    static navigatorStyle={
        navBarHidden:true
    }

    render(){
        return(

            <View style={styles.container}>
                <HeaderComponent title="SHIPPING ADDRESS" navigator={this.props.navigator}/>
                <Text style={[styles.headText,]}>
                    Are We Good?
                </Text>
                <Text style={[styles.tagline]}>
                    Make sure this is the currect address
                </Text>

                <Text style={[styles.bodyText,]}>
                    44 Shirley Ave.
                </Text>
                <Text style={[styles.bodyText,{marginTop:0,paddingTop:4}]}>
                    West Chicago, IL60185
                </Text>
                
                <Image style={styles.emoj} source={require('@images/HomePage/lolomailman.png')}/>

                <TouchableOpacity
                onPress={()=>{
                            this.props.navigator.push({
                                screen:'app.HomePage',
                                animationType:"slide-horizontal"
                            })
                         }}
                  style={styles.btnGoodContainer}>
        
                    <View style={styles.btnGood}>
                        <Text style={styles.btnGoodText}>We Good!</Text>
                    </View>
                </TouchableOpacity>

            </View>
        )
    }
}