import React, { Component } from 'react';
import { Image, View,Dimensions, Text,StyleSheet,TouchableOpacity,ActivityIndicator, WebView} from 'react-native';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
// import Video from 'react-native-af-video-player'
import Video from 'react-native-video'

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
        const url ='https://firebasestorage.googleapis.com/v0/b/lolos-v1.appspot.com/o/Clash%20Royale%20Official%20Epic%20Comeback%20Trailer.mp4?alt=media&token=81b14dfd-e6b7-4584-a4ed-f48a7f2a1121'
         return(
            <View style={{flex:1}}> 
                 <View style={{backgroundColor:'#000',flex:1}}>
                     {/* <Video
                       //autoPlay  
                     resizeMode='contain'
                     source={{uri:this.props.videoUrl}}
                    style={{flex:1}}
                     onEnd={()=>{
                         this.props.navigator.dismissModal({
                             animationType: 'slide-down' 
                         })
                     }}
                     onError={(error)=>console.log(error)}
                     onLoad={(data)=>console.log('++--',data)}
                     onLoadStart={(d)=>console.log('++--',d)}
                     progressUpdateInterval={250}
                     onPress={(d)=>console.log('++--',d)}
                     playWhenInactive={false}
                     /> */}
                     <WebView
                        javaScriptEnabled={true}
                        domStorageEnabled={true}
                        source={{uri: this.props.videoUrl}}
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
