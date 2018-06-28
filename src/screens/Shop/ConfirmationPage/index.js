import React,{Component} from 'react';
import {Container, Header, Content, Footer, FooterTab, Button, Text, Icon, Body, Right, Left,Title, Card, Badge, CardItem} from 'native-base';
import {View,Dimensions,Image,TouchableOpacity,FlatList,ScrollView,ImageBackground} from 'react-native';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
import Swiper from 'react-native-deck-swiper'
var WindowWidth = Dimensions.get('window').width
var WindowHeight = Dimensions.get('window').height
import styles from './style';
import firebase from 'react-native-firebase'
import DropdownAlert from 'react-native-dropdownalert';

export default class ConfirmationPage extends Component{

    constructor(){
        super()
        this.state = {
            country: '',
            street: '',
            zipcode: '',
            city: '',
            state: '',
            apt: ''
        }
    }

    static navigatorStyle = {
        navBarHidden:true
    };
    componentWillMount(){
        let uid=firebase.auth().currentUser.uid;
        let country,street,zipcode,city,state,apt;
        
        firebase.database().ref('users/'+uid).on('value',function(snapshot){
            country=snapshot.child('country').val();
            street=snapshot.child('street').val();            
            city=snapshot.child('city').val();
            zipcode=snapshot.child('zipcode').val();
            state = snapshot.child('state').val();
            apt = snapshot.child('apt').val();
           this.setState({
               country,
               city,
               street,
               zipcode,
               state,
               apt
           })
          
        }.bind(this));
        // alert(JSON.stringify(this.props.item))
    }

    render(){
        return(
            <View style={{flex:1}}>
            <ScrollView >
                <ImageBackground style={styles.image} source={{uri: this.props.item.Preview_Img}}>
                <TouchableOpacity style={styles.back}
                                    onPress={()=>{
                                        this.props.navigator.pop({animationType:"slide-horizontal"})
                                        }}>
                        <Image style={[{height:24,width:12,tintColor:'#fff'}]} source={require('@images/Shop/back.png')}/>
                </TouchableOpacity>                
                </ImageBackground>

                    <Text style={styles.total}>Total</Text>
                    <Text style={styles.totalNo}>{this.props.item.Price_Lolos} lolos</Text>
                    <View style={styles.emojys}>
                        <Image style={styles.emoj} source={require('@images/InviteFriends/2smiley.png')}></Image>
                        {/* <Image style={styles.emoj} source={require('@images/Assets/dead.png')}></Image> */}
                    </View>
                    <View style={styles.footer}>
                        <Text style={styles.send}>Send To:</Text>
                        <Text style={styles.send}>{this.state.street}, {this.state.apt}{'\n'}{this.state.city}, {this.state.state}, {this.state.country}, {this.state.zipcode}</Text>
                    </View>
                    <View style={styles.button}>
                    {/* <View style={styles.line}></View> */}
                  
           
                </View>
              
            </ScrollView>
            <TouchableOpacity onPress={()=>{
                        let self = this
                        let uid = firebase.auth().currentUser.uid;
                        
                        let item = {}
                        item.time = new Date().getTime()
                        item.Lolos_Category=this.props.item.Lolos_Category
                        item.Price_Dollar=this.props.item.Price_Dollar
                        item.Price_Lolos=this.props.item.Price_Lolos
                        item.Product_Name=this.props.item.Product_Name
                        item.gallery_imgs = this.props.item.gallery_imgs
                        item.Preview_Img = this.props.item.Preview_Img
                        item.Product_rating = this.props.item.Product_rating
                        item.Escaped_SKU = this.props.item.Escaped_SKU
                        item.Shipping_Price_USA = this.props.item.Shipping_Price_USA
                        item.Original_Marketplace_URL = this.props.item.Original_Marketplace_URL
                        console.log('++----',item)                        
                        firebase.database().ref('users/'+uid+'/balance').transaction(function(balance){
                            return balance-self.props.item.Price_Lolos
                        })
                        firebase.database().ref('users/'+uid+'/transaction_history').push({
                            time: new Date().getTime(),
                            description: 'Product purchased',
                            type: 'purchase',
                            balance: self.props.item.Price_Lolos
                        })
                        firebase.database().ref('purchased/'+uid).push(item)
                         this.props.navigator.push({
                            screen:'app.HomePage',
                            animationType:"slide-horizontal",
                            passProps: {from: true,purchase: true}
                        })  
                    }} style={styles.btnBackground}>
                        <Text style={styles.buy}>Buy</Text>
                    </TouchableOpacity>
                    <DropdownAlert 
                    ref={ref=>this.dropdown = ref}
                    showCancel={false}
                    renderImage={()=>this.renderImage()}
                    useNativeDriver={true}
                    onClose={()=> this.props.navigator.resetTo({
                        screen:'app.HomePage',
                        animationType: 'slide-horizontal',
                        passProps: {from: true,index: 1}
                    })}
                    closeInterval={10000}
                />
            </View>  
        )
    }
    renderImage(){
          return(
              <Image source={require('@images/Assets/em.png')} style={{width:40,height:40}} />
          )
      }
    sendNOtification(){
       
        this.dropdown.alertWithType('warn','Check out your wallet','You just got a reward')
        
        // this.props.navigator.resetTo({
        //     screen:'app.HomePage',
        //     animationType: 'slide-horizontal',
        //     passProps: {from: true,reward: true}
        // })
      }

}
