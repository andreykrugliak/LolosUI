import React,{Component} from 'react'
import { 
    Text,
    View,
    Image,
    TouchableOpacity,
    Dimensions
  } from 'react-native'
import {Input,Button} from 'native-base'
import styles from './style'
import { LoloLogoComponent } from '../../../components/LolologoComponent/index';
let windowHeight=Dimensions.get('window').height


export default class OtpScreen extends Component{
    constructor(props){
        super(props)
        this.state={
            text:''
        }
    }
    static navigatorStyle={
        navBarHidden:true
    }
    render(){
        return(

            <View style={{flex:1,backgroundColor:'#fff'}}>
                <LoloLogoComponent navigator={this.props.navigator} />
                <View style={styles.container}>
                    <Text style={styles.codeHeader}>Enter your code</Text>

                    <View style={styles.textInput}>
                        <Input value={this.state.text} style={{marginLeft:16}}  returnKeyType='done' keyboardType = { "numeric" } onChangeText={(text) => this.setState({text})}/>
                        <TouchableOpacity onPress={()=>{
                            this.setState({
                                text:''
                            })
                        }}>
                            <Image style={styles.crossImage} source={require('@images/LoginScreen/cross.png')}/>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.retry}>Send me again</Text>
                </View>
                <Button onPress={()=>{
                    this.props.navigator.push({
                        screen:'app.HomePage',
                        animationType:"slide-horizontal"
                    })
                }} style={[styles.buttonContainer]}>
                        <Text style={[styles.buttonText]}>Done</Text>
                </Button>
            </View>
                

            
        )
    }
}