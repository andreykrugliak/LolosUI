import React,{Component} from 'react';
import {Container, Header, Content, Footer, FooterTab, Button, Text, Icon, Body, Right, Left,Title, Card, Badge, CardItem} from 'native-base';
import {View,Dimensions,Image,TouchableOpacity,ScrollView} from 'react-native';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
import Swiper from 'react-native-deck-swiper'
var WindowWidth = Dimensions.get('window').width
var WindowHeight = Dimensions.get('window').height
import Carousel from 'react-native-snap-carousel';
import PreviewScreen from '@screens/Shop/PreviewScreen'
import styles from './style'
const initialLayout = {
    height: 0,
    width: Dimensions.get('window').width,
  };

  const images ={
      Image1:require('@images/HomePage/ActiveCart.png'),
      Image2:require('@images/HomePage/ActiveTabs.png'),
      Image3:require('@images/HomePage/ActiveHome.png'),
      Image4:require('@images/HomePage/DeactiveCart.png'),
      Image5:require('@images/HomePage/DeactiveTabs.png'),
      Image6:require('@images/HomePage/DeactiveHome.png'),
  }




  const FirstRoute=()=>{
        return(
            
                <Swiper
                
                        backgroundColor='#f0f0f0'
                        infinite
                        onSwiped={this.onSwiped}
                        onTapCard={this.swipeLeft}
                        cards={['1', '2', '3','4','5']}
                        cardIndex={0}
                        cardVerticalMargin={20}
                        //cardHorizonyalMargin={20}
                        renderCard={renderCard}
                        //onSwipedAll={this.onSwipedAllCards}
                        //stackSize={3}
                        //stackSeparation={15}
                        //style={styles.swiper}
                        
                        animateOverlayLabelsOpacity={false}
                        animateCardOpacity={false}
                >
                
        </Swiper>
       
       
        )}

        const wallet=()=>{
            return(
                <ScrollView style={{flex:1,paddingBottom:150}}>
                    <Text style={styles.date}>12.12.17</Text>
                    <Text style={styles.currentWalletText}>Current in my Wallet</Text>
                    <Text style={styles.currentWalletNum}>34</Text>
                    <Image style={styles.twoSmiley} source={require('@images/InviteFriends/2smiley.png')}/>
                      
                        <View style={{flexDirection:'row',marginTop:55,justifyContent:'space-between',marginHorizontal:24}}>
                            <View style={styles.box}>
                                <View style={styles.soonBox}>
                                    <Text style={styles.soonText}>Soon</Text>
                                </View>
                                <Text style={styles.requestText}>Request lolo's</Text>
                            </View>   
                            <View style={styles.box}>
                            <View style={styles.soonBox}>
                                    <Text style={styles.soonText}>Soon</Text>
                                </View>
                                <Text style={styles.requestText}>Give lolo's</Text>
                            </View>  
                        </View> 
                        <View style={[styles.backGround,{ marginTop:25}]}>
                            </View> 
                        <View style={{height:150}}>
                            <Image style={styles.smileyIcon} source={require('@images/HomePage/wallet/smiley.png')}/>
                            <Image style={styles.greenIcon} source={require('@images/HomePage/wallet/greenIcon.png')}/>
                            <View style={styles.flexColumn}>
                                    <Text style={styles.days}>2 DAYS AGO</Text>
                                    <Text style={styles.age}>+ 18</Text>
                                    <Text style={styles.sendText}>Recived from Mom</Text>
                            </View>
                        </View>
                        <View style={styles.backGround}>
                            </View> 
                        <View style={{height:150}}>
                            <Image style={styles.sadIcon} source={require('@images/HomePage/wallet/sadIcon.png')}/>
                            <Image style={styles.redIcon} source={require('@images/HomePage/wallet/redIcon.png')}/>
                            <View style={styles.flexColumn}>
                                    <Text  style={styles.days}>27.11.17</Text>
                                    <Text style={styles.age}>- 42</Text>
                                    <Text style={styles.sendText}>Bought Item</Text>
                            </View>
                        </View>
                        <View style={styles.backGround}>
                            </View> 
                  
                </ScrollView>
            )
        }


       const renderCard = (cardIndex) => {
        
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
                    <TouchableOpacity onPress={()=>{}}style={[styles.button]}>
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
                        <TouchableOpacity style={[styles.button]}>
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
                        <TouchableOpacity style={[styles.button]}>
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


           




  export default class TabViewExample extends React.Component {
    static navigatorStyle = {
        navBarHidden:true
      };
      constructor(props){
        super(props)
        this.state = {
            index: 2,
            routes: [
                { key: '0',icon: images.Image4, iconSelected: images.Image1 },
                { key: '1', icon: images.Image5, iconSelected: images.Image2},
                { key: '2',icon: images.Image6, iconSelected: images.Image3},
            ],
        };
      }
    
    _renderIcon = ({route}) => {
        return <Image  source={route.key == (this.state.index).toString()? route.iconSelected : route.icon}/>; 
    };
    
    _handleIndexChange = index => this.setState({ index });

    _renderHeader = props => <TabBar 
        style={{backgroundColor:"#fff",height:73}}
        labelStyle={{fontSize: 10, color: '#000'}} 
        {...props} 
        renderIcon = {this._renderIcon} 
        indicatorStyle={{ height: 0 }}
         />;



    _renderScene = SceneMap({
        '0': PreviewScreen ,
        '1': wallet,
        '2': FirstRoute
    });
 
        
          onSwipedAllCards = () => {
            this.setState({
              swipedAllCards: true
            })
          };
        
          swipeBack = () => {
            if (!this.state.isSwipingBack) {
              this.setIsSwipingBack(true, () => {
                this.swiper.swipeBack(() => {
                  this.setIsSwipingBack(false)
                })
              })
            }
          };
        
          setIsSwipingBack = (isSwipingBack, cb) => {
            this.setState(
              {
                isSwipingBack: isSwipingBack
              },
              cb
            )
          };
        
          swipeLeft = () => {
            this.swiper.swipeLeft()
          };
        
    
  
        render() {
        
            return (

               
                <View style={{height:WindowHeight,flex:1,width:WindowWidth}}>
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
               
                  
                <TabViewAnimated
             
                swipeEnabled={false}
                navigationState={this.state}
                renderScene={this._renderScene}
                renderFooter={this._renderHeader}
                onIndexChange={this._handleIndexChange}
                initialLayout={initialLayout}
                ></TabViewAnimated>
        
            </View>
                
            );
        }
  }


