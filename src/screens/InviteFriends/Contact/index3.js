import React,{Component} from "react"
import {Text,View,TextInput,Image,ScrollView,TouchableHighlight, TouchableOpacity, ActivityIndicator} from "react-native"
import Touchable from 'react-native-platform-touchable'
import styles from "./style"
import { HeaderComponent } from "@components/InviteFriends/HeaderComponent.js";
import Composer from 'react-native-message-composer';
import firebase from 'react-native-firebase';

export default class InviteFriends extends Component{
    static navigatorStyle={
        navBarHidden : true,
        
    }
    constructor(props){
        super(props)
        this.state={
            name:this.props.name,
            phonenumber: this.props.phonenumber ,
            fullname: '',
            loading: true
        }
    }
    componentWillMount(){
        let uid=firebase.auth().currentUser.uid;
        let fullname='';
        
        firebase.database().ref('users/'+uid).on('value',function(snapshot){            
            fullname=snapshot.child('fullname').val();
            if(fullname===null) text = ''            
           this.setState({
            fullname, loading: false
           })
          
        }.bind(this));
    }
    componentDidMount(){
        console.log(this.props.name)
        Composer.messagingSupported(s=>{
        //  alert(JSON.stringify(s))
       })
    }
    sendInvite(){
       let self = this      
      Composer.composeMessageWithArgs(
        {
            'messageText':`${this.state.fullname} invited you to check out the new way to earn and spend the new teenagers virtual money .check it out for free : https://www.instagram.com/lolos.me `,
                            
            'subject':'Invite',
            'recipients':[this.state.phonenumber],
          'presentAnimated': true,
          'dismissAnimated': false
           },
        (result) => {
          switch(result) {
            case Composer.Sent:
              console.log('the message has been sent');
              // self.setState({selectedUsers:[],selectedUserNames:[]});
              self.props.navigator.push({
                    screen:'app.HomePage',
                    animationType:"slide-horizontal"
                })
              break;
            case Composer.Cancelled:
              console.log('user cancelled sending the message');
              break;
            case Composer.Failed:
              console.log('failed to send the message');
              break;
            case Composer.NotSupported:
              console.log('this device does not support sending texts');
              break;
            default:
              console.log('something unexpected happened');
              break;
          }
        }
      );
        
        
    }
    render(){
        return(
            <View style={styles.container}>
                <HeaderComponent title="INVITE FRIENDS" navigator={this.props.navigator}/>
                <Text style={styles.inviteText}>Send invite to</Text>
                <Text style={styles.contactName}>{this.state.name}</Text>
                <Image source={require('@images/InviteFriends/two.png')} style={styles.image2}/>
                <TouchableOpacity style={styles.button} onPress={()=>this.sendInvite()}>
                    <Text style={styles.buttonText}>Next</Text>
                </TouchableOpacity>
                {
                    this.state.loading? 
                    <View style={styles.loadingView}>
                        <ActivityIndicator size='large' color='#ffce00' />    
                    </View>:null
                }
            </View>
        )
    }
}