import React,{Component} from "react"
import {Text,View,TextInput,Image,ScrollView,TouchableHighlight, TouchableOpacity, Linking, Clipboard} from "react-native"
import Touchable from 'react-native-platform-touchable'
import styles from "./style"
import { HeaderComponent } from "@components/InviteFriends/HeaderComponent.js";
import firebase from 'react-native-firebase'
import DropdownAlert from 'react-native-dropdownalert';

export default class InviteFriends extends Component{
    static navigatorStyle = {
        navBarHidden:true
      };
    constructor(){
        super()
        this.state={
            link: ''
        }
    }
    componentWillMount(){
        let self = this
        let uid = firebase.auth().currentUser.uid;
        const link = 
        new firebase.links.DynamicLink(`https://itunes.apple.com/app/id1391950519?invitedby=${uid}`, 'h54u6.app.goo.gl')
            .android.setPackageName('com.clickers')
            .ios.setBundleId('5BQ434DB6T.com.clickers')
            .ios.setAppStoreId('1391950519')

        firebase.links()
           .createShortDynamicLink(link, 'UNGUESSABLE')
            // .createDynamicLink(link)
            .then((url) => {
            // ...
                console.log(url)
                self.setState({link: url})
            });
       
    }

    next(){
        if(this.state.link === '') return
        this.dropdown.alertWithType('warn','','Link successfully copied to clipboard')
        Clipboard.setString(this.state.link)
        // this.sendNOtification()
        // const invitation = new firebase.invites.Invitation('Hello', 'How are you?');
        // invitation.setDeepLink('https://h54u6.app.goo.gl/T8Ap');        
        // const invitationIds = await firebase.invites().sendInvitation(invitation);
                    // this.props.navigator.push({
                    //     screen:'app.InviteFriendsContactSearch',
                    //     animationType:"slide-horizontal"
                    // })
    }

    render(){
        return(
            <View style={[styles.container]}>
                <HeaderComponent title="INVITE FRIENDS" navigator={this.props.navigator}/>
                {/* <Text style={styles.headerText}>Boost Your Wallet</Text> */}
                <Text style={styles.subText}>copy and share the link with your friends, for each successful invite earn up to 20 Lolos</Text>
                <Image source={require('../../../images/Artboard.png')} style={styles.image}/>
                <View style={styles.linkView}>
                    <Text numberOfLines={1} style={styles.link}>{this.state.link}</Text>
                </View>
                <Text style={styles.invite}>This link will expire in 48 hours</Text>
                <TouchableOpacity style={styles.button} onPress={()=>this.next()}>
                    <Text style={styles.buttonText} >Copy Link</Text>
                </TouchableOpacity>

                <DropdownAlert 
                    ref={ref=>this.dropdown = ref}
                    showCancel={false}
                    renderImage={()=>this.renderImage()}
                    useNativeDriver={true}
                    messageStyle={{fontSize: 18, textAlign: 'center',color: 'white', fontWeight: 'bold'}}
                    closeInterval={2000}
                />
            </View>
        )
    }

     renderImage(){
          return(
              <Image source={require('@images/Assets/em.png')} style={{width:1,height:1,}} />
          )
      }
    sendNOtification(){       
        //this.dropdown.alertWithType('warn','Link successfully copied to clipboard')       
       alert()
      }
}