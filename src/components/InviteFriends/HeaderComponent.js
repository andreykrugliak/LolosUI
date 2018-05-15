import React,{Component} from 'react'
import {Text,View,Image, TouchableOpacity} from 'react-native'
import { isIphoneX, ifIphoneX } from 'react-native-iphone-x-helper'
import {Container, Header, Content, Footer, FooterTab, Button,Icon, Body, Right, Left,Title, Card, Badge, CardItem} from 'native-base';


import styles from './style'

export const HeaderComponent = (props)=>{

return(
    <View style={[styles.container]}>
        <TouchableOpacity style={styles.imageContainer} 
            onPress={()=>{
                props.navigator.pop({animationType:"slide-horizontal"})
                    }} >
                <Image style={styles.backImage} source={require('@images/DrawerScreen/left.png')}/>
        </TouchableOpacity>
        <Text style={styles.text}>{props.title}</Text>
    </View>
//     <Header style={styles.headerStyle}>
//     <Left style={styles.headerLeftSide}>
//         <Button transparent onPress={()=>{
           
//             this.props.navigator.toggleDrawer({
//                 side:'left',
//                 to:'open'
//             })
//         }}>
//             <Image style={styles.back} source={require('@images/DrawerScreen/left.png')}></Image>
//         </Button>
//     </Left>

//     <Body style={styles.centerLogo}>
//         <Title style={styles.headerText}>LOLO'S</Title>
//     </Body>

// </Header>
)}