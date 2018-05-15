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
                    
                    <Text style={styles.headerText}>Menu</Text>
                
                    
                </View>

                <View style={styles.drawerContainer}>
                    <TouchableOpacity  style={{paddingBottom:10}}
                    onPress={()=>  {
                           this.props.navigator.handleDeepLink({
                        link: "sidemenu",
                        payload: {screen:"app.myProfile",title:'MY PROFILE'}
                        })   
                         {/* this.props.navigator.push({
                            screen: 'app.myProfile',
                            title: 'MY PROFILE',
                            animationType: 'fade'
                        }) */}
                        } 
                        }>
                        <Text style={styles.drawerInnerText}>My Profile</Text>
                    </TouchableOpacity>
                    <View style={styles.line}></View>

                    <TouchableOpacity style={{paddingBottom:10}}
                     onPress={()=>   
                        this.props.navigator.handleDeepLink({
                        link: "sidemenu",
                        payload: {screen:"app.InviteFriendsHome",title:'Bookmarks'}
                        })}>
                        <Text style={styles.drawerInnerText}>Invite Freinds</Text>
                    </TouchableOpacity>
                    <View style={styles.line}></View>

                    <TouchableOpacity 
                    onPress={()=>   
                        this.props.navigator.handleDeepLink({
                        link: "sidemenu",
                        payload: {screen:"app.shippingAddressEdit",title:'SHIPPING ADDESS'}
                        })}
                    style={{paddingBottom:10}}>
                        <Text style={styles.drawerInnerText}>Shipping Address</Text>
                    </TouchableOpacity>
                    <View style={styles.line}></View>

                    {/* <TouchableOpacity 
                    onPress={()=>{
                        this.props.navigator.handleDeepLink({
                            link: "sidemenu",
                            payload: {screen:"app.LoginScreen",title:'LANDING'}
                            })
                    }}
                    style={{paddingBottom:10}}>
                        <Text style={styles.drawerInnerText}>Log Out</Text>
                    </TouchableOpacity>
                    <View style={styles.line}></View> */}

                </View>
                
                
            
            <Image style={styles.footerImage} source={require('@images/DrawerScreen/footer.png')}/>
           

            </View>
        )
    }
}