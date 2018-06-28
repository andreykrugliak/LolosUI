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
            loading: true,
            url: ''
        }
    }
    componentWillMount(){
        let uid=firebase.auth().currentUser.uid;
        let fullname='';
        let self = this
        
        firebase.database().ref('users/'+uid).on('value',function(snapshot){            
            fullname=snapshot.child('fullname').val();
            if(fullname===null) text = ''            
           this.setState({
            fullname, loading: false
           })
          
        }.bind(this));
        const link = 
        new firebase.links.DynamicLink('https://www.instagram.com/lolos.me', 'h54u6.app.goo.gl')
            .android.setPackageName('com.clickers')
            .ios.setBundleId('com.clickers');

        firebase.links()
            .createDynamicLink(link)
            .then((url) => {
            // ...
                console.log(url)
                self.setState({url})
            });
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
            'messageText':`${this.state.fullname} invited you to check out the new way to earn and spend the new teenagers virtual money .check it out for free : ${this.state.url} `,
                            
            'subject':'Invite',
            'recipients':[this.state.phonenumber],
          'presentAnimated': true,
          'dismissAnimated': false
           },
        (result) => {
          switch(result) {
            case Composer.Sent:
              console.log('the message has been sent');
             
              
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
         self.props.navigator.resetTo({
                    screen:'app.HomePage',
                    animationType:"slide-horizontal",
                    passProps:{from: true,invite: true}
                })
        
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