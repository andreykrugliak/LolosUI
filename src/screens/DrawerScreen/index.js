import React,{Component} from 'react'
import {Text,View,Image, ImageBackground, TouchableOpacity, SafeAreaView} from 'react-native'
import styles from './style'

export default class DrawerScreen extends Component{
    static navigatorStyle={
        navBarHidden:true
    }
    render(){
        return(
            <View style={styles.flex}>
            
            <View style={styles.header}>
                <TouchableOpacity onPress={()=>{this.props.navigator.toggleDrawer({
                                        side: 'left',
                                        to:'close',
                                        })}} 
                                        style={styles.leftIconContainer}>
                                        
                    <Image style={styles.leftIcon} source={require('@images/DrawerScreen/left.png')}/>
                </TouchableOpacity>
                
                <Text style={styles.headerText}>LOLO'S</Text>
              
                
            </View>

            
            
                <View style={styles.drawerContainer}>
                <TouchableOpacity>
                    <Text style={styles.drawerInnerText}>My Profile</Text>
                </TouchableOpacity>
                <View style={styles.line}></View>
                <TouchableOpacity>
                    <Text style={styles.drawerInnerText}>Invite Freinds</Text>
                </TouchableOpacity>
                <View style={styles.line}></View>
                <TouchableOpacity>
                    <Text style={styles.drawerInnerText}>Shipping Address</Text>
                </TouchableOpacity>
                <View style={styles.line}></View>
                <TouchableOpacity>
                    <Text style={styles.drawerInnerText}>Log Out</Text>
                </TouchableOpacity>
                <View style={styles.line}></View>
                </View>
                
                
            
            <Image style={styles.footerImage} source={require('@images/DrawerScreen/footer.png')}/>
           

            </View>
        )
    }
}