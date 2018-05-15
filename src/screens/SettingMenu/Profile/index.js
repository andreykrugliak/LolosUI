import React,{Component} from 'react'
import {Text,TextInput,Image,View} from 'react-native'
import styles from './style'
import Touchable from 'react-native-platform-touchable';

export default class Profile extends Component{

    static navigatorStyle = {
        navBarHidden:true
      };

    render(){
        return(
           <View>
            <View style={styles.header}>
                <View><Image style={styles.backIcon} source={require('@images/SettingMenu/backArrow.png')}/></View>
                <Text style={[styles.headerText]}>MY PROFILE</Text>
            </View>
            <View style={styles.content}>
                <Image style={styles.profileIcon} source={require('@images/SettingMenu/avatar.png')}/>
                <Image style={styles.addIcon} source={require('@images/SettingMenu/add.png')}/>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>Full Name</Text>
                </View>
                <View style={styles.textInput}>
                    <TextInput 
                            placeholder={"ff"}
                    />
                </View>
            </View>
           </View> 
        )
    }
}