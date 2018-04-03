import React,{Component} from 'react'
import {Text,View,Image, ImageBackground, TouchableOpacity, SafeAreaView} from 'react-native'
import styles from './style'

export default class InviteFriendsSucess extends Component{
    static navigatorStyle={
        navBarHidden:true
    }
    render(){
        return(
            <View style={[styles.Container]}>
                <View style={[styles.innerView]}>
                    <Text style={[styles.titleText]}>Your Invitation Successfully Sent</Text>
                    <Image style={[styles.img]} source={require('@images/InviteFriends/success.png')} />
                    <Text style={[styles.bottomLine]}>stay tune…</Text>
                </View>
            </View>
        )
    }
}