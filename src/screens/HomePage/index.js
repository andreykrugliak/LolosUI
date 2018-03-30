import React,{Component} from 'react';
import {Container, Header, Content, Footer, FooterTab, Button, Text, Icon, Body, Right, Left,Title, Card, Badge, CardItem} from 'native-base';
import {View,Dimensions,Image,TouchableOpacity} from 'react-native';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
import Swiper from 'react-native-swiper';
var WindowWidth = Dimensions.get('window').width
var WindowHeight = Dimensions.get('window').height

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
  const FirstRoute = () =>  {
  
    return (
        <Swiper style={styles.wrapper} showsPagination={false} showsButtons={false} loop={true} > 

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

            <View style={styles.slide1}>
                <Text style={styles.title}>Invite Freinds</Text>
                <Text style={[styles.tagLine]}>on each freind get rewarded with 20 lolo’s</Text>
                <Image style={[styles.freindsSmile]} 
                    source={require('@images/HomePage/lolofreinds.png')}/>
                <Text style={[styles.baseLine]}>2 invites per day</Text>
                <TouchableOpacity style={[styles.inviteFreinds]}>
                    <Text style={[styles.buttonTextInvite]}>Invite Freinds</Text>
                </TouchableOpacity>
            </View> 

            <View style={styles.slide1}>
                <Text style={styles.tagLine}>you can see and manage all your lolo’s in your</Text>
                <Text style={styles.titleSWallte}>Smart Wallet</Text>
                <Image  style={[styles.emojiGroup]}
                source={require('@images/HomePage/emojis1.png')}/>
                <TouchableOpacity style={[styles.lookButton]}>
                        <Text style={[styles.buttonTextInvite]}>Take a Look</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.slide1}>
                <Text style={styles.title}>Buy Online</Text>
                <Text style={styles.tagLine}>just like the grownups do in our awesome marketplace </Text>
                <Image style={[styles.giftImg]}
                source={require('@images/HomePage/lologift.png')}/>
                <TouchableOpacity style={[styles.checkButton]}>
                        <Text style={[styles.buttonTextInvite]}>Check It Out</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.slide1}>
            <Text style={styles.title}>Help Our Mailman</Text>
            <Text style={styles.tagLine}>set up address before you shop in our marketplace </Text>
            <Image style={[styles.manImg]}
                source={require('@images/HomePage/lolomailman.png')}/>
            <TouchableOpacity style={[styles.setUpButton]}>
                    <Text style={[styles.buttonTextInvite]}>Set Up Address</Text>
                </TouchableOpacity>
            </View>
            </Swiper>
    )
}
    
  

     
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
        '0': FirstRoute,
        '1': FirstRoute,
        '2':FirstRoute
    });
    
  
        render() {
            console.log('width:',WindowWidth)
            console.log('Height :',WindowHeight)
            return (
                <Container style={{flex:1}}>
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
                        <Button transparent >
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
                style={{flex: 1}}
                swipeEnabled={false}
                navigationState={this.state}
                renderScene={this._renderScene}
                renderFooter={this._renderHeader}
                onIndexChange={this._handleIndexChange}
                initialLayout={initialLayout}
                ></TabViewAnimated>
        
            </Container>
                
            );
        }
  }