import React, { Component } from 'react';
import {View , Image,Text,TouchableOpacity, ImageBackground, Dimensions,KeyboardAvoidingView} from 'react-native'
import {Button} from 'native-base'
import styles from './style'
import DatePicker from 'react-native-datepicker'
import { LoloLogoComponent } from '../../components/LolologoComponent/index';
let windowWidth = Dimensions.get('window').width
let windowHeight = Dimensions.get('window').height
export default class SignUp extends Component{
    constructor(props){
        super(props)
        this.state={
            date:'',
            disabled:true,
            color:'#F0F0F0'
        }
    }
    static navigatorStyle = {
        navBarHidden:true
      };
    render(){
        
        return(
            <View style={{flex:1,height:windowHeight}}>
                <LoloLogoComponent navigator={this.props.navigator} />
                <Text style={styles.bdayText}>What’s your birthday?</Text>
                <Text style={styles.bdayAlert}>Your birthday won’t be shown publicly</Text>
                
                    <DatePicker
                        showIcon={false}
                        style={styles.datePicker}
                        date={this.state.date}
                        mode="date"
                        placeholder=" "
                        format="DD MMMM YYYY"
                        minDate="01-01-1950"
                        maxDate="31-12-2015"
                        confirmBtnText="confirm"
                        cancelBtnText="cancel"
                        customStyles={{
                        dateIcon: {
                            position: 'absolute',
                            left: 0,
                            top: 4,
                            marginLeft: 0
                        },
                        dateInput: {
                            height:60,
                            backgroundColor:'#F0F0F0',
                            
                        }
                      
                        }}
                        onDateChange={(date) => {
                            this.setState({date: date
                                ,disabled:false,color:'#FF4273'}
                                
                            )}}
                            onOpenModal={()=>{
                                <Button onPress={()=>{
                                    this.props.navigator.push({
                                        screen:'app.Phone',
                                        animationType:"slide-horizontal"
                                        })
                                    }} 
                                    disabled={this.state.disabled} 
                                    style={[{backgroundColor:this.state.color},styles.buttonContainer]}>
            
                                    <Text style={styles.buttonText}>Next</Text>
                                </Button>
                            }}
                    />
                  
                    <Button onPress={()=>{
                                    this.props.navigator.push({
                                        screen:'app.Phone',
                                        animationType:"slide-horizontal"
                                        })
                                    }} 
                                    disabled={this.state.disabled} 
                                    style={[{backgroundColor:this.state.color},styles.buttonContainer]}>
            
                                    <Text style={styles.buttonText}>Next</Text>
                                </Button>
                   
                    
            </View>
        )
    }
}