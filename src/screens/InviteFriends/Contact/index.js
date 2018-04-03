import React,{Component} from 'react'
import {Text,View,Image, ImageBackground, TouchableOpacity, SafeAreaView,TextInput} from 'react-native'
import styles from './style'

// var AlphabetListView = require('react-native-alphabetlistview');

export default class InviteFriendsContact extends Component{
    static navigatorStyle={
        navBarHidden:true
    }

    render(){
        return(
            <View style={[styles.contianer]}>
                <View style={[styles.searchBarView]}>
                    <TextInput
                        style={{height: 60, borderRadius:5 ,backgroundColor:'#F0F0F0'}}
                        placeholder={"Search..."}
                    />
                </View>

            </View>
        )
    }
}