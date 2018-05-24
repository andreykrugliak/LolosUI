import React,{PureComponent} from 'react';
import {Container, Header, Content, Footer, FooterTab, Button,  Icon, Body, Right, Left,Title, Card, Badge, CardItem} from 'native-base';
import {View,Dimensions,Image,TouchableOpacity,FlatList, ActivityIndicator, Linking, Platform,Text} from 'react-native';
import Swiper from 'react-native-deck-swiper'
import Sound from 'react-native-sound'
var WindowWidth = Dimensions.get('window').width
var WindowHeight = Dimensions.get('window').height
import styles from './style';
import FCM, {FCMEvent, RemoteNotificationResult, WillPresentNotificationResult, NotificationType} from 'react-native-fcm';
import {CachedImage} from 'react-native-cached-image';
import axios from 'axios';
import firebase from 'react-native-firebase';
import RNFetchBlob from 'react-native-fetch-blob';
import index from 'react-native-swipeable';
const iphone5s = 568

const {
    fs
} = RNFetchBlob;

const baseCacheDir = fs.dirs.CacheDir + '/videocache.mp4';


const activeDownloads = {};

export default class SliderPage extends PureComponent{

static navigatorStyle = {
    navBarHidden:true
};
constructor(props){
    super(props);
    this.state={
        played:false,
        data: [],
        badge: 0,
        loading: false,
        splash: false
    }
    
    this._swipedLeft=this._swipedLeft.bind(this)
    this._swipedRight=this._swipedRight.bind(this)
    
}

 downloadVideo(fromUrl, toFile) {
   
            RNFetchBlob
                .config({path: toFile})
                .fetch('GET', fromUrl)
                .then(res => {
                    console.log('hehe',res)
                    if (Math.floor(res.respInfo.status / 100) !== 2) {
                        throw new Error('Failed to successfully download video');
                    }
                    // alert(res)
                })
                .catch(err => {
                    // alert(err)
                })
               
}
componentWillMount(){
    
    this.setState({loading: true, splash: true})
    let uid = firebase.auth().currentUser.uid, badge=0;
    
    let self = this;
    setTimeout(function(){self.setState({splash: false})},5000)
    
    firebase.database().ref('cards').on('value',snapshot=>{        
        let data = []
        data = snapshot._value.sort(function(a,b){
            
            if(a.Order>b.Order) return 1
            if(a.Order<b.Order) return -1
            return 0
        }).filter((d,i)=>{            
            d.index = i           
            return true          
        })        
      
        this.setState({data: data})
    })
    firebase.database().ref('users/'+uid).on('value',function(snapshot){
        badge=snapshot.child('badge').val();
        if(badge===undefined||badge===null) badge = 0
        this.setState({badge,loading: false})
    }.bind(this))
}
showNotification(notif){
    if(notif.notification.title===undefined||notif.notification.body===undefined) return
    let uid = firebase.auth().currentUser.uid;
    let key = new Date().getTime()
    let badge = 0
    firebase.database().ref('users/'+uid).once('value',function(snapshot){
          badge=snapshot.child('badge').val();           
          if(badge === null) badge = 0            
         firebase.database().ref('users/'+uid).update({
            badge: badge+1
          })
      });
    let updates = {};
    updates[key] = {title: notif.notification.title,body: notif.notification.body,time: key}
    firebase.database().ref('notifications/'+uid).update(updates)   
}


async componentDidMount()
{
     
    
     FCM.requestPermissions(); 
    FCM.getFCMToken().then(token => {      
        const params = {
            "to" : token,
            "notification" : {            
              "title" : "Welcome",
              "text": `Welcome to LOLO'S`,
              "badge":0, 
              "sound":"default"
            },
            "priority" : "high"
          };
          const headers = {
            'Authorization': 'key=AIzaSyCuFMtUH28h94Mt3ahb0vrOf-S3S55thkI',
            'Content-Type': 'application/json'
          };
          
            
            if(this.props.createAccount){axios(
              {
                url: 'https://fcm.googleapis.com/fcm/send',
                method:'post',
                headers: headers,
                data: params,
                 
            })}
    });     
    

    
    this.refreshTokenListener = FCM.on(FCMEvent.RefreshToken, (token) => {
      
     
    });
    
    this.notificationListener = FCM.on(FCMEvent.Notification,  (notif) => {
        
        if(notif.local_notification) return
          this.showNotification(notif)      
      })

    this.SoundLeft=await new Sound('left_swipe.mp3',Sound.MAIN_BUNDLE,(error)=>{
        if(error){
            console.log(error)
        }
    })
    this.SoundRight=await new Sound('right_swipe.mp3',Sound.MAIN_BUNDLE,(error)=>{
        if(error){
            console.log(error)
        }
        this.SoundRight.setVolume(2)
    })
}
_swipedLeft(){
    
   
    this.SoundLeft.play((onEnd)=>{
        
        this.setState({played:true})
    })
}

_swipedRight(){

    
    this.SoundRight.play((onEnd)=>console.log("played"))

}



   
    render(){
        
        if(this.state.data.length===0||this.state.loading){
            return(
                <View style={{flex:1,width:WindowWidth, height: WindowHeight,justifyContent:"center",alignItems:'center'}}>                
                    <ActivityIndicator size='large' color='#ffb100' />
                </View>
            )
        }
        let {data} = this.state;
       
    return(

    <View style={{flex:1,backgroundColor:'#F6F6F6'}}>
        <Header style={styles.headerStyle}>
        <Left style={styles.headerLeftSide}>
            <Button transparent onPress={()=>{
               
                this.props.navigator.toggleDrawer({
                    side:'left',
                    to:'open'
                })
            }}>
                <Image source={require('@images/HomePage/MenuBlack.png')}></Image>
            </Button>
        </Left>

        <Body style={styles.centerLogo}>
            <Title style={styles.headerText}>LOLO'S</Title>
        </Body>

        <Right>
            <Button transparent onPress={()=>{
                this.props.navigator.push({
                    screen:'app.Notifications',
                    animationType:"slide-horizontal"
                })
              
            }}>
                { this.state.badge !== 0?
                <View style={[styles.badgeStyle]}>
                  
                        <Text style={styles.badgeText}>{this.state.badge}</Text> 
                
                </View>:null
                }  
                <Image source={require('@images/HomePage/NOTIFICATIONWhite.png')}>
                </Image>
            </Button>
        </Right>
    </Header>
    
        <View style={{flex:1}}>
            <Swiper
                    ref={swiper => {
                    this.swiper = swiper
                    }} 
                    backgroundColor='#f0f0f0'
                    infinite
                    onSwipedLeft={()=>{this._swipedLeft()}}
                    onSwipedRight={()=>this._swipedRight()}	
                    onSwipedTop={()=>{this._swipedLeft()}}
                    onSwipedBottom={()=>this._swipedRight()}                    
                    cards={this.state.data}                  
                    cardVerticalMargin={20}                   
                    renderCard={(card)=>{
                        return(
                            <View style={[styles.videoBackground,{backgroundColor:'white'}]}>
                                <CachedImage source={{uri: card.image}} style={{width:WindowWidth-40,flex:1, resizeMode:'cover' }}/>
                                {card.video!==null&&card.video!==''&&card.video!==undefined?
                                    <TouchableOpacity  style={styles.playbutton} onPress={()=>this.props.navigator.showModal({
                                                                    screen: 'app.VideoCard', 
                                                                    passProps: {videoUrl: card.video}
                                                                })}>
                                <Image source={require('@images/sliderImages/Artboard.png')} style={{width:60,height:60}} />
                                </TouchableOpacity>:null}
                                {Platform.OS=='ios'?
                                card.appstore!==undefined&&card.appstore!==null&&card.appstore!==''?
                                <TouchableOpacity 
                                style={[styles.button]} onPress={()=>Linking.openURL(card.appstore)}>
                                        <Text style={[styles.buttonTextInvite]}>{card.buttontext}</Text>
                                </TouchableOpacity>:null :
                                card.googlestore!==undefined&&card.googlestore!==null&&card.googlestore!==''?
                                <TouchableOpacity 
                                style={[styles.button]} onPress={()=>Linking.openURL(card.googlestore)}>
                                        <Text style={[styles.buttonTextInvite]}>{card.buttontext}</Text>
                                </TouchableOpacity>:null
                                }
                                   
                                {
                                    card.LinkButtonText!==undefined&&card.LinkButtonText!==null&&card.LinkButtonText!==''?
                                    <TouchableOpacity style={styles.button} onPress={()=>{
                                            if(card.LinkButtonLink!==undefined){
                                                this.props.navigator.push({
                                                    screen:`${card.LinkButtonLink}`,
                                                    animationType:"slide-horizontal"                                                 
                                                }) 
                                            }
                                        }}>
                                        <Text style={[styles.buttonTextInvite]}>{card.LinkButtonText}</Text>
                                    </TouchableOpacity>:null
                                }

                                {
                                    this.state.data.map((d,i)=>{
                                        if(card.index===0){
                                            if(i>card.index+4) return
                                        }else{
                                            if(i<card.index+4 || i>card.index+4) return
                                        }                                       
                                        return(
                                            <CachedImage source={{uri: d.image}} style={{width:WindowWidth-40,resizeMode:'cover',opacity:0 }}/>
                                        )
                                    })
                                }
                            </View>
                        )
                    }}
                    animateOverlayLabelsOpacity={false}
                    animateCardOpacity={false}
                >
            
            </Swiper>
        </View>
        
    </View>
    )}}