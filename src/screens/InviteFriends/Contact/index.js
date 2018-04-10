import React,{Component} from "react"
import {Text,View,TextInput,Image,ScrollView,TouchableHighlight, TouchableOpacity} from "react-native"
import Touchable from 'react-native-platform-touchable'
import styles from "./style"
import { HeaderComponent } from "@components/InviteFriends/HeaderComponent.js";


export default class InviteFriends extends Component{
    static navigatorStyle = {
        navBarHidden:true
      };

    render(){
        return(
            <View style={[styles.container]}>

                <HeaderComponent title="INVITE FRIENDS" navigator={this.props.navigator}/>
                <Text style={styles.headerText}>Earn Money, Easily</Text>
                <Text style={styles.subText}>by inviting freinds to use lolo’s you earn money, the more freinds you invite, more lolo’s in your wallet</Text>
                <Image source={require('@images/InviteFriends/two.png')} style={styles.image}/>
                <Text style={styles.invite}>2 invites per day</Text>
                <TouchableOpacity style={styles.button} onPress={()=>{
                    this.props.navigator.push({
                        screen:'app.InviteFriendsContactSearch',
                        animationType:"slide-horizontal"
                    })
                }}>
                    <Text style={styles.buttonText}>Next</Text>
                </TouchableOpacity>
            </View>
        )
    }
}