import React, { Component } from 'react';
import { Image, View,Dimensions, Text,StyleSheet,TouchableOpacity,ActivityIndicator} from 'react-native';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
import Video from 'react-native-af-video-player'

export default class VideoPlayer extends Component{

    static navigatorStyle = {
        navBarHidden:true
    };
    constructor(props){
        super(props)
        this.state={
            videoPath:'',
            loading:true
        }
        this.player=null
    }

    render(){
        const url ='https://firebasestorage.googleapis.com/v0/b/lolos-v1.appspot.com/o/Boarderline.mp4?alt=media&token=68305c87-6676-4bc9-8b56-02328b577d85'
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
                     onError={(error)=>console.log(error)}
                     onLoad={(data)=>console.log(data)}
                     />
                 </View>   
                 <View style={{position:'absolute',right:20,top:20,}} >
                 <TouchableOpacity onPress={()=>{
                     this.props.navigator.dismissModal({
                         animationType: 'slide-down' 
                     })
                 }} > 
                     <Image source={require('@images/sliderImages/close.png')} style={{height:20,width:20,}}/>
                 </TouchableOpacity>
                 </View>  
             </View>      
         )
       }

     
    
}
