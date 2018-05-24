import React,{Component} from 'react';
import {Container, Header, Content, Footer, FooterTab, Button, Text, Icon, Body, Right, Left,Title, Card, Badge, CardItem} from 'native-base';
import {View,Dimensions,Image,TouchableOpacity,FlatList,ScrollView,ImageBackground} from 'react-native';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
import Swiper from 'react-native-deck-swiper'
var WindowWidth = Dimensions.get('window').width
var WindowHeight = Dimensions.get('window').height
import styles from './style';
import firebase from 'react-native-firebase'


export default class ConfirmationPage extends Component{

    constructor(){
        super()
        this.state = {
            country: '',
            street: '',
            zipcode: '',
            city: ''
        }
    }

    static navigatorStyle = {
        navBarHidden:true
    };
    componentWillMount(){
        let uid=firebase.auth().currentUser.uid;
        let country,street,zipcode,city;
        
        firebase.database().ref('users/'+uid).on('value',function(snapshot){
            country=snapshot.child('country').val();
            street=snapshot.child('street').val();            
            city=snapshot.child('city').val();
            zipcode=snapshot.child('zipcode').val();
     
           this.setState({
               country,
               city,
               street,
               zipcode
           })
          
        }.bind(this));
    }

    render(){
        return(
            <View style={{flex:1}}>
            <ScrollView >
                <ImageBackground style={styles.image} source={require('@images/HomePage/image.jpg')}>
                <TouchableOpacity style={styles.back}
                                    onPress={()=>{
                                        this.props.navigator.pop({animationType:"slide-horizontal"})
                                        }}>
                        <Image style={[{height:24,width:12,tintColor:'#fff'}]} source={require('@images/Shop/back.png')}/>
                </TouchableOpacity>                
                </ImageBackground>

                    <Text style={styles.total}>Total lolo's</Text>
                    <Text style={styles.totalNo}>127</Text>
                    <View style={styles.emojys}>
                        <Image style={styles.emoj} source={require('@images/InviteFriends/2smiley.png')}></Image>
                        {/* <Image style={styles.emoj} source={require('@images/Assets/dead.png')}></Image> */}
                    </View>
                    <View style={styles.footer}>
                        <Text style={styles.send}>Send To:</Text>
                        <Text style={styles.send}>{this.state.city}, {this.state.street}, {this.state.country}</Text>
                    </View>
                    <View style={styles.button}>
                    {/* <View style={styles.line}></View> */}
                  
           
                </View>
              
            </ScrollView>
            <TouchableOpacity onPress={()=>{
                        this.props.navigator.push({
                            screen:'app.HomePage',
                            animationType:"slide-horizontal",
                            passProps: {from: true}
                        })
                    }} style={styles.btnBackground}>
                        <Text style={styles.buy}>Buy</Text>
                    </TouchableOpacity>
            </View>  
        )
    }
}
