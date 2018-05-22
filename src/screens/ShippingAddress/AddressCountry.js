import React,{Component} from 'react';
import {Container, Header, Content, Footer, FooterTab, Button,Input, Text, Icon, Body, Right, Left,Title, Card, Badge, CardItem} from 'native-base';
import {View,Dimensions,Image,Platform, TouchableOpacity,FlatList, TouchableHighlight} from 'react-native';
import CountryPicker, {
    getAllCountries
} from 'react-native-country-picker-modal'
import { HeaderComponent } from "@components/InviteFriends/HeaderComponent.js";
var WindowWidth = Dimensions.get('window').width
var WindowHeight = Dimensions.get('window').height
import styles from './style';
import firebase from 'react-native-firebase';
const COUNTRY_LIST = ['CA','AF',"AL",'DZ','IN', 'MX', 'US','AF','AX']

export default class Country extends Component{

    static navigatorStyle={
        navBarHidden:true
    }

    constructor(props){
        super(props)
        let userLocaleCountryCode = '1'
        const userCountryData = getAllCountries()
          .filter(country => COUNTRY_LIST.includes(country.cca2))
          .filter(country => country.cca2 === userLocaleCountryCode)
          .pop()
        console.log(userCountryData)
        let callingCode = null
        let cca2 = userLocaleCountryCode
        if (!cca2 || !userCountryData) {
          //cca2 = 'US'
          callingCode = '1'
        } else {
          callingCode = userCountryData.callingCode
        }
        
        this.state={
            disabled:true,
            inputPosition:72,
            height:WindowHeight,
            cca2,
            callingCode,
            Country:'',
            clear:true,
            selected:false,
        }
    }
    componentDidMount(){
        let uid=firebase.auth().currentUser.uid;
        let Country;
        
        firebase.database().ref('users/'+uid).on('value',function(snapshot){
            Country=snapshot.child('country').val();           
            if(Country === null) Country = ''            
           this.setState({
               Country,
              
           })
          
        }.bind(this));
    }

    next(){
        let uid = firebase.auth().currentUser.uid;
        firebase.database().ref('users/'+uid).update({
            country: this.state.Country
        })
        .then(()=>{
            this.props.navigator.push({
                screen:'app.shippingAddressCity',
                animationType:"slide-horizontal"
            })
        })
            
    }

    render(){
        return(
            <View style={[styles.container,{backgroundColor:'#f6f6f6'}]}>
                <View style={{height:this.state.height,backgroundColor:'#fff',shadowOpacity:0.3,shadowOffset:{width:0,height:1}}}>
                    <HeaderComponent title="SHIPPING ADDRESS" navigator={this.props.navigator}/>
                    <Text style={[styles.bodyText,{marginTop:29}]}>
                        Country
                    </Text>
                    <TouchableHighlight onPress={()=>this.picker.openModal()} underlayColor='transparent'>
                    <View style={[styles.inputContainer,{marginTop:Platform.OS=='android'?this.state.inputPosition:72}]}>
                        
                            <View style={styles.input}>
                                {/* <Input onTouchStart={()=>{
                                    this.picker.openModal()
                                    this.setState({height:(WindowHeight/2)-45,clear:false,inputPosition:50})}} 
                                    //placeholder="United State"
                                // placeholderTextColor="#000"
                                    value={this.state.Country} 
                                    style={{marginLeft:16}} 
                                    returnKeyType='done'
                                    /> */}
                                <Text style={{marginLeft:16}}>{this.state.Country}</Text>
                                    {
                                        this.state.clear?
                                        <TouchableOpacity style={styles.imageContainer} 
                                        onPress={()=>{
                                            this.setState({
                                            Country:'',
                                            
                                        }) }}>
                                        <Image style={styles.crossImage} source={require('@images/LoginScreen/cross.png')}/>     
                                        </TouchableOpacity>:null
                                    }
                            </View>
                        
                    </View>
                    </TouchableHighlight>
                </View>

                <View>
                <CountryPicker 
                    animationType={'slide'}
                    transparent={true}
                    styles={{
                        modalContainer:{
                            marginTop:((WindowHeight/2)+20),
                            borderTopWidth:1, 
                            borderTopColor:'#f0f0f0'
                        },
                        header:{marginTop:7},
                        itemCountry:{
                            marginLeft:20,
                            borderBottomWidth:1,
                            borderBottomColor:'#f0f0f0'
                        },
                        itemCountryName:{
                            borderBottomWidth: 1,
                            borderBottomColor: '#fff',
                        },
                        itemCountryFlag:{
                            alignItems: 'flex-start', 
                        },
                        letterText:{
                            color:'red'
                        },
                        letters:{
                            marginRight:0
                        }}} 
                  //  closeable={true}
                    ref={ref => (this.picker = ref)}
                    onClose={()=>{this.setState({
                        height:WindowHeight,
                    })
                    this.props.navigator.push({
                        screen:'app.HomePage'
                    })
                    }}
                   // onOpen={()=>{this.setState({Country:''})}}
                    onChange={value => {
                        console.log(value)
                        this.setState({ 
                            callingCode: value.callingCode,
                            Country:value.name,
                            height:WindowHeight,
                            clear:true,
                            inputPosition:72,
                            selected:true
                        })
                     
                       
                     
                    }}
                   
                    cca2={this.state.cca2}
                    translation="eng">
                        <Text style={styles.pickerHead}>
                            Popular Places
                        </Text>
                    </CountryPicker>
                </View>
                <Button onPress={()=>this.next()} disabled={this.state.Country.length>0?false:true}
                         style={[styles.buttonContainer,{backgroundColor:this.state.Country.length>0?'#FF4273':'#F0F0F0'}]}>
                                <Text style={[styles.buttonText,{color:this.state.Country.length>0?'#fff':'#CCCCCC'}]}>Next</Text>
                </Button>

            </View>
        )
    }
}  