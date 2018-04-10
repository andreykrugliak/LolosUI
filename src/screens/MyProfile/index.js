import React,{Component} from 'react';
import {Container, Header, Content, Footer, FooterTab, Button,Input, Icon, Body, Right, Left,Title, Card, Badge, CardItem} from 'native-base';
import {View,Dimensions,Image,TouchableOpacity,FlatList,TextInput,Text} from 'react-native';
import { HeaderComponent } from "@components/InviteFriends/HeaderComponent.js";
import Swiper from 'react-native-deck-swiper'
var WindowWidth = Dimensions.get('window').width
var WindowHeight = Dimensions.get('window').height
import styles from './style'
import ImagePicker from 'react-native-image-crop-picker';


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
        }
        this._handleavtarEdit=this._handleavtarEdit.bind(this)
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

    render(){
        return(
            <View style={styles.container}>
                <HeaderComponent title="MY PROFILE" navigator={this.props.navigator} />
                <View style={styles.body}>

                    <TouchableOpacity onPress={()=>{
                        this._handleavtarEdit(false)
                    }} style={styles.avtarContainer}>
                        <Image source={require('@images/SettingMenu/avatar.png')} style={styles.avtar}></Image>
                        <Image source={require('@images/SettingMenu/add.png')} style={[styles.add,{shadowOpacity:0.5,shadowOffset:{width:3,height:0}, shadowRadius:120}]}></Image>
                    </TouchableOpacity>

                    <View style={styles.profileInfo}>
                        <Text style={styles.nameText}>
                            Full Name
                        </Text>
                        <View style={styles.textInput}><Input value={this.state.firstName} style={{marginLeft:16}} returnKeyType='done' onChangeText={(text) => this.setState({firstName:text})}/></View>

                        <Text style={[styles.nameText,{marginTop:20}]}>
                             Birthday
                        </Text>
                        <View style={styles.textInput}><Input value={this.state.birthday} style={{marginLeft:16}} returnKeyType='done' onChangeText={(text) => this.setState({birthday:text})}/></View>
                    </View>

                </View>
                <Button onPress={()=>{
                            this.props.navigator.push({
                                screen:'app.HomePage',
                                animationType:"slide-horizontal"
                            })
                         }}style={[styles.buttonContainer]}>
                                <Text style={[styles.buttonText]}>Apply Changes</Text>
                </Button>
            </View>
        )
    }
}