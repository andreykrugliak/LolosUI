import React,{Component} from 'react';
import {Container, Header, Content, Footer, FooterTab, Button, Text, Icon, Body, Right, Left,Title, Card, Badge, CardItem} from 'native-base';
import {View,Dimensions,Image,TouchableOpacity,FlatList} from 'react-native';
import Swiper from 'react-native-deck-swiper'
import Sound from 'react-native-sound'
var WindowWidth = Dimensions.get('window').width
var WindowHeight = Dimensions.get('window').height
import styles from './style'
const iphone5s = 568


export default class SliderPage extends Component{

static navigatorStyle = {
    navBarHidden:true
};
constructor(props){
    super(props);
    this.state={
        played:false
    }
    this.renderCard=this.renderCard.bind(this)
    this._swipedLeft=this._swipedLeft.bind(this)
    this._swipedRight=this._swipedRight.bind(this)
    this._handleCardTap=this._handleCardTap.bind(this)
}
async componentDidMount()
{
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
    
    console.log(this.SoundLeft)
    this.SoundLeft.play((onEnd)=>{
        console.log("played")
        this.setState({played:true})
    })
}

_swipedRight(){

    console.log(this.SoundRight)
    this.SoundRight.play((onEnd)=>console.log("played"))

}

_handleCardTap(index){
    console.log("handelTap:",index)
    if(index=='9'){
       this.props.navigator.showModal({
            screen: 'app.VideoCard', // unique ID registered with Navigation.registerScreen
          });
    }
}

renderCard(cardIndex){

switch(cardIndex)
{
    
      case '1':{
        return(
            
        <View style={[styles.slide1,{shadowOpacity:0.3, shadowRadius:2,shadowColor:'rgba(0,0,0,0.20)',shadowOffset:{width:0,height:2}}]}>
            {/* <Image source={require('@images/sliderImages/IC_Product_Sale.png')} style={{width:WindowWidth-40,flex:1, resizeMode:'cover' }}/> */}
        <Image style={[styles.topImage]}
            source={require('@images/HomePage/em_10.png')}/>
        <Text style={styles.titleSlide1}>Congratulations</Text>
        <Text style={[styles.tagLine]}>your first 20 lolo’s are on their way, Stay Tune…</Text>
        <View style={[styles.swipeTextView]}>
            <Image style={[styles.leftArrow]} 
            source = {require('@images/HomePage/Arrow.png')}/>
            <Text style={[styles.swipeText]}>swipe</Text>
            <Image style={[styles.rightArrow]}
            source = {require('@images/HomePage/Arrow.png')}/>
        </View>
    </View>
    
        )};

    case '2':{
        return(
    <View style={styles.slide1}>
        {/* <Image source={require('@images/sliderImages/IC_Success_Invitation_sent.png')} style={{width:WindowWidth-40,flex:1, resizeMode:'cover' }}/> */}

        <Text style={styles.title}>Invite Freinds</Text>
        <Text style={[styles.tagLine]}>on each freind get rewarded with 20 lolo’s</Text>
        <Image style={[styles.freindsSmile]} 
            source={require('@images/HomePage/lolofreinds.png')}/>
        <Text style={[styles.baseLine]}>2 invites per day</Text>
        <TouchableOpacity onPress={()=>{
                    this.props.navigator.push({
                    screen:'app.InviteFriendsHome',
                    animationType:"slide-horizontal"
                })
        }}style={[styles.button]}>
            <Text style={[styles.buttonTextInvite]}>Invite Freinds</Text>
        </TouchableOpacity>
    </View> 
        )};

    case '3':{
        return(

        <View style={styles.slide1}>
        {/* <Image source={require('@images/sliderImages/IC_Success_purchase_item.png')} style={{width:WindowWidth-40,flex:1, resizeMode:'cover' }}/> */}

            <Text style={[styles.tagLine,{marginTop:WindowHeight<= iphone5s?15:22,}]}>you can see and manage all your lolo’s in your</Text>
            <Text style={styles.titleSWallte}>Smart Wallet</Text>
            <Image  style={[styles.emojiGroup]}
            source={require('@images/HomePage/emojis1.png')}/>
            <TouchableOpacity onPress={()=>{
                this.props._handleIndexChange(1)

                //     this.props.navigator.push({
                //     screen:'app.Wallet',
                //     // passProps:{navigator:this.props.navigator}
                // }) 
            }}
                     style={[styles.button]}>
                    <Text style={[styles.buttonTextInvite]}>Take a Look</Text>
            </TouchableOpacity> 
        </View>
        )};

    case '4':{
        return(
        <View style={styles.slide1}>
        {/* <Image source={require('@images/sliderImages/IC_Product_plus_CTA.png')} style={{width:WindowWidth-40,flex:1, resizeMode:'cover' }}/> */}

         <Text style={styles.title}>Buy Online</Text>
            <Text style={styles.tagLine}>just like the grownups do in our awesome marketplace </Text>
            <Image style={[styles.giftImg]}
        source={require('@images/HomePage/lologift.png')}/>
            <TouchableOpacity onPress={()=>{
                    this.props.navigator.push({
                    screen:'app.PreviewScreen',
                    animationType:"slide-horizontal"
                    // passProps:{navigator:this.props.navigator}
                })}} 
            
            style={[styles.button]}>
                    <Text style={[styles.buttonTextInvite]}>Check It Out</Text>
            </TouchableOpacity> 
        </View>

        )};
    case '5':{
        return(
        <View style={styles.slide1}>
                {/* <Image source={require('@images/sliderImages/IC_Video_promotion.png')} style={{width:WindowWidth-40,flex:1, resizeMode:'cover' }}/> */}

            <Text style={styles.title}>Help Our Mailman</Text>
            <Text style={styles.tagLine}>set up address before you shop in our marketplace </Text>
            <Image style={[styles.manImg]}
                source={require('@images/HomePage/lolomailman.png')}/>
            <TouchableOpacity style={[styles.button]}>
                    <Text style={[styles.buttonTextInvite]}>Set Up Address</Text>
            </TouchableOpacity> 
        </View>
        )};
    case '6':{
        return(
            
        <View style={[styles.slide1,{shadowOpacity:0.3, shadowRadius:2,shadowColor:'rgba(0,0,0,0.20)',shadowOffset:{width:0,height:2}}]}>
            <Image source={require('@images/sliderImages/IC_Product_Sale.png')} style={{width:WindowWidth-40,flex:1, resizeMode:'cover' }}/>
        {/* <Image style={[styles.topImage]}
            source={require('@images/HomePage/em_10.png')}/>
        <Text style={styles.titleSlide1}>Congratulations</Text>
        <Text style={[styles.tagLine]}>your first 20 lolo’s are on their way, Stay Tune…</Text>
        <View style={[styles.swipeTextView]}>
            <Image style={[styles.leftArrow]} 
            source = {require('@images/HomePage/Arrow.png')}/>
            <Text style={[styles.swipeText]}>swipe</Text>
            <Image style={[styles.rightArrow]}
            source = {require('@images/HomePage/Arrow.png')}/>
        </View> */}
    </View>
    
        )};

    case '7':{
        return(
    <View style={styles.slide1}>
        <Image source={require('@images/sliderImages/IC_Success_Invitation_sent.png')} style={{width:WindowWidth-40,flex:1, resizeMode:'cover' }}/>

        {/* <Text style={styles.title}>Invite Freinds</Text>
        <Text style={[styles.tagLine]}>on each freind get rewarded with 20 lolo’s</Text>
        <Image style={[styles.freindsSmile]} 
            source={require('@images/HomePage/lolofreinds.png')}/>
        <Text style={[styles.baseLine]}>2 invites per day</Text>
        <TouchableOpacity onPress={()=>{
                    this.props.navigator.push({
                    screen:'app.InviteFriendsHome',
                    animationType:"slide-horizontal"
                })
        }}style={[styles.button]}>
            <Text style={[styles.buttonTextInvite]}>Invite Freinds</Text>
        </TouchableOpacity> */}
    </View> 
        )};

    case '8':{
        return(

        <View style={styles.slide1}>
        <Image source={require('@images/sliderImages/IC_Success_purchase_item.png')} style={{width:WindowWidth-40,flex:1, resizeMode:'cover' }}/>

            {/* <Text style={[styles.tagLine,{marginTop:WindowHeight<= iphone5s?15:22,}]}>you can see and manage all your lolo’s in your</Text>
            <Text style={styles.titleSWallte}>Smart Wallet</Text>
            <Image  style={[styles.emojiGroup]}
            source={require('@images/HomePage/emojis1.png')}/>
            <TouchableOpacity onPress={()=>{
                this.props._handleIndexChange(1)

                //     this.props.navigator.push({
                //     screen:'app.Wallet',
                //     // passProps:{navigator:this.props.navigator}
                // }) 
            }}
                     style={[styles.button]}>
                    <Text style={[styles.buttonTextInvite]}>Take a Look</Text>
            </TouchableOpacity> */}
        </View>
        )};

    case '9':{
        return(
        <View style={styles.slide1}>
        <Image source={require('@images/sliderImages/IC_Product_plus_CTA.png')} style={{width:WindowWidth-40,flex:1, resizeMode:'cover' }}/>

            {/* <Text style={styles.title}>Buy Online</Text>
            <Text style={styles.tagLine}>just like the grownups do in our awesome marketplace </Text>
            <Image style={[styles.giftImg]}
        source={require('@images/HomePage/lologift.png')}/>*/}
            <TouchableOpacity 
            style={[styles.button]}>
                    <Text style={[styles.buttonTextInvite]}>Get It Now!</Text>
            </TouchableOpacity> 
        </View>

        )};
    case '10':{
        return(
        <View style={styles.slide1}>
                <Image source={require('@images/sliderImages/IC_Video_promotion.png')} style={{width:WindowWidth-40,flex:1, resizeMode:'cover' }}/>
                
            {/* <Text style={styles.title}>Help Our Mailman</Text>
            <Text style={styles.tagLine}>set up address before you shop in our marketplace </Text>
            <Image style={[styles.manImg]}
                source={require('@images/HomePage/lolomailman.png')}/>
            <TouchableOpacity style={[styles.button]}>
                    <Text style={[styles.buttonTextInvite]}>Set Up Address</Text>
            </TouchableOpacity> */}
        </View>
        )};
        case '11':{
            return(
            <View style={styles.slide1}>
                    <Image source={require('@images/sliderImages/IC_Download_App.png')} style={{width:WindowWidth-40,flex:1, resizeMode:'cover' }}/>
                    
                {/* <Text style={styles.title}>Help Our Mailman</Text>
                <Text style={styles.tagLine}>set up address before you shop in our marketplace </Text>
                <Image style={[styles.manImg]}
            source={require('@images/HomePage/lolomailman.png')}/>*/}
                <TouchableOpacity style={[styles.button]}>
                        <Text style={[styles.buttonTextInvite]}>Download & Play</Text>
                </TouchableOpacity>
            </View>
            )};
        case '12':{
            return(
            <View style={styles.slide1}>
                    <Image source={{uri:'https://firebasestorage.googleapis.com/v0/b/lolos-v1.appspot.com/o/giphy1.gif?alt=media&token=03c6f15e-ed55-4854-9e39-8226b6a670c3'}} style={{width:WindowWidth-40,flex:1, resizeMode:'cover' }}/>
    
                {/* <Text style={styles.title}>Help Our Mailman</Text>
                <Text style={styles.tagLine}>set up address before you shop in our marketplace </Text>
                <Image style={[styles.manImg]}
                    source={require('@images/HomePage/lolomailman.png')}/>
                <TouchableOpacity style={[styles.button]}>
                        <Text style={[styles.buttonTextInvite]}>Set Up Address</Text>
                </TouchableOpacity> */}
            </View>
            )};
        case '13':{
            return(
            <View style={styles.slide1}>
                    <Image source={{uri:'https://firebasestorage.googleapis.com/v0/b/lolos-v1.appspot.com/o/giphy2.gif?alt=media&token=adc2566b-cf7e-4c23-96ed-674340c17d22'}} style={{width:WindowWidth-40,flex:1, resizeMode:'cover' }}/>
                    {/* <Image source={{uri:'https://media.giphy.com/media/3oFzmoXxE7Dbj16zzW/source.gif'}} style={{width:WindowWidth-40,flex:1, resizeMode:'cover' }}/> */}
                    
                {/* <Text style={styles.title}>Help Our Mailman</Text>
                <Text style={styles.tagLine}>set up address before you shop in our marketplace </Text>
                <Image style={[styles.manImg]}
                    source={require('@images/HomePage/lolomailman.png')}/>
                <TouchableOpacity style={[styles.button]}>
                        <Text style={[styles.buttonTextInvite]}>Set Up Address</Text>
                </TouchableOpacity> */}
            </View>
            )};
}}







    render(){
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
                // this.props.navigator.toggleDrawer({
                //     side:'right',
                //     to:'open',
                //      })
            }}>
                <Badge style={[styles.badgeStyle]}>
                  
                        {/* <Text style={styles.badgeText}>1</Text> */}
                
                </Badge>  
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
                    onTapCard={(index)=>{this._handleCardTap(index)}}
                    cards={['1', '2', '3','4','5','6','7','8','9','10','11','12','13']}
                    cardIndex={0}
                    cardVerticalMargin={20}
                   
                    //cardHorizonyalMargin={20}
                    renderCard={this.renderCard}
                    animateOverlayLabelsOpacity={false}
                    animateCardOpacity={false}
            >
            
    </Swiper>
    </View>
    </View>
    )}}