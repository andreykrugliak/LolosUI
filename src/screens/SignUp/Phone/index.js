import DeviceInfo from 'react-native-device-info'
import React,{Component} from 'react'
import { StyleSheet,
  Text,
  View,
  StatusBarIOS,Image,TouchableOpacity,TouchableWithoutFeedback
} from 'react-native'
import CountryPicker, {
  getAllCountries
} from 'react-native-country-picker-modal'
import {Input,Button} from 'native-base'
import styles from './style'
import { LoloLogoComponent } from '../../../components/LolologoComponent/index';
import firebase from 'react-native-firebase';
const COUNTRY_LIST = ['CA','AF',"AL",'DZ','IN', 'MX', 'US','AF','AX']

export default class Phone extends Component{

    static navigatorStyle={
        navBarHidden:true
    }
  constructor(props) {
    //StatusBarIOS.setHidden(true)
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
      cca2 = 'US'
      callingCode = '1'
    } else {
      callingCode = userCountryData.callingCode
    }
    this.unsubscribe = null;
    this.state = {
      cca2,
      callingCode,
      backgroundColor:'#F0F0F0',
      color:'#CCCCCC',
      text:'',
      disabled:true
    }
    
  }
  componentDidMount(){
     this.unsubscribe = firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          this.setState({ user: user.toJSON() });
        } else {
          // User has been signed out, reset the state
          this.setState({
            user: null,
            message: '',
            codeInput: '',
            phoneNumber: '+44',
            confirmResult: null,
          });
        }
      });
  }
  componentWillUnmount() {
    //  if (this.unsubscribe) this.unsubscribe();
  }

  countryPicker(){
    
      <CountryPicker
        
          
          onChange={value => {
            this.setState({ cca2: value.cca2, callingCode: value.callingCode })
            
          }}
        
          cca2={this.state.cca2}
          translation="eng"
          
        />
    
  }
  phoneSignUp(){
      let self = this
      firebase.auth().signInWithPhoneNumber('+'+this.state.callingCode+this.state.text)
      .then(confirmResult=>{
        self.props.navigator.push({
          screen:'app.OtpScreen',
          animationType:"slide-horizontal",
          passProps:{confirmResult: confirmResult}
        })
      })
      .catch(error=>{
        // alert(error.message)
      })
        
      }
  render() {
    return (
        <View style={{flex:1,backgroundColor:'#fff'}}>
            <LoloLogoComponent navigator={this.props.navigator} />
            <Text style={styles.phoneNum}>Enter your mobile number</Text>
            <Text style={styles.alert}>Will send you a confirmation code</Text>
        
        <View style={styles.inputContainer}>
      <View style={styles.countryContainer}>
       
       <TouchableOpacity onPress={() => this.picker.openModal() } style={{height:60,width:105,flexDirection:'row',justifyContent:'space-around',alignItems:"center",backgroundColor:'#F0F0F0',borderRadius:3}}>
        <CountryPicker
          ref={ref => (this.picker = ref)}
          
          onChange={value => {
            this.setState({ cca2: value.cca2, callingCode: value.callingCode })
            
          }}
          
          cca2={this.state.cca2}
          translation="eng"
          
        />
        {<Text style={{fontFamily:'Lato-Regular',fontSize:18,color:'#000000',marginTop:5}}>+{this.state.callingCode}</Text>}
        <Image style={styles.triangle} source={require('@images/LoginScreen/triangle.png')}/>
        </TouchableOpacity> 
          
        
      </View>
      <View style={styles.input}>
            
            <Input  value={this.state.text} style={{marginTop:7}}  returnKeyType='done' keyboardType="numeric"  onChangeText={(text) => this.setState({text,color:'white',disabled:false,backgroundColor:'#FF4273'})}/>
            
            <TouchableOpacity style={styles.imageContainer} 
                                    onPress={()=>{
                                        this.setState({
                                        text:'',
                                        
                                    })
                                }}>

              <Image style={styles.crossImage} source={require('@images/LoginScreen/cross.png')}/>
                        
            </TouchableOpacity>
      </View>
      </View>
      <Button onPress={()=>this.phoneSignUp()} disabled={this.state.text.length<=0?true:false} style={[styles.buttonContainer,this.state.text.length<=0?{backgroundColor:'#F0F0F0'}:{backgroundColor:'#FF4273'}]}>
          <Text style={[styles.buttonText,this.state.text.length<=0?{color:'#CCCCCC'}:{color:'white'}]}>Next</Text>
      </Button>
      </View>
    )
  }
}

