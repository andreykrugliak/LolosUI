import React, { Component } from 'react';
import {View , Image,Text,TouchableOpacity, ImageBackground, Dimensions,KeyboardAvoidingView, AsyncStorage} from 'react-native'
import {Button} from 'native-base'
import styles from './style'
import DatePicker from 'react-native-datepicker'
import { LoloLogoComponent } from '../../components/LolologoComponent/index';
let windowWidth = Dimensions.get('window').width
let windowHeight = Dimensions.get('window').height

let customStyles = {
    dateInput: {
    position:'absolute',
    left:20,
    bottom:15,
    //borderRadius:3,
    borderWidth: 0
    }
  };
export default class SignUp extends Component{
    constructor(props){
        super(props)
        this.state={
            date:'',
            disabled:true,
            color:'#F0F0F0',
            textColor:'#CCCCCC',
            dateVisible:false
        }
    }
    static navigatorStyle = {
        navBarHidden:true
      };
     
    render(){
        
        return(
            <View style={{flex:1,backgroundColor:'#fff',height:windowHeight}}>
                <LoloLogoComponent navigator={this.props.navigator} />
                <Text style={styles.bdayText}>What’s your birthday?</Text>
                <Text style={styles.bdayAlert}>Your birthday won’t be shown publicly</Text>
                

        <View style={styles.datePickerContainer}>
                <DatePicker
                        style={styles.datePicker}
                        showIcon={false}
                        customStyles={customStyles}
                        date={this.state.date}
                        mode="date"
                        placeholder=" "
                        format="DD MMMM YYYY"
                        minDate="01 JANUARY 1950"
                        maxDate="31 DECEMBER 2015"
                        confirmBtnText="confirm"
                        cancelBtnText="cancel"
                        onDateChange={(date) => {
                                this.setState({date: date,
                                                disabled:false,
                                                color:'#FF4273',
                                                textColor:'white'
                                            })
                                        }}/>
                        
                        <TouchableOpacity style={styles.imageContainer} 
                                    onPress={()=>{
                                        this.setState({
                                        date:'',
                                        disabled:true,
                                        color:'#F0F0F0',
                                        textColor:'#CCCCCC',
                                    })
                                }}>

                                <Image style={styles.crossImage} source={require('@images/LoginScreen/cross.png')}/>
                        
                        </TouchableOpacity>
        </View>

                 
                  
                    <Button onPress={()=>{
                                    AsyncStorage.setItem('birthday',JSON.stringify({birthday:this.state.date}))
                                    this.props.navigator.push({
                                        screen:'app.Phone',
                                        animationType:"slide-horizontal",
                                        passProps: {birthday: this.state.date}
                                        })
                                    }} 
                                    disabled={this.state.disabled} 
                                    style={[{backgroundColor:this.state.color},styles.buttonContainer]}>
            
                                    <Text style={[styles.buttonText,{color:this.state.textColor}]}>Next</Text>
                    </Button>
                   
                    
            </View>
        )
    }
}