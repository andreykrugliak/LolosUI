import React,{Component} from "react"
import {Text,View,TextInput,Image,ScrollView,TouchableHighlight, TouchableOpacity} from "react-native"
import Touchable from 'react-native-platform-touchable'
import styles from "./style"
import { HeaderComponent } from "@components/InviteFriends/HeaderComponent.js";

export default class InviteFriends extends Component{
    static navigatorStyle={
        navBarHidden : true,
        
    }
    constructor(props){
        super(props)
        this.state={
            name:this.props.name 
        }
    }
    componentDidMount(){
        console.log(this.props.name)
    }
    render(){
        return(
            <View style={styles.container}>
                <HeaderComponent title="INVITE FRIENDS" navigator={this.props.navigator}/>
                <Text style={styles.inviteText}>Send invite to</Text>
                <Text style={styles.contactName}>{this.state.name}</Text>
                <Image source={require('@images/InviteFriends/two.png')} style={styles.image2}/>
                <TouchableOpacity style={styles.button} onPress={()=>{
                    this.props.navigator.push({
                        screen:'app.HomePage',
                        animationType:"slide-horizontal"
                    })
                }}>
                    <Text style={styles.buttonText}>Next</Text>
                </TouchableOpacity>
            </View>
        )
    }
}