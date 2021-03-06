import React,{Component} from 'react';
import {Container, Header, Content, Footer, FooterTab, Button,Input, Icon, Body, Right, Left,Title, Card, Badge, CardItem} from 'native-base';
import {View,Dimensions,Image,TouchableOpacity,FlatList,TextInput,Text, Platform, AsyncStorage, ActivityIndicator} from 'react-native';
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
        this.selectPhotoTapped=this.selectPhotoTapped.bind(this)
    }
    componentWillMount(){
        let uid=firebase.auth().currentUser.uid;
        let avatarSource,text,date;
        
        firebase.database().ref('users/'+uid).on('value',function(snapshot){
            avatarSource=snapshot.child('avatarurl').val();
            text=snapshot.child('fullname').val();            
            date=snapshot.child('birthday').val();
            if(text===null) text = ''
            if(date===null) date = ''         
            if(date!=='' ) this.setState({dateDisabled:false})
           this.setState({
            avatarSource,text,date
           })
          
        }.bind(this));
    }
    uploadImage = (uri, mime = 'application/octet-stream') => {
        
        return new Promise((resolve, reject) => {            
            let uploadUri = Platform.OS === 'ios' ? uri.replace('file://', '') : uri
            // const uid=firebase.auth().currentUser.uid
            
            let sessionId = new Date().getTime()
            let uploadBlob = null
            let imageRef = firebase.storage().ref('images').child(`${sessionId}`)

            fs.readFile(uploadUri, 'base64')
            .then((data) => {                
                return Blob.build(data, { type: `${mime};BASE64` })
            })
            .then((blob) => {
                uploadBlob = blob
                return imageRef.put(uploadUri, { contentType: mime })
            })
            .then(() => {
                uploadBlob.close()
                return imageRef.getDownloadURL()
            })
            .then((url) => {
                resolve(url)
            })
            .catch((error) => {
                reject(error)
            })
        })
    }

    _handleavtarEdit(cropit){
        // ImagePicker.openPicker({
        //     width: 300,
        //     height: 400,
        //     cropping: true
        //   }).then(image => {
        //     console.log(image);
        //   });
    }
    
  selectPhotoTapped() {
    const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
        skipBackup: true
      }
    };

    ImagePicker.showImagePicker(options, (response) => {
        
           
           
          this.uploadImage(response.uri)
          .then((url) => {                         
               this.setState({
                  avatarSource: url
                  });
            // let uid=firebase.auth().currentUser.uid
            // firebase.database().ref('users/'+uid).update({
            //   avatarurl:url
            // });         
          })
          .catch(error => console.log(error))
  
         
        
      });
  }

  gotoHome(){
    AsyncStorage.setItem('birthday', JSON.stringify({birthday: this.state.date, registered: true}))
    this.setState({loading: true})
    let uid =  firebase.auth().currentUser.uid;
    firebase.database().ref('users/'+uid).update({
        fullname: this.state.text,
        birthday: this.state.date,
        avatarurl: this.state.avatarSource
    })
    .then(()=>{
        this.props.navigator.resetTo({
            screen: 'app.HomePage',
            animationType: 'slide-horizontal',
            passProps: {from: true}
        })
        this.setState({loading: false})
    })
   
        
}


    render(){
        return(
            <View style={styles.container}>
                <HeaderComponent title="MY PROFILE" navigator={this.props.navigator} />
                <View style={styles.body}>

                    <TouchableOpacity  onPress={()=>{this.selectPhotoTapped()}} style={styles.avtarContainer}>
                    {this.state.avatarSource === null?
                            <Image source={require('@images/SettingMenu/avatar.png')} style={styles.avtar}/>:
                            <Image source={{uri:this.state.avatarSource}} style={[styles.avtar,{borderRadius:60}]}/>
                        }
                        <Image source={require('@images/SettingMenu/add.png')} style={[styles.add,{shadowOpacity:0.5,shadowOffset:{width:3,height:0}, shadowRadius:120}]}></Image>
                    </TouchableOpacity>

                    <View style={styles.profileInfo}>
                        <Text style={styles.nameText}>
                            Full Name
                        </Text>
                        <View style={styles.textInput}><Input value={this.state.text} style={{marginLeft:16}} returnKeyType='done' onChangeText={(text) => this.setState({text,nameText:false})}/></View>

                        <Text style={[styles.nameText,{marginTop:20}]}>
                             Birthday
                        </Text>
                        <View style={styles.textInput}>
                        <DatePicker
                        style={{marginTop:25,width:WindowWidth-100}}
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
                                this.setState({date,
                                                dateDisabled:false,
                                                color:'#FF4273',
                                                textColor:'white'
                                            })
                                        }}/>
                                        </View>
                    </View>

                </View>
                <Button disabled={this.state.text.length>0&&!this.state.dateDisabled?false:true} onPress={()=>this.gotoHome()}
                         style={[styles.buttonContainer,{backgroundColor:this.state.text.length>0&&!this.state.dateDisabled?'#FF4273':'#F0F0F0'}]}>
                        <Text style={[styles.buttonText,{color:this.state.text.length>0&&!this.state.dateDisabled?'white':'#CCCCCC'}]}>Apply Changes</Text>
                </Button>
                 {
                       this.state.loading?
                       <View style={{flex:1,width:WindowWidth, height: WindowHeight,justifyContent:"center",alignItems:'center',position:'absolute'}}>                
                            <ActivityIndicator size='large' color='#ffb100' />
                        </View>:null
                   }
            </View>
        )
    }
}