import React, { Component } from 'react';
import { Image, View,Dimensions, Text,StyleSheet,TouchableOpacity} from 'react-native';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
import Video from 'react-native-video';



export default class VideoPlayer extends Component{

    static navigatorStyle = {
        navBarHidden:true
    };
    constructor(props){
        super(props)
        this.player=null
    }


    render(){
        return(
            <View style={{backgroundColor:'#fff',flex:1}}>
        
            </View>           
        )
    }
}
var styles = StyleSheet.create({
    backgroundVideo: {
      flex:1
    }})