import React,{Component} from 'react';
import {Container, Header, Content, Footer, FooterTab, Button,Input, Icon, Body, Right, Left,Title, Card, Badge, CardItem} from 'native-base';
import {View,Dimensions,Image,TouchableOpacity,FlatList,TextInput,Text, Platform, AsyncStorage, ActivityIndicator , ScrollView} from 'react-native';
import { HeaderComponent } from "@components/InviteFriends/HeaderComponent.js";
import Swiper from 'react-native-deck-swiper'
var WindowWidth = Dimensions.get('window').width
var WindowHeight = Dimensions.get('window').height
import styles from './style'
import DatePicker from 'react-native-datepicker'
import ImagePicker from 'react-native-image-picker';
import firebase from 'react-native-firebase';
import RNFetchBlob from 'react-native-fetch-blob';
let customStyles = {
    dateInput: {
    position:'absolute',
    left:20,
    bottom:15,
    //borderRadius:3,
    borderWidth: 0,
    //height:60
    
    }
  };
  const Blob = RNFetchBlob.polyfill.Blob
  const fs = RNFetchBlob.fs
export default class MyProfile extends Component{

    static navigatorStyle={
        navBarHidden:true
    }
    

    constructor(props)
    {
        super(props)
        this.state={
            firstName:'',
            birthday:'',
            text:'',
            date:'',
            dateDisabled:true,
            color:'#F0F0F0',
            textColor:'#CCCCCC',
            dateVisible:false,
            nameText:true,
            buttonDisabled:true,
            avatarSource: null,
            loading: false

        }
       
    }
    componentWillMount(){
        let uid = firebase.auth().currentUser.uid;
        firebase.database().ref('users/'+uid).update({
            got_target: true
        })
    }    

    
    
 

  gotoHome(){
        AsyncStorage.setItem('birthday', JSON.stringify({birthday: this.state.date, registered: true}))
        this.setState({loading: true})
        let uid =  firebase.auth().currentUser.uid; 
    }


    render(){
        return(
            <View style={styles.container}>
                <HeaderComponent title="HOW IT WORKS" navigator={this.props.navigator} />
                <ScrollView style={styles.body}>
                    <Text style={styles.LifeTimeText}>Lifetime{'\n'}Earning's Program</Text>
                    <Image source={require('@images/Onboarding/WalletMoney.png')} style={styles.walletImage}/>
                    <Text style={{fontSize:25,alignSelf:'center',marginVertical:20,fontWeight:'500',fontFamily:'Lato'}}>what does it mean?</Text>
                    <View style={{width:WindowWidth,padding:15,backgroundColor:'rgba(33,33,33,0.07)'}}>
                        <Text style={{fontSize:17,fontWeight:'400',opacity:0.8,fontFamily:'Lato'}}>Lifetime earning program means that every user who joined by your invitation
                            will pay a small fee to you on any reward he will earn as long as he uses Lolo's.
                            {'\n'}{'\n'}
                            That means that the more friends you will successfully invite to Lolo's the bigger 
                            income you will make and without lifting a finger.
                        </Text>
                    </View>
                    <Text style={{alignSelf:'center',fontFamily:'Lato',marginTop:25,fontWeight:'500',fontSize:15}}>THAT'S YOU</Text>
                    <Image source={require('../../images/arrowsimg.png')} style={styles.walletImage1}/>
                    <Text style={{fontSize:25,alignSelf:'center',marginVertical:20,fontWeight:'500',fontFamily:'Lato'}}>what's the next?</Text>
                    <View style={{width:WindowWidth,padding:15,backgroundColor:'rgba(33,33,33,0.07)'}}>
                        <Text style={{fontSize:17,fontWeight:'400',opacity:0.8,fontFamily:'Lato'}}>
                            Start inviting all your friends and build your income base, that easy!
                        </Text>
                    </View>
                    <TouchableOpacity style={styles.button} onPress={()=>{
                        this.props.navigator.push({
                            screen:'app.InviteFriendsHome',
                            animationType:"slide-horizontal"
                        })
                    }}>
                        <Text style={styles.buttonText}>Invite Friends</Text>
                    </TouchableOpacity>
                </ScrollView>
                {/* <Button disabled={this.state.text.length>0&&!this.state.dateDisabled?false:true} onPress={()=>this.gotoHome()}
                         style={[styles.buttonContainer,{backgroundColor:this.state.text.length>0&&!this.state.dateDisabled?'#FF4273':'#F0F0F0'}]}>
                        <Text style={[styles.buttonText,{color:this.state.text.length>0&&!this.state.dateDisabled?'white':'#CCCCCC'}]}>Apply Changes</Text>
                </Button> */}
                
            </View>
        )
    }
}