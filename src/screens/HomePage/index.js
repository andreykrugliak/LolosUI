import React,{Component} from 'react';
import {Container, Header, Content, Footer, FooterTab, Button, Text, Icon, Body, Right, Left,Title, Card, Badge, CardItem} from 'native-base';
import {View,Dimensions,Image,TouchableOpacity,ScrollView,Platform} from 'react-native';
import { TabViewAnimated,TabViewPagerPan,TabViewPagerScroll, TabBar, SceneMap } from 'react-native-tab-view';
import Swiper from 'react-native-deck-swiper'
var WindowWidth = Dimensions.get('window').width
var WindowHeight = Dimensions.get('window').height
import Carousel from 'react-native-snap-carousel';
import PreviewScreen from '@screens/Shop/PreviewScreen/index'
import SliderPage from '@screens/HomePage/SliderPage'
import Walllet from '@screens/HomePage/Wallet'
import styles from './style'
// const initialLayout = {
//     height: 0,
//     width: Dimensions.get('window').width,
//   };

  const images ={
      Image1:require('@images/HomePage/ActiveCart.png'),
      Image2:require('@images/HomePage/ActiveTabs.png'),
      Image3:require('@images/HomePage/ActiveHome.png'),
      Image4:require('@images/HomePage/DeactiveCart.png'),
      Image5:require('@images/HomePage/DeactiveTabs.png'),
      Image6:require('@images/HomePage/DeactiveHome.png'),
  }


  export default class TabViewExample extends React.Component {


 
    onNavigatorEvent(event)
    {
      if (event.type == 'DeepLink') {
          if(event.link == 'sidemenu') {
            this.props.navigator.toggleDrawer({
              side:'left',
              to:'closed'
          })
              this.props.navigator.push({
              screen:event.payload.screen,
              title:event.payload.title,
              animationType:"slide-horizontal"
            })

        
    //   if(event.link == 'logOut') {
        
    //       this.props.navigator.resetTo({
    //       screen:event.payload.screen,
    //       title:event.payload.title,
    //       animationType:"slide-horizontal"
    //     })
    // }
    }


    }}

    static navigatorStyle = {
        navBarHidden:true
      };
      constructor(props){
        super(props)
        this.state = {
            index: this.props.index?props.index:2,
            routes: [
                { key: '0',icon: images.Image4, iconSelected: images.Image1 },
                { key: '1', icon: images.Image5, iconSelected: images.Image2},
                { key: '2',icon: images.Image6, iconSelected: images.Image3},
            ],
        };
        this._renderScene = this._renderScene.bind(this)
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
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



         _renderScene({route}) {
             switch(route.key){
                 case '0': return <PreviewScreen   navigator={this.props.navigator}/>
                 case '1':return <Walllet navigator={this.props.navigator} />
                 case '2': return <SliderPage _handleIndexChange={this._handleIndexChange} navigator={this.props.navigator} /> 
             }
        }
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
        
          _renderPager = (props) => {
            return (Platform.OS === 'ios') ? <TabViewPagerScroll {...props} /> : <TabViewPagerPan {...props} />
           }
    
  
        render() {
          
            return (
                <View style={{height:WindowHeight,flex:1,width:WindowWidth}}>

                <TabViewAnimated
                swipeEnabled={false}
                navigationState={this.state}
                renderScene={this._renderScene}
                renderFooter={this._renderHeader}
                onIndexChange={this._handleIndexChange}
                //initialLayout={initialLayout}
                renderPager={this._renderPager}
                ></TabViewAnimated>
        
            </View>
                
            );
        }
  }


