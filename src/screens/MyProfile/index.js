import React,{Component} from 'react';
import {Container, Header, Content, Footer, FooterTab, Button,Input, Icon, Body, Right, Left,Title, Card, Badge, CardItem} from 'native-base';
import {View,Dimensions,Image,TouchableOpacity,FlatList,TextInput,Text} from 'react-native';
import { HeaderComponent } from "@components/InviteFriends/HeaderComponent.js";
import Swiper from 'react-native-deck-swiper'
var WindowWidth = Dimensions.get('window').width
var WindowHeight = Dimensions.get('window').height
import styles from './style'
import DatePicker from 'react-native-datepicker'
import ImagePicker from 'react-native-image-picker';
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

        }
        this.selectPhotoTapped=this.selectPhotoTapped.bind(this)
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
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled photo picker');
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      }
      else {
        let source = { uri: response.uri };


        this.setState({
          avatarSource: source
        });
      }
    });
  }


    render(){
        return(
            <View style={styles.container}>
                <HeaderComponent title="MY PROFILE" navigator={this.props.navigator} />
                <View style={styles.body}>

                    <TouchableOpacity  onPress={()=>{this.selectPhotoTapped()}} style={styles.avtarContainer}>
                        <Image source={require('@images/SettingMenu/avatar.png')} style={styles.avtar}></Image>
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
                <Button disabled={this.state.text.length == 0?true:this.state.dateDisabled == true?true:false} onPress={()=>{
                            this.props.navigator.push({
                                screen:'app.HomePage',
                                animationType:"slide-horizontal"
                            })
                         }}style={[styles.buttonContainer,{backgroundColor:this.state.text.length == 0?'#F0F0F0':this.state.dateDisabled == true?'#F0F0F0':'#FF4273'}]}>
                                <Text style={[styles.buttonText,{color:this.state.text.length == 0?'#CCCCCC':this.state.dateDisabled == true?'#CCCCCC':'white'}]}>Apply Changes</Text>
                </Button>
            </View>
        )
    }
}