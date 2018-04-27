import React, { Component } from 'react';
import { Image, View,Dimensions, Text,StyleSheet,TouchableOpacity} from 'react-native';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
import Video from 'react-native-af-video-player'
import myVideo from '@sliderVideo/mortal_combat_1.mp4'

export default class VideoPlayer extends Component{

    static navigatorStyle = {
        navBarHidden:true
    };
    constructor(props){
        super(props)
        this.player=null
    }

    render(){
        const url = 'https://d3959tuydafzg6.cloudfront.net/1/travelogue2015.mp4'
       // const url= 'https://www.youtube.com/watch?v=g4KvogUiES0&feature=youtu.be'
        return(
           <View style={{flex:1}}> 
                <View style={{backgroundColor:'#fff',flex:1}}>
                    <Video
                    autoPlay
                    resizeMode='contain'
                    url={url}
                    style={{flex:1}}
                    onEnd={()=>{
                        this.props.navigator.dismissModal({
                            animationType: 'slide-down' 
                        })
                    }}
                    />
                </View>   
                <View style={{position:'absolute',right:20,top:20,}} >
                <TouchableOpacity onPress={()=>{
                    this.props.navigator.dismissModal({
                        animationType: 'slide-down' 
                    })
                }} > 
                    <Image source={require('@images/sliderImages/close.png')} style={{height:20,width:20}}/>
                </TouchableOpacity>
                </View>  
            </View>      
        )
    }
}
