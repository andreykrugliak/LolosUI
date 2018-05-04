import React,{Component} from 'react';
import {Container, Header, Content, Footer, FooterTab, Button, Text, Icon, Body, Right, Left,Title, Card, Badge, CardItem} from 'native-base';
import {View,Dimensions,Image,TouchableOpacity,FlatList,Platform} from 'react-native';
import { HeaderComponent } from "@components/InviteFriends/HeaderComponent.js";
var WindowWidth = Dimensions.get('window').width
var WindowHeight = Dimensions.get('window').height
import styles from './style'
import firebase from 'react-native-firebase'

export default class ShippingAddress extends Component{
    constructor(){
        super()
        this.state = {
            country: '',
            street: '',
            zipcode: '',
            city: ''
        }
    }
    static navigatorStyle={
        navBarHidden:true
    }
    componentDidMount(){
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

            <View style={styles.container}>
                <HeaderComponent title="SHIPPING ADDRESS" navigator={this.props.navigator}/>
                <Text style={[styles.headText,]}>
                    Are We Good?
                </Text>
                <Text style={[styles.tagline]}>
                    Make sure this is the currect address
                </Text>

                <Text style={[styles.bodyText,]}>
                    {this.state.street}
                </Text>
                <Text style={[styles.bodyText,{marginTop:0,paddingTop:4}]}>
                    {this.state.city}, {this.state.country}, {this.state.zipcode}
                </Text>
                
                <Image style={styles.emoj} source={require('@images/HomePage/lolomailman.png')}/>

                <TouchableOpacity
                onPress={()=>{
                            this.props.navigator.push({
                                screen:'app.HomePage',
                                animationType:"slide-horizontal"
                            })
                         }}
                  style={styles.btnGoodContainer}>
        
                    <View style={styles.btnGood}>
                        <Text style={styles.btnGoodText}>We Good!</Text>
                    </View>
                </TouchableOpacity>

            </View>
        )
    }
}