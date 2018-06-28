import React,{Component} from 'react'
import {Text,View,Image, ImageBackground, TouchableOpacity, SafeAreaView, ActivityIndicator, Dimensions } from 'react-native'
import styles from './style';
import firebase from 'react-native-firebase';
import Country from '../ShippingAddress/AddressCountry';
import FCM, {FCMEvent, RemoteNotificationResult, WillPresentNotificationResult, NotificationType} from 'react-native-fcm';
const {width, height} = Dimensions.get('window');
export default class DrawerScreen extends Component{
    constructor(){
        super()
        this.state={
            loading: false,
            already: false,
            country: '',
            street: '',
            apt :'',
            city: '',
            zipcode: '',
            state: ''
        }
    }
    static navigatorStyle={
        navBarHidden:true
    }
    componentDidMount(){
        
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
                        <Text style={styles.drawerInnerText}>Invite Friends</Text>
                    </TouchableOpacity>
                    <View style={styles.line}></View>

                    <TouchableOpacity 
                    onPress={()=>   
                        {
                            let self = this
                            // const {country, city, apt, street, zipcode} = this.state;        
                            
                            this.setState({loading: true})
                           
                            let uid = firebase.auth().currentUser.uid;    
                                                   
                            firebase.database().ref('users/'+uid).once('value',function(snapshot){
                                let country=snapshot.child('country').val();
                                let city=snapshot.child('city').val();            
                                let street=snapshot.child('street').val();
                                let apt = snapshot.child('apt').val();
                                let zipcode = snapshot.child('zipcode').val();
                                let state = snapshot.child('state').val();
                                if(country===null) country=''
                                if(city===null) city=''
                                if(street===null) street=''
                                if(apt===null) apt=''
                                if(zipcode===null) zipcode=''
                                if(state === null) state=''
                                if(country!==''&&city!==''&&street!==''&&zipcode!==''){
                                    self.props.navigator.handleDeepLink({
                                        link: "sidemenu",
                                        payload: {screen:"app.shippingAddressEdit",title:'SHIPPING ADDESS'}
                                    })
                                }else{
                                    self.props.navigator.handleDeepLink({
                                        link: "sidemenu",
                                        payload: {screen:"app.shippingAddressHome",title:'SHIPPING ADDESS'}
                                    })
                                }
                            })
                                                 
                           
                                
                            
                            
                            
                        }
                    }
                    style={{paddingBottom:10}}>
                        <Text style={styles.drawerInnerText}>Shipping Address</Text>
                    </TouchableOpacity>
                    <View style={styles.line}></View>
                    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                        <TouchableOpacity 
                            onPress={()=>{
                                this.props.navigator.handleDeepLink({
                                    link: "sidemenu",
                                    payload: {screen:"LifeScreen",title:'LANDING'}
                                    }) 
                            }}
                            style={{paddingBottom:10}}>
                                <Text style={styles.drawerInnerText}>Life Earnings Program</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={{width:60, height: 25,alignItems:'center',justifyContent:'center',backgroundColor:'#ff4273',borderRadius:3,marginRight:16}}>
                                    <Text style={{color:'white'}}>Soon</Text>
                                </View>
                            </TouchableOpacity>
                    </View>
                    <View style={styles.line}></View>
 
                </View>
                <View style={{position:'absolute',bottom: 150,alignItems: 'center',width:'100%'}}>
                    <Text style={{fontSize:15,color:'rgba(0,0,0,0.4)'}}>Check our</Text>
                    <Text style={{fontSize:15,color:'rgba(0,0,0,0.4)'}}>
                        <Text style={{color:'#4d92e3'}} onPress={()=>
                                this.props.navigator.handleDeepLink({
                                    link: "sidemenu",
                                    payload: {screen:"Terms",title:'LANDING'}
                                }) 
                            }>Terms of Use </Text>
                         & 
                        <Text style={{color:'#4d92e3'}} onPress={()=>
                                this.props.navigator.handleDeepLink({
                                    link: "sidemenu",
                                    payload: {screen:"Privacy",title:'LANDING'}
                                }) 
                            }> Privary Policy</Text>
                    </Text>
                </View>
               
                
                
            
            <Image style={styles.footerImage} source={require('@images/DrawerScreen/footer.png')}/>
           {this.state.loading?
           <View style={{flex:1,width:width, height: height,justifyContent:"center",alignItems:'center'}}>
               <ActivityIndicator size='large' color='#ffb100' />
           </View>:null}

            </View>
        )
    }
}