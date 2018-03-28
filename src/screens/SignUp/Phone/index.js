import DeviceInfo from 'react-native-device-info'
import React,{Component} from 'react'
import { StyleSheet,
  Text,
  View,
  StatusBarIOS,Image
} from 'react-native'
import CountryPicker, {
  getAllCountries
} from 'react-native-country-picker-modal'
import {Input,Button} from 'native-base'
import styles from './style'
import { LoloLogoComponent } from '../../../components/LolologoComponent/index';
const NORTH_AMERICA = ['CA','AF',"AL",'IN', 'MX', 'US','AF','AX']

export default class Phone extends Component{

    static navigatorStyle={
        navBarHidden:true
    }
  constructor(props) {
    //StatusBarIOS.setHidden(true)
    super(props)
    let userLocaleCountryCode = '91'
    const userCountryData = getAllCountries()
      .filter(country => NORTH_AMERICA.includes(country.cca2))
      .filter(country => country.cca2 === userLocaleCountryCode)
      .pop()
    console.log(userCountryData)
    let callingCode = null
    let cca2 = userLocaleCountryCode
    if (!cca2 || !userCountryData) {
      cca2 = 'IN'
      callingCode = '91'
    } else {
      callingCode = userCountryData.callingCode
    }
    
    this.state = {
      cca2,
      callingCode,
      backgroundColor:'#F0F0F0',
      color:'#CCCCCC',
      text:'',
      disabled:true
    }
    
  }
  render() {
    return (
        <View style={{flex:1}}>
            <LoloLogoComponent navigator={this.props.navigator} />
            <Text style={styles.phoneNum}>Enter your mobile number</Text>
            <Text style={styles.alert}>Will send you a confirmation code</Text>
        
        <View style={styles.inputContainer}>
      <View style={styles.countryContainer}>
       
       <View style={{height:60,width:105,flexDirection:'row',justifyContent:'space-around',alignItems:"center",backgroundColor:'#F0F0F0'}}>
        <CountryPicker
        
          countryList={NORTH_AMERICA}
          onChange={value => {
            this.setState({ cca2: value.cca2, callingCode: value.callingCode })
            
          }}
          
          cca2={this.state.cca2}
          translation="eng"
          
        />
        {<Text style={{fontFamily:'lato',fontSize:18,color:'#000000',marginTop:5}}>+{this.state.callingCode}</Text>}
        <Image style={styles.triangle} source={require('@images/LoginScreen/triangle.png')}/>
        </View> 
          
        
      </View>
      <View style={styles.input}>
        <Input keyboardType = { "phone-pad" }  onChangeText={(text) => this.setState({text,color:'white',disabled:false,backgroundColor:'#FF4273'})}/>
      </View>
      </View>
      <Button onPress={()=>{
        this.props.navigator.push({
          screen:'app.OtpScreen'
        })
      }} disabled={this.state.text.length<=0?true:false} style={[styles.buttonContainer,this.state.text.length<=0?{backgroundColor:'#F0F0F0'}:{backgroundColor:'#FF4273'}]}>
          <Text style={[styles.buttonText,this.state.text.length<=0?{color:'#CCCCCC'}:{color:'white'}]}>Next</Text>
      </Button>
      </View>
    )
  }
}

