import React,{Component} from 'react'
import {Text,View,Image, TouchableOpacity} from 'react-native'

import styles from './style'

export const HeaderComponent = (props)=>{

return(
    <View style={styles.container}>
        <TouchableOpacity style={styles.imageContainer} 
            onPress={()=>{
                props.navigator.pop({animationType:"slide-horizontal"})
                    }} >
                <Image style={styles.backImage} source={require('@images/InviteFriends/back.png')}/>
        </TouchableOpacity>
        <Text style={styles.text}>INVITE FREINDS</Text>
    </View>
)}