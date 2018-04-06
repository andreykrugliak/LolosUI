
import React,{Component} from 'react';
import {Container, Header, Content, Footer, FooterTab, Button, Text, Icon, Body, Right, Left,Title, Card, Badge, CardItem} from 'native-base';
import {View,Dimensions,Image,TouchableOpacity,FlatList} from 'react-native';
import Swiper from 'react-native-deck-swiper'
var WindowWidth = Dimensions.get('window').width
var WindowHeight = Dimensions.get('window').height

import styles from './style'



export default class SliderPage extends Component{

    static navigatorStyle = {
        navBarHidden:true
    };
    constructor(props){
        super(props);
        this.renderCard=this.renderCard.bind(this)
    }


renderCard(cardIndex){
    
switch(cardIndex)
{
    case '1':{
        return(
            
        <View style={styles.slide1}>
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
        <Text style={styles.title}>Invite Freinds</Text>
        <Text style={[styles.tagLine]}>on each freind get rewarded with 20 lolo’s</Text>
        <Image style={[styles.freindsSmile]} 
            source={require('@images/HomePage/lolofreinds.png')}/>
        <Text style={[styles.baseLine]}>2 invites per day</Text>
        <TouchableOpacity onPress={()=>{
                    this.props.navigator.push({
                    screen:'app.InviteFriendsHome',
                    passProps:{navigator:this.props.navigator}
                })
        }}style={[styles.button]}>
            <Text style={[styles.buttonTextInvite]}>Invite Freinds</Text>
        </TouchableOpacity>
    </View> 
        )};

    case '3':{
        return(

        <View style={styles.slide1}>
            <Text style={styles.tagLine}>you can see and manage all your lolo’s in your</Text>
            <Text style={styles.titleSWallte}>Smart Wallet</Text>
            <Image  style={[styles.emojiGroup]}
            source={require('@images/HomePage/emojis1.png')}/>
            <TouchableOpacity onPress={()=>{
                    this.props.navigator.push({
                    screen:'app.Wallet',
                    passProps:{navigator:this.props.navigator}
                }) }}
                     style={[styles.button]}>
                    <Text style={[styles.buttonTextInvite]}>Take a Look</Text>
            </TouchableOpacity>
        </View>
        )};

    case '4':{
        return(
        <View style={styles.slide1}>
            <Text style={styles.title}>Buy Online</Text>
            <Text style={styles.tagLine}>just like the grownups do in our awesome marketplace </Text>
            <Image style={[styles.giftImg]}
            source={require('@images/HomePage/lologift.png')}/>
            <TouchableOpacity onPress={()=>{
                    this.props.navigator.push({
                    screen:'app.PreviewScreen',
                    passProps:{navigator:this.props.navigator}
                })}} 
            
            style={[styles.button]}>
                    <Text style={[styles.buttonTextInvite]}>Check It Out</Text>
            </TouchableOpacity>
        </View>

        )};
    case '5':{
        return(
        <View style={styles.slide1}>
            <Text style={styles.title}>Help Our Mailman</Text>
            <Text style={styles.tagLine}>set up address before you shop in our marketplace </Text>
            <Image style={[styles.manImg]}
                source={require('@images/HomePage/lolomailman.png')}/>
            <TouchableOpacity style={[styles.button]}>
                    <Text style={[styles.buttonTextInvite]}>Set Up Address</Text>
            </TouchableOpacity>
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
                this.props.navigator.toggleDrawer({
                    side:'right',
                    to:'open'
                })
            }}>
                <Badge style={[styles.badgeStyle]}>
                    <View>
                        <Text style={styles.badgeText}>1</Text>
                    </View>
                </Badge>  
                <Image source={require('@images/HomePage/NOTIFICATIONWhite.png')}>
                </Image>
            </Button>
        </Right>
    </Header>
        <View>
            <Swiper
                    
                    backgroundColor='#f0f0f0'
                    infinite
                    onSwiped={this.onSwiped}
                    onTapCard={this.swipeLeft}
                    cards={['1', '2', '3','4','5']}
                    cardIndex={0}
                    cardVerticalMargin={20}
                    //cardHorizonyalMargin={20}
                    renderCard={this.renderCard}
                    //onSwipedAll={this.onSwipedAllCards}
                    //stackSize={3}
                    //stackSeparation={15}
                    //style={styles.swiper}
                    animateOverlayLabelsOpacity={false}
                    animateCardOpacity={false}
            >
            
    </Swiper>
    </View>
    </View>
    )}}