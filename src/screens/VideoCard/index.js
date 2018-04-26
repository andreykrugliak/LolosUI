import React, { Component } from 'react';
import { Image, View,Dimensions, Text,StyleSheet} from 'react-native';
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
            {/* <Text>hi</Text> */}

            <Video 
            
            source={require('@sliderVideo/borderlaine_1.mp4')}   // Can be a URL or a local file.
    
            ref={(ref) => {
              this.player = ref
            }}                                      // Store reference
            rate={1.0}                              // 0 is paused, 1 is normal.
            volume={1.0}                            // 0 is muted, 1 is normal.
            muted={false}                           // Mutes the audio entirely.
            paused={false}                          // Pauses playback entirely.
            resizeMode="contain"                      // Fill the whole screen at aspect ratio.*
            repeat={false}                           // Repeat forever.
            playInBackground={false}                // Audio continues to play when app entering background.
            playWhenInactive={false}                // [iOS] Video continues to play when control or notification center are shown.
            ignoreSilentSwitch={"ignore"}           // [iOS] ignore | obey - When 'ignore', audio will still play with the iOS hard silent switch set to silent. When 'obey', audio will toggle with the switch. When not specified, will inherit audio settings as usual.
            progressUpdateInterval={250.0}          // [iOS] Interval to fire onProgress (default to ~250ms)
            onLoadStart={this.loadStart}            // Callback when video starts to load
            onLoad={this.setDuration}               // Callback when video loads
            onProgress={this.setTime}               // Callback every ~250ms with currentTime
            onEnd={()=>{
                this.props.navigator.dismissModal({
                    animationType: 'slide-down' // 'none' / 'slide-down' , dismiss animation for the modal (optional, default 'slide-down')
                  });
            }}                      // Callback when playback finishes
            onError={this.videoError}               // Callback when video cannot be loaded
            onBuffer={this.onBuffer}                // Callback when remote video is buffering
            onTimedMetadata={this.onTimedMetadata}  // Callback when the stream receive some metadata
            style={styles.backgroundVideo} />
            </View>

    //  // Later to trigger fullscreen
    //  this.player.presentFullscreenPlayer()
     
    //  // To set video position in seconds (seek)
    //  this.player.seek(0)
     
    //  // Later on in your styles..

           
        )
    }
}
var styles = StyleSheet.create({
    backgroundVideo: {

        flex:1,
    }})